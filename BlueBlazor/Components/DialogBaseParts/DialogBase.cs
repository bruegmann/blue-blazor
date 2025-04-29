using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components.DialogBaseParts;

public class DialogBase : ComponentBase
{
    [Parameter]
    public string? Id { get; set; } = "DialogBase-" + Guid.NewGuid().ToString();

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

    [CascadingParameter(Name = "DialogProvider_IsLastDialog")]
    protected bool IsLastDialog { get; set; }
}
