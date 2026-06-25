let abortController

export function init(el, dotNetHelper) {
    if (!el || !dotNetHelper) return

    abortController = new AbortController()

    el.addEventListener("wa-after-show", () => {
        dotNetHelper.invokeMethodAsync("HandleShow")
    }, {signal: abortController.signal})

    el.addEventListener("wa-after-hide", () => {
        dotNetHelper.invokeMethodAsync("HandleHide")
    }, { signal: abortController.signal })
}

export function dispose() {
    if (abortController) abortController.abort()
}

export function runFn(el, fn) {
    if (!el) return
    if (fn === "show") el.show()
    if (fn === "hide") el.hide()
}