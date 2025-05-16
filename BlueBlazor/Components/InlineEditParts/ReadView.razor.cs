using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components.InlineEditParts;

public partial class ReadView
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _readViewElement;

    [Parameter]
    public EventCallback OnEditRequested { get; set; }

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public bool? Disabled { get; set; }

    [Parameter(CaptureUnmatchedValues = true)]
    public IDictionary<string, object>? AdditionalAttributes { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await JSRuntime.InvokeVoidAsync("import", "./_content/BlueBlazor/blue-web/js/read-view.bundle.js");
            var module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/InlineEditParts/ReadView.razor.js");
            if (module is not null)
            {
                await module.InvokeVoidAsync("Initialize", _readViewElement, DotNetObjectReference.Create(this));
            }
        }
    }

    [JSInvokable]
    public async Task Invoke()
    {
        await OnEditRequested.InvokeAsync();
    }

}
