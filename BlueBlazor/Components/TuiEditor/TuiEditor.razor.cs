using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

/// <summary>
/// Wrapper for [Toast UI Editor](https://github.com/nhn/tui.editor/tree/master) for Blazor.
/// Allows to edit markdown in a WYSIWYG editor.
/// 
/// The editor JavaScript class is preconfigured for our own needs.
/// Toast UI offers way more options than we cover up with this wrapper, but more can be added at anytime.
/// 
/// A slightly customized theme for Toast UI Editor comes as isolated CSS for this component (TuiEditor.razor.css).
/// Necessary JavaScript will dynamically loaded. So everything should "just work". 
/// </summary>
public partial class TuiEditor : ComponentBase, IDisposable
{
    private ElementReference _element;
    private IJSObjectReference? _module;
    private string _id = Guid.NewGuid().ToString();

    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

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
            await Initialize(_element);
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

    public async Task Initialize(ElementReference element)
    {
        if (_module is not null)
        {
            await _module.InvokeVoidAsync("Initialize", _id, element, DotNetObjectReference.Create(this), Value, Language, Height, AutoFocus, Placeholder);
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

    public void Dispose()
    {
        if (_module is not null)
        {
            _module.InvokeVoidAsync("Destroy", _id);
        }
    }
}
