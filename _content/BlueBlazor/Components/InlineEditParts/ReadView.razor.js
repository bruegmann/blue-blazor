export function Initialize(element, dotNetHelper) {
    element.addEventListener("EditRequested", () => {
        dotNetHelper.invokeMethodAsync("Invoke");
    });
}
