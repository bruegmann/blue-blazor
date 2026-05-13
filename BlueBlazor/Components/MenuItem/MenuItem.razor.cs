using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

public partial class MenuItem : Button, IAsyncDisposable
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    private IJSObjectReference? _module;
    private DotNetObjectReference<MenuItem>? _dotNetRef;
    private readonly string _overflowId = $"bl-mi-{Guid.NewGuid().ToString("N")[..8]}";
    private bool _isOverflowing;
    private string? _tooltipText;

    private string? ClassValue => new CssBuilder(Class)
        .AddClass("current", Current)
        .AddClass("d-flex", !DefaultDisplay)
        .Build();

    [Parameter]
    public bool Current { get; set; }

    [Parameter]
    public bool DefaultDisplay { get; set; }

    /// <summary>
    /// Uses `IconBefore` slot. If `IconForCurrent` and menu item is current, this will be hidden.
    /// </summary>
    [Parameter]
    public RenderFragment? Icon { get; set; }

    /// <summary>
    /// Uses `IconBefore` slot. If menu item is current, this will be visible.
    /// </summary>
    [Parameter]
    public RenderFragment? IconForCurrent { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>(
                "import", "./_content/BlueBlazor/Components/MenuItem/MenuItem.razor.js");
            _dotNetRef = DotNetObjectReference.Create(this);
            await _module.InvokeVoidAsync("init", _overflowId, _dotNetRef);
        }
    }

    [JSInvokable]
    public void OnOverflowChanged(bool isOverflowing, string? text)
    {
        _isOverflowing = isOverflowing;
        _tooltipText = text;
        StateHasChanged();
    }

    public async ValueTask DisposeAsync()
    {
        if (_module is not null)
        {
            await _module.InvokeVoidAsync("dispose", _overflowId);
            await _module.DisposeAsync();
        }
        _dotNetRef?.Dispose();
    }
}
