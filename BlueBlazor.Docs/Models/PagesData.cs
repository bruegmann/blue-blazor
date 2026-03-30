using System.Text.Json;

namespace BlueBlazor.Docs.Models;

public class PagesData
{
    public Dictionary<string, Dictionary<string, string>> ServicePageUrls { get; set; } = new();
    public Dictionary<string, Dictionary<string, string>> ComponentPageUrls { get; set; } = new();

    public async Task CreateJsonFile()
    {
        string dataPath = Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "BlueBlazor.Docs", "wwwroot", "data");
        string pagesDataPath = Path.Combine(dataPath, "pages-data.json");
        await File.WriteAllTextAsync(pagesDataPath, JsonSerializer.Serialize(this));
    }
}
