export const getStored = () => localStorage.getItem("blue-web-color-mode");
export const getPreferred = () => {
  const stored = getStored();
  if (stored) {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};
export const set = colorMode => {
  if (colorMode === "auto") {
    localStorage.removeItem("blue-web-color-mode");
  } else {
    localStorage.setItem("blue-web-color-mode", colorMode);
  }
  init();
};
export const init = () => {
  const colorMode = getPreferred();
  if (colorMode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-bs-theme", colorMode);
  }
};
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