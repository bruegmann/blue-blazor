window.blueBlazor = window.blueBlazor || {}

function findParentWithClass(element, className) {
    while (element && !element.classList.contains(className)) {
        element = element.parentElement
    }
    return element
}

function hasClass(el, className) {
    if (el.classList) return el.classList.contains(className)
    else
        return !!el.className.match(
            new RegExp("(\\s|^)" + className + "(\\s|$)")
        )
}

function initExpandSidebar(layout) {
    if (layout) {
        const fromStorage = localStorage.getItem("blueLayoutShrinkSidebar")
        const shrinkSidebar =
            fromStorage !== "null" && fromStorage !== null ? true : false
        const expandSidebar = !shrinkSidebar
        if (expandSidebar) {
            layout.classList.add("expandSidebar")
        } else {
            layout.classList.remove("expandSidebar")
        }
    }
}

function outsideClickHandler({ target }, layout) {
    const ignoreElements = [
        "blue-open-menu",
        "bi-menu",
        "blue-search",
        "blue-search-control",
        "blue-search-btn",
        "blue-search-btn-icon",
        "blue-menu-item-dropdown-toggle",
        "blue-menu-item-dropdown-caret",
        "blue-menu-item-dropdown-icon",
        "blue-sidebar-exception"
    ]

    const outsideElement = layout.querySelector(".blue-outside")
    if (outsideElement) {
        const isClickInside = outsideElement.contains(target)

        if (ignoreElements) {
            for (let i = 0; i < ignoreElements.length; i++) {
                if (hasClass(target, ignoreElements[i])) {
                    return
                }
            }
        }

        if (!isClickInside) {
            layout.classList.remove("open")
        }
    }
}

window.blueBlazor.layout = {
    init: (layout) => {
        initExpandSidebar(layout)

        if (layout) {
            const fromStorage = localStorage.getItem("blueLayoutShrinkSidebar")
            const shrinkSidebar =
                fromStorage !== "null" && fromStorage !== null ? true : false
            const expandSidebar = !shrinkSidebar
            if (expandSidebar) {
                layout.classList.add("expandSidebar")
            } else {
                layout.classList.remove("expandSidebar")
            }

            document.addEventListener("click", (ev) => outsideClickHandler(ev, layout))
        }
    },
    toggleSidebarIn: (event) => {
        const layout = findParentWithClass(event.target, "blue-layout")
        if (layout) {
            layout.classList.toggle("open")
        }
    },
    toggleExpandSidebar: (event, useStorage = true) => {
        const layout = findParentWithClass(event.target, "blue-layout")
        if (layout) {
            if (useStorage) {
                const expandSidebar = layout.classList.contains("expandSidebar")
                if (expandSidebar) {
                    localStorage.setItem("blueLayoutShrinkSidebar", "true")
                } else {
                    localStorage.removeItem("blueLayoutShrinkSidebar")
                }
            }

            layout.classList.toggle("expandSidebar")
        }
    },
    unsetSidebarIn: (event) => {
        const layout = findParentWithClass(event.target, "blue-layout")
        if (layout) {
            layout.classList.remove("open")
        }
    }
}

export function onLoad() {
    for (let layout of document.getElementsByClassName("blue-layout")) {
        blueBlazor.layout.init(layout)

        if (layout) {
            for (let toggler of layout.getElementsByClassName("blue-sidebar-toggler-sidebarIn")) {
                toggler.addEventListener("click", blueBlazor.layout.toggleSidebarIn)
            }

            for (let toggler of layout.getElementsByClassName("blue-sidebar-toggler-expandSidebar")) {
                toggler.addEventListener("click", blueBlazor.layout.toggleExpandSidebar)
            }
        }
    }
}

export function onUpdate() {
    for (let layout of document.getElementsByClassName("blue-layout")) {
        initExpandSidebar(layout)
    }
}

export function onDispose() {
    for (let layout of document.getElementsByClassName("blue-layout")) {
        document.removeEventListener("click", outsideClickHandler)

        if (layout) {
            for (let toggler of layout.getElementsByClassName("blue-sidebar-toggler-sidebarIn")) {
                toggler.removeEventListener("click", blueBlazor.layout.toggleSidebarIn)
            }

            for (let toggler of layout.getElementsByClassName("blue-sidebar-toggler-expandSidebar")) {
                toggler.removeEventListener("click", blueBlazor.layout.toggleExpandSidebar)
            }
        }
    }
}