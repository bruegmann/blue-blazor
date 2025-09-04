using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Options;
using Microsoft.JSInterop;
using System.Text.Json.Serialization;

namespace BlueBlazor.Services;

public class DialogService
{
    private IJSRuntime JSRuntime { get; set; } = default!;

    public DialogService(IOptions<Options> options, IJSRuntime jsRuntime)
    {
        DevExpressSupport = options.Value.DevExpressSupport;
        JSRuntime = jsRuntime;
    }

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

    #region Blue Web JS Dialog Functions
    public async Task<string?> AskAsync(string text,
        string? title = null, string? defaultValue = null, string? icon = null, bool? switchPrimaryBtn = null,
        string? acceptBtnText = null, string? cancelBtnText = null, string? inputType = null)
    {
        string json = GetDialogOptionsJson(title, defaultValue, icon, switchPrimaryBtn, acceptBtnText, cancelBtnText, inputType);
        var result = await JSRuntime.InvokeAsync<object>("blueWeb.dialog.ask", text, json);
        if (result is System.Text.Json.JsonElement element && element.ValueKind == System.Text.Json.JsonValueKind.False)
        {
            return null;
        }
        return result?.ToString();
    }

    public async Task TellAsync(string text,
        string? title = null, string? defaultValue = null, string? icon = null, bool? switchPrimaryBtn = null,
        string? acceptBtnText = null, string? cancelBtnText = null, string? inputType = null)
    {
        string json = GetDialogOptionsJson(title, defaultValue, icon, switchPrimaryBtn, acceptBtnText, cancelBtnText, inputType);
        await JSRuntime.InvokeVoidAsync("blueWeb.dialog.tell", text, json);
    }

    public async Task<bool> VerifyAsync(string text,
        string? title = null, string? defaultValue = null, string? icon = null, bool? switchPrimaryBtn = null,
        string? acceptBtnText = null, string? cancelBtnText = null, string? inputType = null)
    {
        string json = GetDialogOptionsJson(title, defaultValue, icon, switchPrimaryBtn, acceptBtnText, cancelBtnText, inputType);
        return await JSRuntime.InvokeAsync<bool>("blueWeb.dialog.verify", text, json);
    }

    private string GetDialogOptionsJson(string? title = null, string? defaultValue = null, string? icon = null, bool? switchPrimaryBtn = null,
        string? acceptBtnText = null, string? cancelBtnText = null, string? inputType = null)
        => System.Text.Json.JsonSerializer.Serialize(new DialogOptions
        {
            Title = title,
            DefaultValue = defaultValue,
            Icon = icon,
            SwitchPrimaryBtn = switchPrimaryBtn,
            AcceptBtnText = acceptBtnText,
            CancelBtnText = cancelBtnText,
            InputType = inputType
        }, new System.Text.Json.JsonSerializerOptions
        {
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        });
    #endregion
}

public class DialogOptions
{
    public string? Title { get; set; }
    public string? DefaultValue { get; set; }
    public string? Icon { get; set; }
    public bool? SwitchPrimaryBtn { get; set; }
    public string? AcceptBtnText { get; set; }
    public string? CancelBtnText { get; set; }
    public string? InputType { get; set; }
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