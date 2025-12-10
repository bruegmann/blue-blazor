export function Initialize(element, dotNetHelper, preventConfirmOnSubmit) {
    const confirmManually = () => dotNetHelper.invokeMethodAsync("InvokeConfirmManually")
    const dismiss = () => dotNetHelper.invokeMethodAsync("InvokeDismiss")
    const loseFocus = () => dotNetHelper.invokeMethodAsync("InvokeLoseFocus")
    let confirmTimeout

    element.addEventListener("submit", (e) => {
        e.preventDefault()
        if (!preventConfirmOnSubmit) confirmManually()
    })

    element.addEventListener("keydown", (e) => {
        if (e.key === "Esc" || e.key === "Escape") {
            dismiss()
        }
    })

    element.addEventListener("focusout", (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            if (confirmTimeout) {
                clearTimeout(confirmTimeout)
            }
            confirmTimeout = setTimeout(() => {
                loseFocus()
                confirmTimeout = null
            }, 400)
        }
    })

    // Export cancelFocusOutTimeout function
    element._cancelFocusOutTimeout = () => {
        if (confirmTimeout) {
            clearTimeout(confirmTimeout)
            confirmTimeout = null
        }
    }

    const input = element.querySelector("[autofocus]")
    if (input) input.focus()
}

export function cancelFocusOutTimeout(element) {
    if (element && element._cancelFocusOutTimeout) {
        element._cancelFocusOutTimeout()
    }
}
