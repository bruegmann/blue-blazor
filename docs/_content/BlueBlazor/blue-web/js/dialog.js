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
    document.body.insertAdjacentHTML("beforeend", /* HTML */`<dialog class="blue-modal modal" id="${id}" aria-labelledby="${id}-label">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                ${icon ? /* html */`<div class="me-2">${icon}</div>` : ""}
                                <h1 class="modal-title fs-5" id="${id}-label">${title}</h1>
                                <button
                                    type="button"
                                    class="btn-close"
                                    aria-label="${cancelBtnText}"
                                    onclick="document.getElementById('${id}').close()"
                                ></button>
                            </div>
                            <div class="modal-body">
                                ${dialogType === "ask" ? /* HTML */`<label for="${id}-input">${text}</label>
                                          <input type="${inputType}" id="${id}-input" class="form-control mt-3" />` : text}
                            </div>
                            <div class="modal-footer">
                                ${dialogType === "verify" || dialogType === "ask" ? /* HTML */`<button
                                          type="button"
                                          class="btn ${switchPrimaryBtn ? "btn-primary" : "blue-btn-plain-primary"}"
                                          onclick="document.getElementById('${id}').close()"
                                      >
                                          ${cancelBtnText}
                                      </button>` : ""}
                                <button
                                    type="submit"
                                    class="btn ${switchPrimaryBtn ? "blue-btn-plain-primary" : "btn-primary"}"
                                >
                                    ${acceptBtnText}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <form method="dialog" class="blue-modal-backdrop">
                    <button>${cancelBtnText}</button>
                </form>
            </dialog>`);
  };
  if (!document.getElementById(id)) {
    addToDom();
  }
  return new Promise(resolve => {
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
    modalEl?.showModal();
    modalEl?.addEventListener("close", onHidden);
    modalEl?.querySelector(".modal-content > form")?.addEventListener("submit", e => {
      e.preventDefault();
      if (dialogType === "ask") {
        modalEl.close();
        removeFromDom();
        resolve((modalEl?.querySelector("input")).value || "");
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