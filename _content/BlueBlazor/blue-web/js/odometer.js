function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class Odometer extends HTMLElement {
  static get observedAttributes() {
    return ["value", "max"];
  }
  constructor() {
    super();
    _defineProperty(this, "_initialized", false);
    this.attachShadow({
      mode: "open"
    });
  }
  connectedCallback() {
    if (!this._initialized) {
      this.setup();
      this._initialized = true;
      // Initialen Wert anwenden (Markup-Attribut oder default)
      this.updateValue(this.value);
    }
  }
  setup() {
    const style = document.createElement("style");
    style.textContent = /* CSS */"\n        :host {\n          display: inline-flex;\n          min-width: 1em;\n          height: 1em;\n          text-align: center;\n          overflow: hidden;\n          line-height: 1em;\n          transition: background-color 0.3s;\n        }\n        .numbers {\n          display: flex;\n          flex-direction: column;\n          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n        }\n        .numbers span {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          height: 1em;\n        }";
    const wrapper = document.createElement("span");
    wrapper.classList.add("numbers");
    wrapper.setAttribute("aria-hidden", "true");
    this.shadowRoot.append(style, wrapper);
    this.wrapper = wrapper;
    this.rebuildNumbers();
  }
  rebuildNumbers() {
    this.wrapper.innerHTML = "";
    const max = this.max;
    for (let i = 0; i <= max; i++) {
      const s = document.createElement("span");
      s.textContent = String(i);
      this.wrapper.appendChild(s);
    }
    const plus = document.createElement("span");
    plus.textContent = "".concat(max, "+");
    this.wrapper.appendChild(plus);

    // Aktuellen Wert neu anwenden
    if (this._initialized) {
      this.updateValue(this.value);
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue && this._initialized) {
      if (name === "value") {
        this.updateValue(parseInt(newValue !== null && newValue !== void 0 ? newValue : "0", 10));
      } else if (name === "max") {
        this.rebuildNumbers();
      }
    }
  }
  updateValue(value) {
    const max = this.max;
    const index = value > max ? max + 1 : Math.max(0, value);
    const height = this.wrapper.getBoundingClientRect().height || 16;
    this.wrapper.style.transform = "translateY(-".concat(index * height, "px)");
    const displayValue = value > max ? "".concat(max, "+") : "".concat(value);
    this.setAttribute("aria-label", displayValue);
  }
  set value(value) {
    const current = this.value;
    if (current !== value) {
      this.setAttribute("value", String(value));
      if (this._initialized) {
        this.updateValue(value);
        this.dispatchEvent(new CustomEvent("change", {
          detail: {
            value
          },
          bubbles: true,
          composed: true
        }));
      }
    }
  }
  get value() {
    return parseInt(this.getAttribute("value") || "0", 10) || 0;
  }
  set max(value) {
    this.setAttribute("max", String(value));
  }
  get max() {
    return parseInt(this.getAttribute("max") || "9", 10) || 9;
  }
}
if (!customElements.get("bl-odometer")) {
  customElements.define("bl-odometer", Odometer);
}
export { Odometer };
export default Odometer;