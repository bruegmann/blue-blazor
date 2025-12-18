using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Internals.InlineEditParts;

public partial class EditView
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _formElement;
    private IJSObjectReference? _module;
    private bool _isManuallyConfirming = false;

    [Parameter]
    public EventCallback OnConfirm { get; set; }

    [Parameter]
    public EventCallback OnDismiss { get; set; }

    [Parameter]
    public EventCallback OnLoseFocus { get; set; }

    [Parameter]
    public bool ConfirmOnLoseFocus { get; set; }

    /// <summary>
    /// By default if the edit form is submitted, the confirm action will be fired.
    /// You can prevent this. Might be useful if your edit view is more complex and has forms in itself.
    /// </summary>
    [Parameter]
    public bool PreventConfirmOnSubmit { get; set; }

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter(CaptureUnmatchedValues = true)]
    public IDictionary<string, object>? AdditionalAttributes { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Internals/InlineEditParts/EditView.razor.js");
            await Initialize(_formElement);
        }
    }

    public async Task Initialize(ElementReference element)
    {
        if (_module is not null)
        {
            await _module.InvokeVoidAsync("Initialize", element, DotNetObjectReference.Create(this), PreventConfirmOnSubmit);
        }
    }

    public async Task ConfirmManually()
    {
        _isManuallyConfirming = true;
        await OnConfirm.InvokeAsync();
        
        await Task.Delay(500);
        
        _isManuallyConfirming = false;
    }

    [JSInvokable]
    public async Task InvokeConfirmManually()
    {
        await ConfirmManually();
    }

    [JSInvokable]
    public async Task InvokeConfirm()
    {
        await OnConfirm.InvokeAsync();
    }

    [JSInvokable]
    public async Task InvokeDismiss()
    {
        await OnDismiss.InvokeAsync();
    }

    [JSInvokable]
    public async Task InvokeLoseFocus()
    {
        if (_isManuallyConfirming)
        {
            return;
        }
        await OnLoseFocus.InvokeAsync();
        if (ConfirmOnLoseFocus)
        {
            await OnConfirm.InvokeAsync();
        }
    }
}
