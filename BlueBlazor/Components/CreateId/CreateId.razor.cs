using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// Helper component that creates an unique ID.
/// </summary>
public partial class CreateId
{
    [Parameter]
    public RenderFragment<string>? ChildContent { get; set; }

    private string _id = $"uid_{Guid.NewGuid():N}";
}