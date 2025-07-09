using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

/// <summary>
/// A combination of [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API), [Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning) and styles of Menu Item.
/// In some browsers, Anchor Positioning doesn't work yet. If you want to support them, you need to implement a polyfill or fallback styles.
/// </summary>
public partial class Dropdown : IDisposable
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    [Inject]
    private NavigationManager NavigationManager { get; set; } = default!;

    private ElementReference _element;
    private IJSObjectReference? _module;
    private string _id = $"Dropdown_{Guid.NewGuid()}";

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public bool Draggable { get; set; } = false;

    /// <summary>
    /// Extends class name of the dropdown menu.
    /// </summary>
    [Parameter]
    public string? DropdownClass { get; set; }

    /// <summary>
    /// Extends style of the dropdown menu.
    /// </summary>
    [Parameter]
    public string? DropdownStyle { get; set; }

    [Parameter]
    public string? Class { get; set; }

    [Parameter]
    public string? Style { get; set; }

    [Parameter]
    public RenderFragment? Icon { get; set; }

    /// <summary>
    /// Alternative icon component when the MenuItem is active.
    /// </summary>
    [Parameter]
    public RenderFragment? IconForActive { get; set; }

    /// <summary>
    /// Addition to class name of icon wrapper element.
    /// </summary>
    [Parameter]
    public string? IconClass { get; set; }

    /// <summary>
    /// Label of the link.
    /// </summary>
    [Parameter]
    public string? Label { get; set; }

    [Parameter]
    public RenderFragment? AfterLabelContent { get; set; }

    /// <summary>
    /// Addition to class name of label wrapper element.
    /// </summary>
    [Parameter]
    public string? LabelClass { get; set; }

    /// <summary>
    /// Should be set as active.
    /// </summary>
    [Parameter]
    public bool IsActive { get; set; } = false;

    [Parameter]
    public string? HeaderClass { get; set; }

    [Parameter]
    public string? HeaderStyle { get; set; }

    /// <summary>
    /// Dropdown menu will be placed to the end of the button.
    /// </summary>
    [Parameter]
    public bool End { get; set; }

    /// <summary>
    /// For non supported browsers, the popover will appear like a modal.
    /// </summary>
    [Parameter]
    public bool Fallback { get; set; }

    protected override void OnInitialized()
    {
        NavigationManager.LocationChanged += OnLocationChanged;
    }

    private async void OnLocationChanged(object? sender, LocationChangedEventArgs e)
    {
        await HidePopover();
    }

    private async Task HidePopover()
    {
        if (_module is null)
        {
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import",
                "./_content/BlueBlazor/Components/Dropdown.razor.js");
        }
        await _module.InvokeVoidAsync("hidePopover", _element);
    }

    public void Dispose()
    {
        NavigationManager.LocationChanged -= OnLocationChanged;
    }
}
