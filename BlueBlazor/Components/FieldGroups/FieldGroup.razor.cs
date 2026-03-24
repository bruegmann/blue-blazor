using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class FieldGroup : BlueComponentBase, IDisposable
{
    private string? ClassValue => new CssBuilder("blue-collapse").AddClass(Class).Build();

    private string? HeaderClassValue => new CssBuilder("blue-collapse-header d-flex align-items-center gap-1")
        .AddClass("blue-page-header w-100 mt-0", PageHeader)
        .AddClass($"h{Heading}", Heading != null)
        .AddClass("h2", Heading == null)
        .AddClass(HeaderClass)
        .Build();

    private int HeadingLevelValue => Heading ?? RegionCascadingValues?.Level ?? 2;

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
    public int? Heading { get; set; }

    [Parameter]
    public bool PageHeader { get; set; } = true;

    [CascadingParameter]
    internal FieldGroups? Parent { get; set; } = default!;

    [CascadingParameter]
    private RegionCascadingValues? RegionCascadingValues { get; set; }

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
