using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

public partial class Popover : BlueComponentBase
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    [Inject]
    private NavigationManager NavigationManager { get; set; } = default!;

    private ElementReference _element;
    private IJSObjectReference? _module;

    private string? ClassValue => new CssBuilder("blue-anchored blue-anchored-fallback border rounded-4 shadow").AddClass(Class).Build();

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter, EditorRequired]
    public string Id { get; set; }

    protected override void OnInitialized()
    {
        NavigationManager.LocationChanged += OnLocationChanged;
    }

    private async void OnLocationChanged(object? sender, LocationChangedEventArgs e)
    {
        await HidePopover();
    }

    private async Task HidePopover()
    {
        if (_module is null)
        {
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import",
                "./_content/BlueBlazor/Components/Popover/Popover.razor.js");
        }
        if (_module is null)
        {
            // Could not load JS module, so cannot hide popover
            return;
        }
        await _module.InvokeVoidAsync("hidePopover", _element);
    }

    public void Dispose()
    {
        NavigationManager.LocationChanged -= OnLocationChanged;
    }
}
