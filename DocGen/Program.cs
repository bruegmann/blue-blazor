﻿public class Program
{
    public static void Main(string[] args)
    {
        string componentsPath = Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "BlueBlazor", "Components");
        string storiesPath = Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "BlueBlazor.Docs", "Stories");
        string pagesPath = Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "BlueBlazor.Docs", "Pages", "Components");
        string dataPath = Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "BlueBlazor.Docs", "wwwroot", "data");

        string xmlDocumentationPath = Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "BlueBlazor", "bin", "Debug", "net8.0", "BlueBlazor.xml");

        string componentNamespace = "BlueBlazor.Components";
        string assemblyName = "BlueBlazor";

        Helper helper = new Helper();
        helper.RazorTemplate = "@{ /* This file is generated by DocGen. Don't make direct changes. */ }\n" +
            "{imports}\n" +
            "<DocGenContent BasePath=\"{pageUrl}\" Section=\"@Section\">\n<ChildContent>{content}</ChildContent>\n" +
            "<PropsContent>{props}</PropsContent>\n" +
            "<ExamplesContent>{examples}</ExamplesContent>\n</DocGenContent>\n" +
            "@code { [Parameter] public string? Section { get; set; } }";

        helper.GenerateComponentPages(componentsPath, storiesPath, pagesPath, dataPath,
            componentNamespace, assemblyName, xmlDocumentationPath).Wait();

        string readmePath = Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "README.md");
        string indexRazorPath = Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "BlueBlazor.Docs", "Pages", "Index.razor");
        helper.RazorTemplate = "@{ /* This file is generated by DocGen. Don't make direct changes. */ }\n" +
         "{imports}\n" +
         "<DocGenContent>\n<ChildContent>{content}</ChildContent>\n</DocGenContent>";
        helper.GeneratePage(readmePath, indexRazorPath).Wait();
    }
}
