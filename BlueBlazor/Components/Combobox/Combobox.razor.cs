using BlueBlazor.Extensions;
using BlueBlazor.Internals.InlineEditParts;
using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Localization;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;


public partial class Combobox : BlueComponentBase
{
    [Inject]
    private IStringLocalizer<Resources.Phrases> L { get; set; } = default!;

    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    private string? _description;

    private ElementReference? _inputRef;
    private ElementReference? _blSelectListRef;
    private IJSObjectReference? _module;
    private Popover? _popoverRef;

    private string CurrentValue => !string.IsNullOrEmpty(Value) ? Value : _comboboxContext.Selected;
    private string? CurrentDescription => !string.IsNullOrEmpty(Description) ? Description : _description;
    private string CurrentDisplay => (!string.IsNullOrEmpty(CurrentDescription) ? CurrentDescription : CurrentValue).Trim();
    private string Label => !string.IsNullOrEmpty(CurrentDisplay) ? CurrentDisplay : $"{L["Select"]}...";

    private string? SelectListClassValue => new CssBuilder("blue-empty-message list-group list-group-flush overflow-auto")
        .AddClass("blue-scrollspy", Scrollspy).Build();
    private string? SelectListActiveClassValue => $"bg-{Color.ToAttributeValue(true) ?? "primary"}-subtle text-{Color.ToAttributeValue(true) ?? "primary"}-emphasis";

    private ComboboxContext _comboboxContext = new();

    [Parameter]
    public string? Id { get; set; }

    [Parameter]
    public string Value { get; set; } = "";

    [Parameter]
    public EventCallback<string> ValueChanged { get; set; }

    [Parameter]
    public string? Description { get; set; }

    [Parameter]
    public EventCallback<string?> DescriptionChanged { get; set; }

    [Parameter]
    public bool LabelHidden { get; set; }

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public Variant Variant { get; set; } = Variant.Soft;

    [Parameter]
    public Color Color { get; set; } = Color.Secondary;

    [Parameter]
    public bool PopoverEnd { get; set; }

    [Parameter]
    public bool Scrollspy { get; set; }

    [Parameter]
    public string? SelectListMaxHeight { get; set; } = "400px";

    [CascadingParameter(Name = "EditView")]
    protected EditView? EditView { get; set; }

    [CascadingParameter(Name = "ConfirmOnLoseFocus")]
    protected bool ConfirmOnLoseFocus { get; set; }

    protected async override Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import",
                "./_content/BlueBlazor/Components/Combobox/Combobox.razor.js");
        }
    }

    protected override void OnParametersSet()
    {
        _comboboxContext.Selected = Value;
    }

    private async Task HandleBlSelect(BlSelectEventArgs e)
    {
        _comboboxContext.Selected = e.Value;
        _description = e.Description;
        await ValueChanged.InvokeAsync(_comboboxContext.Selected);
        await DescriptionChanged.InvokeAsync(_description);
        
        if (EditView != null && ConfirmOnLoseFocus)
        {
            await EditView.ConfirmManually();
        }
        
        _popoverRef?.HidePopover();
    }

    private async Task HandlePopoverToggle(PopoverToggleEventArgs e)
    {
        if (_module != null && e.NewState == PopoverState.Open)
        {
            await _module.InvokeVoidAsync("focusElement", _inputRef);
            await _module.InvokeVoidAsync("scrollToActiveOption", _blSelectListRef);
        }
    }
}

public class ComboboxContext
{
    public string Selected { get; set; } = "";
    public string Search { get; set; } = "";
}