const MonacoProm = new Promise(async (resolve) => {
    if (window.monaco) {
        resolve(window.monaco)
        return
    }
    if (!window.require) {
        await new Promise((resolve) => {
            const script = document.createElement("script")
            script.src = "/_content/BlueBlazor/monaco-editor/min/vs/loader.js"
            script.onload = resolve
            document.body.appendChild(script)
        })
    }
    window.require.config({
        paths: { vs: "/_content/BlueBlazor/monaco-editor/min/vs" }
    })

    window.require(["vs/editor/editor.main"], () => {
        resolve(window.monaco)
    })
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
