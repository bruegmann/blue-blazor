using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

/// <summary>
/// Layout with header, sidebar and main areas. This component is designed to only be used once per page.
/// </summary>
public partial class Layout : BlueComponentBase
{
    public const string ID = "blueBlazorLayout";
    public const string SIDE_ID = "blueBlazorLayoutSide";
    public const string DRAWER_ID = "blueBlazorLayoutDrawer";
    public const string DRAWER_LABEL_ID = "blueBlazorLayoutDrawerLabel";

    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    [Parameter]
    public RenderFragment? HeaderContent { get; set; }

    [Parameter]
    public RenderFragment? SideContent { get; set; }

    [Parameter]
    public RenderFragment? PageContent { get; set; }

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public bool NoPageBorder { get; set; } = false;

    [Parameter]
    public string? DrawerTitle { get; set; }

    [Parameter]
    public RenderFragment? DrawerTitleContent { get; set; }

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
