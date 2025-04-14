using System.CommandLine;
using BlueBlazor.Cli.Commands;

var sourceOption = new Option<string?>("--source", () => "BlueBlazor/Components", "Path to the local components directory");
var repoOption = new Option<string?>("--repo", () => "https://github.com/bruegmann/blue-blazor.git", "Git repository URL (optional)");

var rootCommand = new RootCommand("BlueBlazor CLI Tool")
{
    AddCommand.Create(sourceOption, repoOption),
    ListCommand.Create(sourceOption, repoOption)
};

return await rootCommand.InvokeAsync(args);
