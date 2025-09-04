"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhance = enhance;
function enhance(el) {
  if (el && el.classList.contains("icon-link")) {
    const svgs = el.querySelectorAll("svg");
    svgs.forEach(svg => {
      svg.setAttribute("aria-hidden", "true");
      if (!svg.classList.contains("bi")) {
        svg.classList.add("bi");
      }
    });
  }
}
window.blueWeb = window.blueWeb || {};
window.blueWeb.button = {
  enhance
};