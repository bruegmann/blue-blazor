using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// Implementation of Blue Web Tabs. Allows to use tabs without JavaScript.
/// Use together with `Tab`.
/// </summary>
public partial class Tabs
{
    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// Will be passed down to `Tab` children as identifier. Default is `"TabList-" + Guid.NewGuid().ToString()`.
    /// </summary>
    [Parameter]
    public string? Name { get; set; } = "TabList-" + Guid.NewGuid().ToString();

    [Parameter]
    public string? Class { get; set; }

    [Parameter]
    public string? Style { get; set; }

    /// <summary>
    /// By default, tabs will have styling of Bootstrap `.nav.nav-tabs`.
    /// Set this property to `true` to use `.nav.nav-underline` instead.
    /// </summary>
    [Parameter]
    public bool Underline { get; set; } = false;
}
