using System.ComponentModel;

namespace BlueBlazor.Shared;

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