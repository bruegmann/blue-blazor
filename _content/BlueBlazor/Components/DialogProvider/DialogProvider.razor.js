export function Initialize(element, dotNetHelper) {
    element.onclose = (event) => {
        console.log(event.target.id)
        dotNetHelper.invokeMethodAsync("InvokeClose", event.target.id)
    }
}

export function Show(element) {
    element.showModal()
}

export function Close(element) {
    element.close()
}

export function Destroy(element) {
    element.remove()
}
