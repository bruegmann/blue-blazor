using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;
using System.Reflection;

namespace BlueBlazor.Components;

public partial class NewMenuItem : Button
{
    private Button? ButtonRef
    {
        get; set
        {
            if (value != null)
            {
                CopyPropertiesTo(value, ["Variant", "Class"]);
                value.Variant = Variant.MenuItem;
                value.Class = ClassValue;
            }

            field = value;
        }
    }

    private string? ClassValue => new CssBuilder(Class).AddClass("current", Current).AddClass("d-flex", !DefaultDisplay).Build();

    [Parameter]
    public bool Current { get; set; }

    [Parameter]
    public bool DefaultDisplay { get; set; }

    [Parameter]
    public RenderFragment? ButtonContent { get; set; }

    private void CopyPropertiesTo(Button target, List<string> skipProps)
    {
        var properties = typeof(Button).GetProperties(BindingFlags.Public | BindingFlags.Instance)
            .Where(p => p.CanRead && p.CanWrite);

        foreach (var prop in properties)
        {
            try
            {
                if (skipProps.Contains(prop.Name)) continue;

                var value = prop.GetValue(this);
                prop.SetValue(target, value);
            }
            catch
            {
                // Skip Properties, that can't be copied.
            }
        }
    }
}
