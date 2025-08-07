using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// Uses Web Component [`wa-tooltip`](https://webawesome.com/docs/components/tooltip) by Web Awesome.
/// </summary>
public partial class Tooltip
{
    /// <summary>
    /// Gets or sets the unique identifier.
    /// The value will be used as the HTML <see href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id">global id attribute</see>.
    /// </summary>
    [Parameter]
    public string? Id { get; set; }

    /// <summary>
    /// Optional CSS class names. If given, these will be included in the class attribute of the component.
    /// </summary>
    [Parameter]
    public virtual string? Class { get; set; } = null;

    /// <summary>
    /// Optional in-line styles. If given, these will be included in the style attribute of the component.
    /// </summary>
    [Parameter]
    public virtual string? Style { get; set; } = null;

    /// <summary>
    /// The tooltip's default slot where any content should live. Interactive content should be avoided.
    /// </summary>
    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltipinside of the viewport.
    /// </summary>
    [Parameter]
    public TooltipPlacement Placement { get; set; } = TooltipPlacement.Top;

    /// <summary>
    /// Disables the tooltip so it won't show when triggered.
    /// </summary>
    [Parameter]
    public bool Disabled { get; set; }

    /// <summary>
    /// The distance in pixels from which to offset the tooltip away from its target.
    /// </summary>
    [Parameter]
    public string? Distance { get; set; }

    /// <summary>
    /// Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.
    /// </summary>
    [Parameter]
    public bool Open { get; set; }

    [Parameter]
    public EventCallback<bool> OpenChanged { get; set; }

    /// <summary>
    /// The distance in pixels from which to offset the tooltip along its target.
    /// </summary>
    [Parameter]
    public string? Skidding { get; set; }

    /// <summary>
    /// The amount of time to wait before showing the tooltip when the user mouses in.
    /// </summary>
    [Parameter]
    public string? ShowDelay { get; set; }

    /// <summary>
    /// The amount of time to wait before hiding the tooltip when the user mouses out..
    /// </summary>
    [Parameter]
    public string? HideDelay { get; set; }

    /// <summary>
    /// Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multipleoptions can be passed by separating them with a space. When manual is used, the tooltip must be activatedprogrammatically.
    /// </summary>
    [Parameter]
    public string? Trigger { get; set; }

    [Parameter]
    public string? For { get; set; }


    [CascadingParameter(Name = "Slot")]
    public string? Slot { get; set; }

    /// <summary>
    /// Gets or sets a collection of additional attributes that will be applied to the created element.
    /// </summary>
    [Parameter(CaptureUnmatchedValues = true)]
    public virtual IReadOnlyDictionary<string, object>? AdditionalAttributes { get; set; }

    private void HandleWaShow(EventArgs eventArgs)
    {
        OpenChanged.InvokeAsync(true);
    }

    private void HandleWaHide(EventArgs eventArgs)
    {
        OpenChanged.InvokeAsync(false);
    }
}