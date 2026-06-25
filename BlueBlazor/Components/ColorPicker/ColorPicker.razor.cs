using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

/// <summary>
/// Uses Web Component [`wa-color-picker`](https://webawesome.com/docs/components/color-picker) by Web Awesome.
/// </summary>
public partial class ColorPicker<T> : BlueComponentBase
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    private string _color { get; set; } = "";

    private T? _value;
    private bool _open;
    private ElementReference? _element;
    private IJSObjectReference? _module;

    [Parameter]
    public string? Label { get; set; }

    [Parameter]
    public bool LabelHidden { get; set; }

    [Parameter]
    public T? Value { get; set; }

    [Parameter]
    public EventCallback<T> ValueChanged { get; set; }

    [Parameter]
    public List<string>? Swatches { get; set; }

    [Parameter]
    public bool WithFormatToggle { get; set; }

    [Parameter]
    public bool Disabled { get; set; }

    [Parameter]
    public bool Open { get; set; }

    [Parameter]
    public EventCallback<bool> OpenChanged { get; set; }

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    protected override void OnInitialized()
    {
        base.OnInitialized();
        _color = ColorConverter.GenericToHex(_value);
    }

    protected async override Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import",
                "./_content/BlueBlazor/Components/ColorPicker/ColorPicker.razor.js");

            if (_module != null)
            {
                await _module.InvokeVoidAsync("init", _element, DotNetObjectReference.Create(this));
                if (Open)
                {
                    await _module.InvokeVoidAsync("runFn", _element, "show");
                }
            }
        }
    }

    protected override void OnParametersSet()
    {
        if (!EqualityComparer<T?>.Default.Equals(_value, Value))
        {
            _value = Value;
            _color = ColorConverter.GenericToHex(_value);
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        if (_open != Open)
        {
            _open = Open;
            if (_module != null)
            {
                await _module.InvokeVoidAsync("runFn", _element, Open ? "show" : "hide");
            }
        }
    }

    private async Task HandleInput(ChangeEventArgs e)
    {
        if (e?.Value is string hex && !string.IsNullOrEmpty(hex))
        {
            _color = hex;
            T? newValue = default;

            if (!string.IsNullOrEmpty(_color))
            {
                var oleColor = ColorConverter.HexToOLE(_color);

                if (typeof(T) == typeof(string))
                {
                    newValue = (T)(object)_color; // Hex-Wert als String
                }
                else if (typeof(T) == typeof(int))
                {
                    newValue = (T)(object)oleColor; // OLE-Wert als int
                }
                else if (typeof(T) == typeof(double))
                {
                    newValue = (T)(object)(double)oleColor; // OLE-Wert als double
                }
                else
                {
                    throw new InvalidOperationException($"Unsupported type: {typeof(T)}");
                }

                if (!EqualityComparer<T?>.Default.Equals(_value, newValue))
                {
                    _value = newValue;
                    await ValueChanged.InvokeAsync(newValue);
                }
            }
        }
    }

    [JSInvokable]
    public async Task HandleHide()
    {
        _open = false;
        Open = false;
        await OpenChanged.InvokeAsync(false);
    }

    [JSInvokable]
    public async Task HandleShow()
    {
        _open = true;
        Open = true;
        await OpenChanged.InvokeAsync(true);
    }
}
