using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// A simple layout with header and main content area.
/// </summary>
public partial class SimpleLayout : BlueComponentBase
{
    [Parameter]
    public RenderFragment? HeaderContent { get; set; }

    [Parameter]
    public RenderFragment? PageContent { get; set; }

    [Parameter]
    public bool NoPageBorder { get; set; } = false;
}
