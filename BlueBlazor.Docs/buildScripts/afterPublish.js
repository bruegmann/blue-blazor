const fs = require("fs")
const path = require("path")

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

const target = path.resolve(__dirname, "..", "..", "docs")

function changeBase(file) {
    const filePath = path.resolve(folder, file)
    let html = fs.readFileSync(filePath, "utf8")
    html = html.replace('<base href="/"', '<base href="/blue-blazor/"')
    fs.writeFileSync(filePath, html)
}

changeBase("index.html")

function emptyFolder(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const currentPath = path.join(folderPath, file)
            if (fs.lstatSync(currentPath).isDirectory()) {
                emptyFolder(currentPath)
                fs.rmdirSync(currentPath)
            } else {
                fs.unlinkSync(currentPath)
            }
        })
    }
}

function copyFolderSync(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true })
    }
    fs.readdirSync(src).forEach((file) => {
        const srcPath = path.join(src, file)
        const destPath = path.join(dest, file)
        if (fs.lstatSync(srcPath).isDirectory()) {
            copyFolderSync(srcPath, destPath)
        } else {
            fs.copyFileSync(srcPath, destPath)
        }
    })
}

// Empty the target folder
emptyFolder(target)

// Copy contents from folder to target
copyFolderSync(folder, target)
