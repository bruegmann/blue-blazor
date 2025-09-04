export function init(dotNetHelper, id) {
    document
        .getElementById(id)
        .addEventListener("changeValue", ({ detail }) => {
            dotNetHelper.invokeMethodAsync("OnChangeValue", detail)
        })
}

export function setValue(id, value) {
    document.getElementById(id).value = value
}

export function focus(id) {
    document.getElementById(id).focus()
}
