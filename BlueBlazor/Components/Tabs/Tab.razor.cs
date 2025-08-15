using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

/// <summary>
/// Always use together with `Tabs`.
/// </summary>
public partial class Tab : ComponentBase, IDisposable
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    private IJSObjectReference? _module;

    internal string TabId = "Tab_" + Guid.NewGuid().ToString();
    internal string TabPanelId = "Tab_Panel_" + Guid.NewGuid().ToString();
    internal ElementReference Element;

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


    /// <summary>
    /// Gets or sets the parent.
    /// </summary>
    [CascadingParameter]
    internal Tabs Parent { get; set; } = default!;

    protected override void OnInitialized()
    {
        Parent.AddTab(this);
    }

    public void Dispose()
    {
        Parent.RemoveTab(this);
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/Tabs/Tab.razor.js");
            if (_module is not null)
            {
                await _module.InvokeVoidAsync("Initialize", Element, DotNetObjectReference.Create(this));
            }
        }
    }

    [JSInvokable]
    public void InvokeActivate()
    {
        Parent.ActivateTab(this);
    }
}
