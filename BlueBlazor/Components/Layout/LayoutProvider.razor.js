const controllers = new Map()

export function init(listenerId, layoutSelector, dotNetHelper) {
    const layoutEl = document.querySelector(layoutSelector)

    const abortController = new AbortController()
    controllers.set(listenerId, abortController)

    const isOpen = layoutEl.dataset.blueInspectorOpen !== undefined
    dotNetHelper.invokeMethodAsync("InvokeInspectorChange", isOpen)

    layoutEl.addEventListener("blue-inspector-change", ({ target }) => {
        if (target) {
            const isOpen = target.dataset.blueInspectorOpen !== undefined
            dotNetHelper.invokeMethodAsync("InvokeInspectorChange", isOpen)
        }
    }, { signal: abortController.signal })
}

export function dispose(listenerId) {
    const abortController = controllers.get(listenerId)
    if (abortController) {
        abortController.abort()
        controllers.delete(listenerId)
    }
}