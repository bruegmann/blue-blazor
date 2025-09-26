function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const DRAG_THRESHOLD = 5;

/**
 * A Web Component that displays a read view of its content and allows the user to switch to an edit view.
 * Fires event "EditRequested" when the user clicks the read view.
 * @element read-view
 * @fires EditRequested
 * @attr {boolean} disabled - Disables the component, preventing interactions and removing hover effects.
 * @cssprop --bs-primary-rgb - The primary color as an RGB value.
 * @cssprop --bs-secondary-bg-subtle - The subtle background color for the read view.
 * @cssprop --bs-border-radius-sm - The border radius for the read view.
 * @slot - The content to display in the read view.
 * @example
 * <bl-read-view id="my-read-view" onEditRequested="setEditing(true)">
 *    <a href="#">bla</a> {value}
 * </bl-read-view>
 * @example
 * document.getElementById("my-read-view").addEventListener("EditRequested", () => {
 *    setEditing(true)
 * })
 */
export class ReadView extends HTMLElement {
  constructor() {
    super();
    _defineProperty(this, "startX", 0);
    _defineProperty(this, "startY", 0);
    this.attachShadow({
      mode: "open"
    });
  }
  static get observedAttributes() {
    return ["disabled"];
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "disabled") {
      this.updateDisabledState();
    }
  }
  render() {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = /* HTML */"\n            <style>\n                button {\n                    display: block;\n                    margin: 0;\n                    padding: 0;\n                    appearance: none;\n                    background-color: transparent;\n                    border: none;\n                    line-height: 1;\n                    outline: 0;\n                }\n\n                button:focus-visible + div {\n                    outline: 0;\n                    box-shadow: 0 0 0 0.25rem rgba(var(--bs-primary-rgb), 25%);\n                    border-color: rgba(var(--bs-primary-rgb), 50%);\n                }\n\n                div {\n                    display: inline-block;\n                    box-sizing: border-box;\n                    width: auto;\n                    max-width: 100%;\n                    border-color: transparent;\n                    border-radius: var(--bs-border-radius-sm, 3px);\n                    border: 1px solid transparent;\n                    transition: background 0.2s;\n                }\n\n                div:hover {\n                    background-color: var(--bs-secondary-bg-subtle);\n                }\n\n                :host([disabled]) div {\n                    background-color: transparent;\n                }\n            </style>\n            <button aria-label=\"Edit\"></button>\n            <div role=\"presentation\">\n                <slot></slot>\n            </div>\n        ";
    this.button = this.shadowRoot.querySelector("button");
    this.container = this.shadowRoot.querySelector("div");
    this.button.addEventListener("click", this.onEditRequested.bind(this));
    this.container.addEventListener("click", this.onReadViewClick.bind(this));
    this.container.addEventListener("mousedown", this.onMouseDown.bind(this));
    this.updateDisabledState();
  }
  updateDisabledState() {
    var _this$button, _this$container;
    const isDisabled = this.hasAttribute("disabled");
    (_this$button = this.button) === null || _this$button === void 0 || _this$button.setAttribute("aria-disabled", String(isDisabled));
    (_this$container = this.container) === null || _this$container === void 0 || _this$container.setAttribute("aria-disabled", String(isDisabled));
  }
  onEditRequested() {
    if (this.hasAttribute("disabled")) return;
    this.dispatchEvent(new CustomEvent("EditRequested", {
      bubbles: true,
      composed: true
    }));
  }
  onMouseDown(event) {
    if (this.hasAttribute("disabled")) return;
    this.startX = event.clientX;
    this.startY = event.clientY;
  }
  mouseHasMovedAfterMouseDown(event) {
    return Math.abs(this.startX - event.clientX) >= DRAG_THRESHOLD || Math.abs(this.startY - event.clientY) >= DRAG_THRESHOLD;
  }
  onReadViewClick(event) {
    if (this.hasAttribute("disabled")) return;
    const target = event.target;
    if (target.tagName.toLowerCase() !== "a" && !this.mouseHasMovedAfterMouseDown(event)) {
      event.preventDefault();
      this.onEditRequested();
    }
  }
}
customElements.define("bl-read-view", ReadView);