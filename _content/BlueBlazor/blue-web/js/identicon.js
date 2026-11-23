class Identicon extends HTMLElement {
  static get observedAttributes() {
    return ["value"];
  }
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
  }
  get value() {
    return this.getAttribute("value") || "";
  }
  set value(v) {
    this.shadowRoot.innerHTML = this.createIdenticon(v);
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = this.createIdenticon(this.value);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue && name === "value") {
      this.shadowRoot.innerHTML = this.createIdenticon(this.value);
    }
  }
  hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  createIdenticon(id) {
    const h = this.hash(id);
    const gridSize = 7;
    const cellSize = 2;
    const cells = [];
    let bit = 0;
    for (let y = 0; y < gridSize; y++) {
      const left = [];
      for (let x = 0; x < 4; x++) {
        // Hash zyklisch verwenden
        const value = h >> bit % 32 & 1;
        left.push(value);
        bit++;
      }
      const row = [left[0], left[1], left[2], left[3], left[2], left[1], left[0]];
      cells.push(row);
    }
    let svgRects = "";
    for (let y = 0; y < gridSize; y++) {
      let start = null;
      for (let x = 0; x <= gridSize; x++) {
        const filled = x < gridSize && cells[y][x];
        if (filled && start === null) {
          start = x;
        }
        if ((!filled || x === gridSize) && start !== null) {
          const width = x - start;
          svgRects += "\n                    <rect\n                        x=\"".concat(start * cellSize, "\"\n                        y=\"").concat(y * cellSize, "\"\n                        width=\"").concat(width * cellSize, "\"\n                        height=\"").concat(cellSize, "\" rx=\"0.5\" />\n                ");
          start = null;
        }
      }
    }
    return "\n<svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    viewBox=\"0 0 14 14\"\n    fill=\"currentColor\" class=\"".concat(this.className, "\">\n\n    ").concat(svgRects, "\n\n</svg>");
  }
}
if (!customElements.get("bl-identicon")) {
  customElements.define("bl-identicon", Identicon);
}
export { Identicon };
export default Identicon;