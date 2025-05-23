using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;

namespace BlueBlazor.Components;

/// <summary>
/// Interactive button or link. Especially designed to be used inside the sidebar or header area.
/// </summary>
public partial class MenuItem
{
    private string _className = "";
    private bool _showDropdown = false;
    private string _id = $"blue-menu-item-wrapper-{Guid.NewGuid()}";

    [Parameter]
    public RenderFragment? DropdownContent { get; set; }

    [Parameter(CaptureUnmatchedValues = true)]
    public IDictionary<string, object>? AdditionalAttributes { get; set; }

    [Parameter]
    public EventCallback<MouseEventArgs> OnClick { get; set; }

    [Parameter]
    public string? Href { get; set; }

    /// <summary>
    /// `Target="_blank"` will automatically add `rel="noreferrer"` to the anchor tag.
    /// </summary>
    [Parameter]
    public string? Target { get; set; }

    [Parameter]
    public string? Class { get; set; }

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

    /// <summary>
    /// Should be highlighted.
    /// </summary>
    [Parameter]
    public bool Highlighted { get; set; } = false;

    /// <summary>
    /// **Important:** To make draggable menu items work in Firefox, the elementType must not be `"button"`. Set it to
    /// something else, like `"div"`.
    /// </summary>
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
    /// Defines dropdown status from outside.
    /// </summary>
    [Parameter]
    public bool? ShowDropdown { get; set; }

    [Parameter]
    public EventCallback<bool> ShowDropdownChanged { get; set; }

    /// <summary>
    /// Close on click outside.
    /// </summary>
    [Parameter]
    public bool SupportOutside { get; set; } = false;

    /// <summary>
    /// Overrides `IgnoreClasses` prop `MenuItem` will pass to `Outside`.<br/>
    /// Hint: If you want this menu item to stay open when others will open, set:
    /// `OutsideIgnoreClasses="@(new List&lt;string&gt; { "blue-menu-item-wrapper" })"`
    /// </summary>
    [Parameter]
    public List<string>? OutsideIgnoreClasses { get; set; }

    [Parameter]
    public bool Busy { get; set; } = false;

    [Parameter]
    public bool Disabled { get; set; } = false;

    protected override void OnParametersSet()
    {
        string? classFromAttr = AdditionalAttributes?.ContainsKey("class") == true ? AdditionalAttributes["class"]?.ToString() :
        null;
        _className = $"blue-menu-item btn {(IsActive ? "active" : "")} {classFromAttr} {(Highlighted ? "highlighted" : "")} {Class}";

        if (ShowDropdown != null)
            _showDropdown = ShowDropdown == true;
    }

    private async Task HandleClick(MouseEventArgs? arg)
    {
        await OnClick.InvokeAsync(arg);

        if (DropdownContent != null)
        {
            _showDropdown = !_showDropdown;
            if (ShowDropdownChanged.HasDelegate)
            {
                await ShowDropdownChanged.InvokeAsync(_showDropdown);
            }
        }
    }

    private void HandleClickOutside(ElementReference myRef)
    {
        _showDropdown = false;
        if (ShowDropdownChanged.HasDelegate)
        {
            ShowDropdownChanged.InvokeAsync(_showDropdown);
        }
    }
}
