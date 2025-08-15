import { onEnhancedLoad, PageScript } from "./PageScript"

export * from "@awesome.me/webawesome/dist/components/qr-code/qr-code.js"
export * from "@awesome.me/webawesome/dist/components/tooltip/tooltip.js"

import "../node_modules/bootstrap/js/dist/tab.js"

interface Blazor {
    registerCustomEventType: (
        name: string,
        options: CustomEventTypeOptions
    ) => void

    theme: {
        isSystemDark(): boolean
        isDarkMode(): boolean
    }
    addEventListener: (name: string, callback: (event: any) => void) => void
}

interface CustomEventTypeOptions {
    browserEventName: string
    createEventArgs: (event: WAEventType) => any
}

interface WAEventType {
    target: any
    detail: any
    _readOnly: any
    type: string
}

var beforeStartCalled = false
var afterStartedCalled = false

export function afterWebStarted(blazor: any) {
    if (!afterStartedCalled) {
        afterStarted(blazor, "web")
    }
}

export function beforeWebStart(options: any) {
    if (!beforeStartCalled) {
        beforeStart(options)
    }
}

export function beforeWebAssemblyStart(options: any) {
    if (!beforeStartCalled) {
        beforeStart(options)
    }
}

export function afterWebAssemblyStarted(blazor: any) {
    if (!afterStartedCalled) {
        afterStarted(blazor, "wasm")
    }
}

export function beforeServerStart(options: any) {
    if (!beforeStartCalled) {
        beforeStart(options)
    }
}

export function afterServerStarted(blazor: any) {
    if (!afterStartedCalled) {
        afterStarted(blazor, "server")
    }
}

export function afterStarted(blazor: Blazor, mode: string) {
    if (typeof blazor.addEventListener === "function" && mode === "web") {
        customElements.define("page-script", PageScript)
        blazor.addEventListener("enhancedload", onEnhancedLoad)
    }

    blazor.registerCustomEventType("washow", {
        browserEventName: "wa-show",
        createEventArgs: () => {
            return null
        }
    })

    blazor.registerCustomEventType("wahide", {
        browserEventName: "wa-hide",
        createEventArgs: () => {
            return null
        }
    })

    afterStartedCalled = true
}

export function beforeStart(options: any) {
    //   customElements.define("fluent-design-theme", DesignTheme);
    //   customElements.define("split-panels", SplitPanels);
    beforeStartCalled = true
}
