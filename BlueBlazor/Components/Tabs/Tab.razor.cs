using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;

namespace BlueBlazor.Components;

/// <summary>
/// Always use together with `Tabs`.
/// </summary>
public partial class Tab
{
    private string _tabId = "Tab_" + Guid.NewGuid().ToString();
    private string _tabPanelId = "Tab_Panel_" + Guid.NewGuid().ToString();

    [Parameter, EditorRequired]
    public required string Label { get; set; }

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public string? Class { get; set; }

    [Parameter]
    public string? ContentClass { get; set; }

    [Parameter]
    public bool Active { get; set; }

    [Parameter(CaptureUnmatchedValues = true)]
    public IDictionary<string, object>? AdditionalAttributes { get; set; }

    [Parameter]
    public EventCallback<MouseEventArgs> OnClick { get; set; }


    [CascadingParameter(Name = "Tab_Name")]
    protected string? Name { get; set; }
}
