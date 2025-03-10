"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ask = ask;
exports.tell = tell;
exports.verify = verify;
var _utils = require("./utils");
var _shared = require("./shared");
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
    document.body.insertAdjacentHTML("beforeend", /* HTML */"<dialog class=\"blue-modal modal\" id=\"".concat(id, "\" aria-labelledby=\"").concat(id, "-label\">\n                <div class=\"modal-dialog\">\n                    <div class=\"modal-content\">\n                        <form>\n                            <div class=\"modal-header\">\n                                ").concat(icon ? /* html */"<div class=\"me-2\">".concat(icon, "</div>") : "", "\n                                <h1 class=\"modal-title fs-5\" id=\"").concat(id, "-label\">").concat(title, "</h1>\n                                <button\n                                    type=\"button\"\n                                    class=\"btn-close\"\n                                    aria-label=\"").concat(cancelBtnText, "\"\n                                    onclick=\"document.getElementById('").concat(id, "').close()\"\n                                ></button>\n                            </div>\n                            <div class=\"modal-body\">\n                                ").concat(dialogType === "ask" ? /* HTML */"<label for=\"".concat(id, "-input\">").concat(text, "</label>\n                                          <input type=\"").concat(inputType, "\" id=\"").concat(id, "-input\" class=\"form-control mt-3\" />") : text, "\n                            </div>\n                            <div class=\"modal-footer\">\n                                ").concat(dialogType === "verify" || dialogType === "ask" ? /* HTML */"<button\n                                          type=\"button\"\n                                          class=\"btn ".concat(switchPrimaryBtn ? "btn-primary" : "blue-btn-plain-primary", "\"\n                                          onclick=\"document.getElementById('").concat(id, "').close()\"\n                                      >\n                                          ").concat(cancelBtnText, "\n                                      </button>") : "", "\n                                <button\n                                    type=\"submit\"\n                                    class=\"btn ").concat(switchPrimaryBtn ? "blue-btn-plain-primary" : "btn-primary", "\"\n                                >\n                                    ").concat(acceptBtnText, "\n                                </button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n\n                <form method=\"dialog\" class=\"blue-modal-backdrop\">\n                    <button>").concat(cancelBtnText, "</button>\n                </form>\n            </dialog>"));
  };
  if (!document.getElementById(id)) {
    addToDom();
  }
  return new Promise(resolve => {
    var _modalEl$querySelecto;
    const modalEl = document.getElementById(id);
    const removeFromDom = () => {
      const modalEl = document.getElementById(id);
      if (modalEl) {
        modalEl.remove();
      }
    };
    const onHidden = () => {
      removeFromDom();
      resolve(false);
    };
    modalEl === null || modalEl === void 0 || modalEl.showModal();
    modalEl === null || modalEl === void 0 || modalEl.addEventListener("close", onHidden);
    modalEl === null || modalEl === void 0 || (_modalEl$querySelecto = modalEl.querySelector(".modal-content > form")) === null || _modalEl$querySelecto === void 0 || _modalEl$querySelecto.addEventListener("submit", e => {
      e.preventDefault();
      if (dialogType === "ask") {
        modalEl.close();
        removeFromDom();
        resolve((modalEl === null || modalEl === void 0 ? void 0 : modalEl.querySelector("input")).value || "");
      }
      modalEl.close();
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