using BlueBlazor.Shared;
using Microsoft.AspNetCore.Components;

namespace BlueBlazor;

[EventHandler("onwashow", typeof(EventArgs))]
[EventHandler("onwahide", typeof(EventArgs))]
[EventHandler("onblselect", typeof(BlSelectEventArgs))]
[EventHandler("onpopovertoggle", typeof(PopoverToggleEventArgs))]
public static class EventHandlers
{
}

public class BlSelectEventArgs : EventArgs
{
    public int Index { get; set; }
    public string Value { get; set; } = string.Empty;
    public string? Description { get; set; }
}

public class PopoverToggleEventArgs : EventArgs
{
    public PopoverState NewState { get; set; }
}