using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class SidebarMenu
{
    /// <summary>
    /// Extends the class name by the sidebar.
    /// </summary>
    [Parameter] public string? SidebarClass { get; set; }

    /// <summary>
    /// Sets the `style` prop by the sidebar.
    /// </summary>
    [Parameter] public string? SidebarStyle { get; set; }

    /// <summary>
    /// Extends the class name by the menu.
    /// </summary>
    [Parameter] public string? MenuClass { get; set; }

    /// <summary>
    /// Sets the `style` prop by the menu.
    /// </summary>
    [Parameter] public string? MenuStyle { get; set; }

    /// <summary>
    /// Content on top of the menu.
    /// </summary>
    [Parameter] public RenderFragment? TopContent { get; set; }

    /// <summary>
    /// Content for the bottom part of the sidebar.
    /// </summary>
    [Parameter] public RenderFragment? BottomContent { get; set; }

    [Parameter] public RenderFragment? ChildContent { get; set; }
}