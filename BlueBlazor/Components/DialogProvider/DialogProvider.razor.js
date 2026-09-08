export function Initialize(element, dotNetHelper) {
    element.onclose = (event) => {
        dotNetHelper.invokeMethodAsync("InvokeClose", event.target.id)
    }
}

export function Show(element) {
    element.show()

    element.__keydownAbortController?.abort()

    const controller = new AbortController()
    element.__keydownAbortController = controller

    element.addEventListener("keydown", e => {
        if (e.key === "Escape" && !e.defaultPrevented) {
            element.close()
        }
    }, { signal: controller.signal })

    element.addEventListener("close", () => {
        controller.abort()
        if (element.__keydownAbortController === controller) {
            element.__keydownAbortController = null
        }
    }, { once: true, signal: controller.signal })
}

export function Close(element) {
    element.close()
}

export function CloseById(id) {
    if (!id) return
    const element = document.getElementById(id)
    if (!element) return
    element.close()
}

export function Destroy(element) {
    element.remove()
}
