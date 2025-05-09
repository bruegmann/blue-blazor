const Editor = toastui.Editor

let editor

export function Initialize(
    element,
    dotNetHelper,
    initialValue,
    language,
    height,
    autoFocus,
    placeholder = undefined
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
        autofocus: autoFocus || element.getAttribute("autofocus") !== null,
        placeholder: placeholder
    })

    editor.on("change", () => {
        dotNetHelper.invokeMethodAsync("InvokeChange", editor.getMarkdown())
    })
}

export function Destroy() {
    if (editor && editor.Destroy) editor.Destroy()
}
