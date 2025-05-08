const fs = require("fs").promises
const path = require("path")

async function copyDirectory(source, destination) {
    try {
        // Erstellen Sie das Zielverzeichnis, falls es nicht existiert
        await fs.mkdir(destination, { recursive: true })

        // Lesen Sie den Inhalt des Quellverzeichnisses
        const entries = await fs.readdir(source, { withFileTypes: true })

        for (let entry of entries) {
            const sourcePath = path.join(source, entry.name)
            const destinationPath = path.join(destination, entry.name)

            if (entry.isDirectory()) {
                // Rekursiv das Unterverzeichnis kopieren
                await copyDirectory(sourcePath, destinationPath)
            } else {
                // Datei kopieren
                await fs.copyFile(sourcePath, destinationPath)
            }
        }
        console.log(`Directory copied from ${source} to ${destination}`)
    } catch (error) {
        console.error(`Error copying directory: ${error}`)
    }
}

copyDirectory(
    path.join(__dirname, "..", "node_modules", "blue-web", "dist"),
    path.join(__dirname, "..", "wwwroot", "blue-web"))

copyDirectory(
    path.join(__dirname, "..", "node_modules", "themify", "dist"),
    path.join(__dirname, "..", "wwwroot", "themify"))