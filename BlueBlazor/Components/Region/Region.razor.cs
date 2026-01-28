using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// Marks a new section. Use it together with `Heading`.
/// `Region` will automatically increase the heading level, so you don't have to set it yourself.
/// </summary>
public partial class Region : ComponentBase
{
    private RegionCascadingValues Values => new RegionCascadingValues()
    {
        Level = (int)(Level != null ? Level : (CascadingValues?.Level != null ? (CascadingValues.Level + 1) : 1))
    };

    [Parameter]
    public int? Level { get; set; }

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [CascadingParameter]
    private RegionCascadingValues? CascadingValues { get; set; }
}
