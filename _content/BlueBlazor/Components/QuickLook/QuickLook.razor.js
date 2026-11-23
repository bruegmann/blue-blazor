const controllers = new Map()

export function init(element, dotNetRef) {
    if (!element || !dotNetRef) return

    const abortController = new AbortController()
    controllers.set(element, abortController)

    element.addEventListener("openchange", (event) => {
        dotNetRef.invokeMethodAsync("HandleOpenChange", event.detail.value);
    }, { signal: abortController.signal })
}

export function dispose(element) {
    if (!element) return
    const abortController = controllers.get(element)
    if (abortController) {
        abortController.abort()
        controllers.delete(element)
    }
}