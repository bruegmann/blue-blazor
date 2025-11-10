using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// Displays a numeric value with a smooth rolling animation — similar to a mechanical odometer or number counter.
/// It’s designed for use in badges, notifications, dashboards, or any place where numbers change dynamically.
/// Uses [`bl-odometer`](https://bruegmann.github.io/blue-web/v1/js/Odometer) by Blue Web.
/// </summary>
public partial class Odometer : BlueComponentBase
{
    [Parameter]
    public int Value { get; set; }

    [Parameter]
    public int Max { get; set; } = 9;
}
