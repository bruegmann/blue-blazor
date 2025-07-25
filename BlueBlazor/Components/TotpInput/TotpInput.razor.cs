using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

/// <summary>
/// This uses `InputSplitted` from [Blue Web](https://bruegmann.github.io/blue-web/v1/js/Input%20Splitted).
/// </summary>
public partial class TotpInput
{
    [Inject]
    protected IJSRuntime JSRuntime { get; set; } = default!;


    private DotNetObjectReference<TotpInput>? _objRef;
    private IJSObjectReference? _module;


    [Parameter]
    public string Value { get; set; } = "";

    [Parameter]
    public EventCallback<string> ValueChanged { get; set; }

    [Parameter]
    public string Label { get; set; } = "";

    [Parameter]
    public string Id { get; set; } = Guid.NewGuid().ToString();

    [Parameter]
    public bool AutoFocus { get; set; } = false;

    [JSInvokable]
    public void OnChangeValue(string value)
    {
        Value = value;
        ValueChanged.InvokeAsync(Value);
        StateHasChanged();
    }

    protected override void OnInitialized()
    {
        _objRef = DotNetObjectReference.Create(this);
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/blue-web/js/input-splitted.bundle.js");
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/TotpInput/TotpInput.razor.js");

            if (_module is not null)
            {
                await _module.InvokeVoidAsync("init", _objRef, Id);
                if (AutoFocus)
                {
                    await _module.InvokeVoidAsync("focus", Id + "-control-1");
                }
            }
        }
    }

    async Task clearInput()
    {
        Value = "";
        await ValueChanged.InvokeAsync(Value);
        if (_module is not null)
        {
            await _module.InvokeVoidAsync("setValue", Id, "");
        }
        StateHasChanged();
    }
}
