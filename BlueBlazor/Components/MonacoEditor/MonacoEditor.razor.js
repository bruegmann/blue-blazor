const MonacoProm = new Promise((resolve) => {
    if (window.monaco) {
        resolve(window.monaco)
        return
    }
    const afterLoader = () => {
        const lang = document.documentElement.getAttribute("lang") || "en"
        window.require.config({
            paths: { vs: "./_content/BlueBlazor/monaco-editor/min/vs" },
            "vs/nls": {
                availableLanguages: {
                    "*": lang
                }
            }
        })

        window.require(["./vs/editor/editor.main"], () => {
            resolve(window.monaco)
        })
    }
    if (!window.require) {
        new Promise((resolveLoader) => {
            const script = document.createElement("script")
            script.src = "./_content/BlueBlazor/monaco-editor/min/vs/loader.js"
            script.onload = resolveLoader
            document.body.appendChild(script)
        }).then(afterLoader)
    } else {
        afterLoader()
    }
})
const monacoCollection = {}

export async function Initialize(
    id,
    element,
    dotNetHelper,
    initialValue,
    language,
    Theme = "vs-dark",
    readonly = false
) {
    await MonacoProm
    console.log("init")
    if (monaco.editor.setLocale) {
        monaco.editor.setLocale("de")
    }
    const editor = monaco.editor.create(element, {
        value: initialValue,
        language,
        automaticLayout: true,
        theme: Theme,
        readOnly: readonly
    })
    editor.onDidChangeModelContent(() => {
        dotNetHelper.invokeMethodAsync("InvokeChange", editor.getValue())
    })

    monacoCollection[id] = editor
}

export function SetValue(id, value) {
    const editor = monacoCollection[id]
    if (editor) {
        editor.setValue(value)
    }
}

export function Destroy(id) {
    const editor = monacoCollection[id]
    if (editor && editor.dispose) {
        editor.dispose()
        delete monacoCollection[id]
    }
}
