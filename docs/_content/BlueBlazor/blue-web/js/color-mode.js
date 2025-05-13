"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = exports.init = exports.getStored = exports.getPreferred = void 0;
const getStored = () => localStorage.getItem("blue-web-color-mode");
exports.getStored = getStored;
const getPreferred = () => {
  const stored = getStored();
  if (stored) {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};
exports.getPreferred = getPreferred;
const set = colorMode => {
  if (colorMode === "auto") {
    localStorage.removeItem("blue-web-color-mode");
  } else {
    localStorage.setItem("blue-web-color-mode", colorMode);
  }
  init();
};
exports.set = set;
const init = () => {
  const colorMode = getPreferred();
  if (colorMode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-bs-theme", colorMode);
  }
};
exports.init = init;
const onMatchMediaChange = () => {
  localStorage.removeItem("blue-web-color-mode");
  init();
};
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", onMatchMediaChange);
init();
window.blueWeb = window.blueWeb || {};
window.blueWeb.colorMode = {
  getStored,
  getPreferred,
  set,
  init
};