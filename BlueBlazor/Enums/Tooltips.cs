using System.ComponentModel;

namespace BlueBlazor.Shared;

public enum TooltipPlacement
{
    Top,

    [Description("top-start")]
    TopStart,

    [Description("top-end")]
    TopEnd,

    Bottom,

    [Description("bottom-start")]
    BottomStart,

    [Description("bottom-end")]
    BottomEnd,

    Right,

    [Description("right-start")]
    RightStart,

    [Description("right-end")]
    RightEnd,

    Left,

    [Description("left-start")]
    LeftStart,

    [Description("left-end")]
    LeftEnd
}