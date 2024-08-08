using System.Reflection;
using Microsoft.AspNetCore.Components;
using System.Xml.Linq;
using System.Text.RegularExpressions;
using System.Text.Json;

public class Helper
{
    public string RazorTemplate { get; set; } = "@{ /* This file is generated by DocGen. Don't make direct changes. */ }\n<div class=\"docgen\">\n{0}\n</div>";

    public async Task GenerateComponentPages(string componentsPath, string storiesPath, string pagesPath, string dataPath,
        string componentNamespace, string assemblyName, string? xmlDocumentationPath = null)
    {
        var components = Directory.GetFiles(componentsPath, "*.razor").Select(Path.GetFileNameWithoutExtension);

        var componentPageUrls = new Dictionary<string, string>();

        foreach (var component in components)
        {
            var pagePath = Path.Combine(pagesPath, $"{component}.razor");

            string readMeHtml = markdownToHtml($"# {component!}");
            string parametersHtml = "";

            Type? componentType = Type.GetType($"{componentNamespace}.{component}");
            if (componentType == null)
            {
                componentType = Type.GetType($"{componentNamespace}.{component}, {assemblyName}");
            }
            if (componentType != null && xmlDocumentationPath != null)
            {
                string componentComment = getXmlDocumentationCommentForClass(xmlDocumentationPath, componentType);
                readMeHtml += markdownToHtml(componentComment);

                var parameters = getComponentParameters(componentType, xmlDocumentationPath);
                parametersHtml = componentParameterInfoToHtml(parameters);
            }

            string pageUrl = $"components/{pascalToKebabCase(component!)}";
            componentPageUrls.Add(component!, pageUrl);

            string storyPath = Path.Combine(storiesPath, component!);
            string storyImport = "";
            string storyHtml = "";
            if (Directory.Exists(storyPath))
            {
                storyImport = $"@using BlueBlazor.Docs.Stories.{component}\n";
                storyHtml = await getStoryContent(storyPath);
            }

            string content = $"@page \"/{pageUrl}\"\n" +
                storyImport +
                $"\n{readMeHtml}\n" +
                $"\n{parametersHtml}\n" +
                $"\n{storyHtml}\n";

            await File.WriteAllTextAsync(pagePath, RazorTemplate.Replace("{0}", content));
        }

        string pagesDataPath = Path.Combine(dataPath, "pages-data.json");
        await File.WriteAllTextAsync(pagesDataPath, JsonSerializer.Serialize(componentPageUrls));
    }

    async Task<string> getStoryContent(string storyPath)
    {
        string docsRegex = "@\\{\\s*\\/\\*docs([\\s\\S]*?)\\*\\/\\s*\\}";
        var examples = Directory.GetFiles(storyPath, "*.razor");
        string examplesHtml = "";

        foreach (var example in examples)
        {
            string exampleName = Path.GetFileNameWithoutExtension(example);
            string exampleNameReadable = pascalToReadable(exampleName);
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

            code = code.Replace("@", "@@").Replace("<", "&lt;").Replace(">", "&gt;").Trim();

            examplesHtml += $"<h2>{docsMeta.Title}</h2>\n" +
                (docsMeta.Description != "" ? markdownToHtml(docsMeta.Description ?? "") : "");

            examplesHtml += "<div class=\"example\">\n" +
                $"    <div class=\"example-demo\">{(docsMeta.IframeUrl != null ?
                $"<iframe class=\"example-iframe\" src=\"{docsMeta.IframeUrl}\"></iframe>" :
                $"<{exampleName} />")}</div>\n\n" +
                $"    <details class=\"example-code\">\n" +
                $"        <summary>Code</summary>\n" +
                $"        <pre><code class=\"language-razor\">{code}</code></pre>\n" +
                $"    </details>\n" +
                "</div>";
        }

        return examplesHtml;
    }

    public async Task GeneratePage(string markdownPath, string targetFilePath, string? pageSlug = "/")
    {
        var markdown = await File.ReadAllTextAsync(markdownPath);
        string html = markdownToHtml(markdown);

        string content = $"@page \"{pageSlug}\"\n\n" + html;

        await File.WriteAllTextAsync(targetFilePath, RazorTemplate.Replace("{0}", content));
    }

    IEnumerable<ComponentParameterInfo> getComponentParameters(Type componentType, string xmlDocumentationPath)
    {
        if (componentType == null)
        {
            throw new ArgumentNullException(nameof(componentType));
        }

        var xmlDoc = XDocument.Load(xmlDocumentationPath);
        var memberNodes = xmlDoc.Descendants("member");

        return componentType.GetProperties(BindingFlags.Public | BindingFlags.Instance)
                            .Where(prop => Attribute.IsDefined(prop, typeof(ParameterAttribute)))
                            .Select(prop => new ComponentParameterInfo
                            {
                                Name = prop.Name,
                                ParameterType = prop.PropertyType,
                                DefaultValue = prop.GetValue(Activator.CreateInstance(componentType)) ?? "",
                                Comment = getXmlDocumentationCommentForProp(memberNodes, prop)
                            });
    }

    string componentParameterInfoToHtml(IEnumerable<ComponentParameterInfo> parameter)
    {
        string table = "<div class=\"table-responsive\"><table class=\"table table-bordered\">";
        table += "\n    <thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead>";
        table += "\n    <tbody>";

        foreach (var param in parameter)
        {
            table += "\n        <tr>";
            table += $"<td><code>{param.Name}</code></td>";
            table += $"<td>{markdownToHtml(param.Comment ?? "")}</td>";
            table += $"<td>{param.ParameterType?.Name}</td>";
            table += $"<td>{param.DefaultValue}</td>";
            table += "</tr>";
        }

        table += "\n    </tbody>\n";
        table += "</table></div>";

        return table;
    }

    string getXmlDocumentationCommentForClass(string xmlDocumentationPath, Type classType)
    {
        var xmlDoc = XDocument.Load(xmlDocumentationPath);
        var memberNodes = xmlDoc.Descendants("member");

        var memberName = $"T:{classType.FullName}";
        var memberNode = memberNodes.FirstOrDefault(node => node.Attribute("name")?.Value == memberName);
        return memberNode?.Element("summary")?.Value.Trim() ?? string.Empty;
    }

    string getXmlDocumentationCommentForProp(IEnumerable<XElement> memberNodes, PropertyInfo prop)
    {
        var memberName = $"P:{prop.DeclaringType?.FullName}.{prop.Name}";
        var memberNode = memberNodes.FirstOrDefault(node => node.Attribute("name")?.Value == memberName);
        return memberNode?.Element("summary")?.Value.Trim() ?? string.Empty;
    }

    string markdownToHtml(string markdown)
    {
        return $"<div class=\"md-block\">{Markdig.Markdown.ToHtml(markdown).Replace("@", "@@")}</div>";
    }

    string pascalToKebabCase(string value)
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

    string pascalToReadable(string value)
    {
        if (string.IsNullOrEmpty(value))
            return value;

        // Fügen Sie Leerzeichen vor Großbuchstaben ein
        string result = Regex.Replace(value, "(?<!^)([A-Z])", " $1", RegexOptions.Compiled);

        // Konvertieren Sie den ersten Buchstaben in Großbuchstaben und den Rest in Kleinbuchstaben
        return char.ToUpper(result[0]) + result.Substring(1).ToLower();
    }
}

public class ComponentParameterInfo
{
    public string? Name { get; set; }
    public Type? ParameterType { get; set; }
    public object? DefaultValue { get; set; }
    public string? Comment { get; set; }
}

public class DocsMeta
{
    public string? Title { get; set; }
    public string? Description { get; set; }
    public string? IframeUrl { get; set; }
}