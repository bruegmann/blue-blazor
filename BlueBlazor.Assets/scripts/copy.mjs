import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
    path.join(__dirname, "../node_modules", "blue-web", "dist"),
    path.join(__dirname, "../dist", "blue-web")
)
copyDirectory(
    path.join(__dirname, "node_modules", "monaco-editor", "min"),
    path.join(__dirname, "dist", "monaco-editor", "min")
)

fs.copyFile(
    path.join(__dirname, "../../README.md"),
    path.join(__dirname, "../../BlueBlazor/README.md")
)
