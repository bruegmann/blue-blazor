export function focusElement(element) {
    element.focus()
}

export function scrollToActiveOption(container) {
    if (!container) return
    const activeOption = container.querySelector("[data-selected]")
    if (activeOption) {
        activeOption.scrollIntoView({ block: "center" })
    }
}