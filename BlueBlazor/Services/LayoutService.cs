using Microsoft.JSInterop;

namespace BlueBlazor.Services;

public class LayoutService
{
    private IJSRuntime _jsRuntime;

    public LayoutService(IJSRuntime jSRuntime) { _jsRuntime = jSRuntime; }

    public ValueTask ToggleInspector()
    {
        return _jsRuntime.InvokeVoidAsync("blueWeb.layout.toggleInspector", "#blueBlazorLayout");
    }

    public ValueTask OpenInspector()
    {
        return _jsRuntime.InvokeVoidAsync("blueWeb.layout.openInspector", "#blueBlazorLayout");
    }

    public ValueTask CloseInspector()
    {
        return _jsRuntime.InvokeVoidAsync("blueWeb.layout.closeInspector", "#blueBlazorLayout");
    }
}
