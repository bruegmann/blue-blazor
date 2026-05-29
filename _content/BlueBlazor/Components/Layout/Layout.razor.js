export function onLoad() {
    const layoutEl = document.getElementById("blueBlazorLayout")
    if (!layoutEl) return

    blueWeb.layout.init(layoutEl)
}

export function onDispose() {
    const layoutEl = document.getElementById("blueBlazorLayout")
    if (!layoutEl) return

    blueWeb.layout.dispose(layoutEl)
}