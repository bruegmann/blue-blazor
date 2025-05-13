const Editor = toastui.Editor

const collection = {}

export function Initialize(
    id,
    element,
    dotNetHelper,
    initialValue,
    language,
    height,
    autoFocus,
    placeholder = undefined
) {
    if (!language) language = document.documentElement.lang

    const editor = new Editor({
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

    element.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && e.ctrlKey) {
            dotNetHelper.invokeMethodAsync("InvokeApply")
        }
    })
    collection[id] = editor
}

export function SetValue(id, value) {
    const editor = collection[id]
    if (editor) {
        editor.setMarkdown(value, false)
    }
}

export function Destroy(id) {
    const editor = collection[id]
    if (editor && editor.Destroy) {
        editor.Destroy()
        delete collection[id]
    }
}
