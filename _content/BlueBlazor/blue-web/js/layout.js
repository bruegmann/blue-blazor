import { init as mrInit, dispose as mrDispose } from "./modal-responsive.js";
const instances = new Map();
export function init(layoutEl) {
  if (!layoutEl) return;
  if (instances.has(layoutEl)) {
    dispose(layoutEl);
  }
  const toggleLayoutSideEl = layoutEl.querySelector('[data-blue-toggle="layout-side"]');
  const layoutSideEl = layoutEl.querySelector(".blue-layout-side");
  const modalEl = layoutEl.querySelector(".blue-layout-side > dialog");
  if (!toggleLayoutSideEl || !layoutSideEl || !modalEl) return;
  const controller = new AbortController();
  const instance = {
    toggleLayoutSideEl,
    layoutSideEl,
    modalEl,
    controller
  };
  instances.set(layoutEl, instance);
  const entry = localStorage.getItem("side-layout-shrink");
  const shrink = entry != null;
  if (shrink) {
    layoutSideEl.classList.add("d-lg-none", "w-lg-0");
    toggleLayoutSideEl.setAttribute("aria-expanded", "false");
  }
  toggleLayoutSideEl.addEventListener("click", () => toggleSidebar(layoutEl), {
    signal: controller.signal
  });
  mrInit(modalEl);
}
export function dispose(layoutEl) {
  const instance = instances.get(layoutEl);
  if (!instance) return;
  const {
    controller,
    modalEl
  } = instance;
  controller.abort();
  if (modalEl) mrDispose(modalEl);
  instances.delete(layoutEl);
}
function toggleSidebar(layoutEl) {
  const instance = instances.get(layoutEl);
  if (!instance) return;
  const {
    layoutSideEl,
    toggleLayoutSideEl
  } = instance;
  layoutSideEl.classList.toggle("d-lg-none");
  layoutSideEl.classList.toggle("w-lg-0");
  const expanded = !layoutSideEl.classList.contains("d-lg-none");
  toggleLayoutSideEl.setAttribute("aria-expanded", expanded);
  if (expanded) {
    localStorage.removeItem("side-layout-shrink");
  } else {
    localStorage.setItem("side-layout-shrink", "");
  }
}
if (typeof window !== "undefined") {
  window.blueWeb = window.blueWeb || {};
  window.blueWeb.layout = {
    init,
    dispose
  };
}