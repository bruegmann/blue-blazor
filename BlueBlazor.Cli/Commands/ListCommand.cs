// File: Commands/ListCommand.cs
using System.CommandLine;
using BlueBlazor.Cli.Services;

namespace BlueBlazor.Cli.Commands;

public static class ListCommand
{
    public static Command Create(Option<string?> sourceOption, Option<string?> repoOption)
    {
        var command = new Command("list", "Lists available components in the source folder")
        {
            sourceOption,
            repoOption
        };

        command.SetHandler(async (string? source, string? repo) =>
        {
            var sourceDir = await SourceResolver.ResolveAsync(source, repo);
            if (sourceDir == null)
            {
                Console.WriteLine($"❌ Source not found: {source}");
                return;
            }

            var lister = new ComponentLister(sourceDir);
            lister.ListAvailableComponents();
        }, sourceOption, repoOption);

        return command;
    }
}
