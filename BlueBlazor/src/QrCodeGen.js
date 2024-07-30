import qrcodegen from "../lib/qrcodegen.js"

window.blueBlazor = window.blueBlazor || {}

// Returns a string of SVG code for an image depicting the given QR Code, with the given number
// of border modules. The string always uses Unix newlines (\n), regardless of the platform.
window.blueBlazor.qrCodeGen = {
    createSvg: (targetId, value, border, lightColor, darkColor, className) => {
        const QRC = qrcodegen.QrCode

        const qr = QRC.encodeText(value, QRC.Ecc.MEDIUM)

        if (border < 0) throw new RangeError("Border must be non-negative")
        let parts = []
        for (let y = 0; y < qr.size; y++) {
            for (let x = 0; x < qr.size; x++) {
                if (qr.getModule(x, y))
                    parts.push(`M${x + border},${y + border}h1v1h-1z`)
            }
        }
        const svg = `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ${
        qr.size + border * 2
    } ${qr.size + border * 2}" stroke="none" class="${className}">
        <rect width="100%" height="100%" fill="${lightColor}"/>
        <path d="${parts.join(" ")}" fill="${darkColor}"/>
    </svg>
    `
        document.getElementById(targetId).innerHTML = svg
    }
}
