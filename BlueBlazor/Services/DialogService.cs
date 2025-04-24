using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Services;

public class DialogService
{
    public event Func<RenderFragment, Task>? OnShow;
    public event Func<Task>? OnClose;

    public Task ShowAsync(RenderFragment content)
        => OnShow?.Invoke(content) ?? Task.CompletedTask;

    public Task CloseAsync()
        => OnClose?.Invoke() ?? Task.CompletedTask;
}