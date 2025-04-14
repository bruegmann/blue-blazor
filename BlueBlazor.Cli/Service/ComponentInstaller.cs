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
            Console.WriteLine($"❌ Component \"{baseName}\" was not found.");
            return;
        }

        if (!_targetRoot.Exists)
        {
            _targetRoot.Create();
        }

        foreach (var file in matchingFiles)
        {
            var dest = Path.Combine(_targetRoot.FullName, file.Name);
            File.Copy(file.FullName, dest, overwrite: true);
            Console.WriteLine($"✅ Copied: {file.Name}");
        }

        // Optional: Display metadata
        var metaFile = matchingFiles.FirstOrDefault(f => f.Name == $"{baseName}.meta.json");
        if (metaFile != null)
        {
            using var stream = metaFile.OpenRead();
            var meta = await JsonSerializer.DeserializeAsync<ComponentMeta>(stream);
            Console.WriteLine($"ℹ️  Description: {meta?.Description}");
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
