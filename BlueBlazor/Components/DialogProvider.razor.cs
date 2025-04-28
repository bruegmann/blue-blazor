using BlueBlazor.Services;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace BlueBlazor.Components;

public partial class DialogProvider : ComponentBase
{
    private IJSObjectReference? Module;

    [Inject]
    protected IJSRuntime JSRuntime { get; set; } = default!;

    [Inject]
    private DialogService DialogService { get; set; } = default!;

    private List<DialogReference> Dialogs { get; set; } = new List<DialogReference>();

    protected override void OnInitialized()
    {
        DialogService.OnInitialize += InitializeDialog;
        DialogService.OnDestroy += DestroyDialog;
        DialogService.OnShow += ShowDialog;
        DialogService.OnClose += CloseDialog;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            Module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/DialogProvider.razor.js");
        }
    }

    private async Task InitializeDialog(DialogReference dialogReference)
    {
        Dialogs.Add(dialogReference);
        StateHasChanged();
        await Task.Delay(1); // sicherstellen, dass das Element gerendert ist

        if (Module is not null && dialogReference.Element is not null)
        {
            await Module.InvokeVoidAsync("Initialize", dialogReference.Element, DotNetObjectReference.Create(this));
        }
    }

    private async Task DestroyDialog(DialogReference dialogReference)
    {
        Dialogs.Remove(dialogReference);
        StateHasChanged();
        await Task.Delay(1);
    }

    private async Task ShowDialog(DialogReference dialogReference)
    {
        dialogReference.Render = true;
        StateHasChanged();
        if (Module is not null && dialogReference.Element is not null)
        {
            await Module.InvokeVoidAsync("Show", dialogReference.Element);
        }
    }

    private async Task CloseDialog(DialogReference dialogReference)
    {
        if (Module is not null)
        {
            await Module.InvokeVoidAsync("Close", dialogReference.Element);
        }

        StateHasChanged();
    }

    [JSInvokable]
    public async Task InvokeClose(string id)
    {
        DialogReference? dialogReference = Dialogs.Where(d => d.Id == id).FirstOrDefault();
        if (dialogReference is not null)
        {
            StateHasChanged();
            await DialogService.ClosedAsync(dialogReference);
        }
    }
}