"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideLayout = void 0;
class SideLayout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
  }
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }
  render() {
    if (!this.shadowRoot) return;
    const language = document.documentElement.lang || navigator.language;
    const toggleSidebarText = language.startsWith("de") ? "Seitenleiste umschalten" : "Toggle sidebar";
    this.shadowRoot.innerHTML = /* HTML */"\n            <style>\n                :host {\n                    --spacing: 0.25rem;\n                    --drawer-side-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n                        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n                        rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;\n                    --toggler-size: 3rem;\n                    --side-width: 18rem;\n                    --base-z-index: 0;\n                }\n\n                .root {\n                    position: relative;\n                    display: grid;\n                    height: 100%;\n                    grid-template-columns:\n                        0 var(--toggler-size) calc(var(--side-width) - var(--toggler-size))\n                        auto;\n                    grid-template-rows: var(--toggler-size) auto;\n                }\n\n                .hidden-input {\n                    position: fixed;\n                    --size: 0;\n                    height: var(--size);\n                    width: var(--size);\n                    appearance: none;\n                    opacity: 0;\n                }\n\n                .toggler {\n                    grid-column-start: 2;\n                }\n\n                @media (width < 64rem) {\n                    .toggler[for=\"layout-expand\"] {\n                        display: none;\n                    }\n                }\n\n                @media (width >= 64rem) {\n                    .toggler[for=\"layout-drawer\"] {\n                        display: none;\n                    }\n                }\n\n                .toggler svg {\n                    display: inline-block;\n                    --size: 1em;\n                    width: var(--size);\n                    height: var(--size);\n                    fill: currentColor;\n                    margin: calc((var(--toggler-size) - var(--size)) / 2);\n                }\n\n                .header {\n                    grid-column-start: 3;\n                    grid-column-end: 5;\n                }\n\n                .side {\n                    overflow: auto;\n                }\n\n                @media (width < 64rem) {\n                    .side {\n                        translate: -100% 0;\n                        height: 100%;\n                        transition: translate 0.2s ease;\n                    }\n\n                    #layout-drawer:checked ~ .side {\n                        position: fixed;\n                        top: 0;\n                        left: 0;\n                        z-index: calc(var(--base-z-index) + 1);\n                        translate: 0;\n                        width: calc(var(--spacing) * 80);\n                        box-shadow: var(--drawer-side-shadow);\n                    }\n                }\n\n                @media (width >= 64rem) {\n                    #layout-expand:checked ~ .side {\n                        grid-column-start: 2;\n                        grid-column-end: 4;\n                    }\n                }\n\n                .main {\n                    overflow: auto;\n                    grid-column-start: 2;\n                    grid-column-end: 5;\n                }\n\n                @media (width >= 64rem) {\n                    #layout-expand:checked ~ .main {\n                        grid-column-start: 4;\n                    }\n                }\n\n                .overlay {\n                    position: fixed;\n                    z-index: var(--base-z-index);\n                    inset: 0;\n                    display: none;\n                }\n\n                @media (width < 64rem) {\n                    #layout-drawer:checked ~ .overlay {\n                        display: block;\n                    }\n                }\n            </style>\n\n            <div class=\"root\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display: none;\">\n                    <symbol id=\"bi-list\" viewBox=\"0 0 16 16\">\n                        <path\n                            fill-rule=\"evenodd\"\n                            d=\"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5\"\n                        ></path>\n                    </symbol>\n                </svg>\n\n                <input\n                    id=\"layout-expand\"\n                    type=\"checkbox\"\n                    class=\"hidden-input\"\n                    ".concat(!localStorage.getItem("side-layout-shrink") ? "checked" : "", "\n                />\n                <input id=\"layout-drawer\" type=\"checkbox\" class=\"hidden-input\" />\n\n                <label class=\"toggler\" for=\"layout-expand\" title=\"").concat(toggleSidebarText, "\" role=\"button\">\n                    <slot name=\"expand-toggler\">\n                        <svg role=\"img\">\n                            <use xlink:href=\"#bi-list\"></use>\n                        </svg>\n                    </slot>\n                </label>\n                <label class=\"toggler\" for=\"layout-drawer\" title=\"").concat(toggleSidebarText, "\" role=\"button\">\n                    <slot name=\"drawer-toggler\">\n                        <svg role=\"img\">\n                            <use xlink:href=\"#bi-list\"></use>\n                        </svg>\n                    </slot>\n                </label>\n                <header class=\"header\"><slot name=\"header\"></slot></header>\n                <div class=\"side\"><slot name=\"side\"></slot></div>\n                <main class=\"main\"><slot></slot></main>\n                <label aria-label=\"Close sidebar\" for=\"layout-drawer\" class=\"overlay\"\n                    ><slot name=\"overlay\"></slot\n                ></label>\n            </div>\n        ");
  }
  addEventListeners() {
    if (!this.shadowRoot) return;
    const layoutExpandInput = this.shadowRoot.querySelector("#layout-expand");
    layoutExpandInput.addEventListener("change", this.handleLayoutExpandChange.bind(this));
  }
  handleLayoutExpandChange(event) {
    const input = event.target;
    if (input.checked) {
      localStorage.removeItem("side-layout-shrink");
    } else {
      localStorage.setItem("side-layout-shrink", "true");
    }
  }
}
exports.SideLayout = SideLayout;
customElements.define("side-layout", SideLayout);