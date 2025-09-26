function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * <bl-auto-theme>
 * Determines the effective (composed through transparent layers) background color
 * behind the element and sets data-bs-theme="dark" if that color is dark.
 *
 * Attribute:
 *  - dark-threshold (0..1, default 0.5)
 */
export class AutoTheme extends HTMLElement {
  constructor() {
    super(...arguments);
    _defineProperty(this, "ancestorObservers", []);
    _defineProperty(this, "rafId", null);
  }
  static get observedAttributes() {
    return ["dark-threshold"];
  }
  connectedCallback() {
    this.init();
  }
  disconnectedCallback() {
    this.cleanupObservers();
    if (this.rafId != null) cancelAnimationFrame(this.rafId);
  }
  attributeChangedCallback() {
    this.scheduleUpdate();
  }
  init() {
    this.cleanupObservers();
    this.observeAncestors();
    this.updateTheme();
  }
  observeAncestors() {
    // Observe style/class changes of all ancestors
    let el = this.parentElement;
    while (el && el !== document.documentElement) {
      const mo = new MutationObserver(() => this.scheduleUpdate());
      mo.observe(el, {
        attributes: true,
        attributeFilter: ["class", "style"]
      });
      this.ancestorObservers.push(mo);
      el = el.parentElement;
    }
    // Also observe body / documentElement
    ;
    [document.body, document.documentElement].forEach(root => {
      if (!root) return;
      const mo = new MutationObserver(() => this.scheduleUpdate());
      mo.observe(root, {
        attributes: true,
        attributeFilter: ["class", "style"]
      });
      this.ancestorObservers.push(mo);
    });
  }
  cleanupObservers() {
    this.ancestorObservers.forEach(o => o.disconnect());
    this.ancestorObservers = [];
  }
  scheduleUpdate() {
    if (this.rafId != null) return;
    this.rafId = requestAnimationFrame(() => {
      this.rafId = null;
      this.updateTheme();
    });
  }
  getThreshold() {
    const v = parseFloat(this.getAttribute("dark-threshold") || "");
    return isNaN(v) ? 0.5 : Math.min(1, Math.max(0, v));
  }
  updateTheme() {
    const color = this.computeEffectiveBackground();
    if (!color) {
      this.removeAttribute("data-bs-theme");
      return;
    }
    const luminance = this.relativeLuminance(color.r, color.g, color.b);
    if (luminance < this.getThreshold()) {
      this.setAttribute("data-bs-theme", "dark");
    } else {
      this.removeAttribute("data-bs-theme");
    }
  }

  // Accumulates transparent layers (background-color only) of ancestors
  computeEffectiveBackground() {
    let accum = {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    };
    let current = this.parentElement;
    while (current && accum.a < 0.999) {
      const cs = getComputedStyle(current);
      const col = this.parseColor(cs.backgroundColor);
      if (col && col.a > 0) {
        accum = this.composite(col, accum);
      }
      current = current.parentElement;
    }
    if (accum.a < 0.999) {
      const rootColor = this.parseColor(getComputedStyle(document.documentElement).backgroundColor) || this.parseColor(getComputedStyle(document.body).backgroundColor) || {
        r: 255,
        g: 255,
        b: 255,
        a: 1
      };
      accum = this.composite(rootColor, accum);
    }
    return accum;
  }
  composite(top, bottom) {
    const a = top.a + bottom.a * (1 - top.a);
    const r = (top.r * top.a + bottom.r * bottom.a * (1 - top.a)) / (a || 1);
    const g = (top.g * top.a + bottom.g * bottom.a * (1 - top.a)) / (a || 1);
    const b = (top.b * top.a + bottom.b * bottom.a * (1 - top.a)) / (a || 1);
    return {
      r,
      g,
      b,
      a
    };
  }
  parseColor(input) {
    if (!input) return null;
    const m = input.trim().match(/^rgba?\(\s*([\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)(?:[ ,/]+([\d.]+))?\s*\)$/i);
    if (m) {
      return {
        r: Number(m[1]),
        g: Number(m[2]),
        b: Number(m[3]),
        a: m[4] !== undefined ? Number(m[4]) : 1
      };
    }
    if (input[0] === "#") {
      let hex = input.slice(1);
      if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
      if (hex.length === 6 || hex.length === 8) {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
        return {
          r,
          g,
          b,
          a
        };
      }
    }
    return null;
  }
  relativeLuminance(r, g, b) {
    const toLin = c => {
      const v = c / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    const R = toLin(r);
    const G = toLin(g);
    const B = toLin(b);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  }
}
customElements.define("bl-auto-theme", AutoTheme);