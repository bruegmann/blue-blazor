using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class HueSaturationSlider : BlueComponentBase
{
    private string Color => $"hsl({Hue}, {Saturation}%, 50%)";
    private string SaturationGradient => $"linear-gradient(to right, hsl({Hue}, 0%, 50%), hsl({Hue}, 100%, 50%))";

    private int HueValue
    {
        get => Hue;
        set
        {
            Hue = value;
            if (HueChanged.HasDelegate)
            {
                _ = HueChanged.InvokeAsync(value);
            }
        }
    }

    private int SaturationValue
    {
        get => Saturation;
        set
        {
            Saturation = value;
            if (SaturationChanged.HasDelegate)
            {
                _ = SaturationChanged.InvokeAsync(value);
            }
        }
    }

    [Parameter]
    public int Hue { get; set; }

    [Parameter]
    public EventCallback<int> HueChanged { get; set; }

    [Parameter]
    public int Saturation { get; set; }

    [Parameter]
    public EventCallback<int> SaturationChanged { get; set; }

    [Parameter]
    public bool ReadOnly { get; set; }
}
