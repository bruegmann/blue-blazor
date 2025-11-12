using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Routing;
using System.Text.Json;

namespace BlueBlazor.Docs.Components.Layouts;

public partial class NavMenu : ComponentBase
{
    [Inject]
    private HttpClient Http { get; set; } = default!;

    [Inject]
    private NavigationManager NavigationManager { get; set; } = default!;

    public void Dispose()
    {
        NavigationManager.LocationChanged -= HandleLocationChanged;
    }

    protected override async Task OnInitializedAsync()
    {
        NavigationManager.LocationChanged += HandleLocationChanged;
        await LoadPagesData();
    }

    private void HandleLocationChanged(object? sender, LocationChangedEventArgs e)
    {
        StateHasChanged();
    }

    private bool IsActive(string href, bool exact = false)
    {
        Uri uri = NavigationManager.ToAbsoluteUri(href);
        string uriString = uri.ToString();

        if (exact ? (NavigationManager.Uri == uriString) : (NavigationManager.Uri.StartsWith(uriString)))
        {
            return true;
        }

        return false;
    }

    private async Task LoadPagesData()
    {
        var json = await Http.GetStringAsync("data/pages-data.json?v=7");
        componentPageUrls = JsonSerializer.Deserialize<Dictionary<string, Dictionary<string, string>>>(json);
    }

    Dictionary<string, Dictionary<string, string>>? componentPageUrls;
}