using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class ComboboxOptionGroup : BlueComponentBase
{
    private string? ClassValue => new CssBuilder("blue-scrollspy-group").AddClass(Class).Build();

    [Parameter, EditorRequired]
    public string Label { get; set; } = "";

    [Parameter]
    public RenderFragment? ChildContent { get; set; }
}
