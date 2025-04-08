using System.CommandLine;
using BlueBlazor.Cli.Commands;

var rootCommand = new RootCommand("BlueBlazor CLI Tool")
{
    AddCommand.Create(),
    ListCommand.Create()
};

return await rootCommand.InvokeAsync(args);
