function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
window.blueWeb = window.blueWeb || {};
window.blueWeb.progress = {
  progress: 0
};
window.blueWeb.progress = _objectSpread(_objectSpread({}, window.blueWeb.progress), {}, {
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
      progressEl.className = "progress ".concat(positionClass, " rounded-0");
      progressEl.setAttribute("style", "--bs-progress-height: 0.25rem");
      progressEl.setAttribute("role", "progressbar");
      progressEl.setAttribute("aria-label", ariaLabel);
      progressEl.setAttribute("aria-valuemin", "0");
      progressEl.setAttribute("aria-valuemax", "100");
      progressEl.innerHTML = /*html*/"<div class=\"progress-bar progress-bar-striped progress-bar-animated\" style=\"width: 0%\"></div>";
      parentEl.appendChild(progressEl);
    }
    const progressBar = progressEl.querySelector(".progress-bar");
    if (!progressBar) return;
    window.blueWeb.progress.progress = 0;
    var interval = setInterval(function () {
      var _progressEl;
      // Simuliere einen natürlichen Anstieg
      var increment = Math.random() * 5; // Zufälliger Anstieg zwischen 0 und 5
      window.blueWeb.progress.progress += increment;
      window.blueWeb.progress.progress = Math.min(window.blueWeb.progress.progress, 100); // Fortschritt darf nicht über 100% gehen

      // Aktualisiere die Progressbar
      progressBar.style.width = window.blueWeb.progress.progress + "%";
      (_progressEl = progressEl) === null || _progressEl === void 0 || _progressEl.setAttribute("aria-valuenow", Math.round(window.blueWeb.progress.progress).toString());

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
});
export default window.blueWeb.progress;