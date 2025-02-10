"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditView = void 0;
/**
 * EditView is a Custom Element that displays a edit view of its content and allows the user to confirm or dismiss the changes.
 */
class EditView extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    if (this.confirmTimeout) {
      clearTimeout(this.confirmTimeout);
    }
  }
  render() {
    const root = document.createElement("form");
    root.style.position = "relative";
    const children = Array.from(this.childNodes);
    this.appendChild(root);
    children.forEach(child => root.appendChild(child));
    root.addEventListener("submit", this.onSubmit.bind(this));
    root.addEventListener("keydown", this.onKeydown.bind(this));
    root.addEventListener("focusout", this.onFocusout.bind(this));
  }
  onSubmit(e) {
    e.preventDefault();
    this.confirm();
  }
  onKeydown(e) {
    if (e.key === "Esc" || e.key === "Escape") {
      this.dismiss();
    }
  }
  onFocusout(e) {
    if (!this.contains(e.relatedTarget)) {
      if (this.confirmTimeout) {
        clearTimeout(this.confirmTimeout);
      }
      this.confirmTimeout = setTimeout(() => {
        this.confirm();
        this.confirmTimeout = null;
      }, 500);
    }
  }
  confirm() {
    this.dispatchEvent(new CustomEvent("Confirm", {
      bubbles: true,
      composed: true
    }));
  }
  dismiss() {
    this.dispatchEvent(new CustomEvent("Dismiss", {
      bubbles: true,
      composed: true
    }));
  }
}
exports.EditView = EditView;
customElements.define("edit-view", EditView);