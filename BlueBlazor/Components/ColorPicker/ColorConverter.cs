using System.Globalization;
using System.Text.RegularExpressions;

namespace BlueBlazor.Components;

public static class ColorConverter
{
    public static RgbColor GetRGB(string oleColor)
    {
        if (Regex.IsMatch(oleColor, "^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$"))
        {
            return HexToRGB(oleColor);
        }
        else if (int.TryParse(oleColor, out int oleColorInt))
        {
            int r = oleColorInt % 256;
            int g_0 = (oleColorInt % 65536) - r;
            int b_0 = oleColorInt - g_0 - r;
            int g = g_0 / 256;
            int b = b_0 / 65536;

            return new RgbColor { R = r, G = g, B = b, A = 1 };
        }
        else
        {
            return new RgbColor { R = 255, G = 255, B = 255, A = 1 };
        }
    }

    public static RgbColor HexToRGB(string hex)
    {
        string c = hex.Substring(1);
        if (c.Length == 3)
        {
            c = $"{c[0]}{c[0]}{c[1]}{c[1]}{c[2]}{c[2]}";
        }

        int intValue = int.Parse(c, NumberStyles.HexNumber);
        return new RgbColor
        {
            R = (intValue >> 16) & 255,
            G = (intValue >> 8) & 255,
            B = intValue & 255,
            A = 1
        };
    }

    public static string RgbToHex(RgbColor rgbColors)
    {
        return $"#{((1 << 24) + (rgbColors.R << 16) + (rgbColors.G << 8) + rgbColors.B).ToString("X6").Substring(1)}";
    }

    public static int RgbToOLE(RgbColor rgbColors)
    {
        return rgbColors.R + rgbColors.G * 256 + rgbColors.B * 256 * 256;
    }

    public static string OleToHex(int oleColor)
    {
        int r = oleColor & 0xFF;
        int g = (oleColor >> 8) & 0xFF;
        int b = (oleColor >> 16) & 0xFF;
        return $"#{r:X2}{g:X2}{b:X2}";
    }

    public static int HexToOLE(string hex)
    {
        // Entfernen des führenden '#', falls vorhanden
        if (hex.StartsWith("#"))
        {
            hex = hex.Substring(1);
        }

        // Falls die hexadezimale Farbe im Kurzformat (z.B. #RGB) vorliegt, erweitern
        if (hex.Length == 3)
        {
            hex = $"{hex[0]}{hex[0]}{hex[1]}{hex[1]}{hex[2]}{hex[2]}";
        }

        // Konvertieren der hexadezimalen Zeichenkette in eine Ganzzahl
        int intValue = int.Parse(hex, NumberStyles.HexNumber);

        // Extrahieren der RGB-Komponenten
        int r = (intValue >> 16) & 0xFF;
        int g = (intValue >> 8) & 0xFF;
        int b = intValue & 0xFF;

        // Umwandeln in das OLE-Format
        return r + (g << 8) + (b << 16);
    }

    public static bool IsValidHex(string hex)
    {
        return Regex.IsMatch(hex, @"^#([A-Fa-f0-9]{3,4}){1,2}$");
    }

    public static List<string> GetChunksFromString(string input, int chunkSize)
    {
        var chunks = new List<string>();
        for (int i = 0; i < input.Length; i += chunkSize)
        {
            chunks.Add(input.Substring(i, chunkSize));
        }
        return chunks;
    }

    public static int ConvertHexUnitTo256(string hex)
    {
        // Bei 1-stelligem HEX wiederhole Zeichen (z. B. "F" → "FF")
        if (hex.Length == 1)
            hex = new string(hex[0], 2);

        return int.Parse(hex, NumberStyles.HexNumber);
    }

    public static float GetAlphaFloat(int? a, float? alpha)
    {
        if (a.HasValue)
        {
            return a.Value / 255f;
        }

        if (!alpha.HasValue || alpha < 0 || alpha > 1)
        {
            return 1f;
        }

        return alpha.Value;
    }

    public static string HexToRgba(string hex, float? alpha = null)
    {
        if (!IsValidHex(hex))
            throw new ArgumentException("Invalid HEX");

        int chunkSize = (hex.Length - 1) / 3;
        var hexChunks = GetChunksFromString(hex.Substring(1), chunkSize);
        int r = ConvertHexUnitTo256(hexChunks[0]);
        int g = ConvertHexUnitTo256(hexChunks[1]);
        int b = ConvertHexUnitTo256(hexChunks[2]);
        int? a = hexChunks.Count > 3 ? ConvertHexUnitTo256(hexChunks[3]) : (int?)null;

        return $"rgba({r},{g},{b},{GetAlphaFloat(a, alpha)})";
    }
}
public class RgbColor
{
    public int R { get; set; }
    public int G { get; set; }
    public int B { get; set; }
    public double A { get; set; } = 1.0;
}