function init() {
    const layoutEl = document.getElementById("blueBlazorLayout")
    if (!layoutEl) return

    blueWeb.layout.init(layoutEl)
}

export function onLoad() {
    init()
}

export function onUpdate() {
    init()
}

export function onDispose() {
    const layoutEl = document.getElementById("blueBlazorLayout")
    if (!layoutEl) return

    blueWeb.layout.dispose(layoutEl)
}