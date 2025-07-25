using BlueBlazor.Services;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// A helper component that will run `await DialogService.ShowAsync(DialogContent)` when user clicks on your provided `ToggleContent`.
/// `DialogService` has to be registered inside your `Program.cs`.
/// 
/// As `DialogContent` you should use `ModalDialog` or `OffcanvasDialog` component, which are part of Blue Blazor.
/// </summary>
public partial class DialogOpener : ComponentBase
{
    [Inject]
    private DialogService DialogService { get; set; } = default!;

    [Parameter]
    public RenderFragment? ToggleContent { get; set; }

    [Parameter]
    public RenderFragment? DialogContent { get; set; }

    private async Task Open()
    {
        await DialogService.ShowAsync(DialogContent);
    }
}
