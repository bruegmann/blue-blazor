# Blue Blazor

Blue Blazor is an adaptation of [Blue Web](https://bruegmann.github.io/blue-web) for Blazor.

## Getting started

### Installation

You can install Blue Blazor via NuGet. You can find it in the NuGet source "GitLab". [Click here to find out how to install it.](https://gitlab.patorg.de/groups/dev/-/packages?orderBy=created_at&sort=desc&search%5B%5D=BlueBlazor)

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

### JavaScript

Some components require JavaScript. You can embed all together:

```html
<script src="_content/BlueBlazor/js/all.bundle.js"></script>
```

If you don't them all, you can also embed them individually:

```html
<script src="_content/BlueBlazor/js/dialog.bundle.js"></script>
<script src="_content/BlueBlazor/js/modal.bundle.js"></script>
<script src="_content/BlueBlazor/js/qrCodeGen.bundle.js"></script>
<script src="_content/BlueBlazor/js/totpInput.bundle.js"></script>
```

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

Blue Blazor provides some JavaScript helpers that aren't bound to any component. You can use them by injecting the `IJSRuntime` service and calling the methods:

```csharp
@inject IJSRuntime JSRuntime

@code {
	async Task ask()
	{
		if (firstRender)
		{
			await JSRuntime.InvokeVoidAsync("BlueBlazor.Helpers.scrollToTop");
		}
	}
}
```