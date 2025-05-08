using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace BlueBlazor.Components;

public partial class ThemeGenerator : ComponentBase
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    [Parameter]
    public ThemeInfo? ThemeInfo { get; set; }

    [Parameter]
    public EventCallback<Theme> OnCompile { get; set; }

    private ElementReference _element;
    private IJSObjectReference? _module;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/themify/themify.es.js");
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/ThemeGenerator.razor.js");
            await Initialize();
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        if (_module is not null && ThemeInfo is not null)
        {
            string? themeInfoJson = JsonSerializer.Serialize(ThemeInfo);

            await _module.InvokeVoidAsync("SetThemeInfo", _element, themeInfoJson);
        }
    }

    private async Task Initialize()
    {
        if (_module is not null)
        {
            string? themeInfoJson = null;
            if (ThemeInfo != null)
            {
                themeInfoJson = JsonSerializer.Serialize(ThemeInfo);
            }

            await _module.InvokeVoidAsync("Initialize", _element, DotNetObjectReference.Create(this), themeInfoJson, null, true);
        }
    }

    [JSInvokable]
    public async Task InvokeCompile(string detailsJson)
    {
        Theme? theme = JsonSerializer.Deserialize<Theme>(detailsJson);
        await OnCompile.InvokeAsync(theme);
    }
}

public class Theme
{
    [JsonPropertyName("css")]
    public string Css { get; set; } = "";

    [JsonPropertyName("themeInfo")]
    public ThemeInfo? ThemeInfo { get; set; }
}

public class ThemeInfo
{
    [JsonPropertyName("appearance")]
    public string Appearance { get; set; } = "";

    [JsonPropertyName("blueWebVersion")]
    public string BlueWebVersion { get; set; } = "";

    [JsonPropertyName("colorMode")]
    public string ColorMode { get; set; } = "";

    [JsonPropertyName("exportOnlyCssVars")]
    public bool ExportOnlyCssVars { get; set; }

    [JsonPropertyName("includeNeuScss")]
    public bool IncludeNeuScss { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; } = "";

    [JsonPropertyName("variables")]
    public Dictionary<string, string> Variables { get; set; } = [];

    [JsonPropertyName("customStyle")]
    public string? CustomStyle { get; set; } = "";
}