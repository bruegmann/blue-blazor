// File: Services/ComponentLister.cs
using System.Text.Json;

namespace BlueBlazor.Cli.Services;

public class ComponentLister
{
    private readonly DirectoryInfo _sourceRoot;

    public ComponentLister(DirectoryInfo sourceRoot)
    {
        _sourceRoot = sourceRoot;
    }

    public void ListAvailableComponents()
    {
        if (!_sourceRoot.Exists)
        {
            Console.WriteLine($"❌ Source folder not found: {_sourceRoot.FullName}");
            return;
        }

        var metaFiles = _sourceRoot.GetFiles("*.meta.json", SearchOption.TopDirectoryOnly);

        if (metaFiles.Length == 0)
        {
            Console.WriteLine("ℹ️  No metadata files found. Listing by convention:");

            var components = _sourceRoot.GetFiles("*.razor")
                .Select(f => Path.GetFileNameWithoutExtension(f.Name))
                .Distinct()
                .OrderBy(n => n);

            foreach (var comp in components)
            {
                Console.WriteLine($"• {comp}");
            }

            return;
        }

        foreach (var file in metaFiles)
        {
            try
            {
                using var stream = file.OpenRead();
                var meta = JsonSerializer.Deserialize<ComponentMeta>(stream);
                Console.WriteLine($"• {meta?.Name ?? file.Name.Replace(".meta.json", "")} - {meta?.Description}");
            }
            catch
            {
                Console.WriteLine($"• {file.Name.Replace(".meta.json", "")} (invalid metadata)");
            }
        }
    }

    private class ComponentMeta
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
    }
}
