using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class ColorPicker<T> : BlueComponentBase
{
    private string _color { get; set; } = "";

    private T? _value;

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
    public RenderFragment? ChildContent { get; set; }

    protected override void OnInitialized()
    {
        base.OnInitialized();
        SyncValue(Value);
    }

    protected override void OnParametersSet()
    {
        if (!EqualityComparer<T?>.Default.Equals(_value, Value))
        {
            _value = Value;
            SyncValue(_value);
        }

        base.OnParametersSet();
    }

    private void SyncValue(T? val)
    {
        if (val != null)
        {
            RgbColor? rgbColor = null;

            if (typeof(T) == typeof(string))
            {
                rgbColor = ColorConverter.GetRGB((string)(object)val);
            }
            else if (typeof(T) == typeof(double))
            {
                rgbColor = ColorConverter.GetRGB(((double)(object)val).ToString());
            }
            else if (typeof(T) == typeof(int))
            {
                rgbColor = ColorConverter.GetRGB(((int)(object)val).ToString());
            }
            else
            {
                throw new InvalidOperationException($"Unsupported type: {typeof(T)}");
            }

            if (rgbColor != null)
            {
                _color = ColorConverter.RgbToHex(rgbColor);
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
}
