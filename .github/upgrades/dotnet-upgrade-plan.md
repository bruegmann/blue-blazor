# .NET 10 Upgrade Plan

## Execution Steps

Execute steps below sequentially one by one in the order they are listed.

1. Validate that a .NET 10 SDK required for this upgrade is installed on the machine and if not, help to get it installed.
2. Ensure that the SDK version specified in global.json files is compatible with the .NET 10 upgrade.
3. Upgrade BlueBlazor.Assets\BlueBlazor.Assets.esproj
4. Upgrade BlueBlazor\BlueBlazor.csproj
5. Upgrade BlueBlazor.Docs\BlueBlazor.Docs.csproj
6. Upgrade examples\BlazorWebAppAutoPerPage\BlazorWebAppAutoPerPage.Client\BlazorWebAppAutoPerPage.Client.csproj
7. Upgrade BlueBlazor.Tests\BlueBlazor.Tests.csproj
8. Upgrade examples\BlazorWebAppAutoPerPage\BlazorWebAppAutoPerPage\BlazorWebAppAutoPerPage.csproj
9. Upgrade examples\BlazorServerApp\BlazorServerApp.csproj
10. Upgrade DocGen\DocGen.csproj
11. Run unit tests to validate upgrade in the projects listed below:
    - BlueBlazor.Tests\BlueBlazor.Tests.csproj

## Settings

This section contains settings and data used by execution steps.

### Aggregate NuGet packages modifications across all projects

NuGet packages used across all selected projects or their dependencies that need version update in projects that reference them.

| Package Name                                           | Current Version | New Version | Description                                   |
|:-------------------------------------------------------|:---------------:|:-----------:|:----------------------------------------------|
| Microsoft.AspNetCore.Components                        | 8.0.11          | 10.0.0      | Recommended for .NET 10                       |
| Microsoft.AspNetCore.Components.Web                    | 8.0.11          | 10.0.0      | Recommended for .NET 10                       |
| Microsoft.AspNetCore.Components.WebAssembly            | 8.0.11          | 10.0.0      | Recommended for .NET 10                       |
| Microsoft.AspNetCore.Components.WebAssembly.DevServer  | 8.0.11          | 10.0.0      | Recommended for .NET 10                       |
| Microsoft.AspNetCore.Components.WebAssembly.Server     | 8.0.11          | 10.0.0      | Recommended for .NET 10                       |
| Microsoft.Extensions.Localization                      | 8.0.11          | 10.0.0      | Recommended for .NET 10                       |

### Project upgrade details

This section contains details about each project upgrade and modifications that need to be done in the project.

#### BlueBlazor.Assets\BlueBlazor.Assets.esproj modifications

Project properties changes:
  - Target framework should be changed from `net6.0` to `net10.0`

#### BlueBlazor\BlueBlazor.csproj modifications

Project properties changes:
  - Target frameworks should be changed from `net8.0;net9.0` to `net8.0;net9.0;net10.0`

NuGet packages changes:
  - Microsoft.AspNetCore.Components.Web should be updated from `8.0.11` to `10.0.0` (*recommended for .NET 10*)
  - Microsoft.Extensions.Localization should be updated from `8.0.11` to `10.0.0` (*recommended for .NET 10*)

#### BlueBlazor.Docs\BlueBlazor.Docs.csproj modifications

Project properties changes:
  - Target framework should be changed from `net8.0` to `net10.0`

NuGet packages changes:
  - Microsoft.AspNetCore.Components.Web should be updated from `8.0.11` to `10.0.0` (*recommended for .NET 10*)
  - Microsoft.AspNetCore.Components.WebAssembly should be updated from `8.0.11` to `10.0.0` (*recommended for .NET 10*)
  - Microsoft.AspNetCore.Components.WebAssembly.DevServer should be updated from `8.0.11` to `10.0.0` (*recommended for .NET 10*)

#### examples\BlazorWebAppAutoPerPage\BlazorWebAppAutoPerPage.Client\BlazorWebAppAutoPerPage.Client.csproj modifications

Project properties changes:
  - Target framework should be changed from `net8.0` to `net10.0`

NuGet packages changes:
  - Microsoft.AspNetCore.Components.Web should be updated from `8.0.11` to `10.0.0` (*recommended for .NET 10*)
  - Microsoft.AspNetCore.Components.WebAssembly should be updated from `8.0.11` to `10.0.0` (*recommended for .NET 10*)

#### BlueBlazor.Tests\BlueBlazor.Tests.csproj modifications

Project properties changes:
  - Target framework should be changed from `net8.0` to `net10.0`

#### examples\BlazorWebAppAutoPerPage\BlazorWebAppAutoPerPage\BlazorWebAppAutoPerPage.csproj modifications

Project properties changes:
  - Target framework should be changed from `net8.0` to `net10.0`

NuGet packages changes:
  - Microsoft.AspNetCore.Components.WebAssembly.Server should be updated from `8.0.11` to `10.0.0` (*recommended for .NET 10*)

#### examples\BlazorServerApp\BlazorServerApp.csproj modifications

Project properties changes:
  - Target framework should be changed from `net8.0` to `net10.0`

#### DocGen\DocGen.csproj modifications

Project properties changes:
  - Target framework should be changed from `net8.0` to `net10.0`

NuGet packages changes:
  - Microsoft.AspNetCore.Components should be updated from `8.0.11` to `10.0.0` (*recommended for .NET 10*)