using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class TuiEditorToolbarItem : BlueComponentBase, IAsyncDisposable
{
    private string _uniqueName = Guid.NewGuid().ToString();

    internal string NameValue => Name ?? _uniqueName;

    [Parameter]
    public int GroupIndex { get; set; } = 0;

    [Parameter]
    public int ItemIndex { get; set; } = 0;

    [Parameter]
    public string? Name { get; set; }

    [Parameter]
    public string? Tooltip { get; set; }

    [Parameter]
    public string? Text { get; set; }

    [Parameter]
    public string? IconClass { get; set; }

    [Parameter]
    public string? PopoverTarget { get; set; }

    [Parameter]
    public EventCallback OnClick { get; set; }

    [CascadingParameter]
    private TuiEditor? TuiEditor { get; set; }

    protected override void OnInitialized()
    {
        TuiEditor?.AddToolbarItem(this);
    }

    public async ValueTask DisposeAsync()
    {
        if (TuiEditor != null)
        {
            await TuiEditor.RemoveToolbarItem(this);
        }
    }
}
