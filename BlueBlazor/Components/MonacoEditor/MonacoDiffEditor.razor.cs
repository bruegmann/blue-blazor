using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

/// <summary>
/// A Blazor component wrapper for the Monaco Diff Editor (the diff editor that powers VS Code).
/// Provides two-way binding.
/// </summary>
public partial class MonacoDiffEditor : BlueComponentBase, IAsyncDisposable
{
    private ElementReference _element;
    private IJSObjectReference? _module;
    private DotNetObjectReference<MonacoDiffEditor>? _dotNetRef;
    private readonly string _id = Guid.NewGuid().ToString();
    private string? _currentValue;

    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    /// <summary>
    /// The original value (text content) to compare against in the diff editor.
    /// </summary>
    [Parameter]
    public string OriginalValue { get; set; } = "";

    /// <summary>
    /// The current value (text content) in the diff editor.
    /// Supports two-way binding.
    /// </summary>
    [Parameter]
    public string CurrentValue { get; set; } = "";

    [Parameter]
    public EventCallback<string> CurrentValueChanged { get; set; }

    /// <summary>
    /// The height of the editor (CSS value, e.g., "200px", "50vh").
    /// </summary>
    [Parameter]
    public string Height { get; set; } = "200px";

    /// <summary>
    /// Determines whether the overview ruler (right-side scrollbar with change indicators) is rendered.
    /// </summary>
    [Parameter]
    public bool RenderOverviewRuler { get; set; } = false;

    [Parameter]
    public bool ReadOnly { get; set; } = false;

    [Parameter]
    public bool RenderSideBySide { get; set; } = true;

    /// <summary>
    /// When enabled, differences in leading/trailing whitespace are ignored in the diff comparison.
    /// </summary>
    [Parameter]
    public bool IgnoreTrimWhitespace { get; set; } = false;

    /// <summary>
    /// When enabled, long lines are wrapped within the editor instead of scrolling horizontally.
    /// </summary>
    [Parameter]
    public bool WordWrap { get; set; } = false;

    protected override void OnInitialized()
    {
        _currentValue = CurrentValue;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/MonacoEditor/MonacoDiffEditor.razor.js");
            _dotNetRef = DotNetObjectReference.Create(this);
            await _module.InvokeVoidAsync("Initialize", _id, _element, _dotNetRef, OriginalValue, CurrentValue, ReadOnly, RenderSideBySide, IgnoreTrimWhitespace, RenderOverviewRuler, WordWrap ? "on" : "off");
        }
    }
    protected override async Task OnParametersSetAsync()
    {
        if (_currentValue != CurrentValue && _module is not null)
        {
            _currentValue = CurrentValue;
            await _module.InvokeVoidAsync("SetModifiedValue", _id, CurrentValue);
        }
    }

    [JSInvokable]
    public async Task InvokeChange(string value)
    {
        _currentValue = value;
        await CurrentValueChanged.InvokeAsync(value);
    }

    public async ValueTask DisposeAsync()
    {
        if (_module is not null)
        {
            await _module.InvokeVoidAsync("Destroy", _id);
            await _module.DisposeAsync();
        }
        _dotNetRef?.Dispose();
    }

}