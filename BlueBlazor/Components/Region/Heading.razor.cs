using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// Helper component to render a heading element (`&lt;h1&gt;`-`&lt;h6&gt;`).
/// Add some top and bottom margin by setting <see cref="Spacing"/> property.
/// </summary>
public partial class Heading : BlueComponentBase
{
    private string? ClassValue => new CssBuilder()
        .AddClass($"h{LevelValue}", !H1 && !H2 && !H3 && !H4 && !H5 && !H6 && LevelValue <= 6)
        .AddClass("h1", H1)
        .AddClass("h2", H2)
        .AddClass("h3", H3)
        .AddClass("h4", H4)
        .AddClass("h5", H5)
        .AddClass("h6", H6)
        .AddClass("blue-page-header", PageHeader)
        .AddClass("mt-4 mb-3", Spacing)
        .AddClass(Class).Build();

    private int LevelValue => Level ?? CascadingValues?.Level ?? 1;

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// Allowed are values from `1` to `6`.
    /// </summary>
    [Parameter]
    public int? Level { get; set; }

    /// <summary>
    /// Will add the class "blue-page-header" to the heading, which underlines the heading.
    /// </summary>
    [Parameter]
    public bool PageHeader { get; set; } = false;

    /// <summary>
    /// Adds some margin on top and bottom
    /// </summary>
    [Parameter]
    public bool Spacing { get; set; }

    /// <summary>
    /// Adds styling of a `h1` visually. Note that the actual heading level is controlled by `Level` or `CascadingValues` coming from `Region.
    /// </summary>
    [Parameter]
    public bool H1 { get; set; }

    /// <summary>
    /// Adds styling of a `h2` visually. Note that the actual heading level is controlled by `Level` or `CascadingValues` coming from `Region.
    /// </summary>
    [Parameter]
    public bool H2 { get; set; }

    /// <summary>
    /// Adds styling of a `h3` visually. Note that the actual heading level is controlled by `Level` or `CascadingValues` coming from `Region.
    /// </summary>
    [Parameter]
    public bool H3 { get; set; }

    /// <summary>
    /// Adds styling of a `h4` visually. Note that the actual heading level is controlled by `Level` or `CascadingValues` coming from `Region.
    /// </summary>
    [Parameter]
    public bool H4 { get; set; }

    /// <summary>
    /// Adds styling of a `h5` visually. Note that the actual heading level is controlled by `Level` or `CascadingValues` coming from `Region.
    /// </summary>
    [Parameter]
    public bool H5 { get; set; }

    /// <summary>
    /// Adds styling of a `h6` visually. Note that the actual heading level is controlled by `Level` or `CascadingValues` coming from `Region.
    /// </summary>
    [Parameter]
    public bool H6 { get; set; }

    [CascadingParameter]
    private RegionCascadingValues? CascadingValues { get; set; }
}

