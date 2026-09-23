using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// Uses the native HTML Details element and combines it with the styling of Bootstrap's Accordion component. No JavaScript required.
/// </summary>
public partial class Accordion : BlueComponentBase
{
    internal string Identifier = $"uid_{Guid.NewGuid():N}";

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public bool ExpandSingleOrNone { get; set; }
}