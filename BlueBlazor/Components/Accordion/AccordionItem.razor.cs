using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

public partial class AccordionItem : BlueComponentBase, IAsyncDisposable
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _detailsRef;
    private IJSObjectReference? _module;
    private DotNetObjectReference<AccordionItem>? _dotNetRef;

    private string? NameValue => Parent?.ExpandSingleOrNone == true ? Parent.Identifier : null;

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public bool Open { get; set; }

    [Parameter]
    public EventCallback<bool> OpenChanged { get; set; }

    [Parameter]
    public string? HeaderText { get; set; }

    [Parameter]
    public RenderFragment? HeaderContent { get; set; }

    [Parameter]
    public string? HeaderClass { get; set; }

    [Parameter]
    public string? HeaderButtonClass { get; set; }

    [Parameter]
    public string? BodyClass { get; set; }

    [Parameter]
    public string? BodyStyle { get; set; }

    [CascadingParameter]
    private Accordion? Parent { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/Accordion/AccordionItem.razor.js");
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