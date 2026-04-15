using Microsoft.AspNetCore.Components;
namespace BlueBlazor.Components;

public partial class InlineEditProvider
{
    internal InlineEdit? ActiveInlineEdit { get; set; } = null!;

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    internal void ToggleActiveInlineEdit(InlineEdit inlineEdit)
    {
        if (ActiveInlineEdit != inlineEdit)
        {
            ActiveInlineEdit = inlineEdit;
            StateHasChanged();
        }else if(ActiveInlineEdit == inlineEdit)
        {
            ActiveInlineEdit = null;
            StateHasChanged();
        }
    }
}
