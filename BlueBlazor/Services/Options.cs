namespace BlueBlazor.Services;

public class Options
{
    [Obsolete("Flag to enable workarounds for DevExpress. But isn't necessary anymore.")]
    public bool DevExpressSupport { get; set; } = false;
}
