using System.ComponentModel;

namespace BlueBlazor.Shared;

public enum ButtonType
{
    Button,
    Submit,
    Reset
}

public enum Variant
{
    None,
    Filled,
    Soft,
    Plain,
    Outline,
    Link,
    MenuItem
}

public enum Color
{
    Theme,
    Primary,
    Secondary,
    Success,
    Danger,
    Warning,
    Info,
    Light,
    Dark
}

public enum Size
{
    Lg,
    Sm
}

public enum BreakSize
{
    Sm,
    Md,
    Lg,
    Xl,
    None
}

public enum ModalSize
{
    Sm,
    Lg,
    Xl
}

public enum OffcanvasPlacement
{
    Start,
    End,
    Top,
    Bottom
}

public enum QrCodeErrorCorrection
{
    [Description("L")]
    L,

    [Description("M")]
    M,

    [Description("Q")]
    Q,

    [Description("H")]
    H
}

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