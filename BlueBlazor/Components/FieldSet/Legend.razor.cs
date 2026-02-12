using Microsoft.AspNetCore.Components;
namespace BlueBlazor.Components;

/// <summary>
/// Wrapper for native <see href="https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend">legend element</see> with some default styling.
/// Should be used together with <see cref="FieldSet" />.
/// </summary>
public partial class Legend : BlueComponentBase
{
    [Parameter]
    public RenderFragment? ChildContent { get; set; }
}
