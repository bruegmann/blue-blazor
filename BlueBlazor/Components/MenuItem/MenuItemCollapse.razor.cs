using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class MenuItemCollapse : BlueComponentBase
{
    private bool HasVisualContent => IconBefore != null || IconAfter != null || (!string.IsNullOrEmpty(Label) && !LabelHidden) || SummaryContent != null;

    private string? ClassValue => new CssBuilder("blue-collapse").AddClass(Class).Build();

    private string? SummaryClassValue => new CssBuilder("d-flex btn blue-collapse-header blue-menu-item icon-link")
        .AddClass("blue-btn-square", !HasVisualContent).Build();

    private string? IconClassValue => new CssBuilder("blue-collapse-chevron")
        .AddClass("ms-auto", HasVisualContent).Build();

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public RenderFragment? IconBefore { get; set; }

    [Parameter]
    public RenderFragment? IconAfter { get; set; }

    [Parameter]
    public RenderFragment? SummaryContent { get; set; }

    [Parameter]
    public string? Label { get; set; }

    [Parameter]
    public bool LabelHidden { get; set; }
}
