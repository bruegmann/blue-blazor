﻿using Microsoft.AspNetCore.Components;
using System.Reflection.Metadata;

namespace BlueBlazor.Components;

/// <summary>
/// A wrapper component that allows inline editing of content.
/// It starts in read mode and when the user clicks on the content, it switches to edit mode.
/// 
/// Inline edit is designed to be used deeper inside a context, which handles state for edit mode.
/// That's why the state for the edit mode and the event callback have to be passed as cascading parameters.
/// Take a look at the example in the docs to see how to use it.
/// 
/// The component itself passes two cascading parameters down to its children:
/// * `"ControlId"` with value `@Id`.
/// * `"AutoFocus"` with value `true`.
/// </summary>
public partial class InlineEdit
{
    private bool ShowEdit { get; set; }

    /// <summary>
    /// Content for edit mode.
    /// </summary>
    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// Content for read mode. If you just need to display a string, you should use `ReadText` instead.
    /// </summary>
    [Parameter]
    public RenderFragment? ReadContent { get; set; }

    /// <summary>
    /// Text that will displayed in read mode.
    /// </summary>
    [Parameter]
    public string? ReadText { get; set; }

    /// <summary>
    /// Optional, by default an unique ID will be generated.
    /// </summary>
    [Parameter]
    public string Id { get; set; } = "InlineEdit-" + Guid.NewGuid().ToString();

    [Parameter]
    public string? Header { get; set; }

    [Parameter]
    public RenderFragment? HeaderContent { get; set; }

    [Parameter]
    public bool ConfirmOnLoseFocus { get; set; }

    /// <summary>
    /// By default if the edit form is submitted, the confirm action will be fired.
    /// You can prevent this. Might be useful if your edit view is more complex and has forms in itself.
    /// </summary>
    [Parameter]
    public bool PreventConfirmOnSubmit { get; set; }

    [CascadingParameter(Name = "Disabled")]
    protected bool Disabled { get; set; } = false;

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
        {
            await EditModeChanged.InvokeAsync(true);
        }
        ShowEdit = true;
    }

    private void OnClickSubmitButton()
    {
        if (PreventConfirmOnSubmit)
        {
            ToggleShowEdit();
        }
    }
}
