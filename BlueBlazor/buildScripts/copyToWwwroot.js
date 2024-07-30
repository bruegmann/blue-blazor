const fs = require("fs").promises
const path = require("path")

async function copyFile(source, destination) {
    try {
        // Erstellen Sie das Zielverzeichnis, falls es nicht existiert
        await fs.mkdir(path.dirname(destination), { recursive: true })

        // Kopieren Sie die Datei
        await fs.copyFile(source, destination)
        console.log(`File copied from ${source} to ${destination}`)
    } catch (error) {
        console.error(`Error copying file: ${error}`)
    }
}

const sourcePath = path.join(
    __dirname,
    "..",
    "node_modules",
    "blue-web",
    "dist",
    "style.min.css"
)
const destinationPath = path.join(
    __dirname,
    "..",
    "wwwroot",
    "css",
    "blue-web.min.css"
)

copyFile(sourcePath, destinationPath)
