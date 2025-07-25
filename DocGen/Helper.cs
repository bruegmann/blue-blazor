using System.Reflection;
using Microsoft.AspNetCore.Components;
using System.Xml.Linq;
using System.Text.RegularExpressions;
using System.Text.Json;
using DocGen.Models;

public class Helper
{
    public string RazorTemplate { get; set; } = "@{ /* This file is generated by DocGen. Don't make direct changes. */ }\n{imports}\n" +
        "<div class=\"docgen\">\n{content}\n{props}\n{examples}\n</div>";

    public async Task GenerateComponentPages(string componentsPath, string storiesPath, string pagesPath, string dataPath,
        string componentNamespace, string assemblyName, string? xmlDocumentationPath = null)
    {
        var components = Directory.GetFiles(componentsPath, "*.razor", SearchOption.AllDirectories)
            .Select(path => new
            {
                Name = Path.GetFileNameWithoutExtension(path),
                ParentDirectory = Path.GetFileName(Path.GetDirectoryName(path)!)
            });

        var componentPageUrls = new Dictionary<string, Dictionary<string, string>>();

        foreach (var component in components)
        {
            var pagePath = Path.Combine(pagesPath, $"{component.Name}.razor");

            string readMeHtml = MarkdownToHtml($"# {PascalToReadable(component.Name)}");
            string parametersHtml = "";

            Type? componentType = Type.GetType($"{componentNamespace}.{component.Name}");
            if (componentType == null)
            {
                componentType = Type.GetType($"{componentNamespace}.{component.Name}, {assemblyName}");
            }
            if (componentType != null && xmlDocumentationPath != null)
            {
                string componentComment = GetXmlDocumentationCommentForClass(xmlDocumentationPath, componentType);
                readMeHtml += MarkdownToHtml(componentComment);

                var parameters = GetComponentParameters(componentType, xmlDocumentationPath);
                parametersHtml = ComponentParameterInfoToHtml(parameters);
            }

            string pageUrl = $"components/{PascalToKebabCase(component.Name)}";

            string pagesSectionName = PascalToReadable(component.ParentDirectory);
            string pagesComponentName = PascalToReadable(component.Name);

            if (componentPageUrls.ContainsKey(pagesSectionName))
            {
                componentPageUrls[pagesSectionName].Add(pagesComponentName, pageUrl);
            }
            else
            {
                componentPageUrls.Add(pagesSectionName, new() { { pagesComponentName, pageUrl } });
            }

            string storyPath = Path.Combine(storiesPath, component.Name);
            string storyImport = "";
            string storyHtml = "";
            if (Directory.Exists(storyPath))
            {
                storyImport = $"@using BlueBlazor.Docs.Stories.{component.Name}\n";
                storyHtml = await GetStoryContent(storyPath, "html");
            }

            string razor = ApplyRazorTemplate($"@page \"/{pageUrl}/{{section?}}\"\n{storyImport}", readMeHtml, parametersHtml, storyHtml, pageUrl);
            await File.WriteAllTextAsync(pagePath, razor);
        }

        string pagesDataPath = Path.Combine(dataPath, "pages-data.json");
        await File.WriteAllTextAsync(pagesDataPath, JsonSerializer.Serialize(componentPageUrls));
    }

    public async Task GeneratePage(string markdownPath, string targetFilePath, string? pageSlug = "/")
    {
        var markdown = await File.ReadAllTextAsync(markdownPath);
        string html = MarkdownToHtml(markdown);

        string razor = ApplyRazorTemplate($"@page \"{pageSlug}\"", html);
        await File.WriteAllTextAsync(targetFilePath, razor);
    }

    public async Task GenerateLLmsTxt(string llmsTxtPath, string readmePath, string componentsPath, string storiesPath,
        string componentNamespace, string assemblyName, string? xmlDocumentationPath = null)
    {
        string markdown = await File.ReadAllTextAsync(readmePath);

        var components = Directory.GetFiles(componentsPath, "*.razor").Select(Path.GetFileNameWithoutExtension);

        foreach (var component in components)
        {
            string componentMarkdown = $"## {component!}";

            Type? componentType = Type.GetType($"{componentNamespace}.{component}");
            if (componentType == null)
            {
                componentType = Type.GetType($"{componentNamespace}.{component}, {assemblyName}");
            }
            if (componentType != null && xmlDocumentationPath != null)
            {
                string componentComment = GetXmlDocumentationCommentForClass(xmlDocumentationPath, componentType);
                componentMarkdown += componentComment + "\n";
            }

            string storyPath = Path.Combine(storiesPath, component!);
            if (Directory.Exists(storyPath))
            {
                componentMarkdown += await GetStoryContent(storyPath, "markdown");
            }

            markdown += $"\n\n{componentMarkdown}\n";
        }

        await File.WriteAllTextAsync(llmsTxtPath, markdown);
    }



    private string ApplyRazorTemplate(string imports = "", string content = "", string props = "", string examples = "", string pageUrl = "")
    {
        return RazorTemplate.Replace("{imports}", imports)
                .Replace("{content}", content)
                .Replace("{props}", props)
                .Replace("{examples}", examples)
                .Replace("{pageUrl}", pageUrl);
    }

    private async Task<string> GetStoryContent(string storyPath, string format = "html")
    {
        string docsRegex = "@\\{\\s*\\/\\*docs([\\s\\S]*?)\\*\\/\\s*\\}";
        var examples = Directory.GetFiles(storyPath, "*.razor");
        string examplesContent = "";

        foreach (var example in examples)
        {
            string exampleName = Path.GetFileNameWithoutExtension(example);
            string exampleNameReadable = PascalToReadable(exampleName);
            var code = await File.ReadAllTextAsync(example);

            DocsMeta docsMeta = new DocsMeta
            {
                Title = exampleNameReadable,
                Description = ""
            };

            // Read out meta data from the code
            Match match = Regex.Match(code, docsRegex);

            if (match.Groups.Count > 1)
            {
                try
                {
                    var s = JsonSerializer.Deserialize<DocsMeta>(match.Groups[1].Value,
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
                    if (s != null)
                    {
                        docsMeta = s;
                        if (string.IsNullOrEmpty(docsMeta.Title))
                        {
                            docsMeta.Title = exampleNameReadable;
                        }
                    }
                    code = code.Replace(match.Value, "");
                }
                catch { }
            }

            if (format == "html")
            {
                code = code.Replace("@", "@@").Replace("<", "&lt;").Replace(">", "&gt;").Trim();

                examplesContent += $"<h3 id='examples-{exampleName}'>{docsMeta.Title}</h3>\n" +
                    (docsMeta.Description != "" ? MarkdownToHtml(docsMeta.Description ?? "") : "");

                examplesContent += "<div class=\"example\">\n" +
                    $"    <div class=\"example-demo\">{(docsMeta.IframeUrl != null ?
                    $"<iframe class=\"example-iframe\" src=\"{docsMeta.IframeUrl}\"></iframe>" +
                    $"<a href=\"{docsMeta.IframeUrl}\" target=\"_blank\" rel=\"noreferrer\">" +
                    $"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" fill=\"currentColor\" class=\"bi bi-fullscreen\" viewBox=\"0 0 16 16\"><path d=\"M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5\" /></svg> " +
                    $"Open in full window</a>" :
                    $"<{exampleName} />")}</div>\n\n" +
                    $"    <details class=\"example-code\">\n" +
                    $"        <summary>Code</summary>\n" +
                    $"        <pre><code class=\"language-razor\">{code}</code></pre>\n" +
                    $"    </details>\n" +
                    "</div>";
            }
            else if (format == "markdown")
            {
                examplesContent += $"### {docsMeta.Title}\n" + docsMeta.Description + "\n";
                examplesContent += $"```razor\n{code}\n```\n";
            }
        }

        return examplesContent;
    }

    private IEnumerable<ComponentParameterInfo> GetComponentParameters(Type componentType, string xmlDocumentationPath)
    {
        if (componentType == null)
        {
            throw new ArgumentNullException(nameof(componentType));
        }

        var xmlDoc = XDocument.Load(xmlDocumentationPath);
        var memberNodes = xmlDoc.Descendants("member");


        return componentType.GetProperties(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance)
                            .Where(prop => Attribute.IsDefined(prop, typeof(ParameterAttribute)) || Attribute.IsDefined(prop, typeof(CascadingParameterAttribute)))
                            .Select(prop => new ComponentParameterInfo
                            {
                                Name = prop.Name,
                                ParameterType = PrettyTypeName(prop.PropertyType),
                                DefaultValue = GetDefaultValue(prop, componentType),
                                Comment = GetXmlDocumentationCommentForProp(memberNodes, prop),
                                CascadingParameter = Attribute.IsDefined(prop, typeof(CascadingParameterAttribute))
                            });
    }

    private object? GetDefaultValue(PropertyInfo prop, Type componentType)
    {
        var instance = Activator.CreateInstance(componentType);
        var value = prop.GetValue(instance);

        if (value == null)
        {
            return "null";
        }

        Type type = value.GetType();

        // Primitives
        if (type.IsPrimitive || value is string)
        {
            return value is string ? $"\"{value}\"" : value.ToString()?.ToLower(); // true/false klein schreiben
        }

        // Nullable types
        if (Nullable.GetUnderlyingType(type) != null)
        {
            return value.ToString();
        }

        // Arrays
        if (type.IsArray)
        {
            var array = value as Array;
            if (array != null && array.Length == 0)
            {
                return $"new {type.GetElementType()?.Name}[0]";
            }
            // Hier kannst du weitere Logik hinzuf�gen, um Arrays zu formatieren
        }

        // EventCallbacks oder andere generische Typen
        if (type.IsGenericType)
        {
            var genericTypeDefinition = type.GetGenericTypeDefinition();
            if (genericTypeDefinition == typeof(EventCallback<>))
            {
                return "EventCallback.Empty";
            }

            // Generische Typen formatieren
            var genericArgs = string.Join(", ", type.GetGenericArguments().Select(t => t.Name));
            return $"{genericTypeDefinition.Name.Split('`')[0]}&lt;{genericArgs}&gt;";
        }

        // F�r alle anderen F�lle
        return value.ToString() ?? "unknown";
    }

    private string ComponentParameterInfoToHtml(IEnumerable<ComponentParameterInfo> parameter)
    {
        if (parameter.Count() <= 0)
        {
            return "";
        }

        string table = "<div class=\"table-responsive\"><table class=\"table table-bordered\">";
        table += "\n    <thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead>";
        table += "\n    <tbody>";

        foreach (var param in parameter)
        {
            table += "\n        <tr>";
            table += $"<td><code>{param.Name}</code>";
            if (param.CascadingParameter)
            {
                table += $"<br/>(Cascading Parameter)";
            }
            table += $"</td>";
            table += $"<td>{MarkdownToHtml(param.Comment ?? "")}</td>";
            table += $"<td>{param.ParameterType}</td>";
            table += $"<td>{param.DefaultValue}</td>";
            table += "</tr>";
        }

        table += "\n    </tbody>\n";
        table += "</table></div>";

        return table;
    }

    private string GetXmlDocumentationCommentForClass(string xmlDocumentationPath, Type classType)
    {
        var xmlDoc = XDocument.Load(xmlDocumentationPath);
        var memberNodes = xmlDoc.Descendants("member");

        var memberName = $"T:{classType.FullName}";
        var memberNode = memberNodes.FirstOrDefault(node => node.Attribute("name")?.Value == memberName);
        var comment = memberNode?.Element("summary")?.Value ?? string.Empty;

        // Jede Zeile trimmen
        var trimmedComment = string.Join("\n", comment.Split('\n').Select(line => line.Trim()));

        return trimmedComment;
    }

    private string GetXmlDocumentationCommentForProp(IEnumerable<XElement> memberNodes, PropertyInfo prop)
    {
        var memberName = $"P:{prop.DeclaringType?.FullName}.{prop.Name}";
        var memberNode = memberNodes.FirstOrDefault(node => node.Attribute("name")?.Value == memberName);
        return memberNode?.Element("summary")?.Value.Trim() ?? string.Empty;
    }

    private string MarkdownToHtml(string markdown)
    {
        return $"<div class=\"md-block\">{Markdig.Markdown.ToHtml(markdown).Replace("@", "@@")}</div>";
    }

    private string PascalToKebabCase(string value)
    {
        if (string.IsNullOrEmpty(value))
            return value;

        return Regex.Replace(
            value,
            "(?<!^)([A-Z][a-z]|(?<=[a-z])[A-Z0-9])",
            "-$1",
            RegexOptions.Compiled)
            .Trim()
            .ToLower();
    }

    private string PascalToReadable(string value)
    {
        if (string.IsNullOrEmpty(value))
            return value;

        // F�gen Sie Leerzeichen vor Gro�buchstaben ein
        string result = Regex.Replace(value, "(?<!^)([A-Z])", " $1", RegexOptions.Compiled);

        // Konvertieren Sie den ersten Buchstaben in Gro�buchstaben und den Rest in Kleinbuchstaben
        return char.ToUpper(result[0]) + result.Substring(1).ToLower();
    }

    private string PrettyTypeName(Type type)
    {
        if (type.GetGenericArguments().Length == 0)
        {
            return type.Name;
        }
        var genericArguments = type.GetGenericArguments();
        var typeDefinition = type.Name;
        var unmangledName = typeDefinition.Substring(0, typeDefinition.IndexOf("`"));
        return unmangledName + "&lt;" + string.Join(",", genericArguments.Select(PrettyTypeName)) + "&gt;";
    }
}