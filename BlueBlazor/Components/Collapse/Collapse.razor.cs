using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

public partial class Collapse : BlueComponentBase, IAsyncDisposable
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _detailsRef;
    private IJSObjectReference? _module;
    private DotNetObjectReference<Collapse>? _dotNetRef;

    private bool HasVisualContent => IconBefore != null || IconAfter != null || (!string.IsNullOrEmpty(Label) && !LabelHidden) || SummaryContent != null;

    private string? ClassValue => new CssBuilder("blue-collapse").AddClass(Class).Build();

    private string? SummaryClassValue => new CssBuilder("d-flex btn blue-collapse-header blue-menu-item icon-link")
        .AddClass("active", Active)
        .AddClass("blue-btn-square", Square || !HasVisualContent).Build();

    private string? IconClassValue => new CssBuilder("blue-collapse-chevron")
        .AddClass("ms-auto", HasVisualContent).Build();

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public RenderFragment? IconBefore { get; set; }

    [Parameter]
    public RenderFragment? IconAfter { get; set; }

    [Parameter]
    public RenderFragment? SummaryContent { get; set; }

    [Parameter]
    public string? Label { get; set; }

    [Parameter]
    public bool LabelHidden { get; set; }

    [Parameter]
    public bool Active { get; set; } = false;

    [Parameter]
    public bool Square { get; set; } = false;

    [Parameter]
    public bool Open { get; set; }

    [Parameter]
    public EventCallback<bool> OpenChanged { get; set; }

    [Parameter]
    public bool ResetChildClass { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/Collapse/Collapse.razor.js");
            _dotNetRef = DotNetObjectReference.Create(this);
            await _module.InvokeVoidAsync("init", _detailsRef, _dotNetRef);
        }
    }

    [JSInvokable]
    public async Task OnToggle(bool isOpen)
    {
        Open = isOpen;
        await OpenChanged.InvokeAsync(Open);
        StateHasChanged();
    }

    public async ValueTask DisposeAsync()
    {
        if (_module != null)
        {
            await _module.InvokeVoidAsync("dispose", _detailsRef);
            await _module.DisposeAsync();
        }
        _dotNetRef?.Dispose();
    }
}
