using BlueBlazor.Extensions;
using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.Localization;
using Microsoft.JSInterop;
using System.Diagnostics.CodeAnalysis;

namespace BlueBlazor.Components;


public partial class Combobox : BlueComponentBase
{
    [Inject]
    private IStringLocalizer<Resources.Phrases> L { get; set; } = default!;

    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference? _inputRef;
    private ElementReference? _blSelectListRef;
    private IJSObjectReference? _module;
    private Popover? _popoverRef;

    private string? SelectListClassValue => new CssBuilder("blue-empty-message list-group list-group-flush overflow-auto")
        .AddClass("blue-scrollspy", Scrollspy).Build();
    private string? SelectListActiveClassValue => $"bg-{Color.ToAttributeValue(true) ?? "primary"}-subtle text-{Color.ToAttributeValue(true) ?? "primary"}-emphasis";

    private ComboboxContext _comboboxContext = new();

    [Parameter]
    public string? Id { get; set; }

    /// <summary>
    /// When you set <see cref="Multiple"/>, make sure to use <see cref="SelectedItems"/> instead!
    /// </summary>
    [Parameter]
    public string? Value { get; set; }

    /// <summary>
    /// When you set <see cref="Multiple"/>, make sure to use <see cref="SelectedItems"/> instead!
    /// </summary>
    [Parameter]
    public EventCallback<string> ValueChanged { get; set; }

    /// <summary>
    /// When you set <see cref="Multiple"/>, make sure to use <see cref="SelectedItems"/> instead!
    /// </summary>
    [Parameter]
    public string? Description { get; set; }

    /// <summary>
    /// When you set <see cref="Multiple"/>, make sure to use <see cref="SelectedItems"/> instead!
    /// </summary>
    [Parameter]
    public EventCallback<string?> DescriptionChanged { get; set; }

    [Parameter]
    public List<ComboboxSelectedItem>? SelectedItems { get; set; }

    [Parameter]
    public EventCallback<List<ComboboxSelectedItem>> SelectedItemsChanged { get; set; }

    [Parameter]
    public bool LabelHidden { get; set; }

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public RenderFragment<ComboboxContext>? CustomButtonContent { get; set; }

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

    /// <summary>
    /// Enables multiple selection of options. Make sure to use <see cref="SelectedItems"/>
    /// instead of <see cref="Value"/>, <see cref="Description"/> or you will only control the first item.
    /// </summary>
    [Parameter]
    public bool Multiple { get; set; }

    [Parameter]
    public EventCallback<MouseEventArgs> OnClick { get; set; }

    [Parameter]
    public string? PopoverId { get; set; }

    [Parameter]
    public EventCallback<PopoverToggleEventArgs> OnTogglePopover { get; set; }

    [DynamicDependency(DynamicallyAccessedMemberTypes.All, typeof(BlSelectEventArgs))]
    public Combobox()
    {
    }

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
        if (Value != null)
        {
            _comboboxContext.SelectedItem = new ComboboxSelectedItem() { Value = Value, Description = Description };
        }
        if (SelectedItems != null)
        {
            _comboboxContext.SelectedItems = SelectedItems;
        }
    }

    private async Task HandleBlSelect(BlSelectEventArgs e)
    {
        if (Multiple)
        {
            var selected = _comboboxContext.GetSelected(e.Value);
            if (selected == null)
            {
                _comboboxContext.SelectedItems.Add(new ComboboxSelectedItem() { Value = e.Value, Description = e.Description });
            }
            else
            {
                _comboboxContext.SelectedItems.Remove(selected);
            }
        }
        else
        {
            _comboboxContext.SelectedItem = new ComboboxSelectedItem() { Value = e.Value, Description = e.Description };
        }
        
        if (!Multiple)
        {
            await Confirm();
        }
    }

    private async Task HandlePopoverToggle(PopoverToggleEventArgs e)
    {
        if (_module != null && e.NewState == PopoverState.Open)
        {
            await _module.InvokeVoidAsync("focusElement", _inputRef);
            await _module.InvokeVoidAsync("scrollToActiveOption", _blSelectListRef);
        }
        await OnTogglePopover.InvokeAsync(e);
    }

    private async Task Confirm()
    {
        if (!Multiple)
        {
            await ValueChanged.InvokeAsync(_comboboxContext.SelectedItem?.Value);
            await DescriptionChanged.InvokeAsync(_comboboxContext.SelectedItem?.Description);
        }
        await SelectedItemsChanged.InvokeAsync(_comboboxContext.SelectedItems);
        _popoverRef?.HidePopover();
    }
}

public class ComboboxContext
{
    private List<ComboboxSelectedItem> _selectedItems = [];
    public List<ComboboxSelectedItem> SelectedItems { get => _selectedItems; set { _selectedItems = value; } }
    public ComboboxSelectedItem? SelectedItem
    {
        get => _selectedItems.FirstOrDefault();
        set
        {
            var firstOrDefault = SelectedItems.FirstOrDefault();
            if (firstOrDefault == null && value != null)
            {
                _selectedItems.Add(value);
            }
            else if (firstOrDefault != null && value == null)
            {
                _selectedItems.Remove(firstOrDefault);
            }
            else if (firstOrDefault != null && value != null)
            {
                firstOrDefault.Value = value.Value;
                firstOrDefault.Description = value.Description;
            }
        }
    }

    public ComboboxSelectedItem? GetSelected(string value)
    {
        foreach (var item in SelectedItems)
        {
            if (item.Value == value) return item;
        }
        return null;
    }

    public string Search { get; set; } = "";
}

public class ComboboxSelectedItem
{
    public string Value { get; set; } = "";

    public string? Description { get; set; }
}