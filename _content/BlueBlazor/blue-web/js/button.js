class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = /* html*/"<button part=\"base\" type=\"button\">Hello world</button>";
  }
}
if (!customElements.get("bl-button")) {
  customElements.define("bl-button", Button);
}
export { Button };
export default Button;