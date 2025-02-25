export function onLoad() {
    const expandEl = document.getElementById("layout-expand")
    if (!expandEl) return

    const entry = localStorage.getItem("side-layout-shrink")
    const shrink = entry != null
    expandEl.checked = !shrink

    expandEl.addEventListener("change", handleChange)
}

function handleChange() {
    if (localStorage.getItem("side-layout-shrink")) {
        localStorage.removeItem("side-layout-shrink")
    }
    else {
        localStorage.setItem("side-layout-shrink", "true")
    }
}