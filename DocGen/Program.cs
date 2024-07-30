﻿public class Program
{
    public static void Main(string[] args)
    {
        string storiesPath = Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "BlueBlazor.Docs", "Stories");
        string pagesPath = Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "BlueBlazor.Docs", "Pages", "Stories");

        string xmlDocumentationPath = Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "BlueBlazor", "bin", "Debug", "net8.0", "BlueBlazor.xml");

        string componentNamespace = "BlueBlazor.Components";
        string assemblyName = "BlueBlazor";

        Helper helper = new Helper();
        helper.RazorTemplate = "@{ /* This file is generated by DocGen. Don't make direct changes. */ }\n" +
            "<DocGenContent>\n{0}\n</DocGenContent>";

        helper.GenerateStoryPages(storiesPath, pagesPath, componentNamespace, assemblyName, xmlDocumentationPath).Wait();

        string readmePath = Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "README.md");
        string indexRazorPath = Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "BlueBlazor.Docs", "Pages", "Index.razor");

        helper.GeneratePage(readmePath, indexRazorPath).Wait();
    }
}
