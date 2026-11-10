using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;
namespace BlueBlazor.Components;

/// <summary>
/// Wrapper for native <see href="https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset">fieldset element</see>.
/// </summary>
public partial class FieldSet : BlueComponentBase
{
    private string? BodyClassValue => new CssBuilder().AddClass("hstack", !VerticalStack)
        .AddClass("vstack", VerticalStack)
        .AddClass($"gap-{Gap}").Build();

    [Parameter]
    public string? Legend { get; set; }

    [Parameter]
    public RenderFragment? LegendContent { get; set; }

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// Content will be stacked vertically instead of horizontally.
    /// </summary>
    [Parameter]
    public bool VerticalStack { get; set; }

    /// <summary>
    /// Number between 0 and 5.
    /// </summary>
    [Parameter]
    public int Gap { get; set; } = 2;
}
