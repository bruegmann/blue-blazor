export function Initialize(element, dotNetHelper) {
    const confirm = () => dotNetHelper.invokeMethodAsync("InvokeConfirm")
    const dismiss = () => dotNetHelper.invokeMethodAsync("InvokeDismiss")
    const loseFocus = () => dotNetHelper.invokeMethodAsync("InvokeLoseFocus")
    let confirmTimeout

    element.addEventListener("submit", (e) => {
        e.preventDefault()
        confirm()
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

    const input = element.querySelector("[autofocus]")
    if (input) input.focus()
}
