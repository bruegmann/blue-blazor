"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
window.blueWeb = window.blueWeb || {};
window.blueWeb.progress = {
  progress: 0
};
window.blueWeb.progress = {
  ...window.blueWeb.progress,
  start: function () {
    let id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "blueWebProgress";
    let parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
    let ariaLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Loading data";
    let positionClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "fixed-top";
    const parentEl = typeof parent === "string" || parent instanceof String ? document.querySelector(parent.toString()) : parent;
    let progressEl = document.getElementById(id);
    if (!progressEl) {
      progressEl = document.createElement("div");
      progressEl.id = id;
      progressEl.className = `progress ${positionClass} rounded-0`;
      progressEl.setAttribute("style", "--bs-progress-height: 0.25rem");
      progressEl.setAttribute("role", "progressbar");
      progressEl.setAttribute("aria-label", ariaLabel);
      progressEl.setAttribute("aria-valuemin", "0");
      progressEl.setAttribute("aria-valuemax", "100");
      progressEl.innerHTML = /*html*/`<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%"></div>`;
      parentEl.appendChild(progressEl);
    }
    const progressBar = progressEl.querySelector(".progress-bar");
    if (!progressBar) return;
    window.blueWeb.progress.progress = 0;
    var interval = setInterval(function () {
      // Simuliere einen natürlichen Anstieg
      var increment = Math.random() * 5; // Zufälliger Anstieg zwischen 0 und 5
      window.blueWeb.progress.progress += increment;
      window.blueWeb.progress.progress = Math.min(window.blueWeb.progress.progress, 100); // Fortschritt darf nicht über 100% gehen

      // Aktualisiere die Progressbar
      progressBar.style.width = window.blueWeb.progress.progress + "%";
      progressEl?.setAttribute("aria-valuenow", Math.round(window.blueWeb.progress.progress).toString());

      // Stoppe das Intervall, wenn 100% erreicht sind
      if (window.blueWeb.progress.progress >= 100) {
        clearInterval(interval);
      }
    }, 200); // Update alle 200ms
  },
  stop: function () {
    let id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "blueWebProgress";
    const progressEl = document.getElementById(id);
    if (!progressEl) return;
    window.blueWeb.progress.progress = 100;
    setTimeout(() => {
      progressEl.remove();
    }, 500);
  }
};
var _default = exports.default = window.blueWeb.progress;