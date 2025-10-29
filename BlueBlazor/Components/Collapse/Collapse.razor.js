const listeners = new WeakMap()

export function init(detailsElement, dotNetRef) {
    const handler = (event) => {
        dotNetRef.invokeMethodAsync("OnToggle", event.target.open)
    }

    detailsElement.addEventListener("toggle", handler)
    listeners.set(detailsElement, handler)
}

export function dispose(detailsElement) {
    const handler = listeners.get(detailsElement)
    if (handler) {
        detailsElement.removeEventListener("toggle", handler)
        listeners.delete(detailsElement)
    }
}
