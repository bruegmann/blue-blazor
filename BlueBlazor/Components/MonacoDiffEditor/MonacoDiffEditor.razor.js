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

const diffEditorCollection = {}

export async function Initialize(id, element, dotNetHelper, originalValue, modifiedValue, readOnly, renderSideBySide, ignoreTrimWhitespace, renderOverviewRuler) {
    await MonacoProm

    var originalModel = monaco.editor.createModel(originalValue, "plaintext");
    var modifiedModel = monaco.editor.createModel(modifiedValue, "plaintext");

    var diffEditor = monaco.editor.createDiffEditor(element, {
        enableSplitViewResizing: false,
        automaticLayout: true,
        renderSideBySide: renderSideBySide,
        ignoreTrimWhitespace: ignoreTrimWhitespace,
        renderOverviewRuler: renderOverviewRuler,
        readOnly: readOnly
    });

    diffEditor.setModel({
        original: originalModel,
        modified: modifiedModel,
    });

    if (!readOnly) {
        modifiedModel.onDidChangeContent(() => {
            dotNetHelper.invokeMethodAsync("InvokeChange", modifiedModel.getValue());
        });
    }

    diffEditorCollection[id] = { diffEditor, originalModel, modifiedModel };
}

export function SetModifiedValue(id, value) {
    const item = diffEditorCollection[id];
    if (item?.modifiedModel) {
        item.modifiedModel.setValue(value);
    }
}

export function Destroy(id) {
    const item = diffEditorCollection[id];
    if (item) {
        item.diffEditor?.dispose();
        item.originalModel?.dispose();
        item.modifiedModel?.dispose();
        delete diffEditorCollection[id];
    }
}