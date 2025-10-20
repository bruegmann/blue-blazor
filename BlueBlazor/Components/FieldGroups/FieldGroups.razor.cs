using Microsoft.AspNetCore.Components;

namespace BlueBlazor.Components;

public partial class FieldGroups : BlueComponentBase
{
    private readonly List<FieldGroup> _fieldGroups = [];

    private IEnumerable<FieldGroup> SortedFieldGroups
    {
        get
        {
            if (Ids is null)
            {
                return _fieldGroups;
            }

            if (_fieldGroups.Count == 0 || Ids.Count == 0)
            {
                return Enumerable.Empty<FieldGroup>();
            }

            var orderLookup = new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase);
            for (int i = 0; i < Ids.Count; i++)
            {
                var id = Ids[i];
                if (!string.IsNullOrWhiteSpace(id) && !orderLookup.ContainsKey(id))
                {
                    orderLookup[id] = i;
                }
            }

            return _fieldGroups
                .Where(g => g.Id is not null && orderLookup.ContainsKey(g.Id))
                .OrderBy(g => orderLookup[g.Id!]);
        }
    }

    /// <summary>
    /// You should only pass components of type `FieldGroup` as children. Others will just be shown above this field group container.
    /// </summary>
    [Parameter]
    public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// When provided, displays only the field groups listed in Ids, preserving their order.
    /// </summary>
    [Parameter]
    public List<string>? Ids { get; set; }

    internal void AddFieldGroup(FieldGroup fieldGroup)
    {
        _fieldGroups.Add(fieldGroup);
        StateHasChanged();
    }

    internal void RemoveFieldGroup(FieldGroup fieldGroup)
    {
        _fieldGroups.Remove(fieldGroup);
        StateHasChanged();
    }
}
