using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
namespace BlueBlazor.Components;

public partial class QuickLook : BlueComponentBase, IAsyncDisposable
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    private IJSObjectReference? _module;
    private ElementReference _element;
    private DotNetObjectReference<QuickLook>? _dotNetRef;

    [Parameter]
    public EventCallback<bool> OpenChanged { get; set; }

    [Parameter]
    public RenderFragment? TriggerContent { get; set; }

    [Parameter]
    public string? Title { get; set; }

    [Parameter]
    public RenderFragment? TitleContent { get; set; }

    [Parameter]
    public string? Description { get; set; }

    [Parameter]
    public RenderFragment? DescriptionContent { get; set; }

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    protected async override Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _dotNetRef = DotNetObjectReference.Create(this);
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import",
                "./_content/BlueBlazor/Components/QuickLook/QuickLook.razor.js");

            await _module.InvokeVoidAsync("init", _element, _dotNetRef);
        }
    }

    [JSInvokable]
    public async Task HandleOpenChange(bool open)
    {
        if (OpenChanged.HasDelegate) await OpenChanged.InvokeAsync(open);
    }

    public async ValueTask DisposeAsync()
    {
        _dotNetRef?.Dispose();

        if (_module is not null)
        {
            try
            {
                await _module.InvokeVoidAsync("dispose", _element);
                await _module.DisposeAsync();
            }
            catch (JSDisconnectedException)
            { }
        }
    }
}
