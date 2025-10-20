using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class FieldGroup : ComponentBase, IDisposable
{
    private string? HeaderClassValue => new CssBuilder("page-header w-100 mb-2 mt-0")
        .AddClass($"h{Heading}", Heading != null)
        .AddClass(HeaderClass)
        .Build();

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public string? Header { get; set; }

    [Parameter]
    public bool IsExpanded { get; set; } = true;

    [Parameter]
    public string? HeaderClass { get; set; }

    [Parameter]
    public string? Id { get; set; }

    [Parameter]
    public int? Heading { get; set; } = 2;

    [CascadingParameter]
    internal FieldGroups? Parent { get; set; } = default!;

    protected override void OnInitialized()
    {
        if (Parent != null)
        {
            Parent.AddFieldGroup(this);
        }
    }

    public void Dispose()
    {
        if (Parent != null)
        {
            Parent.RemoveFieldGroup(this);
        }
    }
}
