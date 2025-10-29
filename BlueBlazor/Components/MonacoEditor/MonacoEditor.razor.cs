using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

/// <summary>
/// A Blazor component wrapper for the Monaco Editor (the code editor that powers VS Code).
/// Provides two-way binding, language selection, and integration with JavaScript for advanced editing features.
/// </summary>
public partial class MonacoEditor : BlueComponentBase, IDisposable
{
    private ElementReference _element;
    private IJSObjectReference? _module;
    private string _id = Guid.NewGuid().ToString();

    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    private string? _value;

    /// <summary>
    /// The current value (text content) of the editor.
    /// Supports two-way binding.
    /// </summary>
    [Parameter]
    public string Value { get; set; } = "";

    [Parameter]
    public EventCallback<string> ValueChanged { get; set; }

    /// <summary>
    /// The language to use for syntax highlighting and IntelliSense in the Monaco Editor.
    /// Examples: "csharp", "javascript", "json", "html", etc.
    /// </summary>
    [Parameter]
    public string? Language { get; set; }

    /// <summary>
    /// The theme to use for the Monaco Editor.
    /// Examples: "vs-dark", "vs-light", or custom themes.
    /// </summary>
    [Parameter]
    public string? Theme { get; set; }

    [Parameter]
    public bool ReadOnly { get; set; } = false;

    /// <summary>
    /// The height of the editor (CSS value, e.g., "200px", "50vh").
    /// </summary>
    [Parameter]
    public string Height { get; set; } = "200px";


    /// <summary>
    /// Event triggered when the user presses Ctrl+Enter (or Cmd+Enter on Mac) inside the editor.
    /// Useful for "apply" or "submit" actions.
    /// </summary>
    [Parameter]
    public EventCallback OnApply { get; set; }

    protected override void OnInitialized()
    {
        _value = Value;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            // Load the Monaco Editor JavaScript module and initialize the editor instance.
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/MonacoEditor/MonacoEditor.razor.js");
            await Initialize(_element);
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        // Update the editor content if the bound value changes from outside.
        if (_value != Value)
        {
            _value = Value;
            if (_module is not null)
            {
                await _module.InvokeVoidAsync("SetValue", _id, Value);
            }
        }
    }

    /// <summary>
    /// Initializes the Monaco Editor instance via JS interop.
    /// </summary>
    public async Task Initialize(ElementReference element)
    {
        if (_module is not null)
        {
            await _module.InvokeVoidAsync("Initialize", _id, element, DotNetObjectReference.Create(this), Value, Language, Theme, ReadOnly);
        }
    }

    /// <summary>
    /// Called from JS when the editor content changes.
    /// Updates the bound value and notifies parent components.
    /// </summary>
    [JSInvokable]
    public async Task InvokeChange(string value)
    {
        _value = value;
        await ValueChanged.InvokeAsync(value);
    }

    /// <summary>
    /// Called from JS when the user presses Ctrl+Enter (or Cmd+Enter).
    /// Triggers the OnApply event.
    /// </summary>
    [JSInvokable]
    public async Task InvokeApply()
    {
        await OnApply.InvokeAsync();
    }

    /// <summary>
    /// Cleans up the Monaco Editor instance via JS interop.
    /// </summary>
    public void Dispose()
    {
        if (_module is not null)
        {
            _module.InvokeVoidAsync("Destroy", _id);
        }
    }
}