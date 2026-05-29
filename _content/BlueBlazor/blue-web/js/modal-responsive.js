const instances = new Map();
export function init(modalEl) {
  if (!modalEl) return;
  if (instances.has(modalEl)) {
    dispose(modalEl);
  }
  const offcanvasEl = modalEl.querySelector(".offcanvas");
  if (!offcanvasEl) return;
  const controller = new AbortController();
  instances.set(modalEl, controller);
  window.addEventListener("popstate", () => modalEl === null || modalEl === void 0 ? void 0 : modalEl.close(), {
    signal: controller.signal
  });
  window.addEventListener("resize", () => {
    const offcanvasEl = modalEl.querySelector(".offcanvas");
    if (offcanvasEl && getComputedStyle(offcanvasEl).position !== "fixed") {
      modalEl === null || modalEl === void 0 || modalEl.close();
    }
  }, {
    signal: controller.signal
  });
  const originalPushState = history.pushState;
  history.pushState = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    originalPushState.apply(history, args);
    modalEl === null || modalEl === void 0 || modalEl.close();
  };
  const originalReplaceState = history.replaceState;
  history.replaceState = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    originalReplaceState.apply(history, args);
    modalEl === null || modalEl === void 0 || modalEl.close();
  };
}
export function dispose(modalEl) {
  const controller = instances.get(modalEl);
  if (!controller) return;
  controller.abort();
  instances.delete(modalEl);
}
if (typeof window !== "undefined") {
  window.blueWeb = window.blueWeb || {};
  window.blueWeb.modalResponsive = {
    init,
    dispose
  };
}