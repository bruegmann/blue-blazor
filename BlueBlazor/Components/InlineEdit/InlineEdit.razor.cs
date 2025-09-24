using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;
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
public partial class InlineEdit : BlueComponentBase
{
    private bool ShowEdit { get; set; }

    private string IdValue => Id ?? ControlId ?? "InlineEdit-" + Guid.NewGuid().ToString();

    private string? ClassValue => new CssBuilder("inline-edit").AddClass(Class).Build();

    private string? StyleValue => new StyleBuilder($"--vtn: inline-edit-{IdValue}").AddStyle(Style).Build();

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
    /// If you use `ReadContent`, with this parameter you can control when the value is empty.
    /// If true, a placeholder will be shown.
    /// When you use `ReadText`, this parameter is ignored and the placeholder will be shown when the text is null or empty.
    /// </summary>
    [Parameter]
    public bool ReadIsEmpty { get; set; } = false;

    /// <summary>
    /// Optional, by default an unique ID will be generated.
    /// </summary>
    [Parameter]
    public string? Id { get; set; }

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

    /// <summary>
    /// Adds spacing for edit view. You might want to do this when your child content is something else but a `.form-control`.
    /// </summary>
    [Parameter]
    public bool SpacingForEdit { get; set; }

    [CascadingParameter(Name = "Disabled")]
    protected bool Disabled { get; set; } = false;

    [CascadingParameter(Name = "EditMode")]
    protected bool? EditMode { get; set; } = null;

    [CascadingParameter(Name = "EditModeChanged")]
    protected EventCallback<bool> EditModeChanged { get; set; }

    [CascadingParameter(Name = "ControlId")]
    protected string? ControlId { get; set; }

    protected override void OnParametersSet()
    {
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
