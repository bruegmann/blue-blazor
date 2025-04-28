using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components.DialogBaseParts;

public class NewDialogBase : ComponentBase
{
    [Parameter]
    public string? Id { get; set; } = "DialogBase-" + Guid.NewGuid().ToString();

    [Parameter]
    public bool Render { get; set; } = true;

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
}
