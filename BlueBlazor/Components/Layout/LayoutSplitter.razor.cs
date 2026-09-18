using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// Use this inside of Layot's <see cref="Layout.ChildContent" /> to insert a [`sp-split-view`](https://opensource.adobe.com/spectrum-web-components/components/split-view/).
/// This enables the Layout Inspector on the end. Set its content with <see cref="End" />.
/// </summary>
public partial class LayoutSplitter : BlueComponentBase
{
    public const string INSPECTOR_ID = "blueBlazorLayoutInspector";
    public const string INSPECTOR_LABEL_ID = "blueBlazorLayoutInspectorLabel";

    private string? ClassValue => new CssBuilder("blue-layout-splitter").AddClass(Class).Build();

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
