using Microsoft.AspNetCore.Components;
namespace BlueBlazor.Components;

/// <summary>
/// Controls which of the containing <see cref="InlineEdit"/> instances is active.
/// </summary>
public partial class InlineEditGroup
{
    internal InlineEdit? ActiveInlineEdit { get; set; } = null!;

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [CascadingParameter(Name = "EditMode")]
    protected bool? EditMode { get; set; } = null;

    protected override void OnParametersSet()
    {
        if (EditMode == false)
        {
            ActiveInlineEdit = null;
        }
    }

    internal void SetActiveInlineEdit(InlineEdit? inlineEdit)
    {
        ActiveInlineEdit = inlineEdit;
        StateHasChanged();
    }

    internal void ToggleActiveInlineEdit(InlineEdit inlineEdit)
    {
        if (ActiveInlineEdit != inlineEdit)
        {
            ActiveInlineEdit = inlineEdit;
            StateHasChanged();
        }
        else if (ActiveInlineEdit == inlineEdit)
        {
            ActiveInlineEdit = null;
            StateHasChanged();
        }
    }
}
