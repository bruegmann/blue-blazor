# Blue Blazor

Blue Blazor is an adaptation of [Blue Web](https://bruegmann.github.io/blue-web) for Blazor.

## Breaking change!

Component `Text` has been renamed to `TextInput` to avoid conflicts with `<text></text>` and for a more fitting name. Also the default styling for the label has changed. You can the look back by using the `SmallLabel` attribute.

## Getting started

### Create project

Use one of the official Blazor project templates like **Blazor Web App** or **Blazor Server App (Empty)** to create a new project using Visual Studio or CLI. Make sure, no sample content will be added.

### Installation

```
dotnet add package BlueBlazor
```

[![Nuget](https://img.shields.io/nuget/v/BlueBlazor)](https://www.nuget.org/packages/BlueBlazor/)

### Import

To make use of Blue Blazor, add the following to your `_Imports.razor` file:

```razor
@using BlueBlazor.Components
```

### Register services

Register the service for localization in your `Program.cs` file:

```csharp
builder.Services.AddLocalization();
```

### Stylesheet

You can use the stylesheet of Blue Web by adding the following line to the head of your HTML:

```html
<link rel="stylesheet" href="_content/BlueBlazor/blue-web/style.min.css" />
```

### Add layout

Put this to your `MainLayout.razor` file:

```razor
<Layout>
    <SideContent>
        <SidebarMenu>
            <MenuItem Label="Home" Href="">
                <Icon>🏠</Icon>
            </MenuItem>
        </SidebarMenu>
    </SideContent>
    <PageContent>@Body</PageContent>
</Layout>
```

### Add page

Your project probably already has at least one page component. Change its content to this:

```razor
@page "/"

<Page>
    <Body>
        <h1>Hello, world!</h1>
    </Body>
</Page>

```

### JavaScript (optional)

Single components require JavaScript. Take a look at the individual component page. You can embed them like this:

```html
<script src="_content/BlueBlazor/js/qrCodeGen.bundle.js"></script>
<script src="_content/BlueBlazor/js/totpInput.bundle.js"></script>
```

When you know, you will use all components, you can also embed them all together:

```html
<script src="_content/BlueBlazor/js/all.bundle.js"></script>
```

### Next steps

You now have a very basic app with Blue Blazor. To learn more, check out [the examples](https://github.com/bruegmann/blue-blazor/tree/master/examples) and the [component docs](https://bruegmann.github.io/blue-blazor/).

## Theming

You can use [Themify](https://github.com/bruegmann/themify) to create custom themes. Enable **"Export only CSS variables"** for your theme and put the exported CSS to your project.
It needs to be embedded after the Blue Blazor stylesheet:

```html
<link rel="stylesheet" href="_content/BlueBlazor/blue-web/style.min.css" />
<link rel="stylesheet" href="css/your-theme.css" />
```

To support dark mode, you should create a separated theme. You can then use media queries to switch between the themes:

```html
<link rel="stylesheet" href="_content/BlueBlazor/blue-web/style.min.css" />
<link
  rel="stylesheet"
  href="css/your-light-theme.css"
  media="(prefers-color-scheme: light)"
/>
<link
  rel="stylesheet"
  href="css/your-dark-theme.css"
  media="(prefers-color-scheme: dark)"
/>
```

## Use JavaScript from Blue Web

Blue Blazor comes with the whole output folder of [Blue Web](https://bruegmann.github.io/blue-web) in it's `wwwroot` folder.
That means, you can use all of [Blue Web's JavaScript functions](https://bruegmann.github.io/blue-web/v1/js).

### Example 1: Progress

```razor
@inject IJSRuntime JSRuntime

<script src="_content/BlueBlazor/blue-web/js/progress.bundle.js"></script>

<Button Label="Load data" OnClick="loadData" />

@code {
    async Task loadData()
    {
        await JSRuntime.InvokeVoidAsync("window.blueWeb.progress.start");

        // do something to load data

        JSRuntime.InvokeVoidAsync("window.blueWeb.progress.stop");
    }
}
```

### Example 2: Dialog

```razor
@inject IJSRuntime JSRuntime

<script src="_content/BlueBlazor/blue-web/js/dialog.bundle.js"></script>

<Button Label="Delete" OnClick="delete" />

@code {
    async Task delete()
    {
        bool confirmed = await JSRuntime.InvokeAsync<bool>("blueWeb.dialog.verify", "Are you sure?");

        if (confirmed)
        {
            // do something to delete
        }
    }
}
```

## Breaking changes

### From v2 to v3

Component `Text` has been renamed to `TextInput` to avoid conflicts with `<text></text>` and for a more fitting name. Also the default styling for the label has changed. You can the look back by using the `SmallLabel` attribute.

### From v1 to v2

The way to embed Blue Web CSS has changed. You now need to change the following line to the head of your HTML:

```diff
- <link rel="stylesheet" href="_content/BlueBlazor/css/blue-web.min.css" />
+ <link rel="stylesheet" href="_content/BlueBlazor/blue-web/style.min.css" />
```
