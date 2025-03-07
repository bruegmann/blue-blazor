using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;
using BlueBlazor.Components.DialogBaseParts;

namespace BlueBlazor.Components;

/// <summary>
/// Based on styling Bootstrap's Modal component but uses the native `&lt;dialog&gt;` HTML element.
/// Modal body and footer will not be rendered until the open event triggered.
/// </summary>
public partial class Modal : DialogBase
{
    private string? _dialogClass = "modal-dialog";

    [Parameter]
    public ModalSize? Size { get; set; }

    [Parameter]
    public bool Scrollable { get; set; }

    protected override void OnParametersSet()
    {
        _dialogClass = new CssBuilder("modal-dialog")
            .AddClass("modal-dialog-scrollable", Scrollable)
            .AddClass($"modal-{Size?.ToString().ToLower()}", Size != null)
            .Build();
    }
}
