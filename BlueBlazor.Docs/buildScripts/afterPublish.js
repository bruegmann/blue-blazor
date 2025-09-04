const fs = require("fs")
const path = require("path")
const ghpages = require("gh-pages")

function changeBase(file) {
    const filePath = path.resolve(folder, file)
    let html = fs.readFileSync(filePath, "utf8")
    html = html.replace('<base href="/"', '<base href="/blue-blazor/"')
    fs.writeFileSync(filePath, html)
}

const folder = path.resolve(
    __dirname,
    "..",
    "bin",
    "Release",
    "net8.0",
    "browser-wasm",
    "publish",
    "wwwroot"
)

changeBase("index.html")

ghpages.publish(folder, { nojekyll: true }, (err) => {
    if (err) {
        console.log("gh-pages failed.")
        console.error(err)
    } else {
        console.log("Published using gh-pages")
    }
})
