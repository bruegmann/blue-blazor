using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace BlueBlazor.Components;

public partial class Themify : BlueComponentBase, IAsyncDisposable
{
    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;

    private ElementReference _element;
    private ElementReference _styleElement;
    private IJSObjectReference? _module;
    private DotNetObjectReference<Themify>? _dotNetObject;
    private string? _json;
    private readonly StringBuilder _cssBuilder = new();
    private string? _css;
    private bool _isDisposed;
    private JsonSerializerOptions _jsonSerializerOptions;

    public Themify()
    {
        _jsonSerializerOptions = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true,
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            DictionaryKeyPolicy = JsonNamingPolicy.CamelCase
        };
        _jsonSerializerOptions.Converters.Add(new JsonStringEnumConverter(JsonNamingPolicy.CamelCase));
    }

    [Parameter]
    public ThemeInfo? ThemeInfo { get; set; }

    [Parameter]
    public EventCallback<ThemeInfo?> ThemeInfoChanged { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            _module = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "./_content/BlueBlazor/Components/Themify/Themify.razor.js");
            if (_module is not null)
            {
                _dotNetObject = DotNetObjectReference.Create(this);
                string? themeInfoJson = null;

                if (ThemeInfo != null)
                {
                    themeInfoJson = JsonSerializer.Serialize(ThemeInfo, _jsonSerializerOptions);
                }

                await _module.InvokeVoidAsync("init", _element, _dotNetObject, _styleElement, themeInfoJson);
            }
        }
    }

    [JSInvokable]
    public async Task ReceiveThemeInfo(string json)
    {
        if (_isDisposed) return;
        _json = json;

        if (ThemeInfoChanged.HasDelegate)
        {
            ThemeInfo? themeInfo = JsonSerializer.Deserialize<ThemeInfo?>(json, _jsonSerializerOptions);
            await ThemeInfoChanged.InvokeAsync(themeInfo);
        }

        StateHasChanged();
    }

    [JSInvokable]
    public void ReceiveCssChunk(string chunk, bool isFirst, bool isLast)
    {
        if (_isDisposed) return;

        if (isFirst)
            _cssBuilder.Clear();

        _cssBuilder.Append(chunk);

        if (isLast)
        {
            _css = _cssBuilder.ToString();
            StateHasChanged();
        }
    }

    public async ValueTask DisposeAsync()
    {
        if (_isDisposed) return;
        _isDisposed = true;

        var module = _module;
        _module = null;

        if (module is not null)
        {
            try
            {
                await module.InvokeVoidAsync("dispose", _element);
            }
            catch (ObjectDisposedException) { }
            catch (JSDisconnectedException) { }

            await module.DisposeAsync();
        }

        _dotNetObject?.Dispose();
    }
}

public class ThemeInfo
{
    public string Name { get; set; } = "";
    public Dictionary<string, string> Variables { get; set; } = new();
    public ThemeAppearance Appearance { get; set; }
    public string BlueWebVersion { get; set; } = "";
}

public enum ThemeAppearance
{
    Soft,
    Bold
}