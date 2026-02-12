using Microsoft.AspNetCore.Components;
namespace BlueBlazor.Components;

/// <summary>
/// Wrapper for native <see href="https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset">fieldset element</see>.
/// </summary>
public partial class FieldSet : BlueComponentBase
{
    [Parameter]
    public RenderFragment? ChildContent { get; set; }
}
