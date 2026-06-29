export function Initialize(element, dotNetHelper) {
    element.onclose = (event) => {
        dotNetHelper.invokeMethodAsync("InvokeClose", event.target.id)
    }
}

export function Show(element) {
    element.show()
}

export function Close(element) {
    element.close()
}

export function Destroy(element) {
    element.remove()
}
