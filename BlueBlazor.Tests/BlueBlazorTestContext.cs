namespace BlueBlazor.Tests;

[TestClass]
public class BlueBlazorTestContext : Bunit.TestContext
{
    public BlueBlazorTestContext()
    {
        Services.AddLocalization();
    }
}
