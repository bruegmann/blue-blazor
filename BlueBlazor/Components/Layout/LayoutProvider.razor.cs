using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

/// <summary>
/// Allows you to control and receive states by the global <see cref="Layout"/> instance.
/// </summary>
public partial class LayoutProvider : BlueComponentBase, IAsyncDisposable
{
    private IJSObjectReference? _module;
    private string _listenerId = $"uid_{Guid.NewGuid():N}";

    private bool _inspectorState;
    public bool InspectorState => _inspectorState;

    [Inject]
    protected IJSRuntime JSRuntime { get; set; } = default!;

    [Parameter]
    public string? LayoutId { get; set; } = "#blueBlazorLayout";

    [Parameter]
    public RenderFragment<LayoutProvider>? ChildContent { get; set; }

    [Parameter]
    public EventCallback<bool> OnInspectorChange { get; set; }

    public async ValueTask DisposeAsync()
    {
        if (_module != null)
        {
            await _module.InvokeVoidAsync("dispose", _listenerId);
            await _module.DisposeAsync();
        }
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/Layout/LayoutProvider.razor.js");
            if (_module == null) return;
            await _module.InvokeVoidAsync("init", _listenerId, LayoutId, DotNetObjectReference.Create(this));
        }
    }

    public ValueTask ToggleInspector()
    {
        return JSRuntime.InvokeVoidAsync("blueWeb.layout.toggleInspector", LayoutId);
    }

    public ValueTask OpenInspector()
    {
        return JSRuntime.InvokeVoidAsync("blueWeb.layout.openInspector", LayoutId);
    }

    public ValueTask CloseInspector()
    {
        return JSRuntime.InvokeVoidAsync("blueWeb.layout.closeInspector", LayoutId);
    }

    [JSInvokable]
    public void InvokeInspectorChange(bool newState)
    {
        _inspectorState = newState;
        if (OnInspectorChange.HasDelegate) OnInspectorChange.InvokeAsync(newState);
        StateHasChanged();
    }
}