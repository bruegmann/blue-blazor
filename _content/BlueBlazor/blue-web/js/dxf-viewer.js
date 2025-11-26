function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { DxfViewer as DxfViewerLib } from "dxf-viewer";
export class DxfViewer extends HTMLElement {
  constructor() {
    super(...arguments);
    _defineProperty(this, "viewer", null);
    _defineProperty(this, "container", null);
    _defineProperty(this, "resizeObserver", null);
    _defineProperty(this, "THREE", null);
  }
  static get observedAttributes() {
    return ["src", "clear-color", "auto-resize"];
  }
  async connectedCallback() {
    if (!this.THREE) {
      this.THREE = await import("three");
    }
    this.render();
    this.loadDxf();
  }
  disconnectedCallback() {
    this.cleanup();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (name === "src") {
      this.loadDxf();
    }
  }
  render() {
    this.container = document.createElement("div");
    this.container.style.width = "100%";
    this.container.style.height = "100%";
    this.container.style.minHeight = "400px";
    this.appendChild(this.container);
    if (this.getAttribute("auto-resize") !== "false") {
      this.resizeObserver = new ResizeObserver(() => {
        if (this.viewer && this.container) {
          this.viewer.SetSize(this.container.clientWidth, this.container.clientHeight);
        }
      });
      this.resizeObserver.observe(this.container);
    }
  }
  async loadDxf() {
    if (!this.container) return;
    const src = this.getAttribute("src");
    if (!src) return;
    try {
      if (this.viewer) {
        this.viewer.Destroy();
        this.viewer = null;
      }
      this.container.innerHTML = "";
      this.viewer = new DxfViewerLib(this.container, {
        clearColor: this.parseClearColor(this.getAttribute("clear-color") || "#ffffff"),
        autoResize: this.getAttribute("auto-resize") !== "false",
        sceneOptions: {
          wireframeMesh: this.getAttribute("wireframe") === "true"
        }
      });
      const fontsAttr = this.getAttribute("fonts");
      const fonts = fontsAttr ? fontsAttr.split(",").map(f => f.trim()) : null;
      await this.viewer.Load({
        url: src,
        fonts: fonts
      });
      this.viewer.Subscribe("loaded", () => {
        this.dispatchEvent(new CustomEvent("dxf-loaded", {
          detail: {
            viewer: this.viewer
          }
        }));
      });
      this.viewer.Subscribe("message", event => {
        console.log("DXF Viewer message:", event.message);
      });
    } catch (error) {
      console.error("Error loading DXF file:", error);
      this.dispatchEvent(new CustomEvent("dxf-error", {
        detail: {
          error
        }
      }));
    }
  }
  parseClearColor(color) {
    if (!this.THREE) return null;
    if (!color) return new this.THREE.Color(0xffffff);
    return new this.THREE.Color(color);
  }
  cleanup() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    if (this.viewer) {
      this.viewer.Destroy();
      this.viewer = null;
    }
  }
  getViewer() {
    return this.viewer;
  }
  async reload() {
    await this.loadDxf();
  }
  showLayer(name, show) {
    if (this.viewer) {
      this.viewer.ShowLayer(name, show);
    }
  }
  fitView(minX, maxX, minY, maxY) {
    let padding = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    if (this.viewer) {
      this.viewer.FitView(minX, maxX, minY, maxY, padding);
    }
  }
  getLayers() {
    return this.viewer ? Array.from(this.viewer.GetLayers()) : [];
  }
  getBounds() {
    var _this$viewer;
    return ((_this$viewer = this.viewer) === null || _this$viewer === void 0 ? void 0 : _this$viewer.GetBounds()) || null;
  }
}
customElements.define("dxf-viewer", DxfViewer);