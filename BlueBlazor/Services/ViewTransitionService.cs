using Microsoft.JSInterop;

namespace BlueBlazor.Services;

/// <summary>
/// Provides a helper method to use view transitions in a Blazor application, enabling smooth visual transitions
/// between UI states.
/// </summary>
public class ViewTransitionService
{
    private IJSRuntime _jSRuntime;
    private readonly Dictionary<Guid, Func<Task>> _callbacks = new();


    public ViewTransitionService(IJSRuntime jSRuntime)
    {
        _jSRuntime = jSRuntime;
    }

    public Task Run(Func<Task> callback) => RunInternal(callback);


    public Task Run(Action callback) => RunInternal(() =>
    {
        callback();
        return Task.CompletedTask;
    });


    private async Task RunInternal(Func<Task> callback)
    {
        var id = Guid.NewGuid();
        _callbacks[id] = callback;

        await _jSRuntime.InvokeVoidAsync(
            "window.blueBlazor.startViewTransition",
            DotNetObjectReference.Create(this),
            nameof(InvokeCallback),
            id
        );
    }


    [JSInvokable]
    public async Task InvokeCallback(Guid id)
    {
        if (_callbacks.TryGetValue(id, out var cb))
        {
            await cb();
            _callbacks.Remove(id);
        }
    }

}
