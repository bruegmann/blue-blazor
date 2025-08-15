using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

/// <summary>
/// Implementation of Bootstrap Tabs. Use together with `Tab`.
/// </summary>
public partial class Tabs : ComponentBase
{
    private Tab? _activeTab = default;
    private List<Tab> _tabs = [];

    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// Will be passed down to `Tab` children as identifier. Default is `"TabList-" + Guid.NewGuid().ToString()`.
    /// </summary>
    [Parameter]
    public string? Name { get; set; } = "TabList-" + Guid.NewGuid().ToString();

    [Parameter]
    public string? Class { get; set; }

    [Parameter]
    public string? ContentClass { get; set; }

    [Parameter]
    public string? Style { get; set; }

    /// <summary>
    /// By default, tabs will have styling of Bootstrap `.nav.nav-tabs`.
    /// Set this property to `true` to use `.nav.nav-underline` instead.
    /// </summary>
    [Parameter]
    public bool Underline { get; set; } = false;

    [Parameter]
    public int ActiveTabIndex { get; set; }

    [Parameter]
    public EventCallback<int> ActiveTabIndexChanged { get; set; }

    protected override void OnParametersSet()
    {
        var currentIndex = _activeTab is null ? -1 : _tabs.IndexOf(_activeTab);
        if (currentIndex != ActiveTabIndex)
        {
            if (ActiveTabIndex >= 0 && ActiveTabIndex < _tabs.Count)
            {
                _activeTab = _tabs[ActiveTabIndex];
            }
            else
            {
                _activeTab = null;
            }
        }
    }

    internal void AddTab(Tab tab)
    {
        _tabs.Add(tab);
        if (tab.Active || _tabs.IndexOf(tab) == ActiveTabIndex)
        {
            _activeTab = tab;
        }
        StateHasChanged();
    }

    internal void ActivateTab(Tab tab)
    {
        _activeTab = tab;
        ActiveTabIndexChanged.InvokeAsync(_tabs.IndexOf(tab));
        StateHasChanged();
    }

    internal void RemoveTab(Tab tab)
    {
        if (tab.Active || _tabs.IndexOf(tab) == ActiveTabIndex)
        {
            _activeTab = null;
        }
        _tabs.Remove(tab);
        StateHasChanged();
    }
}
