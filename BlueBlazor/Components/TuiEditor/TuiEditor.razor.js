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

function createToolbarItemButton(name, dotNetHelper, text, iconClassName, popoverTarget, className, style) {
    const button = document.createElement("button")

    button.className = className
    button.classList.add("toastui-editor-toolbar-icons")

    button.setAttribute("style", style)
    button.style.backgroundImage = "none"
    button.style.margin = "0"

    button.innerHTML = ""
    if (iconClassName) {
        button.innerHTML += `<span class="${iconClassName}"></span>`
    }
    if (iconClassName && text) {
        button.innerHTML += " ";
    }
    if (text) {
        button.innerHTML += text
    }
    button.setAttribute("popovertarget", popoverTarget)
    button.addEventListener("click", () => {
        dotNetHelper.invokeMethodAsync("InvokeToolbarItemClick", name);
    });

    return button
}

export function InsertToolbarItem(id, name, dotNetHelper, groupIndex, itemIndex, tooltip, text, iconClassName, popoverTarget, className, style) {
    const editor = collection[id]
    if (editor) {
        editor.insertToolbarItem({ groupIndex, itemIndex }, {
            name,
            tooltip,
            el: createToolbarItemButton(name, dotNetHelper, text, iconClassName, popoverTarget, className, style)
        })
    }
}

export function RemoveToolbarItem(id, name) {
    const editor = collection[id]
    if (editor) {
        editor.removeToolbarItem(name)
    }
}

export function Destroy(id) {
    const editor = collection[id]
    if (editor && editor.Destroy) {
        editor.Destroy()
        delete collection[id]
    }
}
