"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ask = ask;
exports.tell = tell;
exports.verify = verify;
var _utils = require("./utils");
var _shared = require("./shared");
var bootstrap = _interopRequireWildcard(require("bootstrap"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
async function ask(text) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return await dialog("ask", text, options);
}
async function tell(text) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  await dialog("tell", text, options);
}
async function verify(text) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (await dialog("verify", text, options)) === true;
}
async function dialog(dialogType, text) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let {
    title = (0, _shared.getPhrase)("Message"),
    icon = undefined,
    switchPrimaryBtn = false,
    acceptBtnText = dialogType === "verify" ? (0, _shared.getPhrase)("Yes") : "OK",
    cancelBtnText = dialogType === "verify" ? (0, _shared.getPhrase)("No") : (0, _shared.getPhrase)("Cancel"),
    inputType = "text"
  } = options;
  const id = (0, _utils.guid)();
  const addToDom = () => {
    document.body.insertAdjacentHTML("beforeend", /* html */"        <div\nclass=\"modal fade\"\nid=\"".concat(id, "\"\ntabindex=\"-1\"\naria-labelledby=\"").concat(id, "-label\"\naria-hidden=\"true\"\n>\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <form>\n                <div class=\"modal-header\">\n                    ").concat(icon ? /* html */"<div class=\"me-2\">".concat(icon, "</div>") : "", "\n                    <h1 class=\"modal-title fs-5\" id=\"").concat(id, "-label\">\n                        ").concat(title, "\n                    </h1>\n                    <button\n                        type=\"button\"\n                        class=\"btn-close\"\n                        data-bs-dismiss=\"modal\"\n                        aria-label=\"Close\"\n                    ></button>\n                </div>\n                <div class=\"modal-body\">\n                    ").concat(dialogType === "ask" ? /* html */"<label for=\"".concat(id, "-input\">").concat(text, "</label>\n                        <input type=\"").concat(inputType, "\" id=\"").concat(id, "-input\" class=\"form-control mt-3\" />") : text, "\n                </div>\n                <div class=\"modal-footer\">\n                    ").concat(dialogType === "verify" || dialogType === "ask" ? /* html */"<button\n                        type=\"button\"\n                        class=\"btn ".concat(switchPrimaryBtn ? "btn-primary" : "blue-btn-plain-primary", "\"\n                        data-bs-dismiss=\"modal\"\n                    >\n                        ").concat(cancelBtnText, "\n                    </button>") : "", "\n                    <button\n                        type=\"submit\"\n                        class=\"btn ").concat(switchPrimaryBtn ? "blue-btn-plain-primary" : "btn-primary", "\"\n                    >\n                        ").concat(acceptBtnText, "\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"));
  };
  if (!document.getElementById(id)) {
    addToDom();
  }
  return new Promise(resolve => {
    var _modalEl$querySelecto;
    const modalEl = document.getElementById(id);
    const modal = new bootstrap.Modal(modalEl);
    const removeFromDom = () => {
      const modalEl = document.getElementById(id);
      if (modalEl) {
        modalEl.removeEventListener("hidden.bs.modal", onHidden);
        modalEl.remove();
      }
    };
    const onHidden = () => {
      removeFromDom();
      resolve(false);
    };
    modal.show();
    modalEl === null || modalEl === void 0 || modalEl.addEventListener("hidden.bs.modal", onHidden);
    modalEl === null || modalEl === void 0 || (_modalEl$querySelecto = modalEl.querySelector("form")) === null || _modalEl$querySelecto === void 0 || _modalEl$querySelecto.addEventListener("submit", e => {
      e.preventDefault();
      if (dialogType === "ask") {
        modal.hide();
        removeFromDom();
        resolve((modalEl === null || modalEl === void 0 ? void 0 : modalEl.querySelector("input")).value || "");
      }
      modal.hide();
      removeFromDom();
      resolve(true);
    });
  });
}
window.blueWeb = window.blueWeb || {};
window.blueWeb.dialog = {
  ask,
  tell,
  verify
};