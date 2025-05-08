window.process = { env: { NODE_ENV: 'development' } };

export function Initialize(element, dotNetHelper, themeInfo = null, blueWebScssSrc = null, applyOnMount = null) {
    if (themeInfo) element.themeInfo = JSON.parse(themeInfo)
    if (blueWebScssSrc) element.blueWebScssSrc = blueWebScssSrc
    if (applyOnMount) element.applyOnMount = applyOnMount

    element.addEventListener("compile", ({ detail }) => {
        dotNetHelper.invokeMethodAsync("InvokeCompile", JSON.stringify(detail));
    })
}

export function SetThemeInfo(element, themeInfo) {
    element.themeInfo = JSON.parse(themeInfo)
}