using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// Always use together with `Combobox`.
/// </summary>
public partial class ComboboxOption : BlueComponentBase
{
    private string? ClassValue => new CssBuilder("list-group-item list-group-item-action d-flex align-items-baseline").AddClass(Class).Build();
    private string? StyleValue => new StyleBuilder("border: 0").AddStyle(Style).Build();
    private bool IsInSearch => Value.Contains(ComboboxContext?.Search.ToLower() ?? "", StringComparison.CurrentCultureIgnoreCase) || (Description?.ToLower().Contains(ComboboxContext?.Search.ToLower() ?? "", StringComparison.CurrentCultureIgnoreCase) ?? false);
    private bool IsSelected => ComboboxContext?.Selected == Value;

    [Parameter, EditorRequired]
    public string Value { get; set; } = "";

    [Parameter]
    public string? Description { get; set; }

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [CascadingParameter]
    private ComboboxContext? ComboboxContext { get; set; }
}
