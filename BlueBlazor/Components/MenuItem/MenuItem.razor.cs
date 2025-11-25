using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class MenuItem : Button
{
    private string? ClassValue => new CssBuilder(Class).AddClass("current", Current).AddClass("d-flex", !DefaultDisplay).Build();

    [Parameter]
    public bool Current
    {
        get; set
        {
            field = value;
        }
    }

    [Parameter]
    public bool DefaultDisplay { get; set; }

    /// <summary>
    /// Uses `IconBefore` slot. If `IconForCurrent` and menu item is current, this will be hidden.
    /// </summary>
    [Parameter]
    public RenderFragment? Icon { get; set; }

    /// <summary>
    /// Uses `IconBefore` slot. If menu item is current, this will be visible.
    /// </summary>
    [Parameter]
    public RenderFragment? IconForCurrent { get; set; }
}
