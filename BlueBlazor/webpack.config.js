const path = require("path")
const fs = require("fs")

// Verzeichnis mit den Eingabedateien
const srcDir = path.resolve(__dirname, "src")

// Liest alle Dateien im src-Verzeichnis
const entry = fs.readdirSync(srcDir).reduce((entries, file) => {
    const filePath = path.join(srcDir, file)
    const fileName = path.parse(file).name
    entries[fileName] = filePath
    return entries
}, {})

module.exports = {
    mode: "production",
    entry: entry,
    output: {
        path: path.resolve(__dirname, "wwwroot/js"),
        filename: "[name].bundle.js" // [name] wird durch den Schlüssel im entry-Objekt ersetzt
    }
}
