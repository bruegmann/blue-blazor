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
    "net10.0",
    "publish",
    "wwwroot"
)

changeBase("index.html")

ghpages.publish(folder, { nojekyll: true, add: true, git: "git" }, (err) => {
    if (err) {
        console.log("gh-pages failed.")
        console.error(err)
    } else {
        console.log("Published using gh-pages")
    }
})
