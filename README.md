# Blue Blazor

Blue Blazor is an adaptation of [Blue Web](https://bruegmann.github.io/blue-web) for Blazor.

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
<link rel="stylesheet" href="_content/BlueBlazor/css/blue-web.min.css" />
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

Some components require JavaScript. Take a look at the individual component page. You can embed them like this:

```html
<script src="_content/BlueBlazor/js/dialog.bundle.js"></script>
<script src="_content/BlueBlazor/js/modal.bundle.js"></script>
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
<link rel="stylesheet" href="_content/BlueBlazor/css/blue-web.min.css" />
<link rel="stylesheet" href="css/your-theme.css" />
```

To support dark mode, you should create a separated theme. You can then use media queries to switch between the themes:

```html
<link rel="stylesheet" href="_content/BlueBlazor/css/blue-web.min.css" />
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

## JavaScript helpers

Blue Blazor provides some JavaScript helpers that aren't bound to any component. You can use them by injecting the `IJSRuntime` service and calling the methods.

### Dialog

You can use the [dialog function from Blue Web](https://bruegmann.github.io/blue-web/v1/utilities#dialog) like this:

```csharp
@inject IJSRuntime JSRuntime

@code {
	async Task verify()
	{
		if (firstRender)
		{
			bool confirmed = await JSRuntime.InvokeAsync<bool>("blueBlazor.dialog.verify", "Are you sure?");
		}
	}
}
```
