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

    private string? ClassValue => new CssBuilder("blue-anchored blue-anchored-fallback border shadow text-body bg-body mt-1")
        .AddClass("blue-anchored-end", End)
        .AddClass(RoundingClass)
        .AddClass(Class).Build();

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter, EditorRequired]
    public string Id { get; set; }

    [Parameter]
    public bool End { get; set; }

    [Parameter]
    public string RoundingClass { get; set; } = "rounded-4";

    [Parameter]
    public EventCallback<PopoverToggleEventArgs> OnToggle { get; set; }

    protected override void OnInitialized()
    {
        NavigationManager.LocationChanged += OnLocationChanged;
    }

    protected async override Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import",
                "./_content/BlueBlazor/Components/Popover/Popover.razor.js");
        }
    }

    private async void OnLocationChanged(object? sender, LocationChangedEventArgs e)
    {
        try
        {
            await HidePopover();
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine($"Exception in OnLocationChanged: {ex}");
        }
    }

    public async Task HidePopover()
    {
        if (_module != null)
        {
            await _module.InvokeVoidAsync("hidePopover", _element);
        }
    }

    public async Task ShowPopover()
    {
        if (_module != null)
        {
            await _module.InvokeVoidAsync("showPopover", _element);
        }
    }

    private async Task HandlePopoverToggle(PopoverToggleEventArgs e)
    {
        await OnToggle.InvokeAsync(e);
    }

    public void Dispose()
    {
        NavigationManager.LocationChanged -= OnLocationChanged;
    }
}
