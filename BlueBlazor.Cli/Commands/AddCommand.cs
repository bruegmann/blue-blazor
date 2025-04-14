// File: Commands/AddCommand.cs
using System.CommandLine;
using BlueBlazor.Cli.Services;

namespace BlueBlazor.Cli.Commands;

public static class AddCommand
{
    public static Command Create(Option<string?> sourceOption, Option<string?> repoOption)
    {
        var command = new Command("add", "Adds a component to the target project")
        {
            sourceOption,
            repoOption
        };

        var nameArg = new Argument<string>("name", "Name of the component");
        var targetOption = new Option<DirectoryInfo>(
            name: "--target",
            description: "Path to the target folder in the Blazor project",
            getDefaultValue: () => new DirectoryInfo("./"));

        command.AddArgument(nameArg);
        command.AddOption(targetOption);

        command.SetHandler(async (name, source, repo, target) =>
        {
            var sourceDir = await SourceResolver.ResolveAsync(source, repo);
            if (sourceDir == null)
            {
                Console.WriteLine($"❌ Source not found: {source}");
                return;
            }

            var installer = new ComponentInstaller(sourceDir, target);
            await installer.InstallAsync(name);
        },
        nameArg, sourceOption, repoOption, targetOption);

        return command;
    }
}
