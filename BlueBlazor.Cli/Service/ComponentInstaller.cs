// File: Services/ComponentInstaller.cs
using System.Text.Json;

namespace BlueBlazor.Cli.Services;

public class ComponentInstaller
{
    private readonly DirectoryInfo _sourceRoot;
    private readonly DirectoryInfo _targetRoot;

    public ComponentInstaller(DirectoryInfo sourceRoot, DirectoryInfo targetRoot)
    {
        _sourceRoot = sourceRoot;
        _targetRoot = targetRoot;
    }

    public async Task InstallAsync(string name)
    {
        var baseName = Path.GetFileNameWithoutExtension(name);
        var matchingFiles = _sourceRoot.GetFiles($"{baseName}.*", SearchOption.TopDirectoryOnly);
        if (matchingFiles.Length == 0)
        {
            Console.WriteLine($"❌ Komponente \"{baseName}\" wurde nicht gefunden.");
            return;
        }

        var targetDir = Path.Combine(_targetRoot.FullName, baseName);
        Directory.CreateDirectory(targetDir);

        foreach (var file in matchingFiles)
        {
            var dest = Path.Combine(targetDir, file.Name);
            File.Copy(file.FullName, dest, overwrite: true);
            Console.WriteLine($"✅ Kopiert: {file.Name}");
        }

        // Optional: Metadaten ausgeben
        var metaFile = matchingFiles.FirstOrDefault(f => f.Name == $"{baseName}.meta.json");
        if (metaFile != null)
        {
            using var stream = metaFile.OpenRead();
            var meta = await JsonSerializer.DeserializeAsync<ComponentMeta>(stream);
            Console.WriteLine($"ℹ️  Beschreibung: {meta?.Description}");
        }
    }

    private class ComponentMeta
    {
        public string? Name { get; set; }
        public string? Version { get; set; }
        public string? Description { get; set; }
        public string[]? Files { get; set; }
    }
}
