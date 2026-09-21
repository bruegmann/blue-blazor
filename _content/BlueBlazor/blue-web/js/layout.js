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
  const splitterEl = layoutEl.querySelector(".blue-layout-main > sp-split-view.blue-layout-splitter");
  const inspectorEl = layoutEl.querySelector(".blue-layout-inspector");
  if (!toggleLayoutSideEl || !layoutSideEl || !modalEl) return;
  const controller = new AbortController();
  const instance = {
    toggleLayoutSideEl,
    layoutSideEl,
    modalEl,
    splitterEl,
    inspectorEl,
    controller
  };
  instances.set(layoutEl, instance);
  const entry = localStorage.getItem("blueLayoutSideShrink");
  const shrink = entry != null;
  if (shrink) {
    layoutSideEl.classList.add("d-lg-none", "w-lg-0");
    toggleLayoutSideEl.setAttribute("aria-expanded", "false");
  }
  toggleLayoutSideEl.addEventListener("click", () => toggleSidebar(layoutEl), {
    signal: controller.signal
  });
  if (splitterEl && inspectorEl) {
    mrInit(inspectorEl);
    initInspector(layoutEl, instance);
  }
  mrInit(modalEl);
  layoutSideEl.classList.add("with-transition");
  return instance;
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
  if (!layoutSideEl || !toggleLayoutSideEl) return;
  layoutSideEl.classList.toggle("d-lg-none");
  layoutSideEl.classList.toggle("w-lg-0");
  const expanded = !layoutSideEl.classList.contains("d-lg-none");
  toggleLayoutSideEl.setAttribute("aria-expanded", expanded.toString());
  if (expanded) {
    localStorage.removeItem("blueLayoutSideShrink");
  } else {
    localStorage.setItem("blueLayoutSideShrink", "");
  }
}
function setSplitterPosition(splitterEl, value) {
  if (value < 0) splitterEl.splitterPos = 0;else if (splitterEl.maxPos && value > splitterEl.maxPos) splitterEl.splitterPos = splitterEl.maxPos;else splitterEl.splitterPos = value;
}
function enableSplitter(layoutEl, splitterEl) {
  const inspectorSizeEntry = localStorage.getItem("blueLayoutInspectorSize");
  const inspectorSize = inspectorSizeEntry ? Number.parseInt(inspectorSizeEntry, 10) : NaN;
  setSplitterPosition(splitterEl, splitterEl.viewSize - (Number.isFinite(inspectorSize) ? inspectorSize : 244));
  splitterEl.resizable = true;
  splitterEl.dataset.blueInspectorSize = (splitterEl.viewSize - splitterEl.splitterPos).toString();
  layoutEl.dataset.blueSplitterEnabled = "";
}
function disableSplitter(layoutEl, splitterEl) {
  setSplitterPosition(splitterEl, splitterEl.maxPos || splitterEl.viewSize);
  splitterEl.resizable = false;
  delete layoutEl.dataset.blueSplitterEnabled;
}
function initInspector(layoutEl, instance) {
  const {
    splitterEl,
    inspectorEl,
    controller
  } = instance;
  if (!splitterEl || !inspectorEl || !controller) return;
  const enabled = localStorage.getItem("blueLayoutInspectorEnabled") != null;
  if (enabled && getComputedStyle(inspectorEl).position !== "fixed") {
    enableSplitter(layoutEl, splitterEl);
  } else {
    disableSplitter(layoutEl, splitterEl);
  }
  updateInspectorState(layoutEl);
  window.addEventListener("resize", () => {
    if (splitterEl) {
      if (inspectorEl && getComputedStyle(inspectorEl).display === "none" || !splitterEl.resizable) {
        disableSplitter(layoutEl, splitterEl);
        updateInspectorState(layoutEl);
      } else if (splitterEl.resizable && splitterEl.dataset.blueInspectorSize) {
        setSplitterPosition(splitterEl, splitterEl.viewSize - parseInt(splitterEl.dataset.blueInspectorSize));
        updateInspectorState(layoutEl);
      }
    }
  }, {
    signal: controller.signal
  });
  splitterEl.addEventListener("change", e => {
    const splitterEl = e.target;
    let secondPaneSize = splitterEl.viewSize - splitterEl.splitterPos;
    if (secondPaneSize) {
      secondPaneSize = Math.round(secondPaneSize);
      splitterEl.dataset.blueInspectorSize = secondPaneSize.toString();
      localStorage.setItem("blueLayoutInspectorSize", secondPaneSize.toString());
    }
  }, {
    signal: controller.signal
  });
  inspectorEl.addEventListener("close", () => {
    updateInspectorState(layoutEl);
  }, {
    signal: controller.signal
  });
}
function updateInspectorState(layoutTarget) {
  const layoutEl = typeof layoutTarget === "string" ? document.querySelector(layoutTarget) : layoutTarget;
  if (!layoutEl) return;
  const instance = instances.get(layoutEl);
  if (!(instance !== null && instance !== void 0 && instance.splitterEl) || !instance.inspectorEl) return;
  const {
    splitterEl,
    inspectorEl
  } = instance;
  const isOpen = getComputedStyle(inspectorEl).position === "fixed" ? inspectorEl.open : splitterEl.resizable;
  const previousState = layoutEl.dataset.blueInspectorOpen;
  if (isOpen) layoutEl.dataset.blueInspectorOpen = "";else delete layoutEl.dataset.blueInspectorOpen;
  if (previousState !== layoutEl.dataset.blueInspectorOpen) {
    layoutEl.dispatchEvent(new Event("blue-inspector-change"));
  }
}
export function openInspector(layoutTarget) {
  let showCommand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "show-modal";
  const layoutEl = typeof layoutTarget === "string" ? document.querySelector(layoutTarget) : layoutTarget;
  if (!layoutEl) return;
  const instance = instances.get(layoutEl);
  if (!(instance !== null && instance !== void 0 && instance.splitterEl) || !instance.inspectorEl) return;
  const {
    splitterEl,
    inspectorEl
  } = instance;
  if (getComputedStyle(inspectorEl).position === "fixed") {
    // Is active as dialog
    if (showCommand === "show") {
      inspectorEl.show();
    } else {
      inspectorEl.showModal();
    }
  } else {
    // Is active as split view
    enableSplitter(layoutEl, splitterEl);
    localStorage.setItem("blueLayoutInspectorEnabled", "");
  }
  updateInspectorState(layoutEl);
}
export function closeInspector(layoutTarget) {
  const layoutEl = typeof layoutTarget === "string" ? document.querySelector(layoutTarget) : layoutTarget;
  if (!layoutEl) return;
  const instance = instances.get(layoutEl);
  if (!(instance !== null && instance !== void 0 && instance.splitterEl) || !instance.inspectorEl) return;
  const {
    splitterEl,
    inspectorEl
  } = instance;
  if (getComputedStyle(inspectorEl).position === "fixed") {
    // Is active as dialog
    inspectorEl.close();
  } else {
    // Is active as split view
    disableSplitter(layoutEl, splitterEl);
    localStorage.removeItem("blueLayoutInspectorEnabled");
  }
  updateInspectorState(layoutEl);
}
export function toggleInspector(layoutTarget) {
  let showCommand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "show-modal";
  const layoutEl = typeof layoutTarget === "string" ? document.querySelector(layoutTarget) : layoutTarget;
  if (!layoutEl) return;
  const instance = instances.get(layoutEl);
  if (!(instance !== null && instance !== void 0 && instance.splitterEl) || !instance.inspectorEl) return;
  const {
    splitterEl,
    inspectorEl
  } = instance;
  const isOpen = getComputedStyle(inspectorEl).position === "fixed" ? inspectorEl.open : splitterEl.resizable;
  if (isOpen) {
    closeInspector(layoutTarget);
  } else {
    openInspector(layoutTarget, showCommand);
  }
}
if (typeof window !== "undefined") {
  window.blueWeb = window.blueWeb || {};
  window.blueWeb.layout = {
    init,
    dispose,
    instances,
    toggleInspector,
    openInspector,
    closeInspector
  };
}