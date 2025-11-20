using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class MenuItemPopover : BlueComponentBase
{
    private string? ClassValue => new CssBuilder("blue-anchored blue-anchored-fallback border rounded-4 shadow").AddClass(Class).Build();

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter, EditorRequired]
    public string Id { get; set; }
}
