export function onLoad() {
    const expandEl = document.getElementById("layout-expand")
    if (!expandEl) return

    const entry = localStorage.getItem("side-layout-shrink")
    const shrink = entry != null
    expandEl.checked = !shrink

    expandEl.addEventListener("change", handleChange)

    window.addEventListener("popstate", handleLocationChange)

    const originalPushState = history.pushState
    history.pushState = function (...args) {
        originalPushState.apply(history, args)
        handleLocationChange()
    }

    const originalReplaceState = history.replaceState
    history.replaceState = function (...args) {
        originalReplaceState.apply(history, args)
        handleLocationChange()
    }
}

function handleChange() {
    if (localStorage.getItem("side-layout-shrink")) {
        localStorage.removeItem("side-layout-shrink")
    }
    else {
        localStorage.setItem("side-layout-shrink", "true")
    }
}

function handleLocationChange() {
    const drawerEl = document.getElementById("layout-drawer")
    if (drawerEl)
        drawerEl.checked = false
}