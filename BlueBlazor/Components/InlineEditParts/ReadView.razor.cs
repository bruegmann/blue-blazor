using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components.InlineEditParts;

public partial class ReadView
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _readViewElement;
    private IJSObjectReference? _module;

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
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/InlineEditParts/ReadView.razor.js");
            await Initialize(_readViewElement);
        }
    }

    public async Task Initialize(ElementReference element)
    {
        if (_module is not null)
        {
            await _module.InvokeVoidAsync("Initialize", element, DotNetObjectReference.Create(this));
        }
    }

    [JSInvokable]
    public async Task Invoke()
    {
        await OnEditRequested.InvokeAsync();
    }

}
