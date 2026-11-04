import { guid } from "./utils.js";
import { getPhrase } from "./shared.js";
export async function ask(text) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return await message("ask", text, options);
}
export async function tell(text) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  await message("tell", text, options);
}
export async function verify(text) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (await message("verify", text, options)) === true;
}
async function message(messageType, text) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let _ref = typeof options === "string" ? JSON.parse(options) : options,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? getPhrase(messageType === "verify" ? "Confirm" : messageType === "ask" ? "Question" : "Message") : _ref$title,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? undefined : _ref$icon,
    _ref$switchPrimaryBtn = _ref.switchPrimaryBtn,
    switchPrimaryBtn = _ref$switchPrimaryBtn === void 0 ? false : _ref$switchPrimaryBtn,
    _ref$acceptBtnText = _ref.acceptBtnText,
    acceptBtnText = _ref$acceptBtnText === void 0 ? "OK" : _ref$acceptBtnText,
    _ref$cancelBtnText = _ref.cancelBtnText,
    cancelBtnText = _ref$cancelBtnText === void 0 ? getPhrase("Cancel") : _ref$cancelBtnText,
    _ref$inputType = _ref.inputType,
    inputType = _ref$inputType === void 0 ? "text" : _ref$inputType,
    defaultValue = _ref.defaultValue,
    id = _ref.id;
  const _id = id || guid();
  const addToDom = () => {
    document.body.insertAdjacentHTML("beforeend", /* HTML */"<dialog class=\"blue-modal dialog\" id=\"".concat(_id, "\" aria-labelledby=\"").concat(_id, "-label\" closedby=\"any\">\n                <form>\n                    <div class=\"dialog-header\">\n                        ").concat(icon ? /* html */"<div class=\"me-3\">".concat(icon, "</div>") : "", "\n                        <h1 class=\"dialog-title fs-lg\" id=\"").concat(_id, "-label\">").concat(title, "</h1>\n                    </div>\n                    <div class=\"dialog-body\">\n                        ").concat(messageType === "ask" ? /* HTML */"<label for=\"".concat(_id, "-input\" class=\"blue-label\">").concat(text, "</label>\n                                      <input\n                                          type=\"").concat(inputType, "\"\n                                          ").concat(defaultValue !== undefined ? " value=\"".concat(defaultValue, "\"") : "", "\n                                          id=\"").concat(_id, "-input\"\n                                          class=\"form-control\"\n                                      />") : text, "\n                    </div>\n                    <div class=\"dialog-footer\">\n                        ").concat(messageType === "verify" || messageType === "ask" ? /* HTML */"<button\n                                      type=\"button\"\n                                      class=\"btn theme-primary ".concat(switchPrimaryBtn ? "btn-solid" : "btn-text", "\"\n                                      onclick=\"document.getElementById('").concat(_id, "').close()\"\n                                  >\n                                      ").concat(cancelBtnText, "\n                                  </button>") : "", "\n                        <button type=\"submit\" class=\"btn theme-primary ").concat(switchPrimaryBtn ? "btn-text" : "btn-solid", "\">\n                            ").concat(acceptBtnText, "\n                        </button>\n                    </div>\n                </form>\n            </dialog>"));
  };
  if (!document.getElementById(_id)) {
    addToDom();
  }
  const modalEl = document.getElementById(_id);
  if (!(modalEl instanceof HTMLDialogElement)) {
    throw new Error("Dialog \"".concat(_id, "\" must be a native dialog element."));
  }
  const form = modalEl.querySelector(":scope > form:not(.blue-modal-backdrop)");
  const input = modalEl.querySelector("input");
  if (!form || messageType === "ask" && !input) {
    throw new Error("Dialog \"".concat(_id, "\" is missing its form or prompt input."));
  }
  return new Promise(resolve => {
    const removeFromDom = () => {
      modalEl.remove();
    };
    const onHidden = () => {
      removeFromDom();
      resolve(false);
    };
    modalEl.addEventListener("close", onHidden, {
      once: true
    });
    modalEl.showModal();
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (messageType === "ask" && input) {
        resolve(input.value);
      } else {
        resolve(true);
      }
      modalEl.close();
      removeFromDom();
    });
  });
}
window.blueWeb = window.blueWeb || {};
window.blueWeb.message = {
  ask,
  tell,
  verify
};