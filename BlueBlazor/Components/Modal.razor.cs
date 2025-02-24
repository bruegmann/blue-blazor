using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlueBlazor.Components;

/// <summary>
/// Based on styling Bootstrap's Modal component but uses the native `&lt;dialog&gt;` HTML element.
/// Modal body will be rendered when the `show.bs.modal` event is fired.
/// </summary>
public partial class Modal
{
    private string _id = "Modal-" + Guid.NewGuid().ToString();
    private bool _render = false;
    private ElementReference _element;
    private IJSObjectReference? _module;
    private string? _dialogClass = "modal-dialog";

    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    [Parameter, EditorRequired]
    public RenderFragment? ToggleContent { get; set; }

    [Parameter]
    public RenderFragment? BodyContent { get; set; }

    /// <summary>
    /// Additional CSS class to be added to the modal body.
    /// </summary>
    [Parameter]
    public string? BodyClass { get; set; }

    [Parameter]
    public RenderFragment? FooterContent { get; set; }

    [Parameter]
    public string? TitleText { get; set; }

    [Parameter]
    public RenderFragment? TitleContent { get; set; }

    [Parameter]
    public ModalSize? Size { get; set; }

    [Parameter]
    public bool Scrollable { get; set; }

    protected override void OnParametersSet()
    {
        BuildCss();
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/Modal.razor.js");
        }
    }

    public async Task Open()
    {
        if (_module is not null)
        {
            await _module.InvokeVoidAsync("Show", _element);
            _render = true;
        }
    }

    private void BuildCss()
    {
        _dialogClass = new CssBuilder("modal-dialog")
            .AddClass("modal-dialog-scrollable", Scrollable)
            .AddClass($"modal-{Size?.ToString().ToLower()}", Size != null)
            .Build();
    }
}
