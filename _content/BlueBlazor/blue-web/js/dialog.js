import { guid } from "./utils.js";
import { getPhrase } from "./shared.js";
// src/js/dialog.ts
async function ask(text, options = {}) {
	return await dialog("ask", text, options);
}
async function tell(text, options = {}) {
	await dialog("tell", text, options);
}
async function verify(text, options = {}) {
	return await dialog("verify", text, options) === true;
}
async function dialog(dialogType, text, options = {}) {
	let { title = getPhrase(dialogType === "verify" ? "Confirm" : dialogType === "ask" ? "Question" : "Message"), icon = void 0, switchPrimaryBtn = false, acceptBtnText = "OK", cancelBtnText = getPhrase("Cancel"), inputType = "text", defaultValue, id } = typeof options === "string" ? JSON.parse(options) : options;
	const _id = id || guid();
	const addToDom = () => {
		document.body.insertAdjacentHTML("beforeend", `<dialog class="blue-modal modal" id="${_id}" aria-labelledby="${_id}-label">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                ${icon ? `<div class="me-2">${icon}</div>` : ""}
                                <h1 class="modal-title fs-5" id="${_id}-label">${title}</h1>
                            </div>
                            <div class="modal-body">
                                ${dialogType === "ask" ? `<label for="${_id}-input" class="blue-label">${text}</label>
                                          <input
                                              type="${inputType}"
                                              ${defaultValue !== void 0 ? ` value="${defaultValue}"` : ""}
                                              id="${_id}-input"
                                              class="form-control"
                                          />` : text}
                            </div>
                            <div class="modal-footer">
                                ${dialogType === "verify" || dialogType === "ask" ? `<button
                                          type="button"
                                          class="btn ${switchPrimaryBtn ? "btn-primary" : "blue-btn-plain-primary"}"
                                          onclick="document.getElementById('${_id}').close()"
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
	if (!document.getElementById(_id)) addToDom();
	return new Promise((resolve) => {
		const modalEl = document.getElementById(_id);
		const removeFromDom = () => {
			const modalEl = document.getElementById(_id);
			if (modalEl) modalEl.remove();
		};
		const onHidden = () => {
			removeFromDom();
			resolve(false);
		};
		modalEl?.showModal();
		modalEl?.addEventListener("close", onHidden);
		modalEl?.querySelector(".modal-content > form")?.addEventListener("submit", (e) => {
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
export { ask, tell, verify };
