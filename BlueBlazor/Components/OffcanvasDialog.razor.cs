using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class OffcanvasDialog : ComponentBase
{
    private string? _offcanvasClass = "offcanvas";

    [Parameter]
    public string? Id { get; set; } = "OffcanvasDialog-" + Guid.NewGuid().ToString();

    [Parameter]
    public bool Render { get; set; }

    [Parameter]
    public RenderFragment? BodyContent { get; set; }

    /// <summary>
    /// Additional CSS class to be added to the body.
    /// </summary>
    [Parameter]
    public string? BodyClass { get; set; }

    [Parameter]
    public RenderFragment? FooterContent { get; set; }

    [Parameter]
    public string? TitleText { get; set; }

    [Parameter]
    public RenderFragment? TitleContent { get; set; }

    /// <summary>
    /// Additional CSS class to be added to the offcanvas element.
    /// </summary>
    [Parameter]
    public string? OffcanvasClass { get; set; }

    [Parameter]
    public OffcanvasPlacement Placement { get; set; } = OffcanvasPlacement.Start;

    protected override void OnParametersSet()
    {
        _offcanvasClass = new CssBuilder("offcanvas show")
            .AddClass(OffcanvasClass)
            .AddClass($"offcanvas-{Placement.ToString().ToLower()}")
            .Build();
    }
}
