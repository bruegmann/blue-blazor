using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class Intro : BlueComponentBase
{
    private bool _shake
    {
        get => _shake;
        set
        {
            ShakeChanged.InvokeAsync(value);
        }
    }

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public string? Logo { get; set; }

    [Parameter]
    public string LogoAlt { get; set; } = "Logo";

    [Parameter]
    public RenderFragment<Intro>? LogoContent { get; set; }

    [Parameter]
    public string Title { get; set; } = "";

    [Parameter]
    public string LogoMaxWidth { get; set; } = "100px";

    /// <summary>
    /// Runs a shake animation, e.g. when user entered invalid form data.
    /// </summary>
    [Parameter]
    public bool Shake { get; set; }

    /// <summary>
    /// Fires when shake animation finished. Doesn't work in SSR.
    /// </summary>
    [Parameter]
    public EventCallback<bool> ShakeChanged { get; set; }

    protected override async Task OnParametersSetAsync()
    {
        if (Shake)
        {
            await Task.Delay(400);
            _shake = false;
            StateHasChanged();
        }
    }
}
