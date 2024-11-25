const fs = require("fs").promises
const path = require("path")

fs.copyFile(
    path.join(__dirname, "../../README.md"),
    path.join(__dirname, "../README.md")
)
