using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Services;

public class DialogService
{
    public event Func<DialogReference, Task<DialogReference>>? OnShow;

    // Fires when C# Method `CloseAsync` has been executed
    public event Func<DialogReference, Task>? OnClose;

    // Fires when dialog close event has fired
    public event Func<DialogReference, Task>? OnClosed;

    public Task<DialogReference> ShowAsync(RenderFragment? dialogContent)
    {
        var dialogReference = new DialogReference() { DialogContent = dialogContent };
        return ShowAsync(dialogReference);
    }

    public bool DevExpressSupport { get; set; }

    public Task<DialogReference> ShowAsync(DialogReference dialogReference)
        => OnShow!.Invoke(dialogReference);

    public Task CloseAsync(DialogReference dialogReference)
        => OnClose?.Invoke(dialogReference) ?? Task.CompletedTask;

    internal Task ClosedAsync(DialogReference dialogReference)
        => OnClosed?.Invoke(dialogReference) ?? Task.CompletedTask;
}

public class DialogReference
{
    public string Id { get; set; } = "DialogReference-" + Guid.NewGuid().ToString();
    public ElementReference? Element { get; set; }
    public RenderFragment? DialogContent { get; set; }

    /// <summary>
    /// By default, when the dialog is closed (HTML Dialog Close Event has fired), 
    /// dialog element and reference in DialogProvider will be removed. If you want to keep the dialog element in the DOM, set this property to true.
    /// </summary>
    public bool KeepOnClose { get; set; } = false;
}