const controllers = new Map()

export function init(wrapper, dotNetHelper, styleElement, applyOnMount, hideRename, hideSquircles, themeInfoJson = null, blueWebScssSrc = null) {
    if (!wrapper) return

    const abortController = new AbortController()
    controllers.set(wrapper, abortController)

    const element = document.createElement("themify-appearance-helper-wrapper")
    element.applyOnMount = applyOnMount
    element.hideRename = hideRename
    element.hideSquircles = hideSquircles

    if (themeInfoJson) {
        const themeInfo = JSON.parse(themeInfoJson)
        element.themeInfo = themeInfo
    }

    element.blueWebScssSrc = blueWebScssSrc

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

    wrapper.appendChild(element)
}

export function dispose(wrapper) {
    if (!wrapper) return
    const abortController = controllers.get(wrapper)
    if (abortController) {
        abortController.abort()
        controllers.delete(wrapper)
    }
}