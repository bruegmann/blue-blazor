import "/_content/BlueBlazor/tui-editor/toastui-editor-all.min.js"
import "/_content/BlueBlazor/tui-editor/i18n/de-de.js"
import "/_content/BlueBlazor/tui-editor/i18n/fr-fr.js"

const Editor = toastui.Editor

let editor

export function Initialize(
    element,
    dotNetHelper,
    initialValue,
    language,
    height,
    autoFocus
) {
    if (!language) language = document.documentElement.lang

    editor = new Editor({
        el: element,
        initialValue,
        height,
        initialEditType: "wysiwyg",
        usageStatistics: false,
        hideModeSwitch: true,
        theme: "dark",
        language,
        toolbarItems: [
            ["heading", "bold", "italic", "strike"],
            ["hr", "quote"],
            ["ul", "ol", "task", "indent", "outdent"],
            ["link"]
        ],
        autofocus: autoFocus || element.getAttribute("autofocus") !== null
    })

    editor.on("change", () => {
        dotNetHelper.invokeMethodAsync("InvokeChange", editor.getMarkdown())
    })
}

export function Destroy() {
    if (editor && editor.Destroy) editor.Destroy()
}
