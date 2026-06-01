using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class LayoutBody : BlueComponentBase
{
    private string? ClassValue => new CssBuilder("blue-layout-body").AddClass(Class).Build();

    [Parameter]
    public RenderFragment? ChildContent { get; set; }
}
