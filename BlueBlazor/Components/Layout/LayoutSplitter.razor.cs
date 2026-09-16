using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// Use this inside of Layot's <see cref="Layout.ChildContent" /> to insert a [`wa-split-panel`](https://webawesome.com/docs/components/split-panel).
/// This enables the Layout Inspector on the end. Set its content with <see cref="LayoutSplitter.End" />.
/// </summary>
public partial class LayoutSplitter : BlueComponentBase
{
    private string? ClassValue => new CssBuilder("blue-layout-splitter").AddClass(Class).Build();

    private string DrawerLabelId => $"{InspectorId}drawerLabel";

    [Parameter]
    public string InspectorId { get; set; } = "blueBlazorLayoutInspector";

    [Parameter]
    public RenderFragment? Start { get; set; }

    [Parameter]
    public RenderFragment? End { get; set; }

    [Parameter]
    public string? DrawerTitle { get; set; }

    [Parameter]
    public RenderFragment? DrawerTitleContent { get; set; }

    [Parameter]
    public bool NoPageBorder { get; set; } = false;
}
