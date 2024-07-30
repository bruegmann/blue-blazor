import "blue-web-components/packages/input-splitted/InputSplitted.js"

window.blueBlazor = window.blueBlazor || {}

window.blueBlazor.totpInput = {
    init: (dotNetHelper, id) => {
        document
            .getElementById(id)
            .addEventListener("changeValue", ({ detail }) => {
                dotNetHelper.invokeMethodAsync("OnChangeValue", detail)
            })
    },

    setValue: (id, value) => {
        document.getElementById(id).value = value
    },

    focus: (id) => {
        document.getElementById(id).focus()
    }
}
