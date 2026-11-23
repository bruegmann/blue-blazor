// src/js/color-mode.ts
var getStored = () => localStorage.getItem("blue-web-color-mode");
var getPreferred = () => {
	const stored = getStored();
	if (stored) return stored;
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};
var set = (colorMode) => {
	if (colorMode === "auto") localStorage.removeItem("blue-web-color-mode");
	else localStorage.setItem("blue-web-color-mode", colorMode);
	init();
};
var init = () => {
	const colorMode = getPreferred();
	if (colorMode === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches) document.documentElement.setAttribute("data-bs-theme", "dark");
	else document.documentElement.setAttribute("data-bs-theme", colorMode);
};
var onMatchMediaChange = () => {
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
export { getPreferred, getStored, init, set };
