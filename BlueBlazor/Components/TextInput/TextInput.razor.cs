using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// Represents a text input component with customizable properties such as label, placeholder, value, and styling.
/// </summary>
public partial class TextInput : ComponentBase
{
    private string? _labelClass;
    private string? _inputClass;
    private string? _placeholder;

    private string GetBindEvent()
    {
        return Immediate ? "oninput" : "onchange";
    }

    private string CurrentValue
    {
        get => Value;
        set
        {
            if (Value != value)
            {
                Value = value;
                ValueChanged.InvokeAsync(value);
            }
        }
    }

    [Parameter]
    public string Id { get; set; } = Guid.NewGuid().ToString();

    [Parameter]
    public string Type { get; set; } = "text";

    [Parameter]
    public string? Placeholder { get; set; }

    [Parameter, EditorRequired]
    public required string Label { get; set; }

    [Parameter]
    public RenderFragment? AfterLabelContent { get; set; }

    [Parameter]
    public bool LabelHidden { get; set; } = false;

    [Parameter]
    public bool Floating { get; set; } = false;

    [Parameter]
    public bool SmallLabel { get; set; } = false;

    /// <summary>
    /// Adds `.form-label` to the label.
    /// </summary>
    [Parameter]
    public bool FormLabel { get; set; } = false;

    [Parameter]
    public string Value { get; set; } = "";

    [Parameter]
    public EventCallback<string> ValueChanged { get; set; }

    [Parameter]
    public bool ReadOnly { get; set; } = false;

    /// <summary>
    /// If true, the value is updated immediately on input, otherwise on change.
    /// </summary>
    [Parameter]
    public bool Immediate { get; set; } = false;

    [Parameter]
    public string LabelClass { get; set; } = "";

    [Parameter]
    public string InputClass { get; set; } = "";

    [Parameter(CaptureUnmatchedValues = true)]
    public IDictionary<string, object>? AdditionalAttributes { get; set; }

    protected override void OnParametersSet()
    {
        base.OnParametersSet();
        _labelClass = new CssBuilder().AddClass(LabelClass)
            .AddClass("form-label", FormLabel)
            .AddClass("my-0 lh-1 fw-bold small", SmallLabel).Build();
        _inputClass = new CssBuilder().AddClass(InputClass)
            .AddClass("form-control", !ReadOnly)
            .AddClass("form-control-plaintext", ReadOnly).Build();

        _placeholder = Placeholder;

        if (Floating && string.IsNullOrEmpty(_placeholder))
        {
            _placeholder = Label;
        }
    }
}
