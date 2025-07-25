using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

/// <summary>
/// Implementation of SideLayout by Blue Web.
/// Since 3.4.1 this component no longer uses the Web Component for simplification and 
/// to avoid flickering while rendering.
/// </summary>
public partial class Layout
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    [Parameter]
    public RenderFragment? HeaderContent { get; set; }

    [Parameter]
    public RenderFragment? SideContent { get; set; }

    [Parameter]
    public RenderFragment? PageContent { get; set; }

    [Parameter]
    public bool NoPageBorder { get; set; } = false;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            IJSObjectReference module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/Layout/Layout.razor.js");
            if (module is not null)
            {
                await module.InvokeVoidAsync("onLoad");
            }
        }
    }
}
