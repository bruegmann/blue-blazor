using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// This is a button with some useful default attributes.
/// </summary>
public partial class Button
{
    private bool _busy = false;
    private string _className = "";
    private bool _success
    {
        get => Success;
        set
        {
            SuccessChanged.InvokeAsync(value);
        }
    }

    [Parameter(CaptureUnmatchedValues = true)]
    public IDictionary<string, object>? AdditionalAttributes { get; set; }

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// Will be wrapped inside a `span` with the class `blue-btn-icon-wrapper` and `aria-hidden="true"`.
    /// Class `icon-link` will be added to the button if `IconBefore` or `IconAfter` is set.
    /// </summary>
    [Parameter]
    public RenderFragment? IconBefore { get; set; }

    /// <summary>
    /// Will be wrapped inside a `span` with the class `blue-btn-icon-wrapper` and `aria-hidden="true"`.
    /// Class `icon-link` will be added to the button if `IconBefore` or `IconAfter` is set.
    /// </summary>
    [Parameter]
    public RenderFragment? IconAfter { get; set; }

    [Parameter]
    public EventCallback<MouseEventArgs> OnClick { get; set; }

    [Parameter]
    public string? Href { get; set; }

    /// <summary>
    /// `Target="_blank"` will automatically add `rel="noreferrer"` to the anchor tag.
    /// </summary>
    [Parameter]
    public string? Target { get; set; }

    [Parameter]
    public string Class { get; set; } = "";

    /// <summary>
    /// Let the button appear busy.
    /// Hint: busy state is set automatically when the button is clicked and the `OnClick` event handler is running.
    /// </summary>
    [Parameter]
    public bool Busy { get; set; } = false;

    [Parameter]
    public string? Label { get; set; }

    /// <summary>
    /// The label is hidden, but still accessible for screen readers.
    /// </summary>
    [Parameter]
    public bool LabelHidden { get; set; } = false;

    [Parameter]
    public ButtonType? ButtonType { get; set; } = Shared.ButtonType.Button;

    /// <summary>
    /// Shortcut to set `Variant` to `Variant.Filled` and `Color` to `Color.Primary`.
    /// </summary>
    [Parameter]
    public bool FilledPrimary { get; set; } = false;

    [Parameter]
    public Variant Variant { get; set; } = Shared.Variant.Soft;

    [Parameter]
    public Color Color { get; set; } = Shared.Color.Secondary;

    /// <summary>
    /// You can also use properties `Sm` or `Lg` as shortcuts to set the size.
    /// </summary>
    [Parameter]
    public Size? Size { get; set; }

    /// <summary>
    /// Shortcut for `Size="BlueBlazor.Shared.Size.Sm"`
    /// </summary>
    [Parameter]
    public bool Sm { get; set; }

    /// <summary>
    /// Shortcut for `Size="BlueBlazor.Shared.Size.Lg"`
    /// </summary>
    [Parameter]
    public bool Lg { get; set; }

    [Parameter]
    public bool Disabled { get; set; } = false;

    /// <summary>
    /// Button will be displayed as successful for 3 seconds.
    /// </summary>
    [Parameter]
    public bool Success { get; set; } = false;

    [Parameter]
    public EventCallback<bool> SuccessChanged { get; set; }

    protected override void OnParametersSet()
    {
        if (FilledPrimary)
        {
            Variant = Variant.Filled; Color = Color.Primary;
        }
        buildClass();
    }

    protected override async Task OnParametersSetAsync()
    {
        if (Success)
        {
            await Task.Delay(3000);
            _success = false;
            buildClass();
            StateHasChanged();
        }
    }

    private async Task HandleClick(MouseEventArgs args)
    {
        _busy = true;
        await OnClick.InvokeAsync(args);
        _busy = false;
    }

    private string GetButtonVariantClass(Variant variant, Color buttonColor)
    {
        string color = buttonColor.ToString().ToLower();

        switch (variant)
        {
            case Variant.Soft:
                return $"blue-btn-soft-{color}";
            case Variant.Plain:
                return $"blue-btn-plain-{color}";
            case Variant.Outline:
                return $"btn-outline-{color}";
            case Variant.Link:
                return $"btn-link link-{color} link-offset-2";
            case Variant.MenuItem:
                return "blue-menu-item";
            case Variant.None:
                return "";
            default:
                return $"btn-{color}";
        }
    }

    private void buildClass()
    {
        _className = new CssBuilder(Class)
            .AddClass("btn", Variant != Variant.None)
            .AddClass(GetButtonVariantClass(Variant, Color), !_success)
            .AddClass("btn-success", _success)
            .AddClass($"btn-{Size?.ToString().ToLower()}", Size != null)
            .AddClass("btn-sm", Sm)
            .AddClass("btn-lg", Lg)
            .AddClass("icon-link", Busy || _busy || IconBefore != null || IconAfter != null)
            .Build()!;
    }
}
