# BlueBlazor.Docs

## Run the docs

You need to execute `DocGen` once to generate the pages. After that, you can run the `BlueBlazor.Docs` project like any other Blazor project.

## Writing stories

In the `BlueBlazor` Visual Studio solution you'll find the project `DocGen`. It's a console app to generate pages for this docs. Source files for the generator are inside the `BlueBlazor.Docs` project inside the **Stories** folder. The structure is like this:

-   `Stories`
    -   **`{Component name}`** (name of the Blue Blazor component)
        -   `Examples` (you can have multiple examples)
            -   **`{ExampleName}`**`.razor`
        -   `README.md` (will be rendered on the start of the story page)

Inside an example Razor file you can add a title and description in a comment on the top of the page like this:

```razor
@{ /*docs {
        "title": "Basic example",
        "description": "A basic example of a button with using the `OnClick` event."
    } */ }
<Button Label="Click me" OnClick="onClick" />

<p>You have clicked the button @clickCount times.</p>

@code {
    int clickCount = 0;

    void onClick()
    {
        clickCount++;
    }
}
```

Everything after `docs` inside the comment must be valid JSON.
Description also supports markdown.

After executing `DocGen`, story pages will be saved to `Pages/Stories` of the `BlueBlazor.Docs` project.

The program also generates the home page `Pages/Index.razor` from the `README.md` of `BlueBlazor`.
