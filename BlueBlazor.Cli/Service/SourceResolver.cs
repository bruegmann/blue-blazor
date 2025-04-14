using System.Diagnostics;

namespace BlueBlazor.Cli.Services;

public static class SourceResolver
{
    public static async Task<DirectoryInfo?> ResolveAsync(string? source, string? repo)
    {
        if (!string.IsNullOrWhiteSpace(repo))
        {
            var repoUri = new Uri(repo);
            return await CloneGitRepositoryAsync(repoUri, source);
        }

        if (!string.IsNullOrWhiteSpace(source))
        {
            var dir = new DirectoryInfo(source);
            return dir.Exists ? dir : null;
        }

        return null;
    }

    private static async Task<DirectoryInfo?> CloneGitRepositoryAsync(Uri repoUri, string? relativePath)
    {
        var repoName = repoUri.Segments.Last().Replace(".git", "");
        var tempPath = Path.Combine(Path.GetTempPath(), "blueblazor", repoName);

        if (!Directory.Exists(tempPath))
        {
            Console.WriteLine($"⬇️  Cloning repository: {repoUri}");

            var process = Process.Start(new ProcessStartInfo
            {
                FileName = "git",
                Arguments = $"clone --depth=1 {repoUri} \"{tempPath}\"",
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false
            });

            if (process == null)
                return null;

            await process.WaitForExitAsync();
        }
        else
        {
            Console.WriteLine($"🔁 Using cached repository: {tempPath}");
        }

        // Navigate to subfolder if --source was set
        var finalPath = !string.IsNullOrWhiteSpace(relativePath)
            ? Path.Combine(tempPath, relativePath)
            : tempPath;

        var finalDir = new DirectoryInfo(finalPath);
        return finalDir.Exists ? finalDir : null;
    }
}
