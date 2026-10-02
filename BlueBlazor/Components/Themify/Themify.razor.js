const controllers = new Map()

export function init(element, dotNetHelper, styleElement, themeInfoJson = null) {
    if (!element) return

    const abortController = new AbortController()
    controllers.set(element, abortController)

    if (themeInfoJson) {
        const themeInfo = JSON.parse(themeInfoJson)
        element.themeInfo = themeInfo
    }

    element.addEventListener("compile", async ({ detail }) => {
        if (!styleElement || !dotNetHelper) return

        const css = detail.css ?? "";
        styleElement.innerHTML = css

        try {
            dotNetHelper.invokeMethodAsync("ReceiveThemeInfo", JSON.stringify(detail.themeInfo))

            const chunkSize = 12000; // stay under SignalR limit
            for (let i = 0; i < css.length; i += chunkSize) {
                const chunk = css.substring(i, i + chunkSize);
                const isFirst = i === 0;
                const isLast = i + chunkSize >= css.length;

                await dotNetHelper.invokeMethodAsync("ReceiveCssChunk", chunk, isFirst, isLast);
            }
        }
        catch {
            // Component mind already been disposed
        }
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