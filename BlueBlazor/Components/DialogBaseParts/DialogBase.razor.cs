using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components.DialogBaseParts;

public partial class DialogBase
{
    protected string Id = "DialogBase-" + Guid.NewGuid().ToString();
    protected bool Render = false;
    protected ElementReference Element;
    protected IJSObjectReference? Module;

    [Inject]
    protected IJSRuntime JSRuntime { get; set; } = default!;

    [Parameter, EditorRequired]
    public RenderFragment? ToggleContent { get; set; }

    [Parameter]
    public RenderFragment? BodyContent { get; set; }

    /// <summary>
    /// Additional CSS class to be added to the body.
    /// </summary>
    [Parameter]
    public string? BodyClass { get; set; }

    [Parameter]
    public RenderFragment? FooterContent { get; set; }

    [Parameter]
    public string? TitleText { get; set; }

    [Parameter]
    public RenderFragment? TitleContent { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            Module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/DialogBaseParts/DialogBase.razor.js");
        }
    }

    public async Task Open()
    {
        if (Module is not null)
        {
            Render = true;
            await Module.InvokeVoidAsync("Show", Element);
        }
    }
}
