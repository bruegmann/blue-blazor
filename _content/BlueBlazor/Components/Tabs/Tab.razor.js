export function Initialize(element, dotNetHelper) {
    element.addEventListener("show.bs.tab", () => {
        dotNetHelper.invokeMethodAsync("InvokeActivate")
    })
}
