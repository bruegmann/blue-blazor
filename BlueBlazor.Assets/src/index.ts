import { onEnhancedLoad, PageScript } from "./PageScript"

export * from "@awesome.me/webawesome/dist/components/qr-code/qr-code.js"

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

export function afterStarted(blazor: Blazor, mode: string) {
    if (typeof blazor.addEventListener === "function" && mode === "web") {
        customElements.define("page-script", PageScript)
        blazor.addEventListener("enhancedload", onEnhancedLoad)
    }

    afterStartedCalled = true
}

export function beforeStart() {
    //   customElements.define("fluent-design-theme", DesignTheme);
    //   customElements.define("split-panels", SplitPanels);
    beforeStartCalled = true
}
