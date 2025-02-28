using BlueBlazor.Docs.Stories.Modal;

namespace BlueBlazor.Tests;

[TestClass]
public class ModalTests : BlueBlazorTestContext
{
    [TestMethod]
    public void OpenModal()
    {
        var module = JSInterop.SetupModule("./_content/BlueBlazor/Components/Modal.razor.js");
        module.SetupVoid("Show", _ => true);

        //// Arrange
        var cut = RenderComponent<BasicUsage>();

        //// Act - click button to open modal
        cut.WaitForAssertion(() => cut.Find(".btn.blue-btn-soft-secondary"));
        cut.Find(".btn.blue-btn-soft-secondary").Click();

        //// Assert that the modal title and body is set
        cut.WaitForAssertion(() => Assert.IsTrue(cut.Find("dialog .modal-title").HasChildNodes));
        cut.WaitForAssertion(() => Assert.IsTrue(cut.Find("dialog .modal-body").HasChildNodes));
    }
}
