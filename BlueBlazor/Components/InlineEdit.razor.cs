using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/**
 * A wrapper component that allows for inline editing of content.
 * It starts in read mode and when the user clicks on the content, it switches to edit mode.
 * State for the edit mode and the event callback have to be passed as a cascading parameter.
 * Take a look at the example in the docs to see how to use it.
 */
public partial class InlineEdit
{
    private bool ShowEdit { get; set; }

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public RenderFragment? ReadContent { get; set; }

    [Parameter]
    public string? ReadText { get; set; }

    [Parameter]
    public string Id { get; set; } = "InlineEdit-" + Guid.NewGuid().ToString();

    [Parameter]
    public string? Header { get; set; }

    [CascadingParameter(Name = "EditMode")]
    protected bool? EditMode { get; set; } = null;

    [CascadingParameter(Name = "EditModeChanged")]
    protected EventCallback<bool> EditModeChanged { get; set; }

    protected override void OnParametersSet()
    {
        base.OnParametersSet();

        if (EditMode == false)
        {
            ShowEdit = false;
        }
    }

    private void ToggleShowEdit()
    {
        ShowEdit = !ShowEdit;
    }

    private async Task EditRequested()
    {
        if (EditMode == false)
            await EditModeChanged.InvokeAsync(true);

        ShowEdit = true;
    }
}
