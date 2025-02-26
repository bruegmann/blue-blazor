using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// Let's you set a logo and/or a breadcrumb.
/// </summary>
public partial class HeaderTitle
{
    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    [Parameter]
    public string? Logo { get; set; }

    [Parameter]
    public string LogoAlt { get; set; } = "Logo";

    [Parameter]
    public bool KeepAppTitle { get; set; } = false;

    [Parameter]
    public string? AppTitle { get; set; }

    [Parameter]
    public string Class { get; set; } = "";

    /// <summary>
    /// Removes default spacing (padding).
    /// </summary>
    [Parameter]
    public bool NoSpacing { get; set; } = false;

    [Parameter]
    public bool Sidebar { get; set; } = false;

    [Parameter]
    public string Href { get; set; } = "";

    [Parameter]
    public List<BreadcrumbItem>? Breadcrumb { get; set; }

    public class BreadcrumbItem
    {
        public string? Text { get; set; }
        public RenderFragment? Content { get; set; }
        public string? Href { get; set; }
        public string? Target { get; set; }
        public string? CssClass { get; set; }

        public BreadcrumbItem() { }

        public BreadcrumbItem(string text, string? href = null, RenderFragment? content = null)
        {
            Text = text;
            Href = href;
            Content = content;
        }
    }
}
