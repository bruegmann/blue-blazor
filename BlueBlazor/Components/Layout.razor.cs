using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

/// <summary>
/// Implementation of Web Component SideLayout by Blue Web.
/// In some cases, like when using .NET 8's new SSR (Static Server Rendering) rendermode, it might be necessary to include our library script in your App.razor manually. You can do so as follows:
/// `<script src="_content/BlueBlazor/blue-web/js/side-layout.bundle.js"></script>
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
            // JS Import especially for "Blazor Server Apps"
            await JSRuntime.InvokeVoidAsync("import", "./_content/BlueBlazor/blue-web/js/side-layout.bundle.js");
        }
    }
}
