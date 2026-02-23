export function Initialize(element, dotNetHelper) {
    if (!element) return
    element.addEventListener("EditRequested", () => {
        dotNetHelper.invokeMethodAsync("Invoke");
    });
}
