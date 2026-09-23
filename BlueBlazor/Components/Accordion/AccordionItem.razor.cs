using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class AccordionItem : BlueComponentBase
{
    private string? NameValue => Parent?.ExpandSingleOrNone == true ? Parent.Identifier : null;

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public bool Open { get; set; }

    [Parameter]
    public string? HeaderText { get; set; }

    [Parameter]
    public RenderFragment? HeaderContent { get; set; }

    [Parameter]
    public string? HeaderClass { get; set; }

    [Parameter]
    public string? HeaderButtonClass { get; set; }

    [Parameter]
    public string? BodyClass { get; set; }

    [Parameter]
    public string? BodyStyle { get; set; }

    [CascadingParameter]
    private Accordion? Parent { get; set; }
}