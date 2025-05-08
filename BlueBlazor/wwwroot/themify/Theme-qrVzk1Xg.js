import { v as d, e as l } from "./version-6Oe8yWxl.js";
const c = ["spectrum", "express", "spectrum-two"], m = ["medium", "large", "medium-express", "large-express", "medium-spectrum-two", "large-spectrum-two"], u = ["light", "lightest", "dark", "darkest", "light-express", "lightest-express", "dark-express", "darkest-express", "light-spectrum-two", "dark-spectrum-two"], h = class r extends HTMLElement {
  constructor() {
    super(), this._dir = "", this._system = "spectrum", this._color = "", this._scale = "", this.trackedChildren = /* @__PURE__ */ new Set(), this._updateRequested = !1, this._contextConsumers = /* @__PURE__ */ new Map(), this.attachShadow({ mode: "open" });
    const t = document.importNode(r.template.content, !0);
    this.shadowRoot.appendChild(t), this.shouldAdoptStyles(), this.addEventListener("sp-query-theme", this.onQueryTheme), this.addEventListener("sp-language-context", this._handleContextPresence), this.updateComplete = this.__createDeferredPromise();
  }
  static get observedAttributes() {
    return ["color", "scale", "lang", "dir", "system", "theme"];
  }
  set dir(t) {
    if (t === this.dir)
      return;
    this.setAttribute("dir", t), this._dir = t;
    const e = t === "rtl" ? t : "ltr";
    this.trackedChildren.forEach((s) => {
      s.setAttribute("dir", e);
    });
  }
  get dir() {
    return this._dir;
  }
  attributeChangedCallback(t, e, s) {
    e !== s && (t === "color" ? this.color = s : t === "scale" ? this.scale = s : t === "lang" && s ? (this.lang = s, this._provideContext()) : t === "theme" ? this.theme = s : t === "system" ? this.system = s : t === "dir" && (this.dir = s));
  }
  requestUpdate() {
    window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.styleElement(this) : this.shouldAdoptStyles();
  }
  get system() {
    const t = r.themeFragmentsByKind.get("system"), { name: e } = t && t.get("default") || {};
    return this._system || e || "";
  }
  set system(t) {
    if (t === this._system)
      return;
    const e = t && c.includes(t) ? t : this.system;
    e !== this._system && (this._system = e, this.requestUpdate()), e ? this.setAttribute("system", e) : this.removeAttribute("system");
  }
  get theme() {
    return this.system || this.removeAttribute("system"), this.system;
  }
  set theme(t) {
    this.system = t, this.requestUpdate();
  }
  get color() {
    const t = r.themeFragmentsByKind.get("color"), { name: e } = t && t.get("default") || {};
    return this._color || e || "";
  }
  set color(t) {
    if (t === this._color)
      return;
    const e = t && u.includes(t) ? t : this.color;
    e !== this._color && (this._color = e, this.requestUpdate()), e ? this.setAttribute("color", e) : this.removeAttribute("color");
  }
  get scale() {
    const t = r.themeFragmentsByKind.get("scale"), { name: e } = t && t.get("default") || {};
    return this._scale || e || "";
  }
  set scale(t) {
    if (t === this._scale)
      return;
    const e = t && m.includes(t) ? t : this.scale;
    e !== this._scale && (this._scale = e, this.requestUpdate()), e ? this.setAttribute("scale", e) : this.removeAttribute("scale");
  }
  get styles() {
    const t = [...r.themeFragmentsByKind.keys()], e = (s, i, o) => {
      const n = o && o !== "theme" && o !== "system" && this.theme !== "spectrum" && this.system !== "spectrum" ? s.get(`${i}-${this.system}`) : s.get(i), a = i === "spectrum" || !o || this.hasAttribute(o);
      if (n && a)
        return n.styles;
    };
    return [...t.reduce((s, i) => {
      const o = r.themeFragmentsByKind.get(i);
      let n;
      if (i === "app" || i === "core")
        n = e(o, i);
      else {
        const { [i]: a } = this;
        n = e(o, a, i);
      }
      return n && s.push(n), s;
    }, [])];
  }
  static get template() {
    return this.templateElement || (this.templateElement = document.createElement("template"), this.templateElement.innerHTML = "<slot></slot>"), this.templateElement;
  }
  __createDeferredPromise() {
    return new Promise((t) => {
      this.__resolve = t;
    });
  }
  onQueryTheme(t) {
    if (t.defaultPrevented)
      return;
    t.preventDefault();
    const { detail: e } = t;
    e.color = this.color || void 0, e.scale = this.scale || void 0, e.lang = this.lang || document.documentElement.lang || navigator.language, e.theme = this.system || void 0, e.system = this.system || void 0;
  }
  connectedCallback() {
    if (this.shouldAdoptStyles(), window.ShadyCSS !== void 0 && window.ShadyCSS.styleElement(this), r.instances.add(this), !this.hasAttribute("dir")) {
      let t = this.assignedSlot || this.parentNode;
      for (; t !== document.documentElement && !(t instanceof r); )
        t = t.assignedSlot || t.parentNode || t.host;
      this.dir = t.dir === "rtl" ? t.dir : "ltr";
    }
  }
  disconnectedCallback() {
    r.instances.delete(this);
  }
  startManagingContentDirection(t) {
    this.trackedChildren.add(t);
  }
  stopManagingContentDirection(t) {
    this.trackedChildren.delete(t);
  }
  async shouldAdoptStyles() {
    this._updateRequested || (this.updateComplete = this.__createDeferredPromise(), this._updateRequested = !0, this._updateRequested = await !1, this.adoptStyles(), this.__resolve(!0));
  }
  adoptStyles() {
    const t = this.styles;
    if (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow && window.ShadyCSS.ScopingShim) {
      const e = [];
      for (const [s, i] of r.themeFragmentsByKind)
        for (const [o, { styles: n }] of i) {
          if (o === "default")
            continue;
          let a = n.cssText;
          r.defaultFragments.has(o) || (a = a.replace(":host", `:host([${s}='${o}'])`)), e.push(a);
        }
      window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e, this.localName), window.ShadyCSS.prepareTemplate(r.template, this.localName);
    } else if (l) {
      const e = [];
      for (const s of t)
        e.push(s.styleSheet);
      this.shadowRoot.adoptedStyleSheets = e;
    } else
      this.shadowRoot.querySelectorAll("style").forEach((e) => e.remove()), t.forEach((e) => {
        const s = document.createElement("style");
        s.textContent = e.cssText, this.shadowRoot.appendChild(s);
      });
  }
  static registerThemeFragment(t, e, s) {
    const i = r.themeFragmentsByKind.get(e) || /* @__PURE__ */ new Map();
    i.size === 0 && (r.themeFragmentsByKind.set(e, i), i.set("default", { name: t, styles: s }), r.defaultFragments.add(t)), i.set(t, { name: t, styles: s }), r.instances.forEach((o) => o.shouldAdoptStyles());
  }
  _provideContext() {
    this._contextConsumers.forEach(([t, e]) => t(this.lang, e));
  }
  _handleContextPresence(t) {
    t.stopPropagation();
    const e = t.composedPath()[0];
    if (this._contextConsumers.has(e))
      return;
    this._contextConsumers.set(e, [t.detail.callback, () => this._contextConsumers.delete(e)]);
    const [s, i] = this._contextConsumers.get(e) || [];
    s && i && s(this.lang || document.documentElement.lang || navigator.language, i);
  }
};
h.themeFragmentsByKind = /* @__PURE__ */ new Map(), h.defaultFragments = /* @__PURE__ */ new Set(["spectrum"]), h.instances = /* @__PURE__ */ new Set(), h.VERSION = d;
let g = h;
export {
  g as T
};
