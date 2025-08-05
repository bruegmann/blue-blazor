using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// Generates a QR code. Uses Web Component [`wa-qr-code`](https://webawesome.com/docs/components/qr-code) by Web Awesome.
/// </summary>
public partial class QrCodeGen
{
    /// <summary>
    /// Gets or sets the unique identifier.
    /// The value will be used as the HTML <see href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id">global id attribute</see>.
    /// </summary>
    [Parameter]
    public string? Id { get; set; }

    /// <summary>
    /// Optional CSS class names. If given, these will be included in the class attribute of the component.
    /// </summary>
    [Parameter]
    public virtual string? Class { get; set; } = null;

    /// <summary>
    /// Optional in-line styles. If given, these will be included in the style attribute of the component.
    /// </summary>
    [Parameter]
    public virtual string? Style { get; set; } = null;

    /// <summary>
    /// The QR code's value.
    /// </summary>
    [Parameter]
    public string? Value { get; set; }
    /// <summary>
    /// The label for assistive devices to announce. If unspecified, the value will be used instead.
    /// </summary>
    [Parameter]
    public string? Label { get; set; }
    /// <summary>
    /// The size of the QR code, in pixels.
    /// </summary>
    [Parameter]
    public string? Size { get; set; }
    /// <summary>
    /// The fill color. This can be any valid CSS color, but not a CSS custom property.
    /// </summary>
    [Parameter]
    public string? Fill { get; set; }
    /// <summary>
    /// The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property.
    /// </summary>
    [Parameter]
    public string? Background { get; set; }
    /// <summary>
    /// The edge radius of each module. Must be between 0 and 0.5.
    /// </summary>
    [Parameter]
    public string? Radius { get; set; }
    /// <summary>
    /// The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html)
    /// </summary>
    [Parameter]
    public QrCodeErrorCorrection ErrorCorrection { get; set; } = QrCodeErrorCorrection.H;

    /// <summary>
    /// Gets or sets a collection of additional attributes that will be applied to the created element.
    /// </summary>
    [Parameter(CaptureUnmatchedValues = true)]
    public virtual IReadOnlyDictionary<string, object>? AdditionalAttributes { get; set; }
}
