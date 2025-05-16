using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

/// <summary>
/// Combination of toolbar and a dropdown menu. Items in toolbar will only be shown if there is enough space.
/// Otherwise they will be visible in the dropdown menu. JavaScript detects if space is changing and rearranges.
/// IMPORTANT: As of right now, children you pass will be rendered twice. Once in the toolbar and once in the dropdown.
/// </summary>
public partial class Actions : ComponentBase
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _element;

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public string? Class { get; set; }

    [Parameter]
    public string? MenuClass { get; set; }

    [Parameter]
    public string? CollapseMenuClass { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await JSRuntime.InvokeVoidAsync("import", "./_content/BlueBlazor/blue-web/js/actions.bundle.js");
            IJSObjectReference? module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/Actions.razor.js");
            if (module is not null)
            {
                await module.InvokeVoidAsync("Initialize", _element);
            }
        }
    }
}
