using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Services;

public class DialogService
{
    public event Func<DialogReference, Task>? OnInitialize;
    public event Func<DialogReference, Task>? OnDestroy;
    public event Func<DialogReference, Task>? OnShow;

    // Fires when C# Method `CloseAsync` has been executed
    public event Func<DialogReference, Task>? OnClose;

    // Fires when dialog close event has fired
    public event Func<DialogReference, Task>? OnClosed;

    public Task InitializeAsync(DialogReference dialogReference)
        => OnInitialize?.Invoke(dialogReference) ?? Task.CompletedTask;
    public Task DestroyAsync(DialogReference dialogReference)
        => OnDestroy?.Invoke(dialogReference) ?? Task.CompletedTask;

    public Task ShowAsync(DialogReference dialogReference)
        => OnShow?.Invoke(dialogReference) ?? Task.CompletedTask;

    public Task CloseAsync(DialogReference dialogReference)
        => OnClose?.Invoke(dialogReference) ?? Task.CompletedTask;

    internal Task ClosedAsync(DialogReference dialogReference)
        => OnClosed?.Invoke(dialogReference) ?? Task.CompletedTask;
}

public enum DialogType
{
    Modal,
    Offcanvas
}

public class DialogReference
{
    public string Id { get; set; } = "DialogReference-" + Guid.NewGuid().ToString();
    public bool Render { get; set; }
    public ElementReference? Element { get; set; }

    public RenderFragment? DialogContent { get; set; }
}