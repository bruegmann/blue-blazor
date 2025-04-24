using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;
using BlueBlazor.Components.DialogBaseParts;

namespace BlueBlazor.Components;

/// <summary>
/// Based on styling Bootstrap's Offcanvas component but uses the native `&lt;dialog&gt;` HTML element.
/// Offcanvas body will not be rendered until the open event triggered.
/// 
/// Uses `<dxbl-popup-root></dxbl-popup-root>` for compatibility with DevExpress Popups.
/// </summary>
public partial class Offcanvas : DialogBase
{
    private string? _offcanvasClass = "offcanvas";

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
