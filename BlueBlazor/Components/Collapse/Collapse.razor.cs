using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class Collapse
{
    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public bool Draggable { get; set; } = false;

    /// <summary>
    /// Extends class name of the dropdown menu.
    /// </summary>
    [Parameter]
    public string? DropdownClass { get; set; }

    /// <summary>
    /// Extends style of the dropdown menu.
    /// </summary>
    [Parameter]
    public string? DropdownStyle { get; set; }

    [Parameter]
    public bool HideDraggableIcon { get; set; } = false;

    /// <summary>
    /// Hides chevron icon for dropdown.
    /// </summary>
    [Parameter]
    public bool HideChevronIcon { get; set; } = false;

    /// <summary>
    /// By default, the chevron icon comes after the label and points to the left when closed.
    /// Set this property and it will come before the label and point to the right when closed.
    /// </summary>
    [Parameter]
    public bool ChevronIconBefore { get; set; } = false;

    [Parameter]
    public string? Class { get; set; }

    [Parameter]
    public string? Style { get; set; }

    [Parameter]
    public RenderFragment? Icon { get; set; }

    /// <summary>
    /// Alternative icon component when the MenuItem is active.
    /// </summary>
    [Parameter]
    public RenderFragment? IconForActive { get; set; }

    /// <summary>
    /// Addition to class name of icon wrapper element.
    /// </summary>
    [Parameter]
    public string? IconClass { get; set; }

    /// <summary>
    /// Label of the link.
    /// </summary>
    [Parameter]
    public string? Label { get; set; }

    [Parameter]
    public RenderFragment? AfterLabelContent { get; set; }

    /// <summary>
    /// Addition to class name of label wrapper element.
    /// </summary>
    [Parameter]
    public string? LabelClass { get; set; }

    /// <summary>
    /// Should be set as active.
    /// </summary>
    [Parameter]
    public bool IsActive { get; set; } = false;

    [Parameter]
    public string? HeaderClass { get; set; }

    [Parameter]
    public string? HeaderStyle { get; set; }
}
