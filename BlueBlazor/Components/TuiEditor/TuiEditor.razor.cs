using BlueBlazor.Extensions;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

/// <summary>
/// Wrapper for <see href="https://github.com/nhn/tui.editor/tree/master">Toast UI Editor</see> for Blazor.
/// Allows to edit markdown in a WYSIWYG editor.
/// 
/// The editor JavaScript class is preconfigured for our own needs.
/// Toast UI offers way more options than we cover up with this wrapper, but more can be added at anytime.
/// 
/// A slightly customized theme for Toast UI Editor comes as isolated CSS for this component (TuiEditor.razor.css).
/// Necessary JavaScript will dynamically loaded. So everything should "just work". 
/// </summary>
public partial class TuiEditor : ComponentBase, IAsyncDisposable
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    public static readonly List<List<TuiEditorToolbarItemName>> DEFAULT_TOOLBAR_ITEM_GROUPS = [
        [TuiEditorToolbarItemName.Heading, TuiEditorToolbarItemName.Bold, TuiEditorToolbarItemName.Italic, TuiEditorToolbarItemName.Strike],
        [TuiEditorToolbarItemName.Hr, TuiEditorToolbarItemName.Quote],
        [TuiEditorToolbarItemName.Ul, TuiEditorToolbarItemName.Ol, TuiEditorToolbarItemName.Task, TuiEditorToolbarItemName.Indent, TuiEditorToolbarItemName.Outdent],
        [TuiEditorToolbarItemName.Link]
    ];

    private ElementReference _element;
    private IJSObjectReference? _module;
    private DotNetObjectReference<TuiEditor>? _dotNetObject;
    private readonly string _id = Guid.NewGuid().ToString();
    private bool _isDisposing;

    private List<TuiEditorToolbarItem> _customToolbarItems = [];

    private string? _value;
    [Parameter]
    public string Value { get; set; } = "";

    [Parameter]
    public EventCallback<string> ValueChanged { get; set; }

    /// <summary>
    /// The language to use for the editor.
    /// By default the `lang` attribute by the `&lt;html&gt;` element will be picked.
    /// Blue Blazor ships language packs for de-de and fr-fr. More languages are available on [GitHub](https://github.com/nhn/tui.editor/tree/master).
    /// </summary>
    [Parameter]
    public string? Language { get; set; }

    [Parameter]
    public string Height { get; set; } = "200px";

    [Parameter]
    public string? Placeholder { get; set; }

    /// <summary>
    /// Will be fired when user presses Ctrl (or Control) and Enter together.
    /// </summary>
    [Parameter]
    public EventCallback OnApply { get; set; }

    [Parameter]
    public RenderFragment? CustomToolbarItems { get; set; }

    [Parameter]
    public List<List<TuiEditorToolbarItemName>> ToolbarItemGroups { get; set; } = DEFAULT_TOOLBAR_ITEM_GROUPS;

    [Parameter(CaptureUnmatchedValues = true)]
    public IDictionary<string, object>? AdditionalAttributes { get; set; }

    [CascadingParameter(Name = "AutoFocus")]
    protected bool AutoFocus { get; set; }

    protected override void OnInitialized()
    {
        _value = Value;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/tui-editor/toastui-editor-all.min.js");
            await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/tui-editor/i18n/de-de.js");
            await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/tui-editor/i18n/fr-fr.js");
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/TuiEditor/TuiEditor.razor.js");
            if (_module is not null)
            {
                _dotNetObject = DotNetObjectReference.Create(this);

                List<List<string>> toolbarItemGroupsStringified = [];
                foreach (var group in ToolbarItemGroups)
                {
                    var g = new List<string>();
                    foreach (var item in group)
                    {
                        g.Add(item.ToAttributeValue() ?? "");
                    }
                    toolbarItemGroupsStringified.Add(g);
                }

                await _module.InvokeVoidAsync("Initialize", _id, _element, _dotNetObject, Value, Language, Height, AutoFocus, Placeholder, toolbarItemGroupsStringified);

                // Insert in reverse because TOAST UI inserts by GroupIndex/ItemIndex (default: 0),
                // so declared ToolbarItem components keep their intended visual order.
                for (int i = _customToolbarItems.Count - 1; i >= 0; i--)
                {
                    var item = _customToolbarItems[i];
                    await _module.InvokeVoidAsync("InsertToolbarItem", _id, item.NameValue, _dotNetObject,
                        item.GroupIndex, item.ItemIndex, item.Tooltip, item.Text, item.IconClass, item.PopoverTarget, item.Class, item.Style);
                }
            }
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        if (_value != Value)
        {
            _value = Value;
            if (_module is not null)
            {
                await _module.InvokeVoidAsync("SetValue", _id, Value);
            }
        }
    }

    internal void AddToolbarItem(TuiEditorToolbarItem item)
    {
        _customToolbarItems.Add(item);
    }

    internal async Task RemoveToolbarItem(TuiEditorToolbarItem item)
    {
        _customToolbarItems.Remove(item);
        if (_isDisposing || _module is null) return;

        try
        {
            await _module.InvokeVoidAsync("RemoveToolbarItem", _id, item.NameValue);
        }
        catch (ObjectDisposedException)
        {
            // Komponente/JS-Referenz wird bereits abgebaut.
        }
        catch (JSDisconnectedException)
        {
            // Bei WASM/Disconnect während Dispose ignorierbar.
        }
    }

    [JSInvokable]
    public async Task InvokeChange(string value)
    {
        _value = value;
        await ValueChanged.InvokeAsync(value);
    }

    [JSInvokable]
    public async Task InvokeApply()
    {
        await OnApply.InvokeAsync();
    }

    [JSInvokable]
    public async Task InvokeToolbarItemClick(string name)
    {
        foreach (var item in _customToolbarItems)
        {
            if (item.NameValue == name && item.OnClick.HasDelegate)
            {
                await item.OnClick.InvokeAsync();
            }
        }
    }

    public async ValueTask DisposeAsync()
    {
        _isDisposing = true;

        var module = _module;
        _module = null;

        if (module is not null)
        {
            try
            {
                await module.InvokeVoidAsync("Destroy", _id);
            }
            catch (ObjectDisposedException) { }
            catch (JSDisconnectedException) { }

            await module.DisposeAsync();
        }

        _dotNetObject?.Dispose();
    }
}

public enum TuiEditorToolbarItemName
{
    Heading,
    Bold,
    Italic,
    Strike,
    Hr,
    Quote,
    Ul,
    Ol,
    Task,
    Indent,
    Outdent,
    Table,
    Image,
    Link,
    Code,
    Codeblock
}