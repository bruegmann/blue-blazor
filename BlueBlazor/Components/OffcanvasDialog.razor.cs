using BlueBlazor.Components.DialogBaseParts;
using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// This provides the template for a Offcanvas.
/// Should be used together with the `DialogService` and [`DialogProvider`](components/dialog-provider) and optionally with [`DialogOpener`](components/dialog-opener).
/// 
/// Based on styling Bootstrap's Offcanvas component but uses the native `&lt;dialog&gt;` HTML element.
/// Offcanvas body will not be rendered until the open event triggered.
/// 
/// Uses `&lt;dxbl-popup-root&gt;&lt;/dxbl-popup-root&gt;` for compatibility with DevExpress Popups.
/// </summary>
public partial class OffcanvasDialog : NewDialogBase
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
