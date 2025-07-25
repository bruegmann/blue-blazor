using BlueBlazor.Services;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

/// <summary>
/// Contains and manages dialogs coming from the `DialogService`.
/// `DialogService` has to be registered inside your `Program.cs` like this:
/// 
/// ```csharp
/// builder.Services.AddBlueBlazor();
/// ```
/// 
/// You have to put `&lt;DialogProvider /&gt;` somewhere in your app if you want to use the `DialogService`. Like in your `App.razor` or `MainLayout.razor`.
/// `DialogProvider` has to be interactive. So maybe you have to set `&lt;DialogProvider @rendermode="InteractiveServer" /&gt;` or `&lt;DialogProvider @rendermode="InteractiveAuto" /&gt;`.
/// </summary>
public partial class DialogProvider : ComponentBase, IDisposable
{
    private IJSObjectReference? Module;

    [Inject]
    protected IJSRuntime JSRuntime { get; set; } = default!;

    [Inject]
    private DialogService DialogService { get; set; } = default!;

    private List<DialogReference> _dialogs = new List<DialogReference>();

    public void Dispose()
    {
        DialogService.OnShow -= ShowDialog;
        DialogService.OnClose -= CloseDialog;
    }

    protected override void OnInitialized()
    {
        DialogService.OnShow += ShowDialog;
        DialogService.OnClose += CloseDialog;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/blue-web/js/dialog.bundle.js");
            Module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/DialogProvider/DialogProvider.razor.js");
        }
    }

    private async Task<DialogReference> ShowDialog(DialogReference dialogReference)
    {
        _dialogs.Add(dialogReference);
        StateHasChanged();
        await Task.Delay(1);
        if (Module is not null && dialogReference.Element is not null)
        {
            await Module.InvokeVoidAsync("Initialize", dialogReference.Element, DotNetObjectReference.Create(this));
            await Module.InvokeVoidAsync("Show", dialogReference.Element);
        }
        return dialogReference;
    }

    private async Task CloseDialog(DialogReference dialogReference)
    {
        if (Module is not null)
        {
            await Module.InvokeVoidAsync("Close", dialogReference.Element);
        }

        StateHasChanged();
    }

    private void DestroyDialog(DialogReference dialogReference)
    {
        _dialogs.Remove(dialogReference);
        StateHasChanged();
    }

    [JSInvokable]
    public async Task InvokeClose(string id)
    {
        DialogReference? dialogReference = _dialogs.Where(d => d.Id == id).FirstOrDefault();
        if (dialogReference is not null)
        {
            StateHasChanged();
            await DialogService.ClosedAsync(dialogReference);
            if (!dialogReference.KeepOnClose)
            {
                await Task.Delay(500);
                DestroyDialog(dialogReference);
            }
        }
    }
}