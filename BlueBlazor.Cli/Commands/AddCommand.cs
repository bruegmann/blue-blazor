// File: Commands/AddCommand.cs
using System.CommandLine;
using BlueBlazor.Cli.Services;

namespace BlueBlazor.Cli.Commands;

public static class AddCommand
{
    public static Command Create()
    {
        var command = new Command("add", "Adds a component to the target project");

        var nameArg = new Argument<string>("name", "Name of the component");
        var sourceOption = new Option<string>(
            name: "--source",
            description: "Path to the component source (local or GitHub)",
            getDefaultValue: () => "./Components");
        var targetOption = new Option<DirectoryInfo>(
            name: "--target",
            description: "Path to the target folder in the Blazor project",
            getDefaultValue: () => new DirectoryInfo("./"));

        command.AddArgument(nameArg);
        command.AddOption(sourceOption);
        command.AddOption(targetOption);

        command.SetHandler(async (name, source, target) =>
        {
            var sourceDir = await SourceResolver.ResolveAsync(source);
            if (sourceDir == null)
            {
                Console.WriteLine($"❌ Source not found: {source}");
                return;
            }

            var installer = new ComponentInstaller(sourceDir, target);
            await installer.InstallAsync(name);
        },
        nameArg, sourceOption, targetOption);

        return command;
    }
}
