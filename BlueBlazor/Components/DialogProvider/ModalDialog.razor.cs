using BlueBlazor.Internals.DialogBaseParts;
using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// This provides the template for a Modal.
/// Should be used together with the `DialogService` and [`DialogProvider`](components/dialog-provider) and optionally with [`DialogOpener`](components/dialog-opener).
/// 
/// Based on styling Bootstrap's Modal component but uses the native `&lt;dialog&gt;` HTML element.
/// Modal body and footer will not be rendered until the open event triggered.
/// 
/// Uses `&lt;dxbl-popup-root&gt;&lt;/dxbl-popup-root&gt;` for compatibility with DevExpress Popups.
/// </summary>
public partial class ModalDialog : DialogBase
{
    private string? _dialogClass = "modal-dialog";

    [Parameter]
    public ModalSize? Size { get; set; }

    [Parameter]
    public bool Scrollable { get; set; }

    /// <summary>
    /// Additional CSS class to be added.
    /// </summary>
    [Parameter]
    public string? DialogClass { get; set; }

    protected override void OnParametersSet()
    {
        _dialogClass = new CssBuilder("modal-dialog")
            .AddClass(DialogClass)
            .AddClass("modal-dialog-scrollable", Scrollable)
            .AddClass($"modal-{Size?.ToString().ToLower()}", Size != null)
            .Build();
    }
}
