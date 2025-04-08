namespace BlueBlazor.Cli.Services;

public static class SourceResolver
{
    public static async Task<DirectoryInfo?> ResolveAsync(string source)
    {
        if (Uri.TryCreate(source, UriKind.Absolute, out var uri) &&
            uri.Host.Contains("github.com"))
        {
            return await CloneGitHubRepoAsync(uri);
        }

        var dir = new DirectoryInfo(source);
        return dir.Exists ? dir : null;
    }

    private static async Task<DirectoryInfo?> CloneGitHubRepoAsync(Uri uri)
    {
        // Prüfen, ob die URL auf einen spezifischen Branch oder ein Verzeichnis verweist
        var repoUrl = uri.ToString();
        var repoPath = repoUrl.Split("tree/").FirstOrDefault(); // Nur den Git-Repo-Link extrahieren
        var directoryPath = uri.ToString().Split("tree/").LastOrDefault(); // Der Pfad nach "tree/"

        if (string.IsNullOrEmpty(repoPath) || string.IsNullOrEmpty(directoryPath))
        {
            Console.WriteLine($"❌ Invalid GitHub URL: {uri}");
            return null;
        }

        // Extrahiere den Branchnamen aus der URL, falls vorhanden
        var branchName = repoUrl.Split("tree/").LastOrDefault()?.Split('/').FirstOrDefault();

        if (string.IsNullOrEmpty(branchName))
        {
            Console.WriteLine($"❌ No branch found in the URL: {uri}");
            return null;
        }

        // Klone das Repository mit dem Branchnamen
        var repoName = repoPath.TrimEnd('/');
        var tempPath = Path.Combine(Path.GetTempPath(), "blueblazor", repoName.Split('/').Last());

        if (Directory.Exists(tempPath))
        {
            Console.WriteLine($"🔁 Using cached repository: {tempPath}");
        }
        else
        {
            Console.WriteLine($"⬇️  Cloning repository: {repoName} (Branch: {branchName})");
            var process = System.Diagnostics.Process.Start(new System.Diagnostics.ProcessStartInfo
            {
                FileName = "git",
                Arguments = $"clone --depth=1 --branch {branchName} {repoName}.git \"{tempPath}\"",
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false
            });

            if (process == null) return null;

            await process.WaitForExitAsync();
        }

        // Navigiere zum richtigen Verzeichnis im geklonten Repository
        var sourceDir = new DirectoryInfo(Path.Combine(tempPath, directoryPath));

        if (sourceDir.Exists)
        {
            return sourceDir;
        }

        Console.WriteLine($"❌ Directory not found: {directoryPath}");
        return null;
    }
}
