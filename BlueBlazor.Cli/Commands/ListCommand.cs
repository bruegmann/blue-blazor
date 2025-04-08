// File: Commands/ListCommand.cs
using System.CommandLine;
using BlueBlazor.Cli.Services;

namespace BlueBlazor.Cli.Commands;

public static class ListCommand
{
    public static Command Create()
    {
        var command = new Command("list", "Lists available components in the source folder");

        var sourceOption = new Option<string>(
            name: "--source",
            description: "Path to the component source (local or GitHub)",
            getDefaultValue: () => "./Components");

        command.AddOption(sourceOption);

        command.SetHandler(async source =>
        {
            var sourceDir = await SourceResolver.ResolveAsync(source);
            if (sourceDir == null)
            {
                Console.WriteLine($"❌ Source not found: {source}");
                return;
            }

            var lister = new ComponentLister(sourceDir);
            lister.ListAvailableComponents();
        }, sourceOption);

        return command;
    }
}
