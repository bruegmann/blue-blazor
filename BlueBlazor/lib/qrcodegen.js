/*!
 * QR Code generator library (compiled from TypeScript)
 *
 * Copyright (c) Project Nayuki. (MIT License)
 * https://www.nayuki.io/page/qr-code-generator-library
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * - The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 * - The Software is provided "as is", without warranty of any kind, express or
 *   implied, including but not limited to the warranties of merchantability,
 *   fitness for a particular purpose and noninfringement. In no event shall the
 *   authors or copyright holders be liable for any claim, damages or other
 *   liability, whether in an action of contract, tort or otherwise, arising from,
 *   out of or in connection with the Software or the use or other dealings in the
 *   Software.
 */
"use strict"
var qrcodegen
!(function (t) {
    class e {
        constructor(t, i, s, o) {
            if (
                ((this.version = t),
                (this.errorCorrectionLevel = i),
                (this.modules = []),
                (this.isFunction = []),
                t < e.MIN_VERSION || t > e.MAX_VERSION)
            )
                throw RangeError("Version value out of range")
            if (o < -1 || o > 7) throw RangeError("Mask value out of range")
            this.size = 4 * t + 17
            let n = []
            for (let l = 0; l < this.size; l++) n.push(!1)
            for (let $ = 0; $ < this.size; $++)
                this.modules.push(n.slice()), this.isFunction.push(n.slice())
            this.drawFunctionPatterns()
            let a = this.addEccAndInterleave(s)
            if ((this.drawCodewords(a), -1 == o)) {
                let h = 1e9
                for (let u = 0; u < 8; u++) {
                    this.applyMask(u), this.drawFormatBits(u)
                    let _ = this.getPenaltyScore()
                    _ < h && ((o = u), (h = _)), this.applyMask(u)
                }
            }
            r(0 <= o && o <= 7),
                (this.mask = o),
                this.applyMask(o),
                this.drawFormatBits(o),
                (this.isFunction = [])
        }
        static encodeText(i, s) {
            let r = t.QrSegment.makeSegments(i)
            return e.encodeSegments(r, s)
        }
        static encodeBinary(i, s) {
            let r = t.QrSegment.makeBytes(i)
            return e.encodeSegments([r], s)
        }
        static encodeSegments(t, s, n = 1, l = 40, $ = -1, a = !0) {
            if (
                !(e.MIN_VERSION <= n && n <= l && l <= e.MAX_VERSION) ||
                $ < -1 ||
                $ > 7
            )
                throw RangeError("Invalid value")
            let h, u
            for (h = n; ; h++) {
                let _ = 8 * e.getNumDataCodewords(h, s),
                    d = o.getTotalBits(t, h)
                if (d <= _) {
                    u = d
                    break
                }
                if (h >= l) throw RangeError("Data too long")
            }
            for (let c of [e.Ecc.MEDIUM, e.Ecc.QUARTILE, e.Ecc.HIGH])
                a && u <= 8 * e.getNumDataCodewords(h, c) && (s = c)
            let f = []
            for (let m of t)
                for (let g of (i(m.mode.modeBits, 4, f),
                i(m.numChars, m.mode.numCharCountBits(h), f),
                m.getData()))
                    f.push(g)
            r(f.length == u)
            let C = 8 * e.getNumDataCodewords(h, s)
            r(f.length <= C),
                i(0, Math.min(4, C - f.length), f),
                i(0, (8 - (f.length % 8)) % 8, f),
                r(f.length % 8 == 0)
            for (let E = 236; f.length < C; E ^= 253) i(E, 8, f)
            let N = []
            for (; 8 * N.length < f.length; ) N.push(0)
            return (
                f.forEach((t, e) => (N[e >>> 3] |= t << (7 - (7 & e)))),
                new e(h, s, N, $)
            )
        }
        getModule(t, e) {
            return (
                0 <= t &&
                t < this.size &&
                0 <= e &&
                e < this.size &&
                this.modules[e][t]
            )
        }
        drawFunctionPatterns() {
            for (let t = 0; t < this.size; t++)
                this.setFunctionModule(6, t, t % 2 == 0),
                    this.setFunctionModule(t, 6, t % 2 == 0)
            this.drawFinderPattern(3, 3),
                this.drawFinderPattern(this.size - 4, 3),
                this.drawFinderPattern(3, this.size - 4)
            let e = this.getAlignmentPatternPositions(),
                i = e.length
            for (let s = 0; s < i; s++)
                for (let r = 0; r < i; r++)
                    (0 == s && 0 == r) ||
                        (0 == s && r == i - 1) ||
                        (s == i - 1 && 0 == r) ||
                        this.drawAlignmentPattern(e[s], e[r])
            this.drawFormatBits(0), this.drawVersion()
        }
        drawFormatBits(t) {
            let e = (this.errorCorrectionLevel.formatBits << 3) | t,
                i = e
            for (let o = 0; o < 10; o++) i = (i << 1) ^ ((i >>> 9) * 1335)
            let n = ((e << 10) | i) ^ 21522
            r(n >>> 15 == 0)
            for (let l = 0; l <= 5; l++) this.setFunctionModule(8, l, s(n, l))
            this.setFunctionModule(8, 7, s(n, 6)),
                this.setFunctionModule(8, 8, s(n, 7)),
                this.setFunctionModule(7, 8, s(n, 8))
            for (let $ = 9; $ < 15; $++)
                this.setFunctionModule(14 - $, 8, s(n, $))
            for (let a = 0; a < 8; a++)
                this.setFunctionModule(this.size - 1 - a, 8, s(n, a))
            for (let h = 8; h < 15; h++)
                this.setFunctionModule(8, this.size - 15 + h, s(n, h))
            this.setFunctionModule(8, this.size - 8, !0)
        }
        drawVersion() {
            if (this.version < 7) return
            let t = this.version
            for (let e = 0; e < 12; e++) t = (t << 1) ^ ((t >>> 11) * 7973)
            let i = (this.version << 12) | t
            r(i >>> 18 == 0)
            for (let o = 0; o < 18; o++) {
                let n = s(i, o),
                    l = this.size - 11 + (o % 3),
                    $ = Math.floor(o / 3)
                this.setFunctionModule(l, $, n), this.setFunctionModule($, l, n)
            }
        }
        drawFinderPattern(t, e) {
            for (let i = -4; i <= 4; i++)
                for (let s = -4; s <= 4; s++) {
                    let r = Math.max(Math.abs(s), Math.abs(i)),
                        o = t + s,
                        n = e + i
                    0 <= o &&
                        o < this.size &&
                        0 <= n &&
                        n < this.size &&
                        this.setFunctionModule(o, n, 2 != r && 4 != r)
                }
        }
        drawAlignmentPattern(t, e) {
            for (let i = -2; i <= 2; i++)
                for (let s = -2; s <= 2; s++)
                    this.setFunctionModule(
                        t + s,
                        e + i,
                        1 != Math.max(Math.abs(s), Math.abs(i))
                    )
        }
        setFunctionModule(t, e, i) {
            ;(this.modules[e][t] = i), (this.isFunction[e][t] = !0)
        }
        addEccAndInterleave(t) {
            let i = this.version,
                s = this.errorCorrectionLevel
            if (t.length != e.getNumDataCodewords(i, s))
                throw RangeError("Invalid argument")
            let o = e.NUM_ERROR_CORRECTION_BLOCKS[s.ordinal][i],
                n = e.ECC_CODEWORDS_PER_BLOCK[s.ordinal][i],
                l = Math.floor(e.getNumRawDataModules(i) / 8),
                $ = o - (l % o),
                a = Math.floor(l / o),
                h = [],
                u = e.reedSolomonComputeDivisor(n)
            for (let _ = 0, d = 0; _ < o; _++) {
                let c = t.slice(d, d + a - n + (_ < $ ? 0 : 1))
                d += c.length
                let f = e.reedSolomonComputeRemainder(c, u)
                _ < $ && c.push(0), h.push(c.concat(f))
            }
            let m = []
            for (let g = 0; g < h[0].length; g++)
                h.forEach((t, e) => {
                    ;(g != a - n || e >= $) && m.push(t[g])
                })
            return r(m.length == l), m
        }
        drawCodewords(t) {
            if (
                t.length != Math.floor(e.getNumRawDataModules(this.version) / 8)
            )
                throw RangeError("Invalid argument")
            let i = 0
            for (let o = this.size - 1; o >= 1; o -= 2) {
                6 == o && (o = 5)
                for (let n = 0; n < this.size; n++)
                    for (let l = 0; l < 2; l++) {
                        let $ = o - l,
                            a = ((o + 1) & 2) == 0,
                            h = a ? this.size - 1 - n : n
                        !this.isFunction[h][$] &&
                            i < 8 * t.length &&
                            ((this.modules[h][$] = s(t[i >>> 3], 7 - (7 & i))),
                            i++)
                    }
            }
            r(i == 8 * t.length)
        }
        applyMask(t) {
            if (t < 0 || t > 7) throw RangeError("Mask value out of range")
            for (let e = 0; e < this.size; e++)
                for (let i = 0; i < this.size; i++) {
                    let s
                    switch (t) {
                        case 0:
                            s = (i + e) % 2 == 0
                            break
                        case 1:
                            s = e % 2 == 0
                            break
                        case 2:
                            s = i % 3 == 0
                            break
                        case 3:
                            s = (i + e) % 3 == 0
                            break
                        case 4:
                            s = (Math.floor(i / 3) + Math.floor(e / 2)) % 2 == 0
                            break
                        case 5:
                            s = ((i * e) % 2) + ((i * e) % 3) == 0
                            break
                        case 6:
                            s = (((i * e) % 2) + ((i * e) % 3)) % 2 == 0
                            break
                        case 7:
                            s = (((i + e) % 2) + ((i * e) % 3)) % 2 == 0
                            break
                        default:
                            throw Error("Unreachable")
                    }
                    !this.isFunction[e][i] &&
                        s &&
                        (this.modules[e][i] = !this.modules[e][i])
                }
        }
        getPenaltyScore() {
            let t = 0
            for (let i = 0; i < this.size; i++) {
                let s = !1,
                    o = 0,
                    n = [0, 0, 0, 0, 0, 0, 0]
                for (let l = 0; l < this.size; l++)
                    this.modules[i][l] == s
                        ? 5 == ++o
                            ? (t += e.PENALTY_N1)
                            : o > 5 && t++
                        : (this.finderPenaltyAddHistory(o, n),
                          s ||
                              (t +=
                                  this.finderPenaltyCountPatterns(n) *
                                  e.PENALTY_N3),
                          (s = this.modules[i][l]),
                          (o = 1))
                t += this.finderPenaltyTerminateAndCount(s, o, n) * e.PENALTY_N3
            }
            for (let $ = 0; $ < this.size; $++) {
                let a = !1,
                    h = 0,
                    u = [0, 0, 0, 0, 0, 0, 0]
                for (let _ = 0; _ < this.size; _++)
                    this.modules[_][$] == a
                        ? 5 == ++h
                            ? (t += e.PENALTY_N1)
                            : h > 5 && t++
                        : (this.finderPenaltyAddHistory(h, u),
                          a ||
                              (t +=
                                  this.finderPenaltyCountPatterns(u) *
                                  e.PENALTY_N3),
                          (a = this.modules[_][$]),
                          (h = 1))
                t += this.finderPenaltyTerminateAndCount(a, h, u) * e.PENALTY_N3
            }
            for (let d = 0; d < this.size - 1; d++)
                for (let c = 0; c < this.size - 1; c++) {
                    let f = this.modules[d][c]
                    f == this.modules[d][c + 1] &&
                        f == this.modules[d + 1][c] &&
                        f == this.modules[d + 1][c + 1] &&
                        (t += e.PENALTY_N2)
                }
            let m = 0
            for (let g of this.modules)
                m = g.reduce((t, e) => t + (e ? 1 : 0), m)
            let C = this.size * this.size,
                E = Math.ceil(Math.abs(20 * m - 10 * C) / C) - 1
            return (
                r(0 <= E && E <= 9),
                r(0 <= (t += E * e.PENALTY_N4) && t <= 2568888),
                t
            )
        }
        getAlignmentPatternPositions() {
            if (1 == this.version) return []
            {
                let t = Math.floor(this.version / 7) + 2,
                    e =
                        32 == this.version
                            ? 26
                            : 2 *
                              Math.ceil((4 * this.version + 4) / (2 * t - 2)),
                    i = [6]
                for (let s = this.size - 7; i.length < t; s -= e)
                    i.splice(1, 0, s)
                return i
            }
        }
        static getNumRawDataModules(t) {
            if (t < e.MIN_VERSION || t > e.MAX_VERSION)
                throw RangeError("Version number out of range")
            let i = (16 * t + 128) * t + 64
            if (t >= 2) {
                let s = Math.floor(t / 7) + 2
                ;(i -= (25 * s - 10) * s - 55), t >= 7 && (i -= 36)
            }
            return r(208 <= i && i <= 29648), i
        }
        static getNumDataCodewords(t, i) {
            return (
                Math.floor(e.getNumRawDataModules(t) / 8) -
                e.ECC_CODEWORDS_PER_BLOCK[i.ordinal][t] *
                    e.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][t]
            )
        }
        static reedSolomonComputeDivisor(t) {
            if (t < 1 || t > 255) throw RangeError("Degree out of range")
            let i = []
            for (let s = 0; s < t - 1; s++) i.push(0)
            i.push(1)
            let r = 1
            for (let o = 0; o < t; o++) {
                for (let n = 0; n < i.length; n++)
                    (i[n] = e.reedSolomonMultiply(i[n], r)),
                        n + 1 < i.length && (i[n] ^= i[n + 1])
                r = e.reedSolomonMultiply(r, 2)
            }
            return i
        }
        static reedSolomonComputeRemainder(t, i) {
            let s = i.map((t) => 0)
            for (let r of t) {
                let o = r ^ s.shift()
                s.push(0),
                    i.forEach((t, i) => (s[i] ^= e.reedSolomonMultiply(t, o)))
            }
            return s
        }
        static reedSolomonMultiply(t, e) {
            if (t >>> 8 != 0 || e >>> 8 != 0)
                throw RangeError("Byte out of range")
            let i = 0
            for (let s = 7; s >= 0; s--)
                (i = (i << 1) ^ ((i >>> 7) * 285)), (i ^= ((e >>> s) & 1) * t)
            return r(i >>> 8 == 0), i
        }
        finderPenaltyCountPatterns(t) {
            let e = t[1]
            r(e <= 3 * this.size)
            let i =
                e > 0 && t[2] == e && t[3] == 3 * e && t[4] == e && t[5] == e
            return (
                (i && t[0] >= 4 * e && t[6] >= e ? 1 : 0) +
                (i && t[6] >= 4 * e && t[0] >= e ? 1 : 0)
            )
        }
        finderPenaltyTerminateAndCount(t, e, i) {
            return (
                t && (this.finderPenaltyAddHistory(e, i), (e = 0)),
                (e += this.size),
                this.finderPenaltyAddHistory(e, i),
                this.finderPenaltyCountPatterns(i)
            )
        }
        finderPenaltyAddHistory(t, e) {
            0 == e[0] && (t += this.size), e.pop(), e.unshift(t)
        }
    }
    function i(t, e, i) {
        if (e < 0 || e > 31 || t >>> e != 0)
            throw RangeError("Value out of range")
        for (let s = e - 1; s >= 0; s--) i.push((t >>> s) & 1)
    }
    function s(t, e) {
        return ((t >>> e) & 1) != 0
    }
    function r(t) {
        if (!t) throw Error("Assertion error")
    }
    ;(e.MIN_VERSION = 1),
        (e.MAX_VERSION = 40),
        (e.PENALTY_N1 = 3),
        (e.PENALTY_N2 = 3),
        (e.PENALTY_N3 = 40),
        (e.PENALTY_N4 = 10),
        (e.ECC_CODEWORDS_PER_BLOCK = [
            [
                -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22,
                24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30,
                30, 30, 30, 30, 30, 30, 30, 30, 30
            ],
            [
                -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24,
                28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
                28, 28, 28, 28, 28, 28, 28, 28, 28
            ],
            [
                -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30,
                24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30,
                30, 30, 30, 30, 30, 30, 30, 30, 30
            ],
            [
                -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24,
                30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30,
                30, 30, 30, 30, 30, 30, 30, 30, 30
            ]
        ]),
        (e.NUM_ERROR_CORRECTION_BLOCKS = [
            [
                -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8,
                8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21,
                22, 24, 25
            ],
            [
                -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13,
                14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37,
                38, 40, 43, 45, 47, 49
            ],
            [
                -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18,
                21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51,
                53, 56, 59, 62, 65, 68
            ],
            [
                -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19,
                21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57,
                60, 63, 66, 70, 74, 77, 81
            ]
        ]),
        (t.QrCode = e)
    class o {
        constructor(t, e, i) {
            if (
                ((this.mode = t),
                (this.numChars = e),
                (this.bitData = i),
                e < 0)
            )
                throw RangeError("Invalid argument")
            this.bitData = i.slice()
        }
        static makeBytes(t) {
            let e = []
            for (let s of t) i(s, 8, e)
            return new o(o.Mode.BYTE, t.length, e)
        }
        static makeNumeric(t) {
            if (!o.isNumeric(t))
                throw RangeError("String contains non-numeric characters")
            let e = []
            for (let s = 0; s < t.length; ) {
                let r = Math.min(t.length - s, 3)
                i(parseInt(t.substr(s, r), 10), 3 * r + 1, e), (s += r)
            }
            return new o(o.Mode.NUMERIC, t.length, e)
        }
        static makeAlphanumeric(t) {
            if (!o.isAlphanumeric(t))
                throw RangeError(
                    "String contains unencodable characters in alphanumeric mode"
                )
            let e = [],
                s
            for (s = 0; s + 2 <= t.length; s += 2) {
                let r = 45 * o.ALPHANUMERIC_CHARSET.indexOf(t.charAt(s))
                i((r += o.ALPHANUMERIC_CHARSET.indexOf(t.charAt(s + 1))), 11, e)
            }
            return (
                s < t.length &&
                    i(o.ALPHANUMERIC_CHARSET.indexOf(t.charAt(s)), 6, e),
                new o(o.Mode.ALPHANUMERIC, t.length, e)
            )
        }
        static makeSegments(t) {
            return "" == t
                ? []
                : o.isNumeric(t)
                ? [o.makeNumeric(t)]
                : o.isAlphanumeric(t)
                ? [o.makeAlphanumeric(t)]
                : [o.makeBytes(o.toUtf8ByteArray(t))]
        }
        static makeEci(t) {
            let e = []
            if (t < 0) throw RangeError("ECI assignment value out of range")
            if (t < 128) i(t, 8, e)
            else if (t < 16384) i(2, 2, e), i(t, 14, e)
            else if (t < 1e6) i(6, 3, e), i(t, 21, e)
            else throw RangeError("ECI assignment value out of range")
            return new o(o.Mode.ECI, 0, e)
        }
        static isNumeric(t) {
            return o.NUMERIC_REGEX.test(t)
        }
        static isAlphanumeric(t) {
            return o.ALPHANUMERIC_REGEX.test(t)
        }
        getData() {
            return this.bitData.slice()
        }
        static getTotalBits(t, e) {
            let i = 0
            for (let s of t) {
                let r = s.mode.numCharCountBits(e)
                if (s.numChars >= 1 << r) return 1 / 0
                i += 4 + r + s.bitData.length
            }
            return i
        }
        static toUtf8ByteArray(t) {
            t = encodeURI(t)
            let e = []
            for (let i = 0; i < t.length; i++)
                "%" != t.charAt(i)
                    ? e.push(t.charCodeAt(i))
                    : (e.push(parseInt(t.substr(i + 1, 2), 16)), (i += 2))
            return e
        }
    }
    ;(o.NUMERIC_REGEX = /^[0-9]*$/),
        (o.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
        (o.ALPHANUMERIC_CHARSET =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"),
        (t.QrSegment = o)
})(qrcodegen || (qrcodegen = {})),
    (function (t) {
        var e
        !(function (t) {
            class e {
                constructor(t, e) {
                    ;(this.ordinal = t), (this.formatBits = e)
                }
            }
            ;(e.LOW = new e(0, 1)),
                (e.MEDIUM = new e(1, 0)),
                (e.QUARTILE = new e(2, 3)),
                (e.HIGH = new e(3, 2)),
                (t.Ecc = e)
        })((e = t.QrCode || (t.QrCode = {})))
    })(qrcodegen || (qrcodegen = {})),
    (function (t) {
        var e
        !(function (t) {
            class e {
                constructor(t, e) {
                    ;(this.modeBits = t), (this.numBitsCharCount = e)
                }
                numCharCountBits(t) {
                    return this.numBitsCharCount[Math.floor((t + 7) / 17)]
                }
            }
            ;(e.NUMERIC = new e(1, [10, 12, 14])),
                (e.ALPHANUMERIC = new e(2, [9, 11, 13])),
                (e.BYTE = new e(4, [8, 16, 16])),
                (e.KANJI = new e(8, [8, 10, 12])),
                (e.ECI = new e(7, [0, 0, 0])),
                (t.Mode = e)
        })((e = t.QrSegment || (t.QrSegment = {})))
    })(qrcodegen || (qrcodegen = {}))

export default qrcodegen
