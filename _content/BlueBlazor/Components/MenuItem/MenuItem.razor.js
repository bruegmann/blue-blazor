const instances = new Map()

export function init(id, dotNetRef) {
    const menuItem = document.getElementById(id)

    if (!menuItem) return

    const label = menuItem.querySelector(".text-truncate")

    if (!label) return

    const entry = { label, dotNetRef, wasOverflowing: false }

    const observer = new ResizeObserver(() => {
        check(entry)
    })

    entry.observer = observer
    observer.observe(label)
    instances.set(id, entry)

    check(entry)
}

function check(entry) {
    const isOverflowing = entry.label.scrollWidth > entry.label.clientWidth + 1

    if (isOverflowing !== entry.wasOverflowing) {
        entry.wasOverflowing = isOverflowing
        entry.dotNetRef.invokeMethodAsync(
            "OnOverflowChanged",
            isOverflowing,
            isOverflowing ? entry.label.textContent.trim() : null
        )
    }
}

export function dispose(id) {
    const entry = instances.get(id)

    if (entry) {
        entry.observer.disconnect()
        instances.delete(id)
    }
}
