(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./utils", "./shared", "bootstrap"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./utils"), require("./shared"), require("bootstrap"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.utils, global.shared, global.bootstrap);
    global.modal = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _utils, _shared, bootstrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.verify = verify;
  bootstrap = _interopRequireWildcard(bootstrap);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  async function verify(text, options) {
    const id = (0, _utils.guid)();
    const addToDom = () => {
      document.body.insertAdjacentHTML("beforeend", /* html */"        <div\nclass=\"modal fade\"\nid=\"".concat(id, "\"\ntabindex=\"-1\"\naria-labelledby=\"").concat(id, "-label\"\naria-hidden=\"true\"\n>\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h1 class=\"modal-title fs-5\" id=\"").concat(id, "-label\">\n                ").concat((options === null || options === void 0 ? void 0 : options.title) || (0, _shared.getPhrase)("Message"), "\n            </h1>\n            <button\n                type=\"button\"\n                class=\"btn-close\"\n                data-bs-dismiss=\"modal\"\n                aria-label=\"Close\"\n            ></button>\n        </div>\n        <div class=\"modal-body\">").concat(text, "</div>\n        <div class=\"modal-footer\">\n            <button\n                type=\"button\"\n                class=\"btn blue-btn-plain-primary\"\n                data-bs-dismiss=\"modal\"\n            >\n                Cancel\n            </button>\n            <button\n                type=\"button\"\n                class=\"btn btn-primary\"\n                data-role=\"confirm\"\n            >\n                Confirm\n            </button>\n        </div>\n    </div>\n</div>\n</div>"));
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
      modalEl === null || modalEl === void 0 || (_modalEl$querySelecto = modalEl.querySelector("[data-role=confirm]")) === null || _modalEl$querySelecto === void 0 || _modalEl$querySelecto.addEventListener("click", () => {
        modal.hide();
        removeFromDom();
        resolve(true);
      });
    });
  }
});