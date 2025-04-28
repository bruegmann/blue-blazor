using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class ModalDialog : ComponentBase
{
    private string? _dialogClass = "modal-dialog";

    [Parameter]
    public string? Id { get; set; } = "ModalDialog-" + Guid.NewGuid().ToString();

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
