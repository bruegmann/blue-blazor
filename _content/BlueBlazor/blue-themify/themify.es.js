var N2 = Object.defineProperty;
var H2 = (B, e, t) => e in B ? N2(B, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : B[e] = t;
var ye = (B, e, t) => H2(B, typeof e != "symbol" ? e + "" : e, t);
function De() {
}
function Gr(B, e) {
  for (const t in e) B[t] = e[t];
  return (
    /** @type {T & S} */
    B
  );
}
function rC(B) {
  return B();
}
function o0() {
  return /* @__PURE__ */ Object.create(null);
}
function Ge(B) {
  B.forEach(rC);
}
function BC(B) {
  return typeof B == "function";
}
function wt(B, e) {
  return B != B ? e == e : B !== e || B && typeof B == "object" || typeof B == "function";
}
let Cr;
function K2(B, e) {
  return B === e ? !0 : (Cr || (Cr = document.createElement("a")), Cr.href = e, B === Cr.href);
}
function J2(B) {
  return Object.keys(B).length === 0;
}
function Qr(B, e, t, r) {
  if (B) {
    const s = sC(B, e, t, r);
    return B[0](s);
  }
}
function sC(B, e, t, r) {
  return B[1] && r ? Gr(t.ctx.slice(), B[1](r(e))) : t.ctx;
}
function Yr(B, e, t, r) {
  if (B[2] && r) {
    const s = B[2](r(t));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const i = [], n = Math.max(e.dirty.length, s.length);
      for (let a = 0; a < n; a += 1)
        i[a] = e.dirty[a] | s[a];
      return i;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function Xr(B, e, t, r, s, i) {
  if (s) {
    const n = sC(e, t, r, i);
    B.p(n, s);
  }
}
function Zr(B) {
  if (B.ctx.length > 32) {
    const e = [], t = B.ctx.length / 32;
    for (let r = 0; r < t; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function T2(B) {
  const e = {};
  for (const t in B) t[0] !== "$" && (e[t] = B[t]);
  return e;
}
function l0(B, e) {
  const t = {};
  e = new Set(e);
  for (const r in B) !e.has(r) && r[0] !== "$" && (t[r] = B[r]);
  return t;
}
function I(B, e) {
  B.appendChild(e);
}
function yt(B, e, t) {
  const r = z2(B);
  if (!r.getElementById(e)) {
    const s = L("style");
    s.id = e, s.textContent = t, q2(r, s);
  }
}
function z2(B) {
  if (!B) return document;
  const e = B.getRootNode ? B.getRootNode() : B.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : B.ownerDocument;
}
function q2(B, e) {
  return I(
    /** @type {Document} */
    B.head || B,
    e
  ), e.sheet;
}
function ee(B, e, t) {
  B.insertBefore(e, t || null);
}
function $(B) {
  B.parentNode && B.parentNode.removeChild(B);
}
function iC(B, e) {
  for (let t = 0; t < B.length; t += 1)
    B[t] && B[t].d(e);
}
function L(B) {
  return document.createElement(B);
}
function Gt(B) {
  return document.createElementNS("http://www.w3.org/2000/svg", B);
}
function je(B) {
  return document.createTextNode(B);
}
function Q() {
  return je(" ");
}
function U2() {
  return je("");
}
function W(B, e, t, r) {
  return B.addEventListener(e, t, r), () => B.removeEventListener(e, t, r);
}
function m(B, e, t) {
  t == null ? B.removeAttribute(e) : B.getAttribute(e) !== t && B.setAttribute(e, t);
}
const V2 = ["width", "height"];
function u0(B, e) {
  const t = Object.getOwnPropertyDescriptors(B.__proto__);
  for (const r in e)
    e[r] == null ? B.removeAttribute(r) : r === "style" ? B.style.cssText = e[r] : r === "__value" ? B.value = B[r] = e[r] : t[r] && t[r].set && V2.indexOf(r) === -1 ? B[r] = e[r] : m(B, r, e[r]);
}
function Er(B, e, t) {
  const r = e.toLowerCase();
  r in B ? B[r] = typeof B[r] == "boolean" && t === "" ? !0 : t : e in B ? B[e] = typeof B[e] == "boolean" && t === "" ? !0 : t : m(B, e, t);
}
function dt(B) {
  return B === "" ? null : +B;
}
function W2(B) {
  return Array.from(B.childNodes);
}
function L1(B, e) {
  e = "" + e, B.data !== e && (B.data = /** @type {string} */
  e);
}
function qe(B, e) {
  B.value = e ?? "";
}
function Ht(B, e, t, r) {
  t == null ? B.style.removeProperty(e) : B.style.setProperty(e, t, "");
}
function Lr(B, e, t) {
  B.classList.toggle(e, !!t);
}
function Q2(B, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(B, { detail: e, bubbles: t, cancelable: r });
}
function Y2(B) {
  const e = {};
  return B.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let Kt;
function Lt(B) {
  Kt = B;
}
function N1() {
  if (!Kt) throw new Error("Function called outside component initialization");
  return Kt;
}
function X2(B) {
  N1().$$.on_mount.push(B);
}
function Z2(B) {
  N1().$$.after_update.push(B);
}
function H1() {
  const B = N1();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const s = B.$$.callbacks[e];
    if (s) {
      const i = Q2(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return s.slice().forEach((n) => {
        n.call(B, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function nC(B, e) {
  const t = B.$$.callbacks[e.type];
  t && t.slice().forEach((r) => r.call(this, e));
}
const ft = [], he = [];
let pt = [];
const C1 = [], $2 = /* @__PURE__ */ Promise.resolve();
let a1 = !1;
function _2() {
  a1 || (a1 = !0, $2.then(Z));
}
function o1(B) {
  pt.push(B);
}
function Re(B) {
  C1.push(B);
}
const dB = /* @__PURE__ */ new Set();
let nt = 0;
function Z() {
  if (nt !== 0)
    return;
  const B = Kt;
  do {
    try {
      for (; nt < ft.length; ) {
        const e = ft[nt];
        nt++, Lt(e), eo(e.$$);
      }
    } catch (e) {
      throw ft.length = 0, nt = 0, e;
    }
    for (Lt(null), ft.length = 0, nt = 0; he.length; ) he.pop()();
    for (let e = 0; e < pt.length; e += 1) {
      const t = pt[e];
      dB.has(t) || (dB.add(t), t());
    }
    pt.length = 0;
  } while (ft.length);
  for (; C1.length; )
    C1.pop()();
  a1 = !1, dB.clear(), Lt(B);
}
function eo(B) {
  if (B.fragment !== null) {
    B.update(), Ge(B.before_update);
    const e = B.dirty;
    B.dirty = [-1], B.fragment && B.fragment.p(B.ctx, e), B.after_update.forEach(o1);
  }
}
function to(B) {
  const e = [], t = [];
  pt.forEach((r) => B.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), pt = e;
}
const Sr = /* @__PURE__ */ new Set();
let et;
function Rt() {
  et = {
    r: 0,
    c: [],
    p: et
    // parent group
  };
}
function Mt() {
  et.r || Ge(et.c), et = et.p;
}
function Y(B, e) {
  B && B.i && (Sr.delete(B), B.i(e));
}
function re(B, e, t, r) {
  if (B && B.o) {
    if (Sr.has(B)) return;
    Sr.add(B), et.c.push(() => {
      Sr.delete(B), r && (t && B.d(1), r());
    }), B.o(e);
  } else r && r();
}
function l1(B) {
  return (B == null ? void 0 : B.length) !== void 0 ? B : Array.from(B);
}
function ro(B, e) {
  const t = {}, r = {}, s = { $$scope: 1 };
  let i = B.length;
  for (; i--; ) {
    const n = B[i], a = e[i];
    if (a) {
      for (const C in n)
        C in a || (r[C] = 1);
      for (const C in a)
        s[C] || (t[C] = a[C], s[C] = 1);
      B[i] = a;
    } else
      for (const C in n)
        s[C] = 1;
  }
  for (const n in r)
    n in t || (t[n] = void 0);
  return t;
}
function Me(B, e, t) {
  const r = B.$$.props[e];
  r !== void 0 && (B.$$.bound[r] = t, t(B.$$.ctx[r]));
}
function Se(B) {
  B && B.c();
}
function xe(B, e, t) {
  const { fragment: r, after_update: s } = B.$$;
  r && r.m(e, t), o1(() => {
    const i = B.$$.on_mount.map(rC).filter(BC);
    B.$$.on_destroy ? B.$$.on_destroy.push(...i) : Ge(i), B.$$.on_mount = [];
  }), s.forEach(o1);
}
function ke(B, e) {
  const t = B.$$;
  t.fragment !== null && (to(t.after_update), Ge(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Bo(B, e) {
  B.$$.dirty[0] === -1 && (ft.push(B), _2(), B.$$.dirty.fill(0)), B.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function xt(B, e, t, r, s, i, n = null, a = [-1]) {
  const C = Kt;
  Lt(B);
  const o = B.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: De,
    not_equal: s,
    bound: o0(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (C ? C.$$.context : [])),
    // everything else
    callbacks: o0(),
    dirty: a,
    skip_bound: !1,
    root: e.target || C.$$.root
  };
  n && n(o.root);
  let l = !1;
  if (o.ctx = t ? t(B, e.props || {}, (u, f, ...c) => {
    const h = c.length ? c[0] : f;
    return o.ctx && s(o.ctx[u], o.ctx[u] = h) && (!o.skip_bound && o.bound[u] && o.bound[u](h), l && Bo(B, u)), f;
  }) : [], o.update(), l = !0, Ge(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const u = W2(e.target);
      o.fragment && o.fragment.l(u), u.forEach($);
    } else
      o.fragment && o.fragment.c();
    e.intro && Y(B.$$.fragment), xe(B, e.target, e.anchor), Z();
  }
  Lt(C);
}
let CC;
typeof HTMLElement == "function" && (CC = class extends HTMLElement {
  constructor(e, t, r) {
    super();
    /** The Svelte component constructor */
    ye(this, "$$ctor");
    /** Slots */
    ye(this, "$$s");
    /** The Svelte component instance */
    ye(this, "$$c");
    /** Whether or not the custom element is connected */
    ye(this, "$$cn", !1);
    /** Component props data */
    ye(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ye(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ye(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    ye(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    ye(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, r && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const s = this.$$c.$on(e, t);
      this.$$l_u.set(t, s);
    }
    super.addEventListener(e, t, r);
  }
  removeEventListener(e, t, r) {
    if (super.removeEventListener(e, t, r), this.$$c) {
      const s = this.$$l_u.get(t);
      s && (s(), this.$$l_u.delete(t));
    }
    if (this.$$l[e]) {
      const s = this.$$l[e].indexOf(t);
      s >= 0 && this.$$l[e].splice(s, 1);
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(n) {
        return () => {
          let a;
          return {
            c: function() {
              a = L("slot"), n !== "default" && m(a, "name", n);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(l, u) {
              ee(l, a, u);
            },
            d: function(l) {
              l && $(a);
            }
          };
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, s = Y2(this);
      for (const n of this.$$s)
        n in s && (r[n] = [t(n)]);
      for (const n of this.attributes) {
        const a = this.$$g_p(n.name);
        a in this.$$d || (this.$$d[a] = Ir(a, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$scope: {
            ctx: []
          }
        }
      });
      const i = () => {
        this.$$r = !0;
        for (const n in this.$$p_d)
          if (this.$$d[n] = this.$$c.$$.ctx[this.$$c.$$.props[n]], this.$$p_d[n].reflect) {
            const a = Ir(
              n,
              this.$$d[n],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[n].attribute || n) : this.setAttribute(this.$$p_d[n].attribute || n, a);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(i), i();
      for (const n in this.$$l)
        for (const a of this.$$l[n]) {
          const C = this.$$c.$on(n, a);
          this.$$l_u.set(a, C);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, r) {
    var s;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ir(e, r, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Ir(B, e, t, r) {
  var i;
  const s = (i = t[B]) == null ? void 0 : i.type;
  if (e = s === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !t[B])
    return e;
  if (r === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function kt(B, e, t, r, s, i) {
  let n = class extends CC {
    constructor() {
      super(B, t, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((a) => {
    Object.defineProperty(n.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(C) {
        var o;
        C = Ir(a, C, e), this.$$d[a] = C, (o = this.$$c) == null || o.$set({ [a]: C });
      }
    });
  }), r.forEach((a) => {
    Object.defineProperty(n.prototype, a, {
      get() {
        var C;
        return (C = this.$$c) == null ? void 0 : C[a];
      }
    });
  }), B.element = /** @type {any} */
  n, n;
}
class At {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ye(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ye(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ke(this, 1), this.$destroy = De;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!BC(t))
      return De;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !J2(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const so = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(so);
function io(B) {
  yt(B, "svelte-1f2xcfy", `.slider-wrapper.svelte-1f2xcfy{border-radius:1.5rem;corner-shape:squircle;padding:0.5rem}.slider-container.svelte-1f2xcfy{display:flex;gap:1rem;align-items:center;justify-content:center;background:rgba(255, 255, 255, 0.5);padding:0.25rem 0.5rem;border-radius:1rem;corner-shape:squircle}.slider-group.svelte-1f2xcfy{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:0.5rem;& > input[type="range"] {\r
			grid-column: span 2;\r
		}}label.svelte-1f2xcfy{color:#fff;font-weight:500;text-shadow:0 1px 3px rgba(0, 0, 0, 0.4)}input[type="range"].svelte-1f2xcfy{-webkit-appearance:none;width:100%;height:12px;border-radius:0.5rem;outline:none;cursor:pointer}.value-input.svelte-1f2xcfy{text-align:center;border:none;border-radius:0.5rem;padding:0.125rem;font-size:0.9rem;color:#333;background:rgba(255, 255, 255, 0.6);box-shadow:inset 0 0 3px rgba(0, 0, 0, 0.2);&[readonly] {\r
			color: #fff;\r
			text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\r
			background: rgba(255, 255, 255, 0.2);\r
			--outline-opacity: 10%;\r
		};&:focus {\r
			outline: 2px solid hsla(var(--primary-hs) var(--l-50) / var(--outline-opacity, 100%));\r
		}}.hue-slider.svelte-1f2xcfy{background:linear-gradient(\r
			to right,\r
			hsl(0, 100%, 50%),\r
			hsl(60, 100%, 50%),\r
			hsl(120, 100%, 50%),\r
			hsl(180, 100%, 50%),\r
			hsl(240, 100%, 50%),\r
			hsl(300, 100%, 50%),\r
			hsl(360, 100%, 50%)\r
		)}input[type="range"].svelte-1f2xcfy:disabled{opacity:0.5}input[type="range"].svelte-1f2xcfy::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:18px;height:18px;border-radius:50%;background:#fff;border:2px solid #0003;box-shadow:0 0 3px #0005;transition:transform 0.1s}input[type="range"].svelte-1f2xcfy::-webkit-slider-thumb:hover{transform:scale(1.2)}input[type="range"].svelte-1f2xcfy::-webkit-slider-thumb:active{border-color:hsl(var(--primary-hs) var(--l-50))}input[type="range"].svelte-1f2xcfy::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#fff;border:2px solid #0003;box-shadow:0 0 3px #0005;transition:transform 0.1s}input[type="range"].svelte-1f2xcfy::-moz-range-thumb:hover{transform:scale(1.2)}input[type="range"].svelte-1f2xcfy::-moz-range-thumb:hover{border-color:hsl(var(--primary-hs) var(--l-50))}`);
}
function no(B) {
  let e, t, r, s, i, n, a, C, o, l, u, f, c, h, b, d, y, x, g, G;
  return {
    c() {
      e = L("div"), t = L("div"), r = L("div"), s = L("label"), i = je("Hue"), n = Q(), a = L("input"), C = Q(), o = L("input"), l = Q(), u = L("div"), f = L("label"), c = je("Saturation"), h = Q(), b = L("input"), d = Q(), y = L("input"), m(s, "for", `${/*idPrefix*/
      B[5]}-hue`), m(s, "class", "svelte-1f2xcfy"), m(a, "id", `${/*idPrefix*/
      B[5]}-hue`), m(a, "class", "value-input svelte-1f2xcfy"), m(a, "type", "number"), a.readOnly = /*readonly*/
      B[2], m(a, "min", "0"), m(a, "max", "360"), m(o, "class", "hue-slider svelte-1f2xcfy"), m(o, "type", "range"), o.disabled = /*readonly*/
      B[2], m(o, "min", "0"), m(o, "max", "360"), m(r, "class", "slider-group svelte-1f2xcfy"), m(f, "for", `${/*idPrefix*/
      B[5]}-saturation`), m(f, "class", "svelte-1f2xcfy"), m(b, "id", `${/*idPrefix*/
      B[5]}-saturation`), m(b, "class", "value-input svelte-1f2xcfy"), m(b, "type", "number"), b.readOnly = /*readonly*/
      B[2], m(b, "min", "0"), m(b, "max", "100"), m(y, "type", "range"), y.disabled = /*readonly*/
      B[2], m(y, "min", "0"), m(y, "max", "100"), Ht(
        y,
        "background",
        /*saturationGradient*/
        B[3]
      ), m(y, "class", "svelte-1f2xcfy"), m(u, "class", "slider-group svelte-1f2xcfy"), m(t, "class", "slider-container svelte-1f2xcfy"), m(e, "class", "slider-wrapper svelte-1f2xcfy"), m(e, "style", x = `background: ${/*color*/
      B[4]}`);
    },
    m(O, T) {
      ee(O, e, T), I(e, t), I(t, r), I(r, s), I(s, i), I(r, n), I(r, a), qe(
        a,
        /*h*/
        B[0]
      ), I(r, C), I(r, o), qe(
        o,
        /*h*/
        B[0]
      ), I(t, l), I(t, u), I(u, f), I(f, c), I(u, h), I(u, b), qe(
        b,
        /*s*/
        B[1]
      ), I(u, d), I(u, y), qe(
        y,
        /*s*/
        B[1]
      ), g || (G = [
        W(
          a,
          "input",
          /*input0_input_handler*/
          B[7]
        ),
        W(
          a,
          "change",
          /*triggerChange*/
          B[6]
        ),
        W(
          o,
          "change",
          /*input1_change_input_handler*/
          B[8]
        ),
        W(
          o,
          "input",
          /*input1_change_input_handler*/
          B[8]
        ),
        W(
          o,
          "change",
          /*triggerChange*/
          B[6]
        ),
        W(
          b,
          "input",
          /*input2_input_handler*/
          B[9]
        ),
        W(
          b,
          "change",
          /*triggerChange*/
          B[6]
        ),
        W(
          y,
          "change",
          /*input3_change_input_handler*/
          B[10]
        ),
        W(
          y,
          "input",
          /*input3_change_input_handler*/
          B[10]
        ),
        W(
          y,
          "change",
          /*triggerChange*/
          B[6]
        )
      ], g = !0);
    },
    p(O, [T]) {
      T & /*readonly*/
      4 && (a.readOnly = /*readonly*/
      O[2]), T & /*h*/
      1 && dt(a.value) !== /*h*/
      O[0] && qe(
        a,
        /*h*/
        O[0]
      ), T & /*readonly*/
      4 && (o.disabled = /*readonly*/
      O[2]), T & /*h*/
      1 && qe(
        o,
        /*h*/
        O[0]
      ), T & /*readonly*/
      4 && (b.readOnly = /*readonly*/
      O[2]), T & /*s*/
      2 && dt(b.value) !== /*s*/
      O[1] && qe(
        b,
        /*s*/
        O[1]
      ), T & /*readonly*/
      4 && (y.disabled = /*readonly*/
      O[2]), T & /*saturationGradient*/
      8 && Ht(
        y,
        "background",
        /*saturationGradient*/
        O[3]
      ), T & /*s*/
      2 && qe(
        y,
        /*s*/
        O[1]
      ), T & /*color*/
      16 && x !== (x = `background: ${/*color*/
      O[4]}`) && m(e, "style", x);
    },
    i: De,
    o: De,
    d(O) {
      O && $(e), g = !1, Ge(G);
    }
  };
}
function Co(B, e, t) {
  let r, s;
  const i = H1();
  let { h: n } = e, { s: a } = e, { readonly: C = !1 } = e;
  const o = self.crypto.randomUUID();
  function l() {
    i("change", { h: n, s: a });
  }
  function u() {
    n = dt(this.value), t(0, n);
  }
  function f() {
    n = dt(this.value), t(0, n);
  }
  function c() {
    a = dt(this.value), t(1, a);
  }
  function h() {
    a = dt(this.value), t(1, a);
  }
  return B.$$set = (b) => {
    "h" in b && t(0, n = b.h), "s" in b && t(1, a = b.s), "readonly" in b && t(2, C = b.readonly);
  }, B.$$.update = () => {
    B.$$.dirty & /*h, s*/
    3 && t(4, r = `hsl(${n}, ${a}%, 50%)`), B.$$.dirty & /*h*/
    1 && t(3, s = `
    linear-gradient(to right,
      hsl(${n}, 0%, 50%),
      hsl(${n}, 100%, 50%)
    )
  `);
  }, [
    n,
    a,
    C,
    s,
    r,
    o,
    l,
    u,
    f,
    c,
    h
  ];
}
class jr extends At {
  constructor(e) {
    super(), xt(this, e, Co, no, wt, { h: 0, s: 1, readonly: 2 }, io);
  }
  get h() {
    return this.$$.ctx[0];
  }
  set h(e) {
    this.$$set({ h: e }), Z();
  }
  get s() {
    return this.$$.ctx[1];
  }
  set s(e) {
    this.$$set({ s: e }), Z();
  }
  get readonly() {
    return this.$$.ctx[2];
  }
  set readonly(e) {
    this.$$set({ readonly: e }), Z();
  }
}
kt(jr, { h: {}, s: {}, readonly: { type: "Boolean" } }, [], [], !0);
typeof window < "u" && window.localStorage.getItem("accessToken");
const f0 = ["none", "minimal", "default", "maximal"];
var tC;
typeof navigator < "u" && /(Mac|iPhone|iPod|iPad)/i.test(((tC = navigator.userAgentData) == null ? void 0 : tC.platform) || navigator.platform);
function aC(B) {
  if (B.__esModule) return B;
  var e = B.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(B).forEach(function(r) {
    var s = Object.getOwnPropertyDescriptor(B, r);
    Object.defineProperty(t, r, s.get ? s : {
      enumerable: !0,
      get: function() {
        return B[r];
      }
    });
  }), t;
}
var oC = { exports: {} }, lC = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, uC = { exports: {} }, ao = function(e) {
  return !e || typeof e == "string" ? !1 : e instanceof Array || Array.isArray(e) || e.length >= 0 && (e.splice instanceof Function || Object.getOwnPropertyDescriptor(e, e.length - 1) && e.constructor.name !== "String");
}, oo = ao, lo = Array.prototype.concat, uo = Array.prototype.slice, c0 = uC.exports = function(e) {
  for (var t = [], r = 0, s = e.length; r < s; r++) {
    var i = e[r];
    oo(i) ? t = lo.call(t, uo.call(i)) : t.push(i);
  }
  return t;
};
c0.wrap = function(B) {
  return function() {
    return B(c0(arguments));
  };
};
var fo = uC.exports, Nt = lC, Wt = fo, fC = Object.hasOwnProperty, cC = /* @__PURE__ */ Object.create(null);
for (var pB in Nt)
  fC.call(Nt, pB) && (cC[Nt[pB]] = pB);
var ge = oC.exports = {
  to: {},
  get: {}
};
ge.get = function(B) {
  var e = B.substring(0, 3).toLowerCase(), t, r;
  switch (e) {
    case "hsl":
      t = ge.get.hsl(B), r = "hsl";
      break;
    case "hwb":
      t = ge.get.hwb(B), r = "hwb";
      break;
    default:
      t = ge.get.rgb(B), r = "rgb";
      break;
  }
  return t ? { model: r, value: t } : null;
};
ge.get.rgb = function(B) {
  if (!B)
    return null;
  var e = /^#([a-f0-9]{3,4})$/i, t = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i, r = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, s = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/, i = /^(\w+)$/, n = [0, 0, 0, 1], a, C, o;
  if (a = B.match(t)) {
    for (o = a[2], a = a[1], C = 0; C < 3; C++) {
      var l = C * 2;
      n[C] = parseInt(a.slice(l, l + 2), 16);
    }
    o && (n[3] = parseInt(o, 16) / 255);
  } else if (a = B.match(e)) {
    for (a = a[1], o = a[3], C = 0; C < 3; C++)
      n[C] = parseInt(a[C] + a[C], 16);
    o && (n[3] = parseInt(o + o, 16) / 255);
  } else if (a = B.match(r)) {
    for (C = 0; C < 3; C++)
      n[C] = parseInt(a[C + 1], 0);
    a[4] && (a[5] ? n[3] = parseFloat(a[4]) * 0.01 : n[3] = parseFloat(a[4]));
  } else if (a = B.match(s)) {
    for (C = 0; C < 3; C++)
      n[C] = Math.round(parseFloat(a[C + 1]) * 2.55);
    a[4] && (a[5] ? n[3] = parseFloat(a[4]) * 0.01 : n[3] = parseFloat(a[4]));
  } else return (a = B.match(i)) ? a[1] === "transparent" ? [0, 0, 0, 0] : fC.call(Nt, a[1]) ? (n = Nt[a[1]], n[3] = 1, n) : null : null;
  for (C = 0; C < 3; C++)
    n[C] = Ye(n[C], 0, 255);
  return n[3] = Ye(n[3], 0, 1), n;
};
ge.get.hsl = function(B) {
  if (!B)
    return null;
  var e = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, t = B.match(e);
  if (t) {
    var r = parseFloat(t[4]), s = (parseFloat(t[1]) % 360 + 360) % 360, i = Ye(parseFloat(t[2]), 0, 100), n = Ye(parseFloat(t[3]), 0, 100), a = Ye(isNaN(r) ? 1 : r, 0, 1);
    return [s, i, n, a];
  }
  return null;
};
ge.get.hwb = function(B) {
  if (!B)
    return null;
  var e = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/, t = B.match(e);
  if (t) {
    var r = parseFloat(t[4]), s = (parseFloat(t[1]) % 360 + 360) % 360, i = Ye(parseFloat(t[2]), 0, 100), n = Ye(parseFloat(t[3]), 0, 100), a = Ye(isNaN(r) ? 1 : r, 0, 1);
    return [s, i, n, a];
  }
  return null;
};
ge.to.hex = function() {
  var B = Wt(arguments);
  return "#" + ar(B[0]) + ar(B[1]) + ar(B[2]) + (B[3] < 1 ? ar(Math.round(B[3] * 255)) : "");
};
ge.to.rgb = function() {
  var B = Wt(arguments);
  return B.length < 4 || B[3] === 1 ? "rgb(" + Math.round(B[0]) + ", " + Math.round(B[1]) + ", " + Math.round(B[2]) + ")" : "rgba(" + Math.round(B[0]) + ", " + Math.round(B[1]) + ", " + Math.round(B[2]) + ", " + B[3] + ")";
};
ge.to.rgb.percent = function() {
  var B = Wt(arguments), e = Math.round(B[0] / 255 * 100), t = Math.round(B[1] / 255 * 100), r = Math.round(B[2] / 255 * 100);
  return B.length < 4 || B[3] === 1 ? "rgb(" + e + "%, " + t + "%, " + r + "%)" : "rgba(" + e + "%, " + t + "%, " + r + "%, " + B[3] + ")";
};
ge.to.hsl = function() {
  var B = Wt(arguments);
  return B.length < 4 || B[3] === 1 ? "hsl(" + B[0] + ", " + B[1] + "%, " + B[2] + "%)" : "hsla(" + B[0] + ", " + B[1] + "%, " + B[2] + "%, " + B[3] + ")";
};
ge.to.hwb = function() {
  var B = Wt(arguments), e = "";
  return B.length >= 4 && B[3] !== 1 && (e = ", " + B[3]), "hwb(" + B[0] + ", " + B[1] + "%, " + B[2] + "%" + e + ")";
};
ge.to.keyword = function(B) {
  return cC[B.slice(0, 3)];
};
function Ye(B, e, t) {
  return Math.min(Math.max(e, B), t);
}
function ar(B) {
  var e = Math.round(B).toString(16).toUpperCase();
  return e.length < 2 ? "0" + e : e;
}
var co = oC.exports;
const Jt = lC, DC = {};
for (const B of Object.keys(Jt))
  DC[Jt[B]] = B;
const M = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] }
};
var dC = M;
for (const B of Object.keys(M)) {
  if (!("channels" in M[B]))
    throw new Error("missing channels property: " + B);
  if (!("labels" in M[B]))
    throw new Error("missing channel labels property: " + B);
  if (M[B].labels.length !== M[B].channels)
    throw new Error("channel and label counts mismatch: " + B);
  const { channels: e, labels: t } = M[B];
  delete M[B].channels, delete M[B].labels, Object.defineProperty(M[B], "channels", { value: e }), Object.defineProperty(M[B], "labels", { value: t });
}
M.rgb.hsl = function(B) {
  const e = B[0] / 255, t = B[1] / 255, r = B[2] / 255, s = Math.min(e, t, r), i = Math.max(e, t, r), n = i - s;
  let a, C;
  i === s ? a = 0 : e === i ? a = (t - r) / n : t === i ? a = 2 + (r - e) / n : r === i && (a = 4 + (e - t) / n), a = Math.min(a * 60, 360), a < 0 && (a += 360);
  const o = (s + i) / 2;
  return i === s ? C = 0 : o <= 0.5 ? C = n / (i + s) : C = n / (2 - i - s), [a, C * 100, o * 100];
};
M.rgb.hsv = function(B) {
  let e, t, r, s, i;
  const n = B[0] / 255, a = B[1] / 255, C = B[2] / 255, o = Math.max(n, a, C), l = o - Math.min(n, a, C), u = function(f) {
    return (o - f) / 6 / l + 1 / 2;
  };
  return l === 0 ? (s = 0, i = 0) : (i = l / o, e = u(n), t = u(a), r = u(C), n === o ? s = r - t : a === o ? s = 1 / 3 + e - r : C === o && (s = 2 / 3 + t - e), s < 0 ? s += 1 : s > 1 && (s -= 1)), [
    s * 360,
    i * 100,
    o * 100
  ];
};
M.rgb.hwb = function(B) {
  const e = B[0], t = B[1];
  let r = B[2];
  const s = M.rgb.hsl(B)[0], i = 1 / 255 * Math.min(e, Math.min(t, r));
  return r = 1 - 1 / 255 * Math.max(e, Math.max(t, r)), [s, i * 100, r * 100];
};
M.rgb.cmyk = function(B) {
  const e = B[0] / 255, t = B[1] / 255, r = B[2] / 255, s = Math.min(1 - e, 1 - t, 1 - r), i = (1 - e - s) / (1 - s) || 0, n = (1 - t - s) / (1 - s) || 0, a = (1 - r - s) / (1 - s) || 0;
  return [i * 100, n * 100, a * 100, s * 100];
};
function Do(B, e) {
  return (B[0] - e[0]) ** 2 + (B[1] - e[1]) ** 2 + (B[2] - e[2]) ** 2;
}
M.rgb.keyword = function(B) {
  const e = DC[B];
  if (e)
    return e;
  let t = 1 / 0, r;
  for (const s of Object.keys(Jt)) {
    const i = Jt[s], n = Do(B, i);
    n < t && (t = n, r = s);
  }
  return r;
};
M.keyword.rgb = function(B) {
  return Jt[B];
};
M.rgb.xyz = function(B) {
  let e = B[0] / 255, t = B[1] / 255, r = B[2] / 255;
  e = e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92, t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92, r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
  const s = e * 0.4124 + t * 0.3576 + r * 0.1805, i = e * 0.2126 + t * 0.7152 + r * 0.0722, n = e * 0.0193 + t * 0.1192 + r * 0.9505;
  return [s * 100, i * 100, n * 100];
};
M.rgb.lab = function(B) {
  const e = M.rgb.xyz(B);
  let t = e[0], r = e[1], s = e[2];
  t /= 95.047, r /= 100, s /= 108.883, t = t > 8856e-6 ? t ** (1 / 3) : 7.787 * t + 16 / 116, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116, s = s > 8856e-6 ? s ** (1 / 3) : 7.787 * s + 16 / 116;
  const i = 116 * r - 16, n = 500 * (t - r), a = 200 * (r - s);
  return [i, n, a];
};
M.hsl.rgb = function(B) {
  const e = B[0] / 360, t = B[1] / 100, r = B[2] / 100;
  let s, i, n;
  if (t === 0)
    return n = r * 255, [n, n, n];
  r < 0.5 ? s = r * (1 + t) : s = r + t - r * t;
  const a = 2 * r - s, C = [0, 0, 0];
  for (let o = 0; o < 3; o++)
    i = e + 1 / 3 * -(o - 1), i < 0 && i++, i > 1 && i--, 6 * i < 1 ? n = a + (s - a) * 6 * i : 2 * i < 1 ? n = s : 3 * i < 2 ? n = a + (s - a) * (2 / 3 - i) * 6 : n = a, C[o] = n * 255;
  return C;
};
M.hsl.hsv = function(B) {
  const e = B[0];
  let t = B[1] / 100, r = B[2] / 100, s = t;
  const i = Math.max(r, 0.01);
  r *= 2, t *= r <= 1 ? r : 2 - r, s *= i <= 1 ? i : 2 - i;
  const n = (r + t) / 2, a = r === 0 ? 2 * s / (i + s) : 2 * t / (r + t);
  return [e, a * 100, n * 100];
};
M.hsv.rgb = function(B) {
  const e = B[0] / 60, t = B[1] / 100;
  let r = B[2] / 100;
  const s = Math.floor(e) % 6, i = e - Math.floor(e), n = 255 * r * (1 - t), a = 255 * r * (1 - t * i), C = 255 * r * (1 - t * (1 - i));
  switch (r *= 255, s) {
    case 0:
      return [r, C, n];
    case 1:
      return [a, r, n];
    case 2:
      return [n, r, C];
    case 3:
      return [n, a, r];
    case 4:
      return [C, n, r];
    case 5:
      return [r, n, a];
  }
};
M.hsv.hsl = function(B) {
  const e = B[0], t = B[1] / 100, r = B[2] / 100, s = Math.max(r, 0.01);
  let i, n;
  n = (2 - t) * r;
  const a = (2 - t) * s;
  return i = t * s, i /= a <= 1 ? a : 2 - a, i = i || 0, n /= 2, [e, i * 100, n * 100];
};
M.hwb.rgb = function(B) {
  const e = B[0] / 360;
  let t = B[1] / 100, r = B[2] / 100;
  const s = t + r;
  let i;
  s > 1 && (t /= s, r /= s);
  const n = Math.floor(6 * e), a = 1 - r;
  i = 6 * e - n, n & 1 && (i = 1 - i);
  const C = t + i * (a - t);
  let o, l, u;
  switch (n) {
    default:
    case 6:
    case 0:
      o = a, l = C, u = t;
      break;
    case 1:
      o = C, l = a, u = t;
      break;
    case 2:
      o = t, l = a, u = C;
      break;
    case 3:
      o = t, l = C, u = a;
      break;
    case 4:
      o = C, l = t, u = a;
      break;
    case 5:
      o = a, l = t, u = C;
      break;
  }
  return [o * 255, l * 255, u * 255];
};
M.cmyk.rgb = function(B) {
  const e = B[0] / 100, t = B[1] / 100, r = B[2] / 100, s = B[3] / 100, i = 1 - Math.min(1, e * (1 - s) + s), n = 1 - Math.min(1, t * (1 - s) + s), a = 1 - Math.min(1, r * (1 - s) + s);
  return [i * 255, n * 255, a * 255];
};
M.xyz.rgb = function(B) {
  const e = B[0] / 100, t = B[1] / 100, r = B[2] / 100;
  let s, i, n;
  return s = e * 3.2406 + t * -1.5372 + r * -0.4986, i = e * -0.9689 + t * 1.8758 + r * 0.0415, n = e * 0.0557 + t * -0.204 + r * 1.057, s = s > 31308e-7 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92, i = i > 31308e-7 ? 1.055 * i ** (1 / 2.4) - 0.055 : i * 12.92, n = n > 31308e-7 ? 1.055 * n ** (1 / 2.4) - 0.055 : n * 12.92, s = Math.min(Math.max(0, s), 1), i = Math.min(Math.max(0, i), 1), n = Math.min(Math.max(0, n), 1), [s * 255, i * 255, n * 255];
};
M.xyz.lab = function(B) {
  let e = B[0], t = B[1], r = B[2];
  e /= 95.047, t /= 100, r /= 108.883, e = e > 8856e-6 ? e ** (1 / 3) : 7.787 * e + 16 / 116, t = t > 8856e-6 ? t ** (1 / 3) : 7.787 * t + 16 / 116, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116;
  const s = 116 * t - 16, i = 500 * (e - t), n = 200 * (t - r);
  return [s, i, n];
};
M.lab.xyz = function(B) {
  const e = B[0], t = B[1], r = B[2];
  let s, i, n;
  i = (e + 16) / 116, s = t / 500 + i, n = i - r / 200;
  const a = i ** 3, C = s ** 3, o = n ** 3;
  return i = a > 8856e-6 ? a : (i - 16 / 116) / 7.787, s = C > 8856e-6 ? C : (s - 16 / 116) / 7.787, n = o > 8856e-6 ? o : (n - 16 / 116) / 7.787, s *= 95.047, i *= 100, n *= 108.883, [s, i, n];
};
M.lab.lch = function(B) {
  const e = B[0], t = B[1], r = B[2];
  let s;
  s = Math.atan2(r, t) * 360 / 2 / Math.PI, s < 0 && (s += 360);
  const n = Math.sqrt(t * t + r * r);
  return [e, n, s];
};
M.lch.lab = function(B) {
  const e = B[0], t = B[1], s = B[2] / 360 * 2 * Math.PI, i = t * Math.cos(s), n = t * Math.sin(s);
  return [e, i, n];
};
M.rgb.ansi16 = function(B, e = null) {
  const [t, r, s] = B;
  let i = e === null ? M.rgb.hsv(B)[2] : e;
  if (i = Math.round(i / 50), i === 0)
    return 30;
  let n = 30 + (Math.round(s / 255) << 2 | Math.round(r / 255) << 1 | Math.round(t / 255));
  return i === 2 && (n += 60), n;
};
M.hsv.ansi16 = function(B) {
  return M.rgb.ansi16(M.hsv.rgb(B), B[2]);
};
M.rgb.ansi256 = function(B) {
  const e = B[0], t = B[1], r = B[2];
  return e === t && t === r ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(t / 255 * 5) + Math.round(r / 255 * 5);
};
M.ansi16.rgb = function(B) {
  let e = B % 10;
  if (e === 0 || e === 7)
    return B > 50 && (e += 3.5), e = e / 10.5 * 255, [e, e, e];
  const t = (~~(B > 50) + 1) * 0.5, r = (e & 1) * t * 255, s = (e >> 1 & 1) * t * 255, i = (e >> 2 & 1) * t * 255;
  return [r, s, i];
};
M.ansi256.rgb = function(B) {
  if (B >= 232) {
    const i = (B - 232) * 10 + 8;
    return [i, i, i];
  }
  B -= 16;
  let e;
  const t = Math.floor(B / 36) / 5 * 255, r = Math.floor((e = B % 36) / 6) / 5 * 255, s = e % 6 / 5 * 255;
  return [t, r, s];
};
M.rgb.hex = function(B) {
  const t = (((Math.round(B[0]) & 255) << 16) + ((Math.round(B[1]) & 255) << 8) + (Math.round(B[2]) & 255)).toString(16).toUpperCase();
  return "000000".substring(t.length) + t;
};
M.hex.rgb = function(B) {
  const e = B.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!e)
    return [0, 0, 0];
  let t = e[0];
  e[0].length === 3 && (t = t.split("").map((a) => a + a).join(""));
  const r = parseInt(t, 16), s = r >> 16 & 255, i = r >> 8 & 255, n = r & 255;
  return [s, i, n];
};
M.rgb.hcg = function(B) {
  const e = B[0] / 255, t = B[1] / 255, r = B[2] / 255, s = Math.max(Math.max(e, t), r), i = Math.min(Math.min(e, t), r), n = s - i;
  let a, C;
  return n < 1 ? a = i / (1 - n) : a = 0, n <= 0 ? C = 0 : s === e ? C = (t - r) / n % 6 : s === t ? C = 2 + (r - e) / n : C = 4 + (e - t) / n, C /= 6, C %= 1, [C * 360, n * 100, a * 100];
};
M.hsl.hcg = function(B) {
  const e = B[1] / 100, t = B[2] / 100, r = t < 0.5 ? 2 * e * t : 2 * e * (1 - t);
  let s = 0;
  return r < 1 && (s = (t - 0.5 * r) / (1 - r)), [B[0], r * 100, s * 100];
};
M.hsv.hcg = function(B) {
  const e = B[1] / 100, t = B[2] / 100, r = e * t;
  let s = 0;
  return r < 1 && (s = (t - r) / (1 - r)), [B[0], r * 100, s * 100];
};
M.hcg.rgb = function(B) {
  const e = B[0] / 360, t = B[1] / 100, r = B[2] / 100;
  if (t === 0)
    return [r * 255, r * 255, r * 255];
  const s = [0, 0, 0], i = e % 1 * 6, n = i % 1, a = 1 - n;
  let C = 0;
  switch (Math.floor(i)) {
    case 0:
      s[0] = 1, s[1] = n, s[2] = 0;
      break;
    case 1:
      s[0] = a, s[1] = 1, s[2] = 0;
      break;
    case 2:
      s[0] = 0, s[1] = 1, s[2] = n;
      break;
    case 3:
      s[0] = 0, s[1] = a, s[2] = 1;
      break;
    case 4:
      s[0] = n, s[1] = 0, s[2] = 1;
      break;
    default:
      s[0] = 1, s[1] = 0, s[2] = a;
  }
  return C = (1 - t) * r, [
    (t * s[0] + C) * 255,
    (t * s[1] + C) * 255,
    (t * s[2] + C) * 255
  ];
};
M.hcg.hsv = function(B) {
  const e = B[1] / 100, t = B[2] / 100, r = e + t * (1 - e);
  let s = 0;
  return r > 0 && (s = e / r), [B[0], s * 100, r * 100];
};
M.hcg.hsl = function(B) {
  const e = B[1] / 100, r = B[2] / 100 * (1 - e) + 0.5 * e;
  let s = 0;
  return r > 0 && r < 0.5 ? s = e / (2 * r) : r >= 0.5 && r < 1 && (s = e / (2 * (1 - r))), [B[0], s * 100, r * 100];
};
M.hcg.hwb = function(B) {
  const e = B[1] / 100, t = B[2] / 100, r = e + t * (1 - e);
  return [B[0], (r - e) * 100, (1 - r) * 100];
};
M.hwb.hcg = function(B) {
  const e = B[1] / 100, r = 1 - B[2] / 100, s = r - e;
  let i = 0;
  return s < 1 && (i = (r - s) / (1 - s)), [B[0], s * 100, i * 100];
};
M.apple.rgb = function(B) {
  return [B[0] / 65535 * 255, B[1] / 65535 * 255, B[2] / 65535 * 255];
};
M.rgb.apple = function(B) {
  return [B[0] / 255 * 65535, B[1] / 255 * 65535, B[2] / 255 * 65535];
};
M.gray.rgb = function(B) {
  return [B[0] / 100 * 255, B[0] / 100 * 255, B[0] / 100 * 255];
};
M.gray.hsl = function(B) {
  return [0, 0, B[0]];
};
M.gray.hsv = M.gray.hsl;
M.gray.hwb = function(B) {
  return [0, 100, B[0]];
};
M.gray.cmyk = function(B) {
  return [0, 0, 0, B[0]];
};
M.gray.lab = function(B) {
  return [B[0], 0, 0];
};
M.gray.hex = function(B) {
  const e = Math.round(B[0] / 100 * 255) & 255, r = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
  return "000000".substring(r.length) + r;
};
M.rgb.gray = function(B) {
  return [(B[0] + B[1] + B[2]) / 3 / 255 * 100];
};
const Nr = dC;
function po() {
  const B = {}, e = Object.keys(Nr);
  for (let t = e.length, r = 0; r < t; r++)
    B[e[r]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  return B;
}
function ho(B) {
  const e = po(), t = [B];
  for (e[B].distance = 0; t.length; ) {
    const r = t.pop(), s = Object.keys(Nr[r]);
    for (let i = s.length, n = 0; n < i; n++) {
      const a = s[n], C = e[a];
      C.distance === -1 && (C.distance = e[r].distance + 1, C.parent = r, t.unshift(a));
    }
  }
  return e;
}
function mo(B, e) {
  return function(t) {
    return e(B(t));
  };
}
function bo(B, e) {
  const t = [e[B].parent, B];
  let r = Nr[e[B].parent][B], s = e[B].parent;
  for (; e[s].parent; )
    t.unshift(e[s].parent), r = mo(Nr[e[s].parent][s], r), s = e[s].parent;
  return r.conversion = t, r;
}
var go = function(B) {
  const e = ho(B), t = {}, r = Object.keys(e);
  for (let s = r.length, i = 0; i < s; i++) {
    const n = r[i];
    e[n].parent !== null && (t[n] = bo(n, e));
  }
  return t;
};
const u1 = dC, vo = go, ct = {}, wo = Object.keys(u1);
function yo(B) {
  const e = function(...t) {
    const r = t[0];
    return r == null ? r : (r.length > 1 && (t = r), B(t));
  };
  return "conversion" in B && (e.conversion = B.conversion), e;
}
function xo(B) {
  const e = function(...t) {
    const r = t[0];
    if (r == null)
      return r;
    r.length > 1 && (t = r);
    const s = B(t);
    if (typeof s == "object")
      for (let i = s.length, n = 0; n < i; n++)
        s[n] = Math.round(s[n]);
    return s;
  };
  return "conversion" in B && (e.conversion = B.conversion), e;
}
wo.forEach((B) => {
  ct[B] = {}, Object.defineProperty(ct[B], "channels", { value: u1[B].channels }), Object.defineProperty(ct[B], "labels", { value: u1[B].labels });
  const e = vo(B);
  Object.keys(e).forEach((r) => {
    const s = e[r];
    ct[B][r] = xo(s), ct[B][r].raw = yo(s);
  });
});
var ko = ct;
const Dt = co, me = ko, pC = [
  // To be honest, I don't really feel like keyword belongs in color convert, but eh.
  "keyword",
  // Gray conflicts with some method names, and has its own method defined.
  "gray",
  // Shouldn't really be in color-convert either...
  "hex"
], f1 = {};
for (const B of Object.keys(me))
  f1[[...me[B].labels].sort().join("")] = B;
const Hr = {};
function ue(B, e) {
  if (!(this instanceof ue))
    return new ue(B, e);
  if (e && e in pC && (e = null), e && !(e in me))
    throw new Error("Unknown model: " + e);
  let t, r;
  if (B == null)
    this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (B instanceof ue)
    this.model = B.model, this.color = [...B.color], this.valpha = B.valpha;
  else if (typeof B == "string") {
    const s = Dt.get(B);
    if (s === null)
      throw new Error("Unable to parse color from string: " + B);
    this.model = s.model, r = me[this.model].channels, this.color = s.value.slice(0, r), this.valpha = typeof s.value[r] == "number" ? s.value[r] : 1;
  } else if (B.length > 0) {
    this.model = e || "rgb", r = me[this.model].channels;
    const s = Array.prototype.slice.call(B, 0, r);
    this.color = c1(s, r), this.valpha = typeof B[r] == "number" ? B[r] : 1;
  } else if (typeof B == "number")
    this.model = "rgb", this.color = [
      B >> 16 & 255,
      B >> 8 & 255,
      B & 255
    ], this.valpha = 1;
  else {
    this.valpha = 1;
    const s = Object.keys(B);
    "alpha" in B && (s.splice(s.indexOf("alpha"), 1), this.valpha = typeof B.alpha == "number" ? B.alpha : 0);
    const i = s.sort().join("");
    if (!(i in f1))
      throw new Error("Unable to parse color from object: " + JSON.stringify(B));
    this.model = f1[i];
    const { labels: n } = me[this.model], a = [];
    for (t = 0; t < n.length; t++)
      a.push(B[n[t]]);
    this.color = c1(a);
  }
  if (Hr[this.model])
    for (r = me[this.model].channels, t = 0; t < r; t++) {
      const s = Hr[this.model][t];
      s && (this.color[t] = s(this.color[t]));
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
ue.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(B) {
    let e = this.model in Dt.to ? this : this.rgb();
    e = e.round(typeof B == "number" ? B : 1);
    const t = e.valpha === 1 ? e.color : [...e.color, this.valpha];
    return Dt.to[e.model](t);
  },
  percentString(B) {
    const e = this.rgb().round(typeof B == "number" ? B : 1), t = e.valpha === 1 ? e.color : [...e.color, this.valpha];
    return Dt.to.rgb.percent(t);
  },
  array() {
    return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    const B = {}, { channels: e } = me[this.model], { labels: t } = me[this.model];
    for (let r = 0; r < e; r++)
      B[t[r]] = this.color[r];
    return this.valpha !== 1 && (B.alpha = this.valpha), B;
  },
  unitArray() {
    const B = this.rgb().color;
    return B[0] /= 255, B[1] /= 255, B[2] /= 255, this.valpha !== 1 && B.push(this.valpha), B;
  },
  unitObject() {
    const B = this.rgb().object();
    return B.r /= 255, B.g /= 255, B.b /= 255, this.valpha !== 1 && (B.alpha = this.valpha), B;
  },
  round(B) {
    return B = Math.max(B || 0, 0), new ue([...this.color.map(Eo(B)), this.valpha], this.model);
  },
  alpha(B) {
    return B !== void 0 ? new ue([...this.color, Math.max(0, Math.min(1, B))], this.model) : this.valpha;
  },
  // Rgb
  red: ie("rgb", 0, oe(255)),
  green: ie("rgb", 1, oe(255)),
  blue: ie("rgb", 2, oe(255)),
  hue: ie(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (B) => (B % 360 + 360) % 360),
  saturationl: ie("hsl", 1, oe(100)),
  lightness: ie("hsl", 2, oe(100)),
  saturationv: ie("hsv", 1, oe(100)),
  value: ie("hsv", 2, oe(100)),
  chroma: ie("hcg", 1, oe(100)),
  gray: ie("hcg", 2, oe(100)),
  white: ie("hwb", 1, oe(100)),
  wblack: ie("hwb", 2, oe(100)),
  cyan: ie("cmyk", 0, oe(100)),
  magenta: ie("cmyk", 1, oe(100)),
  yellow: ie("cmyk", 2, oe(100)),
  black: ie("cmyk", 3, oe(100)),
  x: ie("xyz", 0, oe(95.047)),
  y: ie("xyz", 1, oe(100)),
  z: ie("xyz", 2, oe(108.833)),
  l: ie("lab", 0, oe(100)),
  a: ie("lab", 1),
  b: ie("lab", 2),
  keyword(B) {
    return B !== void 0 ? new ue(B) : me[this.model].keyword(this.color);
  },
  hex(B) {
    return B !== void 0 ? new ue(B) : Dt.to.hex(this.rgb().round().color);
  },
  hexa(B) {
    if (B !== void 0)
      return new ue(B);
    const e = this.rgb().round().color;
    let t = Math.round(this.valpha * 255).toString(16).toUpperCase();
    return t.length === 1 && (t = "0" + t), Dt.to.hex(e) + t;
  },
  rgbNumber() {
    const B = this.rgb().color;
    return (B[0] & 255) << 16 | (B[1] & 255) << 8 | B[2] & 255;
  },
  luminosity() {
    const B = this.rgb().color, e = [];
    for (const [t, r] of B.entries()) {
      const s = r / 255;
      e[t] = s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  },
  contrast(B) {
    const e = this.luminosity(), t = B.luminosity();
    return e > t ? (e + 0.05) / (t + 0.05) : (t + 0.05) / (e + 0.05);
  },
  level(B) {
    const e = this.contrast(B);
    return e >= 7 ? "AAA" : e >= 4.5 ? "AA" : "";
  },
  isDark() {
    const B = this.rgb().color;
    return (B[0] * 2126 + B[1] * 7152 + B[2] * 722) / 1e4 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const B = this.rgb();
    for (let e = 0; e < 3; e++)
      B.color[e] = 255 - B.color[e];
    return B;
  },
  lighten(B) {
    const e = this.hsl();
    return e.color[2] += e.color[2] * B, e;
  },
  darken(B) {
    const e = this.hsl();
    return e.color[2] -= e.color[2] * B, e;
  },
  saturate(B) {
    const e = this.hsl();
    return e.color[1] += e.color[1] * B, e;
  },
  desaturate(B) {
    const e = this.hsl();
    return e.color[1] -= e.color[1] * B, e;
  },
  whiten(B) {
    const e = this.hwb();
    return e.color[1] += e.color[1] * B, e;
  },
  blacken(B) {
    const e = this.hwb();
    return e.color[2] += e.color[2] * B, e;
  },
  grayscale() {
    const B = this.rgb().color, e = B[0] * 0.3 + B[1] * 0.59 + B[2] * 0.11;
    return ue.rgb(e, e, e);
  },
  fade(B) {
    return this.alpha(this.valpha - this.valpha * B);
  },
  opaquer(B) {
    return this.alpha(this.valpha + this.valpha * B);
  },
  rotate(B) {
    const e = this.hsl();
    let t = e.color[0];
    return t = (t + B) % 360, t = t < 0 ? 360 + t : t, e.color[0] = t, e;
  },
  mix(B, e) {
    if (!B || !B.rgb)
      throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof B);
    const t = B.rgb(), r = this.rgb(), s = e === void 0 ? 0.5 : e, i = 2 * s - 1, n = t.alpha() - r.alpha(), a = ((i * n === -1 ? i : (i + n) / (1 + i * n)) + 1) / 2, C = 1 - a;
    return ue.rgb(
      a * t.red() + C * r.red(),
      a * t.green() + C * r.green(),
      a * t.blue() + C * r.blue(),
      t.alpha() * s + r.alpha() * (1 - s)
    );
  }
};
for (const B of Object.keys(me)) {
  if (pC.includes(B))
    continue;
  const { channels: e } = me[B];
  ue.prototype[B] = function(...t) {
    return this.model === B ? new ue(this) : t.length > 0 ? new ue(t, B) : new ue([...So(me[this.model][B].raw(this.color)), this.valpha], B);
  }, ue[B] = function(...t) {
    let r = t[0];
    return typeof r == "number" && (r = c1(t, e)), new ue(r, B);
  };
}
function Ao(B, e) {
  return Number(B.toFixed(e));
}
function Eo(B) {
  return function(e) {
    return Ao(e, B);
  };
}
function ie(B, e, t) {
  B = Array.isArray(B) ? B : [B];
  for (const r of B)
    (Hr[r] || (Hr[r] = []))[e] = t;
  return B = B[0], function(r) {
    let s;
    return r !== void 0 ? (t && (r = t(r)), s = this[B](), s.color[e] = r, s) : (s = this[B]().color[e], t && (s = t(s)), s);
  };
}
function oe(B) {
  return function(e) {
    return Math.max(0, Math.min(B, e));
  };
}
function So(B) {
  return Array.isArray(B) ? B : [B];
}
function c1(B, e) {
  for (let t = 0; t < e; t++)
    typeof B[t] != "number" && (B[t] = 0);
  return B;
}
var hB = ue;
function Io(B) {
  yt(B, "svelte-1pu247o", `.form-check.svelte-1pu247o.svelte-1pu247o{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:0.125rem}.form-check.svelte-1pu247o .form-check-input.svelte-1pu247o{float:left;margin-left:-1.5em}.form-check-input.svelte-1pu247o.svelte-1pu247o{width:1em;height:1em;margin-top:0.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0, 0, 0, 0.25);-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;print-color-adjust:exact}.form-check-input[type="checkbox"].svelte-1pu247o.svelte-1pu247o{border-radius:0.25em}.form-check-input.svelte-1pu247o.svelte-1pu247o:active{filter:brightness(90%)}.form-check-input.svelte-1pu247o.svelte-1pu247o:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 0.25rem rgba(13, 110, 253, 0.25)}.form-check-input.svelte-1pu247o.svelte-1pu247o:checked{background-color:var(--bs-primary, hsl(var(--primary-hs) var(--l-40)));border-color:var(--bs-primary, hsl(var(--primary-hs) var(--l-40)))}.form-check-input:checked[type="checkbox"].svelte-1pu247o.svelte-1pu247o{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e")}.form-check-input[type="checkbox"].svelte-1pu247o.svelte-1pu247o:indeterminate{background-color:var(--bs-primary, hsl(var(--primary-hs) var(--l-40)));border-color:var(--bs-primary, hsl(var(--primary-hs) var(--l-40)));background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")}.form-check-input.svelte-1pu247o.svelte-1pu247o:disabled{pointer-events:none;filter:none;opacity:0.5}.form-check-input.svelte-1pu247o:disabled~.form-check-label.svelte-1pu247o{cursor:default;opacity:0.5}.form-switch.svelte-1pu247o.svelte-1pu247o{padding-left:2.5em}.form-switch.svelte-1pu247o .form-check-input.svelte-1pu247o{width:2em;margin-left:-2.5em;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");background-position:left center;border-radius:2em;transition:background-position 0.15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-switch.svelte-1pu247o .form-check-input.svelte-1pu247o{transition:none}}.form-switch.svelte-1pu247o .form-check-input.svelte-1pu247o:focus{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e")}.form-switch.svelte-1pu247o .form-check-input.svelte-1pu247o:checked{background-position:right center;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}`);
}
function jo(B) {
  let e, t, r, s, i, n, a, C;
  const o = (
    /*#slots*/
    B[4].default
  ), l = Qr(
    o,
    B,
    /*$$scope*/
    B[3],
    null
  );
  return {
    c() {
      e = L("div"), t = L("input"), r = Q(), s = L("label"), i = je(
        /*label*/
        B[2]
      ), l && l.c(), m(t, "class", "form-check-input svelte-1pu247o"), m(
        t,
        "id",
        /*id*/
        B[1]
      ), m(t, "type", "checkbox"), m(s, "class", "form-check-label svelte-1pu247o"), m(
        s,
        "for",
        /*id*/
        B[1]
      ), m(e, "class", "form-check form-switch svelte-1pu247o");
    },
    m(u, f) {
      ee(u, e, f), I(e, t), t.checked = /*checked*/
      B[0], I(e, r), I(e, s), I(s, i), l && l.m(s, null), n = !0, a || (C = [
        W(
          t,
          "change",
          /*input_change_handler*/
          B[6]
        ),
        W(
          t,
          "change",
          /*change_handler*/
          B[5]
        )
      ], a = !0);
    },
    p(u, [f]) {
      (!n || f & /*id*/
      2) && m(
        t,
        "id",
        /*id*/
        u[1]
      ), f & /*checked*/
      1 && (t.checked = /*checked*/
      u[0]), (!n || f & /*label*/
      4) && L1(
        i,
        /*label*/
        u[2]
      ), l && l.p && (!n || f & /*$$scope*/
      8) && Xr(
        l,
        o,
        u,
        /*$$scope*/
        u[3],
        n ? Yr(
          o,
          /*$$scope*/
          u[3],
          f,
          null
        ) : Zr(
          /*$$scope*/
          u[3]
        ),
        null
      ), (!n || f & /*id*/
      2) && m(
        s,
        "for",
        /*id*/
        u[1]
      );
    },
    i(u) {
      n || (Y(l, u), n = !0);
    },
    o(u) {
      re(l, u), n = !1;
    },
    d(u) {
      u && $(e), l && l.d(u), a = !1, Ge(C);
    }
  };
}
function Oo(B, e, t) {
  let { $$slots: r = {}, $$scope: s } = e, { checked: i } = e, { id: n } = e, { label: a } = e;
  function C(l) {
    nC.call(this, B, l);
  }
  function o() {
    i = this.checked, t(0, i);
  }
  return B.$$set = (l) => {
    "checked" in l && t(0, i = l.checked), "id" in l && t(1, n = l.id), "label" in l && t(2, a = l.label), "$$scope" in l && t(3, s = l.$$scope);
  }, [i, n, a, s, r, C, o];
}
class $r extends At {
  constructor(e) {
    super(), xt(this, e, Oo, jo, wt, { checked: 0, id: 1, label: 2 }, Io);
  }
  get checked() {
    return this.$$.ctx[0];
  }
  set checked(e) {
    this.$$set({ checked: e }), Z();
  }
  get id() {
    return this.$$.ctx[1];
  }
  set id(e) {
    this.$$set({ id: e }), Z();
  }
  get label() {
    return this.$$.ctx[2];
  }
  set label(e) {
    this.$$set({ label: e }), Z();
  }
}
kt($r, { checked: {}, id: {}, label: {} }, ["default"], [], !0);
function Fo(B) {
  yt(B, "svelte-soweb2", `button.svelte-soweb2{--primary-hs:210 100%;--danger-hs:345 90%;--success-hs:137 57%;--l-0:0%;--l-10:10%;--l-30:30%;--l-40:40%;--l-50:50%;--l-60:60%;--l-80:80%;--l-90:90%;--l-95:95%;--l-100:100%;--shadow-color:0deg 0% 0%;--shadow-elevation-low:0.2px 0.6px 0.7px hsl(var(--shadow-color) / 0.13),\r
			0.7px 2px 2.3px -2.8px hsl(var(--shadow-color) / 0.12);--shadow-elevation-medium:0.2px 0.6px 0.7px hsl(var(--shadow-color) / 0.13),\r
			0.9px 2.5px 2.8px -1.4px hsl(var(--shadow-color) / 0.12),\r
			3.7px 10px 11.4px -2.8px hsl(var(--shadow-color) / 0.11);--shadow-elevation-high:0.2px 0.6px 0.7px hsl(var(--shadow-color) / 0.12),\r
			1.2px 3.1px 3.6px -0.6px hsl(var(--shadow-color) / 0.11),\r
			2.5px 6.6px 7.6px -1.1px hsl(var(--shadow-color) / 0.11),\r
			4.9px 13.2px 15.1px -1.7px hsl(var(--shadow-color) / 0.1),\r
			9.2px 24.8px 28.4px -2.3px hsl(var(--shadow-color) / 0.1),\r
			16.1px 43.5px 49.7px -2.8px hsl(var(--shadow-color) / 0.09);--focus-shadow:inset 0 0 0 1px var(--bs-primary, hsl(var(--primary-hs) var(--l-40)));cursor:pointer;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);display:inline-flex;align-items:center;justify-content:center;gap:0.375rem;vertical-align:middle;line-height:1.5;min-height:2.375rem}.btn-primary.svelte-soweb2,.btn-outline-primary.svelte-soweb2{transition:color 0.15s ease-in-out,\r
			background-color 0.15s ease-in-out,\r
			border-color 0.15s ease-in-out,\r
			box-shadow 0.15s ease-in-out}@media(prefers-reduced-motion: reduce){.btn-primary.svelte-soweb2,.btn-outline-primary.svelte-soweb2{transition:none}}.btn-primary.svelte-soweb2,.btn-outline-primary.svelte-soweb2{padding:var(--padding-y, 0.375rem) var(--padding-x, 0.75rem);border-radius:var(--bs-border-radius, 0.7rem);border:1px solid var(--bs-primary, hsl(var(--primary-hs) var(--l-50)))}.btn-primary.svelte-soweb2{background-color:var(--bs-primary, hsl(var(--primary-hs) var(--l-50)));color:hsl(0 0% var(--l-100))}.btn-outline-primary.svelte-soweb2{background-color:transparent;color:var(--bs-primary, hsl(var(--primary-hs) var(--l-40)))}.btn-primary.svelte-soweb2:hover,.btn-outline-primary.svelte-soweb2:hover{background-color:var(--bs-primary, hsl(var(--primary-hs) var(--l-40)));color:hsl(0 0% var(--l-100))}`);
}
function Ro(B) {
  let e, t, r, s, i;
  const n = (
    /*#slots*/
    B[4].default
  ), a = Qr(
    n,
    B,
    /*$$scope*/
    B[3],
    null
  );
  let C = [
    { type: "button" },
    {
      class: t = /*variant*/
      B[0] === "filled" ? "btn-primary" : "btn-outline-primary"
    },
    { "aria-pressed": (
      /*pressed*/
      B[1]
    ) },
    /*$$restProps*/
    B[2]
  ], o = {};
  for (let l = 0; l < C.length; l += 1)
    o = Gr(o, C[l]);
  return {
    c() {
      e = L("button"), a && a.c(), u0(e, o), Lr(e, "svelte-soweb2", !0);
    },
    m(l, u) {
      ee(l, e, u), a && a.m(e, null), e.autofocus && e.focus(), r = !0, s || (i = W(
        e,
        "click",
        /*click_handler*/
        B[5]
      ), s = !0);
    },
    p(l, [u]) {
      a && a.p && (!r || u & /*$$scope*/
      8) && Xr(
        a,
        n,
        l,
        /*$$scope*/
        l[3],
        r ? Yr(
          n,
          /*$$scope*/
          l[3],
          u,
          null
        ) : Zr(
          /*$$scope*/
          l[3]
        ),
        null
      ), u0(e, o = ro(C, [
        { type: "button" },
        (!r || u & /*variant*/
        1 && t !== (t = /*variant*/
        l[0] === "filled" ? "btn-primary" : "btn-outline-primary")) && { class: t },
        (!r || u & /*pressed*/
        2) && { "aria-pressed": (
          /*pressed*/
          l[1]
        ) },
        u & /*$$restProps*/
        4 && /*$$restProps*/
        l[2]
      ])), Lr(e, "svelte-soweb2", !0);
    },
    i(l) {
      r || (Y(a, l), r = !0);
    },
    o(l) {
      re(a, l), r = !1;
    },
    d(l) {
      l && $(e), a && a.d(l), s = !1, i();
    }
  };
}
function Mo(B, e, t) {
  const r = ["variant", "pressed"];
  let s = l0(e, r), { $$slots: i = {}, $$scope: n } = e, { variant: a = "outline" } = e, { pressed: C = !1 } = e;
  function o(l) {
    nC.call(this, B, l);
  }
  return B.$$set = (l) => {
    e = Gr(Gr({}, e), T2(l)), t(2, s = l0(e, r)), "variant" in l && t(0, a = l.variant), "pressed" in l && t(1, C = l.pressed), "$$scope" in l && t(3, n = l.$$scope);
  }, [a, C, s, n, i, o];
}
class Kr extends At {
  constructor(e) {
    super(), xt(this, e, Mo, Ro, wt, { variant: 0, pressed: 1 }, Fo);
  }
  get variant() {
    return this.$$.ctx[0];
  }
  set variant(e) {
    this.$$set({ variant: e }), Z();
  }
  get pressed() {
    return this.$$.ctx[1];
  }
  set pressed(e) {
    this.$$set({ pressed: e }), Z();
  }
}
kt(Kr, { variant: {}, pressed: { type: "Boolean" } }, ["default"], [], !0);
function Po(B) {
  yt(B, "svelte-1w9u9ze", ".wrapper.svelte-1w9u9ze{border-radius:0.5rem;padding:0.25rem;margin-bottom:0.5rem;transition:box-shadow 0.2s;border:1px solid transparent;background-color:hsl(0 0% var(--l-100));display:flex;flex-direction:var(--flex-direction, column)}.wrapper.svelte-1w9u9ze:hover{box-shadow:inset 0 0.5rem 1rem hsl(var(--primary-hs) var(--l-10) / 10%);border-color:hsl(0 0% var(--l-50))}.wrapper.focused.svelte-1w9u9ze{border-color:hsl(var(--primary-hs) var(--l-40));box-shadow:var(--focus-shadow)}.label.svelte-1w9u9ze{color:hsl(var(--primary-hs) var(--l-30));padding:0.75rem;margin-bottom:0;font-weight:600}p.svelte-1w9u9ze{padding:0 0.75rem;margin-top:0}.inline.svelte-1w9u9ze{display:flex;justify-content:space-between;align-items:center}.flex-grow.svelte-1w9u9ze{flex-grow:1;padding:0.5rem}.color-Input.svelte-1w9u9ze{visibility:hidden;height:1px;width:1px;padding:0px;margin:0px}.color-Input-Div.svelte-1w9u9ze{padding:1em 1em 1em 1em;border-radius:0.5rem;border:1px solid hsl(0 0% var(--l-80));width:1.5em;height:1.5em;background-color:var(--bg);display:inline-block}.bool-Input.svelte-1w9u9ze{margin:0em 0.5em 0em 0.1em;padding:0em;border-radius:0.5rem;border:1px solid hsl(0 0% var(--l-80));width:1.9em;height:1.9em;display:inline-block}.text-Input.svelte-1w9u9ze{all:unset;box-sizing:border-box;cursor:text;padding:0.5rem 0.75rem;background:hsl(0 0% var(--l-100));width:100%;height:100%;border-radius:0.5rem;border:1px solid hsl(0 0% var(--l-80))}wa-dropdown.svelte-1w9u9ze::part(menu){max-height:300px;overflow:auto}");
}
function Go(B, e, t) {
  const r = B.slice();
  return r[38] = e[t], r;
}
const Lo = (B) => ({}), D0 = (B) => ({});
function No(B) {
  let e;
  return {
    c() {
      e = je(
        /*label*/
        B[2]
      );
    },
    m(t, r) {
      ee(t, e, r);
    },
    p(t, r) {
      r[0] & /*label*/
      4 && L1(
        e,
        /*label*/
        t[2]
      );
    },
    d(t) {
      t && $(e);
    }
  };
}
function d0(B) {
  let e, t;
  return {
    c() {
      e = L("p"), t = je(
        /*description*/
        B[4]
      ), m(e, "class", "description svelte-1w9u9ze");
    },
    m(r, s) {
      ee(r, e, s), I(e, t);
    },
    p(r, s) {
      s[0] & /*description*/
      16 && L1(
        t,
        /*description*/
        r[4]
      );
    },
    d(r) {
      r && $(e);
    }
  };
}
function Ho(B) {
  let e, t, r, s, i;
  return {
    c() {
      e = L("div"), t = L("input"), m(t, "class", "text-Input svelte-1w9u9ze"), m(t, "type", "text"), m(
        t,
        "id",
        /*id*/
        B[1]
      ), t.value = r = /*value*/
      B[0] || "", m(
        t,
        "placeholder",
        /*placeholder*/
        B[5]
      ), m(
        t,
        "list",
        /*list*/
        B[6]
      );
    },
    m(n, a) {
      ee(n, e, a), I(e, t), s || (i = [
        W(
          t,
          "keyup",
          /*keyup_handler_2*/
          B[30]
        ),
        W(
          t,
          "dblclick",
          /*dblclick_handler_2*/
          B[31]
        ),
        W(
          t,
          "focus",
          /*focus_handler_2*/
          B[32]
        ),
        W(
          t,
          "blur",
          /*blur_handler_2*/
          B[33]
        ),
        W(
          t,
          "input",
          /*input_handler_4*/
          B[34]
        )
      ], s = !0);
    },
    p(n, a) {
      a[0] & /*id*/
      2 && m(
        t,
        "id",
        /*id*/
        n[1]
      ), a[0] & /*value*/
      1 && r !== (r = /*value*/
      n[0] || "") && t.value !== r && (t.value = r), a[0] & /*placeholder*/
      32 && m(
        t,
        "placeholder",
        /*placeholder*/
        n[5]
      ), a[0] & /*list*/
      64 && m(
        t,
        "list",
        /*list*/
        n[6]
      );
    },
    i: De,
    o: De,
    d(n) {
      n && $(e), s = !1, Ge(i);
    }
  };
}
function Ko(B) {
  let e;
  const t = (
    /*#slots*/
    B[15].default
  ), r = Qr(
    t,
    B,
    /*$$scope*/
    B[14],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(s, i) {
      r && r.m(s, i), e = !0;
    },
    p(s, i) {
      r && r.p && (!e || i[0] & /*$$scope*/
      16384) && Xr(
        r,
        t,
        s,
        /*$$scope*/
        s[14],
        e ? Yr(
          t,
          /*$$scope*/
          s[14],
          i,
          null
        ) : Zr(
          /*$$scope*/
          s[14]
        ),
        null
      );
    },
    i(s) {
      e || (Y(r, s), e = !0);
    },
    o(s) {
      re(r, s), e = !1;
    },
    d(s) {
      r && r.d(s);
    }
  };
}
function Jo(B) {
  let e, t, r, s, i, n, a, C, o, l;
  return {
    c() {
      var u;
      e = L("div"), t = L("input"), i = Q(), n = L("div"), a = L("input"), m(t, "class", "bool-Input svelte-1w9u9ze"), m(t, "type", "checkbox"), t.value = r = /*previewChecked*/
      (u = B[8]) == null ? void 0 : u.toString(), t.checked = /*previewChecked*/
      B[8], m(t, "id", s = /*id*/
      B[1] + "-boolIn"), m(a, "type", "text"), m(a, "class", "text-Input svelte-1w9u9ze"), m(
        a,
        "id",
        /*id*/
        B[1]
      ), a.value = C = /*value*/
      B[0] || "", m(
        a,
        "placeholder",
        /*placeholder*/
        B[5]
      ), m(
        a,
        "list",
        /*list*/
        B[6]
      ), m(n, "class", "flex-grow svelte-1w9u9ze"), m(e, "class", "inline svelte-1w9u9ze");
    },
    m(u, f) {
      ee(u, e, f), I(e, t), I(e, i), I(e, n), I(n, a), o || (l = [
        W(
          t,
          "change",
          /*change_handler_1*/
          B[23]
        ),
        W(
          t,
          "input",
          /*input_handler_2*/
          B[24]
        ),
        W(
          a,
          "keyup",
          /*keyup_handler_1*/
          B[25]
        ),
        W(
          a,
          "dblclick",
          /*dblclick_handler_1*/
          B[26]
        ),
        W(
          a,
          "focus",
          /*focus_handler_1*/
          B[27]
        ),
        W(
          a,
          "blur",
          /*blur_handler_1*/
          B[28]
        ),
        W(
          a,
          "input",
          /*input_handler_3*/
          B[29]
        )
      ], o = !0);
    },
    p(u, f) {
      var c;
      f[0] & /*previewChecked*/
      256 && r !== (r = /*previewChecked*/
      (c = u[8]) == null ? void 0 : c.toString()) && (t.value = r), f[0] & /*previewChecked*/
      256 && (t.checked = /*previewChecked*/
      u[8]), f[0] & /*id*/
      2 && s !== (s = /*id*/
      u[1] + "-boolIn") && m(t, "id", s), f[0] & /*id*/
      2 && m(
        a,
        "id",
        /*id*/
        u[1]
      ), f[0] & /*value*/
      1 && C !== (C = /*value*/
      u[0] || "") && a.value !== C && (a.value = C), f[0] & /*placeholder*/
      32 && m(
        a,
        "placeholder",
        /*placeholder*/
        u[5]
      ), f[0] & /*list*/
      64 && m(
        a,
        "list",
        /*list*/
        u[6]
      );
    },
    i: De,
    o: De,
    d(u) {
      u && $(e), o = !1, Ge(l);
    }
  };
}
function To(B) {
  let e, t, r, s, i, n, a, C, o, l, u, f, c, h, b, d, y, x, g = l1([
    "theme",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "light",
    "dark",
    "-",
    "blue",
    "indigo",
    "purple",
    "pink",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "cyan",
    "black",
    "white",
    "gray",
    "gray-dark",
    "-",
    "gray-100",
    "gray-200",
    "gray-300",
    "gray-400",
    "gray-500",
    "gray-600",
    "gray-700",
    "gray-800",
    "gray-900"
  ]), G = [];
  for (let O = 0; O < 33; O += 1)
    G[O] = Uo(Go(B, g, O));
  return {
    c() {
      e = L("div"), t = L("wa-dropdown"), r = L("button"), s = Q();
      for (let O = 0; O < 33; O += 1)
        G[O].c();
      i = Q(), n = L("div"), a = L("input"), o = Q(), l = L("label"), u = L("wa-icon"), h = Q(), b = L("input"), m(r, "slot", "trigger"), m(r, "class", "color-Input-Div svelte-1w9u9ze"), Er(t, "class", "svelte-1w9u9ze"), m(a, "type", "text"), m(
        a,
        "id",
        /*id*/
        B[1]
      ), m(a, "class", "text-Input svelte-1w9u9ze"), a.value = C = /*value*/
      B[0] || "", m(
        a,
        "placeholder",
        /*placeholder*/
        B[5]
      ), m(n, "class", "flex-grow svelte-1w9u9ze"), K2(u.src, f = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-palette" viewBox="0 0 16 16">
  <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
  <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7"/>
</svg>`)}`) || Er(u, "src", f), Er(u, "label", "Custom color"), m(l, "for", c = /*id*/
      B[1] + "-colIn"), m(b, "class", "color-Input svelte-1w9u9ze"), m(b, "type", "color"), b.value = /*previewColor*/
      B[9], m(b, "id", d = /*id*/
      B[1] + "-colIn"), m(e, "class", "inline svelte-1w9u9ze");
    },
    m(O, T) {
      ee(O, e, T), I(e, t), I(t, r), I(t, s);
      for (let D = 0; D < 33; D += 1)
        G[D] && G[D].m(t, null);
      I(e, i), I(e, n), I(n, a), I(e, o), I(e, l), I(l, u), I(e, h), I(e, b), y || (x = [
        W(
          t,
          "wa-select",
          /*dropdownSelect*/
          B[13]
        ),
        W(
          a,
          "keyup",
          /*keyup_handler*/
          B[16]
        ),
        W(
          a,
          "dblclick",
          /*dblclick_handler*/
          B[17]
        ),
        W(
          a,
          "focus",
          /*focus_handler*/
          B[18]
        ),
        W(
          a,
          "blur",
          /*blur_handler*/
          B[19]
        ),
        W(
          a,
          "input",
          /*input_handler*/
          B[20]
        ),
        W(
          b,
          "input",
          /*input_handler_1*/
          B[21]
        ),
        W(
          b,
          "change",
          /*change_handler*/
          B[22]
        )
      ], y = !0);
    },
    p(O, T) {
      T[0] & /*id*/
      2 && m(
        a,
        "id",
        /*id*/
        O[1]
      ), T[0] & /*value*/
      1 && C !== (C = /*value*/
      O[0] || "") && a.value !== C && (a.value = C), T[0] & /*placeholder*/
      32 && m(
        a,
        "placeholder",
        /*placeholder*/
        O[5]
      ), T[0] & /*id*/
      2 && c !== (c = /*id*/
      O[1] + "-colIn") && m(l, "for", c), T[0] & /*previewColor*/
      512 && (b.value = /*previewColor*/
      O[9]), T[0] & /*id*/
      2 && d !== (d = /*id*/
      O[1] + "-colIn") && m(b, "id", d);
    },
    i: De,
    o: De,
    d(O) {
      O && $(e), iC(G, O), y = !1, Ge(x);
    }
  };
}
function zo(B) {
  let e, t, r, s, i;
  return {
    c() {
      e = L("wa-dropdown-item"), t = L("div"), r = Q(), s = je(
        /*color*/
        B[38]
      ), i = Q(), m(t, "slot", "icon"), m(t, "class", "color-Input-Div svelte-1w9u9ze"), m(t, "style", `--bg: var(--bs-${/*color*/
      B[38]})`), Er(
        e,
        "data-color",
        /*color*/
        B[38]
      );
    },
    m(n, a) {
      ee(n, e, a), I(e, t), I(e, r), I(e, s), I(e, i);
    },
    d(n) {
      n && $(e);
    }
  };
}
function qo(B) {
  let e;
  return {
    c() {
      e = L("wa-divider");
    },
    m(t, r) {
      ee(t, e, r);
    },
    d(t) {
      t && $(e);
    }
  };
}
function Uo(B) {
  let e;
  function t(i, n) {
    return (
      /*color*/
      i[38] === "-" ? qo : zo
    );
  }
  let s = t(B)(B);
  return {
    c() {
      s.c(), e = U2();
    },
    m(i, n) {
      s.m(i, n), ee(i, e, n);
    },
    p: De,
    d(i) {
      i && $(e), s.d(i);
    }
  };
}
function Vo(B) {
  let e, t, r, s, i, n, a, C;
  const o = (
    /*#slots*/
    B[15].label
  ), l = Qr(
    o,
    B,
    /*$$scope*/
    B[14],
    D0
  ), u = l || No(B);
  let f = (
    /*description*/
    B[4] && d0(B)
  );
  const c = [To, Jo, Ko, Ho], h = [];
  function b(d, y) {
    return (
      /*inputType*/
      d[7] === "color" ? 0 : (
        /*inputType*/
        d[7] === "boolean" ? 1 : (
          /*inputType*/
          d[7] === "custom" ? 2 : 3
        )
      )
    );
  }
  return n = b(B), a = h[n] = c[n](B), {
    c() {
      e = L("div"), t = L("label"), r = L("p"), u && u.c(), s = Q(), f && f.c(), i = Q(), a.c(), m(r, "class", "label svelte-1w9u9ze"), m(
        t,
        "for",
        /*id*/
        B[1]
      ), m(
        t,
        "title",
        /*title*/
        B[3]
      ), m(e, "class", "input-item wrapper svelte-1w9u9ze"), m(
        e,
        "style",
        /*cssVarStyle*/
        B[10]
      ), Lr(
        e,
        "focused",
        /*focused*/
        B[11]
      );
    },
    m(d, y) {
      ee(d, e, y), I(e, t), I(t, r), u && u.m(r, null), I(t, s), f && f.m(t, null), I(e, i), h[n].m(e, null), C = !0;
    },
    p(d, y) {
      l ? l.p && (!C || y[0] & /*$$scope*/
      16384) && Xr(
        l,
        o,
        d,
        /*$$scope*/
        d[14],
        C ? Yr(
          o,
          /*$$scope*/
          d[14],
          y,
          Lo
        ) : Zr(
          /*$$scope*/
          d[14]
        ),
        D0
      ) : u && u.p && (!C || y[0] & /*label*/
      4) && u.p(d, C ? y : [-1, -1]), /*description*/
      d[4] ? f ? f.p(d, y) : (f = d0(d), f.c(), f.m(t, null)) : f && (f.d(1), f = null), (!C || y[0] & /*id*/
      2) && m(
        t,
        "for",
        /*id*/
        d[1]
      ), (!C || y[0] & /*title*/
      8) && m(
        t,
        "title",
        /*title*/
        d[3]
      );
      let x = n;
      n = b(d), n === x ? h[n].p(d, y) : (Rt(), re(h[x], 1, 1, () => {
        h[x] = null;
      }), Mt(), a = h[n], a ? a.p(d, y) : (a = h[n] = c[n](d), a.c()), Y(a, 1), a.m(e, null)), (!C || y[0] & /*cssVarStyle*/
      1024) && m(
        e,
        "style",
        /*cssVarStyle*/
        d[10]
      ), (!C || y[0] & /*focused*/
      2048) && Lr(
        e,
        "focused",
        /*focused*/
        d[11]
      );
    },
    i(d) {
      C || (Y(u, d), Y(a), C = !0);
    },
    o(d) {
      re(u, d), re(a), C = !1;
    },
    d(d) {
      d && $(e), u && u.d(d), f && f.d(), h[n].d();
    }
  };
}
function p0(B) {
  var e = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    "indianred ": "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgrey: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370d8",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#d87093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  return typeof e[B.toLowerCase()] < "u" ? e[B.toLowerCase()] : !1;
}
function Wo(B, e, t) {
  let { $$slots: r = {}, $$scope: s } = e, { id: i } = e, { label: n } = e, { title: a = void 0 } = e, { description: C } = e, { value: o } = e, { placeholder: l } = e, { list: u = void 0 } = e, { inputType: f } = e;
  const c = (N) => !!CSS.supports("color", N), h = () => {
    if (l == null)
      return !1;
    let N = l.replace(" !default", "");
    return o !== "true" && o !== void 0 && o !== null && o !== "" ? !1 : !!(o === "true" || N.includes("true"));
  }, b = () => l == null ? !1 : o != null && o !== "" ? o.includes("rgb") ? !1 : o : p0(l.replace(" !default", "")) != !1 ? p0(l.replace(" !default", "")) : c(l.replace(" !default", "")) ? l.replace(" !default", "").includes("rgb") ? !1 : l.replace(" !default", "") : !1, d = H1();
  let y = h(), x = b(), g = `--bg:${x};`;
  Z2(() => {
    t(9, x = b()), t(10, g = `--bg:${x};`);
  });
  let G = !1;
  const O = (N) => {
    const it = N.detail.item.getAttribute("data-color") || "";
    it && (t(0, o = getComputedStyle(document.documentElement).getPropertyValue(`--bs-${it}`).trim()), d("change", { target: { value: o } }));
  }, T = (N) => {
    d("keyup", N);
  }, D = () => d("dblclick"), p = () => t(11, G = !0), w = () => t(11, G = !1), v = (N) => d("input", N), F = (N) => d("input", N), A = (N) => d("keyup", N), P = (N) => {
    t(8, y = !y), setTimeout(() => d("change", N), 10);
  }, q = (N) => {
    setTimeout(() => d("input", N), 10);
  }, S = (N) => {
    d("keyup", N);
  }, U = () => d("dblclick"), Be = () => t(11, G = !0), J = () => t(11, G = !1), pe = (N) => d("input", N), Le = (N) => d("keyup", N), Ne = () => d("dblclick"), Ce = () => t(11, G = !0), ae = () => t(11, G = !1), uB = (N) => d("input", N);
  return B.$$set = (N) => {
    "id" in N && t(1, i = N.id), "label" in N && t(2, n = N.label), "title" in N && t(3, a = N.title), "description" in N && t(4, C = N.description), "value" in N && t(0, o = N.value), "placeholder" in N && t(5, l = N.placeholder), "list" in N && t(6, u = N.list), "inputType" in N && t(7, f = N.inputType), "$$scope" in N && t(14, s = N.$$scope);
  }, [
    o,
    i,
    n,
    a,
    C,
    l,
    u,
    f,
    y,
    x,
    g,
    G,
    d,
    O,
    s,
    r,
    T,
    D,
    p,
    w,
    v,
    F,
    A,
    P,
    q,
    S,
    U,
    Be,
    J,
    pe,
    Le,
    Ne,
    Ce,
    ae,
    uB
  ];
}
class hC extends At {
  constructor(e) {
    super(), xt(
      this,
      e,
      Wo,
      Vo,
      wt,
      {
        id: 1,
        label: 2,
        title: 3,
        description: 4,
        value: 0,
        placeholder: 5,
        list: 6,
        inputType: 7
      },
      Po,
      [-1, -1]
    );
  }
  get id() {
    return this.$$.ctx[1];
  }
  set id(e) {
    this.$$set({ id: e }), Z();
  }
  get label() {
    return this.$$.ctx[2];
  }
  set label(e) {
    this.$$set({ label: e }), Z();
  }
  get title() {
    return this.$$.ctx[3];
  }
  set title(e) {
    this.$$set({ title: e }), Z();
  }
  get description() {
    return this.$$.ctx[4];
  }
  set description(e) {
    this.$$set({ description: e }), Z();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), Z();
  }
  get placeholder() {
    return this.$$.ctx[5];
  }
  set placeholder(e) {
    this.$$set({ placeholder: e }), Z();
  }
  get list() {
    return this.$$.ctx[6];
  }
  set list(e) {
    this.$$set({ list: e }), Z();
  }
  get inputType() {
    return this.$$.ctx[7];
  }
  set inputType(e) {
    this.$$set({ inputType: e }), Z();
  }
}
kt(hC, { id: {}, label: {}, title: {}, description: {}, value: {}, placeholder: {}, list: {}, inputType: {} }, ["label", "default"], [], !0);
function Qo(B) {
  yt(B, "svelte-q2eqkf", "h3.svelte-q2eqkf{margin-top:1rem;margin-bottom:0.5rem}.btn-group.svelte-q2eqkf{display:flex;gap:0.25rem;flex-grow:1;width:100%}.btn-group.svelte-q2eqkf>*{flex-grow:1}.info-icon.svelte-q2eqkf{width:1em;height:1em;background:transparent;color:hsl(var(--primary-hs) var(--l-40));border:1px solid hsl(var(--primary-hs) var(--l-40));display:inline-flex;align-items:center;padding-left:0.25em;border-radius:50%}");
}
function h0(B, e, t) {
  const r = B.slice();
  return r[28] = e[t], r;
}
function m0(B) {
  let e, t, r, s;
  function i(a) {
    B[14](a);
  }
  let n = {
    id: "AppearanceHelper-name",
    label: "Name",
    description: "",
    placeholder: "",
    inputType: "text"
  };
  return (
    /*themeInfo*/
    B[0].name !== void 0 && (n.value = /*themeInfo*/
    B[0].name), e = new hC({ props: n }), he.push(() => Me(e, "value", i)), {
      c() {
        t = L("div"), Se(e.$$.fragment), Ht(t, "display", "contents"), Ht(t, "--flex-direction", "row");
      },
      m(a, C) {
        ee(a, t, C), xe(e, t, null), s = !0;
      },
      p(a, C) {
        const o = {};
        !r && C[0] & /*themeInfo*/
        1 && (r = !0, o.value = /*themeInfo*/
        a[0].name, Re(() => r = !1)), e.$set(o);
      },
      i(a) {
        s || (Y(e.$$.fragment, a), s = !0);
      },
      o(a) {
        re(e.$$.fragment, a), s = !1;
      },
      d(a) {
        a && e && $(t), ke(e, a);
      }
    }
  );
}
function b0(B) {
  let e, t, r;
  function s(n) {
    B[15](n);
  }
  let i = {
    id: "AppearanceHelper-override",
    label: "Override",
    $$slots: { default: [Yo] },
    $$scope: { ctx: B }
  };
  return (
    /*override*/
    B[11] !== void 0 && (i.checked = /*override*/
    B[11]), e = new $r({ props: i }), he.push(() => Me(e, "checked", s)), e.$on(
      "change",
      /*apply*/
      B[12]
    ), {
      c() {
        Se(e.$$.fragment);
      },
      m(n, a) {
        xe(e, n, a), r = !0;
      },
      p(n, a) {
        const C = {};
        a[1] & /*$$scope*/
        1 && (C.$$scope = { dirty: a, ctx: n }), !t && a[0] & /*override*/
        2048 && (t = !0, C.checked = /*override*/
        n[11], Re(() => t = !1)), e.$set(C);
      },
      i(n) {
        r || (Y(e.$$.fragment, n), r = !0);
      },
      o(n) {
        re(e.$$.fragment, n), r = !1;
      },
      d(n) {
        ke(e, n);
      }
    }
  );
}
function Yo(B) {
  let e = " ", t, r;
  return {
    c() {
      t = je(e), r = L("i"), r.textContent = "i", m(r, "title", "This will override all your variables"), m(r, "role", "tooltip"), m(r, "class", "info-icon svelte-q2eqkf");
    },
    m(s, i) {
      ee(s, t, i), ee(s, r, i);
    },
    p: De,
    d(s) {
      s && ($(t), $(r));
    }
  };
}
function Xo(B) {
  let e, t, r, s;
  return {
    c() {
      e = Gt("svg"), t = Gt("path"), r = Gt("path"), s = je(" Soft"), m(t, "d", "M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"), m(r, "d", "M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1zM1 4v10a1 1 0 0 0 1 1h2V4zm4 0v11h9a1 1 0 0 0 1-1V4z"), m(e, "xmlns", "http://www.w3.org/2000/svg"), m(e, "width", "1em"), m(e, "height", "1em"), m(e, "fill", "currentColor"), m(e, "class", "bi bi-layout-text-window-reverse"), m(e, "viewBox", "0 0 16 16"), m(e, "aria-hidden", "true");
    },
    m(i, n) {
      ee(i, e, n), I(e, t), I(e, r), ee(i, s, n);
    },
    p: De,
    d(i) {
      i && ($(e), $(s));
    }
  };
}
function Zo(B) {
  let e, t, r;
  return {
    c() {
      e = Gt("svg"), t = Gt("path"), r = je(" Bold"), m(t, "d", "M10.5 0c.823 0 1.5.677 1.5 1.5v9c0 .823-.677 1.5-1.5 1.5h-9C.677 12 0 11.323 0 10.5v-9C0 .677.677 0 1.5 0h9zM3.75 3.007v8.243h6.75c.411 0 .75-.339.75-.75V3h-.002v-.75H.752v.757H3.75zm6 4.118a.376.376 0 01-.375.375h-3.75a.376.376 0 01-.375-.375c0-.206.169-.375.375-.375h3.75c.206 0 .375.169.375.375zm0-2.25a.376.376 0 01-.375.375h-3.75a.376.376 0 01-.375-.375c0-.206.169-.375.375-.375h3.75c.206 0 .375.169.375.375zM9.375 9c.206 0 .375.169.375.375a.376.376 0 01-.375.375h-3.75a.376.376 0 01-.375-.375c0-.206.169-.375.375-.375h3.75z"), m(e, "xmlns", "http://www.w3.org/2000/svg"), m(e, "width", "1em"), m(e, "height", "1em"), m(e, "fill", "currentColor"), m(e, "class", "bi bi-layout-text-window-reverse"), m(e, "viewBox", "0 0 12 12"), m(e, "aria-hidden", "true");
    },
    m(s, i) {
      ee(s, e, i), I(e, t), ee(s, r, i);
    },
    p: De,
    d(s) {
      s && ($(e), $(r));
    }
  };
}
function $o(B) {
  let e, t;
  return {
    c() {
      e = L("div"), t = Q(), m(e, "aria-hidden", "true"), m(e, "class", "bi"), m(e, "style", `display: inline-block; width: 1em; height: 1em; border: 1px solid; border-radius: ${/*option*/
      B[28] === "default" ? ".4rem" : (
        /*option*/
        B[28] === "minimal" ? ".25rem" : (
          /*option*/
          B[28] === "maximal" ? "1rem" : "0"
        )
      )}`);
    },
    m(r, s) {
      ee(r, e, s), ee(r, t, s);
    },
    p: De,
    d(r) {
      r && ($(e), $(t));
    }
  };
}
function g0(B) {
  let e, t;
  function r() {
    return (
      /*click_handler_2*/
      B[25](
        /*option*/
        B[28]
      )
    );
  }
  return e = new Kr({
    props: {
      variant: (
        /*rounding*/
        B[9] === /*option*/
        B[28] ? "filled" : "outline"
      ),
      pressed: (
        /*rounding*/
        B[9] === /*option*/
        B[28]
      ),
      "aria-label": (
        /*option*/
        B[28]
      ),
      $$slots: { default: [$o] },
      $$scope: { ctx: B }
    }
  }), e.$on("click", r), {
    c() {
      Se(e.$$.fragment);
    },
    m(s, i) {
      xe(e, s, i), t = !0;
    },
    p(s, i) {
      B = s;
      const n = {};
      i[0] & /*rounding*/
      512 && (n.variant = /*rounding*/
      B[9] === /*option*/
      B[28] ? "filled" : "outline"), i[0] & /*rounding*/
      512 && (n.pressed = /*rounding*/
      B[9] === /*option*/
      B[28]), i[1] & /*$$scope*/
      1 && (n.$$scope = { dirty: i, ctx: B }), e.$set(n);
    },
    i(s) {
      t || (Y(e.$$.fragment, s), t = !0);
    },
    o(s) {
      re(e.$$.fragment, s), t = !1;
    },
    d(s) {
      ke(e, s);
    }
  };
}
function v0(B) {
  let e, t, r, s, i;
  function n(C) {
    B[26](C);
  }
  let a = {
    id: "AppearanceHelper-useSquircles",
    label: "Use squircles"
  };
  return (
    /*useSquircles*/
    B[10] !== void 0 && (a.checked = /*useSquircles*/
    B[10]), r = new $r({ props: a }), he.push(() => Me(r, "checked", n)), r.$on(
      "change",
      /*apply*/
      B[12]
    ), {
      c() {
        e = L("h3"), e.innerHTML = 'Squircles <small>(experimental)</small> <i title="Instead of rounded corners, squircles will be used. This is still an experimental spec and won&#39;t work in all browsers yet." role="tooltip" class="info-icon svelte-q2eqkf">i</i>', t = Q(), Se(r.$$.fragment), m(e, "class", "svelte-q2eqkf");
      },
      m(C, o) {
        ee(C, e, o), ee(C, t, o), xe(r, C, o), i = !0;
      },
      p(C, o) {
        const l = {};
        !s && o[0] & /*useSquircles*/
        1024 && (s = !0, l.checked = /*useSquircles*/
        C[10], Re(() => s = !1)), r.$set(l);
      },
      i(C) {
        i || (Y(r.$$.fragment, C), i = !0);
      },
      o(C) {
        re(r.$$.fragment, C), i = !1;
      },
      d(C) {
        C && ($(e), $(t)), ke(r, C);
      }
    }
  );
}
function _o(B) {
  let e, t, r, s, i, n, a, C, o, l, u, f, c, h, b, d, y, x, g, G, O, T, D, p, w, v, F, A, P, q, S, U, Be, J, pe, Le, Ne, Ce = !/*hideRename*/
  B[2] && m0(B), ae = !/*alwaysOverride*/
  B[1] && b0(B);
  a = new Kr({
    props: {
      variant: (
        /*appearance*/
        B[8] === "soft" ? "filled" : "outline"
      ),
      pressed: (
        /*appearance*/
        B[8] === "soft"
      ),
      $$slots: { default: [Xo] },
      $$scope: { ctx: B }
    }
  }), a.$on(
    "click",
    /*click_handler*/
    B[16]
  ), o = new Kr({
    props: {
      variant: (
        /*appearance*/
        B[8] === "bold" ? "filled" : "outline"
      ),
      pressed: (
        /*appearance*/
        B[8] === "bold"
      ),
      $$slots: { default: [Zo] },
      $$scope: { ctx: B }
    }
  }), o.$on(
    "click",
    /*click_handler_1*/
    B[17]
  );
  function uB(j) {
    B[18](j);
  }
  function N(j) {
    B[19](j);
  }
  let it = {};
  /*theme*/
  B[4].h !== void 0 && (it.h = /*theme*/
  B[4].h), /*theme*/
  B[4].s !== void 0 && (it.s = /*theme*/
  B[4].s), c = new jr({ props: it }), he.push(() => Me(c, "h", uB)), he.push(() => Me(c, "s", N)), c.$on(
    "change",
    /*apply*/
    B[12]
  ), g = new $r({
    props: {
      checked: !/*moreTones*/
      B[7],
      id: "AppearanceHelper-moreTones",
      label: "Inherit from theme tones"
    }
  }), g.$on(
    "change",
    /*change_handler*/
    B[20]
  );
  function R2(j) {
    B[21](j);
  }
  function M2(j) {
    B[22](j);
  }
  let fB = { readonly: !/*moreTones*/
  B[7] };
  /*primary*/
  B[5].h !== void 0 && (fB.h = /*primary*/
  B[5].h), /*primary*/
  B[5].s !== void 0 && (fB.s = /*primary*/
  B[5].s), D = new jr({ props: fB }), he.push(() => Me(D, "h", R2)), he.push(() => Me(D, "s", M2)), D.$on(
    "change",
    /*apply*/
    B[12]
  );
  function P2(j) {
    B[23](j);
  }
  function G2(j) {
    B[24](j);
  }
  let cB = { readonly: !/*moreTones*/
  B[7] };
  /*gray*/
  B[6].h !== void 0 && (cB.h = /*gray*/
  B[6].h), /*gray*/
  B[6].s !== void 0 && (cB.s = /*gray*/
  B[6].s), P = new jr({ props: cB }), he.push(() => Me(P, "h", P2)), he.push(() => Me(P, "s", G2)), P.$on(
    "change",
    /*apply*/
    B[12]
  );
  let $e = l1(f0), se = [];
  for (let j = 0; j < $e.length; j += 1)
    se[j] = g0(h0(B, $e, j));
  const L2 = (j) => re(se[j], 1, 1, () => {
    se[j] = null;
  });
  let le = !/*hideSquircles*/
  B[3] && v0(B);
  return {
    c() {
      e = L("div"), Ce && Ce.c(), t = Q(), ae && ae.c(), r = Q(), s = L("h3"), s.textContent = "Style", i = Q(), n = L("div"), Se(a.$$.fragment), C = Q(), Se(o.$$.fragment), l = Q(), u = L("h3"), u.textContent = "Theme tones", f = Q(), Se(c.$$.fragment), d = Q(), y = L("br"), x = Q(), Se(g.$$.fragment), G = Q(), O = L("h3"), O.textContent = "Primary tones", T = Q(), Se(D.$$.fragment), v = Q(), F = L("h3"), F.textContent = "Gray tones", A = Q(), Se(P.$$.fragment), U = Q(), Be = L("h3"), Be.textContent = "Rounding", J = Q(), pe = L("div");
      for (let j = 0; j < se.length; j += 1)
        se[j].c();
      Le = Q(), le && le.c(), m(s, "class", "svelte-q2eqkf"), m(n, "role", "group"), m(n, "class", "btn-group svelte-q2eqkf"), m(u, "class", "svelte-q2eqkf"), m(O, "class", "svelte-q2eqkf"), m(F, "class", "svelte-q2eqkf"), m(Be, "class", "svelte-q2eqkf"), m(pe, "role", "group"), m(pe, "class", "btn-group svelte-q2eqkf"), Ht(pe, "flex-wrap", "wrap");
    },
    m(j, V) {
      ee(j, e, V), Ce && Ce.m(e, null), I(e, t), ae && ae.m(e, null), I(e, r), I(e, s), I(e, i), I(e, n), xe(a, n, null), I(n, C), xe(o, n, null), I(e, l), I(e, u), I(e, f), xe(c, e, null), I(e, d), I(e, y), I(e, x), xe(g, e, null), I(e, G), I(e, O), I(e, T), xe(D, e, null), I(e, v), I(e, F), I(e, A), xe(P, e, null), I(e, U), I(e, Be), I(e, J), I(e, pe);
      for (let He = 0; He < se.length; He += 1)
        se[He] && se[He].m(pe, null);
      I(e, Le), le && le.m(e, null), Ne = !0;
    },
    p(j, V) {
      /*hideRename*/
      j[2] ? Ce && (Rt(), re(Ce, 1, 1, () => {
        Ce = null;
      }), Mt()) : Ce ? (Ce.p(j, V), V[0] & /*hideRename*/
      4 && Y(Ce, 1)) : (Ce = m0(j), Ce.c(), Y(Ce, 1), Ce.m(e, t)), /*alwaysOverride*/
      j[1] ? ae && (Rt(), re(ae, 1, 1, () => {
        ae = null;
      }), Mt()) : ae ? (ae.p(j, V), V[0] & /*alwaysOverride*/
      2 && Y(ae, 1)) : (ae = b0(j), ae.c(), Y(ae, 1), ae.m(e, r));
      const He = {};
      V[0] & /*appearance*/
      256 && (He.variant = /*appearance*/
      j[8] === "soft" ? "filled" : "outline"), V[0] & /*appearance*/
      256 && (He.pressed = /*appearance*/
      j[8] === "soft"), V[1] & /*$$scope*/
      1 && (He.$$scope = { dirty: V, ctx: j }), a.$set(He);
      const sr = {};
      V[0] & /*appearance*/
      256 && (sr.variant = /*appearance*/
      j[8] === "bold" ? "filled" : "outline"), V[0] & /*appearance*/
      256 && (sr.pressed = /*appearance*/
      j[8] === "bold"), V[1] & /*$$scope*/
      1 && (sr.$$scope = { dirty: V, ctx: j }), o.$set(sr);
      const DB = {};
      !h && V[0] & /*theme*/
      16 && (h = !0, DB.h = /*theme*/
      j[4].h, Re(() => h = !1)), !b && V[0] & /*theme*/
      16 && (b = !0, DB.s = /*theme*/
      j[4].s, Re(() => b = !1)), c.$set(DB);
      const C0 = {};
      V[0] & /*moreTones*/
      128 && (C0.checked = !/*moreTones*/
      j[7]), g.$set(C0);
      const ir = {};
      V[0] & /*moreTones*/
      128 && (ir.readonly = !/*moreTones*/
      j[7]), !p && V[0] & /*primary*/
      32 && (p = !0, ir.h = /*primary*/
      j[5].h, Re(() => p = !1)), !w && V[0] & /*primary*/
      32 && (w = !0, ir.s = /*primary*/
      j[5].s, Re(() => w = !1)), D.$set(ir);
      const nr = {};
      if (V[0] & /*moreTones*/
      128 && (nr.readonly = !/*moreTones*/
      j[7]), !q && V[0] & /*gray*/
      64 && (q = !0, nr.h = /*gray*/
      j[6].h, Re(() => q = !1)), !S && V[0] & /*gray*/
      64 && (S = !0, nr.s = /*gray*/
      j[6].s, Re(() => S = !1)), P.$set(nr), V[0] & /*rounding, apply*/
      4608) {
        $e = l1(f0);
        let de;
        for (de = 0; de < $e.length; de += 1) {
          const a0 = h0(j, $e, de);
          se[de] ? (se[de].p(a0, V), Y(se[de], 1)) : (se[de] = g0(a0), se[de].c(), Y(se[de], 1), se[de].m(pe, null));
        }
        for (Rt(), de = $e.length; de < se.length; de += 1)
          L2(de);
        Mt();
      }
      /*hideSquircles*/
      j[3] ? le && (Rt(), re(le, 1, 1, () => {
        le = null;
      }), Mt()) : le ? (le.p(j, V), V[0] & /*hideSquircles*/
      8 && Y(le, 1)) : (le = v0(j), le.c(), Y(le, 1), le.m(e, null));
    },
    i(j) {
      if (!Ne) {
        Y(Ce), Y(ae), Y(a.$$.fragment, j), Y(o.$$.fragment, j), Y(c.$$.fragment, j), Y(g.$$.fragment, j), Y(D.$$.fragment, j), Y(P.$$.fragment, j);
        for (let V = 0; V < $e.length; V += 1)
          Y(se[V]);
        Y(le), Ne = !0;
      }
    },
    o(j) {
      re(Ce), re(ae), re(a.$$.fragment, j), re(o.$$.fragment, j), re(c.$$.fragment, j), re(g.$$.fragment, j), re(D.$$.fragment, j), re(P.$$.fragment, j), se = se.filter(Boolean);
      for (let V = 0; V < se.length; V += 1)
        re(se[V]);
      re(le), Ne = !1;
    },
    d(j) {
      j && $(e), Ce && Ce.d(), ae && ae.d(), ke(a), ke(o), ke(c), ke(g), ke(D), ke(P), iC(se, j), le && le.d();
    }
  };
}
function el(B, e = "black", t = "white") {
  const r = B.match(/hsl\(\s*([\d.]+)deg\s+([\d.]+)%\s+([\d.]+)%\s*\)/i);
  if (!r) throw new Error("Ungültiges HSL-Format");
  const s = parseFloat(r[1]), i = parseFloat(r[2]) / 100, n = parseFloat(r[3]) / 100, a = (1 - Math.abs(2 * n - 1)) * i, C = a * (1 - Math.abs(s / 60 % 2 - 1)), o = n - a / 2;
  let l, u, f;
  0 <= s && s < 60 ? [l, u, f] = [a, C, 0] : 60 <= s && s < 120 ? [l, u, f] = [C, a, 0] : 120 <= s && s < 180 ? [l, u, f] = [0, a, C] : 180 <= s && s < 240 ? [l, u, f] = [0, C, a] : 240 <= s && s < 300 ? [l, u, f] = [C, 0, a] : [l, u, f] = [a, 0, C];
  const c = l + o, h = u + o, b = f + o;
  return 0.2126 * c + 0.7152 * h + 0.0722 * b > 0.5 ? e : t;
}
function tl(B, e, t) {
  const r = H1();
  let { themeInfo: s } = e, { alwaysOverride: i = !1 } = e, { applyOnMount: n = !1 } = e, { hideRename: a = !1 } = e, { hideSquircles: C = !1 } = e, o = { h: 220, s: 16 }, l = { h: 240, s: 94 }, u = { h: 200, s: 10 }, f = !1, c = s.appearance || "soft", h = s.rounding || "default", b = s.useSquircles || !1, d = i;
  function y() {
    if (f || (t(5, l.h = o.h, l), t(5, l.s = o.s, l), t(6, u.h = o.h, u), t(6, u.s = o.s, u)), d && t(0, s.variables = {}, s), t(
      0,
      s.variables = {
        ...s.variables,
        $theme: `hsl(${o.h}deg ${o.s}% 50%)`,
        $primary: `hsl(${l.h}deg ${l.s}% 50%)`,
        $white: "#fff",
        "$gray-100": `hsl(${u.h}deg 17% 98%)`,
        "$gray-200": `hsl(${u.h}deg 16% 93%)`,
        "$gray-300": `hsl(${u.h}deg 14% 89%)`,
        "$gray-400": `hsl(${u.h}deg 14% 83%)`,
        "$gray-500": `hsl(${u.h}deg 11% 71%)`,
        "$gray-600": `hsl(${u.h}deg 7% 46%)`,
        "$gray-700": `hsl(${u.h}deg 9% 31%)`,
        "$gray-800": `hsl(${u.h}deg 10% 23%)`,
        "$gray-900": `hsl(${u.h}deg 11% 15%)`,
        $black: "#000"
      },
      s
    ), s.colorModeType && t(0, s.variables["$color-mode-type"] = s.colorModeType, s), c === "soft")
      t(
        0,
        s.variables = {
          ...s.variables,
          $theme: `hsl(${o.h}deg ${o.s}% 94%)`,
          "$header-color": "$gray-900",
          "$sidebar-color": "$gray-900"
        },
        s
      );
    else if (c === "bold") {
      const S = el(s.variables.$theme, "$gray-900");
      t(
        0,
        s.variables = {
          ...s.variables,
          "$header-color": S,
          "$sidebar-color": S
        },
        s
      );
    }
    h === "none" && t(
      0,
      s.variables = {
        ...s.variables,
        "$border-radius": "0",
        "$border-radius-lg": "0",
        "$border-radius-sm": "0"
      },
      s
    ), h === "minimal" && t(
      0,
      s.variables = {
        ...s.variables,
        "$border-radius": ".375rem",
        "$border-radius-lg": ".5rem",
        "$border-radius-sm": ".25rem"
      },
      s
    ), h === "default" && t(
      0,
      s.variables = {
        ...s.variables,
        "$border-radius": ".7rem",
        "$border-radius-lg": "1rem",
        "$border-radius-sm": ".5rem"
      },
      s
    ), h === "maximal" && t(
      0,
      s.variables = {
        ...s.variables,
        "$border-radius": "1.4rem",
        "$border-radius-lg": "2rem",
        "$border-radius-sm": "1rem"
      },
      s
    ), b && t(
      0,
      s.variables = {
        ...s.variables,
        "$corner-shape": "squircle"
      },
      s
    ), t(0, s.appearance = c, s), t(0, s.rounding = h, s), t(0, s.useSquircles = b, s), r("apply");
  }
  X2(() => {
    if (s.variables.$theme) {
      const S = hB(s.variables.$theme);
      t(4, o = { h: S.hue(), s: S.saturationl() });
    }
    if (s.variables.$primary) {
      const S = hB(s.variables.$primary);
      t(5, l = { h: S.hue(), s: S.saturationl() });
    }
    if (s.variables.$gray) {
      const S = hB(s.variables.$gray);
      t(6, u = { h: S.hue(), s: S.saturationl() });
    }
    n && y();
  });
  function x(S) {
    B.$$.not_equal(s.name, S) && (s.name = S, t(0, s));
  }
  function g(S) {
    d = S, t(11, d);
  }
  const G = () => {
    t(8, c = "soft"), y();
  }, O = () => {
    t(8, c = "bold"), y();
  };
  function T(S) {
    B.$$.not_equal(o.h, S) && (o.h = S, t(4, o));
  }
  function D(S) {
    B.$$.not_equal(o.s, S) && (o.s = S, t(4, o));
  }
  const p = () => {
    t(7, f = !f);
  };
  function w(S) {
    B.$$.not_equal(l.h, S) && (l.h = S, t(5, l));
  }
  function v(S) {
    B.$$.not_equal(l.s, S) && (l.s = S, t(5, l));
  }
  function F(S) {
    B.$$.not_equal(u.h, S) && (u.h = S, t(6, u));
  }
  function A(S) {
    B.$$.not_equal(u.s, S) && (u.s = S, t(6, u));
  }
  const P = (S) => {
    t(9, h = S), y();
  };
  function q(S) {
    b = S, t(10, b);
  }
  return B.$$set = (S) => {
    "themeInfo" in S && t(0, s = S.themeInfo), "alwaysOverride" in S && t(1, i = S.alwaysOverride), "applyOnMount" in S && t(13, n = S.applyOnMount), "hideRename" in S && t(2, a = S.hideRename), "hideSquircles" in S && t(3, C = S.hideSquircles);
  }, [
    s,
    i,
    a,
    C,
    o,
    l,
    u,
    f,
    c,
    h,
    b,
    d,
    y,
    n,
    x,
    g,
    G,
    O,
    T,
    D,
    p,
    w,
    v,
    F,
    A,
    P,
    q
  ];
}
class mC extends At {
  constructor(e) {
    super(), xt(
      this,
      e,
      tl,
      _o,
      wt,
      {
        themeInfo: 0,
        alwaysOverride: 1,
        applyOnMount: 13,
        hideRename: 2,
        hideSquircles: 3
      },
      Qo,
      [-1, -1]
    );
  }
  get themeInfo() {
    return this.$$.ctx[0];
  }
  set themeInfo(e) {
    this.$$set({ themeInfo: e }), Z();
  }
  get alwaysOverride() {
    return this.$$.ctx[1];
  }
  set alwaysOverride(e) {
    this.$$set({ alwaysOverride: e }), Z();
  }
  get applyOnMount() {
    return this.$$.ctx[13];
  }
  set applyOnMount(e) {
    this.$$set({ applyOnMount: e }), Z();
  }
  get hideRename() {
    return this.$$.ctx[2];
  }
  set hideRename(e) {
    this.$$set({ hideRename: e }), Z();
  }
  get hideSquircles() {
    return this.$$.ctx[3];
  }
  set hideSquircles(e) {
    this.$$set({ hideSquircles: e }), Z();
  }
}
kt(mC, { themeInfo: {}, alwaysOverride: { type: "Boolean" }, applyOnMount: { type: "Boolean" }, hideRename: { type: "Boolean" }, hideSquircles: { type: "Boolean" } }, [], [], !0);
var K1 = { exports: {} }, z = String, bC = function() {
  return { isColorSupported: !1, reset: z, bold: z, dim: z, italic: z, underline: z, inverse: z, hidden: z, strikethrough: z, black: z, red: z, green: z, yellow: z, blue: z, magenta: z, cyan: z, white: z, gray: z, bgBlack: z, bgRed: z, bgGreen: z, bgYellow: z, bgBlue: z, bgMagenta: z, bgCyan: z, bgWhite: z, blackBright: z, redBright: z, greenBright: z, yellowBright: z, blueBright: z, magentaBright: z, cyanBright: z, whiteBright: z, bgBlackBright: z, bgRedBright: z, bgGreenBright: z, bgYellowBright: z, bgBlueBright: z, bgMagentaBright: z, bgCyanBright: z, bgWhiteBright: z };
};
K1.exports = bC();
K1.exports.createColors = bC;
var gC = K1.exports;
const rl = {}, Bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rl
}, Symbol.toStringTag, { value: "Module" })), Ae = /* @__PURE__ */ aC(Bl);
let w0 = gC, y0 = Ae, D1 = class vC extends Error {
  constructor(e, t, r, s, i, n) {
    super(e), this.name = "CssSyntaxError", this.reason = e, i && (this.file = i), s && (this.source = s), n && (this.plugin = n), typeof t < "u" && typeof r < "u" && (typeof t == "number" ? (this.line = t, this.column = r) : (this.line = t.line, this.column = t.column, this.endLine = r.line, this.endColumn = r.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, vC);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source) return "";
    let t = this.source;
    e == null && (e = w0.isColorSupported);
    let r = (l) => l, s = (l) => l, i = (l) => l;
    if (e) {
      let { bold: l, gray: u, red: f } = w0.createColors(!0);
      s = (c) => l(f(c)), r = (c) => u(c), y0 && (i = (c) => y0(c));
    }
    let n = t.split(/\r?\n/), a = Math.max(this.line - 3, 0), C = Math.min(this.line + 2, n.length), o = String(C).length;
    return n.slice(a, C).map((l, u) => {
      let f = a + 1 + u, c = " " + (" " + f).slice(-o) + " | ";
      if (f === this.line) {
        if (l.length > 160) {
          let b = 20, d = Math.max(0, this.column - b), y = Math.max(
            this.column + b,
            this.endColumn + b
          ), x = l.slice(d, y), g = r(c.replace(/\d/g, " ")) + l.slice(0, Math.min(this.column - 1, b - 1)).replace(/[^\t]/g, " ");
          return s(">") + r(c) + i(x) + `
 ` + g + s("^");
        }
        let h = r(c.replace(/\d/g, " ")) + l.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return s(">") + r(c) + i(l) + `
 ` + h + s("^");
      }
      return " " + r(c) + i(l);
    }).join(`
`);
  }
  toString() {
    let e = this.showSourceCode();
    return e && (e = `

` + e + `
`), this.name + ": " + this.message + e;
  }
};
var J1 = D1;
D1.default = D1;
const sl = /(<)(\/?style\b)/gi, il = /(<)(!--)/g;
function Ue(B) {
  return typeof B != "string" || !B.includes("<") ? B : B.replace(sl, "\\3c $2").replace(il, "\\3c $2");
}
const x0 = {
  after: `
`,
  beforeClose: `
`,
  beforeComment: `
`,
  beforeDecl: `
`,
  beforeOpen: " ",
  beforeRule: `
`,
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: !1
};
function nl(B) {
  return B[0].toUpperCase() + B.slice(1);
}
let d1 = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, t) {
    let r = e.raws, s = "@" + e.name, i = e.params ? this.rawValue(e, "params") : "";
    if (typeof r.afterName < "u" ? s += r.afterName : i && (s += " "), e.nodes)
      this.block(e, s + i);
    else {
      let n = (r.between || "") + (t ? ";" : "");
      this.builder(Ue(s + i + n), e);
    }
  }
  beforeAfter(e, t) {
    let r;
    e.type === "decl" ? r = this.raw(e, null, "beforeDecl") : e.type === "comment" ? r = this.raw(e, null, "beforeComment") : t === "before" ? r = this.raw(e, null, "beforeRule") : r = this.raw(e, null, "beforeClose");
    let s = e.parent, i = 0;
    for (; s && s.type !== "root"; )
      i += 1, s = s.parent;
    if (r.includes(`
`)) {
      let n = this.raw(e, null, "indent");
      if (n.length)
        for (let a = 0; a < i; a++) r += n;
    }
    return r;
  }
  block(e, t) {
    let r = this.raw(e, "between", "beforeOpen");
    this.builder(Ue(t + r) + "{", e, "start");
    let s;
    e.nodes && e.nodes.length ? (this.body(e), s = this.raw(e, "after")) : s = this.raw(e, "after", "emptyBody"), s && this.builder(Ue(s)), this.builder("}", e, "end");
  }
  body(e) {
    let t = e.nodes, r = t.length - 1;
    for (; r > 0 && t[r].type === "comment"; )
      r -= 1;
    let s = this.raw(e, "semicolon"), i = e.type === "document";
    for (let n = 0; n < t.length; n++) {
      let a = t[n], C = this.raw(a, "before");
      C && this.builder(i ? C : Ue(C)), this.stringify(a, r !== n || s);
    }
  }
  comment(e) {
    let t = this.raw(e, "left", "commentLeft"), r = this.raw(e, "right", "commentRight");
    this.builder(Ue("/*" + t + e.text + r + "*/"), e);
  }
  decl(e, t) {
    let r = e.raws, s = this.raw(e, "between", "colon"), i = e.prop + s + this.rawValue(e, "value");
    e.important && (i += r.important || " !important"), t && (i += ";"), this.builder(Ue(i), e);
  }
  document(e) {
    this.body(e);
  }
  raw(e, t, r) {
    let s;
    if (r || (r = t), t && (s = e.raws[t], typeof s < "u"))
      return s;
    let i = e.parent;
    if (r === "before" && (!i || i.type === "root" && i.first === e || i && i.type === "document"))
      return "";
    if (!i) return x0[r];
    let n = e.root(), a = n.rawCache || (n.rawCache = {});
    if (typeof a[r] < "u")
      return a[r];
    if (r === "before" || r === "after")
      return this.beforeAfter(e, r);
    {
      let C = "raw" + nl(r);
      this[C] ? s = this[C](n, e) : n.walk((o) => {
        if (s = o.raws[t], typeof s < "u") return !1;
      });
    }
    return typeof s > "u" && (s = x0[r]), a[r] = s, s;
  }
  rawBeforeClose(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && r.nodes.length > 0 && typeof r.raws.after < "u")
        return t = r.raws.after, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawBeforeComment(e, t) {
    let r;
    return e.walkComments((s) => {
      if (typeof s.raws.before < "u")
        return r = s.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), typeof r > "u" ? r = this.raw(t, null, "beforeDecl") : r && (r = r.replace(/\S/g, "")), r;
  }
  rawBeforeDecl(e, t) {
    let r;
    return e.walkDecls((s) => {
      if (typeof s.raws.before < "u")
        return r = s.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), typeof r > "u" ? r = this.raw(t, null, "beforeRule") : r && (r = r.replace(/\S/g, "")), r;
  }
  rawBeforeOpen(e) {
    let t;
    return e.walk((r) => {
      if (r.type !== "decl" && (t = r.raws.between, typeof t < "u"))
        return !1;
    }), t;
  }
  rawBeforeRule(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && (r.parent !== e || e.first !== r) && typeof r.raws.before < "u")
        return t = r.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), t && (t = t.replace(/\S/g, "")), t;
  }
  rawColon(e) {
    let t;
    return e.walkDecls((r) => {
      if (typeof r.raws.between < "u")
        return t = r.raws.between.replace(/[^\s:]/g, ""), !1;
    }), t;
  }
  rawEmptyBody(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && r.nodes.length === 0 && (t = r.raws.after, typeof t < "u"))
        return !1;
    }), t;
  }
  rawIndent(e) {
    if (e.raws.indent) return e.raws.indent;
    let t;
    return e.walk((r) => {
      let s = r.parent;
      if (s && s !== e && s.parent && s.parent === e && typeof r.raws.before < "u") {
        let i = r.raws.before.split(`
`);
        return t = i[i.length - 1], t = t.replace(/\S/g, ""), !1;
      }
    }), t;
  }
  rawSemicolon(e) {
    let t;
    return e.walk((r) => {
      if (r.nodes && r.nodes.length && r.last.type === "decl" && (t = r.raws.semicolon, typeof t < "u"))
        return !1;
    }), t;
  }
  rawValue(e, t) {
    let r = e[t], s = e.raws[t];
    return s && s.value === r ? s.raw : r;
  }
  root(e) {
    if (this.body(e), e.raws.after) {
      let t = e.raws.after, r = e.parent && e.parent.type === "document";
      this.builder(r ? t : Ue(t));
    }
  }
  rule(e) {
    this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(Ue(e.raws.ownSemicolon), e, "end");
  }
  stringify(e, t) {
    if (!this[e.type])
      throw new Error(
        "Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier."
      );
    this[e.type](e, t);
  }
};
var wC = d1;
d1.default = d1;
let Cl = wC;
function p1(B, e) {
  new Cl(e).stringify(B);
}
var _r = p1;
p1.default = p1;
var Qt = {};
Qt.isClean = Symbol("isClean");
Qt.my = Symbol("my");
let al = J1, ol = wC, ll = _r, { isClean: St, my: ul } = Qt;
function h1(B, e) {
  let t = new B.constructor();
  for (let r in B) {
    if (!Object.prototype.hasOwnProperty.call(B, r) || r === "proxyCache") continue;
    let s = B[r], i = typeof s;
    r === "parent" && i === "object" ? e && (t[r] = e) : r === "source" ? t[r] = s : Array.isArray(s) ? t[r] = s.map((n) => h1(n, t)) : (i === "object" && s !== null && (s = h1(s)), t[r] = s);
  }
  return t;
}
function Ke(B, e) {
  if (e && typeof e.offset < "u")
    return e.offset;
  let t = 1, r = 1, s = 0;
  for (let i = 0; i < B.length; i++) {
    if (r === e.line && t === e.column) {
      s = i;
      break;
    }
    B[i] === `
` ? (t = 1, r += 1) : t += 1;
  }
  return s;
}
let m1 = class {
  get proxyOf() {
    return this;
  }
  constructor(e = {}) {
    this.raws = {}, this[St] = !1, this[ul] = !0;
    for (let t in e)
      if (t === "nodes") {
        this.nodes = [];
        for (let r of e[t])
          typeof r.clone == "function" ? this.append(r.clone()) : this.append(r);
      } else
        this[t] = e[t];
  }
  addToError(e) {
    if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
      let t = this.source;
      e.stack = e.stack.replace(
        /\n\s{4}at /,
        `$&${t.input.from}:${t.start.line}:${t.start.column}$&`
      );
    }
    return e;
  }
  after(e) {
    return this.parent.insertAfter(this, e), this;
  }
  assign(e = {}) {
    for (let t in e)
      this[t] = e[t];
    return this;
  }
  before(e) {
    return this.parent.insertBefore(this, e), this;
  }
  cleanRaws(e) {
    delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
  }
  clone(e = {}) {
    let t = h1(this);
    for (let r in e)
      t[r] = e[r];
    return t;
  }
  cloneAfter(e = {}) {
    let t = this.clone(e);
    return this.parent.insertAfter(this, t), t;
  }
  cloneBefore(e = {}) {
    let t = this.clone(e);
    return this.parent.insertBefore(this, t), t;
  }
  error(e, t = {}) {
    if (this.source) {
      let { end: r, start: s } = this.rangeBy(t);
      return this.source.input.error(
        e,
        { column: s.column, line: s.line },
        { column: r.column, line: r.line },
        t
      );
    }
    return new al(e);
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf" ? e : t === "root" ? () => e.root().toProxy() : e[t];
      },
      set(e, t, r) {
        return e[t] === r || (e[t] = r, (t === "prop" || t === "value" || t === "name" || t === "params" || t === "important" || /* c8 ignore next */
        t === "text") && e.markDirty()), !0;
      }
    };
  }
  /* c8 ignore next 3 */
  markClean() {
    this[St] = !0;
  }
  markDirty() {
    if (this[St]) {
      this[St] = !1;
      let e = this;
      for (; e = e.parent; )
        e[St] = !1;
    }
  }
  next() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  positionBy(e = {}) {
    let t = this.source.start;
    if (e.index)
      t = this.positionInside(e.index);
    else if (e.word) {
      let r = "document" in this.source.input ? this.source.input.document : this.source.input.css, i = r.slice(
        Ke(r, this.source.start),
        Ke(r, this.source.end)
      ).indexOf(e.word);
      i !== -1 && (t = this.positionInside(i));
    }
    return t;
  }
  positionInside(e) {
    let t = this.source.start.column, r = this.source.start.line, s = "document" in this.source.input ? this.source.input.document : this.source.input.css, i = Ke(s, this.source.start), n = i + e;
    for (let a = i; a < n; a++)
      s[a] === `
` ? (t = 1, r += 1) : t += 1;
    return { column: t, line: r, offset: n };
  }
  prev() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e - 1];
  }
  rangeBy(e = {}) {
    let t = "document" in this.source.input ? this.source.input.document : this.source.input.css, r = {
      column: this.source.start.column,
      line: this.source.start.line,
      offset: Ke(t, this.source.start)
    }, s = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line,
      offset: typeof this.source.end.offset == "number" ? (
        // `source.end.offset` is exclusive, so we don't need to add 1
        this.source.end.offset
      ) : (
        // Since line/column in this.source.end is inclusive,
        // the `sourceOffset(... , this.source.end)` returns an inclusive offset.
        // So, we add 1 to convert it to exclusive.
        Ke(t, this.source.end) + 1
      )
    } : {
      column: r.column + 1,
      line: r.line,
      offset: r.offset + 1
    };
    if (e.word) {
      let n = t.slice(
        Ke(t, this.source.start),
        Ke(t, this.source.end)
      ).indexOf(e.word);
      n !== -1 && (r = this.positionInside(n), s = this.positionInside(n + e.word.length));
    } else
      e.start ? r = {
        column: e.start.column,
        line: e.start.line,
        offset: Ke(t, e.start)
      } : e.index && (r = this.positionInside(e.index)), e.end ? s = {
        column: e.end.column,
        line: e.end.line,
        offset: Ke(t, e.end)
      } : typeof e.endIndex == "number" ? s = this.positionInside(e.endIndex) : e.index && (s = this.positionInside(e.index + 1));
    return (s.line < r.line || s.line === r.line && s.column <= r.column) && (s = {
      column: r.column + 1,
      line: r.line,
      offset: r.offset + 1
    }), { end: s, start: r };
  }
  raw(e, t) {
    return new ol().raw(this, e, t);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  replaceWith(...e) {
    if (this.parent) {
      let t = this, r = !1;
      for (let s of e)
        s === this ? r = !0 : r ? (this.parent.insertAfter(t, s), t = s) : this.parent.insertBefore(t, s);
      r || this.remove();
    }
    return this;
  }
  root() {
    let e = this;
    for (; e.parent && e.parent.type !== "document"; )
      e = e.parent;
    return e;
  }
  toJSON(e, t) {
    let r = {}, s = t == null;
    t = t || /* @__PURE__ */ new Map();
    let i = 0;
    for (let n in this) {
      if (!Object.prototype.hasOwnProperty.call(this, n) || n === "parent" || n === "proxyCache") continue;
      let a = this[n];
      if (Array.isArray(a))
        r[n] = a.map((C) => typeof C == "object" && C.toJSON ? C.toJSON(null, t) : C);
      else if (typeof a == "object" && a.toJSON)
        r[n] = a.toJSON(null, t);
      else if (n === "source") {
        if (a == null) continue;
        let C = t.get(a.input);
        C == null && (C = i, t.set(a.input, i), i++), r[n] = {
          end: a.end,
          inputId: C,
          start: a.start
        };
      } else
        r[n] = a;
    }
    return s && (r.inputs = [...t.keys()].map((n) => n.toJSON())), r;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(e = ll) {
    e.stringify && (e = e.stringify);
    let t = "";
    return e(this, (r) => {
      t += r;
    }), t;
  }
  warn(e, t, r = {}) {
    let s = { node: this };
    for (let i in r) s[i] = r[i];
    return e.warn(t, s);
  }
};
var eB = m1;
m1.default = m1;
let fl = eB, b1 = class extends fl {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var tB = b1;
b1.default = b1;
let cl = eB, g1 = class extends cl {
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
};
var rB = g1;
g1.default = g1;
let yC = tB, xC = rB, Dl = eB, { isClean: kC, my: AC } = Qt, T1, EC, SC, z1;
function IC(B) {
  return B.map((e) => (e.nodes && (e.nodes = IC(e.nodes)), delete e.source, e));
}
function jC(B) {
  if (B[kC] = !1, B.proxyOf.nodes)
    for (let e of B.proxyOf.nodes)
      jC(e);
}
let ze = class OC extends Dl {
  get first() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[0];
  }
  get last() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
  append(...e) {
    for (let t of e) {
      let r = this.normalize(t, this.last);
      for (let s of r) this.proxyOf.nodes.push(s);
    }
    return this.markDirty(), this;
  }
  cleanRaws(e) {
    if (super.cleanRaws(e), this.nodes)
      for (let t of this.nodes) t.cleanRaws(e);
  }
  each(e) {
    if (!this.proxyOf.nodes) return;
    let t = this.getIterator(), r, s;
    for (; this.indexes[t] < this.proxyOf.nodes.length && (r = this.indexes[t], s = e(this.proxyOf.nodes[r], r), s !== !1); )
      this.indexes[t] += 1;
    return delete this.indexes[t], s;
  }
  every(e) {
    return this.nodes.every(e);
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    let e = this.lastEach;
    return this.indexes[e] = 0, e;
  }
  getProxyProcessor() {
    return {
      get(e, t) {
        return t === "proxyOf" ? e : e[t] ? t === "each" || typeof t == "string" && t.startsWith("walk") ? (...r) => e[t](
          ...r.map((s) => typeof s == "function" ? (i, n) => s(i.toProxy(), n) : s)
        ) : t === "every" || t === "some" ? (r) => e[t](
          (s, ...i) => r(s.toProxy(), ...i)
        ) : t === "root" ? () => e.root().toProxy() : t === "nodes" ? e.nodes.map((r) => r.toProxy()) : t === "first" || t === "last" ? e[t].toProxy() : e[t] : e[t];
      },
      set(e, t, r) {
        return e[t] === r || (e[t] = r, (t === "name" || t === "params" || t === "selector") && e.markDirty()), !0;
      }
    };
  }
  index(e) {
    return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
  }
  insertAfter(e, t) {
    let r = this.index(e), s = this.normalize(t, this.proxyOf.nodes[r]).reverse();
    r = this.index(e);
    for (let n of s) this.proxyOf.nodes.splice(r + 1, 0, n);
    let i;
    for (let n in this.indexes)
      i = this.indexes[n], r < i && (this.indexes[n] = i + s.length);
    return this.markDirty(), this;
  }
  insertBefore(e, t) {
    let r = this.index(e), s = r === 0 ? "prepend" : !1, i = this.normalize(
      t,
      this.proxyOf.nodes[r],
      s
    ).reverse();
    r = this.index(e);
    for (let a of i) this.proxyOf.nodes.splice(r, 0, a);
    let n;
    for (let a in this.indexes)
      n = this.indexes[a], r <= n && (this.indexes[a] = n + i.length);
    return this.markDirty(), this;
  }
  normalize(e, t) {
    if (typeof e == "string")
      e = IC(EC(e).nodes);
    else if (typeof e > "u")
      e = [];
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let s of e)
        s.parent && s.parent.removeChild(s, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let s of e)
        s.parent && s.parent.removeChild(s, "ignore");
    } else if (e.type)
      e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)), e = [new xC(e)];
    } else if (e.selector || e.selectors)
      e = [new z1(e)];
    else if (e.name)
      e = [new T1(e)];
    else if (e.text)
      e = [new yC(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((s) => (s[AC] || OC.rebuild(s), s = s.proxyOf, s.parent && s.parent.removeChild(s), s[kC] && jC(s), s.raws || (s.raws = {}), typeof s.raws.before > "u" && t && typeof t.raws.before < "u" && (s.raws.before = t.raws.before.replace(/\S/g, "")), s.parent = this.proxyOf, s));
  }
  prepend(...e) {
    e = e.reverse();
    for (let t of e) {
      let r = this.normalize(t, this.first, "prepend").reverse();
      for (let s of r) this.proxyOf.nodes.unshift(s);
      for (let s in this.indexes)
        this.indexes[s] = this.indexes[s] + r.length;
    }
    return this.markDirty(), this;
  }
  push(e) {
    return e.parent = this, this.proxyOf.nodes.push(e), this;
  }
  removeAll() {
    for (let e of this.proxyOf.nodes) e.parent = void 0;
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }
  removeChild(e) {
    e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
    let t;
    for (let r in this.indexes)
      t = this.indexes[r], t >= e && (this.indexes[r] = t - 1);
    return this.markDirty(), this;
  }
  replaceValues(e, t, r) {
    return r || (r = t, t = {}), this.walkDecls((s) => {
      t.props && !t.props.includes(s.prop) || t.fast && !s.value.includes(t.fast) || (s.value = s.value.replace(e, r));
    }), this.markDirty(), this;
  }
  some(e) {
    return this.nodes.some(e);
  }
  walk(e) {
    return this.each((t, r) => {
      let s;
      try {
        s = e(t, r);
      } catch (i) {
        throw t.addToError(i);
      }
      return s !== !1 && t.walk && (s = t.walk(e)), s;
    });
  }
  walkAtRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((r, s) => {
      if (r.type === "atrule" && e.test(r.name))
        return t(r, s);
    }) : this.walk((r, s) => {
      if (r.type === "atrule" && r.name === e)
        return t(r, s);
    }) : (t = e, this.walk((r, s) => {
      if (r.type === "atrule")
        return t(r, s);
    }));
  }
  walkComments(e) {
    return this.walk((t, r) => {
      if (t.type === "comment")
        return e(t, r);
    });
  }
  walkDecls(e, t) {
    return t ? e instanceof RegExp ? this.walk((r, s) => {
      if (r.type === "decl" && e.test(r.prop))
        return t(r, s);
    }) : this.walk((r, s) => {
      if (r.type === "decl" && r.prop === e)
        return t(r, s);
    }) : (t = e, this.walk((r, s) => {
      if (r.type === "decl")
        return t(r, s);
    }));
  }
  walkRules(e, t) {
    return t ? e instanceof RegExp ? this.walk((r, s) => {
      if (r.type === "rule" && e.test(r.selector))
        return t(r, s);
    }) : this.walk((r, s) => {
      if (r.type === "rule" && r.selector === e)
        return t(r, s);
    }) : (t = e, this.walk((r, s) => {
      if (r.type === "rule")
        return t(r, s);
    }));
  }
};
ze.registerParse = (B) => {
  EC = B;
};
ze.registerRule = (B) => {
  z1 = B;
};
ze.registerAtRule = (B) => {
  T1 = B;
};
ze.registerRoot = (B) => {
  SC = B;
};
var rt = ze;
ze.default = ze;
ze.rebuild = (B) => {
  B.type === "atrule" ? Object.setPrototypeOf(B, T1.prototype) : B.type === "rule" ? Object.setPrototypeOf(B, z1.prototype) : B.type === "decl" ? Object.setPrototypeOf(B, xC.prototype) : B.type === "comment" ? Object.setPrototypeOf(B, yC.prototype) : B.type === "root" && Object.setPrototypeOf(B, SC.prototype), B[AC] = !0, B.nodes && B.nodes.forEach((e) => {
    ze.rebuild(e);
  });
};
let FC = rt, Jr = class extends FC {
  constructor(e) {
    super(e), this.type = "atrule";
  }
  append(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
  }
  prepend(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
  }
};
var q1 = Jr;
Jr.default = Jr;
FC.registerAtRule(Jr);
let dl = rt, RC, MC, Tt = class extends dl {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new RC(new MC(), this, e).stringify();
  }
};
Tt.registerLazyResult = (B) => {
  RC = B;
};
Tt.registerProcessor = (B) => {
  MC = B;
};
var U1 = Tt;
Tt.default = Tt;
let pl = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", hl = (B = 21) => {
  let e = "", t = B | 0;
  for (; t--; )
    e += pl[Math.random() * 64 | 0];
  return e;
};
var ml = { nanoid: hl };
let { existsSync: bl, readFileSync: gl } = Ae, { dirname: mB, join: vl } = Ae, { SourceMapConsumer: k0, SourceMapGenerator: A0 } = Ae;
function wl(B) {
  return Buffer ? Buffer.from(B, "base64").toString() : window.atob(B);
}
let v1 = class {
  constructor(e, t) {
    if (t.map === !1) return;
    t.unsafeMap && (this.unsafeMap = !0), this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let r = t.map ? t.map.prev : void 0, s = this.loadMap(t.from, r);
    !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = mB(this.mapFile)), s && (this.text = s);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new k0(this.json || this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let t = /^data:application\/json;charset=utf-?8;base64,/, r = /^data:application\/json;base64,/, s = /^data:application\/json;charset=utf-?8,/, i = /^data:application\/json,/, n = e.match(s) || e.match(i);
    if (n)
      return decodeURIComponent(e.substr(n[0].length));
    let a = e.match(t) || e.match(r);
    if (a)
      return wl(e.substr(a[0].length));
    let C = e.slice(22);
    throw C = C.slice(0, C.indexOf(",")), new Error("Unsupported source map encoding " + C);
  }
  getAnnotationURL(e) {
    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(e) {
    return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections);
  }
  loadAnnotation(e) {
    let t = e.match(/\/\*\s*# sourceMappingURL=/g);
    if (!t) return;
    let r = e.lastIndexOf(t.pop()), s = e.indexOf("*/", r);
    r > -1 && s > -1 && (this.annotation = this.getAnnotationURL(e.substring(r, s)));
  }
  loadFile(e, t, r) {
    if (!(!r && !this.unsafeMap && !/\.map$/i.test(e)) && (this.root = mB(e), bl(e)))
      return this.mapFile = e, gl(e, "utf-8").toString().trim();
  }
  loadMap(e, t) {
    if (t === !1) return !1;
    if (t) {
      if (typeof t == "string")
        return t;
      if (typeof t == "function") {
        let r = t(e);
        if (r) {
          let s = this.loadFile(r, e, !0);
          if (!s)
            throw new Error(
              "Unable to load previous source map: " + r.toString()
            );
          return s;
        }
      } else {
        if (t instanceof k0)
          return A0.fromSourceMap(t).toString();
        if (t instanceof A0)
          return t.toString();
        if (this.isMap(t))
          return JSON.stringify(t);
        throw new Error(
          "Unsupported previous source map format: " + t.toString()
        );
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        let r = this.annotation;
        e && (r = vl(mB(e), r));
        let s = this.loadFile(r, e, !1);
        if (s)
          try {
            this.json = JSON.parse(s.replace(/^\)]}'[^\n]*\n/, ""));
          } catch {
            return;
          }
        return s;
      }
    }
  }
  startWith(e, t) {
    return e ? e.substr(0, t.length) === t : !1;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
};
var PC = v1;
v1.default = v1;
let { nanoid: yl } = ml, { isAbsolute: w1, resolve: y1 } = Ae, { SourceMapConsumer: xl, SourceMapGenerator: kl } = Ae, { fileURLToPath: E0, pathToFileURL: or } = Ae, S0 = J1, Al = PC, bB = Ae, gB = Symbol("lineToIndexCache"), El = !!(xl && kl), I0 = !!(y1 && w1);
function j0(B) {
  if (B[gB]) return B[gB];
  let e = B.css.split(`
`), t = new Array(e.length), r = 0;
  for (let s = 0, i = e.length; s < i; s++)
    t[s] = r, r += e[s].length + 1;
  return B[gB] = t, t;
}
let Tr = class {
  get from() {
    return this.file || this.id;
  }
  constructor(e, t = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, this.document = this.css, t.document && (this.document = t.document.toString()), t.from && (!I0 || /^\w+:\/\//.test(t.from) || w1(t.from) ? this.file = t.from : this.file = y1(t.from)), I0 && El) {
      let r = new Al(this.css, t);
      if (r.text) {
        this.map = r;
        let s = r.consumer().file;
        !this.file && s && (this.file = this.mapResolve(s));
      }
    }
    this.file || (this.id = "<input css " + yl(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, t, r, s = {}) {
    let i, n, a, C, o;
    if (t && typeof t == "object") {
      let u = t, f = r;
      if (typeof u.offset == "number") {
        C = u.offset;
        let c = this.fromOffset(C);
        t = c.line, r = c.col;
      } else
        t = u.line, r = u.column, C = this.fromLineAndColumn(t, r);
      if (typeof f.offset == "number") {
        a = f.offset;
        let c = this.fromOffset(a);
        n = c.line, i = c.col;
      } else
        n = f.line, i = f.column, a = this.fromLineAndColumn(f.line, f.column);
    } else if (r)
      C = this.fromLineAndColumn(t, r);
    else {
      C = t;
      let u = this.fromOffset(C);
      t = u.line, r = u.col;
    }
    let l = this.origin(t, r, n, i);
    return l ? o = new S0(
      e,
      l.endLine === void 0 ? l.line : { column: l.column, line: l.line },
      l.endLine === void 0 ? l.column : { column: l.endColumn, line: l.endLine },
      l.source,
      l.file,
      s.plugin
    ) : o = new S0(
      e,
      n === void 0 ? t : { column: r, line: t },
      n === void 0 ? r : { column: i, line: n },
      this.css,
      this.file,
      s.plugin
    ), o.input = {
      column: r,
      endColumn: i,
      endLine: n,
      endOffset: a,
      line: t,
      offset: C,
      source: this.css
    }, this.file && (or && (o.input.url = or(this.file).toString()), o.input.file = this.file), o;
  }
  fromLineAndColumn(e, t) {
    return j0(this)[e - 1] + t - 1;
  }
  fromOffset(e) {
    let t = j0(this), r = t[t.length - 1], s = 0;
    if (e >= r)
      s = t.length - 1;
    else {
      let i = t.length - 2, n;
      for (; s < i; )
        if (n = s + (i - s >> 1), e < t[n])
          i = n - 1;
        else if (e >= t[n + 1])
          s = n + 1;
        else {
          s = n;
          break;
        }
    }
    return {
      col: e - t[s] + 1,
      line: s + 1
    };
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : y1(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, t, r, s) {
    if (!this.map) return !1;
    let i = this.map.consumer(), n = i.originalPositionFor({ column: t, line: e });
    if (!n.source) return !1;
    let a;
    typeof r == "number" && (a = i.originalPositionFor({ column: s, line: r }));
    let C;
    w1(n.source) ? C = or(n.source) : C = new URL(
      n.source,
      this.map.consumer().sourceRoot || or(this.map.mapFile)
    );
    let o = {
      column: n.column,
      endColumn: a && a.column,
      endLine: a && a.line,
      line: n.line,
      url: C.toString()
    };
    if (C.protocol === "file:")
      if (E0)
        o.file = E0(C);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let l = i.sourceContentFor(n.source);
    return l && (o.source = l), o;
  }
  toJSON() {
    let e = {};
    for (let t of ["hasBOM", "css", "file", "id"])
      this[t] != null && (e[t] = this[t]);
    return this.map && (e.map = { ...this.map }, e.map.consumerCache && (e.map.consumerCache = void 0)), e;
  }
};
var BB = Tr;
Tr.default = Tr;
bB && bB.registerInput && bB.registerInput(Tr);
let GC = rt, LC, NC, ht = class extends GC {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(e, t, r) {
    let s = super.normalize(e);
    if (t) {
      if (r === "prepend")
        this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
      else if (this.first !== t)
        for (let i of s)
          i.raws.before = t.raws.before;
    }
    return s;
  }
  removeChild(e, t) {
    let r = this.index(e);
    return !t && r === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[r].raws.before), super.removeChild(e);
  }
  toResult(e = {}) {
    return new LC(new NC(), this, e).stringify();
  }
};
ht.registerLazyResult = (B) => {
  LC = B;
};
ht.registerProcessor = (B) => {
  NC = B;
};
var Yt = ht;
ht.default = ht;
GC.registerRoot(ht);
let zt = {
  comma(B) {
    return zt.split(B, [","], !0);
  },
  space(B) {
    let e = [" ", `
`, "	"];
    return zt.split(B, e);
  },
  split(B, e, t) {
    let r = [], s = "", i = !1, n = 0, a = !1, C = "", o = !1;
    for (let l of B)
      o ? o = !1 : l === "\\" ? o = !0 : a ? l === C && (a = !1) : l === '"' || l === "'" ? (a = !0, C = l) : l === "(" ? n += 1 : l === ")" ? n > 0 && (n -= 1) : n === 0 && e.includes(l) && (i = !0), i ? (s !== "" && r.push(s.trim()), s = "", i = !1) : s += l;
    return (t || s !== "") && r.push(s.trim()), r;
  }
};
var HC = zt;
zt.default = zt;
let KC = rt, Sl = HC, zr = class extends KC {
  get selectors() {
    return Sl.comma(this.selector);
  }
  set selectors(e) {
    let t = this.selector ? this.selector.match(/,\s*/) : null, r = t ? t[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(r);
  }
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
};
var V1 = zr;
zr.default = zr;
KC.registerRule(zr);
let Il = q1, jl = tB, Ol = rB, Fl = BB, Rl = PC, Ml = Yt, Pl = V1;
function qt(B, e) {
  if (Array.isArray(B)) return B.map((s) => qt(s));
  let { inputs: t, ...r } = B;
  if (t) {
    e = [];
    for (let s of t) {
      let i = { ...s, __proto__: Fl.prototype };
      i.map && (i.map = {
        ...i.map,
        __proto__: Rl.prototype
      }), e.push(i);
    }
  }
  if (r.nodes && (r.nodes = B.nodes.map((s) => qt(s, e))), r.source) {
    let { inputId: s, ...i } = r.source;
    r.source = i, s != null && (r.source.input = e[s]);
  }
  if (r.type === "root")
    return new Ml(r);
  if (r.type === "decl")
    return new Ol(r);
  if (r.type === "rule")
    return new Pl(r);
  if (r.type === "comment")
    return new jl(r);
  if (r.type === "atrule")
    return new Il(r);
  throw new Error("Unknown node type: " + B.type);
}
var Gl = qt;
qt.default = qt;
let { dirname: Or, relative: JC, resolve: TC, sep: zC } = Ae, { SourceMapConsumer: qC, SourceMapGenerator: Fr } = Ae, { pathToFileURL: O0 } = Ae, Ll = BB, Nl = !!(qC && Fr), Hl = !!(Or && TC && JC && zC), Kl = class {
  constructor(e, t, r, s) {
    this.stringify = e, this.mapOpts = r.map || {}, this.root = t, this.opts = r, this.css = s, this.originalCSS = s, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  addAnnotation() {
    let e;
    this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
    let t = `
`;
    this.css.includes(`\r
`) && (t = `\r
`), this.css += t + "/*# sourceMappingURL=" + e + " */";
  }
  applyPrevMaps() {
    for (let e of this.previous()) {
      let t = this.toUrl(this.path(e.file)), r = e.root || Or(e.file), s;
      this.mapOpts.sourcesContent === !1 ? (s = new qC(e.text), s.sourcesContent && (s.sourcesContent = null)) : s = e.consumer(), this.map.applySourceMap(s, t, this.toUrl(this.path(r)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation !== !1) {
      if (this.root) {
        let e;
        for (let t = this.root.nodes.length - 1; t >= 0; t--)
          e = this.root.nodes[t], e.type === "comment" && e.text.startsWith("# sourceMappingURL=") && this.root.removeChild(t);
      } else if (this.css) {
        let e;
        for (; (e = this.css.lastIndexOf("/*#")) !== -1; ) {
          let t = this.css.indexOf("*/", e + 3);
          if (t === -1) break;
          for (; e > 0 && this.css[e - 1] === `
`; )
            e--;
          this.css = this.css.slice(0, e) + this.css.slice(t + 2);
        }
      }
    }
  }
  generate() {
    if (this.clearAnnotation(), Hl && Nl && this.isMap())
      return this.generateMap();
    {
      let e = "";
      return this.stringify(this.root, (t) => {
        e += t;
      }), [e];
    }
  }
  generateMap() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      let e = this.previous()[0].consumer();
      e.file = this.outputFile(), this.map = Fr.fromSourceMap(e, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new Fr({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      }), this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  generateString() {
    this.css = "", this.map = new Fr({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    let e = 1, t = 1, r = "<no source>", s = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, i, n;
    this.stringify(this.root, (a, C, o) => {
      if (this.css += a, C && o !== "end" && (s.generated.line = e, s.generated.column = t - 1, C.source && C.source.start ? (s.source = this.sourcePath(C), s.original.line = C.source.start.line, s.original.column = C.source.start.column - 1, this.map.addMapping(s)) : (s.source = r, s.original.line = 1, s.original.column = 0, this.map.addMapping(s))), n = a.match(/\n/g), n ? (e += n.length, i = a.lastIndexOf(`
`), t = a.length - i) : t += a.length, C && o !== "start") {
        let l = C.parent || { raws: {} };
        (!(C.type === "decl" || C.type === "atrule" && !C.nodes) || C !== l.last || l.raws.semicolon) && (C.source && C.source.end ? (s.source = this.sourcePath(C), s.original.line = C.source.end.line, s.original.column = C.source.end.column - 1, s.generated.line = e, s.generated.column = t - 2, this.map.addMapping(s)) : (s.source = r, s.original.line = 1, s.original.column = 0, s.generated.line = e, s.generated.column = t - 1, this.map.addMapping(s)));
      }
    });
  }
  isAnnotation() {
    return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((e) => e.annotation) : !0;
  }
  isInline() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    let e = this.mapOpts.annotation;
    return typeof e < "u" && e !== !0 ? !1 : this.previous().length ? this.previous().some((t) => t.inline) : !0;
  }
  isMap() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }
  isSourcesContent() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((e) => e.withContent()) : !0;
  }
  outputFile() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }
  path(e) {
    if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e)) return e;
    let t = this.memoizedPaths.get(e);
    if (t) return t;
    let r = this.opts.to ? Or(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (r = Or(TC(r, this.mapOpts.annotation)));
    let s = JC(r, e);
    return this.memoizedPaths.set(e, s), s;
  }
  previous() {
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk((e) => {
          if (e.source && e.source.input.map) {
            let t = e.source.input.map;
            this.previousMaps.includes(t) || this.previousMaps.push(t);
          }
        });
      else {
        let e = new Ll(this.originalCSS, this.opts);
        e.map && this.previousMaps.push(e.map);
      }
    return this.previousMaps;
  }
  setSourcesContent() {
    let e = {};
    if (this.root)
      this.root.walk((t) => {
        if (t.source) {
          let r = t.source.input.from;
          if (r && !e[r]) {
            e[r] = !0;
            let s = this.usesFileUrls ? this.toFileUrl(r) : this.toUrl(this.path(r));
            this.map.setSourceContent(s, t.source.input.css);
          }
        }
      });
    else if (this.css) {
      let t = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(t, this.css);
    }
  }
  sourcePath(e) {
    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from));
  }
  toBase64(e) {
    return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)));
  }
  toFileUrl(e) {
    let t = this.memoizedFileURLs.get(e);
    if (t) return t;
    if (O0) {
      let r = O0(e).toString();
      return this.memoizedFileURLs.set(e, r), r;
    } else
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
  }
  toUrl(e) {
    let t = this.memoizedURLs.get(e);
    if (t) return t;
    zC === "\\" && (e = e.replace(/\\/g, "/"));
    let r = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, r), r;
  }
};
var UC = Kl;
const vB = 39, F0 = 34, lr = 92, R0 = 47, ur = 10, It = 32, fr = 12, cr = 9, Dr = 13, Jl = 91, Tl = 93, zl = 40, ql = 41, Ul = 123, Vl = 125, Wl = 59, Ql = 42, Yl = 58, Xl = 64, dr = /[\t\n\f\r "#'()/;[\\\]{}]/g, pr = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, Zl = /.[\r\n"'(/\\]/, M0 = /[\da-f]/i;
var $l = function(e, t = {}) {
  let r = e.css.valueOf(), s = t.ignoreErrors, i, n, a, C, o, l, u, f, c, h, b = r.length, d = 0, y = [], x = [], g = -1;
  function G() {
    return d;
  }
  function O(w) {
    throw e.error("Unclosed " + w, d);
  }
  function T() {
    return x.length === 0 && d >= b;
  }
  function D(w) {
    if (x.length) return x.pop();
    if (d >= b) return;
    let v = w ? w.ignoreUnclosed : !1;
    switch (i = r.charCodeAt(d), i) {
      case ur:
      case It:
      case cr:
      case Dr:
      case fr: {
        C = d;
        do
          C += 1, i = r.charCodeAt(C);
        while (i === It || i === ur || i === cr || i === Dr || i === fr);
        l = ["space", r.slice(d, C)], d = C - 1;
        break;
      }
      case Jl:
      case Tl:
      case Ul:
      case Vl:
      case Yl:
      case Wl:
      case ql: {
        let F = String.fromCharCode(i);
        l = [F, F, d];
        break;
      }
      case zl: {
        if (h = y.length ? y.pop()[1] : "", c = r.charCodeAt(d + 1), h === "url" && c !== vB && c !== F0 && c !== It && c !== ur && c !== cr && c !== fr && c !== Dr) {
          C = d;
          do {
            if (u = !1, C = r.indexOf(")", C + 1), C === -1)
              if (s || v) {
                C = d;
                break;
              } else
                O("bracket");
            for (f = C; r.charCodeAt(f - 1) === lr; )
              f -= 1, u = !u;
          } while (u);
          l = ["brackets", r.slice(d, C + 1), d, C], d = C;
        } else d <= g ? l = ["(", "(", d] : (C = r.indexOf(")", d + 1), n = r.slice(d, C + 1), C === -1 || Zl.test(n) ? (g = C === -1 ? b : C, l = ["(", "(", d]) : (l = ["brackets", n, d, C], d = C));
        break;
      }
      case vB:
      case F0: {
        o = i === vB ? "'" : '"', C = d;
        do {
          if (u = !1, C = r.indexOf(o, C + 1), C === -1)
            if (s || v) {
              C = d + 1;
              break;
            } else
              O("string");
          for (f = C; r.charCodeAt(f - 1) === lr; )
            f -= 1, u = !u;
        } while (u);
        l = ["string", r.slice(d, C + 1), d, C], d = C;
        break;
      }
      case Xl: {
        dr.lastIndex = d + 1, dr.test(r), dr.lastIndex === 0 ? C = r.length - 1 : C = dr.lastIndex - 2, l = ["at-word", r.slice(d, C + 1), d, C], d = C;
        break;
      }
      case lr: {
        for (C = d, a = !0; r.charCodeAt(C + 1) === lr; )
          C += 1, a = !a;
        if (i = r.charCodeAt(C + 1), a && i !== R0 && i !== It && i !== ur && i !== cr && i !== Dr && i !== fr && (C += 1, M0.test(r.charAt(C)))) {
          for (; M0.test(r.charAt(C + 1)); )
            C += 1;
          r.charCodeAt(C + 1) === It && (C += 1);
        }
        l = ["word", r.slice(d, C + 1), d, C], d = C;
        break;
      }
      default: {
        i === R0 && r.charCodeAt(d + 1) === Ql ? (C = r.indexOf("*/", d + 2) + 1, C === 0 && (s || v ? C = r.length : O("comment")), l = ["comment", r.slice(d, C + 1), d, C], d = C) : (pr.lastIndex = d + 1, pr.test(r), pr.lastIndex === 0 ? C = r.length - 1 : C = pr.lastIndex - 2, l = ["word", r.slice(d, C + 1), d, C], y.push(l), d = C);
        break;
      }
    }
    return d++, l;
  }
  function p(w) {
    x.push(w);
  }
  return {
    back: p,
    endOfFile: T,
    nextToken: D,
    position: G
  };
};
let _l = q1, eu = tB, tu = rB, ru = Yt, P0 = V1, Bu = $l;
const G0 = {
  empty: !0,
  space: !0
};
function su(B) {
  for (let e = B.length - 1; e >= 0; e--) {
    let t = B[e], r = t[3] || t[2];
    if (r) return r;
  }
}
function wB(B, e, t) {
  let r = "";
  for (let s = e; s < t; s++) r += B[s][1];
  return r;
}
let iu = class {
  constructor(e) {
    this.input = e, this.root = new ru(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let t = new _l();
    t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
    let r, s, i, n = !1, a = !1, C = [], o = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (e = this.tokenizer.nextToken(), r = e[0], r === "(" || r === "[" ? o.push(r === "(" ? ")" : "]") : r === "{" && o.length > 0 ? o.push("}") : r === o[o.length - 1] && o.pop(), o.length === 0)
        if (r === ";") {
          t.source.end = this.getPosition(e[2]), t.source.end.offset++, this.semicolon = !0;
          break;
        } else if (r === "{") {
          a = !0;
          break;
        } else if (r === "}") {
          if (C.length > 0) {
            for (i = C.length - 1, s = C[i]; s && s[0] === "space"; )
              s = C[--i];
            s && (t.source.end = this.getPosition(s[3] || s[2]), t.source.end.offset++);
          }
          this.end(e);
          break;
        } else
          C.push(e);
      else
        C.push(e);
      if (this.tokenizer.endOfFile()) {
        n = !0;
        break;
      }
    }
    t.raws.between = this.spacesAndCommentsFromEnd(C), C.length ? (t.raws.afterName = this.spacesAndCommentsFromStart(C), this.raw(t, "params", C), n && (e = C[C.length - 1], t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++, this.spaces = t.raws.between, t.raws.between = "")) : (t.raws.afterName = "", t.params = ""), a && (t.nodes = [], this.current = t);
  }
  checkMissedSemicolon(e) {
    let t = this.colon(e);
    if (t === !1) return;
    let r = 0, s;
    for (let i = t - 1; i >= 0 && (s = e[i], !(s[0] !== "space" && (r += 1, r === 2))); i--)
      ;
    throw this.input.error(
      "Missed semicolon",
      s[0] === "word" ? s[3] + 1 : s[2]
    );
  }
  colon(e) {
    let t = 0, r, s, i;
    for (let [n, a] of e.entries()) {
      if (s = a, i = s[0], i === "(" && (t += 1), i === ")" && (t -= 1), t === 0 && i === ":")
        if (!r)
          this.doubleColon(s);
        else {
          if (r[0] === "word" && r[1] === "progid")
            continue;
          return n;
        }
      r = s;
    }
    return !1;
  }
  comment(e) {
    let t = new eu();
    this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
    let r = e[1].slice(2, -2);
    if (!r.trim())
      t.text = "", t.raws.left = r, t.raws.right = "";
    else {
      let s = r.match(/^(\s*)([^]*\S)(\s*)$/);
      t.text = s[2], t.raws.left = s[1], t.raws.right = s[3];
    }
  }
  createTokenizer() {
    this.tokenizer = Bu(this.input);
  }
  decl(e, t) {
    let r = new tu();
    this.init(r, e[0][2]);
    let s = e[e.length - 1];
    s[0] === ";" && (this.semicolon = !0, e.pop()), r.source.end = this.getPosition(
      s[3] || s[2] || su(e)
    ), r.source.end.offset++;
    let i = 0;
    for (; e[i][0] !== "word"; )
      i === e.length - 1 && this.unknownWord([e[i]]), i++;
    r.raws.before += wB(e, 0, i), r.source.start = this.getPosition(e[i][2]);
    let n = i;
    for (; i < e.length; ) {
      let f = e[i][0];
      if (f === ":" || f === "space" || f === "comment")
        break;
      i++;
    }
    r.prop = wB(e, n, i);
    let a = i, C;
    for (; i < e.length && (C = e[i], i++, C[0] !== ":"); )
      C[0] === "word" && /\w/.test(C[1]) && this.unknownWord([C]);
    r.raws.between = wB(e, a, i), (r.prop[0] === "_" || r.prop[0] === "*") && (r.raws.before += r.prop[0], r.prop = r.prop.slice(1));
    let o = i;
    for (; i < e.length; ) {
      let f = e[i][0];
      if (f !== "space" && f !== "comment") break;
      i++;
    }
    let l = e.slice(o, i);
    e = e.slice(i), this.precheckMissedSemicolon(e);
    for (let f = e.length - 1; f >= 0; f--) {
      if (C = e[f], C[1].toLowerCase() === "!important") {
        r.important = !0;
        let c = this.stringFrom(e, f);
        c = this.spacesFromEnd(e) + c, c !== " !important" && (r.raws.important = c);
        break;
      } else if (C[1].toLowerCase() === "important") {
        let c = e.slice(0), h = "";
        for (let b = f; b > 0; b--) {
          let d = c[b][0];
          if (h.trim().startsWith("!") && d !== "space")
            break;
          h = c.pop()[1] + h;
        }
        h.trim().startsWith("!") && (r.important = !0, r.raws.important = h, e = c);
      }
      if (C[0] !== "space" && C[0] !== "comment")
        break;
    }
    e.some((f) => f[0] !== "space" && f[0] !== "comment") && (r.raws.between += l.map((f) => f[1]).join(""), l = []), this.raw(r, "value", l.concat(e), t), r.value.includes(":") && !t && this.checkMissedSemicolon(e);
  }
  doubleColon(e) {
    throw this.input.error(
      "Double colon",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  emptyRule(e) {
    let t = new P0();
    this.init(t, e[2]), t.selector = "", t.raws.between = "", this.current = t;
  }
  end(e) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
  }
  freeSemicolon(e) {
    if (this.spaces += e[1], this.current.nodes) {
      let t = this.current.nodes[this.current.nodes.length - 1];
      t && t.type === "rule" && !t.raws.ownSemicolon && (t.raws.ownSemicolon = this.spaces, this.spaces = "", t.source.end = this.getPosition(e[2]), t.source.end.offset += t.raws.ownSemicolon.length);
    }
  }
  // Helpers
  getPosition(e) {
    let t = this.input.fromOffset(e);
    return {
      column: t.col,
      line: t.line,
      offset: e
    };
  }
  init(e, t) {
    this.current.push(e), e.source = {
      input: this.input,
      start: this.getPosition(t)
    }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = !1);
  }
  other(e) {
    let t = !1, r = null, s = !1, i = null, n = [], a = e[1].startsWith("--"), C = [], o = e;
    for (; o; ) {
      if (r = o[0], C.push(o), r === "(" || r === "[")
        i || (i = o), n.push(r === "(" ? ")" : "]");
      else if (a && s && r === "{")
        i || (i = o), n.push("}");
      else if (n.length === 0)
        if (r === ";")
          if (s) {
            this.decl(C, a);
            return;
          } else
            break;
        else if (r === "{") {
          this.rule(C);
          return;
        } else if (r === "}") {
          this.tokenizer.back(C.pop()), t = !0;
          break;
        } else r === ":" && (s = !0);
      else r === n[n.length - 1] && (n.pop(), n.length === 0 && (i = null));
      o = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (t = !0), n.length > 0 && this.unclosedBracket(i), t && s) {
      if (!a)
        for (; C.length && (o = C[C.length - 1][0], !(o !== "space" && o !== "comment")); )
          this.tokenizer.back(C.pop());
      this.decl(C, a);
    } else
      this.unknownWord(C);
  }
  parse() {
    let e;
    for (; !this.tokenizer.endOfFile(); )
      switch (e = this.tokenizer.nextToken(), e[0]) {
        case "space":
          this.spaces += e[1];
          break;
        case ";":
          this.freeSemicolon(e);
          break;
        case "}":
          this.end(e);
          break;
        case "comment":
          this.comment(e);
          break;
        case "at-word":
          this.atrule(e);
          break;
        case "{":
          this.emptyRule(e);
          break;
        default:
          this.other(e);
          break;
      }
    this.endFile();
  }
  precheckMissedSemicolon() {
  }
  raw(e, t, r, s) {
    let i, n, a = r.length, C = "", o = !0, l, u;
    for (let f = 0; f < a; f += 1)
      i = r[f], n = i[0], n === "space" && f === a - 1 && !s ? o = !1 : n === "comment" ? (u = r[f - 1] ? r[f - 1][0] : "empty", l = r[f + 1] ? r[f + 1][0] : "empty", !G0[u] && !G0[l] ? C.slice(-1) === "," ? o = !1 : C += i[1] : o = !1) : C += i[1];
    if (!o) {
      let f = r.reduce((c, h) => c + h[1], "");
      e.raws[t] = { raw: f, value: C };
    }
    e[t] = C;
  }
  rule(e) {
    e.pop();
    let t = new P0();
    this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t;
  }
  spacesAndCommentsFromEnd(e) {
    let t, r = "";
    for (; e.length && (t = e[e.length - 1][0], !(t !== "space" && t !== "comment")); )
      r = e.pop()[1] + r;
    return r;
  }
  // Errors
  spacesAndCommentsFromStart(e) {
    let t, r = "";
    for (; e.length && (t = e[0][0], !(t !== "space" && t !== "comment")); )
      r += e.shift()[1];
    return r;
  }
  spacesFromEnd(e) {
    let t, r = "";
    for (; e.length && (t = e[e.length - 1][0], t === "space"); )
      r = e.pop()[1] + r;
    return r;
  }
  stringFrom(e, t) {
    let r = "";
    for (let s = t; s < e.length; s++)
      r += e[s][1];
    return e.splice(t, e.length - t), r;
  }
  unclosedBlock() {
    let e = this.current.source.start;
    throw this.input.error("Unclosed block", e.line, e.column);
  }
  unclosedBracket(e) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unexpectedClose(e) {
    throw this.input.error(
      "Unexpected }",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unknownWord(e) {
    throw this.input.error(
      "Unknown word " + e[0][1],
      { offset: e[0][2] },
      { offset: e[0][2] + e[0][1].length }
    );
  }
  unnamedAtrule(e, t) {
    throw this.input.error(
      "At-rule without name",
      { offset: t[2] },
      { offset: t[2] + t[1].length }
    );
  }
};
var nu = iu;
let Cu = rt, au = BB, ou = nu;
function qr(B, e) {
  let t = new au(B, e), r = new ou(t);
  try {
    r.parse();
  } catch (s) {
    throw process.env.NODE_ENV !== "production" && s.name === "CssSyntaxError" && e && e.from && (/\.scss$/i.test(e.from) ? s.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(e.from) ? s.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(e.from) && (s.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), s;
  }
  return r.root;
}
var W1 = qr;
qr.default = qr;
Cu.registerParse(qr);
let x1 = class {
  constructor(e, t = {}) {
    if (this.type = "warning", this.text = e, t.node && t.node.source) {
      let r = t.node.rangeBy(t);
      this.line = r.start.line, this.column = r.start.column, this.endLine = r.end.line, this.endColumn = r.end.column;
    }
    for (let r in t) this[r] = t[r];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      index: this.index,
      plugin: this.plugin,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
};
var VC = x1;
x1.default = x1;
let lu = VC, k1 = class {
  get content() {
    return this.css;
  }
  constructor(e, t, r) {
    this.processor = e, this.messages = [], this.root = t, this.opts = r, this.css = "", this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, t = {}) {
    t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
    let r = new lu(e, t);
    return this.messages.push(r), r;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
};
var Q1 = k1;
k1.default = k1;
let L0 = {};
var WC = function(e) {
  L0[e] || (L0[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let uu = rt, fu = U1, cu = UC, Du = W1, N0 = Q1, du = Yt, pu = _r, { isClean: Fe, my: hu } = Qt, mu = WC;
const bu = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, gu = {
  AtRule: !0,
  AtRuleExit: !0,
  Comment: !0,
  CommentExit: !0,
  Declaration: !0,
  DeclarationExit: !0,
  Document: !0,
  DocumentExit: !0,
  Once: !0,
  OnceExit: !0,
  postcssPlugin: !0,
  prepare: !0,
  Root: !0,
  RootExit: !0,
  Rule: !0,
  RuleExit: !0
}, vu = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, mt = 0;
function jt(B) {
  return typeof B == "object" && typeof B.then == "function";
}
function QC(B) {
  let e = !1, t = bu[B.type];
  return B.type === "decl" ? e = B.prop.toLowerCase() : B.type === "atrule" && (e = B.name.toLowerCase()), e && B.append ? [
    t,
    t + "-" + e,
    mt,
    t + "Exit",
    t + "Exit-" + e
  ] : e ? [t, t + "-" + e, t + "Exit", t + "Exit-" + e] : B.append ? [t, mt, t + "Exit"] : [t, t + "Exit"];
}
function H0(B) {
  let e;
  return B.type === "document" ? e = ["Document", mt, "DocumentExit"] : B.type === "root" ? e = ["Root", mt, "RootExit"] : e = QC(B), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: B,
    visitorIndex: 0,
    visitors: []
  };
}
function A1(B) {
  return B[Fe] = !1, B.nodes && B.nodes.forEach((e) => A1(e)), B;
}
let E1 = {}, bt = class YC {
  get content() {
    return this.stringify().content;
  }
  get css() {
    return this.stringify().css;
  }
  get map() {
    return this.stringify().map;
  }
  get messages() {
    return this.sync().messages;
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    return this.sync().root;
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
  constructor(e, t, r) {
    this.stringified = !1, this.processed = !1;
    let s;
    if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document"))
      s = A1(t);
    else if (t instanceof YC || t instanceof N0)
      s = A1(t.root), t.map && (typeof r.map > "u" && (r.map = {}), r.map.inline || (r.map.inline = !1), r.map.prev = t.map);
    else {
      let i = Du;
      r.syntax && (i = r.syntax.parse), r.parser && (i = r.parser), i.parse && (i = i.parse);
      try {
        s = i(t, r);
      } catch (n) {
        this.processed = !0, this.error = n;
      }
      s && !s[hu] && uu.rebuild(s);
    }
    this.result = new N0(e, s, r), this.helpers = { ...E1, postcss: E1, result: this.result }, this.plugins = this.processor.plugins.map((i) => typeof i == "object" && i.prepare ? { ...i, ...i.prepare(this.result) } : i);
  }
  async() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(e, t) {
    let r = this.result.lastPlugin;
    try {
      if (t && t.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin)
        e.plugin = r.postcssPlugin, e.setMessage();
      else if (r.postcssVersion && process.env.NODE_ENV !== "production") {
        let s = r.postcssPlugin, i = r.postcssVersion, n = this.result.processor.version, a = i.split("."), C = n.split(".");
        (a[0] !== C[0] || parseInt(a[1]) > parseInt(C[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + n + ", but " + s + " uses " + i + ". Perhaps this is the source of the error below."
        );
      }
    } catch (s) {
      console && console.error && console.error(s);
    }
    return e;
  }
  prepareVisitors() {
    this.listeners = {};
    let e = (t, r, s) => {
      this.listeners[r] || (this.listeners[r] = []), this.listeners[r].push([t, s]);
    };
    for (let t of this.plugins)
      if (typeof t == "object")
        for (let r in t) {
          if (!gu[r] && /^[A-Z]/.test(r))
            throw new Error(
              `Unknown event ${r} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!vu[r])
            if (typeof t[r] == "object")
              for (let s in t[r])
                s === "*" ? e(t, r, t[r][s]) : e(
                  t,
                  r + "-" + s.toLowerCase(),
                  t[r][s]
                );
            else typeof t[r] == "function" && e(t, r, t[r]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let e = 0; e < this.plugins.length; e++) {
      let t = this.plugins[e], r = this.runOnRoot(t);
      if (jt(r))
        try {
          await r;
        } catch (s) {
          throw this.handleError(s);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[Fe]; ) {
        e[Fe] = !0;
        let t = [H0(e)];
        for (; t.length > 0; ) {
          let r = this.visitTick(t);
          if (jt(r))
            try {
              await r;
            } catch (s) {
              let i = t[t.length - 1].node;
              throw this.handleError(s, i);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [t, r] of this.listeners.OnceExit) {
          this.result.lastPlugin = t;
          try {
            if (e.type === "document") {
              let s = e.nodes.map(
                (i) => r(i, this.helpers)
              );
              await Promise.all(s);
            } else
              await r(e, this.helpers);
          } catch (s) {
            throw this.handleError(s);
          }
        }
    }
    return this.processed = !0, this.stringify();
  }
  runOnRoot(e) {
    this.result.lastPlugin = e;
    try {
      if (typeof e == "object" && e.Once) {
        if (this.result.root.type === "document") {
          let t = this.result.root.nodes.map(
            (r) => e.Once(r, this.helpers)
          );
          return jt(t[0]) ? Promise.all(t) : t;
        }
        return e.Once(this.result.root, this.helpers);
      } else if (typeof e == "function")
        return e(this.result.root, this.result);
    } catch (t) {
      throw this.handleError(t);
    }
  }
  stringify() {
    if (this.error) throw this.error;
    if (this.stringified) return this.result;
    this.stringified = !0, this.sync();
    let e = this.result.opts, t = pu;
    e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
    let r = this.result.root.source;
    if (e.map === void 0 && !(r && r.input && r.input.map)) {
      let n = "";
      return t(this.result.root, (a) => {
        n += a;
      }), this.result.css = n, this.result;
    }
    let i = new cu(t, this.result.root, this.result.opts).generate();
    return this.result.css = i[0], this.result.map = i[1], this.result;
  }
  sync() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (let e of this.plugins) {
      let t = this.runOnRoot(e);
      if (jt(t))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[Fe]; )
        e[Fe] = !0, this.walkSync(e);
      if (this.listeners.OnceExit)
        if (e.type === "document")
          for (let t of e.nodes)
            this.visitSync(this.listeners.OnceExit, t);
        else
          this.visitSync(this.listeners.OnceExit, e);
    }
    return this.result;
  }
  then(e, t) {
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || mu(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this.css;
  }
  visitSync(e, t) {
    for (let [r, s] of e) {
      this.result.lastPlugin = r;
      let i;
      try {
        i = s(t, this.helpers);
      } catch (n) {
        throw this.handleError(n, t.proxyOf);
      }
      if (t.type !== "root" && t.type !== "document" && !t.parent)
        return !0;
      if (jt(i))
        throw this.getAsyncError();
    }
  }
  visitTick(e) {
    let t = e[e.length - 1], { node: r, visitors: s } = t;
    if (r.type !== "root" && r.type !== "document" && !r.parent) {
      e.pop();
      return;
    }
    if (s.length > 0 && t.visitorIndex < s.length) {
      let [n, a] = s[t.visitorIndex];
      t.visitorIndex += 1, t.visitorIndex === s.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = n;
      try {
        return a(r.toProxy(), this.helpers);
      } catch (C) {
        throw this.handleError(C, r);
      }
    }
    if (t.iterator !== 0) {
      let n = t.iterator, a;
      for (; a = r.nodes[r.indexes[n]]; )
        if (r.indexes[n] += 1, !a[Fe]) {
          a[Fe] = !0, e.push(H0(a));
          return;
        }
      t.iterator = 0, delete r.indexes[n];
    }
    let i = t.events;
    for (; t.eventIndex < i.length; ) {
      let n = i[t.eventIndex];
      if (t.eventIndex += 1, n === mt) {
        r.nodes && r.nodes.length && (r[Fe] = !0, t.iterator = r.getIterator());
        return;
      } else if (this.listeners[n]) {
        t.visitors = this.listeners[n];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[Fe] = !0;
    let t = QC(e);
    for (let r of t)
      if (r === mt)
        e.nodes && e.each((s) => {
          s[Fe] || this.walkSync(s);
        });
      else {
        let s = this.listeners[r];
        if (s && this.visitSync(s, e.toProxy()))
          return;
      }
  }
  warnings() {
    return this.sync().warnings();
  }
};
bt.registerPostcss = (B) => {
  E1 = B;
};
var XC = bt;
bt.default = bt;
du.registerLazyResult(bt);
fu.registerLazyResult(bt);
let wu = UC, yu = W1, xu = Q1, ku = _r, Au = WC, S1 = class {
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root)
      return this._root;
    let e, t = yu;
    try {
      e = t(this._css, this._opts);
    } catch (r) {
      this.error = r;
    }
    if (this.error)
      throw this.error;
    return this._root = e, e;
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
  constructor(e, t, r) {
    t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = r, this._map = void 0;
    let s = ku;
    this.result = new xu(this._processor, void 0, this._opts), this.result.css = t;
    let i = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return i.root;
      }
    });
    let n = new wu(s, void 0, this._opts, t);
    if (n.isMap()) {
      let [a, C] = n.generate();
      a && (this.result.css = a), C && (this.result.map = C);
    } else
      n.clearAnnotation(), this.result.css = n.css;
  }
  async() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  sync() {
    if (this.error) throw this.error;
    return this.result;
  }
  then(e, t) {
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || Au(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, t);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
};
var Eu = S1;
S1.default = S1;
let Su = U1, Iu = XC, ju = Eu, Ou = Yt, Ut = class {
  constructor(e = []) {
    this.version = "8.5.15", this.plugins = this.normalize(e);
  }
  normalize(e) {
    let t = [];
    for (let r of e)
      if (r.postcss === !0 ? r = r() : r.postcss && (r = r.postcss), typeof r == "object" && Array.isArray(r.plugins))
        t = t.concat(r.plugins);
      else if (typeof r == "object" && r.postcssPlugin)
        t.push(r);
      else if (typeof r == "function")
        t.push(r);
      else if (typeof r == "object" && (r.parse || r.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
      } else
        throw new Error(r + " is not a PostCSS plugin");
    return t;
  }
  process(e, t = {}) {
    return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax ? new ju(this, e, t) : new Iu(this, e, t);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var Fu = Ut;
Ut.default = Ut;
Ou.registerProcessor(Ut);
Su.registerProcessor(Ut);
let ZC = q1, $C = tB, Ru = rt, Mu = J1, _C = rB, ea = U1, Pu = Gl, Gu = BB, Lu = XC, Nu = HC, Hu = eB, Ku = W1, Y1 = Fu, Ju = Q1, ta = Yt, ra = V1, Tu = _r, zu = VC;
function X(...B) {
  return B.length === 1 && Array.isArray(B[0]) && (B = B[0]), new Y1(B);
}
X.plugin = function(e, t) {
  let r = !1;
  function s(...n) {
    console && console.warn && !r && (r = !0, console.warn(
      e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let a = t(...n);
    return a.postcssPlugin = e, a.postcssVersion = new Y1().version, a;
  }
  let i;
  return Object.defineProperty(s, "postcss", {
    get() {
      return i || (i = s()), i;
    }
  }), s.process = function(n, a, C) {
    return X([s(C)]).process(n, a);
  }, s;
};
X.stringify = Tu;
X.parse = Ku;
X.fromJSON = Pu;
X.list = Nu;
X.comment = (B) => new $C(B);
X.atRule = (B) => new ZC(B);
X.decl = (B) => new _C(B);
X.rule = (B) => new ra(B);
X.root = (B) => new ta(B);
X.document = (B) => new ea(B);
X.CssSyntaxError = Mu;
X.Declaration = _C;
X.Container = Ru;
X.Processor = Y1;
X.Document = ea;
X.Comment = $C;
X.Warning = zu;
X.AtRule = ZC;
X.Result = Ju;
X.Input = Gu;
X.Rule = ra;
X.Root = ta;
X.Node = Hu;
Lu.registerPostcss(X);
var te = X;
X.default = X;
const qu = te.stringify, Uu = te.fromJSON, Vu = te.plugin, Wu = te.parse, Qu = te.list, Yu = te.document, Xu = te.comment, Zu = te.atRule, $u = te.rule, _u = te.decl, ef = te.root, tf = te.CssSyntaxError, rf = te.Declaration, Bf = te.Container, sf = te.Processor, nf = te.Document, Cf = te.Comment, af = te.Warning, of = te.AtRule, lf = te.Result, uf = te.Input, ff = te.Rule, cf = te.Root, Df = te.Node, df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AtRule: of,
  Comment: Cf,
  Container: Bf,
  CssSyntaxError: tf,
  Declaration: rf,
  Document: nf,
  Input: uf,
  Node: Df,
  Processor: sf,
  Result: lf,
  Root: cf,
  Rule: ff,
  Warning: af,
  atRule: Zu,
  comment: Xu,
  decl: _u,
  default: te,
  document: Yu,
  fromJSON: Uu,
  list: Qu,
  parse: Wu,
  plugin: Vu,
  root: ef,
  rule: $u,
  stringify: qu
}, Symbol.toStringTag, { value: "Module" }));
var Rr = {};
const pf = { chrome: { releases: [["1", "2008-12-11", "r", "w", "528"], ["2", "2009-05-21", "r", "w", "530"], ["3", "2009-09-15", "r", "w", "532"], ["4", "2010-01-25", "r", "w", "532.5"], ["5", "2010-05-25", "r", "w", "533"], ["6", "2010-09-02", "r", "w", "534.3"], ["7", "2010-10-19", "r", "w", "534.7"], ["8", "2010-12-02", "r", "w", "534.10"], ["9", "2011-02-03", "r", "w", "534.13"], ["10", "2011-03-08", "r", "w", "534.16"], ["11", "2011-04-27", "r", "w", "534.24"], ["12", "2011-06-07", "r", "w", "534.30"], ["13", "2011-08-02", "r", "w", "535.1"], ["14", "2011-09-16", "r", "w", "535.1"], ["15", "2011-10-25", "r", "w", "535.2"], ["16", "2011-12-13", "r", "w", "535.7"], ["17", "2012-02-08", "r", "w", "535.11"], ["18", "2012-03-28", "r", "w", "535.19"], ["19", "2012-05-15", "r", "w", "536.5"], ["20", "2012-06-26", "r", "w", "536.10"], ["21", "2012-07-31", "r", "w", "537.1"], ["22", "2012-09-25", "r", "w", "537.4"], ["23", "2012-11-06", "r", "w", "537.11"], ["24", "2013-01-10", "r", "w", "537.17"], ["25", "2013-02-21", "r", "w", "537.22"], ["26", "2013-03-26", "r", "w", "537.31"], ["27", "2013-05-21", "r", "w", "537.36"], ["28", "2013-07-09", "r", "b", "28"], ["29", "2013-08-20", "r", "b", "29"], ["30", "2013-10-01", "r", "b", "30"], ["31", "2013-11-12", "r", "b", "31"], ["32", "2014-01-14", "r", "b", "32"], ["33", "2014-02-20", "r", "b", "33"], ["34", "2014-04-08", "r", "b", "34"], ["35", "2014-05-20", "r", "b", "35"], ["36", "2014-07-16", "r", "b", "36"], ["37", "2014-08-26", "r", "b", "37"], ["38", "2014-10-07", "r", "b", "38"], ["39", "2014-11-18", "r", "b", "39"], ["40", "2015-01-21", "r", "b", "40"], ["41", "2015-03-03", "r", "b", "41"], ["42", "2015-04-14", "r", "b", "42"], ["43", "2015-05-19", "r", "b", "43"], ["44", "2015-07-21", "r", "b", "44"], ["45", "2015-09-01", "r", "b", "45"], ["46", "2015-10-13", "r", "b", "46"], ["47", "2015-12-01", "r", "b", "47"], ["48", "2016-01-20", "r", "b", "48"], ["49", "2016-03-02", "r", "b", "49"], ["50", "2016-04-13", "r", "b", "50"], ["51", "2016-05-25", "r", "b", "51"], ["52", "2016-07-20", "r", "b", "52"], ["53", "2016-08-31", "r", "b", "53"], ["54", "2016-10-12", "r", "b", "54"], ["55", "2016-12-01", "r", "b", "55"], ["56", "2017-01-25", "r", "b", "56"], ["57", "2017-03-09", "r", "b", "57"], ["58", "2017-04-19", "r", "b", "58"], ["59", "2017-06-05", "r", "b", "59"], ["60", "2017-07-25", "r", "b", "60"], ["61", "2017-09-05", "r", "b", "61"], ["62", "2017-10-17", "r", "b", "62"], ["63", "2017-12-06", "r", "b", "63"], ["64", "2018-01-23", "r", "b", "64"], ["65", "2018-03-06", "r", "b", "65"], ["66", "2018-04-17", "r", "b", "66"], ["67", "2018-05-29", "r", "b", "67"], ["68", "2018-07-24", "r", "b", "68"], ["69", "2018-09-04", "r", "b", "69"], ["70", "2018-10-16", "r", "b", "70"], ["71", "2018-12-04", "r", "b", "71"], ["72", "2019-01-29", "r", "b", "72"], ["73", "2019-03-12", "r", "b", "73"], ["74", "2019-04-23", "r", "b", "74"], ["75", "2019-06-04", "r", "b", "75"], ["76", "2019-07-30", "r", "b", "76"], ["77", "2019-09-10", "r", "b", "77"], ["78", "2019-10-22", "r", "b", "78"], ["79", "2019-12-10", "r", "b", "79"], ["80", "2020-02-04", "r", "b", "80"], ["81", "2020-04-07", "r", "b", "81"], ["83", "2020-05-19", "r", "b", "83"], ["84", "2020-07-27", "r", "b", "84"], ["85", "2020-08-25", "r", "b", "85"], ["86", "2020-10-20", "r", "b", "86"], ["87", "2020-11-17", "r", "b", "87"], ["88", "2021-01-19", "r", "b", "88"], ["89", "2021-03-02", "r", "b", "89"], ["90", "2021-04-13", "r", "b", "90"], ["91", "2021-05-25", "r", "b", "91"], ["92", "2021-07-20", "r", "b", "92"], ["93", "2021-08-31", "r", "b", "93"], ["94", "2021-09-21", "r", "b", "94"], ["95", "2021-10-19", "r", "b", "95"], ["96", "2021-11-15", "r", "b", "96"], ["97", "2022-01-04", "r", "b", "97"], ["98", "2022-02-01", "r", "b", "98"], ["99", "2022-03-01", "r", "b", "99"], ["100", "2022-03-29", "r", "b", "100"], ["101", "2022-04-26", "r", "b", "101"], ["102", "2022-05-24", "r", "b", "102"], ["103", "2022-06-21", "r", "b", "103"], ["104", "2022-08-02", "r", "b", "104"], ["105", "2022-09-02", "r", "b", "105"], ["106", "2022-09-27", "r", "b", "106"], ["107", "2022-10-25", "r", "b", "107"], ["108", "2022-11-29", "r", "b", "108"], ["109", "2023-01-10", "r", "b", "109"], ["110", "2023-02-07", "r", "b", "110"], ["111", "2023-03-07", "r", "b", "111"], ["112", "2023-04-04", "r", "b", "112"], ["113", "2023-05-02", "r", "b", "113"], ["114", "2023-05-30", "r", "b", "114"], ["115", "2023-07-18", "r", "b", "115"], ["116", "2023-08-15", "r", "b", "116"], ["117", "2023-09-12", "r", "b", "117"], ["118", "2023-10-10", "r", "b", "118"], ["119", "2023-10-31", "r", "b", "119"], ["120", "2023-12-05", "r", "b", "120"], ["121", "2024-01-23", "r", "b", "121"], ["122", "2024-02-20", "r", "b", "122"], ["123", "2024-03-19", "r", "b", "123"], ["124", "2024-04-16", "r", "b", "124"], ["125", "2024-05-14", "r", "b", "125"], ["126", "2024-06-11", "r", "b", "126"], ["127", "2024-07-23", "r", "b", "127"], ["128", "2024-08-20", "r", "b", "128"], ["129", "2024-09-17", "r", "b", "129"], ["130", "2024-10-15", "r", "b", "130"], ["131", "2024-11-12", "r", "b", "131"], ["132", "2025-01-14", "r", "b", "132"], ["133", "2025-02-04", "r", "b", "133"], ["134", "2025-03-04", "r", "b", "134"], ["135", "2025-04-01", "r", "b", "135"], ["136", "2025-04-29", "r", "b", "136"], ["137", "2025-05-27", "r", "b", "137"], ["138", "2025-06-24", "r", "b", "138"], ["139", "2025-08-05", "r", "b", "139"], ["140", "2025-09-02", "r", "b", "140"], ["141", "2025-09-30", "r", "b", "141"], ["142", "2025-10-28", "r", "b", "142"], ["143", "2025-12-02", "r", "b", "143"], ["144", "2026-01-13", "r", "b", "144"], ["145", "2026-02-10", "r", "b", "145"], ["146", "2026-03-10", "r", "b", "146"], ["147", "2026-04-07", "r", "b", "147"], ["148", "2026-05-05", "r", "b", "148"], ["149", "2026-06-02", "c", "b", "149"], ["150", "2026-06-30", "b", "b", "150"], ["151", "2026-07-28", "n", "b", "151"], ["152", null, "p", "b", "152"]] }, chrome_android: { releases: [["18", "2012-06-27", "r", "w", "535.19"], ["25", "2013-02-27", "r", "w", "537.22"], ["26", "2013-04-03", "r", "w", "537.31"], ["27", "2013-05-22", "r", "w", "537.36"], ["28", "2013-07-10", "r", "b", "28"], ["29", "2013-08-21", "r", "b", "29"], ["30", "2013-10-02", "r", "b", "30"], ["31", "2013-11-14", "r", "b", "31"], ["32", "2014-01-15", "r", "b", "32"], ["33", "2014-02-26", "r", "b", "33"], ["34", "2014-04-02", "r", "b", "34"], ["35", "2014-05-20", "r", "b", "35"], ["36", "2014-07-16", "r", "b", "36"], ["37", "2014-09-03", "r", "b", "37"], ["38", "2014-10-08", "r", "b", "38"], ["39", "2014-11-12", "r", "b", "39"], ["40", "2015-01-21", "r", "b", "40"], ["41", "2015-03-11", "r", "b", "41"], ["42", "2015-04-15", "r", "b", "42"], ["43", "2015-05-27", "r", "b", "43"], ["44", "2015-07-29", "r", "b", "44"], ["45", "2015-09-01", "r", "b", "45"], ["46", "2015-10-14", "r", "b", "46"], ["47", "2015-12-02", "r", "b", "47"], ["48", "2016-01-26", "r", "b", "48"], ["49", "2016-03-09", "r", "b", "49"], ["50", "2016-04-13", "r", "b", "50"], ["51", "2016-06-08", "r", "b", "51"], ["52", "2016-07-27", "r", "b", "52"], ["53", "2016-09-07", "r", "b", "53"], ["54", "2016-10-19", "r", "b", "54"], ["55", "2016-12-06", "r", "b", "55"], ["56", "2017-02-01", "r", "b", "56"], ["57", "2017-03-16", "r", "b", "57"], ["58", "2017-04-25", "r", "b", "58"], ["59", "2017-06-06", "r", "b", "59"], ["60", "2017-08-01", "r", "b", "60"], ["61", "2017-09-05", "r", "b", "61"], ["62", "2017-10-24", "r", "b", "62"], ["63", "2017-12-05", "r", "b", "63"], ["64", "2018-01-23", "r", "b", "64"], ["65", "2018-03-06", "r", "b", "65"], ["66", "2018-04-17", "r", "b", "66"], ["67", "2018-05-31", "r", "b", "67"], ["68", "2018-07-24", "r", "b", "68"], ["69", "2018-09-04", "r", "b", "69"], ["70", "2018-10-17", "r", "b", "70"], ["71", "2018-12-04", "r", "b", "71"], ["72", "2019-01-29", "r", "b", "72"], ["73", "2019-03-12", "r", "b", "73"], ["74", "2019-04-24", "r", "b", "74"], ["75", "2019-06-04", "r", "b", "75"], ["76", "2019-07-30", "r", "b", "76"], ["77", "2019-09-10", "r", "b", "77"], ["78", "2019-10-22", "r", "b", "78"], ["79", "2019-12-17", "r", "b", "79"], ["80", "2020-02-04", "r", "b", "80"], ["81", "2020-04-07", "r", "b", "81"], ["83", "2020-05-19", "r", "b", "83"], ["84", "2020-07-27", "r", "b", "84"], ["85", "2020-08-25", "r", "b", "85"], ["86", "2020-10-20", "r", "b", "86"], ["87", "2020-11-17", "r", "b", "87"], ["88", "2021-01-19", "r", "b", "88"], ["89", "2021-03-02", "r", "b", "89"], ["90", "2021-04-13", "r", "b", "90"], ["91", "2021-05-25", "r", "b", "91"], ["92", "2021-07-20", "r", "b", "92"], ["93", "2021-08-31", "r", "b", "93"], ["94", "2021-09-21", "r", "b", "94"], ["95", "2021-10-19", "r", "b", "95"], ["96", "2021-11-15", "r", "b", "96"], ["97", "2022-01-04", "r", "b", "97"], ["98", "2022-02-01", "r", "b", "98"], ["99", "2022-03-01", "r", "b", "99"], ["100", "2022-03-29", "r", "b", "100"], ["101", "2022-04-26", "r", "b", "101"], ["102", "2022-05-24", "r", "b", "102"], ["103", "2022-06-21", "r", "b", "103"], ["104", "2022-08-02", "r", "b", "104"], ["105", "2022-09-02", "r", "b", "105"], ["106", "2022-09-27", "r", "b", "106"], ["107", "2022-10-25", "r", "b", "107"], ["108", "2022-11-29", "r", "b", "108"], ["109", "2023-01-10", "r", "b", "109"], ["110", "2023-02-07", "r", "b", "110"], ["111", "2023-03-07", "r", "b", "111"], ["112", "2023-04-04", "r", "b", "112"], ["113", "2023-05-02", "r", "b", "113"], ["114", "2023-05-30", "r", "b", "114"], ["115", "2023-07-21", "r", "b", "115"], ["116", "2023-08-15", "r", "b", "116"], ["117", "2023-09-12", "r", "b", "117"], ["118", "2023-10-10", "r", "b", "118"], ["119", "2023-10-31", "r", "b", "119"], ["120", "2023-12-05", "r", "b", "120"], ["121", "2024-01-23", "r", "b", "121"], ["122", "2024-02-20", "r", "b", "122"], ["123", "2024-03-19", "r", "b", "123"], ["124", "2024-04-16", "r", "b", "124"], ["125", "2024-05-14", "r", "b", "125"], ["126", "2024-06-11", "r", "b", "126"], ["127", "2024-07-23", "r", "b", "127"], ["128", "2024-08-20", "r", "b", "128"], ["129", "2024-09-17", "r", "b", "129"], ["130", "2024-10-15", "r", "b", "130"], ["131", "2024-11-12", "r", "b", "131"], ["132", "2025-01-14", "r", "b", "132"], ["133", "2025-02-04", "r", "b", "133"], ["134", "2025-03-04", "r", "b", "134"], ["135", "2025-04-01", "r", "b", "135"], ["136", "2025-04-29", "r", "b", "136"], ["137", "2025-05-27", "r", "b", "137"], ["138", "2025-06-24", "r", "b", "138"], ["139", "2025-08-05", "r", "b", "139"], ["140", "2025-09-02", "r", "b", "140"], ["141", "2025-09-30", "r", "b", "141"], ["142", "2025-10-28", "r", "b", "142"], ["143", "2025-12-02", "r", "b", "143"], ["144", "2026-01-13", "r", "b", "144"], ["145", "2026-02-10", "r", "b", "145"], ["146", "2026-03-10", "r", "b", "146"], ["147", "2026-04-07", "r", "b", "147"], ["148", "2026-05-05", "r", "b", "148"], ["149", "2026-06-02", "c", "b", "149"], ["150", "2026-06-30", "b", "b", "150"], ["151", "2026-07-28", "n", "b", "151"], ["152", null, "p", "b", "152"]] }, edge: { releases: [["12", "2015-07-29", "r", null, "12"], ["13", "2015-11-12", "r", null, "13"], ["14", "2016-08-02", "r", null, "14"], ["15", "2017-04-05", "r", null, "15"], ["16", "2017-10-17", "r", null, "16"], ["17", "2018-04-30", "r", null, "17"], ["18", "2018-10-02", "r", null, "18"], ["79", "2020-01-15", "r", "b", "79"], ["80", "2020-02-07", "r", "b", "80"], ["81", "2020-04-13", "r", "b", "81"], ["83", "2020-05-21", "r", "b", "83"], ["84", "2020-07-16", "r", "b", "84"], ["85", "2020-08-27", "r", "b", "85"], ["86", "2020-10-09", "r", "b", "86"], ["87", "2020-11-19", "r", "b", "87"], ["88", "2021-01-21", "r", "b", "88"], ["89", "2021-03-04", "r", "b", "89"], ["90", "2021-04-15", "r", "b", "90"], ["91", "2021-05-27", "r", "b", "91"], ["92", "2021-07-22", "r", "b", "92"], ["93", "2021-09-02", "r", "b", "93"], ["94", "2021-09-24", "r", "b", "94"], ["95", "2021-10-21", "r", "b", "95"], ["96", "2021-11-19", "r", "b", "96"], ["97", "2022-01-06", "r", "b", "97"], ["98", "2022-02-03", "r", "b", "98"], ["99", "2022-03-03", "r", "b", "99"], ["100", "2022-04-01", "r", "b", "100"], ["101", "2022-04-28", "r", "b", "101"], ["102", "2022-05-31", "r", "b", "102"], ["103", "2022-06-23", "r", "b", "103"], ["104", "2022-08-05", "r", "b", "104"], ["105", "2022-09-01", "r", "b", "105"], ["106", "2022-10-03", "r", "b", "106"], ["107", "2022-10-27", "r", "b", "107"], ["108", "2022-12-05", "r", "b", "108"], ["109", "2023-01-12", "r", "b", "109"], ["110", "2023-02-09", "r", "b", "110"], ["111", "2023-03-13", "r", "b", "111"], ["112", "2023-04-06", "r", "b", "112"], ["113", "2023-05-05", "r", "b", "113"], ["114", "2023-06-02", "r", "b", "114"], ["115", "2023-07-21", "r", "b", "115"], ["116", "2023-08-21", "r", "b", "116"], ["117", "2023-09-15", "r", "b", "117"], ["118", "2023-10-13", "r", "b", "118"], ["119", "2023-11-02", "r", "b", "119"], ["120", "2023-12-07", "r", "b", "120"], ["121", "2024-01-25", "r", "b", "121"], ["122", "2024-02-23", "r", "b", "122"], ["123", "2024-03-22", "r", "b", "123"], ["124", "2024-04-18", "r", "b", "124"], ["125", "2024-05-17", "r", "b", "125"], ["126", "2024-06-13", "r", "b", "126"], ["127", "2024-07-25", "r", "b", "127"], ["128", "2024-08-22", "r", "b", "128"], ["129", "2024-09-19", "r", "b", "129"], ["130", "2024-10-17", "r", "b", "130"], ["131", "2024-11-14", "r", "b", "131"], ["132", "2025-01-17", "r", "b", "132"], ["133", "2025-02-06", "r", "b", "133"], ["134", "2025-03-06", "r", "b", "134"], ["135", "2025-04-04", "r", "b", "135"], ["136", "2025-05-01", "r", "b", "136"], ["137", "2025-05-29", "r", "b", "137"], ["138", "2025-06-26", "r", "b", "138"], ["139", "2025-08-07", "r", "b", "139"], ["140", "2025-09-05", "r", "b", "140"], ["141", "2025-10-03", "r", "b", "141"], ["142", "2025-10-31", "r", "b", "142"], ["143", "2025-12-05", "r", "b", "143"], ["144", "2026-01-21", "r", "b", "144"], ["145", "2026-02-14", "r", "b", "145"], ["146", "2026-03-13", "r", "b", "146"], ["147", "2026-04-10", "r", "b", "147"], ["148", "2026-05-07", "r", "b", "148"], ["149", "2026-06-04", "c", "b", "149"], ["150", "2026-07-02", "b", "b", "150"], ["151", "2026-07-30", "n", "b", "151"], ["152", "2026-08-27", "p", "b", "152"]] }, firefox: { releases: [["1", "2004-11-09", "r", "g", "1.7"], ["2", "2006-10-24", "r", "g", "1.8.1"], ["3", "2008-06-17", "r", "g", "1.9"], ["4", "2011-03-22", "r", "g", "2"], ["5", "2011-06-21", "r", "g", "5"], ["6", "2011-08-16", "r", "g", "6"], ["7", "2011-09-27", "r", "g", "7"], ["8", "2011-11-08", "r", "g", "8"], ["9", "2011-12-20", "r", "g", "9"], ["10", "2012-01-31", "r", "g", "10"], ["11", "2012-03-13", "r", "g", "11"], ["12", "2012-04-24", "r", "g", "12"], ["13", "2012-06-05", "r", "g", "13"], ["14", "2012-07-17", "r", "g", "14"], ["15", "2012-08-28", "r", "g", "15"], ["16", "2012-10-09", "r", "g", "16"], ["17", "2012-11-20", "r", "g", "17"], ["18", "2013-01-08", "r", "g", "18"], ["19", "2013-02-19", "r", "g", "19"], ["20", "2013-04-02", "r", "g", "20"], ["21", "2013-05-14", "r", "g", "21"], ["22", "2013-06-25", "r", "g", "22"], ["23", "2013-08-06", "r", "g", "23"], ["24", "2013-09-17", "r", "g", "24"], ["25", "2013-10-29", "r", "g", "25"], ["26", "2013-12-10", "r", "g", "26"], ["27", "2014-02-04", "r", "g", "27"], ["28", "2014-03-18", "r", "g", "28"], ["29", "2014-04-29", "r", "g", "29"], ["30", "2014-06-10", "r", "g", "30"], ["31", "2014-07-22", "r", "g", "31"], ["32", "2014-09-02", "r", "g", "32"], ["33", "2014-10-14", "r", "g", "33"], ["34", "2014-12-01", "r", "g", "34"], ["35", "2015-01-13", "r", "g", "35"], ["36", "2015-02-24", "r", "g", "36"], ["37", "2015-03-31", "r", "g", "37"], ["38", "2015-05-12", "r", "g", "38"], ["39", "2015-07-02", "r", "g", "39"], ["40", "2015-08-11", "r", "g", "40"], ["41", "2015-09-22", "r", "g", "41"], ["42", "2015-11-03", "r", "g", "42"], ["43", "2015-12-15", "r", "g", "43"], ["44", "2016-01-26", "r", "g", "44"], ["45", "2016-03-08", "r", "g", "45"], ["46", "2016-04-26", "r", "g", "46"], ["47", "2016-06-07", "r", "g", "47"], ["48", "2016-08-02", "r", "g", "48"], ["49", "2016-09-20", "r", "g", "49"], ["50", "2016-11-15", "r", "g", "50"], ["51", "2017-01-24", "r", "g", "51"], ["52", "2017-03-07", "r", "g", "52"], ["53", "2017-04-19", "r", "g", "53"], ["54", "2017-06-13", "r", "g", "54"], ["55", "2017-08-08", "r", "g", "55"], ["56", "2017-09-28", "r", "g", "56"], ["57", "2017-11-14", "r", "g", "57"], ["58", "2018-01-23", "r", "g", "58"], ["59", "2018-03-13", "r", "g", "59"], ["60", "2018-05-09", "r", "g", "60"], ["61", "2018-06-26", "r", "g", "61"], ["62", "2018-09-05", "r", "g", "62"], ["63", "2018-10-23", "r", "g", "63"], ["64", "2018-12-11", "r", "g", "64"], ["65", "2019-01-29", "r", "g", "65"], ["66", "2019-03-19", "r", "g", "66"], ["67", "2019-05-21", "r", "g", "67"], ["68", "2019-07-09", "r", "g", "68"], ["69", "2019-09-03", "r", "g", "69"], ["70", "2019-10-22", "r", "g", "70"], ["71", "2019-12-10", "r", "g", "71"], ["72", "2020-01-07", "r", "g", "72"], ["73", "2020-02-11", "r", "g", "73"], ["74", "2020-03-10", "r", "g", "74"], ["75", "2020-04-07", "r", "g", "75"], ["76", "2020-05-05", "r", "g", "76"], ["77", "2020-06-02", "r", "g", "77"], ["78", "2020-06-30", "r", "g", "78"], ["79", "2020-07-28", "r", "g", "79"], ["80", "2020-08-25", "r", "g", "80"], ["81", "2020-09-22", "r", "g", "81"], ["82", "2020-10-20", "r", "g", "82"], ["83", "2020-11-17", "r", "g", "83"], ["84", "2020-12-15", "r", "g", "84"], ["85", "2021-01-26", "r", "g", "85"], ["86", "2021-02-23", "r", "g", "86"], ["87", "2021-03-23", "r", "g", "87"], ["88", "2021-04-19", "r", "g", "88"], ["89", "2021-06-01", "r", "g", "89"], ["90", "2021-07-13", "r", "g", "90"], ["91", "2021-08-10", "r", "g", "91"], ["92", "2021-09-07", "r", "g", "92"], ["93", "2021-10-05", "r", "g", "93"], ["94", "2021-11-02", "r", "g", "94"], ["95", "2021-12-07", "r", "g", "95"], ["96", "2022-01-11", "r", "g", "96"], ["97", "2022-02-08", "r", "g", "97"], ["98", "2022-03-08", "r", "g", "98"], ["99", "2022-04-05", "r", "g", "99"], ["100", "2022-05-03", "r", "g", "100"], ["101", "2022-05-31", "r", "g", "101"], ["102", "2022-06-28", "r", "g", "102"], ["103", "2022-07-26", "r", "g", "103"], ["104", "2022-08-23", "r", "g", "104"], ["105", "2022-09-20", "r", "g", "105"], ["106", "2022-10-18", "r", "g", "106"], ["107", "2022-11-15", "r", "g", "107"], ["108", "2022-12-13", "r", "g", "108"], ["109", "2023-01-17", "r", "g", "109"], ["110", "2023-02-14", "r", "g", "110"], ["111", "2023-03-14", "r", "g", "111"], ["112", "2023-04-11", "r", "g", "112"], ["113", "2023-05-09", "r", "g", "113"], ["114", "2023-06-06", "r", "g", "114"], ["115", "2023-07-04", "r", "g", "115"], ["116", "2023-08-01", "r", "g", "116"], ["117", "2023-08-29", "r", "g", "117"], ["118", "2023-09-26", "r", "g", "118"], ["119", "2023-10-24", "r", "g", "119"], ["120", "2023-11-21", "r", "g", "120"], ["121", "2023-12-19", "r", "g", "121"], ["122", "2024-01-23", "r", "g", "122"], ["123", "2024-02-20", "r", "g", "123"], ["124", "2024-03-19", "r", "g", "124"], ["125", "2024-04-16", "r", "g", "125"], ["126", "2024-05-14", "r", "g", "126"], ["127", "2024-06-11", "r", "g", "127"], ["128", "2024-07-09", "r", "g", "128"], ["129", "2024-08-06", "r", "g", "129"], ["130", "2024-09-03", "r", "g", "130"], ["131", "2024-10-01", "r", "g", "131"], ["132", "2024-10-29", "r", "g", "132"], ["133", "2024-11-26", "r", "g", "133"], ["134", "2025-01-07", "r", "g", "134"], ["135", "2025-02-04", "r", "g", "135"], ["136", "2025-03-04", "r", "g", "136"], ["137", "2025-04-01", "r", "g", "137"], ["138", "2025-04-29", "r", "g", "138"], ["139", "2025-05-27", "r", "g", "139"], ["140", "2025-06-24", "e", "g", "140"], ["141", "2025-07-22", "r", "g", "141"], ["142", "2025-08-19", "r", "g", "142"], ["143", "2025-09-16", "r", "g", "143"], ["144", "2025-10-14", "r", "g", "144"], ["145", "2025-11-11", "r", "g", "145"], ["146", "2025-12-09", "r", "g", "146"], ["147", "2026-01-13", "r", "g", "147"], ["148", "2026-02-24", "r", "g", "148"], ["149", "2026-03-24", "r", "g", "149"], ["150", "2026-04-21", "r", "g", "150"], ["151", "2026-05-19", "c", "g", "151"], ["152", "2026-06-16", "b", "g", "152"], ["153", "2026-07-21", "n", "g", "153"], ["154", "2026-08-18", "p", "g", "154"], ["1.5", "2005-11-29", "r", "g", "1.8"], ["3.5", "2009-06-30", "r", "g", "1.9.1"], ["3.6", "2010-01-21", "r", "g", "1.9.2"]] }, firefox_android: { releases: [["4", "2011-03-29", "r", "g", "2"], ["5", "2011-06-21", "r", "g", "5"], ["6", "2011-08-16", "r", "g", "6"], ["7", "2011-09-27", "r", "g", "7"], ["8", "2011-11-08", "r", "g", "8"], ["9", "2011-12-21", "r", "g", "9"], ["10", "2012-01-31", "r", "g", "10"], ["14", "2012-06-26", "r", "g", "14"], ["15", "2012-08-28", "r", "g", "15"], ["16", "2012-10-09", "r", "g", "16"], ["17", "2012-11-20", "r", "g", "17"], ["18", "2013-01-08", "r", "g", "18"], ["19", "2013-02-19", "r", "g", "19"], ["20", "2013-04-02", "r", "g", "20"], ["21", "2013-05-14", "r", "g", "21"], ["22", "2013-06-25", "r", "g", "22"], ["23", "2013-08-06", "r", "g", "23"], ["24", "2013-09-17", "r", "g", "24"], ["25", "2013-10-29", "r", "g", "25"], ["26", "2013-12-10", "r", "g", "26"], ["27", "2014-02-04", "r", "g", "27"], ["28", "2014-03-18", "r", "g", "28"], ["29", "2014-04-29", "r", "g", "29"], ["30", "2014-06-10", "r", "g", "30"], ["31", "2014-07-22", "r", "g", "31"], ["32", "2014-09-02", "r", "g", "32"], ["33", "2014-10-14", "r", "g", "33"], ["34", "2014-12-01", "r", "g", "34"], ["35", "2015-01-13", "r", "g", "35"], ["36", "2015-02-27", "r", "g", "36"], ["37", "2015-03-31", "r", "g", "37"], ["38", "2015-05-12", "r", "g", "38"], ["39", "2015-07-02", "r", "g", "39"], ["40", "2015-08-11", "r", "g", "40"], ["41", "2015-09-22", "r", "g", "41"], ["42", "2015-11-03", "r", "g", "42"], ["43", "2015-12-15", "r", "g", "43"], ["44", "2016-01-26", "r", "g", "44"], ["45", "2016-03-08", "r", "g", "45"], ["46", "2016-04-26", "r", "g", "46"], ["47", "2016-06-07", "r", "g", "47"], ["48", "2016-08-02", "r", "g", "48"], ["49", "2016-09-20", "r", "g", "49"], ["50", "2016-11-15", "r", "g", "50"], ["51", "2017-01-24", "r", "g", "51"], ["52", "2017-03-07", "r", "g", "52"], ["53", "2017-04-19", "r", "g", "53"], ["54", "2017-06-13", "r", "g", "54"], ["55", "2017-08-08", "r", "g", "55"], ["56", "2017-09-28", "r", "g", "56"], ["57", "2017-11-28", "r", "g", "57"], ["58", "2018-01-22", "r", "g", "58"], ["59", "2018-03-13", "r", "g", "59"], ["60", "2018-05-09", "r", "g", "60"], ["61", "2018-06-26", "r", "g", "61"], ["62", "2018-09-05", "r", "g", "62"], ["63", "2018-10-23", "r", "g", "63"], ["64", "2018-12-11", "r", "g", "64"], ["65", "2019-01-29", "r", "g", "65"], ["66", "2019-03-19", "r", "g", "66"], ["67", "2019-05-21", "r", "g", "67"], ["68", "2019-07-09", "r", "g", "68"], ["79", "2020-07-28", "r", "g", "79"], ["80", "2020-08-31", "r", "g", "80"], ["81", "2020-09-22", "r", "g", "81"], ["82", "2020-10-20", "r", "g", "82"], ["83", "2020-11-17", "r", "g", "83"], ["84", "2020-12-15", "r", "g", "84"], ["85", "2021-01-26", "r", "g", "85"], ["86", "2021-02-23", "r", "g", "86"], ["87", "2021-03-23", "r", "g", "87"], ["88", "2021-04-19", "r", "g", "88"], ["89", "2021-06-01", "r", "g", "89"], ["90", "2021-07-13", "r", "g", "90"], ["91", "2021-08-10", "r", "g", "91"], ["92", "2021-09-07", "r", "g", "92"], ["93", "2021-10-05", "r", "g", "93"], ["94", "2021-11-02", "r", "g", "94"], ["95", "2021-12-07", "r", "g", "95"], ["96", "2022-01-11", "r", "g", "96"], ["97", "2022-02-08", "r", "g", "97"], ["98", "2022-03-08", "r", "g", "98"], ["99", "2022-04-05", "r", "g", "99"], ["100", "2022-05-03", "r", "g", "100"], ["101", "2022-05-31", "r", "g", "101"], ["102", "2022-06-28", "r", "g", "102"], ["103", "2022-07-26", "r", "g", "103"], ["104", "2022-08-23", "r", "g", "104"], ["105", "2022-09-20", "r", "g", "105"], ["106", "2022-10-18", "r", "g", "106"], ["107", "2022-11-15", "r", "g", "107"], ["108", "2022-12-13", "r", "g", "108"], ["109", "2023-01-17", "r", "g", "109"], ["110", "2023-02-14", "r", "g", "110"], ["111", "2023-03-14", "r", "g", "111"], ["112", "2023-04-11", "r", "g", "112"], ["113", "2023-05-09", "r", "g", "113"], ["114", "2023-06-06", "r", "g", "114"], ["115", "2023-07-04", "r", "g", "115"], ["116", "2023-08-01", "r", "g", "116"], ["117", "2023-08-29", "r", "g", "117"], ["118", "2023-09-26", "r", "g", "118"], ["119", "2023-10-24", "r", "g", "119"], ["120", "2023-11-21", "r", "g", "120"], ["121", "2023-12-19", "r", "g", "121"], ["122", "2024-01-23", "r", "g", "122"], ["123", "2024-02-20", "r", "g", "123"], ["124", "2024-03-19", "r", "g", "124"], ["125", "2024-04-16", "r", "g", "125"], ["126", "2024-05-14", "r", "g", "126"], ["127", "2024-06-11", "r", "g", "127"], ["128", "2024-07-09", "r", "g", "128"], ["129", "2024-08-06", "r", "g", "129"], ["130", "2024-09-03", "r", "g", "130"], ["131", "2024-10-01", "r", "g", "131"], ["132", "2024-10-29", "r", "g", "132"], ["133", "2024-11-26", "r", "g", "133"], ["134", "2025-01-07", "r", "g", "134"], ["135", "2025-02-04", "r", "g", "135"], ["136", "2025-03-04", "r", "g", "136"], ["137", "2025-04-01", "r", "g", "137"], ["138", "2025-04-29", "r", "g", "138"], ["139", "2025-05-27", "r", "g", "139"], ["140", "2025-06-24", "e", "g", "140"], ["141", "2025-07-22", "r", "g", "141"], ["142", "2025-08-19", "r", "g", "142"], ["143", "2025-09-16", "r", "g", "143"], ["144", "2025-10-14", "r", "g", "144"], ["145", "2025-11-11", "r", "g", "145"], ["146", "2025-12-09", "r", "g", "146"], ["147", "2026-01-13", "r", "g", "147"], ["148", "2026-02-24", "r", "g", "148"], ["149", "2026-03-24", "r", "g", "149"], ["150", "2026-04-21", "r", "g", "150"], ["151", "2026-05-19", "c", "g", "151"], ["152", "2026-06-16", "b", "g", "152"], ["153", "2026-07-21", "n", "g", "153"], ["154", "2026-08-18", "p", "g", "154"]] }, opera: { releases: [["2", "1996-07-14", "r", null, null], ["3", "1997-12-01", "r", null, null], ["4", "2000-06-28", "r", null, null], ["5", "2000-12-06", "r", null, null], ["6", "2001-12-18", "r", null, null], ["7", "2003-01-28", "r", "p", "1"], ["8", "2005-04-19", "r", "p", "1"], ["9", "2006-06-20", "r", "p", "2"], ["10", "2009-09-01", "r", "p", "2.2"], ["11", "2010-12-16", "r", "p", "2.7"], ["12", "2012-06-14", "r", "p", "2.10"], ["15", "2013-07-02", "r", "b", "28"], ["16", "2013-08-27", "r", "b", "29"], ["17", "2013-10-08", "r", "b", "30"], ["18", "2013-11-19", "r", "b", "31"], ["19", "2014-01-28", "r", "b", "32"], ["20", "2014-03-04", "r", "b", "33"], ["21", "2014-05-06", "r", "b", "34"], ["22", "2014-06-03", "r", "b", "35"], ["23", "2014-07-22", "r", "b", "36"], ["24", "2014-09-02", "r", "b", "37"], ["25", "2014-10-15", "r", "b", "38"], ["26", "2014-12-03", "r", "b", "39"], ["27", "2015-01-27", "r", "b", "40"], ["28", "2015-03-10", "r", "b", "41"], ["29", "2015-04-28", "r", "b", "42"], ["30", "2015-06-09", "r", "b", "43"], ["31", "2015-08-04", "r", "b", "44"], ["32", "2015-09-15", "r", "b", "45"], ["33", "2015-10-27", "r", "b", "46"], ["34", "2015-12-08", "r", "b", "47"], ["35", "2016-02-02", "r", "b", "48"], ["36", "2016-03-15", "r", "b", "49"], ["37", "2016-05-04", "r", "b", "50"], ["38", "2016-06-08", "r", "b", "51"], ["39", "2016-08-02", "r", "b", "52"], ["40", "2016-09-20", "r", "b", "53"], ["41", "2016-10-25", "r", "b", "54"], ["42", "2016-12-13", "r", "b", "55"], ["43", "2017-02-07", "r", "b", "56"], ["44", "2017-03-21", "r", "b", "57"], ["45", "2017-05-10", "r", "b", "58"], ["46", "2017-06-22", "r", "b", "59"], ["47", "2017-08-09", "r", "b", "60"], ["48", "2017-09-27", "r", "b", "61"], ["49", "2017-11-08", "r", "b", "62"], ["50", "2018-01-04", "r", "b", "63"], ["51", "2018-02-07", "r", "b", "64"], ["52", "2018-03-22", "r", "b", "65"], ["53", "2018-05-10", "r", "b", "66"], ["54", "2018-06-28", "r", "b", "67"], ["55", "2018-08-16", "r", "b", "68"], ["56", "2018-09-25", "r", "b", "69"], ["57", "2018-11-28", "r", "b", "70"], ["58", "2019-01-23", "r", "b", "71"], ["60", "2019-04-09", "r", "b", "73"], ["62", "2019-06-27", "r", "b", "75"], ["63", "2019-08-20", "r", "b", "76"], ["64", "2019-10-07", "r", "b", "77"], ["65", "2019-11-13", "r", "b", "78"], ["66", "2020-01-07", "r", "b", "79"], ["67", "2020-03-03", "r", "b", "80"], ["68", "2020-04-22", "r", "b", "81"], ["69", "2020-06-24", "r", "b", "83"], ["70", "2020-07-27", "r", "b", "84"], ["71", "2020-09-15", "r", "b", "85"], ["72", "2020-10-21", "r", "b", "86"], ["73", "2020-12-09", "r", "b", "87"], ["74", "2021-02-02", "r", "b", "88"], ["75", "2021-03-24", "r", "b", "89"], ["76", "2021-04-28", "r", "b", "90"], ["77", "2021-06-09", "r", "b", "91"], ["78", "2021-08-03", "r", "b", "92"], ["79", "2021-09-14", "r", "b", "93"], ["80", "2021-10-05", "r", "b", "94"], ["81", "2021-11-04", "r", "b", "95"], ["82", "2021-12-02", "r", "b", "96"], ["83", "2022-01-19", "r", "b", "97"], ["84", "2022-02-16", "r", "b", "98"], ["85", "2022-03-23", "r", "b", "99"], ["86", "2022-04-20", "r", "b", "100"], ["87", "2022-05-17", "r", "b", "101"], ["88", "2022-06-08", "r", "b", "102"], ["89", "2022-07-07", "r", "b", "103"], ["90", "2022-08-18", "r", "b", "104"], ["91", "2022-09-14", "r", "b", "105"], ["92", "2022-10-19", "r", "b", "106"], ["93", "2022-11-17", "r", "b", "107"], ["94", "2022-12-15", "r", "b", "108"], ["95", "2023-02-01", "r", "b", "109"], ["96", "2023-02-22", "r", "b", "110"], ["97", "2023-03-22", "r", "b", "111"], ["98", "2023-04-20", "r", "b", "112"], ["99", "2023-05-16", "r", "b", "113"], ["100", "2023-06-29", "r", "b", "114"], ["101", "2023-07-26", "r", "b", "115"], ["102", "2023-08-23", "r", "b", "116"], ["103", "2023-10-03", "r", "b", "117"], ["104", "2023-10-23", "r", "b", "118"], ["105", "2023-11-14", "r", "b", "119"], ["106", "2023-12-19", "r", "b", "120"], ["107", "2024-02-07", "r", "b", "121"], ["108", "2024-03-05", "r", "b", "122"], ["109", "2024-03-27", "r", "b", "123"], ["110", "2024-05-14", "r", "b", "124"], ["111", "2024-06-12", "r", "b", "125"], ["112", "2024-07-11", "r", "b", "126"], ["113", "2024-08-22", "r", "b", "127"], ["114", "2024-09-25", "r", "b", "128"], ["115", "2024-11-27", "r", "b", "130"], ["116", "2025-01-08", "r", "b", "131"], ["117", "2025-02-13", "r", "b", "132"], ["118", "2025-04-15", "r", "b", "133"], ["119", "2025-05-13", "r", "b", "134"], ["120", "2025-07-02", "r", "b", "135"], ["121", "2025-08-27", "r", "b", "137"], ["122", "2025-09-11", "r", "b", "138"], ["123", "2025-10-28", "r", "b", "139"], ["124", "2025-11-13", "r", "b", "140"], ["125", "2025-12-04", "r", "b", "141"], ["126", "2026-01-08", "r", "b", "142"], ["127", "2026-02-02", "r", "b", "143"], ["128", "2026-02-26", "r", "b", "144"], ["129", "2026-03-18", "r", "b", "145"], ["130", "2026-04-08", "r", "b", "146"], ["131", "2026-04-29", "r", "b", "147"], ["132", "2026-05-28", "c", "b", "148"], ["133", null, "b", "b", "149"], ["134", null, "n", "b", "150"], ["10.1", "2009-11-23", "r", "p", "2.2"], ["10.5", "2010-03-02", "r", "p", "2.5"], ["10.6", "2010-07-01", "r", "p", "2.6"], ["11.1", "2011-04-12", "r", "p", "2.8"], ["11.5", "2011-06-28", "r", "p", "2.9"], ["11.6", "2011-12-06", "r", "p", "2.10"], ["12.1", "2012-11-20", "r", "p", "2.12"], ["3.5", "1998-11-18", "r", null, null], ["3.6", "1999-05-06", "r", null, null], ["5.1", "2001-04-10", "r", null, null], ["7.1", "2003-04-11", "r", "p", "1"], ["7.2", "2003-09-23", "r", "p", "1"], ["7.5", "2004-05-12", "r", "p", "1"], ["8.5", "2005-09-20", "r", "p", "1"], ["9.1", "2006-12-18", "r", "p", "2"], ["9.2", "2007-04-11", "r", "p", "2"], ["9.5", "2008-06-12", "r", "p", "2.1"], ["9.6", "2008-10-08", "r", "p", "2.1"]] }, opera_android: { releases: [["11", "2011-03-22", "r", "p", "2.7"], ["12", "2012-02-25", "r", "p", "2.10"], ["14", "2013-05-21", "r", "w", "537.31"], ["15", "2013-07-08", "r", "b", "28"], ["16", "2013-09-18", "r", "b", "29"], ["18", "2013-11-20", "r", "b", "31"], ["19", "2014-01-28", "r", "b", "32"], ["20", "2014-03-06", "r", "b", "33"], ["21", "2014-04-22", "r", "b", "34"], ["22", "2014-06-17", "r", "b", "35"], ["24", "2014-09-10", "r", "b", "37"], ["25", "2014-10-16", "r", "b", "38"], ["26", "2014-12-02", "r", "b", "39"], ["27", "2015-01-29", "r", "b", "40"], ["28", "2015-03-10", "r", "b", "41"], ["29", "2015-04-28", "r", "b", "42"], ["30", "2015-06-10", "r", "b", "43"], ["32", "2015-09-23", "r", "b", "45"], ["33", "2015-11-03", "r", "b", "46"], ["34", "2015-12-16", "r", "b", "47"], ["35", "2016-02-04", "r", "b", "48"], ["36", "2016-03-31", "r", "b", "49"], ["37", "2016-06-16", "r", "b", "50"], ["41", "2016-10-25", "r", "b", "54"], ["42", "2017-01-21", "r", "b", "55"], ["43", "2017-09-27", "r", "b", "59"], ["44", "2017-12-11", "r", "b", "60"], ["45", "2018-02-15", "r", "b", "61"], ["46", "2018-05-14", "r", "b", "63"], ["47", "2018-07-23", "r", "b", "66"], ["48", "2018-11-08", "r", "b", "69"], ["49", "2018-12-07", "r", "b", "70"], ["50", "2019-02-18", "r", "b", "71"], ["51", "2019-03-21", "r", "b", "72"], ["52", "2019-05-17", "r", "b", "73"], ["53", "2019-07-11", "r", "b", "74"], ["54", "2019-10-18", "r", "b", "76"], ["55", "2019-12-03", "r", "b", "77"], ["56", "2020-02-06", "r", "b", "78"], ["57", "2020-03-30", "r", "b", "80"], ["58", "2020-05-13", "r", "b", "81"], ["59", "2020-06-30", "r", "b", "83"], ["60", "2020-09-23", "r", "b", "85"], ["61", "2020-12-07", "r", "b", "86"], ["62", "2021-02-16", "r", "b", "87"], ["63", "2021-04-16", "r", "b", "89"], ["64", "2021-05-25", "r", "b", "91"], ["65", "2021-10-20", "r", "b", "92"], ["66", "2021-12-15", "r", "b", "94"], ["67", "2022-01-31", "r", "b", "96"], ["68", "2022-03-30", "r", "b", "99"], ["69", "2022-05-09", "r", "b", "100"], ["70", "2022-06-29", "r", "b", "102"], ["71", "2022-09-16", "r", "b", "104"], ["72", "2022-10-21", "r", "b", "106"], ["73", "2023-01-17", "r", "b", "108"], ["74", "2023-03-13", "r", "b", "110"], ["75", "2023-05-17", "r", "b", "112"], ["76", "2023-06-26", "r", "b", "114"], ["77", "2023-08-31", "r", "b", "115"], ["78", "2023-10-23", "r", "b", "117"], ["79", "2023-12-06", "r", "b", "119"], ["80", "2024-01-25", "r", "b", "120"], ["81", "2024-03-14", "r", "b", "122"], ["82", "2024-05-02", "r", "b", "124"], ["83", "2024-06-25", "r", "b", "126"], ["84", "2024-08-26", "r", "b", "127"], ["85", "2024-10-29", "r", "b", "128"], ["86", "2024-12-02", "r", "b", "130"], ["87", "2025-01-22", "r", "b", "132"], ["88", "2025-03-19", "r", "b", "134"], ["89", "2025-04-29", "r", "b", "135"], ["90", "2025-06-18", "r", "b", "137"], ["91", "2025-08-19", "r", "b", "139"], ["92", "2025-10-08", "r", "b", "140"], ["93", "2025-11-25", "r", "b", "142"], ["94", "2026-01-13", "r", "b", "143"], ["95", "2026-02-11", "r", "b", "144"], ["96", "2026-03-10", "r", "b", "145"], ["97", "2026-04-16", "r", "b", "146"], ["98", "2026-05-05", "c", "b", "147"], ["10.1", "2010-11-09", "r", "p", "2.5"], ["11.1", "2011-06-30", "r", "p", "2.8"], ["11.5", "2011-10-12", "r", "p", "2.9"], ["12.1", "2012-10-09", "r", "p", "2.11"]] }, safari: { releases: [["1", "2003-06-23", "r", "w", "85"], ["2", "2005-04-29", "r", "w", "412"], ["3", "2007-10-26", "r", "w", "523.10"], ["4", "2009-06-08", "r", "w", "530.17"], ["5", "2010-06-07", "r", "w", "533.16"], ["6", "2012-07-25", "r", "w", "536.25"], ["7", "2013-10-22", "r", "w", "537.71"], ["8", "2014-10-16", "r", "w", "538.35"], ["9", "2015-09-30", "r", "w", "601.1.56"], ["10", "2016-09-20", "r", "w", "602.1.50"], ["11", "2017-09-19", "r", "w", "604.2.4"], ["12", "2018-09-17", "r", "w", "606.1.36"], ["13", "2019-09-19", "r", "w", "608.2.11"], ["14", "2020-09-16", "r", "w", "610.1.28"], ["15", "2021-09-20", "r", "w", "612.1.27"], ["16", "2022-09-12", "r", "w", "614.1.25"], ["17", "2023-09-18", "r", "w", "616.1.27"], ["18", "2024-09-16", "r", "w", "619.1.26"], ["26", "2025-09-15", "r", "w", "622.1.22"], ["1.1", "2003-10-24", "r", "w", "100"], ["1.2", "2004-02-02", "r", "w", "125"], ["1.3", "2005-04-15", "r", "w", "312"], ["10.1", "2017-03-27", "r", "w", "603.2.1"], ["11.1", "2018-04-12", "r", "w", "605.1.33"], ["12.1", "2019-03-25", "r", "w", "607.1.40"], ["13.1", "2020-03-24", "r", "w", "609.1.20"], ["14.1", "2021-04-26", "r", "w", "611.1.21"], ["15.1", "2021-10-25", "r", "w", "612.2.9"], ["15.2", "2021-12-13", "r", "w", "612.3.6"], ["15.3", "2022-01-26", "r", "w", "612.4.9"], ["15.4", "2022-03-14", "r", "w", "613.1.17"], ["15.5", "2022-05-16", "r", "w", "613.2.7"], ["15.6", "2022-07-20", "r", "w", "613.3.9"], ["16.1", "2022-10-24", "r", "w", "614.2.9"], ["16.2", "2022-12-13", "r", "w", "614.3.7"], ["16.3", "2023-01-23", "r", "w", "614.4.6"], ["16.4", "2023-03-27", "r", "w", "615.1.26"], ["16.5", "2023-05-18", "r", "w", "615.2.9"], ["16.6", "2023-07-24", "r", "w", "615.3.12"], ["17.1", "2023-10-25", "r", "w", "616.2.9"], ["17.2", "2023-12-11", "r", "w", "617.1.17"], ["17.3", "2024-01-22", "r", "w", "617.2.4"], ["17.4", "2024-03-05", "r", "w", "618.1.15"], ["17.5", "2024-05-13", "r", "w", "618.2.12"], ["17.6", "2024-07-29", "r", "w", "618.3.11"], ["18.1", "2024-10-28", "r", "w", "619.2.8"], ["18.2", "2024-12-11", "r", "w", "620.1.16"], ["18.3", "2025-01-27", "r", "w", "620.2.4"], ["18.4", "2025-03-31", "r", "w", "621.1.15"], ["18.5", "2025-05-12", "r", "w", "621.2.5"], ["18.6", "2025-07-29", "r", "w", "621.3.11"], ["26.1", "2025-11-03", "r", "w", "622.2.11"], ["26.2", "2025-12-12", "r", "w", "623.1.14"], ["26.3", "2026-02-11", "r", "w", "623.2.7"], ["26.4", "2026-03-24", "r", "w", "624.1.16"], ["26.5", "2026-05-11", "c", "w", "624.2.5"], ["3.1", "2008-03-18", "r", "w", "525.13"], ["5.1", "2011-07-20", "r", "w", "534.48"], ["9.1", "2016-03-21", "r", "w", "601.5.17"]] }, safari_ios: { releases: [["1", "2007-06-29", "r", "w", "522.11"], ["2", "2008-07-11", "r", "w", "525.18"], ["3", "2009-06-17", "r", "w", "528.18"], ["4", "2010-06-21", "r", "w", "532.9"], ["5", "2011-10-12", "r", "w", "534.46"], ["6", "2012-09-10", "r", "w", "536.26"], ["7", "2013-09-18", "r", "w", "537.51"], ["8", "2014-09-17", "r", "w", "600.1.4"], ["9", "2015-09-16", "r", "w", "601.1.56"], ["10", "2016-09-13", "r", "w", "602.1.50"], ["11", "2017-09-19", "r", "w", "604.2.4"], ["12", "2018-09-17", "r", "w", "606.1.36"], ["13", "2019-09-19", "r", "w", "608.2.11"], ["14", "2020-09-16", "r", "w", "610.1.28"], ["15", "2021-09-20", "r", "w", "612.1.27"], ["16", "2022-09-12", "r", "w", "614.1.25"], ["17", "2023-09-18", "r", "w", "616.1.27"], ["18", "2024-09-16", "r", "w", "619.1.26"], ["26", "2025-09-15", "r", "w", "622.1.22"], ["10.3", "2017-03-27", "r", "w", "603.2.1"], ["11.3", "2018-03-29", "r", "w", "605.1.33"], ["12.2", "2019-03-25", "r", "w", "607.1.40"], ["13.4", "2020-03-24", "r", "w", "609.1.20"], ["14.5", "2021-04-26", "r", "w", "611.1.21"], ["15.1", "2021-10-25", "r", "w", "612.2.9"], ["15.2", "2021-12-13", "r", "w", "612.3.6"], ["15.3", "2022-01-26", "r", "w", "612.4.9"], ["15.4", "2022-03-14", "r", "w", "613.1.17"], ["15.5", "2022-05-16", "r", "w", "613.2.7"], ["15.6", "2022-07-20", "r", "w", "613.3.9"], ["16.1", "2022-10-24", "r", "w", "614.2.9"], ["16.2", "2022-12-13", "r", "w", "614.3.7"], ["16.3", "2023-01-23", "r", "w", "614.4.6"], ["16.4", "2023-03-27", "r", "w", "615.1.26"], ["16.5", "2023-05-18", "r", "w", "615.2.9"], ["16.6", "2023-07-24", "r", "w", "615.3.12"], ["17.1", "2023-10-25", "r", "w", "616.2.9"], ["17.2", "2023-12-11", "r", "w", "617.1.17"], ["17.3", "2024-01-22", "r", "w", "617.2.4"], ["17.4", "2024-03-05", "r", "w", "618.1.15"], ["17.5", "2024-05-13", "r", "w", "618.2.12"], ["17.6", "2024-07-29", "r", "w", "618.3.11"], ["18.1", "2024-10-28", "r", "w", "619.2.8"], ["18.2", "2024-12-11", "r", "w", "620.1.16"], ["18.3", "2025-01-27", "r", "w", "620.2.4"], ["18.4", "2025-03-31", "r", "w", "621.1.15"], ["18.5", "2025-05-12", "r", "w", "621.2.5"], ["18.6", "2025-07-29", "r", "w", "621.3.11"], ["26.1", "2025-11-03", "r", "w", "622.2.11"], ["26.2", "2025-12-12", "r", "w", "623.1.14"], ["26.3", "2026-02-11", "r", "w", "623.2.7"], ["26.4", "2026-03-24", "r", "w", "624.1.16"], ["26.5", "2026-05-11", "c", "w", "624.2.5"], ["3.2", "2010-04-03", "r", "w", "531.21"], ["4.2", "2010-11-22", "r", "w", "533.17"], ["9.3", "2016-03-21", "r", "w", "601.5.17"]] }, samsunginternet_android: { releases: [["1.0", "2013-04-27", "r", "w", "535.19"], ["1.5", "2013-09-25", "r", "b", "28"], ["1.6", "2014-04-11", "r", "b", "28"], ["10.0", "2019-08-22", "r", "b", "71"], ["10.2", "2019-10-09", "r", "b", "71"], ["11.0", "2019-12-05", "r", "b", "75"], ["11.2", "2020-03-22", "r", "b", "75"], ["12.0", "2020-06-19", "r", "b", "79"], ["12.1", "2020-07-07", "r", "b", "79"], ["13.0", "2020-12-02", "r", "b", "83"], ["13.2", "2021-01-20", "r", "b", "83"], ["14.0", "2021-04-17", "r", "b", "87"], ["14.2", "2021-06-25", "r", "b", "87"], ["15.0", "2021-08-13", "r", "b", "90"], ["16.0", "2021-11-25", "r", "b", "92"], ["16.2", "2022-03-06", "r", "b", "92"], ["17.0", "2022-05-04", "r", "b", "96"], ["18.0", "2022-08-08", "r", "b", "99"], ["18.1", "2022-09-09", "r", "b", "99"], ["19.0", "2022-11-01", "r", "b", "102"], ["19.1", "2022-11-08", "r", "b", "102"], ["2.0", "2014-10-17", "r", "b", "34"], ["2.1", "2015-01-07", "r", "b", "34"], ["20.0", "2023-02-10", "r", "b", "106"], ["21.0", "2023-05-19", "r", "b", "110"], ["22.0", "2023-07-14", "r", "b", "111"], ["23.0", "2023-10-18", "r", "b", "115"], ["24.0", "2024-01-25", "r", "b", "117"], ["25.0", "2024-04-24", "r", "b", "121"], ["26.0", "2024-06-07", "r", "b", "122"], ["27.0", "2024-11-06", "r", "b", "125"], ["28.0", "2025-04-02", "r", "b", "130"], ["29.0", "2025-10-25", "c", "b", "136"], ["3.0", "2015-04-10", "r", "b", "38"], ["3.2", "2015-08-24", "r", "b", "38"], ["4.0", "2016-03-11", "r", "b", "44"], ["4.2", "2016-08-02", "r", "b", "44"], ["5.0", "2016-12-15", "r", "b", "51"], ["5.2", "2017-04-21", "r", "b", "51"], ["5.4", "2017-05-17", "r", "b", "51"], ["6.0", "2017-08-23", "r", "b", "56"], ["6.2", "2017-10-26", "r", "b", "56"], ["6.4", "2018-02-19", "r", "b", "56"], ["7.0", "2018-03-16", "r", "b", "59"], ["7.2", "2018-06-20", "r", "b", "59"], ["7.4", "2018-09-12", "r", "b", "59"], ["8.0", "2018-07-18", "r", "b", "63"], ["8.2", "2018-12-21", "r", "b", "63"], ["9.0", "2018-09-15", "r", "b", "67"], ["9.2", "2019-04-02", "r", "b", "67"], ["9.4", "2019-07-25", "r", "b", "67"]] }, webview_android: { releases: [["1", "2008-09-23", "r", "w", "523.12"], ["2", "2009-10-26", "r", "w", "530.17"], ["3", "2011-02-22", "r", "w", "534.13"], ["4", "2011-10-18", "r", "w", "534.30"], ["37", "2014-09-03", "r", "b", "37"], ["38", "2014-10-08", "r", "b", "38"], ["39", "2014-11-12", "r", "b", "39"], ["40", "2015-01-21", "r", "b", "40"], ["41", "2015-03-11", "r", "b", "41"], ["42", "2015-04-15", "r", "b", "42"], ["43", "2015-05-27", "r", "b", "43"], ["44", "2015-07-29", "r", "b", "44"], ["45", "2015-09-01", "r", "b", "45"], ["46", "2015-10-14", "r", "b", "46"], ["47", "2015-12-02", "r", "b", "47"], ["48", "2016-01-26", "r", "b", "48"], ["49", "2016-03-09", "r", "b", "49"], ["50", "2016-04-13", "r", "b", "50"], ["51", "2016-06-08", "r", "b", "51"], ["52", "2016-07-27", "r", "b", "52"], ["53", "2016-09-07", "r", "b", "53"], ["54", "2016-10-19", "r", "b", "54"], ["55", "2016-12-06", "r", "b", "55"], ["56", "2017-02-01", "r", "b", "56"], ["57", "2017-03-16", "r", "b", "57"], ["58", "2017-04-25", "r", "b", "58"], ["59", "2017-06-06", "r", "b", "59"], ["60", "2017-08-01", "r", "b", "60"], ["61", "2017-09-05", "r", "b", "61"], ["62", "2017-10-24", "r", "b", "62"], ["63", "2017-12-05", "r", "b", "63"], ["64", "2018-01-23", "r", "b", "64"], ["65", "2018-03-06", "r", "b", "65"], ["66", "2018-04-17", "r", "b", "66"], ["67", "2018-05-31", "r", "b", "67"], ["68", "2018-07-24", "r", "b", "68"], ["69", "2018-09-04", "r", "b", "69"], ["70", "2018-10-17", "r", "b", "70"], ["71", "2018-12-04", "r", "b", "71"], ["72", "2019-01-29", "r", "b", "72"], ["73", "2019-03-12", "r", "b", "73"], ["74", "2019-04-24", "r", "b", "74"], ["75", "2019-06-04", "r", "b", "75"], ["76", "2019-07-30", "r", "b", "76"], ["77", "2019-09-10", "r", "b", "77"], ["78", "2019-10-22", "r", "b", "78"], ["79", "2019-12-17", "r", "b", "79"], ["80", "2020-02-04", "r", "b", "80"], ["81", "2020-04-07", "r", "b", "81"], ["83", "2020-05-19", "r", "b", "83"], ["84", "2020-07-27", "r", "b", "84"], ["85", "2020-08-25", "r", "b", "85"], ["86", "2020-10-20", "r", "b", "86"], ["87", "2020-11-17", "r", "b", "87"], ["88", "2021-01-19", "r", "b", "88"], ["89", "2021-03-02", "r", "b", "89"], ["90", "2021-04-13", "r", "b", "90"], ["91", "2021-05-25", "r", "b", "91"], ["92", "2021-07-20", "r", "b", "92"], ["93", "2021-08-31", "r", "b", "93"], ["94", "2021-09-21", "r", "b", "94"], ["95", "2021-10-19", "r", "b", "95"], ["96", "2021-11-15", "r", "b", "96"], ["97", "2022-01-04", "r", "b", "97"], ["98", "2022-02-01", "r", "b", "98"], ["99", "2022-03-01", "r", "b", "99"], ["100", "2022-03-29", "r", "b", "100"], ["101", "2022-04-26", "r", "b", "101"], ["102", "2022-05-24", "r", "b", "102"], ["103", "2022-06-21", "r", "b", "103"], ["104", "2022-08-02", "r", "b", "104"], ["105", "2022-09-02", "r", "b", "105"], ["106", "2022-09-27", "r", "b", "106"], ["107", "2022-10-25", "r", "b", "107"], ["108", "2022-11-29", "r", "b", "108"], ["109", "2023-01-10", "r", "b", "109"], ["110", "2023-02-07", "r", "b", "110"], ["111", "2023-03-01", "r", "b", "111"], ["112", "2023-04-04", "r", "b", "112"], ["113", "2023-05-02", "r", "b", "113"], ["114", "2023-05-30", "r", "b", "114"], ["115", "2023-07-21", "r", "b", "115"], ["116", "2023-08-15", "r", "b", "116"], ["117", "2023-09-12", "r", "b", "117"], ["118", "2023-10-10", "r", "b", "118"], ["119", "2023-10-31", "r", "b", "119"], ["120", "2023-12-05", "r", "b", "120"], ["121", "2024-01-23", "r", "b", "121"], ["122", "2024-02-20", "r", "b", "122"], ["123", "2024-03-19", "r", "b", "123"], ["124", "2024-04-16", "r", "b", "124"], ["125", "2024-05-14", "r", "b", "125"], ["126", "2024-06-11", "r", "b", "126"], ["127", "2024-07-23", "r", "b", "127"], ["128", "2024-08-20", "r", "b", "128"], ["129", "2024-09-17", "r", "b", "129"], ["130", "2024-10-15", "r", "b", "130"], ["131", "2024-11-12", "r", "b", "131"], ["132", "2025-01-14", "r", "b", "132"], ["133", "2025-02-04", "r", "b", "133"], ["134", "2025-03-04", "r", "b", "134"], ["135", "2025-04-01", "r", "b", "135"], ["136", "2025-04-29", "r", "b", "136"], ["137", "2025-05-27", "r", "b", "137"], ["138", "2025-06-24", "r", "b", "138"], ["139", "2025-08-05", "r", "b", "139"], ["140", "2025-09-02", "r", "b", "140"], ["141", "2025-09-30", "r", "b", "141"], ["142", "2025-10-28", "r", "b", "142"], ["143", "2025-12-02", "r", "b", "143"], ["144", "2026-01-13", "r", "b", "144"], ["145", "2026-02-10", "r", "b", "145"], ["146", "2026-03-10", "r", "b", "146"], ["147", "2026-04-07", "r", "b", "147"], ["148", "2026-05-05", "r", "b", "148"], ["149", "2026-06-02", "c", "b", "149"], ["150", "2026-06-30", "b", "b", "150"], ["151", "2026-07-28", "n", "b", "151"], ["152", null, "p", "b", "152"], ["1.5", "2009-04-27", "r", "w", "525.20"], ["2.2", "2010-05-20", "r", "w", "533.1"], ["4.4", "2013-12-09", "r", "b", "30"], ["4.4.3", "2014-06-02", "r", "b", "33"]] } }, hf = { ya_android: { releases: [["1.0", "u", "u", "b", "25"], ["1.5", "u", "u", "b", "22"], ["1.6", "u", "u", "b", "25"], ["1.7", "u", "u", "b", "25"], ["1.20", "u", "u", "b", "25"], ["2.5", "u", "u", "b", "25"], ["3.2", "u", "u", "b", "25"], ["4.6", "u", "u", "b", "25"], ["5.3", "u", "u", "b", "25"], ["5.4", "u", "u", "b", "25"], ["7.4", "u", "u", "b", "25"], ["9.6", "u", "u", "b", "25"], ["10.5", "u", "u", "b", "25"], ["11.4", "u", "u", "b", "25"], ["11.5", "u", "u", "b", "25"], ["12.7", "u", "u", "b", "25"], ["13.9", "u", "u", "b", "28"], ["13.10", "u", "u", "b", "28"], ["13.11", "u", "u", "b", "28"], ["13.12", "u", "u", "b", "30"], ["14.2", "u", "u", "b", "32"], ["14.4", "u", "u", "b", "33"], ["14.5", "u", "u", "b", "34"], ["14.7", "u", "u", "b", "35"], ["14.8", "u", "u", "b", "36"], ["14.10", "u", "u", "b", "37"], ["14.12", "u", "u", "b", "38"], ["15.2", "u", "u", "b", "40"], ["15.4", "u", "u", "b", "41"], ["15.6", "u", "u", "b", "42"], ["15.7", "u", "u", "b", "43"], ["15.9", "u", "u", "b", "44"], ["15.10", "u", "u", "b", "45"], ["15.12", "u", "u", "b", "46"], ["16.2", "u", "u", "b", "47"], ["16.3", "u", "u", "b", "47"], ["16.4", "u", "u", "b", "49"], ["16.6", "u", "u", "b", "50"], ["16.7", "u", "u", "b", "51"], ["16.9", "u", "u", "b", "52"], ["16.10", "u", "u", "b", "53"], ["16.11", "u", "u", "b", "54"], ["17.1", "u", "u", "b", "55"], ["17.3", "u", "u", "b", "56"], ["17.4", "u", "u", "b", "57"], ["17.6", "u", "u", "b", "58"], ["17.7", "u", "u", "b", "59"], ["17.9", "u", "u", "b", "60"], ["17.10", "u", "u", "b", "61"], ["17.11", "u", "u", "b", "62"], ["18.1", "u", "u", "b", "63"], ["18.2", "u", "u", "b", "63"], ["18.3", "u", "u", "b", "64"], ["18.4", "u", "u", "b", "65"], ["18.6", "u", "u", "b", "66"], ["18.7", "u", "u", "b", "67"], ["18.9", "u", "u", "b", "68"], ["18.10", "u", "u", "b", "69"], ["18.11", "u", "u", "b", "70"], ["19.1", "u", "u", "b", "71"], ["19.3", "u", "u", "b", "72"], ["19.4", "u", "u", "b", "73"], ["19.5", "u", "u", "b", "75"], ["19.6", "u", "u", "b", "75"], ["19.7", "u", "u", "b", "75"], ["19.9", "u", "u", "b", "76"], ["19.10", "u", "u", "b", "77"], ["19.11", "u", "u", "b", "78"], ["19.12", "u", "u", "b", "78"], ["20.2", "u", "u", "b", "79"], ["20.3", "u", "u", "b", "80"], ["20.4", "u", "u", "b", "81"], ["20.6", "u", "u", "b", "81"], ["20.7", "u", "u", "b", "83"], ["20.8", "2020-09-02", "u", "b", "84"], ["20.9", "2020-09-27", "u", "b", "85"], ["20.11", "2020-11-11", "u", "b", "86"], ["20.12", "2020-12-20", "u", "b", "87"], ["21.1", "2021-12-31", "u", "b", "88"], ["21.2", "u", "u", "b", "88"], ["21.3", "2021-04-04", "u", "b", "89"], ["21.5", "u", "u", "b", "90"], ["21.6", "2021-09-28", "u", "b", "91"], ["21.8", "2021-09-28", "u", "b", "92"], ["21.9", "2021-09-29", "u", "b", "93"], ["21.11", "2021-10-29", "u", "b", "94"], ["22.1", "2021-12-31", "u", "b", "96"], ["22.3", "2022-03-25", "u", "b", "98"], ["22.4", "u", "u", "b", "92"], ["22.5", "2022-05-20", "u", "b", "100"], ["22.7", "2022-07-07", "u", "b", "102"], ["22.8", "u", "u", "b", "104"], ["22.9", "2022-08-27", "u", "b", "104"], ["22.11", "2022-11-11", "u", "b", "106"], ["23.1", "2023-01-10", "u", "b", "108"], ["23.3", "2023-03-26", "u", "b", "110"], ["23.5", "2023-05-19", "u", "b", "112"], ["23.7", "2023-07-06", "u", "b", "114"], ["23.9", "2023-09-13", "u", "b", "116"], ["23.11", "2023-11-15", "u", "b", "118"], ["24.1", "2024-01-18", "u", "b", "120"], ["24.2", "2024-03-25", "u", "b", "120"], ["24.4", "2024-03-27", "u", "b", "122"], ["24.6", "2024-06-04", "u", "b", "124"], ["24.7", "2024-07-18", "u", "b", "126"], ["24.9", "2024-10-01", "u", "b", "126"], ["24.10", "2024-10-11", "u", "b", "128"], ["24.12", "2024-11-30", "u", "b", "130"], ["25.2", "2025-04-24", "u", "b", "132"], ["25.3", "2025-04-23", "u", "b", "132"], ["25.4", "2025-04-23", "u", "b", "134"], ["25.6", "2025-09-04", "u", "b", "136"], ["25.8", "2025-08-30", "u", "b", "138"], ["25.10", "2025-10-09", "u", "b", "140"], ["25.12", "2025-12-07", "u", "b", "142"], ["26.3", "2026-03-04", "u", "b", "144"], ["26.4", "2026-04-25", "u", "b", "146"], ["26.6", "2026-06-08", "u", "b", "148"]] }, uc_android: { releases: [["10.5", "u", "u", "b", "31"], ["10.7", "u", "u", "b", "31"], ["10.8", "u", "u", "b", "31"], ["10.10", "u", "u", "b", "31"], ["11.0", "u", "u", "b", "31"], ["11.1", "u", "u", "b", "40"], ["11.2", "u", "u", "b", "40"], ["11.3", "u", "u", "b", "40"], ["11.4", "u", "u", "b", "40"], ["11.5", "u", "u", "b", "40"], ["11.6", "u", "u", "b", "57"], ["11.8", "u", "u", "b", "57"], ["11.9", "u", "u", "b", "57"], ["12.0", "u", "u", "b", "57"], ["12.1", "u", "u", "b", "57"], ["12.2", "u", "u", "b", "57"], ["12.3", "u", "u", "b", "57"], ["12.4", "u", "u", "b", "57"], ["12.5", "u", "u", "b", "57"], ["12.6", "u", "u", "b", "57"], ["12.7", "u", "u", "b", "57"], ["12.8", "u", "u", "b", "57"], ["12.9", "u", "u", "b", "57"], ["12.10", "u", "u", "b", "57"], ["12.11", "u", "u", "b", "57"], ["12.12", "u", "u", "b", "57"], ["12.13", "u", "u", "b", "57"], ["12.14", "u", "u", "b", "57"], ["13.0", "u", "u", "b", "57"], ["13.1", "u", "u", "b", "57"], ["13.2", "u", "u", "b", "57"], ["13.3", "2020-09-09", "u", "b", "78"], ["13.4", "2021-09-28", "u", "b", "78"], ["13.5", "2023-08-25", "u", "b", "78"], ["13.6", "2023-12-17", "u", "b", "78"], ["13.7", "2023-06-24", "u", "b", "78"], ["13.8", "2022-04-30", "u", "b", "78"], ["13.9", "2022-05-18", "u", "b", "78"], ["15.0", "2022-08-24", "u", "b", "78"], ["15.1", "2022-11-11", "u", "b", "78"], ["15.2", "2023-04-23", "u", "b", "78"], ["15.3", "2023-03-17", "u", "b", "100"], ["15.4", "2023-10-25", "u", "b", "100"], ["15.5", "2023-08-22", "u", "b", "100"], ["16.0", "2023-08-24", "u", "b", "100"], ["16.1", "2023-10-15", "u", "b", "100"], ["16.2", "2023-12-09", "u", "b", "100"], ["16.3", "2024-03-08", "u", "b", "100"], ["16.4", "2024-10-03", "u", "b", "100"], ["16.5", "2024-05-30", "u", "b", "100"], ["16.6", "2024-07-23", "u", "b", "100"], ["17.0", "2024-08-24", "u", "b", "100"], ["17.1", "2024-09-26", "u", "b", "100"], ["17.2", "2024-11-29", "u", "b", "100"], ["17.3", "2025-01-07", "u", "b", "100"], ["17.4", "2025-02-26", "u", "b", "100"], ["17.5", "2025-04-08", "u", "b", "100"], ["17.6", "2025-05-15", "u", "b", "123"], ["17.7", "2025-06-11", "u", "b", "123"], ["17.8", "2025-07-30", "u", "b", "123"], ["18.0", "2025-08-17", "u", "b", "123"], ["18.1", "2025-10-04", "u", "b", "123"], ["18.2", "2025-11-04", "u", "b", "123"], ["18.3", "2025-12-12", "u", "b", "123"], ["18.4", "2026-01-09", "u", "b", "123"], ["18.5", "2026-01-28", "u", "b", "123"], ["18.6", "2026-03-21", "u", "b", "123"], ["18.8", "2026-05-03", "u", "b", "123"]] }, qq_android: { releases: [["6.0", "u", "u", "b", "37"], ["6.1", "u", "u", "b", "37"], ["6.2", "u", "u", "b", "37"], ["6.3", "u", "u", "b", "37"], ["6.4", "u", "u", "b", "37"], ["6.6", "u", "u", "b", "37"], ["6.7", "u", "u", "b", "37"], ["6.8", "u", "u", "b", "37"], ["6.9", "u", "u", "b", "37"], ["7.0", "u", "u", "b", "37"], ["7.1", "u", "u", "b", "37"], ["7.2", "u", "u", "b", "37"], ["7.3", "u", "u", "b", "37"], ["7.4", "u", "u", "b", "37"], ["7.5", "u", "u", "b", "37"], ["7.6", "u", "u", "b", "37"], ["7.7", "u", "u", "b", "37"], ["7.8", "u", "u", "b", "37"], ["7.9", "u", "u", "b", "37"], ["8.0", "u", "u", "b", "37"], ["8.1", "u", "u", "b", "57"], ["8.2", "u", "u", "b", "57"], ["8.3", "u", "u", "b", "57"], ["8.4", "u", "u", "b", "57"], ["8.5", "u", "u", "b", "57"], ["8.6", "u", "u", "b", "57"], ["8.7", "u", "u", "b", "57"], ["8.8", "u", "u", "b", "57"], ["8.9", "u", "u", "b", "57"], ["9.1", "u", "u", "b", "57"], ["9.6", "u", "u", "b", "66"], ["9.7", "u", "u", "b", "66"], ["9.8", "u", "u", "b", "66"], ["10.0", "u", "u", "b", "66"], ["10.1", "u", "u", "b", "66"], ["10.2", "u", "u", "b", "66"], ["10.3", "u", "u", "b", "66"], ["10.4", "u", "u", "b", "66"], ["10.5", "u", "u", "b", "66"], ["10.7", "2020-09-09", "u", "b", "66"], ["10.9", "2020-11-22", "u", "b", "77"], ["11.0", "u", "u", "b", "77"], ["11.2", "2021-01-30", "u", "b", "77"], ["11.3", "2021-03-31", "u", "b", "77"], ["11.7", "2021-11-02", "u", "b", "89"], ["11.9", "u", "u", "b", "89"], ["12.0", "2021-11-04", "u", "b", "89"], ["12.1", "2021-11-05", "u", "b", "89"], ["12.2", "2021-12-07", "u", "b", "89"], ["12.5", "2022-04-07", "u", "b", "89"], ["12.7", "2022-05-21", "u", "b", "89"], ["12.8", "2022-06-30", "u", "b", "89"], ["12.9", "2022-07-26", "u", "b", "89"], ["13.0", "2022-08-15", "u", "b", "89"], ["13.1", "2022-09-10", "u", "b", "89"], ["13.2", "2022-10-26", "u", "b", "89"], ["13.3", "2022-11-09", "u", "b", "89"], ["13.4", "2023-04-26", "u", "b", "98"], ["13.5", "2023-02-06", "u", "b", "98"], ["13.6", "2023-02-09", "u", "b", "98"], ["13.7", "2023-04-21", "u", "b", "98"], ["13.8", "2023-04-21", "u", "b", "98"], ["14.0", "2023-12-12", "u", "b", "98"], ["14.1", "2023-07-16", "u", "b", "98"], ["14.2", "2023-10-14", "u", "b", "109"], ["14.3", "2023-09-13", "u", "b", "109"], ["14.4", "2023-10-31", "u", "b", "109"], ["14.5", "2023-11-12", "u", "b", "109"], ["14.6", "2023-12-24", "u", "b", "109"], ["14.7", "2024-01-18", "u", "b", "109"], ["14.8", "2024-03-04", "u", "b", "109"], ["14.9", "2024-04-09", "u", "b", "109"], ["15.0", "2024-04-17", "u", "b", "109"], ["15.1", "2024-05-18", "u", "b", "109"], ["15.2", "2024-10-24", "u", "b", "109"], ["15.3", "2024-07-28", "u", "b", "109"], ["15.4", "2024-09-07", "u", "b", "109"], ["15.5", "2024-09-24", "u", "b", "109"], ["15.6", "2024-10-24", "u", "b", "109"], ["15.7", "2024-12-03", "u", "b", "109"], ["15.8", "2024-12-11", "u", "b", "109"], ["15.9", "2025-02-01", "u", "b", "109"], ["19.1", "2025-07-08", "u", "b", "121"], ["19.2", "2025-07-15", "u", "b", "121"], ["19.3", "2025-08-31", "u", "b", "121"], ["19.4", "2025-09-20", "u", "b", "121"], ["19.5", "2025-10-23", "u", "b", "121"], ["19.6", "2025-11-17", "u", "b", "121"], ["19.7", "2025-12-18", "u", "b", "121"], ["19.8", "2026-01-20", "u", "b", "121"], ["19.9", "2026-03-09", "u", "b", "121"], ["20.0", "2026-04-06", "u", "b", "121"], ["20.1", "2026-04-30", "u", "b", "121"]] }, kai_os: { releases: [["1.0", "2017-03-01", "u", "g", "37"], ["2.0", "2017-07-01", "u", "g", "48"], ["2.5", "2017-07-01", "u", "g", "48"], ["3.0", "2021-09-01", "u", "g", "84"], ["3.1", "2022-03-01", "u", "g", "84"], ["4.0", "2025-05-01", "u", "g", "123"]] }, facebook_android: { releases: [["66", "u", "u", "b", "48"], ["68", "u", "u", "b", "48"], ["74", "u", "u", "b", "50"], ["75", "u", "u", "b", "50"], ["76", "u", "u", "b", "50"], ["77", "u", "u", "b", "50"], ["78", "u", "u", "b", "50"], ["79", "u", "u", "b", "50"], ["80", "u", "u", "b", "51"], ["81", "u", "u", "b", "51"], ["82", "u", "u", "b", "51"], ["83", "u", "u", "b", "51"], ["84", "u", "u", "b", "51"], ["86", "u", "u", "b", "51"], ["87", "u", "u", "b", "52"], ["88", "u", "u", "b", "52"], ["89", "u", "u", "b", "52"], ["90", "u", "u", "b", "52"], ["91", "u", "u", "b", "52"], ["92", "u", "u", "b", "52"], ["93", "u", "u", "b", "52"], ["94", "u", "u", "b", "52"], ["95", "u", "u", "b", "53"], ["96", "u", "u", "b", "53"], ["97", "u", "u", "b", "53"], ["98", "u", "u", "b", "53"], ["99", "u", "u", "b", "53"], ["100", "u", "u", "b", "54"], ["101", "u", "u", "b", "54"], ["103", "u", "u", "b", "54"], ["104", "u", "u", "b", "54"], ["105", "u", "u", "b", "54"], ["106", "u", "u", "b", "55"], ["107", "u", "u", "b", "55"], ["108", "u", "u", "b", "55"], ["109", "u", "u", "b", "55"], ["110", "u", "u", "b", "55"], ["111", "u", "u", "b", "55"], ["112", "u", "u", "b", "56"], ["113", "u", "u", "b", "56"], ["114", "u", "u", "b", "56"], ["115", "u", "u", "b", "56"], ["116", "u", "u", "b", "56"], ["117", "u", "u", "b", "57"], ["118", "u", "u", "b", "57"], ["119", "u", "u", "b", "57"], ["120", "u", "u", "b", "57"], ["121", "u", "u", "b", "57"], ["122", "u", "u", "b", "58"], ["123", "u", "u", "b", "58"], ["124", "u", "u", "b", "58"], ["125", "u", "u", "b", "58"], ["126", "u", "u", "b", "58"], ["127", "u", "u", "b", "58"], ["128", "u", "u", "b", "58"], ["129", "u", "u", "b", "58"], ["130", "u", "u", "b", "59"], ["131", "u", "u", "b", "59"], ["132", "u", "u", "b", "59"], ["133", "u", "u", "b", "59"], ["134", "u", "u", "b", "59"], ["135", "u", "u", "b", "59"], ["136", "u", "u", "b", "59"], ["137", "u", "u", "b", "59"], ["138", "u", "u", "b", "60"], ["140", "u", "u", "b", "60"], ["142", "u", "u", "b", "61"], ["143", "u", "u", "b", "61"], ["144", "u", "u", "b", "61"], ["145", "u", "u", "b", "61"], ["146", "u", "u", "b", "61"], ["147", "u", "u", "b", "61"], ["148", "u", "u", "b", "61"], ["149", "u", "u", "b", "62"], ["150", "u", "u", "b", "62"], ["151", "u", "u", "b", "62"], ["152", "u", "u", "b", "62"], ["153", "u", "u", "b", "63"], ["154", "u", "u", "b", "63"], ["155", "u", "u", "b", "63"], ["156", "u", "u", "b", "63"], ["157", "u", "u", "b", "64"], ["158", "u", "u", "b", "64"], ["159", "u", "u", "b", "64"], ["160", "u", "u", "b", "64"], ["161", "u", "u", "b", "64"], ["162", "u", "u", "b", "64"], ["163", "u", "u", "b", "65"], ["164", "u", "u", "b", "65"], ["165", "u", "u", "b", "65"], ["166", "u", "u", "b", "65"], ["167", "u", "u", "b", "65"], ["168", "u", "u", "b", "65"], ["169", "u", "u", "b", "66"], ["170", "u", "u", "b", "66"], ["171", "u", "u", "b", "66"], ["172", "u", "u", "b", "66"], ["173", "u", "u", "b", "66"], ["174", "u", "u", "b", "66"], ["175", "u", "u", "b", "67"], ["176", "u", "u", "b", "67"], ["177", "u", "u", "b", "67"], ["178", "u", "u", "b", "67"], ["180", "u", "u", "b", "67"], ["181", "u", "u", "b", "67"], ["182", "u", "u", "b", "67"], ["183", "u", "u", "b", "68"], ["184", "u", "u", "b", "68"], ["185", "u", "u", "b", "68"], ["186", "u", "u", "b", "68"], ["187", "u", "u", "b", "68"], ["188", "u", "u", "b", "68"], ["202", "u", "u", "b", "71"], ["227", "u", "u", "b", "75"], ["228", "u", "u", "b", "75"], ["229", "u", "u", "b", "75"], ["230", "u", "u", "b", "75"], ["231", "u", "u", "b", "75"], ["233", "u", "u", "b", "76"], ["235", "u", "u", "b", "76"], ["236", "u", "u", "b", "76"], ["237", "u", "u", "b", "76"], ["238", "u", "u", "b", "76"], ["240", "u", "u", "b", "77"], ["241", "u", "u", "b", "77"], ["242", "u", "u", "b", "77"], ["243", "u", "u", "b", "77"], ["244", "u", "u", "b", "78"], ["245", "u", "u", "b", "78"], ["246", "u", "u", "b", "78"], ["247", "u", "u", "b", "78"], ["248", "u", "u", "b", "78"], ["249", "u", "u", "b", "78"], ["250", "u", "u", "b", "78"], ["251", "u", "u", "b", "79"], ["252", "u", "u", "b", "79"], ["253", "u", "u", "b", "79"], ["254", "u", "u", "b", "79"], ["255", "u", "u", "b", "79"], ["256", "u", "u", "b", "80"], ["257", "u", "u", "b", "80"], ["258", "u", "u", "b", "80"], ["259", "u", "u", "b", "80"], ["260", "u", "u", "b", "80"], ["261", "u", "u", "b", "80"], ["262", "u", "u", "b", "80"], ["263", "u", "u", "b", "80"], ["264", "u", "u", "b", "80"], ["265", "u", "u", "b", "80"], ["266", "u", "u", "b", "81"], ["267", "u", "u", "b", "81"], ["268", "u", "u", "b", "81"], ["269", "u", "u", "b", "81"], ["270", "u", "u", "b", "81"], ["271", "u", "u", "b", "81"], ["272", "u", "u", "b", "83"], ["273", "u", "u", "b", "83"], ["274", "u", "u", "b", "83"], ["275", "u", "u", "b", "83"], ["297", "2020-12-02", "u", "b", "86"], ["348", "2021-12-19", "u", "b", "96"], ["399", "2023-02-04", "u", "b", "109"], ["400", "2023-02-10", "u", "b", "109"], ["420", "2023-06-28", "u", "b", "114"], ["430", "2023-09-03", "u", "b", "116"], ["434", "2023-10-05", "u", "b", "117"], ["436", "2023-10-13", "u", "b", "117"], ["437", "u", "u", "b", "118"], ["438", "2023-10-28", "u", "b", "118"], ["439", "2023-11-11", "u", "b", "119"], ["440", "2023-11-12", "u", "b", "119"], ["441", "2023-11-20", "u", "b", "119"], ["442", "2023-11-29", "u", "b", "119"], ["443", "2023-12-07", "u", "b", "120"], ["444", "2023-12-13", "u", "b", "120"], ["445", "2023-12-21", "u", "b", "120"], ["446", "2024-01-06", "u", "b", "120"], ["447", "2024-01-12", "u", "b", "120"], ["448", "2024-01-29", "u", "b", "121"], ["449", "2024-02-02", "u", "b", "121"], ["450", "2024-02-05", "u", "b", "121"], ["451", "2024-02-17", "u", "b", "121"], ["452", "2024-02-25", "u", "b", "122"], ["453", "2024-02-28", "u", "b", "122"], ["454", "2024-03-04", "u", "b", "122"], ["465", "2024-07-07", "u", "b", "126"], ["466", "u", "u", "b", "126"], ["469", "u", "u", "b", "126"], ["471", "2024-07-10", "u", "b", "126"], ["472", "2024-07-11", "u", "b", "126"], ["474", "2024-07-30", "u", "b", "127"], ["475", "2024-08-01", "u", "b", "127"], ["476", "2024-08-09", "u", "b", "127"], ["477", "2024-08-16", "u", "b", "127"], ["478", "2024-08-21", "u", "b", "128"], ["479", "2024-08-31", "u", "b", "128"], ["480", "2024-09-07", "u", "b", "128"], ["481", "2024-09-14", "u", "b", "128"], ["482", "2024-09-20", "u", "b", "129"], ["483", "2024-09-27", "u", "b", "129"], ["484", "2024-10-04", "u", "b", "129"], ["485", "2024-10-11", "u", "b", "129"], ["486", "2024-10-18", "u", "b", "130"], ["487", "2024-10-26", "u", "b", "130"], ["488", "2024-11-02", "u", "b", "130"], ["489", "2024-11-09", "u", "b", "130"], ["494", "2024-12-26", "u", "b", "131"], ["497", "2025-01-26", "u", "b", "132"], ["503", "2025-03-12", "u", "b", "134"], ["514", "2025-05-28", "u", "b", "136"], ["515", "2025-05-31", "u", "b", "137"]] }, instagram_android: { releases: [["23", "u", "u", "b", "62"], ["24", "u", "u", "b", "62"], ["25", "u", "u", "b", "62"], ["26", "u", "u", "b", "63"], ["27", "u", "u", "b", "63"], ["28", "u", "u", "b", "63"], ["29", "u", "u", "b", "63"], ["30", "u", "u", "b", "63"], ["31", "u", "u", "b", "64"], ["32", "u", "u", "b", "64"], ["33", "u", "u", "b", "64"], ["34", "u", "u", "b", "64"], ["35", "u", "u", "b", "65"], ["36", "u", "u", "b", "65"], ["37", "u", "u", "b", "65"], ["38", "u", "u", "b", "65"], ["39", "u", "u", "b", "65"], ["40", "u", "u", "b", "65"], ["41", "u", "u", "b", "65"], ["42", "u", "u", "b", "66"], ["43", "u", "u", "b", "66"], ["44", "u", "u", "b", "66"], ["45", "u", "u", "b", "66"], ["46", "u", "u", "b", "66"], ["47", "u", "u", "b", "66"], ["48", "u", "u", "b", "67"], ["49", "u", "u", "b", "67"], ["50", "u", "u", "b", "67"], ["51", "u", "u", "b", "67"], ["52", "u", "u", "b", "67"], ["53", "u", "u", "b", "67"], ["54", "u", "u", "b", "67"], ["55", "u", "u", "b", "67"], ["56", "u", "u", "b", "68"], ["57", "u", "u", "b", "68"], ["58", "u", "u", "b", "68"], ["59", "u", "u", "b", "68"], ["60", "u", "u", "b", "68"], ["61", "u", "u", "b", "68"], ["65", "u", "u", "b", "69"], ["66", "u", "u", "b", "69"], ["68", "u", "u", "b", "69"], ["72", "u", "u", "b", "70"], ["74", "u", "u", "b", "71"], ["75", "u", "u", "b", "71"], ["79", "u", "u", "b", "71"], ["81", "u", "u", "b", "72"], ["82", "u", "u", "b", "72"], ["83", "u", "u", "b", "72"], ["84", "u", "u", "b", "73"], ["86", "u", "u", "b", "73"], ["95", "u", "u", "b", "74"], ["96", "u", "u", "b", "80"], ["97", "u", "u", "b", "80"], ["98", "u", "u", "b", "80"], ["103", "u", "u", "b", "80"], ["104", "u", "u", "b", "80"], ["117", "u", "u", "b", "80"], ["118", "u", "u", "b", "80"], ["119", "u", "u", "b", "80"], ["120", "u", "u", "b", "80"], ["121", "u", "u", "b", "80"], ["127", "u", "u", "b", "80"], ["128", "u", "u", "b", "80"], ["129", "u", "u", "b", "80"], ["130", "u", "u", "b", "80"], ["131", "u", "u", "b", "80"], ["132", "u", "u", "b", "80"], ["133", "u", "u", "b", "80"], ["134", "u", "u", "b", "80"], ["135", "u", "u", "b", "80"], ["136", "u", "u", "b", "80"], ["137", "u", "u", "b", "81"], ["138", "u", "u", "b", "81"], ["139", "u", "u", "b", "81"], ["140", "u", "u", "b", "81"], ["141", "u", "u", "b", "81"], ["142", "u", "u", "b", "81"], ["143", "u", "u", "b", "83"], ["144", "u", "u", "b", "83"], ["145", "u", "u", "b", "83"], ["146", "u", "u", "b", "83"], ["153", "u", "u", "b", "84"], ["163", "u", "u", "b", "92"], ["164", "u", "u", "b", "92"], ["230", "u", "u", "b", "92"], ["258", "2022-11-04", "u", "b", "106"], ["259", "2022-11-04", "u", "b", "106"], ["279", "2023-12-31", "u", "b", "109"], ["281", "u", "u", "b", "109"], ["288", "u", "u", "b", "114"], ["289", "2023-12-21", "u", "b", "114"], ["290", "2023-12-30", "u", "b", "114"], ["292", "u", "u", "b", "115"], ["295", "u", "u", "b", "115"], ["296", "u", "u", "b", "115"], ["297", "u", "u", "b", "115"], ["298", "2024-01-11", "u", "b", "115"], ["299", "u", "u", "b", "115"], ["300", "u", "u", "b", "116"], ["301", "2024-01-12", "u", "b", "116"], ["302", "u", "u", "b", "117"], ["303", "u", "u", "b", "117"], ["304", "u", "u", "b", "117"], ["305", "u", "u", "b", "117"], ["306", "2024-01-17", "u", "b", "118"], ["307", "u", "u", "b", "118"], ["308", "2024-01-19", "u", "b", "118"], ["309", "u", "u", "b", "119"], ["310", "u", "u", "b", "119"], ["311", "u", "u", "b", "120"], ["312", "u", "u", "b", "120"], ["313", "u", "u", "b", "120"], ["314", "u", "u", "b", "120"], ["315", "2024-01-19", "u", "b", "120"], ["316", "2024-01-25", "u", "b", "120"], ["317", "2024-02-03", "u", "b", "121"], ["318", "2024-02-16", "u", "b", "121"], ["320", "2024-03-04", "u", "b", "121"], ["321", "2024-03-07", "u", "b", "122"], ["338", "2024-07-06", "u", "b", "126"], ["346", "2024-09-01", "u", "b", "127"], ["347", "2024-09-11", "u", "b", "127"], ["349", "2024-09-20", "u", "b", "128"], ["355", "2024-11-06", "u", "b", "130"], ["366", "u", "u", "b", "132"], ["367", "2025-02-15", "u", "b", "132"], ["378", "2025-05-03", "u", "b", "135"], ["381", "2025-06-19", "u", "b", "137"], ["382", "2025-06-19", "u", "b", "137"], ["383", "2025-06-18", "u", "b", "137"], ["384", "2025-06-16", "u", "b", "137"], ["385", "2025-06-27", "u", "b", "137"], ["387", "2025-07-09", "u", "b", "137"], ["390", "2025-07-26", "u", "b", "138"], ["392", "2025-08-12", "u", "b", "138"], ["394", "2025-08-26", "u", "b", "139"], ["395", "2025-09-13", "u", "b", "139"], ["396", "2025-09-20", "u", "b", "139"], ["397", "2025-09-19", "u", "b", "139"], ["399", "2025-09-28", "u", "b", "140"], ["400", "2025-10-06", "u", "b", "141"], ["401", "2025-10-08", "u", "b", "141"], ["404", "2025-10-31", "u", "b", "141"], ["406", "2025-11-16", "u", "b", "141"], ["407", "2025-11-23", "u", "b", "142"], ["408", "2025-11-28", "u", "b", "142"], ["409", "2025-12-16", "u", "b", "143"], ["410", "2025-12-17", "u", "b", "143"], ["411", "2026-01-07", "u", "b", "143"], ["423", "2026-04-05", "u", "b", "146"], ["430", "2026-05-30", "u", "b", "148"]] } }, mf = [["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "2", ca: "18", e: "12", f: "1", fa: "4", s: "4", si: "3.2" }], ["2019-03-25", { c: "66", ca: "66", e: "16", f: "57", fa: "57", s: "12.1", si: "12.2" }], ["2019-03-25", { c: "66", ca: "66", e: "16", f: "57", fa: "57", s: "12.1", si: "12.2" }], ["2024-03-19", { c: "116", ca: "116", e: "116", f: "124", fa: "124", s: "17.4", si: "17.4" }], ["2024-04-18", { c: "124", ca: "124", e: "124", f: "100", fa: "100", s: "16", si: "16" }], ["2025-06-26", { c: "138", ca: "138", e: "138", f: "118", fa: "118", s: "15.4", si: "15.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "17", ca: "18", e: "12", f: "5", fa: "5", s: "6", si: "6" }], ["2026-01-13", { c: "125", ca: "125", e: "125", f: "147", fa: "147", s: "18.2", si: "18.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2024-04-16", { c: "123", ca: "123", e: "123", f: "125", fa: "125", s: "17.4", si: "17.4" }], ["2020-01-15", { c: "37", ca: "37", e: "79", f: "27", fa: "27", s: "9.1", si: "9.3" }], ["2024-07-09", { c: "77", ca: "77", e: "79", f: "128", fa: "128", s: "17.4", si: "17.4" }], ["2016-06-07", { c: "32", ca: "30", e: "12", f: "47", fa: "47", s: "8", si: "8" }], ["2023-07-04", { c: "112", ca: "112", e: "112", f: "115", fa: "115", s: "16", si: "16" }], ["2015-09-30", { c: "43", ca: "43", e: "12", f: "16", fa: "16", s: "9", si: "9" }], ["2022-03-14", { c: "84", ca: "84", e: "84", f: "80", fa: "80", s: "15.4", si: "15.4" }], ["2023-10-24", { c: "103", ca: "103", e: "103", f: "119", fa: "119", s: "16.4", si: "16.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2022-03-14", { c: "92", ca: "92", e: "92", f: "90", fa: "90", s: "15.4", si: "15.4" }], ["2023-07-04", { c: "110", ca: "110", e: "110", f: "115", fa: "115", s: "16", si: "16" }], ["2016-09-20", { c: "45", ca: "45", e: "12", f: "34", fa: "34", s: "10", si: "10" }], ["2016-09-20", { c: "45", ca: "45", e: "12", f: "37", fa: "37", s: "10", si: "10" }], ["2016-09-20", { c: "45", ca: "45", e: "12", f: "37", fa: "37", s: "10", si: "10" }], ["2022-08-23", { c: "97", ca: "97", e: "97", f: "104", fa: "104", s: "15.4", si: "15.4" }], ["2020-01-15", { c: "69", ca: "69", e: "79", f: "62", fa: "62", s: "12", si: "12" }], ["2016-09-20", { c: "45", ca: "45", e: "12", f: "38", fa: "38", s: "10", si: "10" }], ["2024-01-25", { c: "121", ca: "121", e: "121", f: "115", fa: "115", s: "16.4", si: "16.4" }], ["2024-03-05", { c: "117", ca: "117", e: "117", f: "119", fa: "119", s: "17.4", si: "17.4" }], ["2016-09-20", { c: "47", ca: "47", e: "14", f: "43", fa: "43", s: "10", si: "10" }], ["2015-07-29", { c: "4", ca: "18", e: "12", f: "4", fa: "4", s: "5", si: "5" }], ["2015-07-29", { c: "3", ca: "18", e: "12", f: "3", fa: "4", s: "4", si: "3.2" }], ["2018-05-09", { c: "66", ca: "66", e: "14", f: "60", fa: "60", s: "10", si: "10" }], ["2016-09-20", { c: "45", ca: "45", e: "12", f: "38", fa: "38", s: "10", si: "10" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "5", ca: "18", e: "12", f: "4", fa: "4", s: "5", si: "4.2" }], ["2015-07-29", { c: "5", ca: "18", e: "12", f: "4", fa: "4", s: "5", si: "4.2" }], ["2021-09-20", { c: "88", ca: "88", e: "88", f: "89", fa: "89", s: "15", si: "15" }], ["2017-04-05", { c: "55", ca: "55", e: "15", f: "52", fa: "52", s: "10.1", si: "10.3" }], ["2024-06-11", { c: "76", ca: "76", e: "79", f: "127", fa: "127", s: "13.1", si: "13.4" }], ["2020-01-15", { c: "63", ca: "63", e: "79", f: "57", fa: "57", s: "12", si: "12" }], ["2020-01-15", { c: "63", ca: "63", e: "79", f: "57", fa: "57", s: "12", si: "12" }], ["2025-04-01", { c: "133", ca: "133", e: "133", f: "137", fa: "137", s: "18.4", si: "18.4" }], ["2025-11-11", { c: "90", ca: "90", e: "90", f: "145", fa: "145", s: "16.4", si: "16.4" }], ["2015-07-29", { c: "2", ca: "18", e: "12", f: "1", fa: "4", s: "3.1", si: "2" }], ["2015-07-29", { c: "3", ca: "18", e: "12", f: "3.5", fa: "4", s: "3.1", si: "3" }], ["2021-04-26", { c: "66", ca: "66", e: "79", f: "76", fa: "79", s: "14.1", si: "14.5" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "4", si: "3.2" }], ["2020-01-15", { c: "54", ca: "54", e: "79", f: "63", fa: "63", s: "10.1", si: "10.3" }], ["2024-01-25", { c: "85", ca: "85", e: "121", f: "113", fa: "113", s: "16.4", si: "16.1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2022-03-14", { c: "37", ca: "37", e: "79", f: "47", fa: "47", s: "15.4", si: "15.4" }], ["2024-09-16", { c: "76", ca: "76", e: "79", f: "103", fa: "103", s: "18", si: "18" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "3.6", fa: "4", s: "1.3", si: "1" }], ["2020-01-15", { c: "35", ca: "59", e: "79", f: "30", fa: "54", s: "8", si: "8" }], ["2015-07-29", { c: "21", ca: "25", e: "12", f: "22", fa: "22", s: "5.1", si: "5" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "3.6", fa: "4", s: "1.3", si: "1" }], ["2015-07-29", { c: "21", ca: "25", e: "12", f: "22", fa: "22", s: "5.1", si: "4" }], ["2015-07-29", { c: "25", ca: "25", e: "12", f: "13", fa: "14", s: "7", si: "7" }], ["2016-09-20", { c: "30", ca: "30", e: "12", f: "49", fa: "49", s: "8", si: "8" }], ["2015-07-29", { c: "21", ca: "25", e: "12", f: "9", fa: "18", s: "5.1", si: "4.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "2" }], ["2016-09-20", { c: "30", ca: "30", e: "12", f: "4", fa: "4", s: "10", si: "10" }], ["2026-03-24", { c: "1", ca: "18", e: "79", f: "149", fa: "149", s: "4", si: "3.2" }], ["2020-01-15", { c: "16", ca: "18", e: "79", f: "10", fa: "10", s: "6", si: "6" }], ["2015-07-29", { c: "≤15", ca: "18", e: "12", f: "10", fa: "10", s: "≤4", si: "≤3.2" }], ["2018-04-12", { c: "39", ca: "42", e: "14", f: "31", fa: "31", s: "11.1", si: "11.3" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1.5", fa: "4", s: "4", si: "3.2" }], ["2020-09-16", { c: "67", ca: "67", e: "79", f: "68", fa: "68", s: "14", si: "14" }], ["2021-09-20", { c: "67", ca: "67", e: "79", f: "68", fa: "68", s: "15", si: "15" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "1" }], ["2017-02-01", { c: "56", ca: "56", e: "12", f: "50", fa: "50", s: "9.1", si: "9.3" }], ["2015-07-29", { c: "4", ca: "18", e: "12", f: "4", fa: "4", s: "5", si: "4.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "14", s: "1", si: "3" }], ["2015-07-29", { c: "10", ca: "18", e: "12", f: "4", fa: "4", s: "5.1", si: "5" }], ["2015-07-29", { c: "10", ca: "18", e: "12", f: "29", fa: "29", s: "5.1", si: "6" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "1" }], ["2022-03-14", { c: "54", ca: "54", e: "79", f: "38", fa: "38", s: "15.4", si: "15.4" }], ["2017-09-19", { c: "50", ca: "51", e: "15", f: "44", fa: "44", s: "11", si: "11" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "26", ca: "28", e: "12", f: "16", fa: "16", s: "7", si: "7" }], ["2023-06-06", { c: "110", ca: "110", e: "110", f: "114", fa: "114", s: "16", si: "16" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1.5", fa: "4", s: "2", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1.5", fa: "4", s: "2", si: "1" }], ["2024-09-16", { c: "99", ca: "99", e: "99", f: "28", fa: "28", s: "18", si: "18" }], ["2023-04-11", { c: "99", ca: "99", e: "99", f: "112", fa: "112", s: "16.4", si: "16.4" }], ["2023-12-11", { c: "99", ca: "99", e: "99", f: "113", fa: "113", s: "17.2", si: "17.2" }], ["2023-04-11", { c: "99", ca: "99", e: "99", f: "112", fa: "112", s: "16.4", si: "16.4" }], ["2023-12-11", { c: "118", ca: "118", e: "118", f: "97", fa: "97", s: "17.2", si: "17.2" }], ["2020-01-15", { c: "51", ca: "51", e: "79", f: "43", fa: "43", s: "11", si: "11" }], ["2020-01-15", { c: "57", ca: "57", e: "79", f: "53", fa: "53", s: "11.1", si: "11.3" }], ["2022-03-14", { c: "99", ca: "99", e: "99", f: "97", fa: "97", s: "15.4", si: "15.4" }], ["2020-01-15", { c: "49", ca: "49", e: "79", f: "47", fa: "47", s: "9", si: "9" }], ["2015-07-29", { c: "27", ca: "27", e: "12", f: "1", fa: "4", s: "7", si: "7" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "2" }], ["2015-09-22", { c: "4", ca: "18", e: "12", f: "41", fa: "41", s: "5", si: "4.2" }], ["2015-07-29", { c: "2", ca: "18", e: "12", f: "1.5", fa: "4", s: "4", si: "4" }], ["2024-03-05", { c: "105", ca: "105", e: "105", f: "106", fa: "106", s: "17.4", si: "17.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2016-03-08", { c: "42", ca: "42", e: "13", f: "45", fa: "45", s: "9", si: "9" }], ["2021-01-21", { c: "88", ca: "88", e: "88", f: "71", fa: "79", s: "13.1", si: "13" }], ["2020-01-15", { c: "55", ca: "55", e: "79", f: "49", fa: "49", s: "12.1", si: "12.2" }], ["2023-11-02", { c: "119", ca: "119", e: "119", f: "54", fa: "54", s: "13.1", si: "13.4" }], ["2017-03-27", { c: "41", ca: "41", e: "12", f: "22", fa: "22", s: "10.1", si: "10.3" }], ["2025-03-31", { c: "121", ca: "121", e: "121", f: "127", fa: "127", s: "18.4", si: "18.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2023-05-09", { c: "111", ca: "111", e: "111", f: "113", fa: "113", s: "15", si: "15" }], ["2023-02-14", { c: "58", ca: "58", e: "79", f: "110", fa: "110", s: "10", si: "10" }], ["2023-05-09", { c: "111", ca: "111", e: "111", f: "113", fa: "113", s: "16.2", si: "16.2" }], ["2022-02-03", { c: "98", ca: "98", e: "98", f: "96", fa: "96", s: "13", si: "13" }], ["2020-01-15", { c: "53", ca: "53", e: "79", f: "31", fa: "31", s: "11.1", si: "11.3" }], ["2017-03-07", { c: "50", ca: "50", e: "12", f: "52", fa: "52", s: "9", si: "9" }], ["2020-07-28", { c: "50", ca: "50", e: "12", f: "71", fa: "79", s: "9", si: "9" }], ["2025-08-19", { c: "137", ca: "137", e: "137", f: "142", fa: "142", s: "17", si: "17" }], ["2017-04-19", { c: "26", ca: "26", e: "12", f: "53", fa: "53", s: "7", si: "7" }], ["2023-05-09", { c: "80", ca: "80", e: "80", f: "113", fa: "113", s: "16.4", si: "16.4" }], ["2020-11-17", { c: "69", ca: "69", e: "79", f: "83", fa: "83", s: "12.1", si: "12.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "4", fa: "4", s: "3", si: "1" }], ["2018-12-11", { c: "40", ca: "40", e: "18", f: "51", fa: "64", s: "10.1", si: "10.3" }], ["2023-03-27", { c: "73", ca: "73", e: "79", f: "101", fa: "101", s: "16.4", si: "16.4" }], ["2022-03-14", { c: "52", ca: "52", e: "79", f: "69", fa: "79", s: "15.4", si: "15.4" }], ["2022-09-12", { c: "105", ca: "105", e: "105", f: "101", fa: "101", s: "16", si: "16" }], ["2023-09-18", { c: "83", ca: "83", e: "83", f: "107", fa: "107", s: "17", si: "17" }], ["2022-03-14", { c: "52", ca: "52", e: "79", f: "69", fa: "79", s: "15.4", si: "15.4" }], ["2022-03-14", { c: "52", ca: "52", e: "79", f: "69", fa: "79", s: "15.4", si: "15.4" }], ["2022-03-14", { c: "52", ca: "52", e: "79", f: "69", fa: "79", s: "15.4", si: "15.4" }], ["2022-07-26", { c: "52", ca: "52", e: "79", f: "103", fa: "103", s: "15.4", si: "15.4" }], ["2023-02-14", { c: "105", ca: "105", e: "105", f: "110", fa: "110", s: "16", si: "16" }], ["2026-05-19", { c: "111", ca: "111", e: "111", f: "151", fa: "151", s: "18", si: "18" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2025-09-15", { c: "108", ca: "108", e: "108", f: "130", fa: "130", s: "26", si: "26" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "4", fa: "4", s: "≤4", si: "≤3.2" }], ["2025-03-04", { c: "51", ca: "51", e: "12", f: "136", fa: "136", s: "5.1", si: "5" }], ["2026-04-10", { c: "147", ca: "147", e: "147", f: "146", fa: "146", s: "26", si: "26" }], ["2024-09-16", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "18", si: "18" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "4", ca: "18", e: "12", f: "3.5", fa: "4", s: "4", si: "3.2" }], ["2023-12-11", { c: "85", ca: "85", e: "85", f: "68", fa: "68", s: "17.2", si: "17.2" }], ["2023-09-18", { c: "91", ca: "91", e: "91", f: "33", fa: "33", s: "17", si: "17" }], ["2015-07-29", { c: "2", ca: "18", e: "12", f: "1", fa: "25", s: "3", si: "1" }], ["2023-12-11", { c: "59", ca: "59", e: "79", f: "98", fa: "98", s: "17.2", si: "17.2" }], ["2020-01-15", { c: "60", ca: "60", e: "79", f: "60", fa: "60", s: "13", si: "13" }], ["2026-05-07", { c: "148", ca: "148", e: "148", f: "65", fa: "65", s: "7", si: "7" }], ["2016-08-02", { c: "25", ca: "25", e: "14", f: "23", fa: "23", s: "7", si: "7" }], ["2020-01-15", { c: "46", ca: "46", e: "79", f: "31", fa: "31", s: "10.1", si: "10.3" }], ["2015-09-30", { c: "28", ca: "28", e: "12", f: "22", fa: "22", s: "9", si: "9" }], ["2020-01-15", { c: "61", ca: "61", e: "79", f: "55", fa: "55", s: "11", si: "11" }], ["2015-07-29", { c: "16", ca: "18", e: "12", f: "4", fa: "4", s: "6", si: "6" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1.5", fa: "4", s: "4", si: "3.2" }], ["2017-04-05", { c: "49", ca: "49", e: "15", f: "31", fa: "31", s: "9.1", si: "9.3" }], ["2017-10-24", { c: "62", ca: "62", e: "14", f: "22", fa: "22", s: "10", si: "10" }], ["2015-07-29", { c: "≤4", ca: "18", e: "12", f: "≤2", fa: "4", s: "≤3.1", si: "≤2" }], ["2015-07-29", { c: "7", ca: "18", e: "12", f: "6", fa: "6", s: "5.1", si: "5" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2024-02-20", { c: "111", ca: "111", e: "111", f: "123", fa: "123", s: "16.4", si: "16.4" }], ["2015-07-29", { c: "4", ca: "18", e: "12", f: "4", fa: "4", s: "4", si: "5" }], ["2020-01-15", { c: "10", ca: "18", e: "79", f: "4", fa: "4", s: "5", si: "5" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2020-01-15", { c: "60", ca: "60", e: "79", f: "55", fa: "55", s: "11.1", si: "11.3" }], ["2020-01-15", { c: "12", ca: "18", e: "79", f: "49", fa: "49", s: "6", si: "6" }], ["2025-09-16", { c: "131", ca: "131", e: "131", f: "143", fa: "143", s: "18.4", si: "18.4" }], ["2024-09-03", { c: "120", ca: "120", e: "120", f: "130", fa: "130", s: "17.2", si: "17.2" }], ["2023-09-18", { c: "31", ca: "31", e: "12", f: "6", fa: "6", s: "17", si: "4.2" }], ["2015-07-29", { c: "15", ca: "18", e: "12", f: "1", fa: "4", s: "6", si: "6" }], ["2022-03-14", { c: "37", ca: "37", e: "79", f: "98", fa: "98", s: "15.4", si: "15.4" }], ["2023-12-07", { c: "120", ca: "120", e: "120", f: "49", fa: "49", s: "16.4", si: "16.4" }], ["2023-08-01", { c: "17", ca: "18", e: "79", f: "116", fa: "116", s: "6", si: "6" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2020-01-15", { c: "58", ca: "58", e: "79", f: "53", fa: "53", s: "13", si: "13" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "3", fa: "4", s: "≤4", si: "≤3.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2025-12-12", { c: "128", ca: "128", e: "128", f: "20", fa: "20", s: "26.2", si: "26.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2020-01-15", { c: "61", ca: "61", e: "79", f: "33", fa: "33", s: "11", si: "11" }], ["2020-01-15", { c: "1", ca: "18", e: "79", f: "1", fa: "4", s: "4", si: "3.2" }], ["2016-03-21", { c: "31", ca: "31", e: "12", f: "12", fa: "14", s: "9.1", si: "9.3" }], ["2019-09-19", { c: "14", ca: "18", e: "18", f: "20", fa: "20", s: "10.1", si: "13" }], ["2015-07-29", { c: "3", ca: "18", e: "12", f: "3.5", fa: "4", s: "4", si: "3.2" }], ["2022-05-03", { c: "98", ca: "98", e: "98", f: "100", fa: "100", s: "13.1", si: "13.4" }], ["2020-01-15", { c: "43", ca: "43", e: "79", f: "46", fa: "46", s: "11.1", si: "11.3" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2020-01-15", { c: "1", ca: "18", e: "79", f: "1.5", fa: "4", s: "≤4", si: "≤3.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3.1", si: "2" }], ["2019-03-25", { c: "42", ca: "42", e: "13", f: "38", fa: "38", s: "12.1", si: "12.2" }], ["2021-11-02", { c: "77", ca: "77", e: "79", f: "94", fa: "94", s: "13.1", si: "13.4" }], ["2021-09-20", { c: "93", ca: "93", e: "93", f: "91", fa: "91", s: "15", si: "15" }], ["2025-12-12", { c: "76", ca: "76", e: "79", f: "89", fa: "89", s: "26.2", si: "26.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2023-12-07", { c: "120", ca: "120", e: "120", f: "118", fa: "118", s: "15.4", si: "15.4" }], ["2017-03-27", { c: "52", ca: "52", e: "14", f: "52", fa: "52", s: "10.1", si: "10.3" }], ["2018-04-30", { c: "38", ca: "38", e: "17", f: "47", fa: "35", s: "9", si: "9" }], ["2021-09-20", { c: "56", ca: "56", e: "79", f: "51", fa: "51", s: "15", si: "15" }], ["2020-09-16", { c: "63", ca: "63", e: "17", f: "47", fa: "36", s: "14", si: "14" }], ["2020-02-07", { c: "40", ca: "40", e: "80", f: "58", fa: "28", s: "9", si: "9" }], ["2016-06-07", { c: "34", ca: "34", e: "12", f: "47", fa: "47", s: "9.1", si: "9.3" }], ["2017-03-27", { c: "42", ca: "42", e: "14", f: "39", fa: "39", s: "10.1", si: "10.3" }], ["2024-10-29", { c: "103", ca: "103", e: "103", f: "132", fa: "132", s: "17.2", si: "17.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2015-07-29", { c: "8", ca: "18", e: "12", f: "4", fa: "4", s: "5.1", si: "5" }], ["2020-01-15", { c: "38", ca: "38", e: "79", f: "28", fa: "28", s: "10.1", si: "10.3" }], ["2021-04-26", { c: "89", ca: "89", e: "89", f: "82", fa: "82", s: "14.1", si: "14.5" }], ["2016-09-07", { c: "53", ca: "53", e: "12", f: "35", fa: "35", s: "9.1", si: "9.3" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2021-11-02", { c: "46", ca: "46", e: "79", f: "94", fa: "94", s: "11", si: "11" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-09-30", { c: "29", ca: "29", e: "12", f: "20", fa: "20", s: "9", si: "9" }], ["2021-04-26", { c: "84", ca: "84", e: "84", f: "63", fa: "63", s: "14.1", si: "14.5" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2025-04-04", { c: "135", ca: "135", e: "135", f: "129", fa: "129", s: "18.2", si: "18.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "24", fa: "24", s: "3.1", si: "2" }], ["2022-03-14", { c: "86", ca: "86", e: "86", f: "85", fa: "85", s: "15.4", si: "15.4" }], ["2020-01-15", { c: "60", ca: "60", e: "79", f: "52", fa: "52", s: "10.1", si: "10.3" }], ["2020-01-15", { c: "60", ca: "60", e: "79", f: "58", fa: "58", s: "11.1", si: "11.3" }], ["2016-09-20", { c: "36", ca: "36", e: "14", f: "39", fa: "39", s: "10", si: "10" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2026-03-24", { c: "109", ca: "109", e: "109", f: "149", fa: "149", s: "26.2", si: "26.2" }], ["2021-09-07", { c: "56", ca: "56", e: "79", f: "92", fa: "92", s: "11", si: "11" }], ["2017-04-05", { c: "48", ca: "48", e: "15", f: "34", fa: "34", s: "9.1", si: "9.3" }], ["2020-01-15", { c: "33", ca: "33", e: "79", f: "32", fa: "32", s: "9", si: "9" }], ["2020-01-15", { c: "35", ca: "35", e: "79", f: "41", fa: "41", s: "10", si: "10" }], ["2020-03-24", { c: "79", ca: "79", e: "17", f: "62", fa: "62", s: "13.1", si: "13.4" }], ["2022-11-15", { c: "101", ca: "101", e: "101", f: "107", fa: "107", s: "15.4", si: "15.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2024-07-25", { c: "127", ca: "127", e: "127", f: "118", fa: "118", s: "17", si: "17" }], ["2020-01-15", { c: "62", ca: "62", e: "79", f: "62", fa: "62", s: "11.1", si: "11.3" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2022-01-06", { c: "97", ca: "97", e: "97", f: "34", fa: "34", s: "9", si: "9" }], ["2023-03-27", { c: "97", ca: "97", e: "97", f: "111", fa: "111", s: "16.4", si: "16.4" }], ["2023-03-27", { c: "97", ca: "97", e: "97", f: "111", fa: "111", s: "16.4", si: "16.4" }], ["2023-03-27", { c: "97", ca: "97", e: "97", f: "111", fa: "111", s: "16.4", si: "16.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2023-03-13", { c: "111", ca: "111", e: "111", f: "34", fa: "34", s: "9.1", si: "9.3" }], ["2020-01-15", { c: "52", ca: "52", e: "79", f: "34", fa: "34", s: "9.1", si: "9.3" }], ["2020-01-15", { c: "63", ca: "63", e: "79", f: "34", fa: "34", s: "9.1", si: "9.3" }], ["2020-01-15", { c: "34", ca: "34", e: "79", f: "34", fa: "34", s: "9.1", si: "9.3" }], ["2020-01-15", { c: "52", ca: "52", e: "79", f: "34", fa: "34", s: "9.1", si: "9.3" }], ["2018-09-05", { c: "62", ca: "62", e: "17", f: "62", fa: "62", s: "11", si: "11" }], ["2015-07-29", { c: "2", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2022-09-12", { c: "89", ca: "89", e: "79", f: "89", fa: "89", s: "16", si: "16" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "2" }], ["2023-03-27", { c: "77", ca: "77", e: "79", f: "98", fa: "98", s: "16.4", si: "16.4" }], ["2015-07-29", { c: "10", ca: "18", e: "12", f: "4", fa: "4", s: "5", si: "5" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2017-03-27", { c: "35", ca: "35", e: "12", f: "29", fa: "32", s: "10.1", si: "10.3" }], ["2016-09-20", { c: "39", ca: "39", e: "13", f: "26", fa: "26", s: "10", si: "10" }], ["2015-07-29", { c: "5", ca: "18", e: "12", f: "3.5", fa: "4", s: "5", si: "≤3" }], ["2015-07-29", { c: "11", ca: "18", e: "12", f: "3.5", fa: "4", s: "5.1", si: "5" }], ["2024-09-16", { c: "125", ca: "125", e: "125", f: "128", fa: "128", s: "18", si: "18" }], ["2026-02-14", { c: "145", ca: "145", e: "145", f: "144", fa: "144", s: "26.2", si: "26.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2020-01-15", { c: "71", ca: "71", e: "79", f: "65", fa: "65", s: "12.1", si: "12.2" }], ["2024-06-11", { c: "111", ca: "111", e: "111", f: "127", fa: "127", s: "16.2", si: "16.2" }], ["2015-07-29", { c: "26", ca: "26", e: "12", f: "3.6", fa: "4", s: "7", si: "7" }], ["2017-10-17", { c: "57", ca: "57", e: "16", f: "52", fa: "52", s: "10.1", si: "10.3" }], ["2022-10-27", { c: "107", ca: "107", e: "107", f: "66", fa: "66", s: "16", si: "16" }], ["2022-03-14", { c: "37", ca: "37", e: "15", f: "48", fa: "48", s: "15.4", si: "15.4" }], ["2023-12-19", { c: "105", ca: "105", e: "105", f: "121", fa: "121", s: "15.4", si: "15.4" }], ["2020-03-24", { c: "74", ca: "74", e: "79", f: "67", fa: "67", s: "13.1", si: "13.4" }], ["2015-07-29", { c: "16", ca: "18", e: "12", f: "11", fa: "14", s: "6", si: "6" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "5", ca: "18", e: "12", f: "4", fa: "4", s: "5", si: "4.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "1" }], ["2015-07-29", { c: "5", ca: "18", e: "12", f: "4", fa: "4", s: "5", si: "4.2" }], ["2026-03-24", { c: "105", ca: "105", e: "105", f: "149", fa: "149", s: "17.2", si: "17.2" }], ["2015-07-29", { c: "5", ca: "18", e: "12", f: "4", fa: "4", s: "5", si: "4" }], ["2020-01-15", { c: "54", ca: "54", e: "79", f: "63", fa: "63", s: "10", si: "10" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "1" }], ["2020-01-15", { c: "65", ca: "65", e: "79", f: "52", fa: "52", s: "12.1", si: "12.2" }], ["2015-07-29", { c: "4", ca: "18", e: "12", f: "4", fa: "4", s: "7", si: "7" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-09-30", { c: "41", ca: "41", e: "12", f: "36", fa: "36", s: "9", si: "9" }], ["2024-09-16", { c: "87", ca: "87", e: "87", f: "88", fa: "88", s: "18", si: "18" }], ["2022-04-28", { c: "101", ca: "101", e: "101", f: "96", fa: "96", s: "15", si: "15" }], ["2023-09-18", { c: "106", ca: "106", e: "106", f: "98", fa: "98", s: "17", si: "17" }], ["2023-09-18", { c: "88", ca: "55", e: "88", f: "43", fa: "43", s: "17", si: "17" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2022-10-03", { c: "106", ca: "106", e: "106", f: "97", fa: "97", s: "15.4", si: "15.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2015-07-29", { c: "5", ca: "18", e: "12", f: "17", fa: "17", s: "5", si: "4" }], ["2020-01-15", { c: "20", ca: "25", e: "79", f: "25", fa: "25", s: "6", si: "6" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2020-04-13", { c: "81", ca: "81", e: "81", f: "26", fa: "26", s: "13.1", si: "13.4" }], ["2021-10-05", { c: "41", ca: "41", e: "79", f: "93", fa: "93", s: "10", si: "10" }], ["2023-09-18", { c: "113", ca: "113", e: "113", f: "89", fa: "89", s: "17", si: "17" }], ["2020-01-15", { c: "66", ca: "66", e: "79", f: "50", fa: "50", s: "11.1", si: "11.3" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2023-03-27", { c: "89", ca: "89", e: "89", f: "108", fa: "108", s: "16.4", si: "16.4" }], ["2020-01-15", { c: "39", ca: "39", e: "79", f: "51", fa: "51", s: "10", si: "10" }], ["2021-09-20", { c: "58", ca: "58", e: "79", f: "51", fa: "51", s: "15", si: "15" }], ["2022-08-05", { c: "104", ca: "104", e: "104", f: "72", fa: "79", s: "14.1", si: "14.5" }], ["2023-04-11", { c: "102", ca: "102", e: "102", f: "112", fa: "112", s: "15.5", si: "15.5" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-11-12", { c: "1", ca: "18", e: "13", f: "19", fa: "19", s: "1.2", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "3.6", fa: "4", s: "3", si: "1" }], ["2021-04-26", { c: "20", ca: "25", e: "12", f: "57", fa: "57", s: "14.1", si: "5" }], ["2015-07-29", { c: "5", ca: "18", e: "12", f: "4", fa: "4", s: "5", si: "3" }], ["2020-01-15", { c: "1", ca: "18", e: "79", f: "6", fa: "6", s: "3.1", si: "2" }], ["2015-07-29", { c: "2", ca: "18", e: "12", f: "3", fa: "4", s: "4", si: "3" }], ["2015-07-29", { c: "2", ca: "18", e: "12", f: "3.6", fa: "4", s: "4", si: "3.2" }], ["2025-08-19", { c: "13", ca: "132", e: "13", f: "50", fa: "142", s: "11.1", si: "18.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "7", ca: "18", e: "12", f: "29", fa: "29", s: "5.1", si: "5" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2017-03-16", { c: "4", ca: "57", e: "12", f: "23", fa: "52", s: "3.1", si: "5" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3.1", si: "2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2021-12-07", { c: "66", ca: "66", e: "79", f: "95", fa: "79", s: "12.1", si: "12.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2018-12-11", { c: "41", ca: "41", e: "12", f: "64", fa: "64", s: "9", si: "9" }], ["2019-03-25", { c: "58", ca: "58", e: "16", f: "55", fa: "55", s: "12.1", si: "12.2" }], ["2017-09-28", { c: "24", ca: "25", e: "12", f: "29", fa: "56", s: "10", si: "10" }], ["2021-04-26", { c: "81", ca: "81", e: "81", f: "86", fa: "86", s: "14.1", si: "14.5" }], ["2025-03-04", { c: "129", ca: "129", e: "129", f: "136", fa: "136", s: "16.4", si: "16.4" }], ["2021-04-26", { c: "72", ca: "72", e: "79", f: "78", fa: "79", s: "14.1", si: "14.5" }], ["2020-09-16", { c: "74", ca: "74", e: "79", f: "75", fa: "79", s: "14", si: "14" }], ["2019-09-19", { c: "63", ca: "63", e: "18", f: "58", fa: "58", s: "13", si: "13" }], ["2020-09-16", { c: "71", ca: "71", e: "79", f: "76", fa: "79", s: "14", si: "14" }], ["2024-04-16", { c: "87", ca: "87", e: "87", f: "125", fa: "125", s: "14.1", si: "14.5" }], ["2025-12-12", { c: "135", ca: "135", e: "135", f: "144", fa: "144", s: "26.2", si: "26.2" }], ["2021-01-21", { c: "88", ca: "88", e: "88", f: "82", fa: "82", s: "14", si: "14" }], ["2018-04-12", { c: "55", ca: "55", e: "15", f: "52", fa: "52", s: "11.1", si: "11.3" }], ["2020-01-15", { c: "41", ca: "41", e: "79", f: "36", fa: "36", s: "8", si: "8" }], ["2026-03-24", { c: "146", ca: "146", e: "146", f: "147", fa: "147", s: "26.4", si: "26.4" }], ["2025-03-31", { c: "122", ca: "122", e: "122", f: "131", fa: "131", s: "18.4", si: "18.4" }], ["2015-07-29", { c: "38", ca: "38", e: "12", f: "13", fa: "14", s: "7", si: "7" }], ["2015-07-29", { c: "5", ca: "18", e: "12", f: "1", fa: "4", s: "5", si: "4.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2018-05-09", { c: "61", ca: "61", e: "16", f: "60", fa: "60", s: "11", si: "11" }], ["2026-01-13", { c: "91", ca: "91", e: "91", f: "147", fa: "147", s: "15", si: "15" }], ["2026-05-05", { c: "80", ca: "148", e: "80", f: "114", fa: "114", s: "16", si: "16" }], ["2023-06-06", { c: "80", ca: "80", e: "80", f: "114", fa: "114", s: "15", si: "15" }], ["2015-07-29", { c: "3", ca: "18", e: "12", f: "3.5", fa: "4", s: "4", si: "4" }], ["2025-04-29", { c: "123", ca: "123", e: "123", f: "138", fa: "138", s: "17.2", si: "17.2" }], ["2025-03-31", { c: "114", ca: "114", e: "114", f: "135", fa: "135", s: "18.4", si: "18.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "6", fa: "6", s: "1.2", si: "1" }], ["2023-05-09", { c: "111", ca: "111", e: "111", f: "113", fa: "113", s: "15", si: "15" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3.1", si: "2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2025-12-12", { c: "77", ca: "77", e: "79", f: "122", fa: "122", s: "26.2", si: "26.2" }], ["2020-01-15", { c: "48", ca: "48", e: "79", f: "50", fa: "50", s: "11", si: "11" }], ["2016-09-20", { c: "49", ca: "49", e: "14", f: "44", fa: "44", s: "10", si: "10" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2023-11-21", { c: "109", ca: "109", e: "109", f: "120", fa: "120", s: "16.4", si: "16.4" }], ["2024-05-13", { c: "123", ca: "123", e: "123", f: "120", fa: "120", s: "17.5", si: "17.5" }], ["2020-07-28", { c: "83", ca: "83", e: "83", f: "69", fa: "79", s: "13", si: "13" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2023-12-11", { c: "113", ca: "113", e: "113", f: "112", fa: "112", s: "17.2", si: "17.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2025-09-15", { c: "46", ca: "46", e: "79", f: "127", fa: "127", s: "5", si: "26" }], ["2020-01-15", { c: "46", ca: "46", e: "79", f: "39", fa: "39", s: "11.1", si: "11.3" }], ["2021-01-26", { c: "50", ca: "50", e: "79", f: "85", fa: "85", s: "11.1", si: "11.3" }], ["2020-01-15", { c: "65", ca: "65", e: "79", f: "50", fa: "50", s: "9", si: "9" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2023-12-19", { c: "77", ca: "77", e: "79", f: "121", fa: "121", s: "16.4", si: "16.4" }], ["2015-07-29", { c: "4", ca: "18", e: "12", f: "3.5", fa: "6", s: "4", si: "3.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2020-09-16", { c: "85", ca: "85", e: "85", f: "79", fa: "79", s: "14", si: "14" }], ["2021-09-20", { c: "89", ca: "89", e: "89", f: "66", fa: "66", s: "15", si: "15" }], ["2015-07-29", { c: "26", ca: "26", e: "12", f: "21", fa: "21", s: "7", si: "7" }], ["2015-07-29", { c: "38", ca: "38", e: "12", f: "13", fa: "14", s: "8", si: "8" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "7", ca: "18", e: "12", f: "4", fa: "4", s: "5.1", si: "5" }], ["2020-01-15", { c: "24", ca: "25", e: "79", f: "35", fa: "35", s: "7", si: "7" }], ["2023-12-07", { c: "120", ca: "120", e: "120", f: "53", fa: "53", s: "15.4", si: "15.4" }], ["2015-07-29", { c: "9", ca: "18", e: "12", f: "6", fa: "6", s: "5.1", si: "5" }], ["2026-04-10", { c: "147", ca: "147", e: "147", f: "137", fa: "137", s: "26.2", si: "26.2" }], ["2023-01-12", { c: "109", ca: "109", e: "109", f: "4", fa: "4", s: "5.1", si: "5" }], ["2022-04-28", { c: "101", ca: "101", e: "101", f: "63", fa: "63", s: "15.4", si: "15.4" }], ["2017-09-19", { c: "53", ca: "53", e: "12", f: "36", fa: "36", s: "11", si: "11" }], ["2020-02-04", { c: "80", ca: "80", e: "12", f: "42", fa: "42", s: "8", si: "12.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "1" }], ["2023-03-27", { c: "104", ca: "104", e: "104", f: "102", fa: "102", s: "16.4", si: "16.4" }], ["2021-04-26", { c: "49", ca: "49", e: "79", f: "25", fa: "25", s: "14.1", si: "14" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "1" }], ["2023-03-27", { c: "60", ca: "60", e: "18", f: "57", fa: "57", s: "16.4", si: "16.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2018-10-02", { c: "6", ca: "18", e: "18", f: "56", fa: "56", s: "6", si: "10.3" }], ["2020-07-28", { c: "79", ca: "79", e: "79", f: "75", fa: "79", s: "13.1", si: "13.4" }], ["2020-01-15", { c: "46", ca: "46", e: "79", f: "66", fa: "66", s: "11", si: "11" }], ["2015-07-29", { c: "18", ca: "18", e: "12", f: "1", fa: "4", s: "1.3", si: "1" }], ["2020-01-15", { c: "41", ca: "41", e: "79", f: "32", fa: "32", s: "8", si: "8" }], ["2020-01-15", { c: "44", ca: "44", e: "79", f: "23", fa: "23", s: "≤9.1", si: "≤9.3" }], ["2022-09-02", { c: "105", ca: "105", e: "105", f: "103", fa: "103", s: "15.6", si: "15.6" }], ["2023-09-18", { c: "66", ca: "66", e: "79", f: "115", fa: "115", s: "17", si: "17" }], ["2022-09-12", { c: "55", ca: "55", e: "79", f: "72", fa: "79", s: "16", si: "16" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2017-03-07", { c: "50", ca: "50", e: "12", f: "52", fa: "52", s: "9", si: "9" }], ["2015-07-29", { c: "26", ca: "26", e: "12", f: "14", fa: "14", s: "7", si: "7" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "5", ca: "18", e: "12", f: "4", fa: "4", s: "5", si: "4.2" }], ["2026-01-13", { c: "102", ca: "102", e: "102", f: "147", fa: "147", s: "26.2", si: "26.2" }], ["2021-10-25", { c: "57", ca: "57", e: "12", f: "58", fa: "58", s: "15", si: "15.1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2023-12-11", { c: "120", ca: "120", e: "120", f: "117", fa: "117", s: "17.2", si: "17.2" }], ["2021-01-21", { c: "88", ca: "88", e: "88", f: "84", fa: "84", s: "9", si: "9" }], ["2023-03-27", { c: "20", ca: "42", e: "14", f: "22", fa: "22", s: "7", si: "16.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "3.5", fa: "4", s: "3.1", si: "2" }], ["2023-05-09", { c: "111", ca: "111", e: "111", f: "113", fa: "113", s: "9", si: "9" }], ["2015-07-29", { c: "4", ca: "18", e: "12", f: "3.5", fa: "4", s: "3.1", si: "2" }], ["2020-09-16", { c: "85", ca: "85", e: "85", f: "79", fa: "79", s: "14", si: "14" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2020-07-28", { c: "75", ca: "75", e: "79", f: "70", fa: "79", s: "13", si: "13" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "2" }], ["2020-01-15", { c: "32", ca: "32", e: "79", f: "36", fa: "36", s: "10", si: "10" }], ["2022-03-14", { c: "93", ca: "93", e: "93", f: "92", fa: "92", s: "15.4", si: "15.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2020-01-15", { c: "32", ca: "32", e: "79", f: "36", fa: "36", s: "10", si: "10" }], ["2015-07-29", { c: "24", ca: "25", e: "12", f: "24", fa: "24", s: "8", si: "8" }], ["2021-04-26", { c: "80", ca: "80", e: "80", f: "71", fa: "79", s: "14.1", si: "14.5" }], ["2015-07-29", { c: "10", ca: "18", e: "12", f: "10", fa: "10", s: "8", si: "8" }], ["2015-07-29", { c: "10", ca: "18", e: "12", f: "6", fa: "6", s: "8", si: "8" }], ["2015-07-29", { c: "29", ca: "29", e: "12", f: "24", fa: "24", s: "8", si: "8" }], ["2016-08-02", { c: "27", ca: "27", e: "14", f: "29", fa: "29", s: "8", si: "8" }], ["2018-04-30", { c: "24", ca: "25", e: "17", f: "25", fa: "25", s: "8", si: "9" }], ["2021-04-26", { c: "35", ca: "35", e: "12", f: "25", fa: "25", s: "14.1", si: "14.5" }], ["2023-03-27", { c: "69", ca: "69", e: "79", f: "105", fa: "105", s: "16.4", si: "16.4" }], ["2023-05-09", { c: "111", ca: "111", e: "111", f: "113", fa: "113", s: "15.4", si: "15.4" }], ["2015-07-29", { c: "2", ca: "18", e: "12", f: "1.5", fa: "4", s: "4", si: "3.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "2", si: "1" }], ["≤2020-03-24", { c: "≤80", ca: "≤80", e: "≤80", f: "1.5", fa: "4", s: "≤13.1", si: "≤13.4" }], ["2026-05-11", { c: "133", ca: "133", e: "133", f: "136", fa: "136", s: "26.5", si: "26.5" }], ["2020-01-15", { c: "66", ca: "66", e: "79", f: "58", fa: "58", s: "11.1", si: "11.3" }], ["2023-03-27", { c: "108", ca: "109", e: "108", f: "111", fa: "111", s: "16.4", si: "16.4" }], ["2023-03-27", { c: "94", ca: "94", e: "94", f: "88", fa: "88", s: "16.4", si: "16.4" }], ["2017-04-05", { c: "1", ca: "18", e: "15", f: "1.5", fa: "4", s: "1.2", si: "1" }], ["≤2018-10-02", { c: "10", ca: "18", e: "≤18", f: "4", fa: "4", s: "7", si: "7" }], ["2023-09-18", { c: "113", ca: "113", e: "113", f: "66", fa: "66", s: "17", si: "17" }], ["2022-09-12", { c: "90", ca: "90", e: "90", f: "81", fa: "81", s: "16", si: "16" }], ["2020-03-24", { c: "68", ca: "68", e: "79", f: "61", fa: "61", s: "13.1", si: "13.4" }], ["2018-10-02", { c: "23", ca: "25", e: "18", f: "49", fa: "49", s: "7", si: "7" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2019-01-29", { c: "50", ca: "50", e: "12", f: "65", fa: "65", s: "10", si: "10" }], ["2024-12-11", { c: "15", ca: "18", e: "79", f: "95", fa: "95", s: "18.2", si: "18.2" }], ["2015-07-29", { c: "4", ca: "18", e: "12", f: "1.5", fa: "4", s: "5", si: "4" }], ["2015-07-29", { c: "33", ca: "33", e: "12", f: "18", fa: "18", s: "7", si: "7" }], ["2024-03-22", { c: "123", ca: "123", e: "123", f: "≤66", fa: "≤66", s: "≤12", si: "≤12" }], ["2021-04-26", { c: "60", ca: "60", e: "79", f: "84", fa: "84", s: "14.1", si: "14.5" }], ["2025-09-15", { c: "124", ca: "124", e: "124", f: "128", fa: "128", s: "26", si: "26" }], ["2023-03-27", { c: "94", ca: "94", e: "94", f: "99", fa: "99", s: "16.4", si: "16.4" }], ["2015-09-16", { c: "6", ca: "18", e: "12", f: "7", fa: "7", s: "8", si: "9" }], ["2022-09-12", { c: "44", ca: "44", e: "79", f: "46", fa: "46", s: "16", si: "16" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2016-03-21", { c: "38", ca: "38", e: "13", f: "38", fa: "38", s: "9.1", si: "9.3" }], ["2020-01-15", { c: "57", ca: "57", e: "79", f: "51", fa: "51", s: "10.1", si: "10.3" }], ["2020-01-15", { c: "47", ca: "47", e: "79", f: "51", fa: "51", s: "9", si: "9" }], ["2020-01-15", { c: "59", ca: "59", e: "79", f: "3", fa: "4", s: "8", si: "8" }], ["2015-07-29", { c: "2", ca: "18", e: "12", f: "3.6", fa: "4", s: "4", si: "3.2" }], ["2020-07-28", { c: "55", ca: "55", e: "12", f: "59", fa: "79", s: "13", si: "13" }], ["2025-01-27", { c: "116", ca: "116", e: "116", f: "125", fa: "125", s: "17", si: "18.3" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "2", ca: "18", e: "12", f: "3", fa: "4", s: "4", si: "3.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2020-01-15", { c: "76", ca: "76", e: "79", f: "67", fa: "67", s: "12.1", si: "13" }], ["2022-05-31", { c: "96", ca: "96", e: "96", f: "101", fa: "101", s: "14.1", si: "14.5" }], ["2020-01-15", { c: "74", ca: "74", e: "79", f: "63", fa: "64", s: "10.1", si: "10.3" }], ["2023-12-11", { c: "73", ca: "73", e: "79", f: "78", fa: "79", s: "17.2", si: "17.2" }], ["2023-12-11", { c: "86", ca: "86", e: "86", f: "101", fa: "101", s: "17.2", si: "17.2" }], ["2023-06-06", { c: "1", ca: "18", e: "12", f: "1", fa: "114", s: "1.1", si: "1" }], ["2025-05-01", { c: "136", ca: "136", e: "136", f: "97", fa: "97", s: "15.4", si: "15.4" }], ["2019-09-19", { c: "63", ca: "63", e: "12", f: "6", fa: "6", s: "13", si: "13" }], ["2015-07-29", { c: "6", ca: "18", e: "12", f: "6", fa: "6", s: "6", si: "7" }], ["2015-07-29", { c: "32", ca: "32", e: "12", f: "29", fa: "29", s: "8", si: "8" }], ["2020-07-28", { c: "76", ca: "76", e: "79", f: "71", fa: "79", s: "13", si: "13" }], ["2020-09-16", { c: "85", ca: "85", e: "85", f: "79", fa: "79", s: "14", si: "14" }], ["2018-10-02", { c: "63", ca: "63", e: "18", f: "58", fa: "58", s: "11.1", si: "11.3" }], ["2025-01-07", { c: "128", ca: "128", e: "128", f: "134", fa: "134", s: "18.2", si: "18.2" }], ["2024-03-05", { c: "119", ca: "119", e: "119", f: "121", fa: "121", s: "17.4", si: "17.4" }], ["2016-09-20", { c: "49", ca: "49", e: "12", f: "18", fa: "18", s: "10", si: "10" }], ["2023-03-27", { c: "50", ca: "50", e: "17", f: "44", fa: "48", s: "16", si: "16.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "2" }], ["2020-03-24", { c: "63", ca: "63", e: "79", f: "49", fa: "49", s: "13.1", si: "13.4" }], ["2020-07-28", { c: "71", ca: "71", e: "79", f: "69", fa: "79", s: "12.1", si: "12.2" }], ["2021-04-26", { c: "87", ca: "87", e: "87", f: "70", fa: "79", s: "14.1", si: "14.5" }], ["2026-01-13", { c: "118", ca: "118", e: "118", f: "147", fa: "147", s: "17.2", si: "17.2" }], ["2026-01-13", { c: "111", ca: "111", e: "111", f: "147", fa: "147", s: "17.2", si: "17.2" }], ["2020-07-28", { c: "1", ca: "18", e: "13", f: "78", fa: "79", s: "4", si: "3.2" }], ["2026-03-24", { c: "89", ca: "89", e: "89", f: "102", fa: "102", s: "26.4", si: "26.4" }], ["2024-01-23", { c: "119", ca: "119", e: "119", f: "122", fa: "122", s: "17.2", si: "17.2" }], ["2021-09-20", { c: "85", ca: "85", e: "85", f: "87", fa: "87", s: "15", si: "15" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2025-05-01", { c: "136", ca: "136", e: "136", f: "134", fa: "134", s: "18.2", si: "18.2" }], ["2024-07-09", { c: "85", ca: "85", e: "85", f: "128", fa: "128", s: "16.4", si: "16.4" }], ["2024-09-16", { c: "125", ca: "125", e: "125", f: "128", fa: "128", s: "18", si: "18" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "4", ca: "18", e: "12", f: "3.6", fa: "4", s: "5", si: "4" }], ["2026-03-24", { c: "96", ca: "96", e: "96", f: "149", fa: "149", s: "16.4", si: "16.4" }], ["2026-03-24", { c: "74", ca: "74", e: "79", f: "149", fa: "149", s: "18.4", si: "18.4" }], ["2015-07-29", { c: "24", ca: "25", e: "12", f: "23", fa: "23", s: "7", si: "7" }], ["2023-03-27", { c: "69", ca: "69", e: "79", f: "99", fa: "99", s: "16.4", si: "16.4" }], ["2024-10-29", { c: "83", ca: "83", e: "83", f: "132", fa: "132", s: "15.4", si: "15.4" }], ["2025-05-27", { c: "134", ca: "134", e: "134", f: "139", fa: "139", s: "18.4", si: "18.4" }], ["2024-07-09", { c: "111", ca: "111", e: "111", f: "128", fa: "128", s: "16.4", si: "16.4" }], ["2020-07-28", { c: "64", ca: "64", e: "79", f: "69", fa: "79", s: "13.1", si: "13.4" }], ["2022-09-12", { c: "68", ca: "68", e: "79", f: "62", fa: "62", s: "16", si: "16" }], ["2018-10-23", { c: "1", ca: "18", e: "12", f: "63", fa: "63", s: "3", si: "1" }], ["2023-03-27", { c: "54", ca: "54", e: "17", f: "45", fa: "45", s: "16.4", si: "16.4" }], ["2017-09-19", { c: "29", ca: "29", e: "12", f: "35", fa: "35", s: "11", si: "11" }], ["2020-07-27", { c: "84", ca: "84", e: "84", f: "67", fa: "67", s: "9.1", si: "9.3" }], ["2026-01-13", { c: "111", ca: "111", e: "111", f: "147", fa: "147", s: "17.2", si: "17.2" }], ["2020-01-15", { c: "65", ca: "65", e: "79", f: "52", fa: "52", s: "12.1", si: "12.2" }], ["2026-01-13", { c: "111", ca: "111", e: "111", f: "147", fa: "147", s: "17.2", si: "17.2" }], ["2023-11-21", { c: "111", ca: "111", e: "111", f: "120", fa: "120", s: "16.4", si: "16.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2024-05-17", { c: "125", ca: "125", e: "125", f: "118", fa: "118", s: "17.2", si: "17.2" }], ["2015-07-29", { c: "5", ca: "18", e: "12", f: "38", fa: "38", s: "5", si: "4.2" }], ["2024-12-11", { c: "128", ca: "128", e: "128", f: "38", fa: "38", s: "18.2", si: "18.2" }], ["2024-12-11", { c: "84", ca: "84", e: "84", f: "38", fa: "38", s: "18.2", si: "18.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2020-01-15", { c: "69", ca: "69", e: "79", f: "65", fa: "65", s: "11.1", si: "11.3" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2025-12-12", { c: "143", ca: "143", e: "143", f: "146", fa: "146", s: "26.2", si: "26.2" }], ["2020-01-15", { c: "27", ca: "27", e: "79", f: "32", fa: "32", s: "7", si: "7" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2023-03-27", { c: "38", ca: "39", e: "79", f: "43", fa: "43", s: "16.4", si: "16.4" }], ["2025-03-31", { c: "84", ca: "84", e: "84", f: "126", fa: "126", s: "16.4", si: "18.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "2" }], ["2023-12-07", { c: "120", ca: "120", e: "120", f: "113", fa: "113", s: "17", si: "17" }], ["2022-03-14", { c: "61", ca: "61", e: "79", f: "36", fa: "36", s: "15.4", si: "15.4" }], ["2020-09-16", { c: "61", ca: "61", e: "79", f: "36", fa: "36", s: "14", si: "14" }], ["2020-01-15", { c: "1", ca: "18", e: "79", f: "1", fa: "4", s: "3", si: "1" }], ["2020-01-15", { c: "69", ca: "69", e: "79", f: "68", fa: "68", s: "11", si: "11" }], ["2024-10-01", { c: "80", ca: "80", e: "80", f: "131", fa: "131", s: "16.1", si: "16.1" }], ["2025-12-12", { c: "121", ca: "121", e: "121", f: "64", fa: "64", s: "26.2", si: "26.2" }], ["2024-12-11", { c: "94", ca: "94", e: "94", f: "97", fa: "97", s: "18.2", si: "18.2" }], ["2024-12-11", { c: "121", ca: "121", e: "121", f: "64", fa: "64", s: "18.2", si: "18.2" }], ["2025-12-12", { c: "114", ca: "114", e: "114", f: "109", fa: "109", s: "26.2", si: "26.2" }], ["2023-10-13", { c: "118", ca: "118", e: "118", f: "118", fa: "118", s: "17", si: "17" }], ["2015-07-29", { c: "5", ca: "18", e: "12", f: "4", fa: "4", s: "5", si: "4.2" }], ["2015-07-29", { c: "5", ca: "18", e: "12", f: "4", fa: "4", s: "5", si: "4.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2017-03-07", { c: "11", ca: "18", e: "12", f: "52", fa: "52", s: "5.1", si: "5" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "1" }], ["2020-01-15", { c: "6", ca: "18", e: "79", f: "6", fa: "45", s: "5", si: "5" }], ["2023-03-27", { c: "65", ca: "65", e: "79", f: "61", fa: "61", s: "16.4", si: "16.4" }], ["2018-04-30", { c: "45", ca: "45", e: "17", f: "44", fa: "44", s: "11.1", si: "11.3" }], ["2015-07-29", { c: "38", ca: "38", e: "12", f: "13", fa: "14", s: "8", si: "8" }], ["2024-06-11", { c: "122", ca: "122", e: "122", f: "127", fa: "127", s: "17", si: "17" }], ["2015-07-29", { c: "3", ca: "18", e: "12", f: "3.5", fa: "4", s: "4", si: "5" }], ["2015-07-29", { c: "3", ca: "18", e: "12", f: "3.5", fa: "4", s: "4", si: "5" }], ["2020-01-15", { c: "53", ca: "53", e: "79", f: "63", fa: "63", s: "10", si: "10" }], ["2020-07-28", { c: "73", ca: "73", e: "79", f: "72", fa: "79", s: "13.1", si: "13.4" }], ["2026-02-24", { c: "135", ca: "135", e: "135", f: "148", fa: "148", s: "18.4", si: "18.4" }], ["2020-01-15", { c: "37", ca: "37", e: "79", f: "62", fa: "62", s: "10.1", si: "10.3" }], ["2020-01-15", { c: "37", ca: "37", e: "79", f: "54", fa: "54", s: "10.1", si: "10.3" }], ["2021-12-13", { c: "68", ca: "89", e: "79", f: "79", fa: "79", s: "15.2", si: "15.2" }], ["2026-05-05", { c: "5", ca: "148", e: "79", f: "29", fa: "33", s: "16", si: "16" }], ["2020-01-15", { c: "53", ca: "53", e: "79", f: "63", fa: "63", s: "10", si: "10" }], ["2023-03-27", { c: "92", ca: "92", e: "92", f: "92", fa: "92", s: "16.4", si: "16.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2020-01-15", { c: "19", ca: "25", e: "79", f: "4", fa: "4", s: "6", si: "6" }], ["2015-07-29", { c: "3", ca: "18", e: "12", f: "3.5", fa: "4", s: "3.1", si: "2" }], ["2020-01-15", { c: "18", ca: "18", e: "79", f: "55", fa: "55", s: "7", si: "7" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2018-09-05", { c: "33", ca: "33", e: "14", f: "49", fa: "62", s: "7", si: "7" }], ["2017-11-28", { c: "9", ca: "47", e: "12", f: "2", fa: "57", s: "5.1", si: "5" }], ["2020-01-15", { c: "60", ca: "60", e: "79", f: "55", fa: "55", s: "11.1", si: "11.3" }], ["2017-03-27", { c: "38", ca: "38", e: "13", f: "38", fa: "38", s: "10.1", si: "10.3" }], ["2020-01-15", { c: "70", ca: "70", e: "79", f: "3", fa: "4", s: "10.1", si: "10.3" }], ["2024-08-06", { c: "117", ca: "117", e: "117", f: "129", fa: "129", s: "17.5", si: "17.5" }], ["2024-05-17", { c: "125", ca: "125", e: "125", f: "126", fa: "126", s: "17.4", si: "17.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2020-09-16", { c: "77", ca: "77", e: "79", f: "65", fa: "65", s: "14", si: "14" }], ["2019-09-19", { c: "56", ca: "56", e: "16", f: "59", fa: "59", s: "13", si: "13" }], ["2023-12-05", { c: "119", ca: "120", e: "85", f: "65", fa: "65", s: "11.1", si: "11.3" }], ["2023-09-18", { c: "61", ca: "61", e: "79", f: "57", fa: "57", s: "17", si: "17" }], ["2022-06-28", { c: "67", ca: "67", e: "79", f: "102", fa: "102", s: "14.1", si: "14.5" }], ["2022-03-14", { c: "92", ca: "92", e: "92", f: "90", fa: "90", s: "15.4", si: "15.4" }], ["2015-09-30", { c: "41", ca: "41", e: "12", f: "29", fa: "29", s: "9", si: "9" }], ["2015-09-30", { c: "41", ca: "41", e: "12", f: "40", fa: "40", s: "9", si: "9" }], ["2020-01-15", { c: "73", ca: "73", e: "79", f: "67", fa: "67", s: "13", si: "13" }], ["2016-09-20", { c: "34", ca: "34", e: "12", f: "31", fa: "31", s: "10", si: "10" }], ["2017-04-05", { c: "57", ca: "57", e: "15", f: "48", fa: "48", s: "10", si: "10" }], ["2015-09-30", { c: "41", ca: "41", e: "12", f: "34", fa: "34", s: "9", si: "9" }], ["2015-09-30", { c: "41", ca: "36", e: "12", f: "24", fa: "24", s: "9", si: "9" }], ["2020-08-27", { c: "85", ca: "85", e: "85", f: "77", fa: "79", s: "13.1", si: "13.4" }], ["2015-09-30", { c: "41", ca: "36", e: "12", f: "17", fa: "17", s: "9", si: "9" }], ["2020-01-15", { c: "66", ca: "66", e: "79", f: "61", fa: "61", s: "12", si: "12" }], ["2023-10-24", { c: "111", ca: "111", e: "111", f: "119", fa: "119", s: "16.4", si: "16.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2022-03-14", { c: "98", ca: "98", e: "98", f: "94", fa: "94", s: "15.4", si: "15.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2023-09-15", { c: "117", ca: "117", e: "117", f: "71", fa: "79", s: "16", si: "16" }], ["2018-04-30", { c: "46", ca: "46", e: "17", f: "51", fa: "51", s: "11.1", si: "11.3" }], ["2015-09-30", { c: "28", ca: "28", e: "12", f: "22", fa: "22", s: "9", si: "9" }], ["2016-09-20", { c: "2", ca: "18", e: "12", f: "49", fa: "49", s: "4", si: "3.2" }], ["2020-01-15", { c: "1", ca: "18", e: "79", f: "3", fa: "4", s: "3", si: "2" }], ["2015-07-29", { c: "5", ca: "18", e: "12", f: "3", fa: "4", s: "6", si: "6" }], ["2015-09-30", { c: "38", ca: "38", e: "12", f: "36", fa: "36", s: "9", si: "9" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2021-08-10", { c: "42", ca: "42", e: "79", f: "91", fa: "91", s: "13.1", si: "13.4" }], ["2018-10-02", { c: "1", ca: "18", e: "18", f: "1.5", fa: "4", s: "3.1", si: "2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1.3", si: "2" }], ["2024-12-11", { c: "89", ca: "89", e: "89", f: "131", fa: "131", s: "18.2", si: "18.2" }], ["2015-11-12", { c: "26", ca: "26", e: "13", f: "22", fa: "22", s: "8", si: "8" }], ["2020-01-15", { c: "62", ca: "62", e: "79", f: "53", fa: "53", s: "11", si: "11" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2022-09-12", { c: "47", ca: "47", e: "12", f: "49", fa: "49", s: "16", si: "16" }], ["2022-03-14", { c: "48", ca: "48", e: "79", f: "48", fa: "48", s: "15.4", si: "15.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2022-03-14", { c: "64", ca: "64", e: "79", f: "70", fa: "79", s: "15.4", si: "15.4" }], ["2026-05-07", { c: "148", ca: "148", e: "148", f: "75", fa: "79", s: "15.4", si: "15.4" }], ["2025-12-12", { c: "121", ca: "121", e: "121", f: "137", fa: "137", s: "26.2", si: "26.2" }], ["2022-03-03", { c: "99", ca: "99", e: "99", f: "46", fa: "46", s: "7", si: "7" }], ["2020-01-15", { c: "38", ca: "38", e: "79", f: "19", fa: "19", s: "10.1", si: "10.3" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2026-03-13", { c: "146", ca: "146", e: "146", f: "121", fa: "121", s: "15", si: "15" }], ["2026-03-13", { c: "146", ca: "146", e: "146", f: "121", fa: "121", s: "15", si: "15" }], ["2020-09-16", { c: "48", ca: "48", e: "79", f: "41", fa: "41", s: "14", si: "14" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "7", fa: "7", s: "1.3", si: "1" }], ["2015-07-29", { c: "2", ca: "18", e: "12", f: "3.5", fa: "4", s: "1.1", si: "1" }], ["2017-04-05", { c: "4", ca: "18", e: "15", f: "49", fa: "49", s: "3", si: "2" }], ["2015-07-29", { c: "23", ca: "25", e: "12", f: "31", fa: "31", s: "6", si: "6" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2020-11-19", { c: "87", ca: "87", e: "87", f: "70", fa: "79", s: "12.1", si: "12.2" }], ["2020-07-28", { c: "33", ca: "33", e: "12", f: "74", fa: "79", s: "12.1", si: "12.2" }], ["2024-10-17", { c: "130", ca: "130", e: "130", f: "124", fa: "124", s: "17.5", si: "17.5" }], ["2024-05-13", { c: "114", ca: "114", e: "114", f: "121", fa: "121", s: "17.5", si: "17.5" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3" }], ["2017-10-24", { c: "62", ca: "62", e: "14", f: "22", fa: "22", s: "10", si: "10" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2026-05-11", { c: "140", ca: "140", e: "140", f: "145", fa: "145", s: "26.5", si: "26.5" }], ["2019-09-19", { c: "36", ca: "36", e: "12", f: "52", fa: "52", s: "13", si: "9.3" }], ["2024-03-05", { c: "114", ca: "114", e: "114", f: "122", fa: "122", s: "17.4", si: "17.4" }], ["2024-04-16", { c: "118", ca: "118", e: "118", f: "125", fa: "125", s: "13.1", si: "13.4" }], ["2015-09-30", { c: "36", ca: "36", e: "12", f: "16", fa: "16", s: "9", si: "9" }], ["2022-03-14", { c: "36", ca: "36", e: "12", f: "16", fa: "16", s: "15.4", si: "15.4" }], ["2024-08-06", { c: "117", ca: "117", e: "117", f: "129", fa: "129", s: "17.4", si: "17.4" }], ["2015-09-30", { c: "26", ca: "26", e: "12", f: "16", fa: "16", s: "9", si: "9" }], ["2023-03-14", { c: "19", ca: "25", e: "79", f: "111", fa: "111", s: "6", si: "6" }], ["2023-03-13", { c: "111", ca: "111", e: "111", f: "108", fa: "108", s: "15.4", si: "15.4" }], ["2026-02-24", { c: "83", ca: "83", e: "83", f: "148", fa: "148", s: "26", si: "26" }], ["2023-07-21", { c: "115", ca: "115", e: "115", f: "70", fa: "79", s: "15", si: "15" }], ["2016-09-20", { c: "45", ca: "45", e: "12", f: "38", fa: "38", s: "10", si: "10" }], ["2016-09-20", { c: "45", ca: "45", e: "12", f: "37", fa: "37", s: "10", si: "10" }], ["2015-07-29", { c: "7", ca: "18", e: "12", f: "4", fa: "4", s: "5.1", si: "4.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2025-09-05", { c: "140", ca: "140", e: "140", f: "133", fa: "133", s: "18.2", si: "18.2" }], ["2015-09-30", { c: "44", ca: "44", e: "12", f: "40", fa: "40", s: "9", si: "9" }], ["2016-03-21", { c: "41", ca: "41", e: "13", f: "27", fa: "27", s: "9.1", si: "9.3" }], ["2023-09-18", { c: "113", ca: "113", e: "113", f: "102", fa: "102", s: "17", si: "17" }], ["2018-04-30", { c: "44", ca: "44", e: "17", f: "48", fa: "48", s: "10.1", si: "10.3" }], ["2015-07-29", { c: "32", ca: "32", e: "12", f: "19", fa: "19", s: "7", si: "7" }], ["2023-12-07", { c: "120", ca: "120", e: "120", f: "115", fa: "115", s: "17", si: "17" }], ["2025-09-15", { c: "95", ca: "95", e: "95", f: "142", fa: "142", s: "26", si: "26" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "2", si: "1" }], ["2023-11-21", { c: "72", ca: "72", e: "79", f: "120", fa: "120", s: "16.4", si: "16.4" }], ["2016-09-20", { c: "4", ca: "18", e: "12", f: "3.5", fa: "4", s: "10", si: "10" }], ["2023-11-02", { c: "119", ca: "119", e: "119", f: "88", fa: "88", s: "16.5", si: "16.5" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "≤4", si: "≤3.2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2024-04-18", { c: "124", ca: "124", e: "124", f: "120", fa: "120", s: "17.4", si: "17.4" }], ["2015-07-29", { c: "3", ca: "18", e: "12", f: "3.5", fa: "4", s: "3.1", si: "3" }], ["2025-10-14", { c: "125", ca: "125", e: "125", f: "144", fa: "144", s: "18.2", si: "18.2" }], ["2025-10-14", { c: "111", ca: "111", e: "111", f: "144", fa: "144", s: "18", si: "18" }], ["2022-12-05", { c: "108", ca: "108", e: "108", f: "101", fa: "101", s: "15.4", si: "15.4" }], ["2017-10-17", { c: "26", ca: "26", e: "16", f: "19", fa: "19", s: "7", si: "7" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1.3", si: "1" }], ["2021-08-10", { c: "61", ca: "61", e: "79", f: "91", fa: "68", s: "13", si: "13" }], ["2017-10-17", { c: "57", ca: "57", e: "16", f: "52", fa: "52", s: "11", si: "11" }], ["2021-04-26", { c: "85", ca: "85", e: "85", f: "78", fa: "79", s: "14.1", si: "14.5" }], ["2026-02-24", { c: "137", ca: "137", e: "137", f: "148", fa: "148", s: "16", si: "16" }], ["2021-10-25", { c: "75", ca: "75", e: "79", f: "78", fa: "79", s: "15.1", si: "15.1" }], ["2022-05-03", { c: "95", ca: "95", e: "95", f: "100", fa: "100", s: "15.2", si: "15.2" }], ["2024-03-05", { c: "114", ca: "114", e: "114", f: "112", fa: "112", s: "17.4", si: "17.4" }], ["2024-12-11", { c: "119", ca: "119", e: "119", f: "120", fa: "120", s: "18.2", si: "18.2" }], ["2020-10-20", { c: "86", ca: "86", e: "86", f: "78", fa: "79", s: "13.1", si: "13.4" }], ["2020-03-24", { c: "74", ca: "74", e: "79", f: "62", fa: "62", s: "13.1", si: "13.4" }], ["2021-10-25", { c: "75", ca: "75", e: "18", f: "64", fa: "64", s: "15.1", si: "15.1" }], ["2021-11-19", { c: "96", ca: "96", e: "96", f: "79", fa: "79", s: "15.1", si: "15.1" }], ["2021-04-26", { c: "69", ca: "69", e: "18", f: "62", fa: "62", s: "14.1", si: "14.5" }], ["2023-03-27", { c: "91", ca: "91", e: "91", f: "89", fa: "89", s: "16.4", si: "16.4" }], ["2024-12-11", { c: "112", ca: "112", e: "112", f: "121", fa: "121", s: "18.2", si: "18.2" }], ["2021-12-13", { c: "74", ca: "88", e: "79", f: "79", fa: "79", s: "15.2", si: "15.2" }], ["2024-09-16", { c: "119", ca: "119", e: "119", f: "120", fa: "120", s: "18", si: "18" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "4", si: "3.2" }], ["2021-04-26", { c: "84", ca: "84", e: "84", f: "79", fa: "79", s: "14.1", si: "14.5" }], ["2015-07-29", { c: "36", ca: "36", e: "12", f: "6", fa: "6", s: "8", si: "8" }], ["2015-09-30", { c: "36", ca: "36", e: "12", f: "34", fa: "34", s: "9", si: "9" }], ["2020-09-16", { c: "84", ca: "84", e: "84", f: "75", fa: "79", s: "14", si: "14" }], ["2021-04-26", { c: "35", ca: "35", e: "12", f: "25", fa: "25", s: "14.1", si: "14.5" }], ["2015-07-29", { c: "37", ca: "37", e: "12", f: "34", fa: "34", s: "11", si: "11" }], ["2022-03-14", { c: "69", ca: "69", e: "79", f: "96", fa: "96", s: "15.4", si: "15.4" }], ["2021-09-07", { c: "67", ca: "70", e: "18", f: "60", fa: "92", s: "13", si: "13" }], ["2023-10-24", { c: "85", ca: "85", e: "85", f: "119", fa: "119", s: "16", si: "16" }], ["2015-07-29", { c: "9", ca: "25", e: "12", f: "4", fa: "4", s: "5.1", si: "8" }], ["2021-09-20", { c: "63", ca: "63", e: "17", f: "30", fa: "30", s: "14", si: "15" }], ["2024-10-29", { c: "104", ca: "104", e: "104", f: "132", fa: "132", s: "16.4", si: "16.4" }], ["2020-01-15", { c: "47", ca: "47", e: "79", f: "53", fa: "53", s: "12", si: "12" }], ["2020-03-24", { c: "63", ca: "63", e: "79", f: "55", fa: "51", s: "13.1", si: "13.4" }], ["2020-03-24", { c: "49", ca: "49", e: "79", f: "55", fa: "30", s: "13.1", si: "13.4" }], ["2017-04-19", { c: "33", ca: "33", e: "12", f: "53", fa: "53", s: "9.1", si: "9.3" }], ["2020-09-16", { c: "47", ca: "47", e: "79", f: "56", fa: "56", s: "14", si: "14" }], ["2015-07-29", { c: "26", ca: "26", e: "12", f: "22", fa: "22", s: "8", si: "8" }], ["2018-04-30", { c: "26", ca: "26", e: "17", f: "22", fa: "22", s: "8", si: "8" }], ["2022-12-13", { c: "100", ca: "100", e: "100", f: "108", fa: "108", s: "16", si: "16" }], ["2021-09-20", { c: "56", ca: "58", e: "79", f: "51", fa: "51", s: "15", si: "15" }], ["2024-10-29", { c: "104", ca: "104", e: "104", f: "132", fa: "132", s: "16.4", si: "16.4" }], ["2020-09-16", { c: "32", ca: "32", e: "18", f: "65", fa: "65", s: "14", si: "14" }], ["2020-01-15", { c: "56", ca: "56", e: "79", f: "22", fa: "24", s: "11", si: "11" }], ["2025-10-03", { c: "141", ca: "141", e: "141", f: "117", fa: "117", s: "15.4", si: "15.4" }], ["2023-05-09", { c: "76", ca: "76", e: "79", f: "113", fa: "113", s: "15.4", si: "15.4" }], ["2020-01-15", { c: "58", ca: "58", e: "79", f: "44", fa: "44", s: "11", si: "11" }], ["2015-07-29", { c: "5", ca: "18", e: "12", f: "11", fa: "14", s: "5", si: "4.2" }], ["2026-03-24", { c: "97", ca: "97", e: "97", f: "114", fa: "114", s: "26.4", si: "26.4" }], ["2015-07-29", { c: "23", ca: "25", e: "12", f: "31", fa: "31", s: "6", si: "8" }], ["2020-01-15", { c: "23", ca: "25", e: "79", f: "31", fa: "31", s: "6", si: "8" }], ["2021-01-21", { c: "88", ca: "88", e: "88", f: "82", fa: "82", s: "14", si: "14" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2024-03-19", { c: "114", ca: "114", e: "114", f: "124", fa: "124", s: "17.4", si: "17.4" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2020-01-15", { c: "36", ca: "36", e: "79", f: "36", fa: "36", s: "9.1", si: "9.3" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2015-09-30", { c: "44", ca: "44", e: "12", f: "15", fa: "15", s: "9", si: "9" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "1", si: "1" }], ["2017-03-27", { c: "48", ca: "48", e: "12", f: "41", fa: "41", s: "10.1", si: "10.3" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3", si: "1" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "1", fa: "4", s: "3.1", si: "2" }], ["2015-07-29", { c: "1", ca: "18", e: "12", f: "3", fa: "4", s: "1", si: "1" }], ["2024-05-14", { c: "1", ca: "18", e: "12", f: "126", fa: "126", s: "3.1", si: "3" }], ["2026-02-11", { c: "123", ca: "123", e: "123", f: "126", fa: "126", s: "26.3", si: "26.3" }]], bf = { w: "WebKit", g: "Gecko", p: "Presto", b: "Blink" }, gf = { r: "retired", c: "current", b: "beta", n: "nightly", p: "planned", u: "unknown", e: "esr" }, Ba = (B) => {
  const e = {};
  return Object.keys(B).forEach((t) => {
    const r = B[t];
    if (r && r.releases) {
      e[t] || (e[t] = { releases: {} });
      const s = e[t].releases;
      r.releases.forEach((i) => {
        s[i[0]] = { version: i[0], release_date: i[1] == "u" ? "unknown" : i[1], status: gf[i[2]], engine: i[3] ? bf[i[3]] : void 0, engine_version: i[4] };
      });
    }
  }), e;
}, vf = (() => {
  const B = [];
  return mf.forEach((e) => {
    var t;
    B.push({ status: { baseline_low_date: e[0], support: (t = e[1], { chrome: t.c, chrome_android: t.ca, edge: t.e, firefox: t.f, firefox_android: t.fa, safari: t.s, safari_ios: t.si }) } });
  }), B;
})(), Ur = Ba(pf), K0 = Ba(hf);
let I1 = !1;
const sa = ["chrome", "chrome_android", "edge", "firefox", "firefox_android", "safari", "safari_ios"], ia = Object.keys(Ur).map((B) => [B, Ur[B]]).filter(([B]) => sa.includes(B)), wf = ["webview_android", "samsunginternet_android", "opera_android", "opera"], yf = [...Object.keys(Ur).map((B) => [B, Ur[B]]).filter(([B]) => wf.includes(B)), ...Object.keys(K0).map((B) => [B, K0[B]])], J0 = ["current", "esr", "retired", "unknown", "beta", "nightly"];
let na = !1;
const Ca = (B) => {
  if (B.includeDownstreamBrowsers === !1 && B.includeKaiOS === !0) {
    if (console.log(new Error("KaiOS is a downstream browser and can only be included if you include other downstream browsers. Please ensure you use `includeDownstreamBrowsers: true`.")), typeof process > "u" || !process.exit) throw new Error("KaiOS configuration error: process.exit is not available");
    process.exit(1);
  }
}, T0 = (B) => B && B.startsWith("≤") ? B.slice(1) : B, be = (B, e) => {
  if (B === e) return 0;
  const [t = 0, r = 0] = B.split(".", 2).map(Number), [s = 0, i = 0] = e.split(".", 2).map(Number);
  if (isNaN(t) || isNaN(r)) throw new Error(`Invalid version: ${B}`);
  if (isNaN(s) || isNaN(i)) throw new Error(`Invalid version: ${e}`);
  return t !== s ? t > s ? 1 : -1 : r !== i ? r > i ? 1 : -1 : 0;
}, xf = (B) => {
  let e = [];
  return B.forEach((t) => {
    let r = ia.find((s) => s[0] === t.browser);
    r && Object.keys(r[1].releases).map((s) => [s, r[1].releases[s]]).filter(([, s]) => J0.includes(s.status)).sort((s, i) => be(s[0], i[0])).forEach(([s, i]) => !!J0.includes(i.status) && be(s, t.version) === 1 && (e.push({ browser: t.browser, version: s, release_date: i.release_date ? i.release_date : "unknown" }), !0));
  }), e;
}, kf = (B, e = !1) => {
  if (B.getFullYear() < 2015 && !na && console.warn(new Error("There are no browser versions compatible with Baseline before 2015.  You may receive unexpected results.")), B.getFullYear() < 2002) throw new Error("None of the browsers in the core set were released before 2002.  Please use a date after 2002.");
  if (B.getFullYear() > (/* @__PURE__ */ new Date()).getFullYear()) throw new Error("There are no browser versions compatible with Baseline in the future");
  const t = ((s) => vf.filter((i) => i.status.baseline_low_date && new Date(i.status.baseline_low_date) <= s).map((i) => ({ baseline_low_date: i.status.baseline_low_date, support: i.status.support })))(B), r = ((s) => {
    let i = {};
    return ia.forEach((n) => {
      i[n[0]] = { browser: n[0], version: "0", release_date: "" };
    }), s.forEach((n) => {
      Object.keys(n.support).forEach((a) => {
        const C = n.support[a], o = T0(C);
        i[a] && be(o, T0(i[a].version)) === 1 && (i[a] = { browser: a, version: o, release_date: n.baseline_low_date });
      });
    }), Object.keys(i).map((n) => i[n]);
  })(t);
  return e ? [...r, ...xf(r)].sort((s, i) => s.browser < i.browser ? -1 : s.browser > i.browser ? 1 : be(s.version, i.version)) : r;
}, aa = (B = [], e = !0, t = !1) => {
  const r = (a) => {
    var C;
    return B && B.length > 0 ? (C = B.filter((o) => o.browser === a).sort((o, l) => be(o.version, l.version))[0]) === null || C === void 0 ? void 0 : C.version : void 0;
  }, s = r("chrome"), i = r("firefox");
  if (!s && !i) throw new Error("There are no browser versions compatible with Baseline before Chrome and Firefox");
  let n = [];
  return yf.filter(([a]) => !(a === "kai_os" && !t)).forEach(([a, C]) => {
    var o;
    if (!C.releases) return;
    let l = Object.keys(C.releases).map((u) => [u, C.releases[u]]).filter(([, u]) => {
      const { engine: f, engine_version: c } = u;
      return !(!f || !c) && (f === "Blink" && s ? be(c, s) >= 0 : !(f !== "Gecko" || !i) && be(c, i) >= 0);
    }).sort((u, f) => be(u[0], f[0]));
    for (let u = 0; u < l.length; u++) {
      const f = l[u];
      if (f) {
        const [c, h] = f;
        let b = { browser: a, version: c, release_date: (o = h.release_date) !== null && o !== void 0 ? o : "unknown" };
        if (h.engine && h.engine_version && (b.engine = h.engine, b.engine_version = h.engine_version), n.push(b), !e) break;
      }
    }
  }), n;
};
function Ot(B) {
  var e, t, r, s, i, n, a;
  let C = B ?? {}, o = { listAllCompatibleVersions: (e = C.listAllCompatibleVersions) !== null && e !== void 0 && e, includeDownstreamBrowsers: (t = C.includeDownstreamBrowsers) !== null && t !== void 0 && t, widelyAvailableOnDate: (r = C.widelyAvailableOnDate) !== null && r !== void 0 ? r : void 0, targetYear: (s = C.targetYear) !== null && s !== void 0 ? s : void 0, includeKaiOS: (i = C.includeKaiOS) !== null && i !== void 0 && i, overrideLastUpdated: (n = C.overrideLastUpdated) !== null && n !== void 0 ? n : void 0, suppressWarnings: (a = C.suppressWarnings) !== null && a !== void 0 && a }, l = /* @__PURE__ */ new Date();
  if (Ca(o), o.widelyAvailableOnDate || o.targetYear) if (o.targetYear && o.widelyAvailableOnDate) {
    if (console.log(new Error("You cannot use targetYear and widelyAvailableOnDate at the same time.  Please remove one of these options and try again.")), typeof process > "u" || !process.exit) throw new Error("Configuration error: targetYear and widelyAvailableOnDate cannot be used together");
    process.exit(1);
  } else o.widelyAvailableOnDate ? l = new Date(o.widelyAvailableOnDate) : o.targetYear && (l = /* @__PURE__ */ new Date(`${o.targetYear}-12-31`));
  else l = /* @__PURE__ */ new Date();
  (o.widelyAvailableOnDate || o.targetYear === void 0) && l.setMonth(l.getMonth() - 30);
  let u = kf(l, o.listAllCompatibleVersions);
  return o.suppressWarnings || ((f, c) => {
    if (I1 || typeof process < "u" && process.env && (process.env.BROWSERSLIST_IGNORE_OLD_DATA || process.env.BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA)) return;
    const h = /* @__PURE__ */ new Date();
    h.setMonth(h.getMonth() - 2), f > h && (c ?? 1781022207470) < h.getTime() && (console.warn("[baseline-browser-mapping] The data in this module is over two months old and you are targetting a recent feature cut off date of " + f.toISOString().slice(0, 10) + ". To ensure accurate Baseline data, please update to the latest version of this module using the package manager of your choice.You can suppress these warnings using the environment variables `BROWSERSLIST_IGNORE_OLD_DATA=true` or `BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA=true` or by passing `suppressWarnings: true` when you call `getCompatibleVersions()` or `getAllVersions()`."), I1 = !0);
  })(l, o.overrideLastUpdated), o.includeDownstreamBrowsers === !1 ? u : [...u, ...aa(u, o.listAllCompatibleVersions, o.includeKaiOS)];
}
Rr._resetHasWarned = function() {
  I1 = !1;
}, Rr.getAllVersions = function(B) {
  var e, t, r, s, i;
  na = !0;
  let n = B ?? {}, a = { outputFormat: (e = n.outputFormat) !== null && e !== void 0 ? e : "array", includeDownstreamBrowsers: (t = n.includeDownstreamBrowsers) !== null && t !== void 0 && t, useSupports: (r = n.useSupports) !== null && r !== void 0 && r, includeKaiOS: (s = n.includeKaiOS) !== null && s !== void 0 && s, suppressWarnings: (i = n.suppressWarnings) !== null && i !== void 0 && i };
  Ca(a);
  let C = (/* @__PURE__ */ new Date()).getFullYear() + 1;
  const o = [...Array(C).keys()].slice(2002), l = {};
  o.forEach((x) => {
    l[x] = {}, Ot({ targetYear: x, suppressWarnings: a.suppressWarnings }).forEach((g) => {
      l[x] && (l[x][g.browser] = g);
    });
  });
  const u = Ot({ suppressWarnings: a.suppressWarnings }), f = {};
  u.forEach((x) => {
    f[x.browser] = x;
  });
  const c = /* @__PURE__ */ new Date();
  c.setMonth(c.getMonth() + 30);
  const h = Ot({ widelyAvailableOnDate: c.toISOString().slice(0, 10), suppressWarnings: a.suppressWarnings }), b = {};
  h.forEach((x) => {
    b[x.browser] = x;
  });
  const d = Ot({ targetYear: 2002, listAllCompatibleVersions: !0, suppressWarnings: a.suppressWarnings }), y = [];
  if (sa.forEach((x) => {
    var g, G, O, T;
    let D = d.filter((v) => v.browser == x).sort((v, F) => be(v.version, F.version)), p = (G = (g = f[x]) === null || g === void 0 ? void 0 : g.version) !== null && G !== void 0 ? G : "0", w = (T = (O = b[x]) === null || O === void 0 ? void 0 : O.version) !== null && T !== void 0 ? T : "0";
    o.forEach((v) => {
      var F;
      if (l[v]) {
        let A = ((F = l[v][x]) !== null && F !== void 0 ? F : { version: "0" }).version, P = D.findIndex((q) => be(q.version, A) === 0);
        (v === C - 1 ? D : D.slice(0, P)).forEach((q) => {
          let S = be(q.version, p) >= 0, U = be(q.version, w) >= 0, Be = Object.assign(Object.assign({}, q), { year: v <= 2015 ? "pre_baseline" : v - 1 });
          a.useSupports ? (S && (Be.supports = "widely"), U && (Be.supports = "newly")) : Be = Object.assign(Object.assign({}, Be), { wa_compatible: S }), y.push(Be);
        }), D = D.slice(P, D.length);
      }
    });
  }), a.includeDownstreamBrowsers && aa(y, !0, a.includeKaiOS).forEach((x) => {
    let g = y.find((G) => G.browser === "chrome" && G.version === x.engine_version);
    g && (a.useSupports ? y.push(Object.assign(Object.assign({}, x), { year: g.year, supports: g.supports })) : y.push(Object.assign(Object.assign({}, x), { year: g.year, wa_compatible: g.wa_compatible })));
  }), y.sort((x, g) => {
    if (x.year === "pre_baseline" && g.year !== "pre_baseline") return -1;
    if (g.year === "pre_baseline" && x.year !== "pre_baseline") return 1;
    if (x.year !== "pre_baseline" && g.year !== "pre_baseline") {
      if (x.year < g.year) return -1;
      if (x.year > g.year) return 1;
    }
    return x.browser < g.browser ? -1 : x.browser > g.browser ? 1 : be(x.version, g.version);
  }), a.outputFormat === "object") {
    const x = {};
    return y.forEach((g) => {
      x[g.browser] || (x[g.browser] = {});
      let G = { year: g.year, release_date: g.release_date, engine: g.engine, engine_version: g.engine_version };
      x[g.browser][g.version] = a.useSupports ? g.supports ? Object.assign(Object.assign({}, G), { supports: g.supports }) : G : Object.assign(Object.assign({}, G), { wa_compatible: g.wa_compatible });
    }), x ?? {};
  }
  if (a.outputFormat === "csv") {
    let x = `"browser","version","year","${a.useSupports ? "supports" : "wa_compatible"}","release_date","engine","engine_version"`;
    return y.forEach((g) => {
      var G, O, T, D;
      let p = { browser: g.browser, version: g.version, year: g.year, release_date: (G = g.release_date) !== null && G !== void 0 ? G : "NULL", engine: (O = g.engine) !== null && O !== void 0 ? O : "NULL", engine_version: (T = g.engine_version) !== null && T !== void 0 ? T : "NULL" };
      p = a.useSupports ? Object.assign(Object.assign({}, p), { supports: (D = g.supports) !== null && D !== void 0 ? D : "" }) : Object.assign(Object.assign({}, p), { wa_compatible: g.wa_compatible }), x += `
"${p.browser}","${p.version}","${p.year}","${a.useSupports ? p.supports : p.wa_compatible}","${p.release_date}","${p.engine}","${p.engine_version}"`;
    }), x;
  }
  return y;
}, Rr.getCompatibleVersions = Ot;
const Af = [
  {
    name: "nodejs",
    version: "0.2.0",
    date: "2011-08-26",
    lts: !1,
    security: !1,
    v8: "2.3.8.0"
  },
  {
    name: "nodejs",
    version: "0.3.0",
    date: "2011-08-26",
    lts: !1,
    security: !1,
    v8: "2.5.1.0"
  },
  {
    name: "nodejs",
    version: "0.4.0",
    date: "2011-08-26",
    lts: !1,
    security: !1,
    v8: "3.1.2.0"
  },
  {
    name: "nodejs",
    version: "0.5.0",
    date: "2011-08-26",
    lts: !1,
    security: !1,
    v8: "3.1.8.25"
  },
  {
    name: "nodejs",
    version: "0.6.0",
    date: "2011-11-04",
    lts: !1,
    security: !1,
    v8: "3.6.6.6"
  },
  {
    name: "nodejs",
    version: "0.7.0",
    date: "2012-01-17",
    lts: !1,
    security: !1,
    v8: "3.8.6.0"
  },
  {
    name: "nodejs",
    version: "0.8.0",
    date: "2012-06-22",
    lts: !1,
    security: !1,
    v8: "3.11.10.10"
  },
  {
    name: "nodejs",
    version: "0.9.0",
    date: "2012-07-20",
    lts: !1,
    security: !1,
    v8: "3.11.10.15"
  },
  {
    name: "nodejs",
    version: "0.10.0",
    date: "2013-03-11",
    lts: !1,
    security: !1,
    v8: "3.14.5.8"
  },
  {
    name: "nodejs",
    version: "0.11.0",
    date: "2013-03-28",
    lts: !1,
    security: !1,
    v8: "3.17.13.0"
  },
  {
    name: "nodejs",
    version: "0.12.0",
    date: "2015-02-06",
    lts: !1,
    security: !1,
    v8: "3.28.73.0"
  },
  {
    name: "nodejs",
    version: "4.0.0",
    date: "2015-09-08",
    lts: !1,
    security: !1,
    v8: "4.5.103.30"
  },
  {
    name: "nodejs",
    version: "4.1.0",
    date: "2015-09-17",
    lts: !1,
    security: !1,
    v8: "4.5.103.33"
  },
  {
    name: "nodejs",
    version: "4.2.0",
    date: "2015-10-12",
    lts: "Argon",
    security: !1,
    v8: "4.5.103.35"
  },
  {
    name: "nodejs",
    version: "4.3.0",
    date: "2016-02-09",
    lts: "Argon",
    security: !1,
    v8: "4.5.103.35"
  },
  {
    name: "nodejs",
    version: "4.4.0",
    date: "2016-03-08",
    lts: "Argon",
    security: !1,
    v8: "4.5.103.35"
  },
  {
    name: "nodejs",
    version: "4.5.0",
    date: "2016-08-16",
    lts: "Argon",
    security: !1,
    v8: "4.5.103.37"
  },
  {
    name: "nodejs",
    version: "4.6.0",
    date: "2016-09-27",
    lts: "Argon",
    security: !0,
    v8: "4.5.103.37"
  },
  {
    name: "nodejs",
    version: "4.7.0",
    date: "2016-12-06",
    lts: "Argon",
    security: !1,
    v8: "4.5.103.43"
  },
  {
    name: "nodejs",
    version: "4.8.0",
    date: "2017-02-21",
    lts: "Argon",
    security: !1,
    v8: "4.5.103.45"
  },
  {
    name: "nodejs",
    version: "4.9.0",
    date: "2018-03-28",
    lts: "Argon",
    security: !0,
    v8: "4.5.103.53"
  },
  {
    name: "nodejs",
    version: "5.0.0",
    date: "2015-10-29",
    lts: !1,
    security: !1,
    v8: "4.6.85.28"
  },
  {
    name: "nodejs",
    version: "5.1.0",
    date: "2015-11-17",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.2.0",
    date: "2015-12-09",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.3.0",
    date: "2015-12-15",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.4.0",
    date: "2016-01-06",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.5.0",
    date: "2016-01-21",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.6.0",
    date: "2016-02-09",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.7.0",
    date: "2016-02-23",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.8.0",
    date: "2016-03-09",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.9.0",
    date: "2016-03-16",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.10.0",
    date: "2016-04-01",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.11.0",
    date: "2016-04-21",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.12.0",
    date: "2016-06-23",
    lts: !1,
    security: !1,
    v8: "4.6.85.32"
  },
  {
    name: "nodejs",
    version: "6.0.0",
    date: "2016-04-26",
    lts: !1,
    security: !1,
    v8: "5.0.71.35"
  },
  {
    name: "nodejs",
    version: "6.1.0",
    date: "2016-05-05",
    lts: !1,
    security: !1,
    v8: "5.0.71.35"
  },
  {
    name: "nodejs",
    version: "6.2.0",
    date: "2016-05-17",
    lts: !1,
    security: !1,
    v8: "5.0.71.47"
  },
  {
    name: "nodejs",
    version: "6.3.0",
    date: "2016-07-06",
    lts: !1,
    security: !1,
    v8: "5.0.71.52"
  },
  {
    name: "nodejs",
    version: "6.4.0",
    date: "2016-08-12",
    lts: !1,
    security: !1,
    v8: "5.0.71.60"
  },
  {
    name: "nodejs",
    version: "6.5.0",
    date: "2016-08-26",
    lts: !1,
    security: !1,
    v8: "5.1.281.81"
  },
  {
    name: "nodejs",
    version: "6.6.0",
    date: "2016-09-14",
    lts: !1,
    security: !1,
    v8: "5.1.281.83"
  },
  {
    name: "nodejs",
    version: "6.7.0",
    date: "2016-09-27",
    lts: !1,
    security: !0,
    v8: "5.1.281.83"
  },
  {
    name: "nodejs",
    version: "6.8.0",
    date: "2016-10-12",
    lts: !1,
    security: !1,
    v8: "5.1.281.84"
  },
  {
    name: "nodejs",
    version: "6.9.0",
    date: "2016-10-18",
    lts: "Boron",
    security: !1,
    v8: "5.1.281.84"
  },
  {
    name: "nodejs",
    version: "6.10.0",
    date: "2017-02-21",
    lts: "Boron",
    security: !1,
    v8: "5.1.281.93"
  },
  {
    name: "nodejs",
    version: "6.11.0",
    date: "2017-06-06",
    lts: "Boron",
    security: !1,
    v8: "5.1.281.102"
  },
  {
    name: "nodejs",
    version: "6.12.0",
    date: "2017-11-06",
    lts: "Boron",
    security: !1,
    v8: "5.1.281.108"
  },
  {
    name: "nodejs",
    version: "6.13.0",
    date: "2018-02-10",
    lts: "Boron",
    security: !1,
    v8: "5.1.281.111"
  },
  {
    name: "nodejs",
    version: "6.14.0",
    date: "2018-03-28",
    lts: "Boron",
    security: !0,
    v8: "5.1.281.111"
  },
  {
    name: "nodejs",
    version: "6.15.0",
    date: "2018-11-27",
    lts: "Boron",
    security: !0,
    v8: "5.1.281.111"
  },
  {
    name: "nodejs",
    version: "6.16.0",
    date: "2018-12-26",
    lts: "Boron",
    security: !1,
    v8: "5.1.281.111"
  },
  {
    name: "nodejs",
    version: "6.17.0",
    date: "2019-02-28",
    lts: "Boron",
    security: !0,
    v8: "5.1.281.111"
  },
  {
    name: "nodejs",
    version: "7.0.0",
    date: "2016-10-25",
    lts: !1,
    security: !1,
    v8: "5.4.500.36"
  },
  {
    name: "nodejs",
    version: "7.1.0",
    date: "2016-11-08",
    lts: !1,
    security: !1,
    v8: "5.4.500.36"
  },
  {
    name: "nodejs",
    version: "7.2.0",
    date: "2016-11-22",
    lts: !1,
    security: !1,
    v8: "5.4.500.43"
  },
  {
    name: "nodejs",
    version: "7.3.0",
    date: "2016-12-20",
    lts: !1,
    security: !1,
    v8: "5.4.500.45"
  },
  {
    name: "nodejs",
    version: "7.4.0",
    date: "2017-01-04",
    lts: !1,
    security: !1,
    v8: "5.4.500.45"
  },
  {
    name: "nodejs",
    version: "7.5.0",
    date: "2017-01-31",
    lts: !1,
    security: !1,
    v8: "5.4.500.48"
  },
  {
    name: "nodejs",
    version: "7.6.0",
    date: "2017-02-21",
    lts: !1,
    security: !1,
    v8: "5.5.372.40"
  },
  {
    name: "nodejs",
    version: "7.7.0",
    date: "2017-02-28",
    lts: !1,
    security: !1,
    v8: "5.5.372.41"
  },
  {
    name: "nodejs",
    version: "7.8.0",
    date: "2017-03-29",
    lts: !1,
    security: !1,
    v8: "5.5.372.43"
  },
  {
    name: "nodejs",
    version: "7.9.0",
    date: "2017-04-11",
    lts: !1,
    security: !1,
    v8: "5.5.372.43"
  },
  {
    name: "nodejs",
    version: "7.10.0",
    date: "2017-05-02",
    lts: !1,
    security: !1,
    v8: "5.5.372.43"
  },
  {
    name: "nodejs",
    version: "8.0.0",
    date: "2017-05-30",
    lts: !1,
    security: !1,
    v8: "5.8.283.41"
  },
  {
    name: "nodejs",
    version: "8.1.0",
    date: "2017-06-08",
    lts: !1,
    security: !1,
    v8: "5.8.283.41"
  },
  {
    name: "nodejs",
    version: "8.2.0",
    date: "2017-07-19",
    lts: !1,
    security: !1,
    v8: "5.8.283.41"
  },
  {
    name: "nodejs",
    version: "8.3.0",
    date: "2017-08-08",
    lts: !1,
    security: !1,
    v8: "6.0.286.52"
  },
  {
    name: "nodejs",
    version: "8.4.0",
    date: "2017-08-15",
    lts: !1,
    security: !1,
    v8: "6.0.286.52"
  },
  {
    name: "nodejs",
    version: "8.5.0",
    date: "2017-09-12",
    lts: !1,
    security: !1,
    v8: "6.0.287.53"
  },
  {
    name: "nodejs",
    version: "8.6.0",
    date: "2017-09-26",
    lts: !1,
    security: !1,
    v8: "6.0.287.53"
  },
  {
    name: "nodejs",
    version: "8.7.0",
    date: "2017-10-11",
    lts: !1,
    security: !1,
    v8: "6.1.534.42"
  },
  {
    name: "nodejs",
    version: "8.8.0",
    date: "2017-10-24",
    lts: !1,
    security: !1,
    v8: "6.1.534.42"
  },
  {
    name: "nodejs",
    version: "8.9.0",
    date: "2017-10-31",
    lts: "Carbon",
    security: !1,
    v8: "6.1.534.46"
  },
  {
    name: "nodejs",
    version: "8.10.0",
    date: "2018-03-06",
    lts: "Carbon",
    security: !1,
    v8: "6.2.414.50"
  },
  {
    name: "nodejs",
    version: "8.11.0",
    date: "2018-03-28",
    lts: "Carbon",
    security: !0,
    v8: "6.2.414.50"
  },
  {
    name: "nodejs",
    version: "8.12.0",
    date: "2018-09-10",
    lts: "Carbon",
    security: !1,
    v8: "6.2.414.66"
  },
  {
    name: "nodejs",
    version: "8.13.0",
    date: "2018-11-20",
    lts: "Carbon",
    security: !1,
    v8: "6.2.414.72"
  },
  {
    name: "nodejs",
    version: "8.14.0",
    date: "2018-11-27",
    lts: "Carbon",
    security: !0,
    v8: "6.2.414.72"
  },
  {
    name: "nodejs",
    version: "8.15.0",
    date: "2018-12-26",
    lts: "Carbon",
    security: !1,
    v8: "6.2.414.75"
  },
  {
    name: "nodejs",
    version: "8.16.0",
    date: "2019-04-16",
    lts: "Carbon",
    security: !1,
    v8: "6.2.414.77"
  },
  {
    name: "nodejs",
    version: "8.17.0",
    date: "2019-12-17",
    lts: "Carbon",
    security: !0,
    v8: "6.2.414.78"
  },
  {
    name: "nodejs",
    version: "9.0.0",
    date: "2017-10-31",
    lts: !1,
    security: !1,
    v8: "6.2.414.32"
  },
  {
    name: "nodejs",
    version: "9.1.0",
    date: "2017-11-07",
    lts: !1,
    security: !1,
    v8: "6.2.414.32"
  },
  {
    name: "nodejs",
    version: "9.2.0",
    date: "2017-11-14",
    lts: !1,
    security: !1,
    v8: "6.2.414.44"
  },
  {
    name: "nodejs",
    version: "9.3.0",
    date: "2017-12-12",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.4.0",
    date: "2018-01-10",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.5.0",
    date: "2018-01-31",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.6.0",
    date: "2018-02-21",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.7.0",
    date: "2018-03-01",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.8.0",
    date: "2018-03-07",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.9.0",
    date: "2018-03-21",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.10.0",
    date: "2018-03-28",
    lts: !1,
    security: !0,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.11.0",
    date: "2018-04-04",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "10.0.0",
    date: "2018-04-24",
    lts: !1,
    security: !1,
    v8: "6.6.346.24"
  },
  {
    name: "nodejs",
    version: "10.1.0",
    date: "2018-05-08",
    lts: !1,
    security: !1,
    v8: "6.6.346.27"
  },
  {
    name: "nodejs",
    version: "10.2.0",
    date: "2018-05-23",
    lts: !1,
    security: !1,
    v8: "6.6.346.32"
  },
  {
    name: "nodejs",
    version: "10.3.0",
    date: "2018-05-29",
    lts: !1,
    security: !1,
    v8: "6.6.346.32"
  },
  {
    name: "nodejs",
    version: "10.4.0",
    date: "2018-06-06",
    lts: !1,
    security: !1,
    v8: "6.7.288.43"
  },
  {
    name: "nodejs",
    version: "10.5.0",
    date: "2018-06-20",
    lts: !1,
    security: !1,
    v8: "6.7.288.46"
  },
  {
    name: "nodejs",
    version: "10.6.0",
    date: "2018-07-04",
    lts: !1,
    security: !1,
    v8: "6.7.288.46"
  },
  {
    name: "nodejs",
    version: "10.7.0",
    date: "2018-07-18",
    lts: !1,
    security: !1,
    v8: "6.7.288.49"
  },
  {
    name: "nodejs",
    version: "10.8.0",
    date: "2018-08-01",
    lts: !1,
    security: !1,
    v8: "6.7.288.49"
  },
  {
    name: "nodejs",
    version: "10.9.0",
    date: "2018-08-15",
    lts: !1,
    security: !1,
    v8: "6.8.275.24"
  },
  {
    name: "nodejs",
    version: "10.10.0",
    date: "2018-09-06",
    lts: !1,
    security: !1,
    v8: "6.8.275.30"
  },
  {
    name: "nodejs",
    version: "10.11.0",
    date: "2018-09-19",
    lts: !1,
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.12.0",
    date: "2018-10-10",
    lts: !1,
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.13.0",
    date: "2018-10-30",
    lts: "Dubnium",
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.14.0",
    date: "2018-11-27",
    lts: "Dubnium",
    security: !0,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.15.0",
    date: "2018-12-26",
    lts: "Dubnium",
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.16.0",
    date: "2019-05-28",
    lts: "Dubnium",
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.17.0",
    date: "2019-10-22",
    lts: "Dubnium",
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.18.0",
    date: "2019-12-17",
    lts: "Dubnium",
    security: !0,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.19.0",
    date: "2020-02-05",
    lts: "Dubnium",
    security: !0,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.20.0",
    date: "2020-03-26",
    lts: "Dubnium",
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.21.0",
    date: "2020-06-02",
    lts: "Dubnium",
    security: !0,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.22.0",
    date: "2020-07-21",
    lts: "Dubnium",
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.23.0",
    date: "2020-10-27",
    lts: "Dubnium",
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.24.0",
    date: "2021-02-23",
    lts: "Dubnium",
    security: !0,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "11.0.0",
    date: "2018-10-23",
    lts: !1,
    security: !1,
    v8: "7.0.276.28"
  },
  {
    name: "nodejs",
    version: "11.1.0",
    date: "2018-10-30",
    lts: !1,
    security: !1,
    v8: "7.0.276.32"
  },
  {
    name: "nodejs",
    version: "11.2.0",
    date: "2018-11-15",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.3.0",
    date: "2018-11-27",
    lts: !1,
    security: !0,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.4.0",
    date: "2018-12-07",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.5.0",
    date: "2018-12-18",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.6.0",
    date: "2018-12-26",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.7.0",
    date: "2019-01-17",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.8.0",
    date: "2019-01-24",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.9.0",
    date: "2019-01-30",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.10.0",
    date: "2019-02-14",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.11.0",
    date: "2019-03-05",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.12.0",
    date: "2019-03-14",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.13.0",
    date: "2019-03-28",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.14.0",
    date: "2019-04-10",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.15.0",
    date: "2019-04-30",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "12.0.0",
    date: "2019-04-23",
    lts: !1,
    security: !1,
    v8: "7.4.288.21"
  },
  {
    name: "nodejs",
    version: "12.1.0",
    date: "2019-04-29",
    lts: !1,
    security: !1,
    v8: "7.4.288.21"
  },
  {
    name: "nodejs",
    version: "12.2.0",
    date: "2019-05-07",
    lts: !1,
    security: !1,
    v8: "7.4.288.21"
  },
  {
    name: "nodejs",
    version: "12.3.0",
    date: "2019-05-21",
    lts: !1,
    security: !1,
    v8: "7.4.288.27"
  },
  {
    name: "nodejs",
    version: "12.4.0",
    date: "2019-06-04",
    lts: !1,
    security: !1,
    v8: "7.4.288.27"
  },
  {
    name: "nodejs",
    version: "12.5.0",
    date: "2019-06-26",
    lts: !1,
    security: !1,
    v8: "7.5.288.22"
  },
  {
    name: "nodejs",
    version: "12.6.0",
    date: "2019-07-03",
    lts: !1,
    security: !1,
    v8: "7.5.288.22"
  },
  {
    name: "nodejs",
    version: "12.7.0",
    date: "2019-07-23",
    lts: !1,
    security: !1,
    v8: "7.5.288.22"
  },
  {
    name: "nodejs",
    version: "12.8.0",
    date: "2019-08-06",
    lts: !1,
    security: !1,
    v8: "7.5.288.22"
  },
  {
    name: "nodejs",
    version: "12.9.0",
    date: "2019-08-20",
    lts: !1,
    security: !1,
    v8: "7.6.303.29"
  },
  {
    name: "nodejs",
    version: "12.10.0",
    date: "2019-09-04",
    lts: !1,
    security: !1,
    v8: "7.6.303.29"
  },
  {
    name: "nodejs",
    version: "12.11.0",
    date: "2019-09-25",
    lts: !1,
    security: !1,
    v8: "7.7.299.11"
  },
  {
    name: "nodejs",
    version: "12.12.0",
    date: "2019-10-11",
    lts: !1,
    security: !1,
    v8: "7.7.299.13"
  },
  {
    name: "nodejs",
    version: "12.13.0",
    date: "2019-10-21",
    lts: "Erbium",
    security: !1,
    v8: "7.7.299.13"
  },
  {
    name: "nodejs",
    version: "12.14.0",
    date: "2019-12-17",
    lts: "Erbium",
    security: !0,
    v8: "7.7.299.13"
  },
  {
    name: "nodejs",
    version: "12.15.0",
    date: "2020-02-05",
    lts: "Erbium",
    security: !0,
    v8: "7.7.299.13"
  },
  {
    name: "nodejs",
    version: "12.16.0",
    date: "2020-02-11",
    lts: "Erbium",
    security: !1,
    v8: "7.8.279.23"
  },
  {
    name: "nodejs",
    version: "12.17.0",
    date: "2020-05-26",
    lts: "Erbium",
    security: !1,
    v8: "7.8.279.23"
  },
  {
    name: "nodejs",
    version: "12.18.0",
    date: "2020-06-02",
    lts: "Erbium",
    security: !0,
    v8: "7.8.279.23"
  },
  {
    name: "nodejs",
    version: "12.19.0",
    date: "2020-10-06",
    lts: "Erbium",
    security: !1,
    v8: "7.8.279.23"
  },
  {
    name: "nodejs",
    version: "12.20.0",
    date: "2020-11-24",
    lts: "Erbium",
    security: !1,
    v8: "7.8.279.23"
  },
  {
    name: "nodejs",
    version: "12.21.0",
    date: "2021-02-23",
    lts: "Erbium",
    security: !0,
    v8: "7.8.279.23"
  },
  {
    name: "nodejs",
    version: "12.22.0",
    date: "2021-03-30",
    lts: "Erbium",
    security: !1,
    v8: "7.8.279.23"
  },
  {
    name: "nodejs",
    version: "13.0.0",
    date: "2019-10-22",
    lts: !1,
    security: !1,
    v8: "7.8.279.17"
  },
  {
    name: "nodejs",
    version: "13.1.0",
    date: "2019-11-05",
    lts: !1,
    security: !1,
    v8: "7.8.279.17"
  },
  {
    name: "nodejs",
    version: "13.2.0",
    date: "2019-11-21",
    lts: !1,
    security: !1,
    v8: "7.9.317.23"
  },
  {
    name: "nodejs",
    version: "13.3.0",
    date: "2019-12-03",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.4.0",
    date: "2019-12-17",
    lts: !1,
    security: !0,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.5.0",
    date: "2019-12-18",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.6.0",
    date: "2020-01-07",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.7.0",
    date: "2020-01-21",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.8.0",
    date: "2020-02-05",
    lts: !1,
    security: !0,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.9.0",
    date: "2020-02-18",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.10.0",
    date: "2020-03-04",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.11.0",
    date: "2020-03-12",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.12.0",
    date: "2020-03-26",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.13.0",
    date: "2020-04-14",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.14.0",
    date: "2020-04-29",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "14.0.0",
    date: "2020-04-21",
    lts: !1,
    security: !1,
    v8: "8.1.307.30"
  },
  {
    name: "nodejs",
    version: "14.1.0",
    date: "2020-04-29",
    lts: !1,
    security: !1,
    v8: "8.1.307.31"
  },
  {
    name: "nodejs",
    version: "14.2.0",
    date: "2020-05-05",
    lts: !1,
    security: !1,
    v8: "8.1.307.31"
  },
  {
    name: "nodejs",
    version: "14.3.0",
    date: "2020-05-19",
    lts: !1,
    security: !1,
    v8: "8.1.307.31"
  },
  {
    name: "nodejs",
    version: "14.4.0",
    date: "2020-06-02",
    lts: !1,
    security: !0,
    v8: "8.1.307.31"
  },
  {
    name: "nodejs",
    version: "14.5.0",
    date: "2020-06-30",
    lts: !1,
    security: !1,
    v8: "8.3.110.9"
  },
  {
    name: "nodejs",
    version: "14.6.0",
    date: "2020-07-20",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.7.0",
    date: "2020-07-29",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.8.0",
    date: "2020-08-11",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.9.0",
    date: "2020-08-27",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.10.0",
    date: "2020-09-08",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.11.0",
    date: "2020-09-15",
    lts: !1,
    security: !0,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.12.0",
    date: "2020-09-22",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.13.0",
    date: "2020-09-29",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.14.0",
    date: "2020-10-15",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.15.0",
    date: "2020-10-27",
    lts: "Fermium",
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.16.0",
    date: "2021-02-23",
    lts: "Fermium",
    security: !0,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.17.0",
    date: "2021-05-11",
    lts: "Fermium",
    security: !1,
    v8: "8.4.371.23"
  },
  {
    name: "nodejs",
    version: "14.18.0",
    date: "2021-09-28",
    lts: "Fermium",
    security: !1,
    v8: "8.4.371.23"
  },
  {
    name: "nodejs",
    version: "14.19.0",
    date: "2022-02-01",
    lts: "Fermium",
    security: !1,
    v8: "8.4.371.23"
  },
  {
    name: "nodejs",
    version: "14.20.0",
    date: "2022-07-07",
    lts: "Fermium",
    security: !0,
    v8: "8.4.371.23"
  },
  {
    name: "nodejs",
    version: "14.21.0",
    date: "2022-11-01",
    lts: "Fermium",
    security: !1,
    v8: "8.4.371.23"
  },
  {
    name: "nodejs",
    version: "15.0.0",
    date: "2020-10-20",
    lts: !1,
    security: !1,
    v8: "8.6.395.16"
  },
  {
    name: "nodejs",
    version: "15.1.0",
    date: "2020-11-04",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.2.0",
    date: "2020-11-10",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.3.0",
    date: "2020-11-24",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.4.0",
    date: "2020-12-09",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.5.0",
    date: "2020-12-22",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.6.0",
    date: "2021-01-14",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.7.0",
    date: "2021-01-25",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.8.0",
    date: "2021-02-02",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.9.0",
    date: "2021-02-18",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.10.0",
    date: "2021-02-23",
    lts: !1,
    security: !0,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.11.0",
    date: "2021-03-03",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.12.0",
    date: "2021-03-17",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.13.0",
    date: "2021-03-31",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.14.0",
    date: "2021-04-06",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "16.0.0",
    date: "2021-04-20",
    lts: !1,
    security: !1,
    v8: "9.0.257.17"
  },
  {
    name: "nodejs",
    version: "16.1.0",
    date: "2021-05-04",
    lts: !1,
    security: !1,
    v8: "9.0.257.24"
  },
  {
    name: "nodejs",
    version: "16.2.0",
    date: "2021-05-19",
    lts: !1,
    security: !1,
    v8: "9.0.257.25"
  },
  {
    name: "nodejs",
    version: "16.3.0",
    date: "2021-06-03",
    lts: !1,
    security: !1,
    v8: "9.0.257.25"
  },
  {
    name: "nodejs",
    version: "16.4.0",
    date: "2021-06-23",
    lts: !1,
    security: !1,
    v8: "9.1.269.36"
  },
  {
    name: "nodejs",
    version: "16.5.0",
    date: "2021-07-14",
    lts: !1,
    security: !1,
    v8: "9.1.269.38"
  },
  {
    name: "nodejs",
    version: "16.6.0",
    date: "2021-07-29",
    lts: !1,
    security: !0,
    v8: "9.2.230.21"
  },
  {
    name: "nodejs",
    version: "16.7.0",
    date: "2021-08-18",
    lts: !1,
    security: !1,
    v8: "9.2.230.21"
  },
  {
    name: "nodejs",
    version: "16.8.0",
    date: "2021-08-25",
    lts: !1,
    security: !1,
    v8: "9.2.230.21"
  },
  {
    name: "nodejs",
    version: "16.9.0",
    date: "2021-09-07",
    lts: !1,
    security: !1,
    v8: "9.3.345.16"
  },
  {
    name: "nodejs",
    version: "16.10.0",
    date: "2021-09-22",
    lts: !1,
    security: !1,
    v8: "9.3.345.19"
  },
  {
    name: "nodejs",
    version: "16.11.0",
    date: "2021-10-08",
    lts: !1,
    security: !1,
    v8: "9.4.146.19"
  },
  {
    name: "nodejs",
    version: "16.12.0",
    date: "2021-10-20",
    lts: !1,
    security: !1,
    v8: "9.4.146.19"
  },
  {
    name: "nodejs",
    version: "16.13.0",
    date: "2021-10-26",
    lts: "Gallium",
    security: !1,
    v8: "9.4.146.19"
  },
  {
    name: "nodejs",
    version: "16.14.0",
    date: "2022-02-08",
    lts: "Gallium",
    security: !1,
    v8: "9.4.146.24"
  },
  {
    name: "nodejs",
    version: "16.15.0",
    date: "2022-04-26",
    lts: "Gallium",
    security: !1,
    v8: "9.4.146.24"
  },
  {
    name: "nodejs",
    version: "16.16.0",
    date: "2022-07-07",
    lts: "Gallium",
    security: !0,
    v8: "9.4.146.24"
  },
  {
    name: "nodejs",
    version: "16.17.0",
    date: "2022-08-16",
    lts: "Gallium",
    security: !1,
    v8: "9.4.146.26"
  },
  {
    name: "nodejs",
    version: "16.18.0",
    date: "2022-10-12",
    lts: "Gallium",
    security: !1,
    v8: "9.4.146.26"
  },
  {
    name: "nodejs",
    version: "16.19.0",
    date: "2022-12-13",
    lts: "Gallium",
    security: !1,
    v8: "9.4.146.26"
  },
  {
    name: "nodejs",
    version: "16.20.0",
    date: "2023-03-28",
    lts: "Gallium",
    security: !1,
    v8: "9.4.146.26"
  },
  {
    name: "nodejs",
    version: "17.0.0",
    date: "2021-10-19",
    lts: !1,
    security: !1,
    v8: "9.5.172.21"
  },
  {
    name: "nodejs",
    version: "17.1.0",
    date: "2021-11-09",
    lts: !1,
    security: !1,
    v8: "9.5.172.25"
  },
  {
    name: "nodejs",
    version: "17.2.0",
    date: "2021-11-30",
    lts: !1,
    security: !1,
    v8: "9.6.180.14"
  },
  {
    name: "nodejs",
    version: "17.3.0",
    date: "2021-12-17",
    lts: !1,
    security: !1,
    v8: "9.6.180.15"
  },
  {
    name: "nodejs",
    version: "17.4.0",
    date: "2022-01-18",
    lts: !1,
    security: !1,
    v8: "9.6.180.15"
  },
  {
    name: "nodejs",
    version: "17.5.0",
    date: "2022-02-10",
    lts: !1,
    security: !1,
    v8: "9.6.180.15"
  },
  {
    name: "nodejs",
    version: "17.6.0",
    date: "2022-02-22",
    lts: !1,
    security: !1,
    v8: "9.6.180.15"
  },
  {
    name: "nodejs",
    version: "17.7.0",
    date: "2022-03-09",
    lts: !1,
    security: !1,
    v8: "9.6.180.15"
  },
  {
    name: "nodejs",
    version: "17.8.0",
    date: "2022-03-22",
    lts: !1,
    security: !1,
    v8: "9.6.180.15"
  },
  {
    name: "nodejs",
    version: "17.9.0",
    date: "2022-04-07",
    lts: !1,
    security: !1,
    v8: "9.6.180.15"
  },
  {
    name: "nodejs",
    version: "18.0.0",
    date: "2022-04-18",
    lts: !1,
    security: !1,
    v8: "10.1.124.8"
  },
  {
    name: "nodejs",
    version: "18.1.0",
    date: "2022-05-03",
    lts: !1,
    security: !1,
    v8: "10.1.124.8"
  },
  {
    name: "nodejs",
    version: "18.2.0",
    date: "2022-05-17",
    lts: !1,
    security: !1,
    v8: "10.1.124.8"
  },
  {
    name: "nodejs",
    version: "18.3.0",
    date: "2022-06-02",
    lts: !1,
    security: !1,
    v8: "10.2.154.4"
  },
  {
    name: "nodejs",
    version: "18.4.0",
    date: "2022-06-16",
    lts: !1,
    security: !1,
    v8: "10.2.154.4"
  },
  {
    name: "nodejs",
    version: "18.5.0",
    date: "2022-07-06",
    lts: !1,
    security: !0,
    v8: "10.2.154.4"
  },
  {
    name: "nodejs",
    version: "18.6.0",
    date: "2022-07-13",
    lts: !1,
    security: !1,
    v8: "10.2.154.13"
  },
  {
    name: "nodejs",
    version: "18.7.0",
    date: "2022-07-26",
    lts: !1,
    security: !1,
    v8: "10.2.154.13"
  },
  {
    name: "nodejs",
    version: "18.8.0",
    date: "2022-08-24",
    lts: !1,
    security: !1,
    v8: "10.2.154.13"
  },
  {
    name: "nodejs",
    version: "18.9.0",
    date: "2022-09-07",
    lts: !1,
    security: !1,
    v8: "10.2.154.15"
  },
  {
    name: "nodejs",
    version: "18.10.0",
    date: "2022-09-28",
    lts: !1,
    security: !1,
    v8: "10.2.154.15"
  },
  {
    name: "nodejs",
    version: "18.11.0",
    date: "2022-10-13",
    lts: !1,
    security: !1,
    v8: "10.2.154.15"
  },
  {
    name: "nodejs",
    version: "18.12.0",
    date: "2022-10-25",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.15"
  },
  {
    name: "nodejs",
    version: "18.13.0",
    date: "2023-01-05",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.23"
  },
  {
    name: "nodejs",
    version: "18.14.0",
    date: "2023-02-01",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.23"
  },
  {
    name: "nodejs",
    version: "18.15.0",
    date: "2023-03-05",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.26"
  },
  {
    name: "nodejs",
    version: "18.16.0",
    date: "2023-04-12",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.26"
  },
  {
    name: "nodejs",
    version: "18.17.0",
    date: "2023-07-18",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.26"
  },
  {
    name: "nodejs",
    version: "18.18.0",
    date: "2023-09-18",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.26"
  },
  {
    name: "nodejs",
    version: "18.19.0",
    date: "2023-11-29",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.26"
  },
  {
    name: "nodejs",
    version: "18.20.0",
    date: "2024-03-26",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.26"
  },
  {
    name: "nodejs",
    version: "19.0.0",
    date: "2022-10-17",
    lts: !1,
    security: !1,
    v8: "10.7.193.13"
  },
  {
    name: "nodejs",
    version: "19.1.0",
    date: "2022-11-14",
    lts: !1,
    security: !1,
    v8: "10.7.193.20"
  },
  {
    name: "nodejs",
    version: "19.2.0",
    date: "2022-11-29",
    lts: !1,
    security: !1,
    v8: "10.8.168.20"
  },
  {
    name: "nodejs",
    version: "19.3.0",
    date: "2022-12-14",
    lts: !1,
    security: !1,
    v8: "10.8.168.21"
  },
  {
    name: "nodejs",
    version: "19.4.0",
    date: "2023-01-05",
    lts: !1,
    security: !1,
    v8: "10.8.168.25"
  },
  {
    name: "nodejs",
    version: "19.5.0",
    date: "2023-01-24",
    lts: !1,
    security: !1,
    v8: "10.8.168.25"
  },
  {
    name: "nodejs",
    version: "19.6.0",
    date: "2023-02-01",
    lts: !1,
    security: !1,
    v8: "10.8.168.25"
  },
  {
    name: "nodejs",
    version: "19.7.0",
    date: "2023-02-21",
    lts: !1,
    security: !1,
    v8: "10.8.168.25"
  },
  {
    name: "nodejs",
    version: "19.8.0",
    date: "2023-03-14",
    lts: !1,
    security: !1,
    v8: "10.8.168.25"
  },
  {
    name: "nodejs",
    version: "19.9.0",
    date: "2023-04-10",
    lts: !1,
    security: !1,
    v8: "10.8.168.25"
  },
  {
    name: "nodejs",
    version: "20.0.0",
    date: "2023-04-17",
    lts: !1,
    security: !1,
    v8: "11.3.244.4"
  },
  {
    name: "nodejs",
    version: "20.1.0",
    date: "2023-05-03",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.2.0",
    date: "2023-05-16",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.3.0",
    date: "2023-06-08",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.4.0",
    date: "2023-07-04",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.5.0",
    date: "2023-07-19",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.6.0",
    date: "2023-08-23",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.7.0",
    date: "2023-09-18",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.8.0",
    date: "2023-09-28",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.9.0",
    date: "2023-10-24",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.10.0",
    date: "2023-11-22",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.11.0",
    date: "2024-01-09",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.12.0",
    date: "2024-03-26",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.13.0",
    date: "2024-05-07",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.14.0",
    date: "2024-05-28",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.15.0",
    date: "2024-06-20",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.16.0",
    date: "2024-07-24",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.17.0",
    date: "2024-08-21",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.18.0",
    date: "2024-10-03",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.19.0",
    date: "2025-03-13",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.20.0",
    date: "2026-01-12",
    lts: "Iron",
    security: !0,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "21.0.0",
    date: "2023-10-17",
    lts: !1,
    security: !1,
    v8: "11.8.172.13"
  },
  {
    name: "nodejs",
    version: "21.1.0",
    date: "2023-10-24",
    lts: !1,
    security: !1,
    v8: "11.8.172.15"
  },
  {
    name: "nodejs",
    version: "21.2.0",
    date: "2023-11-14",
    lts: !1,
    security: !1,
    v8: "11.8.172.17"
  },
  {
    name: "nodejs",
    version: "21.3.0",
    date: "2023-11-30",
    lts: !1,
    security: !1,
    v8: "11.8.172.17"
  },
  {
    name: "nodejs",
    version: "21.4.0",
    date: "2023-12-05",
    lts: !1,
    security: !1,
    v8: "11.8.172.17"
  },
  {
    name: "nodejs",
    version: "21.5.0",
    date: "2023-12-19",
    lts: !1,
    security: !1,
    v8: "11.8.172.17"
  },
  {
    name: "nodejs",
    version: "21.6.0",
    date: "2024-01-14",
    lts: !1,
    security: !1,
    v8: "11.8.172.17"
  },
  {
    name: "nodejs",
    version: "21.7.0",
    date: "2024-03-06",
    lts: !1,
    security: !1,
    v8: "11.8.172.17"
  },
  {
    name: "nodejs",
    version: "22.0.0",
    date: "2024-04-24",
    lts: !1,
    security: !1,
    v8: "12.4.254.14"
  },
  {
    name: "nodejs",
    version: "22.1.0",
    date: "2024-05-02",
    lts: !1,
    security: !1,
    v8: "12.4.254.14"
  },
  {
    name: "nodejs",
    version: "22.2.0",
    date: "2024-05-15",
    lts: !1,
    security: !1,
    v8: "12.4.254.14"
  },
  {
    name: "nodejs",
    version: "22.3.0",
    date: "2024-06-11",
    lts: !1,
    security: !1,
    v8: "12.4.254.20"
  },
  {
    name: "nodejs",
    version: "22.4.0",
    date: "2024-07-02",
    lts: !1,
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.5.0",
    date: "2024-07-17",
    lts: !1,
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.6.0",
    date: "2024-08-06",
    lts: !1,
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.7.0",
    date: "2024-08-21",
    lts: !1,
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.8.0",
    date: "2024-09-03",
    lts: !1,
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.9.0",
    date: "2024-09-17",
    lts: !1,
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.10.0",
    date: "2024-10-16",
    lts: !1,
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.11.0",
    date: "2024-10-29",
    lts: "Jod",
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.12.0",
    date: "2024-12-02",
    lts: "Jod",
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.13.0",
    date: "2025-01-06",
    lts: "Jod",
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.14.0",
    date: "2025-02-11",
    lts: "Jod",
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.15.0",
    date: "2025-04-22",
    lts: "Jod",
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.16.0",
    date: "2025-05-20",
    lts: "Jod",
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.17.0",
    date: "2025-06-24",
    lts: "Jod",
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.18.0",
    date: "2025-07-31",
    lts: "Jod",
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.19.0",
    date: "2025-08-28",
    lts: "Jod",
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.20.0",
    date: "2025-09-24",
    lts: "Jod",
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.21.0",
    date: "2025-10-20",
    lts: "Jod",
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.22.0",
    date: "2026-01-12",
    lts: "Jod",
    security: !0,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "23.0.0",
    date: "2024-10-16",
    lts: !1,
    security: !1,
    v8: "12.9.202.26"
  },
  {
    name: "nodejs",
    version: "23.1.0",
    date: "2024-10-24",
    lts: !1,
    security: !1,
    v8: "12.9.202.28"
  },
  {
    name: "nodejs",
    version: "23.2.0",
    date: "2024-11-11",
    lts: !1,
    security: !1,
    v8: "12.9.202.28"
  },
  {
    name: "nodejs",
    version: "23.3.0",
    date: "2024-11-20",
    lts: !1,
    security: !1,
    v8: "12.9.202.28"
  },
  {
    name: "nodejs",
    version: "23.4.0",
    date: "2024-12-10",
    lts: !1,
    security: !1,
    v8: "12.9.202.28"
  },
  {
    name: "nodejs",
    version: "23.5.0",
    date: "2024-12-19",
    lts: !1,
    security: !1,
    v8: "12.9.202.28"
  },
  {
    name: "nodejs",
    version: "23.6.0",
    date: "2025-01-07",
    lts: !1,
    security: !1,
    v8: "12.9.202.28"
  },
  {
    name: "nodejs",
    version: "23.7.0",
    date: "2025-01-30",
    lts: !1,
    security: !1,
    v8: "12.9.202.28"
  },
  {
    name: "nodejs",
    version: "23.8.0",
    date: "2025-02-13",
    lts: !1,
    security: !1,
    v8: "12.9.202.28"
  },
  {
    name: "nodejs",
    version: "23.9.0",
    date: "2025-02-26",
    lts: !1,
    security: !1,
    v8: "12.9.202.28"
  },
  {
    name: "nodejs",
    version: "23.10.0",
    date: "2025-03-13",
    lts: !1,
    security: !1,
    v8: "12.9.202.28"
  },
  {
    name: "nodejs",
    version: "23.11.0",
    date: "2025-04-01",
    lts: !1,
    security: !1,
    v8: "12.9.202.28"
  },
  {
    name: "nodejs",
    version: "24.0.0",
    date: "2025-05-06",
    lts: !1,
    security: !1,
    v8: "13.6.233.8"
  },
  {
    name: "nodejs",
    version: "24.1.0",
    date: "2025-05-20",
    lts: !1,
    security: !1,
    v8: "13.6.233.10"
  },
  {
    name: "nodejs",
    version: "24.2.0",
    date: "2025-06-09",
    lts: !1,
    security: !1,
    v8: "13.6.233.10"
  },
  {
    name: "nodejs",
    version: "24.3.0",
    date: "2025-06-24",
    lts: !1,
    security: !1,
    v8: "13.6.233.10"
  },
  {
    name: "nodejs",
    version: "24.4.0",
    date: "2025-07-09",
    lts: !1,
    security: !1,
    v8: "13.6.233.10"
  },
  {
    name: "nodejs",
    version: "24.5.0",
    date: "2025-07-31",
    lts: !1,
    security: !1,
    v8: "13.6.233.10"
  },
  {
    name: "nodejs",
    version: "24.6.0",
    date: "2025-08-14",
    lts: !1,
    security: !1,
    v8: "13.6.233.10"
  },
  {
    name: "nodejs",
    version: "24.7.0",
    date: "2025-08-27",
    lts: !1,
    security: !1,
    v8: "13.6.233.10"
  },
  {
    name: "nodejs",
    version: "24.8.0",
    date: "2025-09-10",
    lts: !1,
    security: !1,
    v8: "13.6.233.10"
  },
  {
    name: "nodejs",
    version: "24.9.0",
    date: "2025-09-25",
    lts: !1,
    security: !1,
    v8: "13.6.233.10"
  },
  {
    name: "nodejs",
    version: "24.10.0",
    date: "2025-10-08",
    lts: !1,
    security: !1,
    v8: "13.6.233.10"
  },
  {
    name: "nodejs",
    version: "24.11.0",
    date: "2025-10-28",
    lts: "Krypton",
    security: !1,
    v8: "13.6.233.10"
  },
  {
    name: "nodejs",
    version: "24.12.0",
    date: "2025-12-10",
    lts: "Krypton",
    security: !1,
    v8: "13.6.233.17"
  },
  {
    name: "nodejs",
    version: "24.13.0",
    date: "2026-01-12",
    lts: "Krypton",
    security: !0,
    v8: "13.6.233.17"
  },
  {
    name: "nodejs",
    version: "24.14.0",
    date: "2026-02-24",
    lts: "Krypton",
    security: !1,
    v8: "13.6.233.17"
  },
  {
    name: "nodejs",
    version: "24.15.0",
    date: "2026-04-15",
    lts: "Krypton",
    security: !1,
    v8: "13.6.233.17"
  },
  {
    name: "nodejs",
    version: "24.16.0",
    date: "2026-05-21",
    lts: "Krypton",
    security: !1,
    v8: "13.6.233.17"
  },
  {
    name: "nodejs",
    version: "25.0.0",
    date: "2025-10-15",
    lts: !1,
    security: !1,
    v8: "14.1.146.11"
  },
  {
    name: "nodejs",
    version: "25.1.0",
    date: "2025-10-28",
    lts: !1,
    security: !1,
    v8: "14.1.146.11"
  },
  {
    name: "nodejs",
    version: "25.2.0",
    date: "2025-11-11",
    lts: !1,
    security: !1,
    v8: "14.1.146.11"
  },
  {
    name: "nodejs",
    version: "25.3.0",
    date: "2026-01-12",
    lts: !1,
    security: !0,
    v8: "14.1.146.11"
  },
  {
    name: "nodejs",
    version: "25.4.0",
    date: "2026-01-19",
    lts: !1,
    security: !1,
    v8: "14.1.146.11"
  },
  {
    name: "nodejs",
    version: "25.5.0",
    date: "2026-01-26",
    lts: !1,
    security: !1,
    v8: "14.1.146.11"
  },
  {
    name: "nodejs",
    version: "25.6.0",
    date: "2026-02-02",
    lts: !1,
    security: !1,
    v8: "14.1.146.11"
  },
  {
    name: "nodejs",
    version: "25.7.0",
    date: "2026-02-24",
    lts: !1,
    security: !1,
    v8: "14.1.146.11"
  },
  {
    name: "nodejs",
    version: "25.8.0",
    date: "2026-03-03",
    lts: !1,
    security: !1,
    v8: "14.1.146.11"
  },
  {
    name: "nodejs",
    version: "25.9.0",
    date: "2026-03-31",
    lts: !1,
    security: !1,
    v8: "14.1.146.11"
  },
  {
    name: "nodejs",
    version: "26.0.0",
    date: "2026-05-05",
    lts: !1,
    security: !1,
    v8: "14.6.202.33"
  },
  {
    name: "nodejs",
    version: "26.1.0",
    date: "2026-05-06",
    lts: !1,
    security: !1,
    v8: "14.6.202.34"
  },
  {
    name: "nodejs",
    version: "26.2.0",
    date: "2026-05-20",
    lts: !1,
    security: !1,
    v8: "14.6.202.34"
  },
  {
    name: "nodejs",
    version: "26.3.0",
    date: "2026-06-01",
    lts: !1,
    security: !1,
    v8: "14.6.202.34"
  }
];
var sB = {}, X1 = {}, Ef = { A: "ie", B: "edge", C: "firefox", D: "chrome", E: "safari", F: "opera", G: "ios_saf", H: "op_mini", I: "android", J: "bb", K: "op_mob", L: "and_chr", M: "and_ff", N: "ie_mob", O: "and_uc", P: "samsung", Q: "and_qq", R: "baidu", S: "kaios" };
X1.browsers = Ef;
var Z1 = {}, Sf = { 0: "116", 1: "117", 2: "118", 3: "119", 4: "120", 5: "121", 6: "122", 7: "123", 8: "124", 9: "125", A: "10", B: "11", C: "12", D: "7", E: "8", F: "9", G: "15", H: "80", I: "149", J: "4", K: "27", L: "6", M: "13", N: "14", O: "16", P: "17", Q: "18", R: "79", S: "81", T: "83", U: "84", V: "85", W: "86", X: "87", Y: "88", Z: "89", a: "90", b: "91", c: "92", d: "93", e: "94", f: "95", g: "96", h: "97", i: "98", j: "99", k: "100", l: "101", m: "102", n: "103", o: "104", p: "105", q: "106", r: "107", s: "108", t: "109", u: "110", v: "111", w: "112", x: "113", y: "114", z: "115", AB: "126", BB: "127", CB: "131", DB: "20", EB: "21", FB: "22", GB: "23", HB: "24", IB: "25", JB: "26", KB: "28", LB: "29", MB: "30", NB: "128", OB: "129", PB: "130", QB: "132", RB: "133", SB: "134", TB: "135", UB: "136", VB: "137", WB: "138", XB: "139", YB: "140", ZB: "141", aB: "142", bB: "143", cB: "144", dB: "145", eB: "146", fB: "147", gB: "148", hB: "5", iB: "19", jB: "31", kB: "32", lB: "33", mB: "34", nB: "35", oB: "36", pB: "37", qB: "38", rB: "39", sB: "40", tB: "41", uB: "42", vB: "43", wB: "44", xB: "45", yB: "46", zB: "47", "0B": "48", "1B": "49", "2B": "50", "3B": "51", "4B": "52", "5B": "53", "6B": "54", "7B": "55", "8B": "56", "9B": "57", AC: "58", BC: "60", CC: "62", DC: "63", EC: "64", FC: "65", GC: "66", HC: "67", IC: "68", JC: "69", KC: "70", LC: "71", MC: "72", NC: "73", OC: "74", PC: "75", QC: "76", RC: "77", SC: "78", TC: "151", UC: "11.1", VC: "12.1", WC: "15.5", XC: "16.0", YC: "17.0", ZC: "18.0", aC: "3", bC: "59", cC: "61", dC: "82", eC: "150", fC: "152", gC: "3.2", hC: "10.1", iC: "15.2-15.3", jC: "15.4", kC: "16.1", lC: "16.2", mC: "16.3", nC: "16.4", oC: "16.5", pC: "17.1", qC: "17.2", rC: "17.3", sC: "17.4", tC: "17.5", uC: "18.1", vC: "18.2", wC: "18.3", xC: "18.4", yC: "18.5-18.7", zC: "26.0", "0C": "26.1", "1C": "26.2", "2C": "26.3", "3C": "26.4", "4C": "26.5", "5C": "11.5", "6C": "4.2-4.3", "7C": "5.5", "8C": "2", "9C": "153", AD: "154", BD: "3.5", CD: "3.6", DD: "3.1", ED: "5.1", FD: "6.1", GD: "7.1", HD: "9.1", ID: "13.1", JD: "14.1", KD: "15.1", LD: "15.6", MD: "16.6", ND: "17.6", OD: "TP", PD: "9.5-9.6", QD: "10.0-10.1", RD: "10.5", SD: "10.6", TD: "11.6", UD: "4.0-4.1", VD: "5.0-5.1", WD: "6.0-6.1", XD: "7.0-7.1", YD: "8.1-8.4", ZD: "9.0-9.2", aD: "9.3", bD: "10.0-10.2", cD: "10.3", dD: "11.0-11.2", eD: "11.3-11.4", fD: "12.0-12.1", gD: "12.2-12.5", hD: "13.0-13.1", iD: "13.2", jD: "13.3", kD: "13.4-13.7", lD: "14.0-14.4", mD: "14.5-14.8", nD: "15.0-15.1", oD: "15.6-15.8", pD: "16.6-16.7", qD: "17.6-17.7", rD: "all", sD: "2.1", tD: "2.2", uD: "2.3", vD: "4.1", wD: "4.4", xD: "4.4.3-4.4.4", yD: "5.0-5.4", zD: "6.2-6.4", "0D": "7.2-7.4", "1D": "8.2", "2D": "9.2", "3D": "11.1-11.2", "4D": "12.0", "5D": "13.0", "6D": "14.0", "7D": "15.0", "8D": "19.0", "9D": "14.9", AE: "13.52", BE: "2.5", CE: "3.0-3.1" };
Z1.browserVersions = Sf;
var If = { A: { A: { L: 0, D: 0, E: 0, F: 0.130275, A: 0, B: 0.130275, "7C": 0 }, B: "ms", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "7C", "L", "D", "E", "F", "A", "B", "", "", ""], E: "IE", F: { "7C": 962323200, L: 998870400, D: 1161129600, E: 1237420800, F: 1300060800, A: 1346716800, B: 1381968e3 } }, B: { A: { 0: 0, 1: 0, 2: 0, 3: 4825e-6, 4: 0.014475, 5: 0, 6: 4825e-6, 7: 0, 8: 0, 9: 0, C: 0, M: 0, N: 0, G: 0, O: 0, P: 0, Q: 0, R: 0, H: 0, S: 0, T: 0, U: 0, V: 0, W: 0, X: 0, Y: 0, Z: 0, a: 0, b: 0, c: 965e-5, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0.02895, u: 0, v: 0, w: 0, x: 0, y: 4825e-6, z: 0, AB: 0, BB: 0, NB: 0, OB: 0, PB: 0, CB: 0.014475, QB: 4825e-6, RB: 965e-5, SB: 965e-5, TB: 965e-5, UB: 965e-5, VB: 965e-5, WB: 0.0193, XB: 965e-5, YB: 0.014475, ZB: 965e-5, aB: 0.014475, bB: 0.0193, cB: 0.024125, dB: 0.053075, eB: 0.072375, fB: 1.42338, gB: 2.90948, I: 4825e-6 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "C", "M", "N", "G", "O", "P", "Q", "R", "H", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "AB", "BB", "NB", "OB", "PB", "CB", "QB", "RB", "SB", "TB", "UB", "VB", "WB", "XB", "YB", "ZB", "aB", "bB", "cB", "dB", "eB", "fB", "gB", "I", "", "", ""], E: "Edge", F: { 0: 1692576e3, 1: 1694649600, 2: 1697155200, 3: 1698969600, 4: 1701993600, 5: 1706227200, 6: 1708732800, 7: 1711152e3, 8: 1713398400, 9: 1715990400, C: 1438128e3, M: 1447286400, N: 1470096e3, G: 1491868800, O: 1508198400, P: 1525046400, Q: 1542067200, R: 1579046400, H: 1581033600, S: 1586736e3, T: 1590019200, U: 1594857600, V: 1598486400, W: 1602201600, X: 1605830400, Y: 161136e4, Z: 1614816e3, a: 1618358400, b: 1622073600, c: 1626912e3, d: 1630627200, e: 1632441600, f: 1634774400, g: 1637539200, h: 1641427200, i: 1643932800, j: 1646265600, k: 1649635200, l: 1651190400, m: 1653955200, n: 1655942400, o: 1659657600, p: 1661990400, q: 1664755200, r: 1666915200, s: 1670198400, t: 1673481600, u: 1675900800, v: 1678665600, w: 1680825600, x: 1683158400, y: 1685664e3, z: 1689897600, AB: 1718841600, BB: 1721865600, NB: 1724371200, OB: 1726704e3, PB: 1729123200, CB: 1731542400, QB: 1737417600, RB: 1740614400, SB: 1741219200, TB: 1743984e3, UB: 1746316800, VB: 1748476800, WB: 1750896e3, XB: 1754611200, YB: 1756944e3, ZB: 1759363200, aB: 1761868800, bB: 1764806400, cB: 1768780800, dB: 1770854400, eB: 1773446400, fB: 1775692800, gB: 1778112e3, I: 1780531200 }, D: { C: "ms", M: "ms", N: "ms", G: "ms", O: "ms", P: "ms", Q: "ms" } }, C: { A: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 4825e-6, 5: 0.014475, 6: 0, 7: 0, 8: 0, 9: 4825e-6, "8C": 0, aC: 0, J: 0, hB: 0, L: 0, D: 0, E: 0, F: 0, A: 0, B: 0.043425, C: 0, M: 0, N: 0, G: 0, O: 0, P: 0, Q: 0, iB: 0, DB: 0, EB: 0, FB: 0, GB: 0, HB: 0, IB: 0, JB: 0, K: 0, KB: 0, LB: 0, MB: 0, jB: 0, kB: 0, lB: 0, mB: 0, nB: 0, oB: 0, pB: 0, qB: 0, rB: 0, sB: 0, tB: 0, uB: 0, vB: 0, wB: 0, xB: 0, yB: 0, zB: 0, "0B": 0, "1B": 0, "2B": 0, "3B": 0, "4B": 965e-5, "5B": 0, "6B": 0, "7B": 0, "8B": 4825e-6, "9B": 0, AC: 0, bC: 0, BC: 0, cC: 0, CC: 0, DC: 0, EC: 0, FC: 0, GC: 0, HC: 0, IC: 0, JC: 0, KC: 0, LC: 0, MC: 0, NC: 0, OC: 0, PC: 0, QC: 0, RC: 0, SC: 4825e-6, R: 0, H: 0, S: 0, dC: 0, T: 0, U: 0, V: 0, W: 0, X: 0, Y: 0, Z: 0, a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 4825e-6, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0.12545, AB: 0, BB: 0, NB: 965e-5, OB: 0, PB: 0, CB: 0, QB: 0, RB: 4825e-6, SB: 0, TB: 965e-5, UB: 965e-5, VB: 0, WB: 0, XB: 0, YB: 0.08685, ZB: 0, aB: 0, bB: 4825e-6, cB: 0, dB: 4825e-6, eB: 965e-5, fB: 0.014475, gB: 0.0193, I: 0.043425, eC: 0.91675, TC: 0.386, fC: 0, "9C": 0, AD: 0, BD: 0, CD: 0 }, B: "moz", C: ["8C", "aC", "BD", "CD", "J", "hB", "L", "D", "E", "F", "A", "B", "C", "M", "N", "G", "O", "P", "Q", "iB", "DB", "EB", "FB", "GB", "HB", "IB", "JB", "K", "KB", "LB", "MB", "jB", "kB", "lB", "mB", "nB", "oB", "pB", "qB", "rB", "sB", "tB", "uB", "vB", "wB", "xB", "yB", "zB", "0B", "1B", "2B", "3B", "4B", "5B", "6B", "7B", "8B", "9B", "AC", "bC", "BC", "cC", "CC", "DC", "EC", "FC", "GC", "HC", "IC", "JC", "KC", "LC", "MC", "NC", "OC", "PC", "QC", "RC", "SC", "R", "H", "S", "dC", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "AB", "BB", "NB", "OB", "PB", "CB", "QB", "RB", "SB", "TB", "UB", "VB", "WB", "XB", "YB", "ZB", "aB", "bB", "cB", "dB", "eB", "fB", "gB", "I", "eC", "TC", "fC", "9C", "AD"], E: "Firefox", F: { 0: 1690848e3, 1: 1693267200, 2: 1695686400, 3: 1698105600, 4: 1700524800, 5: 1702944e3, 6: 1705968e3, 7: 1708387200, 8: 1710806400, 9: 1713225600, "8C": 1161648e3, aC: 1213660800, BD: 124632e4, CD: 1264032e3, J: 1300752e3, hB: 1308614400, L: 1313452800, D: 1317081600, E: 1317081600, F: 1320710400, A: 1324339200, B: 1327968e3, C: 1331596800, M: 1335225600, N: 1338854400, G: 1342483200, O: 1346112e3, P: 1349740800, Q: 1353628800, iB: 1357603200, DB: 1361232e3, EB: 1364860800, FB: 1368489600, GB: 1372118400, HB: 1375747200, IB: 1379376e3, JB: 1386633600, K: 1391472e3, KB: 1395100800, LB: 1398729600, MB: 1402358400, jB: 1405987200, kB: 1409616e3, lB: 1413244800, mB: 1417392e3, nB: 1421107200, oB: 1424736e3, pB: 1428278400, qB: 1431475200, rB: 1435881600, sB: 1439251200, tB: 144288e4, uB: 1446508800, vB: 1450137600, wB: 1453852800, xB: 1457395200, yB: 1461628800, zB: 1465257600, "0B": 1470096e3, "1B": 1474329600, "2B": 1479168e3, "3B": 1485216e3, "4B": 1488844800, "5B": 149256e4, "6B": 1497312e3, "7B": 1502150400, "8B": 1506556800, "9B": 1510617600, AC: 1516665600, bC: 1520985600, BC: 1525824e3, cC: 1529971200, CC: 1536105600, DC: 1540252800, EC: 1544486400, FC: 154872e4, GC: 1552953600, HC: 1558396800, IC: 1562630400, JC: 1567468800, KC: 1571788800, LC: 1575331200, MC: 1578355200, NC: 1581379200, OC: 1583798400, PC: 1586304e3, QC: 1588636800, RC: 1591056e3, SC: 1593475200, R: 1595894400, H: 1598313600, S: 1600732800, dC: 1603152e3, T: 1605571200, U: 1607990400, V: 1611619200, W: 1614038400, X: 1616457600, Y: 1618790400, Z: 1622505600, a: 1626134400, b: 1628553600, c: 1630972800, d: 1633392e3, e: 1635811200, f: 1638835200, g: 1641859200, h: 1644364800, i: 1646697600, j: 1649116800, k: 1651536e3, l: 1653955200, m: 1656374400, n: 1658793600, o: 1661212800, p: 1663632e3, q: 1666051200, r: 1668470400, s: 1670889600, t: 1673913600, u: 1676332800, v: 1678752e3, w: 1681171200, x: 1683590400, y: 1686009600, z: 1688428800, AB: 1715644800, BB: 1718064e3, NB: 1720483200, OB: 1722902400, PB: 1725321600, CB: 1727740800, QB: 173016e4, RB: 1732579200, SB: 1736208e3, TB: 1738627200, UB: 1741046400, VB: 1743465600, WB: 1745884800, XB: 1748304e3, YB: 1750723200, ZB: 1753142400, aB: 1755561600, bB: 1757980800, cB: 17604e5, dB: 1762819200, eB: 1765238400, fB: 1768262400, gB: 1771891200, I: 1774310400, eC: 1776729600, TC: 1779148800, fC: null, "9C": null, AD: null } }, D: { A: { 0: 0.516275, 1: 0.284675, 2: 1.1773, 3: 0.02895, 4: 0.294325, 5: 0.024125, 6: 0.033775, 7: 0.033775, 8: 0.27985, 9: 0.5211, J: 0, hB: 0, L: 0, D: 0, E: 0, F: 0, A: 0, B: 0, C: 0, M: 0, N: 0, G: 0, O: 0, P: 0, Q: 0, iB: 0, DB: 0, EB: 0, FB: 0, GB: 0, HB: 0, IB: 0, JB: 0, K: 0, KB: 0, LB: 0, MB: 0, jB: 0, kB: 0, lB: 0, mB: 0, nB: 0, oB: 0, pB: 0, qB: 0, rB: 0.08685, sB: 0.08685, tB: 0.08685, uB: 0.08685, vB: 0.08685, wB: 0.08685, xB: 0.091675, yB: 0.08685, zB: 0.08685, "0B": 0.091675, "1B": 0.091675, "2B": 0.08685, "3B": 0.08685, "4B": 0.091675, "5B": 0.08685, "6B": 0.08685, "7B": 0.08685, "8B": 0.08685, "9B": 0.08685, AC: 0.08685, bC: 0.08685, BC: 0.08685, cC: 0, CC: 0, DC: 0, EC: 0, FC: 0, GC: 4825e-6, HC: 0, IC: 0, JC: 4825e-6, KC: 0.024125, LC: 0, MC: 0, NC: 0, OC: 0, PC: 0, QC: 0, RC: 0, SC: 0, R: 0.02895, H: 0, S: 0, T: 0, U: 0, V: 0, W: 4825e-6, X: 0.014475, Y: 0, Z: 0, a: 0, b: 965e-5, c: 0, d: 0.014475, e: 0, f: 0, g: 4825e-6, h: 4825e-6, i: 0.02895, j: 0.014475, k: 965e-5, l: 965e-5, m: 4825e-6, n: 0.303975, o: 0.2509, p: 0.236425, q: 0.236425, r: 0.236425, s: 0.246075, t: 0.7334, u: 0.24125, v: 0.2895, w: 0.902275, x: 0, y: 0.024125, z: 965e-5, AB: 0.0386, BB: 0.0193, NB: 0.053075, OB: 0.0193, PB: 0.062725, CB: 0.564525, QB: 0.04825, RB: 0.516275, SB: 0.04825, TB: 0.0386, UB: 0.043425, VB: 0.082025, WB: 0.159225, XB: 0.101325, YB: 0.0772, ZB: 0.0579, aB: 0.902275, bB: 0.110975, cB: 0.29915, dB: 0.863675, eB: 0.583825, fB: 6.10362, gB: 8.41963, I: 0.033775, eC: 965e-5, TC: 0, fC: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "J", "hB", "L", "D", "E", "F", "A", "B", "C", "M", "N", "G", "O", "P", "Q", "iB", "DB", "EB", "FB", "GB", "HB", "IB", "JB", "K", "KB", "LB", "MB", "jB", "kB", "lB", "mB", "nB", "oB", "pB", "qB", "rB", "sB", "tB", "uB", "vB", "wB", "xB", "yB", "zB", "0B", "1B", "2B", "3B", "4B", "5B", "6B", "7B", "8B", "9B", "AC", "bC", "BC", "cC", "CC", "DC", "EC", "FC", "GC", "HC", "IC", "JC", "KC", "LC", "MC", "NC", "OC", "PC", "QC", "RC", "SC", "R", "H", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "AB", "BB", "NB", "OB", "PB", "CB", "QB", "RB", "SB", "TB", "UB", "VB", "WB", "XB", "YB", "ZB", "aB", "bB", "cB", "dB", "eB", "fB", "gB", "I", "eC", "TC", "fC"], E: "Chrome", F: { 0: 1692057600, 1: 1694476800, 2: 1696896e3, 3: 1698710400, 4: 1701993600, 5: 1705968e3, 6: 1708387200, 7: 1710806400, 8: 1713225600, 9: 1715644800, J: 1264377600, hB: 1274745600, L: 1283385600, D: 1287619200, E: 1291248e3, F: 1296777600, A: 1299542400, B: 1303862400, C: 1307404800, M: 1312243200, N: 1316131200, G: 1316131200, O: 1319500800, P: 1323734400, Q: 1328659200, iB: 1332892800, DB: 133704e4, EB: 1340668800, FB: 1343692800, GB: 1348531200, HB: 1352246400, IB: 1357862400, JB: 1361404800, K: 1364428800, KB: 1369094400, LB: 1374105600, MB: 1376956800, jB: 1384214400, kB: 1389657600, lB: 1392940800, mB: 1397001600, nB: 1400544e3, oB: 1405468800, pB: 1409011200, qB: 141264e4, rB: 1416268800, sB: 1421798400, tB: 1425513600, uB: 1429401600, vB: 143208e4, wB: 1437523200, xB: 1441152e3, yB: 1444780800, zB: 1449014400, "0B": 1453248e3, "1B": 1456963200, "2B": 1460592e3, "3B": 1464134400, "4B": 1469059200, "5B": 1472601600, "6B": 1476230400, "7B": 1480550400, "8B": 1485302400, "9B": 1489017600, AC: 149256e4, bC: 1496707200, BC: 1500940800, cC: 1504569600, CC: 1508198400, DC: 1512518400, EC: 1516752e3, FC: 1520294400, GC: 1523923200, HC: 1527552e3, IC: 1532390400, JC: 1536019200, KC: 1539648e3, LC: 1543968e3, MC: 154872e4, NC: 1552348800, OC: 1555977600, PC: 1559606400, QC: 1564444800, RC: 1568073600, SC: 1571702400, R: 1575936e3, H: 1580860800, S: 1586304e3, T: 1589846400, U: 1594684800, V: 1598313600, W: 1601942400, X: 1605571200, Y: 1611014400, Z: 1614556800, a: 1618272e3, b: 1621987200, c: 1626739200, d: 1630368e3, e: 1632268800, f: 1634601600, g: 1637020800, h: 1641340800, i: 1643673600, j: 1646092800, k: 1648512e3, l: 1650931200, m: 1653350400, n: 1655769600, o: 1659398400, p: 1661817600, q: 1664236800, r: 1666656e3, s: 166968e4, t: 1673308800, u: 1675728e3, v: 1678147200, w: 1680566400, x: 1682985600, y: 1685404800, z: 1689724800, AB: 1718064e3, BB: 1721174400, NB: 1724112e3, OB: 1726531200, PB: 1728950400, CB: 1731369600, QB: 1736812800, RB: 1738627200, SB: 1741046400, TB: 1743465600, UB: 1745884800, VB: 1748304e3, WB: 1750723200, XB: 1754352e3, YB: 1756771200, ZB: 1759190400, aB: 1761609600, bB: 1764633600, cB: 1768262400, dB: 1770681600, eB: 1773100800, fB: 177552e4, gB: 1777939200, I: 1780358400, eC: null, TC: null, fC: null } }, E: { A: { J: 0, hB: 0, L: 0, D: 0, E: 0, F: 0, A: 0, B: 0, C: 0, M: 0, N: 4825e-6, G: 0, K: 0, DD: 0, gC: 0, ED: 0, FD: 0, GD: 0, HD: 0, hC: 0, UC: 0, VC: 0, ID: 0.014475, JD: 0.014475, KD: 0, iC: 0, jC: 0, WC: 0, LD: 0.06755, XC: 0, kC: 965e-5, lC: 4825e-6, mC: 965e-5, nC: 4825e-6, oC: 965e-5, MD: 0.110975, YC: 4825e-6, pC: 0.091675, qC: 4825e-6, rC: 965e-5, sC: 0.0193, tC: 0.033775, ND: 0.120625, ZC: 965e-5, uC: 0.014475, vC: 965e-5, wC: 0.033775, xC: 0.014475, yC: 0.352225, zC: 0.0193, "0C": 0.024125, "1C": 0.1158, "2C": 0.419775, "3C": 0.62725, "4C": 0.284675, OD: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "DD", "gC", "J", "hB", "ED", "L", "FD", "D", "GD", "E", "F", "HD", "A", "hC", "B", "UC", "C", "VC", "M", "ID", "N", "JD", "G", "KD", "iC", "jC", "WC", "LD", "XC", "kC", "lC", "mC", "nC", "oC", "MD", "YC", "pC", "qC", "rC", "sC", "tC", "ND", "ZC", "uC", "vC", "wC", "xC", "yC", "zC", "0C", "1C", "2C", "3C", "4C", "K", "OD"], E: "Safari", F: { DD: 1205798400, gC: 1226534400, J: 1244419200, hB: 1275868800, ED: 131112e4, L: 1343174400, FD: 13824e5, D: 13824e5, GD: 1410998400, E: 1413417600, F: 1443657600, HD: 1458518400, A: 1474329600, hC: 1490572800, B: 1505779200, UC: 1522281600, C: 1537142400, VC: 1553472e3, M: 1568851200, ID: 1585008e3, N: 1600214400, JD: 1619395200, G: 1632096e3, KD: 1635292800, iC: 1639353600, jC: 1647216e3, WC: 1652745600, LD: 1658275200, XC: 1662940800, kC: 1666569600, lC: 1670889600, mC: 1674432e3, nC: 1679875200, oC: 1684368e3, MD: 1690156800, YC: 1695686400, pC: 1698192e3, qC: 1702252800, rC: 1705881600, sC: 1709596800, tC: 1715558400, ND: 1722211200, ZC: 1726444800, uC: 1730073600, vC: 1733875200, wC: 1737936e3, xC: 1743379200, yC: 1747008e3, zC: 1757894400, "0C": 1762128e3, "1C": 1762041600, "2C": 1770854400, "3C": 1774310400, "4C": null, K: null, OD: null } }, F: { A: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, F: 0, B: 0, C: 0, G: 0, O: 0, P: 0, Q: 0, iB: 0, DB: 0, EB: 0, FB: 0, GB: 0, HB: 0, IB: 0, JB: 0, K: 0, KB: 0, LB: 0, MB: 0, jB: 0, kB: 0, lB: 0, mB: 0, nB: 0, oB: 0, pB: 0, qB: 0, rB: 0, sB: 0, tB: 0, uB: 0, vB: 0, wB: 0, xB: 0, yB: 0, zB: 0, "0B": 0, "1B": 0, "2B": 0, "3B": 0, "4B": 0, "5B": 0, "6B": 0, "7B": 0, "8B": 0, "9B": 0, AC: 0, BC: 0, CC: 0, DC: 0, EC: 0, FC: 0, GC: 0, HC: 0, IC: 0, JC: 0, KC: 0, LC: 0, MC: 0, NC: 0, OC: 0, PC: 0, QC: 0, RC: 0, SC: 0, R: 0, H: 0, S: 0, dC: 0, T: 0, U: 0, V: 0, W: 0, X: 0, Y: 0, Z: 0, a: 0, b: 0, c: 0, d: 0, e: 0, f: 0.024125, g: 0, h: 0.033775, i: 0.072375, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0, AB: 0, BB: 0, CB: 0.4246, PD: 0, QD: 0, RD: 0, SD: 0, UC: 0, "5C": 0, TD: 0, VC: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "F", "PD", "QD", "RD", "SD", "B", "UC", "5C", "TD", "C", "VC", "G", "O", "P", "Q", "iB", "DB", "EB", "FB", "GB", "HB", "IB", "JB", "K", "KB", "LB", "MB", "jB", "kB", "lB", "mB", "nB", "oB", "pB", "qB", "rB", "sB", "tB", "uB", "vB", "wB", "xB", "yB", "zB", "0B", "1B", "2B", "3B", "4B", "5B", "6B", "7B", "8B", "9B", "AC", "BC", "CC", "DC", "EC", "FC", "GC", "HC", "IC", "JC", "KC", "LC", "MC", "NC", "OC", "PC", "QC", "RC", "SC", "R", "H", "S", "dC", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "AB", "BB", "CB", "", "", ""], E: "Opera", F: { 0: 1736294400, 1: 1739404800, 2: 1744675200, 3: 1747094400, 4: 1751414400, 5: 1756339200, 6: 1757548800, 7: 1761609600, 8: 1762992e3, 9: 1764806400, F: 1150761600, PD: 1223424e3, QD: 1251763200, RD: 1267488e3, SD: 1277942400, B: 1292457600, UC: 1302566400, "5C": 1309219200, TD: 1323129600, C: 1323129600, VC: 1352073600, G: 1372723200, O: 1377561600, P: 1381104e3, Q: 1386288e3, iB: 1390867200, DB: 1393891200, EB: 1399334400, FB: 1401753600, GB: 1405987200, HB: 1409616e3, IB: 1413331200, JB: 1417132800, K: 1422316800, KB: 1425945600, LB: 1430179200, MB: 1433808e3, jB: 1438646400, kB: 1442448e3, lB: 1445904e3, mB: 1449100800, nB: 1454371200, oB: 1457308800, pB: 146232e4, qB: 1465344e3, rB: 1470096e3, sB: 1474329600, tB: 1477267200, uB: 1481587200, vB: 1486425600, wB: 1490054400, xB: 1494374400, yB: 1498003200, zB: 1502236800, "0B": 1506470400, "1B": 1510099200, "2B": 1515024e3, "3B": 1517961600, "4B": 1521676800, "5B": 1525910400, "6B": 1530144e3, "7B": 1534982400, "8B": 1537833600, "9B": 1543363200, AC: 1548201600, BC: 1554768e3, CC: 1561593600, DC: 1566259200, EC: 1570406400, FC: 1573689600, GC: 1578441600, HC: 1583971200, IC: 1587513600, JC: 1592956800, KC: 1595894400, LC: 1600128e3, MC: 1603238400, NC: 161352e4, OC: 1612224e3, PC: 1616544e3, QC: 1619568e3, RC: 1623715200, SC: 1627948800, R: 1631577600, H: 1633392e3, S: 1635984e3, dC: 1638403200, T: 1642550400, U: 1644969600, V: 1647993600, W: 1650412800, X: 1652745600, Y: 1654646400, Z: 1657152e3, a: 1660780800, b: 1663113600, c: 1668816e3, d: 1668643200, e: 1671062400, f: 1675209600, g: 1677024e3, h: 1679529600, i: 1681948800, j: 1684195200, k: 1687219200, l: 1690329600, m: 1692748800, n: 1696204800, o: 169992e4, p: 169992e4, q: 1702944e3, r: 1707264e3, s: 1710115200, t: 1711497600, u: 1716336e3, v: 1719273600, w: 1721088e3, x: 1724284800, y: 1727222400, z: 1732665600, AB: 1769990400, BB: 1772064e3, CB: 1776124800 }, D: { F: "o", B: "o", C: "o", PD: "o", QD: "o", RD: "o", SD: "o", UC: "o", "5C": "o", TD: "o", VC: "o" } }, G: { A: { E: 0, gC: 0, UD: 0, "6C": 130592e-8, VD: 0, WD: 0, XD: 261184e-8, YD: 0, ZD: 130592e-8, aD: 0, bD: 0, cD: 0.0117533, dD: 0.309502, eD: 391775e-8, fD: 0, gD: 0.0444012, hD: 0, iD: 0.0143651, jD: 0, kD: 261184e-8, lD: 0.0104473, mD: 0.0169769, nD: 0.0130592, iC: 783551e-8, jC: 0.0104473, WC: 0.0117533, oD: 0.2207, XC: 0.0235065, kC: 0.0365657, lC: 0.0195888, mC: 0.0430953, nC: 914142e-8, oC: 0.015671, pD: 0.293831, YC: 0.0130592, pC: 0.0222006, qC: 0.0195888, rC: 0.0378716, sC: 0.0600722, tC: 0.0809669, qD: 0.212865, ZC: 0.0430953, uC: 0.0848846, vC: 0.0457071, wC: 0.135815, xC: 0.062684, yC: 2.1626, zC: 0.139733, "0C": 0.172381, "1C": 0.663406, "2C": 2.09469, "3C": 4.31998, "4C": 1.54229 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "gC", "UD", "6C", "VD", "WD", "XD", "E", "YD", "ZD", "aD", "bD", "cD", "dD", "eD", "fD", "gD", "hD", "iD", "jD", "kD", "lD", "mD", "nD", "iC", "jC", "WC", "oD", "XC", "kC", "lC", "mC", "nC", "oC", "pD", "YC", "pC", "qC", "rC", "sC", "tC", "qD", "ZC", "uC", "vC", "wC", "xC", "yC", "zC", "0C", "1C", "2C", "3C", "4C", "", ""], E: "Safari on iOS", F: { gC: 1270252800, UD: 1283904e3, "6C": 1299628800, VD: 1331078400, WD: 1359331200, XD: 1394409600, E: 1410912e3, YD: 1413763200, ZD: 1442361600, aD: 1458518400, bD: 1473724800, cD: 1490572800, dD: 1505779200, eD: 1522281600, fD: 1537142400, gD: 1553472e3, hD: 1568851200, iD: 1572220800, jD: 1580169600, kD: 1585008e3, lD: 1600214400, mD: 1619395200, nD: 1632096e3, iC: 1639353600, jC: 1647216e3, WC: 1652659200, oD: 1658275200, XC: 1662940800, kC: 1666569600, lC: 1670889600, mC: 1674432e3, nC: 1679875200, oC: 1684368e3, pD: 1690156800, YC: 1694995200, pC: 1698192e3, qC: 1702252800, rC: 1705881600, sC: 1709596800, tC: 1715558400, qD: 1722211200, ZC: 1726444800, uC: 1730073600, vC: 1733875200, wC: 1737936e3, xC: 1743379200, yC: 1747008e3, zC: 1757894400, "0C": 1762128e3, "1C": 1765497600, "2C": 1770854400, "3C": 1774310400, "4C": null } }, H: { A: { rD: 0 }, B: "o", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "rD", "", "", ""], E: "Opera Mini", F: { rD: 1426464e3 } }, I: { A: { aC: 0, J: 0, I: 0.304961, sD: 0, tD: 0, uD: 0, vD: 0, "6C": 305266e-10, wD: 0, xD: 152633e-9 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "sD", "tD", "uD", "aC", "J", "vD", "6C", "wD", "xD", "I", "", "", ""], E: "Android Browser", F: { sD: 1256515200, tD: 1274313600, uD: 1291593600, aC: 1298332800, J: 1318896e3, vD: 1341792e3, "6C": 1374624e3, wD: 1386547200, xD: 1401667200, I: 1779235200 } }, J: { A: { D: 0, A: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "D", "A", "", "", ""], E: "Blackberry Browser", F: { D: 1325376e3, A: 1359504e3 } }, K: { A: { A: 0, B: 0, C: 0, H: 0.838188, UC: 0, "5C": 0, VC: 0 }, B: "o", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "A", "B", "UC", "5C", "C", "VC", "H", "", "", ""], E: "Opera Mobile", F: { A: 1287100800, B: 1300752e3, UC: 1314835200, "5C": 1318291200, C: 1330300800, VC: 1349740800, H: 1709769600 }, D: { H: "webkit" } }, L: { A: { I: 42.196 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "I", "", "", ""], E: "Chrome for Android", F: { I: 1779235200 } }, M: { A: { TC: 0.372528 }, B: "moz", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "TC", "", "", ""], E: "Firefox for Android", F: { TC: 1779148800 } }, N: { A: { A: 0, B: 0 }, B: "ms", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "A", "B", "", "", ""], E: "IE Mobile", F: { A: 1340150400, B: 1353456e3 } }, O: { A: { WC: 0.574314 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "WC", "", "", ""], E: "UC Browser for Android", F: { WC: 1710115200 }, D: { WC: "webkit" } }, P: { A: { J: 0, DB: 0, EB: 0, FB: 0, GB: 0, HB: 705283e-8, IB: 705283e-8, JB: 0.0282113, K: 0.0141057, KB: 0.0493698, LB: 0.966237, MB: 0.190426, yD: 0, zD: 0, "0D": 0, "1D": 0, "2D": 0, hC: 0, "3D": 0, "4D": 0, "5D": 0, "6D": 0, "7D": 0, XC: 0, YC: 0, ZC: 0, "8D": 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "J", "yD", "zD", "0D", "1D", "2D", "hC", "3D", "4D", "5D", "6D", "7D", "XC", "YC", "ZC", "8D", "DB", "EB", "FB", "GB", "HB", "IB", "JB", "K", "KB", "LB", "MB", "", "", ""], E: "Samsung Internet", F: { J: 1461024e3, yD: 1481846400, zD: 1509408e3, "0D": 1528329600, "1D": 1546128e3, "2D": 1554163200, hC: 1567900800, "3D": 1582588800, "4D": 1593475200, "5D": 1605657600, "6D": 1618531200, "7D": 1629072e3, XC: 1640736e3, YC: 1651708800, ZC: 1659657600, "8D": 1667260800, DB: 1677369600, EB: 1684454400, FB: 1689292800, GB: 1697587200, HB: 1711497600, IB: 1715126400, JB: 1717718400, K: 1725667200, KB: 1746057600, LB: 1761264e3, MB: 1779235200 } }, Q: { A: { "9D": 0.108654 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "9D", "", "", ""], E: "QQ Browser", F: { "9D": 1710288e3 } }, R: { A: { AE: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AE", "", "", ""], E: "Baidu Browser", F: { AE: 1710201600 } }, S: { A: { BE: 5174e-6, CE: 0 }, B: "moz", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "BE", "CE", "", "", ""], E: "KaiOS Browser", F: { BE: 1527811200, CE: 1631664e3 } } };
const jf = X1.browsers, j1 = Z1.browserVersions, z0 = If;
function q0(B) {
  return Object.keys(B).reduce((e, t) => (e[j1[t]] = B[t], e), {});
}
sB.agents = Object.keys(z0).reduce((B, e) => {
  let t = z0[e];
  return B[jf[e]] = Object.keys(t).reduce((r, s) => (s === "A" ? r.usage_global = q0(t[s]) : s === "C" ? r.versions = t[s].reduce((i, n) => (n === "" ? i.push(null) : i.push(j1[n]), i), []) : s === "D" ? r.prefix_exceptions = q0(t[s]) : s === "E" ? r.browser = t[s] : s === "F" ? r.release_date = Object.keys(t[s]).reduce(
    (i, n) => (i[j1[n]] = t[s][n], i),
    {}
  ) : r.prefix = t[s], r), {}), B;
}, {});
var Of = {
  "0.20": "39",
  "0.21": "41",
  "0.22": "41",
  "0.23": "41",
  "0.24": "41",
  "0.25": "42",
  "0.26": "42",
  "0.27": "43",
  "0.28": "43",
  "0.29": "43",
  "0.30": "44",
  "0.31": "45",
  "0.32": "45",
  "0.33": "45",
  "0.34": "45",
  "0.35": "45",
  "0.36": "47",
  "0.37": "49",
  "1.0": "49",
  "1.1": "50",
  "1.2": "51",
  "1.3": "52",
  "1.4": "53",
  "1.5": "54",
  "1.6": "56",
  "1.7": "58",
  "1.8": "59",
  "2.0": "61",
  "2.1": "61",
  "3.0": "66",
  "3.1": "66",
  "4.0": "69",
  "4.1": "69",
  "4.2": "69",
  "5.0": "73",
  "6.0": "76",
  "6.1": "76",
  "7.0": "78",
  "7.1": "78",
  "7.2": "78",
  "7.3": "78",
  "8.0": "80",
  "8.1": "80",
  "8.2": "80",
  "8.3": "80",
  "8.4": "80",
  "8.5": "80",
  "9.0": "83",
  "9.1": "83",
  "9.2": "83",
  "9.3": "83",
  "9.4": "83",
  "10.0": "85",
  "10.1": "85",
  "10.2": "85",
  "10.3": "85",
  "10.4": "85",
  "11.0": "87",
  "11.1": "87",
  "11.2": "87",
  "11.3": "87",
  "11.4": "87",
  "11.5": "87",
  "12.0": "89",
  "12.1": "89",
  "12.2": "89",
  "13.0": "91",
  "13.1": "91",
  "13.2": "91",
  "13.3": "91",
  "13.4": "91",
  "13.5": "91",
  "13.6": "91",
  "14.0": "93",
  "14.1": "93",
  "14.2": "93",
  "15.0": "94",
  "15.1": "94",
  "15.2": "94",
  "15.3": "94",
  "15.4": "94",
  "15.5": "94",
  "16.0": "96",
  "16.1": "96",
  "16.2": "96",
  "17.0": "98",
  "17.1": "98",
  "17.2": "98",
  "17.3": "98",
  "17.4": "98",
  "18.0": "100",
  "18.1": "100",
  "18.2": "100",
  "18.3": "100",
  "19.0": "102",
  "19.1": "102",
  "20.0": "104",
  "20.1": "104",
  "20.2": "104",
  "20.3": "104",
  "21.0": "106",
  "21.1": "106",
  "21.2": "106",
  "21.3": "106",
  "21.4": "106",
  "22.0": "108",
  "22.1": "108",
  "22.2": "108",
  "22.3": "108",
  "23.0": "110",
  "23.1": "110",
  "23.2": "110",
  "23.3": "110",
  "24.0": "112",
  "24.1": "112",
  "24.2": "112",
  "24.3": "112",
  "24.4": "112",
  "24.5": "112",
  "24.6": "112",
  "24.7": "112",
  "24.8": "112",
  "25.0": "114",
  "25.1": "114",
  "25.2": "114",
  "25.3": "114",
  "25.4": "114",
  "25.5": "114",
  "25.6": "114",
  "25.7": "114",
  "25.8": "114",
  "25.9": "114",
  "26.0": "116",
  "26.1": "116",
  "26.2": "116",
  "26.3": "116",
  "26.4": "116",
  "26.5": "116",
  "26.6": "116",
  "27.0": "118",
  "27.1": "118",
  "27.2": "118",
  "27.3": "118",
  "28.0": "120",
  "28.1": "120",
  "28.2": "120",
  "28.3": "120",
  "29.0": "122",
  "29.1": "122",
  "29.2": "122",
  "29.3": "122",
  "29.4": "122",
  "30.0": "124",
  "30.1": "124",
  "30.2": "124",
  "30.3": "124",
  "30.4": "124",
  "30.5": "124",
  "31.0": "126",
  "31.1": "126",
  "31.2": "126",
  "31.3": "126",
  "31.4": "126",
  "31.5": "126",
  "31.6": "126",
  "31.7": "126",
  "32.0": "128",
  "32.1": "128",
  "32.2": "128",
  "32.3": "128",
  "33.0": "130",
  "33.1": "130",
  "33.2": "130",
  "33.3": "130",
  "33.4": "130",
  "34.0": "132",
  "34.1": "132",
  "34.2": "132",
  "34.3": "132",
  "34.4": "132",
  "34.5": "132",
  "35.0": "134",
  "35.1": "134",
  "35.2": "134",
  "35.3": "134",
  "35.4": "134",
  "35.5": "134",
  "35.6": "134",
  "35.7": "134",
  "36.0": "136",
  "36.1": "136",
  "36.2": "136",
  "36.3": "136",
  "36.4": "136",
  "36.5": "136",
  "36.6": "136",
  "36.7": "136",
  "36.8": "136",
  "36.9": "136",
  "37.0": "138",
  "37.1": "138",
  "37.2": "138",
  "37.3": "138",
  "37.4": "138",
  "37.5": "138",
  "37.6": "138",
  "37.7": "138",
  "37.8": "138",
  "37.9": "138",
  "37.10": "138",
  "38.0": "140",
  "38.1": "140",
  "38.2": "140",
  "38.3": "140",
  "38.4": "140",
  "38.5": "140",
  "38.6": "140",
  "38.7": "140",
  "38.8": "140",
  "39.0": "142",
  "39.1": "142",
  "39.2": "142",
  "39.3": "142",
  "39.4": "142",
  "39.5": "142",
  "39.6": "142",
  "39.7": "142",
  "39.8": "142",
  "40.0": "144",
  "40.1": "144",
  "40.2": "144",
  "40.3": "144",
  "40.4": "144",
  "40.5": "144",
  "40.6": "144",
  "40.7": "144",
  "40.8": "144",
  "40.9": "144",
  "40.10": "144",
  "41.0": "146",
  "41.1": "146",
  "41.2": "146",
  "41.3": "146",
  "41.4": "146",
  "41.5": "146",
  "41.6": "146",
  "41.7": "146",
  "42.0": "148",
  "42.1": "148",
  "42.2": "148",
  "42.3": "148",
  "42.4": "148",
  "43.0": "150"
};
const Ff = {
  start: "2015-09-08",
  lts: "2015-10-12",
  maintenance: "2017-04-01",
  end: "2018-04-30",
  codename: "Argon"
}, Rf = {
  start: "2015-10-29",
  maintenance: "2016-04-30",
  end: "2016-06-30"
}, Mf = {
  start: "2016-04-26",
  lts: "2016-10-18",
  maintenance: "2018-04-30",
  end: "2019-04-30",
  codename: "Boron"
}, Pf = {
  start: "2016-10-25",
  maintenance: "2017-04-30",
  end: "2017-06-30"
}, Gf = {
  start: "2017-05-30",
  lts: "2017-10-31",
  maintenance: "2019-01-01",
  end: "2019-12-31",
  codename: "Carbon"
}, Lf = {
  start: "2017-10-01",
  maintenance: "2018-04-01",
  end: "2018-06-30"
}, Nf = {
  start: "2018-04-24",
  lts: "2018-10-30",
  maintenance: "2020-05-19",
  end: "2021-04-30",
  codename: "Dubnium"
}, Hf = {
  start: "2018-10-23",
  maintenance: "2019-04-22",
  end: "2019-06-01"
}, Kf = {
  start: "2019-04-23",
  lts: "2019-10-21",
  maintenance: "2020-11-30",
  end: "2022-04-30",
  codename: "Erbium"
}, Jf = {
  start: "2019-10-22",
  maintenance: "2020-04-01",
  end: "2020-06-01"
}, Tf = {
  start: "2020-04-21",
  lts: "2020-10-27",
  maintenance: "2021-10-19",
  end: "2023-04-30",
  codename: "Fermium"
}, zf = {
  start: "2020-10-20",
  maintenance: "2021-04-01",
  end: "2021-06-01"
}, qf = {
  start: "2021-04-20",
  lts: "2021-10-26",
  maintenance: "2022-10-18",
  end: "2023-09-11",
  codename: "Gallium"
}, Uf = {
  start: "2021-10-19",
  maintenance: "2022-04-01",
  end: "2022-06-01"
}, Vf = {
  start: "2022-04-19",
  lts: "2022-10-25",
  maintenance: "2023-10-18",
  end: "2025-04-30",
  codename: "Hydrogen"
}, Wf = {
  start: "2022-10-18",
  maintenance: "2023-04-01",
  end: "2023-06-01"
}, Qf = {
  start: "2023-04-18",
  lts: "2023-10-24",
  maintenance: "2024-10-22",
  end: "2026-04-30",
  codename: "Iron"
}, Yf = {
  start: "2023-10-17",
  maintenance: "2024-04-01",
  end: "2024-06-01"
}, Xf = {
  start: "2024-04-24",
  lts: "2024-10-29",
  maintenance: "2025-10-21",
  end: "2027-04-30",
  codename: "Jod"
}, Zf = {
  start: "2024-10-16",
  maintenance: "2025-04-01",
  end: "2025-06-01"
}, $f = {
  start: "2025-05-06",
  lts: "2025-10-28",
  maintenance: "2026-10-20",
  end: "2028-04-30",
  codename: "Krypton"
}, _f = {
  start: "2025-10-15",
  maintenance: "2026-04-01",
  end: "2026-06-01"
}, ec = {
  start: "2026-05-05",
  lts: "2026-10-28",
  maintenance: "2027-10-20",
  end: "2029-04-30",
  codename: ""
}, tc = {
  alpha: "2026-10-28",
  start: "2027-04-22",
  maintenance: "2027-10-20",
  end: "2030-04-30",
  codename: ""
}, rc = {
  "v0.8": {
    start: "2012-06-25",
    end: "2014-07-31"
  },
  "v0.10": {
    start: "2013-03-11",
    end: "2016-10-31"
  },
  "v0.12": {
    start: "2015-02-06",
    end: "2016-12-31"
  },
  v4: Ff,
  v5: Rf,
  v6: Mf,
  v7: Pf,
  v8: Gf,
  v9: Lf,
  v10: Nf,
  v11: Hf,
  v12: Kf,
  v13: Jf,
  v14: Tf,
  v15: zf,
  v16: qf,
  v17: Uf,
  v18: Vf,
  v19: Wf,
  v20: Qf,
  v21: Yf,
  v22: Xf,
  v23: Zf,
  v24: $f,
  v25: _f,
  v26: ec,
  v27: tc
};
function $1(B) {
  this.name = "BrowserslistError", this.message = B, this.browserslist = !0, Error.captureStackTrace && Error.captureStackTrace(this, $1);
}
$1.prototype = Error.prototype;
var oa = $1, hr = oa;
function Ct() {
}
var Bc = {
  loadQueries: function() {
    throw new hr(
      "Sharable configs are not supported in client-side build of Browserslist"
    );
  },
  getStat: function(e) {
    return e.stats;
  },
  loadConfig: function(e) {
    if (e.config)
      throw new hr(
        "Browserslist config are not supported in client-side build"
      );
  },
  loadCountry: function() {
    throw new hr(
      "Country statistics are not supported in client-side build of Browserslist"
    );
  },
  loadFeature: function() {
    throw new hr(
      "Supports queries are not available in client-side build of Browserslist"
    );
  },
  currentNode: function(e, t) {
    return e(["maintained node versions"], t)[0];
  },
  parseConfig: Ct,
  readConfig: Ct,
  findConfig: Ct,
  findConfigFile: Ct,
  clearCaches: Ct,
  oldDataWarning: Ct,
  env: {}
}, U0 = /^\s+and\s+(.*)/i, V0 = /^(?:,\s*|\s+or\s+)(.*)/i;
function la(B) {
  return Array.isArray(B) ? B.reduce(function(e, t) {
    return e.concat(la(t));
  }, []) : [B];
}
function sc(B, e) {
  for (var t = B.length, r = 1; r <= t; r++) {
    var s = B.substr(-r, r);
    if (e(s, r, t))
      return B.slice(0, -r);
  }
  return "";
}
function yB(B, e) {
  var t = { query: e };
  e.indexOf("not ") === 0 && (t.not = !0, e = e.slice(4));
  for (var r in B) {
    var s = B[r], i = e.match(s.regexp);
    if (i) {
      t.type = r;
      for (var n = 0; n < s.matches.length; n++)
        t[s.matches[n]] = i[n + 1];
      return t;
    }
  }
  return t.type = "unknown", t;
}
function ic(B, e, t) {
  var r;
  return sc(e, function(s, i, n) {
    return U0.test(s) ? (r = yB(B, s.match(U0)[1]), r.compose = "and", t.unshift(r), !0) : V0.test(s) ? (r = yB(B, s.match(V0)[1]), r.compose = "or", t.unshift(r), !0) : i === n ? (r = yB(B, s.trim()), r.compose = "or", t.unshift(r), !0) : !1;
  });
}
var nc = function(e, t) {
  return Array.isArray(t) || (t = [t]), la(
    t.map(function(r) {
      var s = [];
      do
        r = ic(e, r, s);
      while (r);
      return s;
    })
  );
}, mr = Rr, Cc = Af, Je = sB.agents, Ee = Of, xB = rc, Vr = Ae, ce = oa, fe = Bc, ac = nc, oc = 365.259641 * 24 * 60 * 60 * 1e3, ua = "37", lc = 14, fa = "140";
function ca(B, e) {
  return (B + ".").indexOf(e + ".") === 0;
}
function uc(B) {
  var e = B.slice(1);
  return R.nodeVersions.some(function(t) {
    return ca(t, e);
  });
}
function W0(B) {
  return B.filter(function(e) {
    return typeof e == "string";
  });
}
function br(B) {
  var e = B;
  return B.split(".").length === 3 && (e = B.split(".").slice(0, -1).join(".")), e;
}
function Ve(B) {
  return function(t) {
    return B + " " + t;
  };
}
function O1(B) {
  return parseInt(B.split(".")[0]);
}
function gr(B, e) {
  if (B.length === 0) return [];
  var t = Da(B.map(O1)), r = t[t.length - e];
  if (!r)
    return B;
  for (var s = [], i = B.length - 1; i >= 0 && !(r > O1(B[i])); i--)
    s.unshift(B[i]);
  return s;
}
function Da(B) {
  for (var e = [], t = 0; t < B.length; t++)
    e.indexOf(B[t]) === -1 && e.push(B[t]);
  return e;
}
function iB(B, e, t) {
  for (var r in t)
    B[e + " " + r] = t[r];
}
function Q0(B, e) {
  if (e = parseFloat(e), B === ">")
    return function(r) {
      return t(r) > e;
    };
  return B === ">=" ? function(r) {
    return t(r) >= e;
  } : B === "<" ? function(r) {
    return parseFloat(r) < e;
  } : function(r) {
    return parseFloat(r) <= e;
  };
  function t(r) {
    return parseFloat(r.split("-")[1] || r);
  }
}
function fc(B, e) {
  return e = e.split(".").map(We), e[1] = e[1] || 0, e[2] = e[2] || 0, B === ">" ? function(t) {
    return t = t.split(".").map(We), Pt(t, e) > 0;
  } : B === ">=" ? function(t) {
    return t = t.split(".").map(We), Pt(t, e) >= 0;
  } : B === "<" ? function(t) {
    return t = t.split(".").map(We), Pt(e, t) > 0;
  } : function(t) {
    return t = t.split(".").map(We), Pt(e, t) >= 0;
  };
}
function We(B) {
  return parseInt(B);
}
function Mr(B, e) {
  return B < e ? -1 : B > e ? 1 : 0;
}
function Pt(B, e) {
  return Mr(parseInt(B[0]), parseInt(e[0])) || Mr(parseInt(B[1] || "0"), parseInt(e[1] || "0")) || Mr(parseInt(B[2] || "0"), parseInt(e[2] || "0"));
}
function Y0(B, e) {
  switch (e = e.split(".").map(We), typeof e[1] > "u" && (e[1] = "x"), B) {
    case "<=":
      return function(t) {
        return t = t.split(".").map(We), X0(t, e) <= 0;
      };
    case ">=":
    default:
      return function(t) {
        return t = t.split(".").map(We), X0(t, e) >= 0;
      };
  }
}
function X0(B, e) {
  return B[0] !== e[0] ? B[0] < e[0] ? -1 : 1 : e[1] === "x" ? 0 : B[1] !== e[1] ? B[1] < e[1] ? -1 : 1 : 0;
}
function cc(B, e) {
  return B.versions.indexOf(e) !== -1 ? e : R.versionAliases[B.name][e] ? R.versionAliases[B.name][e] : !1;
}
function vr(B, e) {
  var t = cc(B, e);
  return t || (B.versions.length === 1 ? B.versions[0] : !1);
}
function da(B, e) {
  return B = B / 1e3, Object.keys(Je).reduce(function(t, r) {
    var s = Qe(r, e);
    if (!s) return t;
    var i = Object.keys(s.releaseDate).filter(function(n) {
      var a = s.releaseDate[n];
      return a !== null && a >= B;
    });
    return t.concat(i.map(Ve(s.name)));
  }, []);
}
function Z0(B) {
  return {
    name: B.name,
    versions: B.versions,
    released: B.released,
    releaseDate: B.releaseDate
  };
}
function Qe(B, e) {
  if (B = B.toLowerCase(), B = R.aliases[B] || B, e.mobileToDesktop && R.desktopNames[B]) {
    var t = R.data[R.desktopNames[B]];
    if (B === "android")
      return pc(Z0(R.data[B]), t);
    var r = Z0(t);
    return r.name = B, r;
  }
  return R.data[B];
}
function $0(B, e) {
  var t = e.indexOf(ua);
  return B.filter(function(r) {
    return /^(?:[2-4]\.|[34]$)/.test(r);
  }).concat(e.slice(t));
}
var Dc = ["__proto__", "constructor", "prototype"];
function dc(B) {
  var e = {};
  for (var t in B)
    Dc.indexOf(t) === -1 && (e[t] = B[t]);
  return e;
}
function pc(B, e) {
  return B.released = $0(B.released, e.released), B.versions = $0(B.versions, e.versions), B.releaseDate = dc(B.releaseDate), B.released.forEach(function(t) {
    B.releaseDate[t] === void 0 && (B.releaseDate[t] = e.releaseDate[t]);
  }), B;
}
function at(B, e) {
  var t = Qe(B, e);
  if (!t) throw new ce("Unknown browser " + B);
  return t;
}
function hc(B) {
  return new ce(
    "Unknown browser query `" + B + "`. Maybe you are using old Browserslist or made typo in query."
  );
}
function wr(B, e, t, r) {
  var s = 1;
  switch (e) {
    case "android":
      if (r.mobileToDesktop) return B;
      var i = R.data.chrome.released;
      s = i.length - i.indexOf(ua);
      break;
    case "op_mob":
      var n = R.data.op_mob.released.slice(-1)[0];
      s = O1(n) - lc + 1;
      break;
    default:
      return B;
  }
  return t <= s ? B.slice(-1) : B.slice(s - 1 - t);
}
function _0(B, e) {
  return typeof B == "string" && (B.indexOf("y") >= 0 || e && B.indexOf("a") >= 0);
}
function _e(B, e) {
  return _1(B).reduce(function(t, r, s) {
    if (r.not && s === 0)
      throw new ce(
        "Write any browsers query (for instance, `defaults`) before `" + r.query + "`"
      );
    var i = e0[r.type], n = i.select.call(R, e, r).map(function(C) {
      var o = C.split(" ");
      return o[1] === "0" ? o[0] + " " + Qe(o[0], e).versions[0] : C;
    });
    if (r.compose === "and")
      return r.not ? t.filter(function(C) {
        return n.indexOf(C) === -1;
      }) : t.filter(function(C) {
        return n.indexOf(C) !== -1;
      });
    if (r.not) {
      var a = {};
      return n.forEach(function(C) {
        a[C] = !0;
      }), t.filter(function(C) {
        return !a[C];
      });
    }
    return t.concat(n);
  }, []);
}
function pa(B) {
  return typeof B > "u" && (B = {}), typeof B.path > "u" && (B.path = Vr.resolve ? Vr.resolve(".") : "."), B;
}
function ha(B, e) {
  if (typeof B > "u" || B === null) {
    var t = R.loadConfig(e);
    t ? B = t : B = R.defaults;
  }
  return B;
}
function ma(B) {
  if (!(typeof B == "string" || Array.isArray(B)))
    throw new ce(
      "Browser queries must be an array or string. Got " + typeof B + "."
    );
}
var kB = {}, AB = {};
function R(B, e) {
  e = pa(e), B = ha(B, e), ma(B);
  var t = _1(B).some(function(C) {
    return e0[C.type].needsPath;
  }), r = {
    ignoreUnknownVersions: e.ignoreUnknownVersions,
    dangerousExtend: e.dangerousExtend,
    throwOnMissing: e.throwOnMissing,
    mobileToDesktop: e.mobileToDesktop,
    env: e.env
  };
  t && (r.path = e.path), fe.oldDataWarning(R.data);
  var s = fe.getStat(e, R.data);
  if (s) {
    r.customUsage = {};
    for (var i in s)
      iB(r.customUsage, i, s[i]);
  }
  var n = JSON.stringify([B, r]);
  if (kB[n]) return kB[n];
  var a = Da(_e(B, r)).sort(function(C, o) {
    if (C = C.split(" "), o = o.split(" "), C[0] === o[0]) {
      var l = C[1].split("-")[0], u = o[1].split("-")[0];
      return Pt(u.split("."), l.split("."));
    } else
      return Mr(C[0], o[0]);
  });
  return fe.env.BROWSERSLIST_DISABLE_CACHE || (kB[n] = a), a;
}
function _1(B) {
  var e = JSON.stringify(B);
  if (e in AB) return AB[e];
  var t = ac(e0, B);
  return fe.env.BROWSERSLIST_DISABLE_CACHE || (AB[e] = t), t;
}
function ba(B, e) {
  var t = fe.loadStat(B, e, R.data);
  if (t) {
    B.customUsage = {};
    for (var r in t)
      iB(B.customUsage, r, t[r]);
  }
  if (!B.customUsage)
    throw new ce("Custom usage statistics was not provided");
  return B.customUsage;
}
R.parse = function(B, e) {
  return e = pa(e), B = ha(B, e), ma(B), _1(B);
};
R.cache = {};
R.data = {};
R.usage = {
  global: {},
  custom: null
};
R.defaults = ["> 0.5%", "last 2 versions", "Firefox ESR", "not dead"];
R.aliases = {
  fx: "firefox",
  ff: "firefox",
  ios: "ios_saf",
  explorer: "ie",
  blackberry: "bb",
  explorermobile: "ie_mob",
  operamini: "op_mini",
  operamobile: "op_mob",
  chromeandroid: "and_chr",
  firefoxandroid: "and_ff",
  ucandroid: "and_uc",
  qqandroid: "and_qq"
};
R.desktopNames = {
  and_chr: "chrome",
  and_ff: "firefox",
  ie_mob: "ie",
  android: "chrome"
  // has extra processing logic
};
R.versionAliases = {};
R.clearCaches = fe.clearCaches;
R.parseConfig = fe.parseConfig;
R.readConfig = fe.readConfig;
R.findConfigFile = fe.findConfigFile;
R.findConfig = fe.findConfig;
R.loadConfig = fe.loadConfig;
R.coverage = function(B, e) {
  var t;
  if (typeof e > "u")
    t = R.usage.global;
  else if (e === "my stats") {
    var r = {};
    r.path = Vr.resolve ? Vr.resolve(".") : ".";
    var s = fe.getStat(r);
    if (!s)
      throw new ce("Custom usage statistics was not provided");
    t = {};
    for (var i in s)
      iB(t, i, s[i]);
  } else if (typeof e == "string")
    e.length > 2 ? e = e.toLowerCase() : e = e.toUpperCase(), fe.loadCountry(R.usage, e, R.data), t = R.usage[e];
  else {
    "dataByBrowser" in e && (e = e.dataByBrowser), t = {};
    for (var n in e)
      for (var a in e[n])
        t[n + " " + a] = e[n][a];
  }
  return B.reduce(function(C, o) {
    var l = t[o];
    return l === void 0 && (l = t[o.replace(/ \S+$/, " 0")]), C + (l || 0);
  }, 0);
};
function EB(B, e) {
  var t = R.nodeVersions.filter(function(r) {
    return ca(r, e.version);
  });
  if (t.length === 0) {
    if (B.ignoreUnknownVersions)
      return [];
    throw new ce(
      "Unknown version " + e.version + " of Node.js"
    );
  }
  return ["node " + t[t.length - 1]];
}
function SB(B, e) {
  var t = parseInt(e.year), r = parseInt(e.month || "01") - 1, s = parseInt(e.day || "01");
  return da(Date.UTC(t, r, s, 0, 0, 0), B);
}
function mc(B) {
  var e = {
    chrome: "chrome",
    chrome_android: "and_chr",
    edge: "edge",
    firefox: "firefox",
    firefox_android: "and_ff",
    safari: "safari",
    safari_ios: "ios_saf",
    webview_android: "android",
    samsunginternet_android: "samsung",
    opera_android: "op_mob",
    opera: "opera",
    qq_android: "and_qq",
    uc_android: "and_uc",
    kai_os: "kaios"
  };
  return B.filter(function(t) {
    return Object.keys(e).indexOf(t.browser) !== -1;
  }).map(function(t) {
    return e[t.browser] + " >= " + t.version;
  });
}
function IB(B, e) {
  var t = parseFloat(e.coverage), r = R.usage.global;
  if (e.place)
    if (e.place.match(/^my\s+stats$/i)) {
      if (!B.customUsage)
        throw new ce("Custom usage statistics was not provided");
      r = B.customUsage;
    } else {
      var s;
      e.place.length === 2 ? s = e.place.toUpperCase() : s = e.place.toLowerCase(), fe.loadCountry(R.usage, s, R.data), r = R.usage[s];
    }
  else e.config && (r = ba(B, e.config));
  for (var i = Object.keys(r).sort(function(l, u) {
    return r[u] - r[l];
  }), n = 0, a = [], C, o = 0; o < i.length && (C = i[o], !(r[C] === 0 || (n += r[C], a.push(C), n >= t))); o++)
    ;
  return a;
}
var e0 = {
  last_major_versions: {
    matches: ["versions"],
    regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
    select: function(B, e) {
      return Object.keys(Je).reduce(function(t, r) {
        var s = Qe(r, B);
        if (!s) return t;
        var i = gr(s.released, e.versions);
        return i = i.map(Ve(s.name)), i = wr(i, s.name, e.versions, B), t.concat(i);
      }, []);
    }
  },
  last_versions: {
    matches: ["versions"],
    regexp: /^last\s+(\d+)\s+versions?$/i,
    select: function(B, e) {
      return Object.keys(Je).reduce(function(t, r) {
        var s = Qe(r, B);
        if (!s) return t;
        var i = s.released.slice(-e.versions);
        return i = i.map(Ve(s.name)), i = wr(i, s.name, e.versions, B), t.concat(i);
      }, []);
    }
  },
  last_electron_major_versions: {
    matches: ["versions"],
    regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
    select: function(B, e) {
      var t = gr(Object.keys(Ee), e.versions);
      return t.map(function(r) {
        return "chrome " + Ee[r];
      });
    }
  },
  last_node_major_versions: {
    matches: ["versions"],
    regexp: /^last\s+(\d+)\s+node\s+major\s+versions?$/i,
    select: function(B, e) {
      return gr(R.nodeVersions, e.versions).map(
        function(t) {
          return "node " + t;
        }
      );
    }
  },
  last_browser_major_versions: {
    matches: ["versions", "browser"],
    regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
    select: function(B, e) {
      var t = at(e.browser, B), r = gr(t.released, e.versions), s = r.map(Ve(t.name));
      return s = wr(s, t.name, e.versions, B), s;
    }
  },
  last_electron_versions: {
    matches: ["versions"],
    regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
    select: function(B, e) {
      return Object.keys(Ee).slice(-e.versions).map(function(t) {
        return "chrome " + Ee[t];
      });
    }
  },
  last_node_versions: {
    matches: ["versions"],
    regexp: /^last\s+(\d+)\s+node\s+versions?$/i,
    select: function(B, e) {
      return R.nodeVersions.slice(-e.versions).map(function(t) {
        return "node " + t;
      });
    }
  },
  last_browser_versions: {
    matches: ["versions", "browser"],
    regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
    select: function(B, e) {
      var t = at(e.browser, B), r = t.released.slice(-e.versions).map(Ve(t.name));
      return r = wr(r, t.name, e.versions, B), r;
    }
  },
  unreleased_versions: {
    matches: [],
    regexp: /^unreleased\s+versions$/i,
    select: function(B) {
      return Object.keys(Je).reduce(function(e, t) {
        var r = Qe(t, B);
        if (!r) return e;
        var s = r.versions.filter(function(i) {
          return r.released.indexOf(i) === -1;
        });
        return s = s.map(Ve(r.name)), e.concat(s);
      }, []);
    }
  },
  unreleased_electron_versions: {
    matches: [],
    regexp: /^unreleased\s+electron\s+versions?$/i,
    select: function() {
      return [];
    }
  },
  unreleased_browser_versions: {
    matches: ["browser"],
    regexp: /^unreleased\s+(\w+)\s+versions?$/i,
    select: function(B, e) {
      var t = at(e.browser, B);
      return t.versions.filter(function(r) {
        return t.released.indexOf(r) === -1;
      }).map(Ve(t.name));
    }
  },
  last_years: {
    matches: ["years"],
    regexp: /^last\s+((\d+\.)?\d+)\s+years?$/i,
    select: function(B, e) {
      return da(Date.now() - oc * e.years, B);
    }
  },
  since_y: {
    matches: ["year"],
    regexp: /^since (\d+)$/i,
    select: SB
  },
  since_y_m: {
    matches: ["year", "month"],
    regexp: /^since (\d+)-(\d+)$/i,
    select: SB
  },
  since_y_m_d: {
    matches: ["year", "month", "day"],
    regexp: /^since (\d+)-(\d+)-(\d+)$/i,
    select: SB
  },
  baseline: {
    matches: ["year", "availability", "date", "downstream", "kaios"],
    // Matches:
    //   baseline 2024
    //   baseline newly available
    //   baseline widely available
    //   baseline widely available on 2024-06-01
    //   ...with downstream
    //   ...including kaios
    regexp: /^baseline\s+(?:(\d+)|(newly|widely)\s+available(?:\s+on\s+(\d{4}-\d{2}-\d{2}))?)?(\s+with\s+downstream)?(\s+including\s+kaios)?$/i,
    select: function(B, e) {
      var t, r = !!e.downstream, s = !!e.kaios;
      if (e.availability === "newly" && e.date)
        throw new ce(
          'Using newly available with a date is not supported, please use "widely available on YYYY-MM-DD" and add 30 months to the date you specified.'
        );
      if (e.year)
        t = mr.getCompatibleVersions({
          targetYear: e.year,
          includeDownstreamBrowsers: r,
          includeKaiOS: s,
          suppressWarnings: !0
        });
      else if (e.date)
        t = mr.getCompatibleVersions({
          widelyAvailableOnDate: e.date,
          includeDownstreamBrowsers: r,
          includeKaiOS: s,
          suppressWarnings: !0
        });
      else if (e.availability === "newly") {
        var i = (/* @__PURE__ */ new Date()).setMonth((/* @__PURE__ */ new Date()).getMonth() + 30);
        t = mr.getCompatibleVersions({
          widelyAvailableOnDate: i,
          includeDownstreamBrowsers: r,
          includeKaiOS: s,
          suppressWarnings: !0
        });
      } else
        t = mr.getCompatibleVersions({
          includeDownstreamBrowsers: r,
          includeKaiOS: s,
          suppressWarnings: !0
        });
      return _e(mc(t), B);
    }
  },
  popularity: {
    matches: ["sign", "popularity"],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
    select: function(B, e) {
      var t = parseFloat(e.popularity), r = R.usage.global;
      return Object.keys(r).reduce(function(s, i) {
        return e.sign === ">" ? r[i] > t && s.push(i) : e.sign === "<" ? r[i] < t && s.push(i) : e.sign === "<=" ? r[i] <= t && s.push(i) : r[i] >= t && s.push(i), s;
      }, []);
    }
  },
  popularity_in_my_stats: {
    matches: ["sign", "popularity"],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
    select: function(B, e) {
      var t = parseFloat(e.popularity);
      if (!B.customUsage)
        throw new ce("Custom usage statistics was not provided");
      var r = B.customUsage;
      return Object.keys(r).reduce(function(s, i) {
        var n = r[i];
        return n == null || (e.sign === ">" ? n > t && s.push(i) : e.sign === "<" ? n < t && s.push(i) : e.sign === "<=" ? n <= t && s.push(i) : n >= t && s.push(i)), s;
      }, []);
    }
  },
  popularity_in_config_stats: {
    matches: ["sign", "popularity", "config"],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
    select: function(B, e) {
      var t = parseFloat(e.popularity), r = ba(B, e.config);
      return Object.keys(r).reduce(function(s, i) {
        var n = r[i];
        return n == null || (e.sign === ">" ? n > t && s.push(i) : e.sign === "<" ? n < t && s.push(i) : e.sign === "<=" ? n <= t && s.push(i) : n >= t && s.push(i)), s;
      }, []);
    }
  },
  popularity_in_place: {
    matches: ["sign", "popularity", "place"],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
    select: function(B, e) {
      var t = parseFloat(e.popularity), r = e.place;
      r.length === 2 ? r = r.toUpperCase() : r = r.toLowerCase(), fe.loadCountry(R.usage, r, R.data);
      var s = R.usage[r];
      return Object.keys(s).reduce(function(i, n) {
        var a = s[n];
        return a == null || (e.sign === ">" ? a > t && i.push(n) : e.sign === "<" ? a < t && i.push(n) : e.sign === "<=" ? a <= t && i.push(n) : a >= t && i.push(n)), i;
      }, []);
    }
  },
  cover: {
    matches: ["coverage"],
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,
    select: IB
  },
  cover_in: {
    matches: ["coverage", "place"],
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,
    select: IB
  },
  cover_config: {
    matches: ["coverage", "config"],
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/i,
    select: IB
  },
  supports: {
    matches: ["supportType", "feature"],
    regexp: /^(?:(fully|partially)\s+)?supports\s+([\w-]+)$/,
    select: function(B, e) {
      fe.loadFeature(R.cache, e.feature);
      var t = e.supportType !== "fully", r = R.cache[e.feature], s = [];
      for (var i in r) {
        for (var n = Qe(i, B), a = n.released.length - 1; a >= 0 && !(n.released[a] in r[i]); )
          a--;
        var C = B.mobileToDesktop && i in R.desktopNames && _0(r[i][n.released[a]], t);
        n.versions.forEach(function(o) {
          var l = r[i][o];
          l === void 0 && C && (l = r[R.desktopNames[i]][o]), _0(l, t) && s.push(i + " " + o);
        });
      }
      return s;
    }
  },
  electron_range: {
    matches: ["from", "to"],
    regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function(B, e) {
      var t = br(e.from), r = br(e.to), s = parseFloat(e.from), i = parseFloat(e.to);
      if (!Ee[t])
        throw new ce("Unknown version " + s + " of electron");
      if (!Ee[r])
        throw new ce("Unknown version " + i + " of electron");
      return Object.keys(Ee).filter(function(n) {
        var a = parseFloat(n);
        return a >= s && a <= i;
      }).map(function(n) {
        return "chrome " + Ee[n];
      });
    }
  },
  node_range: {
    matches: ["from", "to"],
    regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function(B, e) {
      return R.nodeVersions.filter(Y0(">=", e.from)).filter(Y0("<=", e.to)).map(function(t) {
        return "node " + t;
      });
    }
  },
  browser_range: {
    matches: ["browser", "from", "to"],
    regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function(B, e) {
      var t = at(e.browser, B), r = parseFloat(vr(t, e.from) || e.from), s = parseFloat(vr(t, e.to) || e.to);
      function i(n) {
        var a = parseFloat(n);
        return a >= r && a <= s;
      }
      return t.released.filter(i).map(Ve(t.name));
    }
  },
  electron_ray: {
    matches: ["sign", "version"],
    regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function(B, e) {
      var t = br(e.version);
      return Object.keys(Ee).filter(Q0(e.sign, t)).map(function(r) {
        return "chrome " + Ee[r];
      });
    }
  },
  node_ray: {
    matches: ["sign", "version"],
    regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function(B, e) {
      return R.nodeVersions.filter(fc(e.sign, e.version)).map(function(t) {
        return "node " + t;
      });
    }
  },
  browser_ray: {
    matches: ["browser", "sign", "version"],
    regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+|esr)$/i,
    select: function(B, e) {
      var t = e.version, r = at(e.browser, B), s = R.versionAliases[r.name][t.toLowerCase()];
      if (s && (t = s), !/[\d.]+/.test(t))
        throw new ce(
          "Unknown version " + t + " of " + e.browser
        );
      return r.released.filter(Q0(e.sign, t)).map(function(i) {
        return r.name + " " + i;
      });
    }
  },
  firefox_esr: {
    matches: [],
    regexp: /^(firefox|ff|fx)\s+esr$/i,
    select: function() {
      return ["firefox " + fa];
    }
  },
  opera_mini_all: {
    matches: [],
    regexp: /(operamini|op_mini)\s+all/i,
    select: function() {
      return ["op_mini all"];
    }
  },
  electron_version: {
    matches: ["version"],
    regexp: /^electron\s+([\d.]+)$/i,
    select: function(B, e) {
      var t = br(e.version), r = Ee[t];
      if (!r)
        throw new ce(
          "Unknown version " + e.version + " of electron"
        );
      return ["chrome " + r];
    }
  },
  node_major_version: {
    matches: ["version"],
    regexp: /^node\s+(\d+)$/i,
    select: EB
  },
  node_minor_version: {
    matches: ["version"],
    regexp: /^node\s+(\d+\.\d+)$/i,
    select: EB
  },
  node_patch_version: {
    matches: ["version"],
    regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
    select: EB
  },
  current_node: {
    matches: [],
    regexp: /^current\s+node$/i,
    select: function(B) {
      return [fe.currentNode(_e, B)];
    }
  },
  maintained_node: {
    matches: [],
    regexp: /^maintained\s+node\s+versions$/i,
    select: function(B) {
      var e = Date.now(), t = Object.keys(xB).filter(function(r) {
        return e < Date.parse(xB[r].end) && e > Date.parse(xB[r].start) && uc(r);
      }).map(function(r) {
        return "node " + r.slice(1);
      });
      return _e(t, B);
    }
  },
  phantomjs_1_9: {
    matches: [],
    regexp: /^phantomjs\s+1.9$/i,
    select: function() {
      return ["safari 5"];
    }
  },
  phantomjs_2_1: {
    matches: [],
    regexp: /^phantomjs\s+2.1$/i,
    select: function() {
      return ["safari 6"];
    }
  },
  browser_version: {
    matches: ["browser", "version"],
    regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
    select: function(B, e) {
      var t = e.version;
      /^tp$/i.test(t) && (t = "TP");
      var r = at(e.browser, B), s = vr(r, t);
      if (s)
        t = s;
      else if (t.indexOf(".") === -1 ? s = t + ".0" : s = t.replace(/\.0$/, ""), s = vr(r, s), s)
        t = s;
      else {
        if (B.ignoreUnknownVersions)
          return [];
        throw new ce(
          "Unknown version " + t + " of " + e.browser
        );
      }
      return [r.name + " " + t];
    }
  },
  browserslist_config: {
    matches: [],
    regexp: /^browserslist config$/i,
    needsPath: !0,
    select: function(B) {
      return R(void 0, B);
    }
  },
  extends: {
    matches: ["config"],
    regexp: /^extends (.+)$/i,
    needsPath: !0,
    select: function(B, e) {
      return _e(fe.loadQueries(B, e.config), B);
    }
  },
  defaults: {
    matches: [],
    regexp: /^defaults$/i,
    select: function(B) {
      return _e(R.defaults, B);
    }
  },
  dead: {
    matches: [],
    regexp: /^dead$/i,
    select: function(B) {
      var e = [
        "Baidu >= 0",
        "ie <= 11",
        "ie_mob <= 11",
        "bb <= 10",
        "op_mob <= 12.1",
        "samsung 4"
      ];
      return _e(e, B);
    }
  },
  unknown: {
    matches: [],
    regexp: /^(\w+)$/i,
    select: function(B, e) {
      throw Qe(e.query, B) ? new ce(
        "Specify versions in Browserslist query for browser " + e.query
      ) : hc(e.query);
    }
  }
};
(function() {
  for (var B in Je) {
    var e = Je[B];
    R.data[B] = {
      name: B,
      versions: W0(Je[B].versions),
      released: W0(Je[B].versions.slice(0, -3)),
      releaseDate: Je[B].release_date
    }, iB(R.usage.global, B, e.usage_global), R.versionAliases[B] = {};
    for (var t = 0; t < e.versions.length; t++) {
      var r = e.versions[t];
      if (r && r.indexOf("-") !== -1)
        for (var s = r.split("-"), i = 0; i < s.length; i++)
          R.versionAliases[B][s[i]] = r;
    }
  }
  R.nodeVersions = Cc.map(function(n) {
    return n.version;
  });
})();
R.versionAliases.firefox.esr = fa;
var t0 = R, r0 = { exports: {} }, bc = {
  1: "ls",
  // WHATWG Living Standard
  2: "rec",
  // W3C Recommendation
  3: "pr",
  // W3C Proposed Recommendation
  4: "cr",
  // W3C Candidate Recommendation
  5: "wd",
  // W3C Working Draft
  6: "other",
  // Non-W3C, but reputable
  7: "unoff"
  // Unofficial, Editor's Draft or W3C "Note"
}, gc = {
  y: 1,
  n: 2,
  a: 4,
  p: 8,
  u: 16,
  x: 32,
  d: 64
};
const vc = bc, ei = gc, wc = X1.browsers, yc = Z1.browserVersions, xc = Math.log(2);
function kc(B) {
  let e = Object.keys(ei).reduce((s, i) => (B & ei[i] && s.push(i), s), []), t = B >> 7, r = [];
  for (; t; ) {
    let s = Math.floor(Math.log(t) / xc) + 1;
    r.unshift(`#${s}`), t -= Math.pow(2, s - 1);
  }
  return e.concat(r).join(" ");
}
function ga(B) {
  let e = {
    status: vc[B.B],
    title: B.C,
    shown: B.D
  };
  return e.stats = Object.keys(B.A).reduce((t, r) => {
    let s = B.A[r];
    return t[wc[r]] = Object.keys(s).reduce(
      (i, n) => {
        let a = s[n].split(" "), C = kc(n);
        return a.forEach((o) => i[yc[o]] = C), i;
      },
      {}
    ), t;
  }, {}), e;
}
r0.exports = ga;
r0.exports.default = ga;
var va = r0.exports, jB, ti;
function Ac() {
  return ti || (ti = 1, jB = { A: { A: { 1: "F A B", 2: "L D E 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 257: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B", 289: "aC BD CD", 292: "8C" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 33: "J" }, E: { 1: "hB D E F A B C M N G K GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 33: "J DD gC", 129: "L ED FD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB RD SD UC 5C TD VC", 2: "F PD QD" }, G: { 1: "E UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 33: "gC" }, H: { 2: "rD" }, I: { 1: "aC J I tD uD vD 6C wD xD", 33: "sD" }, J: { 1: "D A" }, K: { 1: "B C H UC 5C VC", 2: "A" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 1: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 257: "BE" } }, B: 4, C: "CSS3 Border-radius (rounded corners)", D: !0 }), jB;
}
var OB, ri;
function Ec() {
  return ri || (ri = 1, OB = { A: { A: { 1: "F A B", 2: "L D E 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC", 33: "BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 33: "J hB L D E F" }, E: { 1: "L D E F A B C M N G K ED FD GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 33: "hB", 164: "J DD gC" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB RD SD UC 5C TD VC", 2: "F PD QD" }, G: { 1: "E VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 33: "UD 6C", 164: "gC" }, H: { 2: "rD" }, I: { 1: "J I vD 6C wD xD", 164: "aC sD tD uD" }, J: { 1: "A", 33: "D" }, K: { 1: "B C H UC 5C VC", 2: "A" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 1: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 4, C: "CSS3 Box-shadow", D: !0 }), OB;
}
var FB, Bi;
function Sc() {
  return Bi || (Bi = 1, FB = { A: { A: { 1: "A B", 2: "L D E F 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J BD CD", 33: "hB L D E F A B C M N G" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 33: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB" }, E: { 1: "F A B C M N G K HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "DD gC", 33: "L D E ED FD GD", 292: "J hB" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB VC", 2: "F B PD QD RD SD UC 5C TD", 33: "C G O P Q iB DB EB FB GB HB IB JB K KB LB" }, G: { 1: "ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 33: "E WD XD YD", 164: "gC UD 6C VD" }, H: { 2: "rD" }, I: { 1: "I", 33: "J vD 6C wD xD", 164: "aC sD tD uD" }, J: { 33: "D A" }, K: { 1: "H VC", 2: "A B C UC 5C" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 1: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 5, C: "CSS Animation", D: !0 }), FB;
}
var RB, si;
function Ic() {
  return si || (si = 1, RB = { A: { A: { 1: "A B", 2: "L D E F 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC BD CD", 33: "hB L D E F A B C M N G", 164: "J" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 33: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB" }, E: { 1: "D E F A B C M N G K FD GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 33: "L ED", 164: "J hB DD gC" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB VC", 2: "F PD QD", 33: "C", 164: "B RD SD UC 5C TD" }, G: { 1: "E XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 33: "WD", 164: "gC UD 6C VD" }, H: { 2: "rD" }, I: { 1: "I wD xD", 33: "aC J sD tD uD vD 6C" }, J: { 1: "A", 33: "D" }, K: { 1: "H VC", 33: "C", 164: "A B UC 5C" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 1: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 5, C: "CSS3 Transitions", D: !0 }), RB;
}
var MB, ii;
function jc() {
  return ii || (ii = 1, MB = { A: { A: { 2: "7C", 8: "L D E", 129: "A B", 161: "F" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 129: "C M N G O" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC", 33: "J hB L D E F A B C M N G BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 33: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB" }, E: { 1: "F A B C M N G K HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 33: "J hB L D E DD gC ED FD GD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB VC", 2: "F PD QD", 33: "B C G O P Q iB DB EB FB RD SD UC 5C TD" }, G: { 1: "ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 33: "E gC UD 6C VD WD XD YD" }, H: { 2: "rD" }, I: { 1: "I", 33: "aC J sD tD uD vD 6C wD xD" }, J: { 33: "D A" }, K: { 1: "B C H UC 5C VC", 2: "A" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 1: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 4, C: "CSS3 2D Transforms", D: !0 }), MB;
}
var PB, ni;
function Oc() {
  return ni || (ni = 1, PB = { A: { A: { 2: "L D E F 7C", 132: "A B" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F BD CD", 33: "A B C M N G" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B", 33: "C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB" }, E: { 1: "K jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "DD gC", 33: "J hB L D E ED FD GD", 257: "F A B C M N G HD hC UC VC ID JD KD iC" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 33: "G O P Q iB DB EB FB" }, G: { 1: "jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 33: "E gC UD 6C VD WD XD YD", 257: "ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC" }, H: { 2: "rD" }, I: { 1: "I", 2: "sD tD uD", 33: "aC J vD 6C wD xD" }, J: { 33: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 132: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 5, C: "CSS3 3D Transforms", D: !0 }), PB;
}
var GB, Ci;
function Fc() {
  return Ci || (Ci = 1, GB = { A: { A: { 1: "A B", 2: "L D E F 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC BD", 260: "O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB", 292: "J hB L D E F A B C M N G CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 33: "A B C M N G O P Q iB DB EB FB GB HB IB", 548: "J hB L D E F" }, E: { 1: "K jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "DD gC", 260: "D E F A B C M N G FD GD HD hC UC VC ID JD KD iC", 292: "L ED", 804: "J hB" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB VC", 2: "F B PD QD RD SD", 33: "C TD", 164: "UC 5C" }, G: { 1: "jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 260: "E XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC", 292: "VD WD", 804: "gC UD 6C" }, H: { 2: "rD" }, I: { 1: "I wD xD", 33: "J vD 6C", 548: "aC sD tD uD" }, J: { 1: "A", 548: "D" }, K: { 1: "H VC", 2: "A B", 33: "C", 164: "UC 5C" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 1: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 4, C: "CSS Gradients", D: !0 }), GB;
}
var LB, ai;
function Rc() {
  return ai || (ai = 1, LB = { A: { A: { 1: "E F A B", 8: "L D 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 33: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 33: "J hB L D E F" }, E: { 1: "L D E F A B C M N G K ED FD GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 33: "J hB DD gC" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB PD QD RD SD UC 5C TD VC", 2: "F" }, G: { 1: "E VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 33: "gC UD 6C" }, H: { 1: "rD" }, I: { 1: "J I vD 6C wD xD", 33: "aC sD tD uD" }, J: { 1: "A", 33: "D" }, K: { 1: "A B C H UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 1: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 5, C: "CSS3 Box-sizing", D: !0 }), LB;
}
var NB, oi;
function Mc() {
  return oi || (oi = 1, NB = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 1028: "M N G O P Q", 1346: "C" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC BD", 196: "mB", 516: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P", 33: "Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B" }, E: { 1: "A B C M N G K HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB DD gC ED", 33: "L D E F FD GD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 33: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB" }, G: { 1: "aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD", 33: "E WD XD YD ZD" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C", 33: "wD xD" }, J: { 2: "D", 33: "A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 33: "J yD zD" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 5, C: "CSS Filter Effects", D: !0 }), NB;
}
var HB, li;
function Pc() {
  return li || (li = 1, HB = { A: { A: { 2: "L D E F A B 7C" }, B: { 2: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 2: "0 1 2 3 4 5 6 7 8 9 8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD BD CD" }, D: { 2: "0 1 2 3 4 5 6 7 8 9 J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC" }, E: { 1: "A B C M N G K HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L D E DD gC ED FD GD", 33: "F" }, F: { 2: "0 1 2 3 4 5 6 7 8 9 F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB PD QD RD SD UC 5C TD VC" }, G: { 1: "bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "E gC UD 6C VD WD XD YD", 33: "ZD aD" }, H: { 2: "rD" }, I: { 2: "aC J I sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 2: "A B C H UC 5C VC" }, L: { 2: "I" }, M: { 2: "TC" }, N: { 2: "A B" }, O: { 2: "WC" }, P: { 2: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 2: "9D" }, R: { 2: "AE" }, S: { 2: "BE CE" } }, B: 5, C: "CSS filter() function", D: !0 }), HB;
}
var KB, ui;
function Gc() {
  return ui || (ui = 1, KB = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O", 257: "P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC BD CD", 578: "KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB", 194: "zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC" }, E: { 1: "K ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L D E DD gC ED FD GD", 33: "F A B C M N G HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB PD QD RD SD UC 5C TD VC", 194: "mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC" }, G: { 1: "ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "E gC UD 6C VD WD XD YD", 33: "ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB 4D 5D 6D 7D XC YC ZC 8D", 2: "J", 194: "yD zD 0D 1D 2D hC 3D" }, Q: { 2: "9D" }, R: { 1: "AE" }, S: { 2: "BE CE" } }, B: 7, C: "CSS Backdrop Filter", D: !0 }), KB;
}
var JB, fi;
function Lc() {
  return fi || (fi = 1, JB = { A: { A: { 2: "L D E F A B 7C" }, B: { 2: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 33: "0 1 2 3 4 5 6 7 8 9 J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 164: "8C aC BD CD" }, D: { 2: "0 1 2 3 4 5 6 7 8 9 J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC" }, E: { 2: "J hB L D E F A B C M N G K DD gC ED FD GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD" }, F: { 2: "0 1 2 3 4 5 6 7 8 9 F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB PD QD RD SD UC 5C TD VC" }, G: { 2: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C" }, H: { 2: "rD" }, I: { 2: "aC J I sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 2: "A B C H UC 5C VC" }, L: { 2: "I" }, M: { 33: "TC" }, N: { 2: "A B" }, O: { 2: "WC" }, P: { 2: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 2: "9D" }, R: { 2: "AE" }, S: { 33: "BE CE" } }, B: 5, C: "CSS element() function", D: !0 }), JB;
}
var TB, ci;
function Nc() {
  return ci || (ci = 1, TB = { A: { A: { 1: "A B", 2: "L D E F 7C" }, B: { 1: "C M N G O P Q", 516: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 132: "4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC", 164: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B BD CD", 516: "FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b", 1028: "0 1 2 3 4 5 6 7 8 9 c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD" }, D: { 420: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B", 516: "0 1 2 3 4 5 6 7 8 9 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC" }, E: { 1: "A B C M N G K hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 132: "F HD", 164: "D E GD", 420: "J hB L DD gC ED FD" }, F: { 1: "C UC 5C TD VC", 2: "F B PD QD RD SD", 420: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB", 516: "0 1 2 3 4 5 6 7 8 9 pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB" }, G: { 1: "bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 132: "ZD aD", 164: "E XD YD", 420: "gC UD 6C VD WD" }, H: { 1: "rD" }, I: { 420: "aC J sD tD uD vD 6C wD xD", 516: "I" }, J: { 420: "D A" }, K: { 1: "C UC 5C VC", 2: "A B", 516: "H" }, L: { 516: "I" }, M: { 1028: "TC" }, N: { 1: "A B" }, O: { 516: "WC" }, P: { 420: "J", 516: "DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 516: "9D" }, R: { 516: "AE" }, S: { 164: "BE CE" } }, B: 4, C: "CSS3 Multiple column layout", D: !0 }), TB;
}
var zB, Di;
function Hc() {
  return Di || (Di = 1, zB = { A: { A: { 2: "L D E F 7C", 33: "A B" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 33: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 33: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 33: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B" }, E: { 33: "J hB L D E F A B C M N G K DD gC ED FD GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 33: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB" }, G: { 33: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C" }, H: { 2: "rD" }, I: { 1: "I", 33: "aC J sD tD uD vD 6C wD xD" }, J: { 33: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 33: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 33: "J yD" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 33: "BE" } }, B: 5, C: "CSS user-select: none", D: !0 }), zB;
}
var qB, di;
function Kc() {
  return di || (di = 1, qB = { A: { A: { 2: "L D E F 7C", 1028: "B", 1316: "A" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 164: "8C aC J hB L D E F A B C M N G O P Q iB DB EB BD CD", 516: "FB GB HB IB JB K" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 33: "EB FB GB HB IB JB K KB", 164: "J hB L D E F A B C M N G O P Q iB DB" }, E: { 1: "F A B C M N G K HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 33: "D E FD GD", 164: "J hB L DD gC ED" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB VC", 2: "F B C PD QD RD SD UC 5C TD", 33: "G O" }, G: { 1: "ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 33: "E XD YD", 164: "gC UD 6C VD WD" }, H: { 1: "rD" }, I: { 1: "I wD xD", 164: "aC J sD tD uD vD 6C" }, J: { 1: "A", 164: "D" }, K: { 1: "H VC", 2: "A B C UC 5C" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 1: "B", 292: "A" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 4, C: "CSS Flexible Box Layout Module", D: !0 }), qB;
}
var UB, pi;
function Jc() {
  return pi || (pi = 1, UB = { A: { A: { 2: "L D E 7C", 260: "F", 516: "A B" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC BD CD", 33: "J hB L D E F A B C M N G" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q", 33: "iB DB EB FB GB HB IB" }, E: { 1: "D E F A B C M N G K FD GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB DD gC ED", 33: "L" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC" }, G: { 1: "E XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD", 33: "WD" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C", 132: "wD xD" }, J: { 1: "A", 2: "D" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 1: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 4, C: "calc() as CSS unit value", D: !0 }), UB;
}
var VB, hi;
function Tc() {
  return hi || (hi = 1, VB = { A: { A: { 1: "F A B", 2: "L D E 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC BD", 36: "CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 516: "J hB L D E F A B C M N" }, E: { 1: "D E F A B C M N G K GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 772: "J hB L DD gC ED FD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB RD SD UC 5C TD VC", 2: "F PD", 36: "QD" }, G: { 1: "E XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 4: "gC UD 6C WD", 516: "VD" }, H: { 132: "rD" }, I: { 1: "I wD xD", 36: "sD", 516: "aC J vD 6C", 548: "tD uD" }, J: { 1: "D A" }, K: { 1: "A B C H UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 1: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 4, C: "CSS3 Background-image options", D: !0 }), VB;
}
var WB, mi;
function zc() {
  return mi || (mi = 1, WB = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "G O P Q", 33: "C M N", 129: "4 5 6 7 8 9 AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 161: "0 1 2 3 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B BD CD" }, D: { 129: "4 5 6 7 8 9 AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 161: "0 1 2 3 J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z" }, E: { 2: "DD", 129: "K WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 388: "hB L D E F A B C M N G ED FD GD HD hC UC VC ID JD KD iC jC", 420: "J gC" }, F: { 2: "F B C PD QD RD SD UC 5C TD VC", 129: "0 1 2 3 4 5 6 7 8 9 q r s t u v w x y z AB BB CB", 161: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p" }, G: { 129: "WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 388: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC" }, H: { 2: "rD" }, I: { 16: "aC sD tD uD", 129: "I", 161: "J vD 6C wD xD" }, J: { 161: "D A" }, K: { 16: "A B C UC 5C VC", 129: "H" }, L: { 129: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 161: "WC" }, P: { 1: "IB JB K KB LB MB", 161: "J DB EB FB GB HB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 161: "9D" }, R: { 161: "AE" }, S: { 1: "BE CE" } }, B: 7, C: "Background-clip: text", D: !0 }), WB;
}
var QB, bi;
function qc() {
  return bi || (bi = 1, QB = { A: { A: { 1: "A B", 2: "L D E F 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC BD CD", 33: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB", 164: "J hB L D E F A B C M N" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G", 33: "EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB", 292: "O P Q iB DB" }, E: { 1: "A B C M N G K HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "D E F DD gC FD GD", 4: "J hB L ED" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 33: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB" }, G: { 1: "aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "E XD YD ZD", 4: "gC UD 6C VD WD" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C", 33: "wD xD" }, J: { 2: "D", 33: "A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 33: "J" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 2, C: "CSS font-feature-settings", D: !0 }), QB;
}
var YB, gi;
function Uc() {
  return gi || (gi = 1, YB = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB BD CD", 194: "HB IB JB K KB LB MB jB kB lB" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB", 33: "LB MB jB kB" }, E: { 1: "A B C M N G K HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L DD gC ED FD", 33: "D E F GD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G PD QD RD SD UC 5C TD VC", 33: "O P Q iB" }, G: { 1: "fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD WD XD", 33: "E YD ZD aD bD cD dD eD" }, H: { 2: "rD" }, I: { 1: "I xD", 2: "aC J sD tD uD vD 6C", 33: "wD" }, J: { 2: "D", 33: "A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 4, C: "CSS3 font-kerning", D: !0 }), YB;
}
var XB, vi;
function Vc() {
  return vi || (vi = 1, XB = { A: { A: { 1: "B", 2: "L D E F A 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 129: "C M" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC", 260: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B", 804: "J hB L D E F A B C M N BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 260: "3B 4B 5B 6B 7B", 388: "MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B", 1412: "G O P Q iB DB EB FB GB HB IB JB K KB LB", 1956: "J hB L D E F A B C M N" }, E: { 1: "K jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 129: "A B C M N G HD hC UC VC ID JD KD iC", 1412: "L D E F FD GD", 1956: "J hB DD gC ED" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F PD QD", 260: "qB rB sB tB uB", 388: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB", 1796: "RD SD", 1828: "B C UC 5C TD VC" }, G: { 1: "jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 129: "aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC", 1412: "E WD XD YD ZD", 1956: "gC UD 6C VD" }, H: { 1828: "rD" }, I: { 1: "I", 388: "wD xD", 1956: "aC J sD tD uD vD 6C" }, J: { 1412: "A", 1924: "D" }, K: { 1: "H", 2: "A", 1828: "B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 1: "B", 2: "A" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 260: "yD zD", 388: "J" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 260: "BE" } }, B: 4, C: "CSS3 Border images", D: !0 }), XB;
}
var ZB, wi;
function Wc() {
  return wi || (wi = 1, ZB = { A: { A: { 1: "F A B", 2: "L D E 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 33: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC" }, E: { 1: "J hB L D E F A B C M N G K DD gC ED FD GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB PD QD RD SD UC 5C TD VC", 2: "F" }, G: { 2: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C" }, H: { 2: "rD" }, I: { 1: "I wD xD", 2: "aC J sD tD uD vD 6C" }, J: { 1: "A", 2: "D" }, K: { 1: "C H 5C VC", 16: "A B UC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 1: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 33: "BE" } }, B: 5, C: "::selection CSS pseudo-element", D: !0 }), ZB;
}
var $B, yi;
function Qc() {
  return yi || (yi = 1, $B = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 36: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 33: "iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B", 130: "8C aC J hB L D E F A B C M N G O P Q BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 36: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B" }, E: { 1: "B C M N G K hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J DD gC", 36: "hB L D E F A ED FD GD HD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 36: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB" }, G: { 1: "cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD", 36: "E 6C VD WD XD YD ZD aD bD" }, H: { 2: "rD" }, I: { 1: "I", 36: "aC J sD tD uD vD 6C wD xD" }, J: { 36: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 36: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 36: "J yD zD" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 33: "BE" } }, B: 5, C: "::placeholder CSS pseudo-element", D: !0 }), $B;
}
var _B, xi;
function Yc() {
  return xi || (xi = 1, _B = { A: { A: { 2: "L D E F 7C", 292: "A B" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC BD CD", 164: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB" }, E: { 1: "F A B C M N G K HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L D E DD gC ED FD GD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB PD QD RD SD UC 5C TD VC" }, G: { 1: "ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "E gC UD 6C VD WD XD YD" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "J" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 164: "BE" } }, B: 5, C: ":placeholder-shown CSS pseudo-class", D: !0 }), _B;
}
var es, ki;
function Xc() {
  return ki || (ki = 1, es = { A: { A: { 2: "L D E F 7C", 33: "A B" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 33: "C M N G O P Q", 132: "R H S T U V W X", 260: "Y Z a b c d e f g h i j k l m n o" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB BD CD", 33: "L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B", 132: "7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X" }, E: { 1: "K YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB DD gC", 33: "L D E F A B C M N G ED FD GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB PD QD RD SD UC 5C TD VC", 132: "uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a" }, G: { 1: "YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD", 33: "E 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "J", 132: "yD" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 4, C: "CSS Hyphenation", D: !0 }), es;
}
var ts, Ai;
function Zc() {
  return Ai || (Ai = 1, ts = { A: { A: { 2: "L D E F A 7C", 548: "B" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 516: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F BD CD", 676: "A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB", 1700: "zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N", 676: "G O P Q iB", 804: "DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC" }, E: { 1: "K nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB DD gC", 548: "jC WC LD XC kC lC mC", 676: "ED", 804: "L D E F A B C M N G FD GD HD hC UC VC ID JD KD iC" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB VC", 2: "F B C PD QD RD SD UC 5C TD", 804: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC" }, G: { 2: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD", 2052: "fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C" }, H: { 2: "rD" }, I: { 2: "aC J I sD tD uD vD 6C wD xD" }, J: { 2: "D", 292: "A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A", 548: "B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB hC 3D 4D 5D 6D 7D XC YC ZC 8D", 804: "J yD zD 0D 1D 2D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 1, C: "Fullscreen API", D: !0 }), ts;
}
var rs, Ei;
function $c() {
  return Ei || (Ei = 1, rs = { A: { D: { 1: "0 1 2 3 4 5 6 7 8 9 pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB", 33: "kB lB mB nB oB" }, L: { 1: "I" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 33: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB BD CD" }, M: { 1: "TC" }, A: { 2: "L D E F A 7C", 33: "B" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q PD QD RD SD UC 5C TD VC", 33: "iB DB EB FB GB" }, K: { 1: "H", 2: "A B C UC 5C VC" }, E: { 1: "K jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "J hB L D E F A B C M N G DD gC ED FD GD HD hC UC VC ID JD KD iC OD" }, G: { 1: "jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C", 33: "wD xD" } }, B: 6, C: "CSS ::backdrop pseudo-element", D: void 0 }), rs;
}
var Bs, Si;
function _c() {
  return Si || (Si = 1, Bs = { A: { D: { 1: "0 1 2 3 4 5 6 7 8 9 Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 33: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y" }, L: { 1: "I" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 33: "C M N G O P Q R H S T U V W X Y" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S BD CD" }, M: { 1: "TC" }, A: { 2: "L D E F 7C", 33: "A B" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 33: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC" }, K: { 1: "H", 2: "A B C UC 5C VC" }, E: { 1: "G K JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "OD", 33: "J hB L D E F A B C M N DD gC ED FD GD HD hC UC VC ID" }, G: { 1: "mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 33: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB 7D XC YC ZC 8D", 33: "J yD zD 0D 1D 2D hC 3D 4D 5D 6D" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C", 33: "wD xD" } }, B: 6, C: "::file-selector-button CSS pseudo-element", D: void 0 }), Bs;
}
var ss, Ii;
function eD() {
  return Ii || (Ii = 1, ss = { A: { D: { 1: "0 1 2 3 4 5 6 7 8 9 u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 33: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t" }, L: { 1: "I" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q", 33: "R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t" }, C: { 2: "0 1 2 3 4 5 6 7 8 9 8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD BD CD" }, M: { 2: "TC" }, A: { 2: "L D E F A B 7C" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 33: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f" }, K: { 1: "H", 2: "A B C UC 5C VC" }, E: { 1: "G K KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "OD", 33: "J hB L D E F A B C M N DD gC ED FD GD HD hC UC VC ID JD" }, G: { 1: "nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 33: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD" }, P: { 1: "EB FB GB HB IB JB K KB LB MB", 33: "J DB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C", 33: "wD xD" } }, B: 6, C: ":autofill CSS pseudo-class", D: void 0 }), ss;
}
var is, ji;
function tD() {
  return ji || (ji = 1, is = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC BD CD", 33: "5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a", 164: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB", 132: "EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB" }, E: { 1: "N G K ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L DD gC ED", 132: "D E F A B C M FD GD HD hC UC VC" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F PD QD RD", 132: "G O P Q iB DB EB FB GB HB IB JB K KB", 164: "B C SD UC 5C TD VC" }, G: { 1: "kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD WD", 132: "E XD YD ZD aD bD cD dD eD fD gD hD iD jD" }, H: { 164: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C", 132: "wD xD" }, J: { 132: "D A" }, K: { 1: "H", 2: "A", 164: "B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 164: "BE CE" } }, B: 4, C: "CSS3 tab-size", D: !0 }), is;
}
var ns, Oi;
function rD() {
  return Oi || (Oi = 1, ns = { A: { A: { 2: "L D E F A B 7C" }, B: { 2: "C M N G O P Q", 1025: "0 1 2 3 4 5 6 7 8 9 e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 1537: "R H S T U V W X Y Z a b c d" }, C: { 2: "8C", 932: "aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC BD CD", 2308: "0 1 2 3 4 5 6 7 8 9 GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD" }, D: { 2: "J hB L D E F A B C M N G O P Q iB DB EB", 545: "FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB", 1025: "0 1 2 3 4 5 6 7 8 9 e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 1537: "yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d" }, E: { 1: "K XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L DD gC ED", 516: "B C M N G UC VC ID JD KD iC jC WC LD", 548: "F A HD hC", 676: "D E FD GD" }, F: { 2: "F B C PD QD RD SD UC 5C TD VC", 513: "mB", 545: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB", 1025: "0 1 2 3 4 5 6 7 8 9 f g h i j k l m n o p q r s t u v w x y z AB BB CB", 1537: "lB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e" }, G: { 1: "XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD WD", 516: "lD mD nD iC jC WC oD", 548: "ZD aD bD cD dD eD fD gD hD iD jD kD", 676: "E XD YD" }, H: { 2: "rD" }, I: { 2: "aC J sD tD uD vD 6C", 545: "wD xD", 1025: "I" }, J: { 2: "D", 545: "A" }, K: { 2: "A B C UC 5C VC", 1025: "H" }, L: { 1025: "I" }, M: { 2308: "TC" }, N: { 2: "A B" }, O: { 1537: "WC" }, P: { 545: "J", 1025: "DB EB FB GB HB IB JB K KB LB MB YC ZC 8D", 1537: "yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC" }, Q: { 1537: "9D" }, R: { 1537: "AE" }, S: { 932: "BE", 2308: "CE" } }, B: 5, C: "Intrinsic & Extrinsic Sizing", D: !0 }), ns;
}
var Cs, Fi;
function BD() {
  return Fi || (Fi = 1, Cs = { A: { D: { 1: "WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB", 33: "0 1 2 3 4 5 6 7 8 9 FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB" }, L: { 1: "I" }, B: { 1: "WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q", 33: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB" }, C: { 2: "0 1 2 3 4 5 6 7 8 9 8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB BD CD", 33: "eB fB gB I eC TC fC 9C AD" }, M: { 33: "TC" }, A: { 2: "L D E F A B 7C" }, F: { 1: "6 7 8 9 AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 33: "0 1 2 3 4 5 G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z" }, K: { 2: "A B C UC 5C VC", 33: "H" }, E: { 2: "J hB L DD gC ED FD OD", 33: "D E F A B C M N G K GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C" }, G: { 2: "gC UD 6C VD WD", 33: "E XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C" }, P: { 2: "J", 33: "DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C", 33: "wD xD" } }, B: 6, C: "width: stretch property", D: void 0 }), Cs;
}
var as, Ri;
function sD() {
  return Ri || (Ri = 1, as = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 33: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 33: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB" }, E: { 1: "F A B C M N G K HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 33: "J hB L D E DD gC ED FD GD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 C HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB TD VC", 2: "F B PD QD RD SD UC 5C", 33: "G O P Q iB DB EB FB GB" }, G: { 2: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" }, J: { 33: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 2: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 2: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 2: "BE CE" } }, B: 2, C: "CSS3 Cursors: zoom-in & zoom-out", D: !0 }), as;
}
var os, Mi;
function iD() {
  return Mi || (Mi = 1, os = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 33: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 33: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC" }, E: { 1: "B C M N G K UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 33: "J hB L D E F A DD gC ED FD GD HD hC" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 C 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB TD VC", 2: "F B PD QD RD SD UC 5C", 33: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B" }, G: { 2: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" }, J: { 33: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 2: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 2: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 2: "BE CE" } }, B: 2, C: "CSS grab & grabbing cursors", D: !0 }), os;
}
var ls, Pi;
function nD() {
  return Pi || (Pi = 1, ls = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G", 1028: "R H S T U V W X Y Z a", 4100: "O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB BD CD", 194: "JB K KB LB MB jB", 516: "kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B", 322: "GB HB IB JB K KB LB MB jB kB lB mB nB oB 4B 5B 6B 7B", 1028: "8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a" }, E: { 1: "M N G K ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L DD gC ED", 33: "E F A B C GD HD hC UC VC", 2084: "D FD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB PD QD RD SD UC 5C TD VC", 322: "rB sB tB", 1028: "uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC" }, G: { 1: "hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD", 33: "E YD ZD aD bD cD dD eD fD gD", 2084: "WD XD" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "J yD" }, Q: { 1028: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 516: "BE" } }, B: 5, C: "CSS position:sticky", D: !0 }), ls;
}
var us, Gi;
function CD() {
  return Gi || (Gi = 1, us = { A: { A: { 1: "B", 2: "L D E F 7C", 164: "A" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB BD CD", 8: "L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB", 328: "tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB", 8: "FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B", 584: "4B 5B 6B" }, E: { 1: "M N G K ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L DD gC ED", 8: "D E F A B C FD GD HD hC UC", 1096: "VC" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 8: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB", 584: "rB sB tB" }, G: { 1: "iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 8: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD", 6148: "hD" }, H: { 2: "rD" }, I: { 1: "I", 8: "aC J sD tD uD vD 6C wD xD" }, J: { 8: "D A" }, K: { 1: "H", 2: "A", 8: "B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 1: "B", 36: "A" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "yD", 8: "J" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 328: "BE" } }, B: 2, C: "Pointer events", D: !0 }), us;
}
var fs, Li;
function aD() {
  return Li || (Li = 1, fs = { A: { A: { 2: "L D E F A B 7C" }, B: { 2: "C M N G O P Q", 2052: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 2: "8C aC J hB BD CD", 1028: "0 1 2 3 4 5 6 7 8 9 oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 1060: "L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB" }, D: { 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB", 226: "JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B", 2052: "0 1 2 3 4 5 6 7 8 9 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC" }, E: { 2: "J hB L D DD gC ED FD", 772: "M N G K VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 804: "E F A B C HD hC UC", 1316: "GD" }, F: { 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB PD QD RD SD UC 5C TD VC", 226: "nB oB pB qB rB sB tB uB vB", 2052: "0 1 2 3 4 5 6 7 8 9 wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB" }, G: { 2: "gC UD 6C VD WD XD", 292: "E YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 2: "A B C UC 5C VC", 2052: "H" }, L: { 2052: "I" }, M: { 1028: "TC" }, N: { 2: "A B" }, O: { 2052: "WC" }, P: { 2: "J yD zD", 2052: "DB EB FB GB HB IB JB K KB LB MB 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 2052: "9D" }, R: { 2052: "AE" }, S: { 1028: "BE CE" } }, B: 4, C: "text-decoration styling", D: !0 }), fs;
}
var cs, Ni;
function oD() {
  return Ni || (Ni = 1, cs = { A: { D: { 1: "0 1 2 3 4 5 6 7 8 9 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B" }, L: { 1: "I" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB BD CD" }, M: { 1: "TC" }, A: { 2: "L D E F A B 7C" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB PD QD RD SD UC 5C TD VC" }, K: { 1: "H", 2: "A B C UC 5C VC" }, E: { 1: "K 1C 2C 3C 4C", 2: "J hB L D DD gC ED FD GD OD", 33: "E F A B C M N G HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C" }, G: { 1: "1C 2C 3C 4C", 2: "gC UD 6C VD WD XD", 33: "E YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "J yD zD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" } }, B: 6, C: "text-decoration shorthand property", D: void 0 }), cs;
}
var Ds, Hi;
function lD() {
  return Hi || (Hi = 1, Ds = { A: { D: { 1: "0 1 2 3 4 5 6 7 8 9 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B" }, L: { 1: "I" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB BD CD", 33: "L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB" }, M: { 1: "TC" }, A: { 2: "L D E F A B 7C" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB PD QD RD SD UC 5C TD VC" }, K: { 1: "H", 2: "A B C UC 5C VC" }, E: { 1: "M N G K VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "J hB L D DD gC ED FD GD OD", 33: "E F A B C HD hC UC" }, G: { 1: "gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD WD XD", 33: "E YD ZD aD bD cD dD eD fD" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "J yD zD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" } }, B: 6, C: "text-decoration-color property", D: void 0 }), Ds;
}
var ds, Ki;
function uD() {
  return Ki || (Ki = 1, ds = { A: { D: { 1: "0 1 2 3 4 5 6 7 8 9 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B" }, L: { 1: "I" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB BD CD", 33: "L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB" }, M: { 1: "TC" }, A: { 2: "L D E F A B 7C" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB PD QD RD SD UC 5C TD VC" }, K: { 1: "H", 2: "A B C UC 5C VC" }, E: { 1: "M N G K VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "J hB L D DD gC ED FD GD OD", 33: "E F A B C HD hC UC" }, G: { 1: "gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD WD XD", 33: "E YD ZD aD bD cD dD eD fD" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "J yD zD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" } }, B: 6, C: "text-decoration-line property", D: void 0 }), ds;
}
var ps, Ji;
function fD() {
  return Ji || (Ji = 1, ps = { A: { D: { 1: "0 1 2 3 4 5 6 7 8 9 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B" }, L: { 1: "I" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB BD CD", 33: "L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB" }, M: { 1: "TC" }, A: { 2: "L D E F A B 7C" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB PD QD RD SD UC 5C TD VC" }, K: { 1: "H", 2: "A B C UC 5C VC" }, E: { 1: "M N G K VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "J hB L D DD gC ED FD GD OD", 33: "E F A B C HD hC UC" }, G: { 1: "gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD WD XD", 33: "E YD ZD aD bD cD dD eD fD" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "J yD zD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" } }, B: 6, C: "text-decoration-style property", D: void 0 }), ps;
}
var hs, Ti;
function cD() {
  return Ti || (Ti = 1, hs = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 33: "C M N G O P Q" }, C: { 2: "0 1 2 3 4 5 6 7 8 9 8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B", 258: "JB" }, E: { 2: "J hB L D E F A B C M N G K DD gC FD GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 258: "ED" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 vB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB wB PD QD RD SD UC 5C TD VC" }, G: { 2: "gC UD 6C", 33: "E VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 33: "TC" }, N: { 161: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "J" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 2: "BE CE" } }, B: 7, C: "CSS text-size-adjust", D: !0 }), hs;
}
var ms, zi;
function DD() {
  return zi || (zi = 1, ms = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "4 5 6 7 8 9 AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O", 164: "0 1 2 3 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z", 3138: "P", 12292: "Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC", 260: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B BD CD" }, D: { 1: "4 5 6 7 8 9 AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 164: "0 1 2 3 J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z" }, E: { 1: "K jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "DD gC", 164: "J hB L D E F A B C M N G ED FD GD HD hC UC VC ID JD KD iC" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 164: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p" }, G: { 1: "jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 164: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC" }, H: { 2: "rD" }, I: { 1: "I", 164: "wD xD", 676: "aC J sD tD uD vD 6C" }, J: { 164: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 164: "WC" }, P: { 1: "IB JB K KB LB MB", 164: "J DB EB FB GB HB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 164: "9D" }, R: { 164: "AE" }, S: { 1: "CE", 260: "BE" } }, B: 4, C: "CSS Masks", D: !0 }), ms;
}
var bs, qi;
function dD() {
  return qi || (qi = 1, bs = { A: { A: { 2: "L D E F A B 7C" }, B: { 2: "C M N G O P", 260: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 3138: "Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC", 132: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB BD CD", 644: "zB 0B 1B 2B 3B 4B 5B" }, D: { 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB", 260: "0 1 2 3 4 5 6 7 8 9 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 292: "HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B" }, E: { 2: "J hB L DD gC ED FD", 260: "N G K ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 292: "D E F A B C M GD HD hC UC VC" }, F: { 2: "F B C PD QD RD SD UC 5C TD VC", 260: "0 1 2 3 4 5 6 7 8 9 uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 292: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB" }, G: { 2: "gC UD 6C VD WD", 260: "hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 292: "E XD YD ZD aD bD cD dD eD fD gD" }, H: { 2: "rD" }, I: { 2: "aC J sD tD uD vD 6C", 260: "I", 292: "wD xD" }, J: { 2: "D A" }, K: { 2: "A B C UC 5C VC", 260: "H" }, L: { 260: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 260: "WC" }, P: { 260: "DB EB FB GB HB IB JB K KB LB MB zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 292: "J yD" }, Q: { 260: "9D" }, R: { 260: "AE" }, S: { 1: "CE", 644: "BE" } }, B: 4, C: "CSS clip-path property (for HTML)", D: !0 }), bs;
}
var gs, Ui;
function pD() {
  return Ui || (Ui = 1, gs = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q", 164: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB BD CD" }, D: { 1: "PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB", 164: "0 1 2 3 4 5 6 7 8 9 FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB" }, E: { 2: "J hB L DD gC ED", 164: "D E F A B C M N G K FD GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 AB BB CB", 2: "F PD QD RD SD", 129: "B C UC 5C TD VC", 164: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z" }, G: { 2: "gC UD 6C VD WD", 164: "E XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C" }, H: { 132: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C", 164: "wD xD" }, J: { 2: "D", 164: "A" }, K: { 2: "A", 129: "B C UC 5C VC", 164: "H" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 164: "WC" }, P: { 164: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 164: "9D" }, R: { 164: "AE" }, S: { 1: "BE CE" } }, B: 4, C: "CSS box-decoration-break", D: !0 }), gs;
}
var vs, Vi;
function hD() {
  return Vi || (Vi = 1, vs = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G", 260: "O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB" }, E: { 1: "A B C M N G K hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L D DD gC ED FD", 132: "E F GD HD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F G O P Q PD QD RD", 33: "B C SD UC 5C TD VC" }, G: { 1: "bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD WD XD", 132: "E YD ZD aD" }, H: { 33: "rD" }, I: { 1: "I xD", 2: "aC J sD tD uD vD 6C wD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A", 33: "B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 4, C: "CSS3 object-fit/object-position", D: !0 }), vs;
}
var ws, Wi;
function mD() {
  return Wi || (Wi = 1, ws = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B BD CD", 322: "3B 4B 5B 6B 7B 8B 9B AC bC BC cC" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB", 194: "mB nB oB" }, E: { 1: "B C M N G K hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L D DD gC ED FD", 33: "E F A GD HD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB PD QD RD SD UC 5C TD VC" }, G: { 1: "cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD WD XD", 33: "E YD ZD aD bD" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 2: "BE" } }, B: 4, C: "CSS Shapes Level 1", D: !0 }), ws;
}
var ys, Qi;
function bD() {
  return Qi || (Qi = 1, ys = { A: { A: { 1: "L D E F A B", 2: "7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 8: "8C aC J hB L BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC" }, E: { 1: "J hB L D E F A B C M N G K DD gC ED FD GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB UC 5C TD VC", 33: "F PD QD RD SD" }, G: { 1: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C" }, H: { 1: "rD" }, I: { 1: "aC J I sD tD uD vD 6C wD xD" }, J: { 1: "D A" }, K: { 1: "H VC", 33: "A B C UC 5C" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 1: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 2, C: "CSS3 Text-overflow", D: !0 }), ys;
}
var xs, Yi;
function gD() {
  return Yi || (Yi = 1, xs = { A: { A: { 2: "L D E F 7C", 164: "A B" }, B: { 66: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 164: "C M N G O P Q" }, C: { 2: "0 1 2 3 4 5 6 7 8 9 8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD BD CD" }, D: { 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB", 66: "0 1 2 3 4 5 6 7 8 9 LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC" }, E: { 2: "J hB L D E F A B C M N G K DD gC ED FD GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD" }, F: { 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB PD QD RD SD UC 5C TD VC", 66: "0 1 2 3 4 5 6 7 8 9 sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB" }, G: { 2: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C" }, H: { 292: "rD" }, I: { 2: "aC J I sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 2: "A H", 292: "B C UC 5C VC" }, L: { 2: "I" }, M: { 2: "TC" }, N: { 164: "A B" }, O: { 2: "WC" }, P: { 2: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 66: "9D" }, R: { 2: "AE" }, S: { 2: "BE CE" } }, B: 5, C: "CSS Device Adaptation", D: !0 }), xs;
}
var ks, Xi;
function vD() {
  return Xi || (Xi = 1, ks = { A: { A: { 2: "L D E 7C", 132: "F A B" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 1028: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC", 260: "J hB L D E F A B C M N G BD CD", 1028: "O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 548: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB", 1028: "LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC" }, E: { 1: "K XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "DD gC", 548: "J hB L D E F A B C M N G ED FD GD HD hC UC VC ID JD KD iC jC WC LD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB VC", 2: "F", 548: "B C PD QD RD SD UC 5C TD", 1028: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B" }, G: { 1: "XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 16: "gC", 548: "E UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD" }, H: { 132: "rD" }, I: { 1: "I", 16: "sD tD", 548: "aC J uD vD 6C", 1028: "wD xD" }, J: { 548: "D A" }, K: { 1: "H VC", 548: "A B C UC 5C" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 132: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB hC 3D 4D 5D 6D 7D XC YC ZC 8D", 1028: "J yD zD 0D 1D 2D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 4, C: "Media Queries: resolution feature", D: !0 }), ks;
}
var As, Zi;
function wD() {
  return Zi || (Zi = 1, As = { A: { A: { 132: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 4: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B BD CD", 33: "C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB", 322: "nB oB pB qB rB sB tB uB vB wB xB yB" }, E: { 1: "K XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L D E F A B C M N G DD gC ED FD GD HD hC UC VC ID JD KD iC jC WC LD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB PD QD RD SD UC 5C TD VC", 578: "FB GB HB IB JB K KB LB MB jB kB lB" }, G: { 1: "XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 132: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "J" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 33: "BE" } }, B: 4, C: "CSS3 text-align-last", D: !0 }), As;
}
var Es, $i;
function yD() {
  return $i || ($i = 1, Es = { A: { A: { 2: "L 7C", 2340: "D E F A B" }, B: { 2: "C M N G O P Q", 1025: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC BD", 513: "FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c", 545: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC CD" }, D: { 1: "gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB", 1025: "0 1 2 3 4 5 6 7 8 9 tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB" }, E: { 1: "A B C M N G K hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB DD gC ED", 164: "L", 4644: "D E F FD GD HD" }, F: { 2: "F B G O P Q iB DB EB FB GB HB IB JB K PD QD RD SD UC 5C", 545: "C TD VC", 1025: "0 1 2 3 4 5 6 7 8 9 KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB" }, G: { 1: "bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C", 4260: "VD WD", 4644: "E XD YD ZD aD" }, H: { 2: "rD" }, I: { 2: "aC J sD tD uD vD 6C wD xD", 1025: "I" }, J: { 2: "D", 4260: "A" }, K: { 2: "A B UC 5C", 545: "C VC", 1025: "H" }, L: { 1025: "I" }, M: { 1: "TC" }, N: { 2340: "A B" }, O: { 1025: "WC" }, P: { 1025: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1025: "9D" }, R: { 1025: "AE" }, S: { 1: "CE", 4097: "BE" } }, B: 4, C: "Crisp edges/pixelated images", D: !0 }), Es;
}
var Ss, _i;
function xD() {
  return _i || (_i = 1, Ss = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q", 1028: "X Y", 1540: "R H S T U V W" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C", 164: "aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB BD CD", 1540: "tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 292: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC", 1028: "X Y", 1540: "JC KC LC MC NC OC PC QC RC SC R H S T U V W" }, E: { 1: "G K KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 292: "J hB L D E F A B C DD gC ED FD GD HD hC UC", 1540: "M N VC ID", 3076: "JD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 292: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B", 1028: "OC PC", 1540: "8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC" }, G: { 1: "nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 292: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD", 1540: "gD hD iD jD kD lD", 3076: "mD" }, H: { 2: "rD" }, I: { 1: "I", 292: "aC J sD tD uD vD 6C wD xD" }, J: { 292: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB 7D XC YC ZC 8D", 292: "J yD zD 0D 1D 2D", 1540: "hC 3D 4D 5D 6D" }, Q: { 1540: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 1540: "BE" } }, B: 5, C: "CSS Logical Properties", D: !0 }), Ss;
}
var Is, en;
function kD() {
  return en || (en = 1, Is = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 33: "T", 164: "R H S", 388: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 164: "nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R", 676: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 33: "T", 164: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S" }, E: { 1: "K jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 164: "J hB L D E F A B C M N G DD gC ED FD GD HD hC UC VC ID JD KD iC" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 33: "KC LC MC", 164: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC" }, G: { 1: "jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 164: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC" }, H: { 2: "rD" }, I: { 1: "I", 164: "aC J sD tD uD vD 6C wD xD" }, J: { 164: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A", 388: "B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB 6D 7D XC YC ZC 8D", 164: "J yD zD 0D 1D 2D hC 3D 4D 5D" }, Q: { 164: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 164: "BE" } }, B: 5, C: "CSS Appearance", D: !0 }), Is;
}
var js, tn;
function AD() {
  return tn || (tn = 1, js = { A: { A: { 2: "L D E F 7C", 6308: "A", 6436: "B" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 6436: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB BD CD", 2052: "rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC", 8258: "GC HC IC" }, E: { 1: "B C M N G K UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L D E DD gC ED FD GD", 3108: "F A HD hC" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B PD QD RD SD UC 5C TD VC", 8258: "6B 7B 8B 9B AC BC CC DC" }, G: { 1: "dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "E gC UD 6C VD WD XD YD", 3108: "ZD aD bD cD" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "J yD zD 0D 1D 2D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 2052: "BE" } }, B: 4, C: "CSS Scroll Snap", D: !0 }), js;
}
var Os, rn;
function ED() {
  return rn || (rn = 1, Os = { A: { A: { 2: "L D E F 7C", 420: "A B" }, B: { 2: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 420: "C M N G O P Q" }, C: { 2: "0 1 2 3 4 5 6 7 8 9 8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD BD CD" }, D: { 2: "0 1 2 3 4 5 6 7 8 9 J hB L D E F A B C M N nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 36: "G O P Q", 66: "iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB" }, E: { 2: "J hB L C M N G K DD gC ED UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 33: "D E F A B FD GD HD hC" }, F: { 2: "0 1 2 3 4 5 6 7 8 9 F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB PD QD RD SD UC 5C TD VC" }, G: { 2: "gC UD 6C VD WD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 33: "E XD YD ZD aD bD cD dD" }, H: { 2: "rD" }, I: { 2: "aC J I sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 2: "A B C H UC 5C VC" }, L: { 2: "I" }, M: { 2: "TC" }, N: { 420: "A B" }, O: { 2: "WC" }, P: { 2: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 2: "9D" }, R: { 2: "AE" }, S: { 2: "BE CE" } }, B: 5, C: "CSS Regions", D: !0 }), Os;
}
var Fs, Bn;
function SD() {
  return Bn || (Bn = 1, Fs = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q", 164: "R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w", 2049: "x" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V BD CD", 66: "W X", 2305: "Z a b c d e f g h i j k l m n o p q r s t u v w", 2820: "Y" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB", 164: "EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w", 2049: "x" }, E: { 1: "K YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB DD gC ED", 132: "A B C M hC UC VC ID", 164: "L D E F FD GD HD", 1540: "N G JD KD iC jC WC LD XC kC lC mC nC oC MD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 164: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i", 2049: "j" }, G: { 1: "YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD", 132: "bD cD dD eD fD gD hD iD jD kD", 164: "E WD XD YD ZD aD", 1540: "lD mD nD iC jC WC oD XC kC lC mC nC oC pD" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C", 164: "wD xD" }, J: { 2: "D", 164: "A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 164: "WC" }, P: { 1: "GB HB IB JB K KB LB MB", 164: "J DB EB FB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 164: "9D" }, R: { 164: "AE" }, S: { 2: "BE CE" } }, B: 5, C: "CSS image-set", D: !0 }), Fs;
}
var Rs, sn;
function ID() {
  return sn || (sn = 1, Rs = { A: { A: { 132: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB BD CD", 322: "oB pB qB rB sB" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L", 16: "D", 33: "E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB" }, E: { 1: "B C M N G K UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J DD gC", 16: "hB", 33: "L D E F A ED FD GD HD hC" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 33: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB" }, G: { 1: "dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 16: "gC UD 6C", 33: "E VD WD XD YD ZD aD bD cD" }, H: { 2: "rD" }, I: { 1: "I", 2: "sD tD uD", 33: "aC J vD 6C wD xD" }, J: { 33: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 36: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 33: "J" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 2, C: "CSS writing-mode property", D: !0 }), Rs;
}
var Ms, nn;
function jD() {
  return nn || (nn = 1, Ms = { A: { A: { 2: "L D E F A B 7C" }, B: { 2: "C M N G O P Q", 33: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 2: "0 1 2 3 4 5 6 7 8 9 8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD BD CD" }, D: { 2: "J hB L D E F A B C M N G O", 33: "0 1 2 3 4 5 6 7 8 9 P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC" }, E: { 1: "A B C M N G K hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB DD gC", 33: "L D E F ED FD GD HD" }, F: { 2: "F B C PD QD RD SD UC 5C TD VC", 33: "0 1 2 3 4 5 6 7 8 9 G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB" }, G: { 1: "bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C", 33: "E VD WD XD YD ZD aD" }, H: { 2: "rD" }, I: { 2: "aC J sD tD uD vD 6C", 33: "I wD xD" }, J: { 2: "D A" }, K: { 2: "A B C UC 5C VC", 33: "H" }, L: { 33: "I" }, M: { 2: "TC" }, N: { 2: "A B" }, O: { 33: "WC" }, P: { 33: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 33: "9D" }, R: { 33: "AE" }, S: { 2: "BE CE" } }, B: 4, C: "CSS Cross-Fade Function", D: !0 }), Ms;
}
var Ps, Cn;
function OD() {
  return Cn || (Cn = 1, Ps = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 16: "8C", 33: "aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 16: "J hB L D E F A B C M N", 132: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB" }, E: { 1: "F A B C M N G K HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 16: "DD gC", 132: "J hB L D E ED FD GD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 16: "F B PD QD RD SD UC", 132: "C G O P Q iB DB EB FB 5C TD VC" }, G: { 1: "ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 16: "gC UD", 132: "E 6C VD WD XD YD" }, H: { 2: "rD" }, I: { 1: "I", 16: "sD tD", 132: "aC J uD vD 6C wD xD" }, J: { 1: "A", 132: "D" }, K: { 1: "H", 2: "A B UC", 132: "C 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 33: "BE" } }, B: 1, C: "CSS :read-only and :read-write selectors", D: !0 }), Ps;
}
var Gs, an;
function FD() {
  return an || (an = 1, Gs = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q", 164: "R H S T U V W X Y Z a b c d e f g h i" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB BD CD", 322: "xB" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB", 164: "IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i" }, E: { 1: "E F A B C M N G K GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L DD gC ED", 164: "D FD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 164: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V" }, G: { 1: "E XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD WD" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C", 164: "wD xD" }, J: { 2: "D", 164: "A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB ZC 8D", 164: "J yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC" }, Q: { 164: "9D" }, R: { 164: "AE" }, S: { 1: "BE CE" } }, B: 4, C: "text-emphasis styling", D: !0 }), Gs;
}
var Ls, on;
function RD() {
  return on || (on = 1, Ls = { A: { A: { 2: "L D E 7C", 8: "F", 292: "A B" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 292: "C M N G" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q BD CD", 8: "iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB", 584: "sB tB uB vB wB xB yB zB 0B 1B 2B 3B", 1025: "4B 5B" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB", 8: "IB JB K KB", 200: "LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B", 1025: "9B" }, E: { 1: "B C M N G K hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB DD gC ED", 8: "L D E F A FD GD HD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB HB IB JB K PD QD RD SD UC 5C TD VC", 200: "KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB" }, G: { 1: "cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD", 8: "E WD XD YD ZD aD bD" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD", 8: "6C wD xD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 292: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "yD", 8: "J" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 4, C: "CSS Grid Layout (level 1)", D: !0 }), Ls;
}
var Ns, ln;
function MD() {
  return ln || (ln = 1, Ns = { A: { A: { 2: "L D 7C", 161: "E F A B" }, B: { 2: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 161: "C M N G O P Q" }, C: { 2: "0 1 2 3 4 5 6 7 8 9 8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD BD CD" }, D: { 2: "0 1 2 3 4 5 6 7 8 9 J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC" }, E: { 2: "J hB L D E F A B C M N G K DD gC ED FD GD HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD" }, F: { 2: "0 1 2 3 4 5 6 7 8 9 F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB PD QD RD SD UC 5C TD VC" }, G: { 2: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C" }, H: { 2: "rD" }, I: { 2: "aC J I sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 2: "A B C H UC 5C VC" }, L: { 2: "I" }, M: { 2: "TC" }, N: { 16: "A B" }, O: { 2: "WC" }, P: { 2: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 2: "9D" }, R: { 2: "AE" }, S: { 2: "BE CE" } }, B: 5, C: "CSS Text 4 text-spacing", D: !1 }), Ns;
}
var Hs, un;
function PD() {
  return un || (un = 1, Hs = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 16: "8C", 33: "aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 16: "J hB L D E F A B C M N", 33: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC" }, E: { 1: "F A B C M N G K HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 16: "J hB L DD gC ED", 33: "D E FD GD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 33: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B" }, G: { 1: "ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 16: "gC UD 6C VD", 33: "E WD XD YD" }, H: { 2: "rD" }, I: { 1: "I", 16: "aC J sD tD uD vD 6C", 33: "wD xD" }, J: { 16: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 16: "J", 33: "yD zD 0D 1D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 33: "BE" } }, B: 5, C: "CSS :any-link selector", D: !0 }), Hs;
}
var Ks, fn;
function GD() {
  return fn || (fn = 1, Ks = { A: { D: { 1: "0 1 2 3 4 5 6 7 8 9 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G", 33: "O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB" }, L: { 1: "I" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F BD CD", 33: "A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B" }, M: { 1: "TC" }, A: { 2: "L D E F A B 7C" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 33: "G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB" }, K: { 1: "H", 2: "A B C UC 5C VC" }, E: { 1: "B C M N G K UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "J hB DD gC ED OD", 33: "L D E F A FD GD HD hC" }, G: { 1: "dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD", 33: "E WD XD YD ZD aD bD cD" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "J" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" } }, B: 6, C: "isolate from unicode-bidi", D: void 0 }), Ks;
}
var Js, cn;
function LD() {
  return cn || (cn = 1, Js = { A: { D: { 1: "0 1 2 3 4 5 6 7 8 9 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB" }, L: { 1: "I" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F BD CD", 33: "A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B" }, M: { 1: "TC" }, A: { 2: "L D E F A B 7C" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB PD QD RD SD UC 5C TD VC" }, K: { 1: "H", 2: "A B C UC 5C VC" }, E: { 1: "B C M N G K UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "J hB DD gC ED OD", 33: "L D E F A FD GD HD hC" }, G: { 1: "dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD", 33: "E WD XD YD ZD aD bD cD" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "J" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" } }, B: 6, C: "plaintext from unicode-bidi", D: void 0 }), Js;
}
var Ts, Dn;
function ND() {
  return Dn || (Dn = 1, Ts = { A: { D: { 1: "0 1 2 3 4 5 6 7 8 9 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB" }, L: { 1: "I" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O BD CD", 33: "P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B" }, M: { 1: "TC" }, A: { 2: "L D E F A B 7C" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB PD QD RD SD UC 5C TD VC" }, K: { 1: "H", 2: "A B C UC 5C VC" }, E: { 1: "B C M N G K UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "J hB L DD gC ED FD OD", 33: "D E F A GD HD hC" }, G: { 1: "dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD WD", 33: "E XD YD ZD aD bD cD" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "J" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" } }, B: 6, C: "isolate-override from unicode-bidi", D: void 0 }), Ts;
}
var zs, dn;
function HD() {
  return dn || (dn = 1, zs = { A: { A: { 2: "L D E F 7C", 132: "A B" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 132: "C M N G O P", 516: "Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC", 260: "DC EC" }, E: { 1: "K XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L D E F A B C M N DD gC ED FD GD HD hC UC VC ID", 1090: "G JD KD iC jC WC LD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B PD QD RD SD UC 5C TD VC", 260: "2B 3B" }, G: { 1: "XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "E gC UD 6C VD WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD", 1090: "mD nD iC jC WC oD" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 132: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "J yD zD 0D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "CE", 2: "BE" } }, B: 5, C: "CSS overscroll-behavior", D: !0 }), zs;
}
var qs, pn;
function KD() {
  return pn || (pn = 1, qs = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB BD CD", 194: "qB rB sB" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB" }, E: { 1: "N G K JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L D E F DD gC ED FD GD HD", 16: "A", 33: "B C M hC UC VC ID" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB", 2: "F B C G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB PD QD RD SD UC 5C TD VC" }, G: { 1: "bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "E gC UD 6C VD WD XD YD ZD aD" }, H: { 2: "rD" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C wD xD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D", 2: "J" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 2, C: "CSS text-orientation", D: !0 }), qs;
}
var Us, hn;
function JD() {
  return hn || (hn = 1, Us = { A: { D: { 1: "UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O", 33: "0 1 2 3 4 5 6 7 8 9 P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB" }, L: { 1: "I" }, B: { 1: "UB VB WB XB YB ZB aB bB cB dB eB fB gB I", 2: "C M N G O P Q", 33: "0 1 2 3 4 5 6 7 8 9 R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB BD CD", 33: "0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g" }, M: { 1: "TC" }, A: { 2: "L D E F A B 7C" }, F: { 1: "5 6 7 8 9 AB BB CB", 2: "F B C PD QD RD SD UC 5C TD VC", 33: "0 1 2 3 4 G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z" }, K: { 2: "A B C UC 5C VC", 33: "H" }, E: { 1: "K jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "J hB DD gC ED OD", 33: "L D E F A B C M N G FD GD HD hC UC VC ID JD KD iC" }, G: { 1: "jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "gC UD 6C VD", 33: "E WD XD YD ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC" }, P: { 1: "LB MB", 33: "J DB EB FB GB HB IB JB K KB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, I: { 1: "I", 2: "aC J sD tD uD vD 6C", 33: "wD xD" } }, B: 6, C: "print-color-adjust property", D: void 0 }), Us;
}
let TD = va;
function wa(B, e) {
  return B = B.split(" "), e = e.split(" "), B[0] > e[0] ? 1 : B[0] < e[0] ? -1 : Math.sign(parseFloat(B[1]) - parseFloat(e[1]));
}
function E(B, e, t) {
  B = TD(B), t || ([t, e] = [e, {}]);
  let r = e.match || /\sx($|\s)/, s = [];
  for (let i in B.stats) {
    let n = B.stats[i];
    for (let a in n)
      n[a].match(r) && s.push(i + " " + a);
  }
  t(s.sort(wa));
}
let Wr = {};
function k(B, e) {
  for (let t of B)
    Wr[t] = Object.assign({}, e);
}
function Pr(B, e) {
  for (let t of B)
    Wr[t].browsers = Wr[t].browsers.concat(e.browsers).sort(wa);
}
var zD = Wr;
let qD = Ac();
E(
  qD,
  (B) => k(
    [
      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius"
    ],
    {
      browsers: B,
      feature: "border-radius",
      mistakes: ["-khtml-", "-ms-", "-o-"]
    }
  )
);
let UD = Ec();
E(
  UD,
  (B) => k(["box-shadow"], {
    browsers: B,
    feature: "css-boxshadow",
    mistakes: ["-khtml-"]
  })
);
let VD = Sc();
E(
  VD,
  (B) => k(
    [
      "animation",
      "animation-name",
      "animation-duration",
      "animation-delay",
      "animation-direction",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-play-state",
      "animation-timing-function",
      "@keyframes"
    ],
    {
      browsers: B,
      feature: "css-animation",
      mistakes: ["-khtml-", "-ms-"]
    }
  )
);
let WD = Ic();
E(
  WD,
  (B) => k(
    [
      "transition",
      "transition-property",
      "transition-duration",
      "transition-delay",
      "transition-timing-function"
    ],
    {
      browsers: B,
      feature: "css-transitions",
      mistakes: ["-khtml-", "-ms-"]
    }
  )
);
let QD = jc();
E(
  QD,
  (B) => k(["transform", "transform-origin"], {
    browsers: B,
    feature: "transforms2d"
  })
);
let ya = Oc();
E(ya, (B) => (k(["perspective", "perspective-origin"], {
  browsers: B,
  feature: "transforms3d"
}), k(["transform-style"], {
  browsers: B,
  feature: "transforms3d",
  mistakes: ["-ms-", "-o-"]
})));
E(
  ya,
  { match: /y\sx|y\s#2/ },
  (B) => k(["backface-visibility"], {
    browsers: B,
    feature: "transforms3d",
    mistakes: ["-ms-", "-o-"]
  })
);
let xa = Fc();
E(
  xa,
  { match: /y\sx/ },
  (B) => k(
    [
      "linear-gradient",
      "repeating-linear-gradient",
      "radial-gradient",
      "repeating-radial-gradient"
    ],
    {
      browsers: B,
      feature: "css-gradients",
      mistakes: ["-ms-"],
      props: [
        "background",
        "background-image",
        "border-image",
        "mask",
        "list-style",
        "list-style-image",
        "content",
        "mask-image"
      ]
    }
  )
);
E(xa, { match: /a\sx/ }, (B) => (B = B.map((e) => /firefox|op/.test(e) ? e : `${e} old`), Pr(
  [
    "linear-gradient",
    "repeating-linear-gradient",
    "radial-gradient",
    "repeating-radial-gradient"
  ],
  {
    browsers: B
  }
)));
let YD = Rc();
E(
  YD,
  (B) => k(["box-sizing"], {
    browsers: B,
    feature: "css3-boxsizing"
  })
);
let XD = Mc();
E(
  XD,
  (B) => k(["filter"], {
    browsers: B,
    feature: "css-filters"
  })
);
let ZD = Pc();
E(
  ZD,
  (B) => k(["filter-function"], {
    browsers: B,
    feature: "css-filter-function",
    props: [
      "background",
      "background-image",
      "border-image",
      "mask",
      "list-style",
      "list-style-image",
      "content",
      "mask-image"
    ]
  })
);
let $D = Gc();
E(
  $D,
  { match: /y\sx|y\s#2/ },
  (B) => k(["backdrop-filter"], {
    browsers: B,
    feature: "css-backdrop-filter"
  })
);
let _D = Lc();
E(
  _D,
  (B) => k(["element"], {
    browsers: B,
    feature: "css-element-function",
    props: [
      "background",
      "background-image",
      "border-image",
      "mask",
      "list-style",
      "list-style-image",
      "content",
      "mask-image"
    ]
  })
);
let ed = Nc();
E(ed, (B) => {
  k(
    [
      "columns",
      "column-width",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-width",
      "column-count",
      "column-rule-style",
      "column-span",
      "column-fill"
    ],
    {
      browsers: B,
      feature: "multicolumn"
    }
  );
  let e = B.filter((t) => !/firefox/.test(t));
  k(["break-before", "break-after", "break-inside"], {
    browsers: e,
    feature: "multicolumn"
  });
});
let td = Hc();
E(
  td,
  (B) => k(["user-select"], {
    browsers: B,
    feature: "user-select-none",
    mistakes: ["-khtml-"]
  })
);
let ka = Kc();
E(ka, { match: /a\sx/ }, (B) => {
  B = B.map((e) => /ie|firefox/.test(e) ? e : `${e} 2009`), k(["display-flex", "inline-flex"], {
    browsers: B,
    feature: "flexbox",
    props: ["display"]
  }), k(["flex", "flex-grow", "flex-shrink", "flex-basis"], {
    browsers: B,
    feature: "flexbox"
  }), k(
    [
      "flex-direction",
      "flex-wrap",
      "flex-flow",
      "justify-content",
      "order",
      "align-items",
      "align-self",
      "align-content"
    ],
    {
      browsers: B,
      feature: "flexbox"
    }
  );
});
E(ka, { match: /y\sx/ }, (B) => {
  Pr(["display-flex", "inline-flex"], {
    browsers: B
  }), Pr(["flex", "flex-grow", "flex-shrink", "flex-basis"], {
    browsers: B
  }), Pr(
    [
      "flex-direction",
      "flex-wrap",
      "flex-flow",
      "justify-content",
      "order",
      "align-items",
      "align-self",
      "align-content"
    ],
    {
      browsers: B
    }
  );
});
let rd = Jc();
E(
  rd,
  (B) => k(["calc"], {
    browsers: B,
    feature: "calc",
    props: ["*"]
  })
);
let Bd = Tc();
E(
  Bd,
  (B) => k(["background-origin", "background-size"], {
    browsers: B,
    feature: "background-img-opts"
  })
);
let sd = zc();
E(
  sd,
  (B) => k(["background-clip"], {
    browsers: B,
    feature: "background-clip-text"
  })
);
let id = qc();
E(
  id,
  (B) => k(
    [
      "font-feature-settings",
      "font-variant-ligatures",
      "font-language-override"
    ],
    {
      browsers: B,
      feature: "font-feature"
    }
  )
);
let nd = Uc();
E(
  nd,
  (B) => k(["font-kerning"], {
    browsers: B,
    feature: "font-kerning"
  })
);
let Cd = Vc();
E(
  Cd,
  (B) => k(["border-image"], {
    browsers: B,
    feature: "border-image"
  })
);
let ad = Wc();
E(
  ad,
  (B) => k(["::selection"], {
    browsers: B,
    feature: "css-selection",
    selector: !0
  })
);
let od = Qc();
E(od, (B) => {
  k(["::placeholder"], {
    browsers: B.concat(["ie 10 old", "ie 11 old", "firefox 18 old"]),
    feature: "css-placeholder",
    selector: !0
  });
});
let ld = Yc();
E(ld, (B) => {
  k([":placeholder-shown"], {
    browsers: B,
    feature: "css-placeholder-shown",
    selector: !0
  });
});
let ud = Xc();
E(
  ud,
  (B) => k(["hyphens"], {
    browsers: B,
    feature: "css-hyphens"
  })
);
let fd = Zc();
E(
  fd,
  (B) => k([":fullscreen"], {
    browsers: B,
    feature: "fullscreen",
    selector: !0
  })
);
let cd = $c();
E(
  cd,
  (B) => k(["::backdrop"], {
    browsers: B,
    feature: "backdrop",
    selector: !0
  })
);
let Dd = _c();
E(
  Dd,
  (B) => k(["::file-selector-button"], {
    browsers: B,
    feature: "file-selector-button",
    selector: !0
  })
);
let dd = eD();
E(
  dd,
  (B) => k([":autofill"], {
    browsers: B,
    feature: "css-autofill",
    selector: !0
  })
);
let pd = tD();
E(
  pd,
  (B) => k(["tab-size"], {
    browsers: B,
    feature: "css3-tabsize"
  })
);
let nB = rD(), CB = [
  "width",
  "min-width",
  "max-width",
  "height",
  "min-height",
  "max-height",
  "inline-size",
  "min-inline-size",
  "max-inline-size",
  "block-size",
  "min-block-size",
  "max-block-size",
  "grid",
  "grid-template",
  "grid-template-rows",
  "grid-template-columns",
  "grid-auto-columns",
  "grid-auto-rows"
];
E(
  nB,
  (B) => k(["max-content", "min-content"], {
    browsers: B,
    feature: "intrinsic-width",
    props: CB
  })
);
E(
  nB,
  { match: /x|\s#4/ },
  (B) => k(["fill", "fill-available"], {
    browsers: B,
    feature: "intrinsic-width",
    props: CB
  })
);
E(nB, { match: /x|\s#5/ }, (B) => {
  let e = B.filter((t) => {
    let [r, s] = t.split(" ");
    return r === "firefox" || r === "and_ff" ? parseInt(s) < 94 : !0;
  });
  return k(["fit-content"], {
    browsers: e,
    feature: "intrinsic-width",
    props: CB
  });
});
let hd = BD();
E(hd, (B) => (E(nB, { match: /x|\s#2/ }, (e) => {
  B = B.concat(e);
}), k(["stretch"], {
  browsers: B,
  feature: "css-width-stretch",
  props: CB
})));
let md = sD();
E(
  md,
  (B) => k(["zoom-in", "zoom-out"], {
    browsers: B,
    feature: "css3-cursors-newer",
    props: ["cursor"]
  })
);
let bd = iD();
E(
  bd,
  (B) => k(["grab", "grabbing"], {
    browsers: B,
    feature: "css3-cursors-grab",
    props: ["cursor"]
  })
);
let gd = nD();
E(
  gd,
  (B) => k(["sticky"], {
    browsers: B,
    feature: "css-sticky",
    props: ["position"]
  })
);
let vd = CD();
E(
  vd,
  (B) => k(["touch-action"], {
    browsers: B,
    feature: "pointer"
  })
);
let wd = aD();
E(
  wd,
  { match: /x.*#[235]/ },
  (B) => k(["text-decoration-skip", "text-decoration-skip-ink"], {
    browsers: B,
    feature: "text-decoration"
  })
);
let yd = oD();
E(
  yd,
  (B) => k(["text-decoration"], {
    browsers: B,
    feature: "text-decoration"
  })
);
let xd = lD();
E(
  xd,
  (B) => k(["text-decoration-color"], {
    browsers: B,
    feature: "text-decoration"
  })
);
let kd = uD();
E(
  kd,
  (B) => k(["text-decoration-line"], {
    browsers: B,
    feature: "text-decoration"
  })
);
let Ad = fD();
E(
  Ad,
  (B) => k(["text-decoration-style"], {
    browsers: B,
    feature: "text-decoration"
  })
);
let Ed = cD();
E(
  Ed,
  (B) => k(["text-size-adjust"], {
    browsers: B,
    feature: "text-size-adjust"
  })
);
let Sd = DD();
E(Sd, (B) => {
  k(
    [
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-origin",
      "mask-repeat",
      "mask-border-repeat",
      "mask-border-source"
    ],
    {
      browsers: B,
      feature: "css-masks"
    }
  ), k(
    [
      "mask",
      "mask-position",
      "mask-position-x",
      "mask-position-y",
      "mask-size",
      "mask-border",
      "mask-border-outset",
      "mask-border-width",
      "mask-border-slice"
    ],
    {
      browsers: B,
      feature: "css-masks"
    }
  );
});
let Id = dD();
E(
  Id,
  (B) => k(["clip-path"], {
    browsers: B,
    feature: "css-clip-path"
  })
);
let jd = pD();
E(
  jd,
  (B) => k(["box-decoration-break"], {
    browsers: B,
    feature: "css-boxdecorationbreak"
  })
);
let Od = hD();
E(
  Od,
  (B) => k(["object-fit", "object-position"], {
    browsers: B,
    feature: "object-fit"
  })
);
let Fd = mD();
E(
  Fd,
  (B) => k(["shape-margin", "shape-outside", "shape-image-threshold"], {
    browsers: B,
    feature: "css-shapes"
  })
);
let Rd = bD();
E(
  Rd,
  (B) => k(["text-overflow"], {
    browsers: B,
    feature: "text-overflow"
  })
);
let Md = gD();
E(
  Md,
  (B) => k(["@viewport"], {
    browsers: B,
    feature: "css-deviceadaptation"
  })
);
let Pd = vD();
E(
  Pd,
  { match: /( x($| )|a #2)/ },
  (B) => k(["@resolution"], {
    browsers: B,
    feature: "css-media-resolution"
  })
);
let Gd = wD();
E(
  Gd,
  (B) => k(["text-align-last"], {
    browsers: B,
    feature: "css-text-align-last"
  })
);
let Aa = yD();
E(
  Aa,
  { match: /y x|a x #1/ },
  (B) => k(["pixelated"], {
    browsers: B,
    feature: "css-crisp-edges",
    props: ["image-rendering"]
  })
);
E(
  Aa,
  { match: /a x #2/ },
  (B) => k(["image-rendering"], {
    browsers: B,
    feature: "css-crisp-edges"
  })
);
let Ea = xD();
E(
  Ea,
  (B) => k(
    [
      "border-inline-start",
      "border-inline-end",
      "margin-inline-start",
      "margin-inline-end",
      "padding-inline-start",
      "padding-inline-end"
    ],
    {
      browsers: B,
      feature: "css-logical-props"
    }
  )
);
E(
  Ea,
  { match: /x\s#2/ },
  (B) => k(
    [
      "border-block-start",
      "border-block-end",
      "margin-block-start",
      "margin-block-end",
      "padding-block-start",
      "padding-block-end"
    ],
    {
      browsers: B,
      feature: "css-logical-props"
    }
  )
);
let Ld = kD();
E(
  Ld,
  { match: /#2|x/ },
  (B) => k(["appearance"], {
    browsers: B,
    feature: "css-appearance"
  })
);
let Nd = AD();
E(
  Nd,
  (B) => k(
    [
      "scroll-snap-type",
      "scroll-snap-coordinate",
      "scroll-snap-destination",
      "scroll-snap-points-x",
      "scroll-snap-points-y"
    ],
    {
      browsers: B,
      feature: "css-snappoints"
    }
  )
);
let Hd = ED();
E(
  Hd,
  (B) => k(["flow-into", "flow-from", "region-fragment"], {
    browsers: B,
    feature: "css-regions"
  })
);
let Kd = SD();
E(
  Kd,
  (B) => k(["image-set"], {
    browsers: B,
    feature: "css-image-set",
    props: [
      "background",
      "background-image",
      "border-image",
      "cursor",
      "mask",
      "mask-image",
      "list-style",
      "list-style-image",
      "content"
    ]
  })
);
let Jd = ID();
E(
  Jd,
  { match: /a|x/ },
  (B) => k(["writing-mode"], {
    browsers: B,
    feature: "css-writing-mode"
  })
);
let Td = jD();
E(
  Td,
  (B) => k(["cross-fade"], {
    browsers: B,
    feature: "css-cross-fade",
    props: [
      "background",
      "background-image",
      "border-image",
      "mask",
      "list-style",
      "list-style-image",
      "content",
      "mask-image"
    ]
  })
);
let zd = OD();
E(
  zd,
  (B) => k([":read-only", ":read-write"], {
    browsers: B,
    feature: "css-read-only-write",
    selector: !0
  })
);
let qd = FD();
E(
  qd,
  (B) => k(
    [
      "text-emphasis",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-emphasis-color"
    ],
    {
      browsers: B,
      feature: "text-emphasis"
    }
  )
);
let Sa = RD();
E(Sa, (B) => {
  k(["display-grid", "inline-grid"], {
    browsers: B,
    feature: "css-grid",
    props: ["display"]
  }), k(
    [
      "grid-template-columns",
      "grid-template-rows",
      "grid-row-start",
      "grid-column-start",
      "grid-row-end",
      "grid-column-end",
      "grid-row",
      "grid-column",
      "grid-area",
      "grid-template",
      "grid-template-areas",
      "place-self"
    ],
    {
      browsers: B,
      feature: "css-grid"
    }
  );
});
E(
  Sa,
  { match: /a x/ },
  (B) => k(["grid-column-align", "grid-row-align"], {
    browsers: B,
    feature: "css-grid"
  })
);
let Ud = MD();
E(
  Ud,
  (B) => k(["text-spacing"], {
    browsers: B,
    feature: "css-text-spacing"
  })
);
let Vd = PD();
E(
  Vd,
  (B) => k([":any-link"], {
    browsers: B,
    feature: "css-any-link",
    selector: !0
  })
);
let Wd = GD();
E(
  Wd,
  (B) => k(["isolate"], {
    browsers: B,
    feature: "css-unicode-bidi",
    props: ["unicode-bidi"]
  })
);
let Qd = LD();
E(
  Qd,
  (B) => k(["plaintext"], {
    browsers: B,
    feature: "css-unicode-bidi",
    props: ["unicode-bidi"]
  })
);
let Yd = ND();
E(
  Yd,
  { match: /y x/ },
  (B) => k(["isolate-override"], {
    browsers: B,
    feature: "css-unicode-bidi",
    props: ["unicode-bidi"]
  })
);
let Xd = HD();
E(
  Xd,
  { match: /a #1/ },
  (B) => k(["overscroll-behavior"], {
    browsers: B,
    feature: "css-overscroll-behavior"
  })
);
let Zd = KD();
E(
  Zd,
  (B) => k(["text-orientation"], {
    browsers: B,
    feature: "css-text-orientation"
  })
);
let $d = JD();
E(
  $d,
  (B) => k(["print-color-adjust", "color-adjust"], {
    browsers: B,
    feature: "css-print-color-adjust"
  })
);
var _ = {};
const Bt = /* @__PURE__ */ aC(df);
let { list: F1 } = Bt;
_.error = function(B) {
  let e = new Error(B);
  throw e.autoprefixer = !0, e;
};
_.uniq = function(B) {
  return [...new Set(B)];
};
_.removeNote = function(B) {
  return B.includes(" ") ? B.split(" ")[0] : B;
};
_.escapeRegexp = function(B) {
  return B.replace(/[$()*+-.?[\\\]^{|}]/g, "\\$&");
};
_.regexp = function(B, e = !0) {
  return e && (B = this.escapeRegexp(B)), new RegExp(`(^|[\\s,(])(${B}($|[\\s(,]))`, "gi");
};
_.editList = function(B, e) {
  let t = F1.comma(B), r = e(t, []);
  if (t === r)
    return B;
  let s = B.match(/,\s*/);
  return s = s ? s[0] : ", ", r.join(s);
};
_.splitSelector = function(B) {
  return F1.comma(B).map((e) => F1.space(e).map((t) => t.split(/(?=\.|#)/g)));
};
_.isPureNumber = function(B) {
  return typeof B == "number" ? !0 : typeof B == "string" ? /^[0-9]+$/.test(B) : !1;
};
let _d = t0, { agents: mn } = sB, e3 = _, t3 = class {
  constructor(e, t, r, s) {
    this.data = e, this.options = r || {}, this.browserslistOpts = s || {}, this.selected = this.parse(t);
  }
  /**
   * Return all prefixes for default browser data
   */
  static prefixes() {
    if (this.prefixesCache)
      return this.prefixesCache;
    this.prefixesCache = [];
    for (let e in mn)
      this.prefixesCache.push(`-${mn[e].prefix}-`);
    return this.prefixesCache = e3.uniq(this.prefixesCache).sort((e, t) => t.length - e.length), this.prefixesCache;
  }
  /**
   * Check is value contain any possible prefix
   */
  static withPrefix(e) {
    return this.prefixesRegexp || (this.prefixesRegexp = new RegExp(this.prefixes().join("|"))), this.prefixesRegexp.test(e);
  }
  /**
   * Is browser is selected by requirements
   */
  isSelected(e) {
    return this.selected.includes(e);
  }
  /**
   * Return browsers selected by requirements
   */
  parse(e) {
    let t = {};
    for (let r in this.browserslistOpts)
      t[r] = this.browserslistOpts[r];
    return t.path = this.options.from, _d(e, t);
  }
  /**
   * Return prefix for selected browser
   */
  prefix(e) {
    let [t, r] = e.split(" "), s = this.data[t], i = s.prefix_exceptions && s.prefix_exceptions[r];
    return i || (i = s.prefix), `-${i}-`;
  }
};
var st = t3;
let r3 = t0;
function B3(B) {
  return B.slice(0, 1).toUpperCase() + B.slice(1);
}
const s3 = {
  and_chr: "Chrome for Android",
  and_ff: "Firefox for Android",
  and_qq: "QQ Browser",
  and_uc: "UC for Android",
  baidu: "Baidu Browser",
  ie: "IE",
  ie_mob: "IE Mobile",
  ios_saf: "iOS Safari",
  kaios: "KaiOS Browser",
  op_mini: "Opera Mini",
  op_mob: "Opera Mobile",
  samsung: "Samsung Internet"
};
function yr(B, e, t) {
  let r = `  ${B}`;
  return t && (r += " *"), r += ": ", r += e.map((s) => s.replace(/^-(.*)-$/g, "$1")).join(", "), r += `
`, r;
}
var i3 = function(B) {
  if (B.browsers.selected.length === 0)
    return "No browsers selected";
  let e = {};
  for (let l of B.browsers.selected) {
    let u = l.split(" "), f = u[0], c = u[1];
    f = s3[f] || B3(f), e[f] ? e[f].push(c) : e[f] = [c];
  }
  let t = `Browsers:
`;
  for (let l in e) {
    let u = e[l];
    u = u.sort((f, c) => parseFloat(c) - parseFloat(f)), t += `  ${l}: ${u.join(", ")}
`;
  }
  let r = r3.coverage(B.browsers.selected), s = Math.round(r * 100) / 100;
  t += `
These browsers account for ${s}% of all users globally
`;
  let i = [];
  for (let l in B.add) {
    let u = B.add[l];
    l[0] === "@" && u.prefixes && i.push(yr(l, u.prefixes));
  }
  i.length > 0 && (t += `
At-Rules:
${i.sort().join("")}`);
  let n = [];
  for (let l of B.add.selectors)
    l.prefixes && n.push(yr(l.name, l.prefixes));
  n.length > 0 && (t += `
Selectors:
${n.sort().join("")}`);
  let a = [], C = [], o = !1;
  for (let l in B.add) {
    let u = B.add[l];
    if (l[0] !== "@" && u.prefixes) {
      let f = l.indexOf("grid-") === 0;
      f && (o = !0), C.push(yr(l, u.prefixes, f));
    }
    if (Array.isArray(u.values))
      for (let f of u.values) {
        let c = f.name.includes("grid");
        c && (o = !0);
        let h = yr(f.name, f.prefixes, c);
        a.includes(h) || a.push(h);
      }
  }
  return C.length > 0 && (t += `
Properties:
${C.sort().join("")}`), a.length > 0 && (t += `
Values:
${a.sort().join("")}`), o && (t += `
* - Prefixes will be added only on grid: true option.
`), !i.length && !n.length && !C.length && !a.length && (t += `
Awesome! Your browsers don't require any vendor prefixes.
Now you can remove Autoprefixer from build steps.`), t;
}, aB = {
  prefix(B) {
    let e = B.match(/^(-\w+-)/);
    return e ? e[0] : "";
  },
  unprefixed(B) {
    return B.replace(/^-\w+-/, "");
  }
};
let n3 = st, C3 = _, bn = aB;
function R1(B, e) {
  let t = new B.constructor();
  for (let r of Object.keys(B || {})) {
    let s = B[r];
    r === "parent" && typeof s == "object" ? e && (t[r] = e) : r === "source" || r === null ? t[r] = s : Array.isArray(s) ? t[r] = s.map((i) => R1(i, t)) : r !== "_autoprefixerPrefix" && r !== "_autoprefixerValues" && r !== "proxyCache" && (typeof s == "object" && s !== null && (s = R1(s, t)), t[r] = s);
  }
  return t;
}
let a3 = class Ia {
  constructor(e, t, r) {
    this.prefixes = t, this.name = e, this.all = r;
  }
  /**
   * Clone node and clean autprefixer custom caches
   */
  static clone(e, t) {
    let r = R1(e);
    for (let s in t)
      r[s] = t[s];
    return r;
  }
  /**
   * Add hack to selected names
   */
  static hack(e) {
    return this.hacks || (this.hacks = {}), e.names.map((t) => (this.hacks[t] = e, this.hacks[t]));
  }
  /**
   * Load hacks for some names
   */
  static load(e, t, r) {
    let s = this.hacks && this.hacks[e];
    return s ? new s(e, t, r) : new this(e, t, r);
  }
  /**
   * Shortcut for Prefixer.clone
   */
  clone(e, t) {
    return Ia.clone(e, t);
  }
  /**
   * Find prefix in node parents
   */
  parentPrefix(e) {
    let t;
    return typeof e._autoprefixerPrefix < "u" ? t = e._autoprefixerPrefix : e.type === "decl" && e.prop[0] === "-" ? t = bn.prefix(e.prop) : e.type === "root" ? t = !1 : e.type === "rule" && e.selector.includes(":-") && /:(-\w+-)/.test(e.selector) ? t = e.selector.match(/:(-\w+-)/)[1] : e.type === "atrule" && e.name[0] === "-" ? t = bn.prefix(e.name) : t = this.parentPrefix(e.parent), n3.prefixes().includes(t) || (t = !1), e._autoprefixerPrefix = t, e._autoprefixerPrefix;
  }
  /**
   * Clone node with prefixes
   */
  process(e, t) {
    if (!this.check(e))
      return;
    let r = this.parentPrefix(e), s = this.prefixes.filter(
      (n) => !r || r === C3.removeNote(n)
    ), i = [];
    for (let n of s)
      this.add(e, n, i.concat([n]), t) && i.push(n);
    return i;
  }
};
var Xt = a3;
let o3 = Xt, l3 = class extends o3 {
  /**
   * Clone and add prefixes for at-rule
   */
  add(e, t) {
    let r = t + e.name;
    if (e.parent.some(
      (n) => n.name === r && n.params === e.params
    ))
      return;
    let i = this.clone(e, { name: r });
    return e.parent.insertBefore(e, i);
  }
  /**
   * Clone node with prefixes
   */
  process(e) {
    let t = this.parentPrefix(e);
    for (let r of this.prefixes)
      (!t || t === r) && this.add(e, r);
  }
};
var u3 = l3;
let f3 = st, c3 = Xt, gn = _, D3 = class extends c3 {
  /**
   * Clone and add prefixes for declaration
   */
  add(e, t, r, s) {
    let i = this.prefixed(e.prop, t);
    if (!(this.isAlready(e, i) || this.otherPrefixes(e.value, t)))
      return this.insert(e, t, r, s);
  }
  /**
   * Calculate indentation to create visual cascade
   */
  calcBefore(e, t, r = "") {
    let i = this.maxPrefixed(e, t) - gn.removeNote(r).length, n = t.raw("before");
    return i > 0 && (n += Array(i).fill(" ").join("")), n;
  }
  /**
   * Always true, because we already get prefixer by property name
   */
  check() {
    return !0;
  }
  /**
   * Clone and insert new declaration
   */
  insert(e, t, r) {
    let s = this.set(this.clone(e), t);
    if (!(!s || e.parent.some(
      (n) => n.prop === s.prop && n.value === s.value
    )))
      return this.needCascade(e) && (s.raws.before = this.calcBefore(r, e, t)), e.parent.insertBefore(e, s);
  }
  /**
   * Did this declaration has this prefix above
   */
  isAlready(e, t) {
    let r = this.all.group(e).up((s) => s.prop === t);
    return r || (r = this.all.group(e).down((s) => s.prop === t)), r;
  }
  /**
   * Return maximum length of possible prefixed property
   */
  maxPrefixed(e, t) {
    if (t._autoprefixerMax)
      return t._autoprefixerMax;
    let r = 0;
    for (let s of e)
      s = gn.removeNote(s), s.length > r && (r = s.length);
    return t._autoprefixerMax = r, t._autoprefixerMax;
  }
  /**
   * Should we use visual cascade for prefixes
   */
  needCascade(e) {
    return e._autoprefixerCascade || (e._autoprefixerCascade = this.all.options.cascade !== !1 && e.raw("before").includes(`
`)), e._autoprefixerCascade;
  }
  /**
   * Return unprefixed version of property
   */
  normalize(e) {
    return e;
  }
  /**
   * Return list of prefixed properties to clean old prefixes
   */
  old(e, t) {
    return [this.prefixed(e, t)];
  }
  /**
   * Check `value`, that it contain other prefixes, rather than `prefix`
   */
  otherPrefixes(e, t) {
    for (let r of f3.prefixes())
      if (r !== t && e.includes(r))
        return e.replace(/var\([^)]+\)/, "").includes(r);
    return !1;
  }
  /**
   * Return prefixed version of property
   */
  prefixed(e, t) {
    return t + e;
  }
  /**
   * Add spaces for visual cascade
   */
  process(e, t) {
    if (!this.needCascade(e)) {
      super.process(e, t);
      return;
    }
    let r = super.process(e, t);
    !r || !r.length || (this.restoreBefore(e), e.raws.before = this.calcBefore(r, e));
  }
  /**
   * Remove visual cascade
   */
  restoreBefore(e) {
    let t = e.raw("before").split(`
`), r = t[t.length - 1];
    this.all.group(e).up((s) => {
      let i = s.raw("before").split(`
`), n = i[i.length - 1];
      n.length < r.length && (r = n);
    }), t[t.length - 1] = r, e.raws.before = t.join(`
`);
  }
  /**
   * Set prefix to declaration
   */
  set(e, t) {
    return e.prop = this.prefixed(e.prop, t), e;
  }
};
var K = D3, we = function(B) {
  let e;
  return B === "-webkit- 2009" || B === "-moz-" ? e = 2009 : B === "-ms-" ? e = 2012 : B === "-webkit-" && (e = "final"), B === "-webkit- 2009" && (B = "-webkit-"), [e, B];
};
let d3 = K, vn = we;
class Zt extends d3 {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "align-content";
  }
  /**
   * Change property name for 2012 spec
   */
  prefixed(e, t) {
    let r;
    return [r, t] = vn(t), r === 2012 ? t + "flex-line-pack" : super.prefixed(e, t);
  }
  /**
   * Change value for 2012 spec and ignore prefix for 2009
   */
  set(e, t) {
    let r = vn(t)[0];
    if (r === 2012)
      return e.value = Zt.oldValues[e.value] || e.value, super.set(e, t);
    if (r === "final")
      return super.set(e, t);
  }
}
Zt.names = ["align-content", "flex-line-pack"];
Zt.oldValues = {
  "flex-end": "end",
  "flex-start": "start",
  "space-around": "distribute",
  "space-between": "justify"
};
var p3 = Zt;
let h3 = K, wn = we;
class $t extends h3 {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "align-items";
  }
  /**
   * Change property name for 2009 and 2012 specs
   */
  prefixed(e, t) {
    let r;
    return [r, t] = wn(t), r === 2009 ? t + "box-align" : r === 2012 ? t + "flex-align" : super.prefixed(e, t);
  }
  /**
   * Change value for 2009 and 2012 specs
   */
  set(e, t) {
    let r = wn(t)[0];
    return (r === 2009 || r === 2012) && (e.value = $t.oldValues[e.value] || e.value), super.set(e, t);
  }
}
$t.names = ["align-items", "flex-align", "box-align"];
$t.oldValues = {
  "flex-end": "end",
  "flex-start": "start"
};
var m3 = $t;
let b3 = K, yn = we;
class _t extends b3 {
  check(e) {
    return e.parent && !e.parent.some((t) => t.prop && t.prop.startsWith("grid-"));
  }
  /**
   * Return property name by final spec
   */
  normalize() {
    return "align-self";
  }
  /**
   * Change property name for 2012 specs
   */
  prefixed(e, t) {
    let r;
    return [r, t] = yn(t), r === 2012 ? t + "flex-item-align" : super.prefixed(e, t);
  }
  /**
   * Change value for 2012 spec and ignore prefix for 2009
   */
  set(e, t) {
    let r = yn(t)[0];
    if (r === 2012)
      return e.value = _t.oldValues[e.value] || e.value, super.set(e, t);
    if (r === "final")
      return super.set(e, t);
  }
}
_t.names = ["align-self", "flex-item-align"];
_t.oldValues = {
  "flex-end": "end",
  "flex-start": "start"
};
var g3 = _t;
let v3 = K;
class ja extends v3 {
  /**
   * Don’t add prefixes for modern values.
   */
  check(e) {
    return !e.value.split(/\s+/).some((t) => {
      let r = t.toLowerCase();
      return r === "reverse" || r === "alternate-reverse";
    });
  }
}
ja.names = ["animation", "animation-direction"];
var w3 = ja;
let y3 = K, x3 = _;
class Oa extends y3 {
  constructor(e, t, r) {
    super(e, t, r), this.prefixes && (this.prefixes = x3.uniq(
      this.prefixes.map((s) => s === "-ms-" ? "-webkit-" : s)
    ));
  }
}
Oa.names = ["appearance"];
var k3 = Oa;
let A3 = class {
  constructor(e, t) {
    this.prefix = t, this.prefixed = e.prefixed(this.prefix), this.regexp = e.regexp(this.prefix), this.prefixeds = e.possible().map((r) => [e.prefixed(r), e.regexp(r)]), this.unprefixed = e.name, this.nameRegexp = e.regexp();
  }
  /**
   * Does rule contain an unnecessary prefixed selector
   */
  check(e) {
    return !(!e.selector.includes(this.prefixed) || !e.selector.match(this.regexp) || this.isHack(e));
  }
  /**
   * Is rule a hack without unprefixed version bottom
   */
  isHack(e) {
    let t = e.parent.index(e) + 1, r = e.parent.nodes;
    for (; t < r.length; ) {
      let s = r[t].selector;
      if (!s)
        return !0;
      if (s.includes(this.unprefixed) && s.match(this.nameRegexp))
        return !1;
      let i = !1;
      for (let [n, a] of this.prefixeds)
        if (s.includes(n) && s.match(a)) {
          i = !0;
          break;
        }
      if (!i)
        return !0;
      t += 1;
    }
    return !0;
  }
};
var E3 = A3;
let { list: S3 } = Bt, I3 = st, j3 = E3, O3 = Xt, F3 = _, R3 = class extends O3 {
  constructor(e, t, r) {
    super(e, t, r), this.regexpCache = /* @__PURE__ */ new Map();
  }
  /**
   * Clone and add prefixes for at-rule
   */
  add(e, t) {
    let r = this.prefixeds(e);
    if (this.already(e, r, t))
      return;
    let s = this.clone(e, { selector: r[this.name][t] });
    e.parent.insertBefore(e, s);
  }
  /**
   * Is rule already prefixed before
   */
  already(e, t, r) {
    let s = e.parent.index(e) - 1;
    for (; s >= 0; ) {
      let i = e.parent.nodes[s];
      if (i.type !== "rule")
        return !1;
      let n = !1;
      for (let a in t[this.name]) {
        let C = t[this.name][a];
        if (i.selector === C) {
          if (r === a)
            return !0;
          n = !0;
          break;
        }
      }
      if (!n)
        return !1;
      s -= 1;
    }
    return !1;
  }
  /**
   * Is rule selectors need to be prefixed
   */
  check(e) {
    return e.selector.includes(this.name) ? !!e.selector.match(this.regexp()) : !1;
  }
  /**
   * Return function to fast find prefixed selector
   */
  old(e) {
    return new j3(this, e);
  }
  /**
   * All possible prefixes
   */
  possible() {
    return I3.prefixes();
  }
  /**
   * Return prefixed version of selector
   */
  prefixed(e) {
    return this.name.replace(/^(\W*)/, `$1${e}`);
  }
  /**
   * Return all possible selector prefixes
   */
  prefixeds(e) {
    if (e._autoprefixerPrefixeds) {
      if (e._autoprefixerPrefixeds[this.name])
        return e._autoprefixerPrefixeds;
    } else
      e._autoprefixerPrefixeds = {};
    let t = {};
    if (e.selector.includes(",")) {
      let s = S3.comma(e.selector).filter((i) => i.includes(this.name));
      for (let i of this.possible())
        t[i] = s.map((n) => this.replace(n, i)).join(", ");
    } else
      for (let r of this.possible())
        t[r] = this.replace(e.selector, r);
    return e._autoprefixerPrefixeds[this.name] = t, e._autoprefixerPrefixeds;
  }
  /**
   * Lazy loadRegExp for name
   */
  regexp(e) {
    if (!this.regexpCache.has(e)) {
      let t = e ? this.prefixed(e) : this.name;
      this.regexpCache.set(
        e,
        new RegExp(`(^|[^:"'=])${F3.escapeRegexp(t)}`, "gi")
      );
    }
    return this.regexpCache.get(e);
  }
  /**
   * Replace selectors by prefixed one
   */
  replace(e, t) {
    return e.replace(this.regexp(), `$1${this.prefixed(t)}`);
  }
};
var Et = R3;
let M3 = Et, P3 = _;
class Fa extends M3 {
  constructor(e, t, r) {
    super(e, t, r), this.prefixes && (this.prefixes = P3.uniq(this.prefixes.map(() => "-webkit-")));
  }
  /**
   * Return different selectors depend on prefix
   */
  prefixed(e) {
    return e === "-webkit-" ? ":-webkit-autofill" : `:${e}autofill`;
  }
}
Fa.names = [":autofill"];
var G3 = Fa;
let L3 = K, N3 = _;
class Ra extends L3 {
  constructor(e, t, r) {
    super(e, t, r), this.prefixes && (this.prefixes = N3.uniq(
      this.prefixes.map((s) => s === "-ms-" ? "-webkit-" : s)
    ));
  }
}
Ra.names = ["backdrop-filter"];
var H3 = Ra;
let K3 = K, J3 = _;
class Ma extends K3 {
  constructor(e, t, r) {
    super(e, t, r), this.prefixes && (this.prefixes = J3.uniq(
      this.prefixes.map((s) => s === "-ms-" ? "-webkit-" : s)
    ));
  }
  check(e) {
    return e.value.toLowerCase() === "text";
  }
}
Ma.names = ["background-clip"];
var T3 = Ma;
let z3 = K;
class Pa extends z3 {
  /**
   * Duplication parameter for -webkit- browsers
   */
  set(e, t) {
    let r = e.value.toLowerCase();
    return t === "-webkit-" && !r.includes(" ") && r !== "contain" && r !== "cover" && (e.value = e.value + " " + e.value), super.set(e, t);
  }
}
Pa.names = ["background-size"];
var q3 = Pa;
let U3 = K;
class Ga extends U3 {
  /**
   * Return property name by spec
   */
  normalize(e) {
    return e.includes("-before") ? e.replace("-before", "-block-start") : e.replace("-after", "-block-end");
  }
  /**
   * Use old syntax for -moz- and -webkit-
   */
  prefixed(e, t) {
    return e.includes("-start") ? t + e.replace("-block-start", "-before") : t + e.replace("-block-end", "-after");
  }
}
Ga.names = [
  "border-block-start",
  "border-block-end",
  "margin-block-start",
  "margin-block-end",
  "padding-block-start",
  "padding-block-end",
  "border-before",
  "border-after",
  "margin-before",
  "margin-after",
  "padding-before",
  "padding-after"
];
var V3 = Ga;
let W3 = K;
class La extends W3 {
  /**
   * Remove fill parameter for prefixed declarations
   */
  set(e, t) {
    return e.value = e.value.replace(/\s+fill(\s)/, "$1"), super.set(e, t);
  }
}
La.names = ["border-image"];
var Q3 = La;
let Y3 = K;
class Ie extends Y3 {
  /**
   * Return unprefixed version of property
   */
  normalize(e) {
    return Ie.toNormal[e] || e;
  }
  /**
   * Change syntax, when add Mozilla prefix
   */
  prefixed(e, t) {
    return t === "-moz-" ? t + (Ie.toMozilla[e] || e) : super.prefixed(e, t);
  }
}
Ie.names = ["border-radius"];
Ie.toMozilla = {};
Ie.toNormal = {};
for (let B of ["top", "bottom"])
  for (let e of ["left", "right"]) {
    let t = `border-${B}-${e}-radius`, r = `border-radius-${B}${e}`;
    Ie.names.push(t), Ie.names.push(r), Ie.toMozilla[t] = r, Ie.toNormal[r] = t;
  }
var X3 = Ie;
let Z3 = K;
class Na extends Z3 {
  /**
   * Don’t prefix some values
   */
  insert(e, t, r) {
    if (e.prop !== "break-inside")
      return super.insert(e, t, r);
    if (!(/region/i.test(e.value) || /page/i.test(e.value)))
      return super.insert(e, t, r);
  }
  /**
   * Return property name by final spec
   */
  normalize(e) {
    return e.includes("inside") ? "break-inside" : e.includes("before") ? "break-before" : "break-after";
  }
  /**
   * Change name for -webkit- and -moz- prefix
   */
  prefixed(e, t) {
    return `${t}column-${e}`;
  }
  /**
   * Change prefixed value for avoid-column and avoid-page
   */
  set(e, t) {
    return (e.prop === "break-inside" && e.value === "avoid-column" || e.value === "avoid-page") && (e.value = "avoid"), super.set(e, t);
  }
}
Na.names = [
  "break-inside",
  "page-break-inside",
  "column-break-inside",
  "break-before",
  "page-break-before",
  "column-break-before",
  "break-after",
  "page-break-after",
  "column-break-after"
];
var $3 = Na;
let _3 = _, e4 = class {
  constructor(e, t, r, s) {
    this.unprefixed = e, this.prefixed = t, this.string = r || t, this.regexp = s || _3.regexp(t);
  }
  /**
   * Check, that value contain old value
   */
  check(e) {
    return e.includes(this.string) ? !!e.match(this.regexp) : !1;
  }
};
var er = e4;
let t4 = er, r4 = Xt, B4 = _, s4 = aB, i4 = class extends r4 {
  /**
   * Clone decl for each prefixed values
   */
  static save(e, t) {
    let r = t.prop, s = [];
    for (let i in t._autoprefixerValues) {
      let n = t._autoprefixerValues[i];
      if (n === t.value)
        continue;
      let a, C = s4.prefix(r);
      if (C === "-pie-")
        continue;
      if (C === i) {
        a = t.value = n, s.push(a);
        continue;
      }
      let o = e.prefixed(r, i), l = t.parent;
      if (!l.every((h) => h.prop !== o)) {
        s.push(a);
        continue;
      }
      let u = n.replace(/\s+/, " ");
      if (l.some(
        (h) => h.prop === t.prop && h.value.replace(/\s+/, " ") === u
      )) {
        s.push(a);
        continue;
      }
      let c = this.clone(t, { value: n });
      a = t.parent.insertBefore(t, c), s.push(a);
    }
    return s;
  }
  /**
   * Save values with next prefixed token
   */
  add(e, t) {
    e._autoprefixerValues || (e._autoprefixerValues = {});
    let r = e._autoprefixerValues[t] || this.value(e), s;
    do
      if (s = r, r = this.replace(r, t), r === !1) return;
    while (r !== s);
    e._autoprefixerValues[t] = r;
  }
  /**
   * Is declaration need to be prefixed
   */
  check(e) {
    let t = e.value;
    return t.includes(this.name) ? !!t.match(this.regexp()) : !1;
  }
  /**
   * Return function to fast find prefixed value
   */
  old(e) {
    return new t4(this.name, e + this.name);
  }
  /**
   * Lazy regexp loading
   */
  regexp() {
    return this.regexpCache || (this.regexpCache = B4.regexp(this.name));
  }
  /**
   * Add prefix to values in string
   */
  replace(e, t) {
    return e.replace(this.regexp(), `$1${t}$2`);
  }
  /**
   * Get value with comments if it was not changed
   */
  value(e) {
    return e.raws.value && e.raws.value.value === e.value ? e.raws.value.raw : e.value;
  }
};
var Oe = i4;
let n4 = Bt.list, C4 = Oe;
class Ha extends C4 {
  replace(e, t) {
    return n4.space(e).map((r) => {
      if (r.slice(0, +this.name.length + 1) !== this.name + "(")
        return r;
      let s = r.lastIndexOf(")"), i = r.slice(s + 1), n = r.slice(this.name.length + 1, s);
      if (t === "-webkit-") {
        let a = n.match(/\d*.?\d+%?/);
        a ? (n = n.slice(a[0].length).trim(), n += `, ${a[0]}`) : n += ", 0.5";
      }
      return t + this.name + "(" + n + ")" + i;
    }).join(" ");
  }
}
Ha.names = ["cross-fade"];
var a4 = Ha;
let o4 = er, l4 = Oe, u4 = we;
class Ka extends l4 {
  constructor(e, t) {
    super(e, t), e === "display-flex" && (this.name = "flex");
  }
  /**
   * Faster check for flex value
   */
  check(e) {
    return e.prop === "display" && e.value === this.name;
  }
  /**
   * Change value for old specs
   */
  old(e) {
    let t = this.prefixed(e);
    if (t)
      return new o4(this.name, t);
  }
  /**
   * Return value by spec
   */
  prefixed(e) {
    let t, r;
    return [t, e] = u4(e), t === 2009 ? this.name === "flex" ? r = "box" : r = "inline-box" : t === 2012 ? this.name === "flex" ? r = "flexbox" : r = "inline-flexbox" : t === "final" && (r = this.name), e + r;
  }
  /**
   * Add prefix to value depend on flebox spec version
   */
  replace(e, t) {
    return this.prefixed(t);
  }
}
Ka.names = ["display-flex", "inline-flex"];
var f4 = Ka;
let c4 = Oe;
class Ja extends c4 {
  constructor(e, t) {
    super(e, t), e === "display-grid" && (this.name = "grid");
  }
  /**
   * Faster check for flex value
   */
  check(e) {
    return e.prop === "display" && e.value === this.name;
  }
}
Ja.names = ["display-grid", "inline-grid"];
var D4 = Ja;
let d4 = Et, p4 = _;
class Ta extends d4 {
  constructor(e, t, r) {
    super(e, t, r), this.prefixes && (this.prefixes = p4.uniq(this.prefixes.map(() => "-webkit-")));
  }
  /**
   * Return different selectors depend on prefix
   */
  prefixed(e) {
    return e === "-webkit-" ? "::-webkit-file-upload-button" : `::${e}file-selector-button`;
  }
}
Ta.names = ["::file-selector-button"];
var h4 = Ta;
let m4 = K;
class za extends m4 {
  /**
   * Check is it Internet Explorer filter
   */
  check(e) {
    let t = e.value;
    return !t.toLowerCase().includes("alpha(") && !t.includes("DXImageTransform.Microsoft") && !t.includes("data:image/svg+xml");
  }
}
za.names = ["filter"];
var b4 = za;
let g4 = Oe;
class qa extends g4 {
  constructor(e, t) {
    super(e, t), e === "filter-function" && (this.name = "filter");
  }
}
qa.names = ["filter", "filter-function"];
var v4 = qa;
let xn = Bt.list, w4 = K, kn = we, B0 = class Ua extends w4 {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "flex";
  }
  /**
   * Change property name for 2009 spec
   */
  prefixed(e, t) {
    let r;
    return [r, t] = kn(t), r === 2009 ? t + "box-flex" : super.prefixed(e, t);
  }
  /**
   * Spec 2009 supports only first argument
   * Spec 2012 disallows unitless basis
   */
  set(e, t) {
    let r = kn(t)[0];
    if (r === 2009)
      return e.value = xn.space(e.value)[0], e.value = Ua.oldValues[e.value] || e.value, super.set(e, t);
    if (r === 2012) {
      let s = xn.space(e.value);
      s.length === 3 && s[2] === "0" && (e.value = s.slice(0, 2).concat("0px").join(" "));
    }
    return super.set(e, t);
  }
};
B0.names = ["flex", "box-flex"];
B0.oldValues = {
  auto: "1",
  none: "0"
};
var y4 = B0;
let x4 = K, An = we;
class Va extends x4 {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "flex-basis";
  }
  /**
   * Return flex property for 2012 spec
   */
  prefixed(e, t) {
    let r;
    return [r, t] = An(t), r === 2012 ? t + "flex-preferred-size" : super.prefixed(e, t);
  }
  /**
   * Ignore 2009 spec and use flex property for 2012
   */
  set(e, t) {
    let r;
    if ([r, t] = An(t), r === 2012 || r === "final")
      return super.set(e, t);
  }
}
Va.names = ["flex-basis", "flex-preferred-size"];
var k4 = Va;
let A4 = K, En = we;
class Wa extends A4 {
  /**
   * Use two properties for 2009 spec
   */
  insert(e, t, r) {
    let s;
    if ([s, t] = En(t), s !== 2009)
      return super.insert(e, t, r);
    if (e.parent.some(
      (l) => l.prop === t + "box-orient" || l.prop === t + "box-direction"
    ))
      return;
    let n = e.value, a, C;
    n === "inherit" || n === "initial" || n === "unset" ? (C = n, a = n) : (C = n.includes("row") ? "horizontal" : "vertical", a = n.includes("reverse") ? "reverse" : "normal");
    let o = this.clone(e);
    return o.prop = t + "box-orient", o.value = C, this.needCascade(e) && (o.raws.before = this.calcBefore(r, e, t)), e.parent.insertBefore(e, o), o = this.clone(e), o.prop = t + "box-direction", o.value = a, this.needCascade(e) && (o.raws.before = this.calcBefore(r, e, t)), e.parent.insertBefore(e, o);
  }
  /**
   * Return property name by final spec
   */
  normalize() {
    return "flex-direction";
  }
  /**
   * Clean two properties for 2009 spec
   */
  old(e, t) {
    let r;
    return [r, t] = En(t), r === 2009 ? [t + "box-orient", t + "box-direction"] : super.old(e, t);
  }
}
Wa.names = ["flex-direction", "box-direction", "box-orient"];
var E4 = Wa;
let S4 = K, I4 = we;
class Qa extends S4 {
  /**
   * Use two properties for 2009 spec
   */
  insert(e, t, r) {
    let s;
    if ([s, t] = I4(t), s !== 2009)
      return super.insert(e, t, r);
    let i = e.value.split(/\s+/).filter((u) => u !== "wrap" && u !== "nowrap" && "wrap-reverse");
    if (i.length === 0 || e.parent.some(
      (u) => u.prop === t + "box-orient" || u.prop === t + "box-direction"
    ))
      return;
    let a = i[0], C = a.includes("row") ? "horizontal" : "vertical", o = a.includes("reverse") ? "reverse" : "normal", l = this.clone(e);
    return l.prop = t + "box-orient", l.value = C, this.needCascade(e) && (l.raws.before = this.calcBefore(r, e, t)), e.parent.insertBefore(e, l), l = this.clone(e), l.prop = t + "box-direction", l.value = o, this.needCascade(e) && (l.raws.before = this.calcBefore(r, e, t)), e.parent.insertBefore(e, l);
  }
}
Qa.names = ["flex-flow", "box-direction", "box-orient"];
var j4 = Qa;
let O4 = K, F4 = we;
class Ya extends O4 {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "flex";
  }
  /**
   * Return flex property for 2009 and 2012 specs
   */
  prefixed(e, t) {
    let r;
    return [r, t] = F4(t), r === 2009 ? t + "box-flex" : r === 2012 ? t + "flex-positive" : super.prefixed(e, t);
  }
}
Ya.names = ["flex-grow", "flex-positive"];
var R4 = Ya;
let M4 = K, Sn = we;
class Xa extends M4 {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "flex-shrink";
  }
  /**
   * Return flex property for 2012 spec
   */
  prefixed(e, t) {
    let r;
    return [r, t] = Sn(t), r === 2012 ? t + "flex-negative" : super.prefixed(e, t);
  }
  /**
   * Ignore 2009 spec and use flex property for 2012
   */
  set(e, t) {
    let r;
    if ([r, t] = Sn(t), r === 2012 || r === "final")
      return super.set(e, t);
  }
}
Xa.names = ["flex-shrink", "flex-negative"];
var P4 = Xa;
let G4 = K, L4 = we;
class Za extends G4 {
  /**
   * Don't add prefix for 2009 spec
   */
  set(e, t) {
    if (L4(t)[0] !== 2009)
      return super.set(e, t);
  }
}
Za.names = ["flex-wrap"];
var N4 = Za;
let H4 = Et;
class $a extends H4 {
  /**
   * Return different selectors depend on prefix
   */
  prefixed(e) {
    return e === "-webkit-" ? ":-webkit-full-screen" : e === "-moz-" ? ":-moz-full-screen" : `:${e}fullscreen`;
  }
}
$a.names = [":fullscreen"];
var K4 = $a, Vs = 40, Ws = 41, xr = 39, Qs = 34, Ys = 92, ot = 47, Xs = 44, Zs = 58, kr = 42, J4 = 117, T4 = 85, z4 = 43, q4 = /^[a-f0-9?-]+$/i, U4 = function(B) {
  for (var e = [], t = B, r, s, i, n, a, C, o, l, u = 0, f = t.charCodeAt(u), c = t.length, h = [{ nodes: e }], b = 0, d, y = "", x = "", g = ""; u < c; )
    if (f <= 32) {
      r = u;
      do
        r += 1, f = t.charCodeAt(r);
      while (f <= 32);
      n = t.slice(u, r), i = e[e.length - 1], f === Ws && b ? g = n : i && i.type === "div" ? (i.after = n, i.sourceEndIndex += n.length) : f === Xs || f === Zs || f === ot && t.charCodeAt(r + 1) !== kr && (!d || d && d.type === "function" && d.value !== "calc") ? x = n : e.push({
        type: "space",
        sourceIndex: u,
        sourceEndIndex: r,
        value: n
      }), u = r;
    } else if (f === xr || f === Qs) {
      r = u, s = f === xr ? "'" : '"', n = {
        type: "string",
        sourceIndex: u,
        quote: s
      };
      do
        if (a = !1, r = t.indexOf(s, r + 1), ~r)
          for (C = r; t.charCodeAt(C - 1) === Ys; )
            C -= 1, a = !a;
        else
          t += s, r = t.length - 1, n.unclosed = !0;
      while (a);
      n.value = t.slice(u + 1, r), n.sourceEndIndex = n.unclosed ? r : r + 1, e.push(n), u = r + 1, f = t.charCodeAt(u);
    } else if (f === ot && t.charCodeAt(u + 1) === kr)
      r = t.indexOf("*/", u), n = {
        type: "comment",
        sourceIndex: u,
        sourceEndIndex: r + 2
      }, r === -1 && (n.unclosed = !0, r = t.length, n.sourceEndIndex = r), n.value = t.slice(u + 2, r), e.push(n), u = r + 2, f = t.charCodeAt(u);
    else if ((f === ot || f === kr) && d && d.type === "function" && d.value === "calc")
      n = t[u], e.push({
        type: "word",
        sourceIndex: u - x.length,
        sourceEndIndex: u + n.length,
        value: n
      }), u += 1, f = t.charCodeAt(u);
    else if (f === ot || f === Xs || f === Zs)
      n = t[u], e.push({
        type: "div",
        sourceIndex: u - x.length,
        sourceEndIndex: u + n.length,
        value: n,
        before: x,
        after: ""
      }), x = "", u += 1, f = t.charCodeAt(u);
    else if (Vs === f) {
      r = u;
      do
        r += 1, f = t.charCodeAt(r);
      while (f <= 32);
      if (l = u, n = {
        type: "function",
        sourceIndex: u - y.length,
        value: y,
        before: t.slice(l + 1, r)
      }, u = r, y === "url" && f !== xr && f !== Qs) {
        r -= 1;
        do
          if (a = !1, r = t.indexOf(")", r + 1), ~r)
            for (C = r; t.charCodeAt(C - 1) === Ys; )
              C -= 1, a = !a;
          else
            t += ")", r = t.length - 1, n.unclosed = !0;
        while (a);
        o = r;
        do
          o -= 1, f = t.charCodeAt(o);
        while (f <= 32);
        l < o ? (u !== o + 1 ? n.nodes = [
          {
            type: "word",
            sourceIndex: u,
            sourceEndIndex: o + 1,
            value: t.slice(u, o + 1)
          }
        ] : n.nodes = [], n.unclosed && o + 1 !== r ? (n.after = "", n.nodes.push({
          type: "space",
          sourceIndex: o + 1,
          sourceEndIndex: r,
          value: t.slice(o + 1, r)
        })) : (n.after = t.slice(o + 1, r), n.sourceEndIndex = r)) : (n.after = "", n.nodes = []), u = r + 1, n.sourceEndIndex = n.unclosed ? r : u, f = t.charCodeAt(u), e.push(n);
      } else
        b += 1, n.after = "", n.sourceEndIndex = u + 1, e.push(n), h.push(n), e = n.nodes = [], d = n;
      y = "";
    } else if (Ws === f && b)
      u += 1, f = t.charCodeAt(u), d.after = g, d.sourceEndIndex += g.length, g = "", b -= 1, h[h.length - 1].sourceEndIndex = u, h.pop(), d = h[b], e = d.nodes;
    else {
      r = u;
      do
        f === Ys && (r += 1), r += 1, f = t.charCodeAt(r);
      while (r < c && !(f <= 32 || f === xr || f === Qs || f === Xs || f === Zs || f === ot || f === Vs || f === kr && d && d.type === "function" && d.value === "calc" || f === ot && d.type === "function" && d.value === "calc" || f === Ws && b));
      n = t.slice(u, r), Vs === f ? y = n : (J4 === n.charCodeAt(0) || T4 === n.charCodeAt(0)) && z4 === n.charCodeAt(1) && q4.test(n.slice(2)) ? e.push({
        type: "unicode-range",
        sourceIndex: u,
        sourceEndIndex: r,
        value: n
      }) : e.push({
        type: "word",
        sourceIndex: u,
        sourceEndIndex: r,
        value: n
      }), u = r;
    }
  for (u = h.length - 1; u; u -= 1)
    h[u].unclosed = !0, h[u].sourceEndIndex = t.length;
  return h[0].nodes;
}, V4 = function B(e, t, r) {
  var s, i, n, a;
  for (s = 0, i = e.length; s < i; s += 1)
    n = e[s], r || (a = t(n, s, e)), a !== !1 && n.type === "function" && Array.isArray(n.nodes) && B(n.nodes, t, r), r && t(n, s, e);
};
function In(B, e) {
  var t = B.type, r = B.value, s, i;
  return e && (i = e(B)) !== void 0 ? i : t === "word" || t === "space" ? r : t === "string" ? (s = B.quote || "", s + r + (B.unclosed ? "" : s)) : t === "comment" ? "/*" + r + (B.unclosed ? "" : "*/") : t === "div" ? (B.before || "") + r + (B.after || "") : Array.isArray(B.nodes) ? (s = _a(B.nodes, e), t !== "function" ? s : r + "(" + (B.before || "") + s + (B.after || "") + (B.unclosed ? "" : ")")) : r;
}
function _a(B, e) {
  var t, r;
  if (Array.isArray(B)) {
    for (t = "", r = B.length - 1; ~r; r -= 1)
      t = In(B[r], e) + t;
    return t;
  }
  return In(B, e);
}
var W4 = _a, $s, jn;
function Q4() {
  if (jn) return $s;
  jn = 1;
  var B = 45, e = 43, t = 46, r = 101, s = 69;
  function i(n) {
    var a = n.charCodeAt(0), C;
    if (a === e || a === B) {
      if (C = n.charCodeAt(1), C >= 48 && C <= 57)
        return !0;
      var o = n.charCodeAt(2);
      return C === t && o >= 48 && o <= 57;
    }
    return a === t ? (C = n.charCodeAt(1), C >= 48 && C <= 57) : a >= 48 && a <= 57;
  }
  return $s = function(n) {
    var a = 0, C = n.length, o, l, u;
    if (C === 0 || !i(n))
      return !1;
    for (o = n.charCodeAt(a), (o === e || o === B) && a++; a < C && (o = n.charCodeAt(a), !(o < 48 || o > 57)); )
      a += 1;
    if (o = n.charCodeAt(a), l = n.charCodeAt(a + 1), o === t && l >= 48 && l <= 57)
      for (a += 2; a < C && (o = n.charCodeAt(a), !(o < 48 || o > 57)); )
        a += 1;
    if (o = n.charCodeAt(a), l = n.charCodeAt(a + 1), u = n.charCodeAt(a + 2), (o === r || o === s) && (l >= 48 && l <= 57 || (l === e || l === B) && u >= 48 && u <= 57))
      for (a += l === e || l === B ? 3 : 2; a < C && (o = n.charCodeAt(a), !(o < 48 || o > 57)); )
        a += 1;
    return {
      number: n.slice(0, a),
      unit: n.slice(a)
    };
  }, $s;
}
var Y4 = U4, e2 = V4, t2 = W4;
function Ze(B) {
  return this instanceof Ze ? (this.nodes = Y4(B), this) : new Ze(B);
}
Ze.prototype.toString = function() {
  return Array.isArray(this.nodes) ? t2(this.nodes) : "";
};
Ze.prototype.walk = function(B, e) {
  return e2(this.nodes, B, e), this;
};
Ze.unit = Q4();
Ze.walk = e2;
Ze.stringify = t2;
var oB = Ze;
let _s = oB, X4 = er, Z4 = _, $4 = Oe;
const On = /top|left|right|bottom/gi;
class Xe extends $4 {
  /**
   * Do not add non-webkit prefixes for list-style and object
   */
  add(e, t) {
    let r = e.prop;
    if (r.includes("mask")) {
      if (t === "-webkit-" || t === "-webkit- old")
        return super.add(e, t);
    } else if (r === "list-style" || r === "list-style-image" || r === "content") {
      if (t === "-webkit-" || t === "-webkit- old")
        return super.add(e, t);
    } else
      return super.add(e, t);
  }
  /**
   * Get div token from exists parameters
   */
  cloneDiv(e) {
    for (let t of e)
      if (t.type === "div" && t.value === ",")
        return t;
    return { after: " ", type: "div", value: "," };
  }
  /**
   * Change colors syntax to old webkit
   */
  colorStops(e) {
    let t = [];
    for (let r = 0; r < e.length; r++) {
      let s, i = e[r], n;
      if (r === 0)
        continue;
      let a = _s.stringify(i[0]);
      i[1] && i[1].type === "word" ? s = i[1].value : i[2] && i[2].type === "word" && (s = i[2].value);
      let C;
      r === 1 && (!s || s === "0%") ? C = `from(${a})` : r === e.length - 1 && (!s || s === "100%") ? C = `to(${a})` : s ? C = `color-stop(${s}, ${a})` : C = `color-stop(${a})`;
      let o = i[i.length - 1];
      e[r] = [{ type: "word", value: C }], o.type === "div" && o.value === "," && (n = e[r].push(o)), t.push(n);
    }
    return t;
  }
  /**
   * Change new direction to old
   */
  convertDirection(e) {
    return e.length > 0 && (e[0].value === "to" ? this.fixDirection(e) : e[0].value.includes("deg") ? this.fixAngle(e) : this.isRadial(e) && this.fixRadial(e)), e;
  }
  /**
   * Add 90 degrees
   */
  fixAngle(e) {
    let t = e[0].value;
    t = parseFloat(t), t = Math.abs(450 - t) % 360, t = this.roundFloat(t, 3), e[0].value = `${t}deg`;
  }
  /**
   * Replace `to top left` to `bottom right`
   */
  fixDirection(e) {
    e.splice(0, 2);
    for (let t of e) {
      if (t.type === "div")
        break;
      t.type === "word" && (t.value = this.revertDirection(t.value));
    }
  }
  /**
   * Fix radial direction syntax
   */
  fixRadial(e) {
    let t = [], r = [], s, i, n, a, C;
    for (a = 0; a < e.length - 2; a++)
      if (s = e[a], i = e[a + 1], n = e[a + 2], s.type === "space" && i.value === "at" && n.type === "space") {
        C = a + 3;
        break;
      } else
        t.push(s);
    let o;
    for (a = C; a < e.length; a++)
      if (e[a].type === "div") {
        o = e[a];
        break;
      } else
        r.push(e[a]);
    e.splice(0, a, ...r, o, ...t);
  }
  /**
   * Look for at word
   */
  isRadial(e) {
    let t = "before";
    for (let r of e)
      if (t === "before" && r.type === "space")
        t = "at";
      else if (t === "at" && r.value === "at")
        t = "after";
      else {
        if (t === "after" && r.type === "space")
          return !0;
        if (r.type === "div")
          break;
        t = "before";
      }
    return !1;
  }
  /**
   * Replace old direction to new
   */
  newDirection(e) {
    if (e[0].value === "to" || (On.lastIndex = 0, !On.test(e[0].value)))
      return e;
    e.unshift(
      {
        type: "word",
        value: "to"
      },
      {
        type: "space",
        value: " "
      }
    );
    for (let t = 2; t < e.length && e[t].type !== "div"; t++)
      e[t].type === "word" && (e[t].value = this.revertDirection(e[t].value));
    return e;
  }
  /**
   * Normalize angle
   */
  normalize(e, t) {
    if (!e[0]) return e;
    if (/-?\d+(.\d+)?grad/.test(e[0].value))
      e[0].value = this.normalizeUnit(e[0].value, 400);
    else if (/-?\d+(.\d+)?rad/.test(e[0].value))
      e[0].value = this.normalizeUnit(e[0].value, 2 * Math.PI);
    else if (/-?\d+(.\d+)?turn/.test(e[0].value))
      e[0].value = this.normalizeUnit(e[0].value, 1);
    else if (e[0].value.includes("deg")) {
      let r = parseFloat(e[0].value);
      r = (r % 360 + 360) % 360, e[0].value = `${r}deg`;
    }
    if (t === "linear-gradient" || t === "repeating-linear-gradient") {
      let r = e[0].value;
      r === "0deg" || r === "0" ? e = this.replaceFirst(e, "to", " ", "top") : r === "90deg" ? e = this.replaceFirst(e, "to", " ", "right") : r === "180deg" ? e = this.replaceFirst(e, "to", " ", "bottom") : r === "270deg" && (e = this.replaceFirst(e, "to", " ", "left"));
    }
    return e;
  }
  /**
   * Convert angle unit to deg
   */
  normalizeUnit(e, t) {
    return `${parseFloat(e) / t * 360}deg`;
  }
  /**
   * Remove old WebKit gradient too
   */
  old(e) {
    if (e === "-webkit-") {
      let t;
      this.name === "linear-gradient" ? t = "linear" : this.name === "repeating-linear-gradient" ? t = "repeating-linear" : this.name === "repeating-radial-gradient" ? t = "repeating-radial" : t = "radial";
      let r = "-gradient", s = Z4.regexp(
        `-webkit-(${t}-gradient|gradient\\(\\s*${t})`,
        !1
      );
      return new X4(this.name, e + this.name, r, s);
    } else
      return super.old(e);
  }
  /**
   * Change direction syntax to old webkit
   */
  oldDirection(e) {
    let t = this.cloneDiv(e[0]);
    if (e[0][0].value !== "to")
      return e.unshift([
        { type: "word", value: Xe.oldDirections.bottom },
        t
      ]);
    {
      let r = [];
      for (let i of e[0].slice(2))
        i.type === "word" && r.push(i.value.toLowerCase());
      r = r.join(" ");
      let s = Xe.oldDirections[r] || r;
      return e[0] = [{ type: "word", value: s }, t], e[0];
    }
  }
  /**
   * Convert to old webkit syntax
   */
  oldWebkit(e) {
    let { nodes: t } = e, r = _s.stringify(e.nodes);
    if (this.name !== "linear-gradient" || t[0] && t[0].value.includes("deg") || r.includes("px") || r.includes("-corner") || r.includes("-side") || r.includes("var("))
      return !1;
    let s = [[]];
    for (let i of t)
      s[s.length - 1].push(i), i.type === "div" && i.value === "," && s.push([]);
    this.oldDirection(s), this.colorStops(s), e.nodes = [];
    for (let i of s)
      e.nodes.push(...i);
    return e.nodes.unshift(
      { type: "word", value: "linear" },
      this.cloneDiv(e.nodes)
    ), e.value = "-webkit-gradient", !0;
  }
  /**
   * Change degrees for webkit prefix
   */
  replace(e, t) {
    let r = _s(e);
    for (let s of r.nodes) {
      let i = this.name;
      if (s.type === "function" && s.value === i)
        if (s.nodes = this.newDirection(s.nodes), s.nodes = this.normalize(s.nodes, i), t === "-webkit- old") {
          if (!this.oldWebkit(s))
            return !1;
        } else
          s.nodes = this.convertDirection(s.nodes), s.value = t + s.value;
    }
    return r.toString();
  }
  /**
   * Replace first token
   */
  replaceFirst(e, ...t) {
    return t.map((s) => s === " " ? { type: "space", value: s } : { type: "word", value: s }).concat(e.slice(1));
  }
  revertDirection(e) {
    return Xe.directions[e.toLowerCase()] || e;
  }
  /**
   * Round float and save digits under dot
   */
  roundFloat(e, t) {
    return parseFloat(e.toFixed(t));
  }
}
Xe.names = [
  "linear-gradient",
  "repeating-linear-gradient",
  "radial-gradient",
  "repeating-radial-gradient"
];
Xe.directions = {
  bottom: "top",
  left: "right",
  right: "left",
  top: "bottom"
  // default value
};
Xe.oldDirections = {
  bottom: "left top, left bottom",
  "bottom left": "right top, left bottom",
  "bottom right": "left top, right bottom",
  left: "right top, left top",
  "left bottom": "right top, left bottom",
  "left top": "right bottom, left top",
  right: "left top, right top",
  "right bottom": "left top, right bottom",
  "right top": "left bottom, right top",
  top: "left bottom, left top",
  "top left": "right bottom, left top",
  "top right": "left bottom, right top"
};
var _4 = Xe, ne = {};
let ve = oB, gt = Bt.list, Fn = _.uniq, e5 = _.escapeRegexp, M1 = _.splitSelector;
function Rn(B) {
  return B && B.length === 2 && B[0] === "span" && parseInt(B[1], 10) > 0 ? [!1, parseInt(B[1], 10)] : B && B.length === 1 && parseInt(B[0], 10) > 0 ? [parseInt(B[0], 10), !1] : [!1, !1];
}
ne.translate = t5;
function t5(B, e, t) {
  let r = B[e], s = B[t];
  if (!r)
    return [!1, !1];
  let [i, n] = Rn(r), [a, C] = Rn(s);
  return i && !s ? [i, !1] : n && a ? [a - n, n] : i && C ? [i, C] : i && a ? [i, a - i] : [!1, !1];
}
ne.parse = r5;
function r5(B) {
  let e = ve(B.value), t = [], r = 0;
  t[r] = [];
  for (let s of e.nodes)
    s.type === "div" ? (r += 1, t[r] = []) : s.type === "word" && t[r].push(s.value);
  return t;
}
ne.insertDecl = B5;
function B5(B, e, t) {
  t && !B.parent.some((r) => r.prop === `-ms-${e}`) && B.cloneBefore({
    prop: `-ms-${e}`,
    value: t.toString()
  });
}
ne.prefixTrackProp = s5;
function s5({ prefix: B, prop: e }) {
  return B + e.replace("template-", "");
}
function i5({ nodes: B }, { gap: e }) {
  let { count: t, size: r } = B.reduce(
    (s, i) => (i.type === "div" && i.value === "," ? s.key = "size" : s[s.key].push(ve.stringify(i)), s),
    {
      count: [],
      key: "count",
      size: []
    }
  );
  if (e) {
    r = r.filter((i) => i.trim());
    let s = [];
    for (let i = 1; i <= t; i++)
      r.forEach((n, a) => {
        (a > 0 || i > 1) && s.push(e), s.push(n);
      });
    return s.join(" ");
  }
  return `(${r.join("")})[${t.join("")}]`;
}
ne.prefixTrackValue = P1;
function P1({ gap: B, value: e }) {
  let t = ve(e).nodes.reduce((r, s) => s.type === "function" && s.value === "repeat" ? (r.push({
    type: "word",
    value: i5(s, { gap: B })
  }), r) : B && s.type === "space" ? (r.push(
    {
      type: "space",
      value: " "
    },
    {
      type: "word",
      value: B
    },
    s
  ), r) : (r.push(s), r), []);
  return ve.stringify(t);
}
const n5 = /^\.+$/;
function Mn(B, e) {
  return { end: e, span: e - B, start: B };
}
function C5(B) {
  return B.trim().split(/\s+/g);
}
ne.parseGridAreas = s0;
function s0({ gap: B, rows: e }) {
  return e.reduce((t, r, s) => (B.row && (s *= 2), r.trim() === "" || C5(r).forEach((i, n) => {
    if (!n5.test(i))
      if (B.column && (n *= 2), typeof t[i] > "u")
        t[i] = {
          column: Mn(n + 1, n + 2),
          row: Mn(s + 1, s + 2)
        };
      else {
        let { column: a, row: C } = t[i];
        a.start = Math.min(a.start, n + 1), a.end = Math.max(a.end, n + 2), a.span = a.end - a.start, C.start = Math.min(C.start, s + 1), C.end = Math.max(C.end, s + 2), C.span = C.end - C.start;
      }
  }), t), {});
}
function a5(B) {
  return B.type === "word" && /^\[.+]$/.test(B.value);
}
function Pn(B) {
  return B.areas.length > B.rows.length && B.rows.push("auto"), B;
}
ne.parseTemplate = i0;
function i0({ decl: B, gap: e }) {
  let t = ve(B.value).nodes.reduce(
    (r, s) => {
      let { type: i, value: n } = s;
      return a5(s) || i === "space" || (i === "string" && (r = Pn(r), r.areas.push(n)), (i === "word" || i === "function") && r[r.key].push(ve.stringify(s)), i === "div" && n === "/" && (r.key = "columns", r = Pn(r))), r;
    },
    {
      areas: [],
      columns: [],
      key: "rows",
      rows: []
    }
  );
  return {
    areas: s0({
      gap: e,
      rows: t.areas
    }),
    columns: P1({
      gap: e.column,
      value: t.columns.join(" ")
    }),
    rows: P1({
      gap: e.row,
      value: t.rows.join(" ")
    })
  };
}
function Ar(B, e = !1, t = !1) {
  let r = [
    {
      prop: "-ms-grid-row",
      value: String(B.row.start)
    }
  ];
  return (B.row.span > 1 || e) && r.push({
    prop: "-ms-grid-row-span",
    value: String(B.row.span)
  }), r.push({
    prop: "-ms-grid-column",
    value: String(B.column.start)
  }), (B.column.span > 1 || t) && r.push({
    prop: "-ms-grid-column-span",
    value: String(B.column.span)
  }), r;
}
function Vt(B) {
  return B.type === "atrule" && B.name === "media" ? B : B.parent ? Vt(B.parent) : !1;
}
function Gn(B, e) {
  return B = B.map((t) => {
    let r = gt.space(t), s = gt.comma(t);
    return r.length > s.length && (t = r.slice(-1).join("")), t;
  }), B.map((t) => e.map((s, i) => `${i === 0 ? "" : " "}${s} > ${t}`));
}
function Ln(B, e) {
  return B.selectors.some((t) => e.selectors.includes(t));
}
function o5(B) {
  let e = [];
  return B.walkDecls(/grid-template(-areas)?$/, (t) => {
    let r = t.parent, s = Vt(r), i = lB(t), n = r2(t, i), { areas: a } = i0({ decl: t, gap: n || i }), C = Object.keys(a);
    if (C.length === 0)
      return !0;
    let o = e.reduce((l, { allAreas: u }, f) => u && C.some((h) => u.includes(h)) ? f : l, null);
    if (o !== null) {
      let { allAreas: l, rules: u } = e[o], f = u.some((b) => b.hasDuplicates === !1 && Ln(b, r)), c = !1, h = u.reduce((b, d) => !d.params && Ln(d, r) ? (c = !0, d.duplicateAreaNames) : (c || C.forEach((y) => {
        d.areas[y] && b.push(y);
      }), Fn(b)), []);
      u.forEach((b) => {
        C.forEach((d) => {
          let y = b.areas[d];
          y && y.row.span !== a[d].row.span && (a[d].row.updateSpan = !0), y && y.column.span !== a[d].column.span && (a[d].column.updateSpan = !0);
        });
      }), e[o].allAreas = Fn([...l, ...C]), e[o].rules.push({
        areas: a,
        duplicateAreaNames: h,
        hasDuplicates: !f,
        node: r,
        params: s.params,
        selectors: r.selectors
      });
    } else
      e.push({
        allAreas: C,
        areasCount: 0,
        rules: [
          {
            areas: a,
            duplicateAreaNames: [],
            duplicateRules: [],
            hasDuplicates: !1,
            node: r,
            params: s.params,
            selectors: r.selectors
          }
        ]
      });
  }), e;
}
ne.insertAreas = l5;
function l5(B, e) {
  let t = o5(B);
  if (t.length === 0)
    return;
  let r = {};
  B.walkDecls("grid-area", (s) => {
    let i = s.parent, n = i.first.prop === "-ms-grid-row", a = Vt(i);
    if (e(s))
      return;
    let C = B.index(a || i), o = s.value, l = t.filter((d) => d.allAreas.includes(o))[0];
    if (!l)
      return !0;
    let u = l.allAreas[l.allAreas.length - 1], f = gt.space(i.selector), c = gt.comma(i.selector), h = f.length > 1 && f.length > c.length;
    if (n)
      return !1;
    r[u] || (r[u] = {});
    let b = !1;
    for (let d of l.rules) {
      let y = d.areas[o], x = d.duplicateAreaNames.includes(o);
      if (!y) {
        let g = r[u].lastRule, G;
        g ? G = B.index(g) : G = -1, C > G && (r[u].lastRule = a || i);
        continue;
      }
      if (d.params && !r[u][d.params] && (r[u][d.params] = []), (!d.hasDuplicates || !x) && !d.params)
        Ar(y, !1, !1).reverse().forEach(
          (g) => i.prepend(
            Object.assign(g, {
              raws: {
                between: s.raws.between
              }
            })
          )
        ), r[u].lastRule = i, b = !0;
      else if (d.hasDuplicates && !d.params && !h) {
        let g = i.clone();
        g.removeAll(), Ar(y, y.row.updateSpan, y.column.updateSpan).reverse().forEach(
          (G) => g.prepend(
            Object.assign(G, {
              raws: {
                between: s.raws.between
              }
            })
          )
        ), g.selectors = Gn(
          g.selectors,
          d.selectors
        ), r[u].lastRule && r[u].lastRule.after(g), r[u].lastRule = g, b = !0;
      } else if (d.hasDuplicates && !d.params && h && i.selector.includes(d.selectors[0]))
        i.walkDecls(/-ms-grid-(row|column)/, (g) => g.remove()), Ar(y, y.row.updateSpan, y.column.updateSpan).reverse().forEach(
          (g) => i.prepend(
            Object.assign(g, {
              raws: {
                between: s.raws.between
              }
            })
          )
        );
      else if (d.params) {
        let g = i.clone();
        g.removeAll(), Ar(y, y.row.updateSpan, y.column.updateSpan).reverse().forEach(
          (G) => g.prepend(
            Object.assign(G, {
              raws: {
                between: s.raws.between
              }
            })
          )
        ), d.hasDuplicates && x && (g.selectors = Gn(
          g.selectors,
          d.selectors
        )), g.raws = d.node.raws, B.index(d.node.parent) > C ? d.node.parent.append(g) : r[u][d.params].push(g), b || (r[u].lastRule = a || i);
      }
    }
  }), Object.keys(r).forEach((s) => {
    let i = r[s], n = i.lastRule;
    Object.keys(i).reverse().filter((a) => a !== "lastRule").forEach((a) => {
      i[a].length > 0 && n && (n.after({ name: "media", params: a }), n.next().append(i[a]));
    });
  });
}
ne.warnMissedAreas = u5;
function u5(B, e, t) {
  let r = Object.keys(B);
  e.root().walkDecls("grid-area", (s) => {
    r = r.filter((i) => i !== s.value);
  }), r.length > 0 && e.warn(t, "Can not find grid areas: " + r.join(", "));
}
ne.warnTemplateSelectorNotFound = f5;
function f5(B, e) {
  let t = B.parent, r = B.root(), s = !1, i = gt.space(t.selector).filter((n) => n !== ">").slice(0, -1);
  if (i.length > 0) {
    let n = !1, a = null;
    r.walkDecls(/grid-template(-areas)?$/, (C) => {
      let o = C.parent, l = o.selectors, { areas: u } = i0({ decl: C, gap: lB(C) }), f = u[B.value];
      for (let c of l) {
        if (n)
          break;
        n = gt.space(c).filter((b) => b !== ">").every(
          (b, d) => b === i[d]
        );
      }
      if (n || !f)
        return !0;
      a || (a = o.selector), a && a !== o.selector && (s = !0);
    }), !n && s && B.warn(
      e,
      `Autoprefixer cannot find a grid-template containing the duplicate grid-area "${B.value}" with full selector matching: ${i.join(" ")}`
    );
  }
}
ne.warnIfGridRowColumnExists = c5;
function c5(B, e) {
  let t = B.parent, r = [];
  t.walkDecls(/^grid-(row|column)/, (s) => {
    !s.prop.endsWith("-end") && !s.value.startsWith("span") && !s.prop.endsWith("-gap") && r.push(s);
  }), r.length > 0 && r.forEach((s) => {
    s.warn(
      e,
      `You already have a grid-area declaration present in the rule. You should use either grid-area or ${s.prop}, not both`
    );
  });
}
ne.getGridGap = lB;
function lB(B) {
  let e = {}, t = /^(grid-)?((row|column)-)?gap$/;
  return B.parent.walkDecls(t, ({ prop: r, value: s }) => {
    if (/^(grid-)?gap$/.test(r)) {
      let [i, , n] = ve(s).nodes;
      e.row = i && ve.stringify(i), e.column = n ? ve.stringify(n) : e.row;
    }
    /^(grid-)?row-gap$/.test(r) && (e.row = s), /^(grid-)?column-gap$/.test(r) && (e.column = s);
  }), e;
}
function Nn(B) {
  if (!B)
    return [];
  let e = ve(B), t, r;
  return e.walk((s) => {
    s.type === "word" && /min|max/g.test(s.value) ? t = s.value : s.value.includes("px") && (r = parseInt(s.value.replace(/\D/g, "")));
  }), [t, r];
}
function D5(B, e) {
  let t, r = M1(B), s = M1(e);
  if (r[0].length < s[0].length)
    return !1;
  if (r[0].length > s[0].length) {
    let i = r[0].reduce((n, [a], C) => {
      let o = s[0][0][0];
      return a === o ? C : !1;
    }, !1);
    i && (t = s[0].every((n, a) => n.every(
      (C, o) => (
        // because selectorA has more space elements, we need to slice
        // selectorA array by 'idx' number to compare them
        r[0].slice(i)[a][o] === C
      )
    )));
  } else
    t = s.some((i) => i.every((n, a) => n.every(
      (C, o) => r[0][a][o] === C
    )));
  return t;
}
ne.inheritGridGap = r2;
function r2(B, e) {
  let t = B.parent, r = Vt(t), s = t.root(), i = M1(t.selector);
  if (Object.keys(e).length > 0)
    return !1;
  let [n] = Nn(r.params), a = i[0], C = e5(a[a.length - 1][0]), o = new RegExp(`(${C}$)|(${C}[,.])`), l;
  return s.walkRules(o, (u) => {
    let f;
    if (t.toString() === u.toString())
      return !1;
    if (u.walkDecls("grid-gap", (h) => f = lB(h)), !f || Object.keys(f).length === 0 || !D5(t.selector, u.selector))
      return !0;
    let c = Vt(u);
    if (c) {
      if (Nn(c.params)[0] === n)
        return l = f, !0;
    } else
      return l = f, !0;
  }), l && Object.keys(l).length > 0 ? l : !1;
}
ne.warnGridGap = d5;
function d5({ decl: B, gap: e, hasColumns: t, result: r }) {
  let s = e.row && e.column;
  !t && (s || e.column && !e.row) && (delete e.column, B.warn(
    r,
    "Can not implement grid-gap without grid-template-columns"
  ));
}
function Hn(B) {
  return ve(B).nodes.reduce((t, r) => {
    if (r.type === "function" && r.value === "repeat") {
      let s = "count", [i, n] = r.nodes.reduce(
        (a, C) => C.type === "word" && s === "count" ? (a[0] = Math.abs(parseInt(C.value)), a) : C.type === "div" && C.value === "," ? (s = "value", a) : (s === "value" && (a[1] += ve.stringify(C)), a),
        [0, ""]
      );
      if (i)
        for (let a = 0; a < i; a++)
          t.push(n);
      return t;
    }
    return r.type === "space" || t.push(ve.stringify(r)), t;
  }, []);
}
ne.autoplaceGridItems = p5;
function p5(B, e, t, r = "row") {
  let { parent: s } = B, i = s.nodes.find((f) => f.prop === "grid-template-rows"), n = Hn(i.value), a = Hn(B.value), C = n.map((f, c) => Array.from(
    { length: a.length },
    (h, b) => b + c * a.length + 1
  ).join(" ")), o = s0({ gap: t, rows: C }), l = Object.keys(o), u = l.map((f) => o[f]);
  r.includes("column") && (u = u.sort((f, c) => f.column.start - c.column.start)), u.reverse().forEach((f, c) => {
    let { column: h, row: b } = f, d = s.selectors.map((x) => x + ` > *:nth-child(${l.length - c})`).join(", "), y = s.clone().removeAll();
    y.selector = d, y.append({ prop: "-ms-grid-row", value: b.start }), y.append({ prop: "-ms-grid-column", value: h.start }), s.after(y);
  });
}
let h5 = K, lt = ne;
class B2 extends h5 {
  /**
   * Translate grid-area to separate -ms- prefixed properties
   */
  insert(e, t, r, s) {
    if (t !== "-ms-") return super.insert(e, t, r);
    let i = lt.parse(e), [n, a] = lt.translate(i, 0, 2), [C, o] = lt.translate(i, 1, 3);
    [
      ["grid-row", n],
      ["grid-row-span", a],
      ["grid-column", C],
      ["grid-column-span", o]
    ].forEach(([l, u]) => {
      lt.insertDecl(e, l, u);
    }), lt.warnTemplateSelectorNotFound(e, s), lt.warnIfGridRowColumnExists(e, s);
  }
}
B2.names = ["grid-area"];
var m5 = B2;
let b5 = K;
class s2 extends b5 {
  /**
   * Do not prefix flexbox values
   */
  check(e) {
    return !e.value.includes("flex-") && e.value !== "baseline";
  }
  /**
   * Change IE property back
   */
  normalize() {
    return "justify-self";
  }
  /**
   * Change property name for IE
   */
  prefixed(e, t) {
    return t + "grid-column-align";
  }
}
s2.names = ["grid-column-align"];
var g5 = s2;
let v5 = K, { isPureNumber: w5 } = _;
class i2 extends v5 {
  /**
   * Change repeating syntax for IE
   */
  insert(e, t, r, s) {
    if (t !== "-ms-") return super.insert(e, t, r);
    let i = this.clone(e), n = e.prop.replace(/end$/, "start"), a = t + e.prop.replace(/end$/, "span");
    if (!e.parent.some((C) => C.prop === a)) {
      if (i.prop = a, e.value.includes("span"))
        i.value = e.value.replace(/span\s/i, "");
      else {
        let C;
        if (e.parent.walkDecls(n, (o) => {
          C = o;
        }), C)
          if (w5(C.value)) {
            let o = Number(e.value) - Number(C.value) + "";
            i.value = o;
          } else
            return;
        else
          e.warn(
            s,
            `Can not prefix ${e.prop} (${n} is not found)`
          );
      }
      e.cloneBefore(i);
    }
  }
}
i2.names = ["grid-row-end", "grid-column-end"];
var y5 = i2;
let x5 = K;
class n2 extends x5 {
  /**
   * Do not prefix flexbox values
   */
  check(e) {
    return !e.value.includes("flex-") && e.value !== "baseline";
  }
  /**
   * Change IE property back
   */
  normalize() {
    return "align-self";
  }
  /**
   * Change property name for IE
   */
  prefixed(e, t) {
    return t + "grid-row-align";
  }
}
n2.names = ["grid-row-align"];
var k5 = n2;
let A5 = K, e1 = ne;
class C2 extends A5 {
  /**
   * Translate grid-row / grid-column to separate -ms- prefixed properties
   */
  insert(e, t, r) {
    if (t !== "-ms-") return super.insert(e, t, r);
    let s = e1.parse(e), [i, n] = e1.translate(s, 0, 1);
    s[0] && s[0].includes("span") && (n = s[0].join("").replace(/\D/g, "")), [
      [e.prop, i],
      [`${e.prop}-span`, n]
    ].forEach(([C, o]) => {
      e1.insertDecl(e, C, o);
    });
  }
}
C2.names = ["grid-row", "grid-column"];
var E5 = C2;
let Kn = oB, S5 = Oe, I5 = ne.insertAreas;
const j5 = /(^|[^-])linear-gradient\(\s*(top|left|right|bottom)/i, O5 = /(^|[^-])radial-gradient\(\s*\d+(\w*|%)\s+\d+(\w*|%)\s*,/i, F5 = /(!\s*)?autoprefixer:\s*ignore\s+next/i, R5 = /(!\s*)?autoprefixer\s*grid:\s*(on|off|(no-)?autoplace)/i, M5 = [
  "width",
  "height",
  "min-width",
  "max-width",
  "min-height",
  "max-height",
  "inline-size",
  "min-inline-size",
  "max-inline-size",
  "block-size",
  "min-block-size",
  "max-block-size"
];
function t1(B) {
  return B.parent.some(
    (e) => e.prop === "grid-template" || e.prop === "grid-template-areas"
  );
}
function P5(B) {
  let e = B.parent.some((r) => r.prop === "grid-template-rows"), t = B.parent.some((r) => r.prop === "grid-template-columns");
  return e && t;
}
function Jn(B) {
  return B.parent.nodes.some((e) => {
    if (e.type !== "decl") return !1;
    let t = e.prop === "display" && /(inline-)?grid/.test(e.value), r = e.prop.startsWith("grid-template"), s = /^grid-([A-z]+-)?gap/.test(e.prop);
    return t || r || s;
  });
}
let G5 = class {
  constructor(e) {
    this.prefixes = e;
  }
  /**
   * Add necessary prefixes
   */
  add(e, t) {
    let r = this.prefixes.add["@resolution"], s = this.prefixes.add["@keyframes"], i = this.prefixes.add["@viewport"], n = this.prefixes.add["@supports"];
    e.walkAtRules((C) => {
      if (C.name === "keyframes") {
        if (!this.disabled(C, t))
          return s && s.process(C);
      } else if (C.name === "viewport") {
        if (!this.disabled(C, t))
          return i && i.process(C);
      } else if (C.name === "supports") {
        if (this.prefixes.options.supports !== !1 && !this.disabled(C, t))
          return n.process(C);
      } else if (C.name === "media" && C.params.includes("-resolution") && !this.disabled(C, t))
        return r && r.process(C);
    }), e.walkRules((C) => {
      if (!this.disabled(C, t))
        return this.prefixes.add.selectors.map((o) => o.process(C, t));
    });
    let a = this.gridStatus(e, t) && this.prefixes.add["grid-area"] && this.prefixes.add["grid-area"].prefixes;
    return e.walkDecls((C) => {
      if (this.disabledDecl(C, t)) return;
      let o = C.parent, l = C.prop, u = C.value;
      if (l === "color-adjust")
        o.every((c) => c.prop !== "print-color-adjust") && t.warn(
          "Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.",
          { node: C }
        );
      else if (l === "grid-row-span") {
        t.warn(
          "grid-row-span is not part of final Grid Layout. Use grid-row.",
          { node: C }
        );
        return;
      } else if (l === "grid-column-span") {
        t.warn(
          "grid-column-span is not part of final Grid Layout. Use grid-column.",
          { node: C }
        );
        return;
      } else if (l === "display" && u === "box") {
        t.warn(
          "You should write display: flex by final spec instead of display: box",
          { node: C }
        );
        return;
      } else if (l === "text-emphasis-position")
        (u === "under" || u === "over") && t.warn(
          "You should use 2 values for text-emphasis-position For example, `under left` instead of just `under`.",
          { node: C }
        );
      else if (l === "text-decoration-skip" && u === "ink")
        t.warn(
          "Replace text-decoration-skip: ink to text-decoration-skip-ink: auto, because spec had been changed",
          { node: C }
        );
      else {
        if (a && this.gridStatus(C, t))
          if (C.value === "subgrid" && t.warn("IE does not support subgrid", { node: C }), /^(align|justify|place)-items$/.test(l) && Jn(C)) {
            let c = l.replace("-items", "-self");
            t.warn(
              `IE does not support ${l} on grid containers. Try using ${c} on child elements instead: ${C.parent.selector} > * { ${c}: ${C.value} }`,
              { node: C }
            );
          } else if (/^(align|justify|place)-content$/.test(l) && Jn(C))
            t.warn(`IE does not support ${C.prop} on grid containers`, {
              node: C
            });
          else if (l === "display" && C.value === "contents") {
            t.warn(
              "Please do not use display: contents; if you have grid setting enabled",
              { node: C }
            );
            return;
          } else if (C.prop === "grid-gap") {
            let c = this.gridStatus(C, t);
            c === "autoplace" && !P5(C) && !t1(C) ? t.warn(
              "grid-gap only works if grid-template(-areas) is being used or both rows and columns have been declared and cells have not been manually placed inside the explicit grid",
              { node: C }
            ) : (c === !0 || c === "no-autoplace") && !t1(C) && t.warn(
              "grid-gap only works if grid-template(-areas) is being used",
              { node: C }
            );
          } else if (l === "grid-auto-columns") {
            t.warn("grid-auto-columns is not supported by IE", {
              node: C
            });
            return;
          } else if (l === "grid-auto-rows") {
            t.warn("grid-auto-rows is not supported by IE", { node: C });
            return;
          } else if (l === "grid-auto-flow") {
            let c = o.some((b) => b.prop === "grid-template-rows"), h = o.some((b) => b.prop === "grid-template-columns");
            t1(C) ? t.warn("grid-auto-flow is not supported by IE", {
              node: C
            }) : u.includes("dense") ? t.warn("grid-auto-flow: dense is not supported by IE", {
              node: C
            }) : !c && !h && t.warn(
              "grid-auto-flow works only if grid-template-rows and grid-template-columns are present in the same rule",
              { node: C }
            );
            return;
          } else if (u.includes("auto-fit")) {
            t.warn("auto-fit value is not supported by IE", {
              node: C,
              word: "auto-fit"
            });
            return;
          } else if (u.includes("auto-fill")) {
            t.warn("auto-fill value is not supported by IE", {
              node: C,
              word: "auto-fill"
            });
            return;
          } else l.startsWith("grid-template") && u.includes("[") && t.warn(
            "Autoprefixer currently does not support line names. Try using grid-template-areas instead.",
            { node: C, word: "[" }
          );
        if (u.includes("radial-gradient"))
          if (O5.test(C.value))
            t.warn(
              "Gradient has outdated direction syntax. New syntax is like `closest-side at 0 0` instead of `0 0, closest-side`.",
              { node: C }
            );
          else {
            let c = Kn(u);
            for (let h of c.nodes)
              if (h.type === "function" && h.value === "radial-gradient")
                for (let b of h.nodes)
                  b.type === "word" && (b.value === "cover" ? t.warn(
                    "Gradient has outdated direction syntax. Replace `cover` to `farthest-corner`.",
                    { node: C }
                  ) : b.value === "contain" && t.warn(
                    "Gradient has outdated direction syntax. Replace `contain` to `closest-side`.",
                    { node: C }
                  ));
          }
        u.includes("linear-gradient") && j5.test(u) && t.warn(
          "Gradient has outdated direction syntax. New syntax is like `to left` instead of `right`.",
          { node: C }
        );
      }
      M5.includes(C.prop) && (C.value.includes("-fill-available") || (C.value.includes("fill-available") ? t.warn(
        "Replace fill-available to stretch, because spec had been changed",
        { node: C }
      ) : C.value.includes("fill") && Kn(u).nodes.some((h) => h.type === "word" && h.value === "fill") && t.warn(
        "Replace fill to stretch, because spec had been changed",
        { node: C }
      )));
      let f;
      if (C.prop === "transition" || C.prop === "transition-property")
        return this.prefixes.transition.add(C, t);
      if (C.prop === "align-self") {
        if (this.displayType(C) !== "grid" && this.prefixes.options.flexbox !== !1 && (f = this.prefixes.add["align-self"], f && f.prefixes && f.process(C)), this.gridStatus(C, t) !== !1 && (f = this.prefixes.add["grid-row-align"], f && f.prefixes))
          return f.process(C, t);
      } else if (C.prop === "justify-self") {
        if (this.gridStatus(C, t) !== !1 && (f = this.prefixes.add["grid-column-align"], f && f.prefixes))
          return f.process(C, t);
      } else if (C.prop === "place-self") {
        if (f = this.prefixes.add["place-self"], f && f.prefixes && this.gridStatus(C, t) !== !1)
          return f.process(C, t);
      } else if (f = this.prefixes.add[C.prop], f && f.prefixes)
        return f.process(C, t);
    }), this.gridStatus(e, t) && I5(e, this.disabled), e.walkDecls((C) => {
      if (this.disabledValue(C, t)) return;
      let o = this.prefixes.unprefixed(C.prop), l = this.prefixes.values("add", o);
      if (Array.isArray(l))
        for (let u of l)
          u.process && u.process(C, t);
      S5.save(this.prefixes, C);
    });
  }
  /**
   * Check for control comment and global options
   */
  disabled(e, t) {
    if (!e) return !1;
    if (e._autoprefixerDisabled !== void 0)
      return e._autoprefixerDisabled;
    if (e.parent) {
      let s = e.prev();
      if (s && s.type === "comment" && F5.test(s.text))
        return e._autoprefixerDisabled = !0, e._autoprefixerSelfDisabled = !0, !0;
    }
    let r = null;
    if (e.nodes) {
      let s;
      e.each((i) => {
        i.type === "comment" && /(!\s*)?autoprefixer:\s*(off|on)/i.test(i.text) && (typeof s < "u" ? t.warn(
          "Second Autoprefixer control comment was ignored. Autoprefixer applies control comment to whole block, not to next rules.",
          { node: i }
        ) : s = /on/i.test(i.text));
      }), s !== void 0 && (r = !s);
    }
    if (!e.nodes || r === null)
      if (e.parent) {
        let s = this.disabled(e.parent, t);
        e.parent._autoprefixerSelfDisabled === !0 ? r = !1 : r = s;
      } else
        r = !1;
    return e._autoprefixerDisabled = r, r;
  }
  /**
   * Check for grid/flexbox options.
   */
  disabledDecl(e, t) {
    if (e.type === "decl" && this.gridStatus(e, t) === !1 && (e.prop.includes("grid") || e.prop === "justify-items"))
      return !0;
    if (e.type === "decl" && this.prefixes.options.flexbox === !1) {
      let r = ["order", "justify-content", "align-items", "align-content"];
      if (e.prop.includes("flex") || r.includes(e.prop))
        return !0;
    }
    return this.disabled(e, t);
  }
  /**
   * Check for grid/flexbox options.
   */
  disabledValue(e, t) {
    return this.gridStatus(e, t) === !1 && e.type === "decl" && e.prop === "display" && e.value.includes("grid") || this.prefixes.options.flexbox === !1 && e.type === "decl" && e.prop === "display" && e.value.includes("flex") || e.type === "decl" && e.prop === "content" ? !0 : this.disabled(e, t);
  }
  /**
   * Is it flebox or grid rule
   */
  displayType(e) {
    for (let t of e.parent.nodes)
      if (t.prop === "display") {
        if (t.value.includes("flex"))
          return "flex";
        if (t.value.includes("grid"))
          return "grid";
      }
    return !1;
  }
  /**
   * Set grid option via control comment
   */
  gridStatus(e, t) {
    if (!e) return !1;
    if (e._autoprefixerGridStatus !== void 0)
      return e._autoprefixerGridStatus;
    let r = null;
    if (e.nodes) {
      let s;
      e.each((i) => {
        if (i.type === "comment" && R5.test(i.text)) {
          let n = /:\s*autoplace/i.test(i.text), a = /no-autoplace/i.test(i.text);
          typeof s < "u" ? t.warn(
            "Second Autoprefixer grid control comment was ignored. Autoprefixer applies control comments to the whole block, not to the next rules.",
            { node: i }
          ) : n ? s = "autoplace" : a ? s = !0 : s = /on/i.test(i.text);
        }
      }), s !== void 0 && (r = s);
    }
    if (e.type === "atrule" && e.name === "supports") {
      let s = e.params;
      s.includes("grid") && s.includes("auto") && (r = !1);
    }
    if (!e.nodes || r === null)
      if (e.parent) {
        let s = this.gridStatus(e.parent, t);
        e.parent._autoprefixerSelfDisabled === !0 ? r = !1 : r = s;
      } else typeof this.prefixes.options.grid < "u" ? r = this.prefixes.options.grid : typeof process.env.AUTOPREFIXER_GRID < "u" ? process.env.AUTOPREFIXER_GRID === "autoplace" ? r = "autoplace" : r = !0 : r = !1;
    return e._autoprefixerGridStatus = r, r;
  }
  /**
   * Normalize spaces in cascade declaration group
   */
  reduceSpaces(e) {
    let t = !1;
    if (this.prefixes.group(e).up(() => (t = !0, !0)), t)
      return;
    let r = e.raw("before").split(`
`), s = r[r.length - 1].length, i = !1;
    this.prefixes.group(e).down((n) => {
      r = n.raw("before").split(`
`);
      let a = r.length - 1;
      r[a].length > s && (i === !1 && (i = r[a].length - s), r[a] = r[a].slice(0, -i), n.raws.before = r.join(`
`));
    });
  }
  /**
   * Remove unnecessary pefixes
   */
  remove(e, t) {
    let r = this.prefixes.remove["@resolution"];
    return e.walkAtRules((s, i) => {
      this.prefixes.remove[`@${s.name}`] ? this.disabled(s, t) || s.parent.removeChild(i) : s.name === "media" && s.params.includes("-resolution") && r && r.clean(s);
    }), e.walkRules((s, i) => {
      if (!this.disabled(s, t)) {
        for (let n of this.prefixes.remove.selectors)
          if (n.check(s)) {
            s.parent.removeChild(i);
            return;
          }
      }
    }), e.walkDecls((s, i) => {
      if (this.disabled(s, t)) return;
      let n = s.parent, a = this.prefixes.unprefixed(s.prop);
      if ((s.prop === "transition" || s.prop === "transition-property") && this.prefixes.transition.remove(s), this.prefixes.remove[s.prop] && this.prefixes.remove[s.prop].remove) {
        let C = this.prefixes.group(s).down((o) => this.prefixes.normalize(o.prop) === a);
        if (a === "flex-flow" && (C = !0), s.prop === "-webkit-box-orient") {
          let o = { "flex-direction": !0, "flex-flow": !0 };
          if (!s.parent.some((l) => o[l.prop])) return;
        }
        if (C && !this.withHackValue(s)) {
          s.raw("before").includes(`
`) && this.reduceSpaces(s), n.removeChild(i);
          return;
        }
      }
      for (let C of this.prefixes.values("remove", a)) {
        if (!C.check || !C.check(s.value)) continue;
        if (a = C.unprefixed, this.prefixes.group(s).down((l) => l.value.includes(a))) {
          n.removeChild(i);
          return;
        }
      }
    });
  }
  /**
   * Some rare old values, which is not in standard
   */
  withHackValue(e) {
    return e.prop === "-webkit-background-clip" && e.value === "text" || // Do not remove -webkit-box-orient when -webkit-line-clamp is present.
    // https://github.com/postcss/autoprefixer/issues/1510
    e.prop === "-webkit-box-orient" && e.parent.some((t) => t.prop === "-webkit-line-clamp");
  }
};
var a2 = G5;
let L5 = K, N5 = a2, {
  autoplaceGridItems: H5,
  getGridGap: K5,
  inheritGridGap: J5,
  prefixTrackProp: Tn,
  prefixTrackValue: T5
} = ne;
class o2 extends L5 {
  insert(e, t, r, s) {
    if (t !== "-ms-") return super.insert(e, t, r);
    let { parent: i, prop: n, value: a } = e, C = n.includes("rows"), o = n.includes("columns"), l = i.some(
      (x) => x.prop === "grid-template" || x.prop === "grid-template-areas"
    );
    if (l && C)
      return !1;
    let u = new N5({ options: {} }), f = u.gridStatus(i, s), c = K5(e);
    c = J5(e, c) || c;
    let h = C ? c.row : c.column;
    (f === "no-autoplace" || f === !0) && !l && (h = null);
    let b = T5({
      gap: h,
      value: a
    });
    e.cloneBefore({
      prop: Tn({ prefix: t, prop: n }),
      value: b
    });
    let d = i.nodes.find((x) => x.prop === "grid-auto-flow"), y = "row";
    if (d && !u.disabled(d, s) && (y = d.value.trim()), f === "autoplace") {
      let x = i.nodes.find((G) => G.prop === "grid-template-rows");
      if (!x && l)
        return;
      if (!x && !l) {
        e.warn(
          s,
          "Autoplacement does not work without grid-template-rows property"
        );
        return;
      }
      !i.nodes.find((G) => G.prop === "grid-template-columns") && !l && e.warn(
        s,
        "Autoplacement does not work without grid-template-columns property"
      ), o && !l && H5(e, s, c, y);
    }
  }
  /**
   * Change IE property back
   */
  normalize(e) {
    return e.replace(/^grid-(rows|columns)/, "grid-template-$1");
  }
  /**
   * Change property name for IE
   */
  prefixed(e, t) {
    return t === "-ms-" ? Tn({ prefix: t, prop: e }) : super.prefixed(e, t);
  }
}
o2.names = [
  "grid-template-rows",
  "grid-template-columns",
  "grid-rows",
  "grid-columns"
];
var z5 = o2;
let q5 = K;
class l2 extends q5 {
  /**
   * Do not add prefix for unsupported value in IE
   */
  check(e) {
    let t = e.value;
    return !t.includes("/") && !t.includes("span");
  }
  /**
   * Return a final spec property
   */
  normalize(e) {
    return e.replace("-start", "");
  }
  /**
   * Change property name for IE
   */
  prefixed(e, t) {
    let r = super.prefixed(e, t);
    return t === "-ms-" && (r = r.replace("-start", "")), r;
  }
}
l2.names = ["grid-row-start", "grid-column-start"];
var U5 = l2;
let V5 = K, {
  getGridGap: W5,
  inheritGridGap: Q5,
  parseTemplate: Y5,
  warnGridGap: X5,
  warnMissedAreas: Z5
} = ne;
class u2 extends V5 {
  /**
   * Translate grid-template to separate -ms- prefixed properties
   */
  insert(e, t, r, s) {
    if (t !== "-ms-") return super.insert(e, t, r);
    if (e.parent.some((c) => c.prop === "-ms-grid-rows"))
      return;
    let i = W5(e), n = Q5(e, i), { areas: a, columns: C, rows: o } = Y5({
      decl: e,
      gap: n || i
    }), l = Object.keys(a).length > 0, u = !!o, f = !!C;
    return X5({
      decl: e,
      gap: i,
      hasColumns: f,
      result: s
    }), Z5(a, e, s), (u && f || l) && e.cloneBefore({
      prop: "-ms-grid-rows",
      raws: {},
      value: o
    }), f && e.cloneBefore({
      prop: "-ms-grid-columns",
      raws: {},
      value: C
    }), e;
  }
}
u2.names = ["grid-template"];
var $5 = u2;
let _5 = K, {
  getGridGap: ep,
  inheritGridGap: tp,
  parseGridAreas: rp,
  prefixTrackProp: Bp,
  prefixTrackValue: zn,
  warnGridGap: sp,
  warnMissedAreas: ip
} = ne;
function np(B) {
  return B.trim().slice(1, -1).split(/["']\s*["']?/g);
}
class f2 extends _5 {
  /**
   * Translate grid-template-areas to separate -ms- prefixed properties
   */
  insert(e, t, r, s) {
    if (t !== "-ms-") return super.insert(e, t, r);
    let i = !1, n = !1, a = e.parent, C = ep(e);
    C = tp(e, C) || C, a.walkDecls(/-ms-grid-rows/, (u) => u.remove()), a.walkDecls(/grid-template-(rows|columns)/, (u) => {
      if (u.prop === "grid-template-rows") {
        n = !0;
        let { prop: f, value: c } = u;
        u.cloneBefore({
          prop: Bp({ prefix: t, prop: f }),
          value: zn({ gap: C.row, value: c })
        });
      } else
        i = !0;
    });
    let o = np(e.value);
    i && !n && C.row && o.length > 1 && e.cloneBefore({
      prop: "-ms-grid-rows",
      raws: {},
      value: zn({
        gap: C.row,
        value: `repeat(${o.length}, auto)`
      })
    }), sp({
      decl: e,
      gap: C,
      hasColumns: i,
      result: s
    });
    let l = rp({
      gap: C,
      rows: o
    });
    return ip(l, e, s), e;
  }
}
f2.names = ["grid-template-areas"];
var Cp = f2;
let ap = K;
class c2 extends ap {
  /**
   * Add hack only for crisp-edges
   */
  check(e) {
    return e.value === "pixelated";
  }
  /**
   * Return property name by spec
   */
  normalize() {
    return "image-rendering";
  }
  /**
   * Change property name for IE
   */
  prefixed(e, t) {
    return t === "-ms-" ? "-ms-interpolation-mode" : super.prefixed(e, t);
  }
  /**
   * Warn on old value
   */
  process(e, t) {
    return super.process(e, t);
  }
  /**
   * Change property and value for IE
   */
  set(e, t) {
    return t !== "-ms-" ? super.set(e, t) : (e.prop = "-ms-interpolation-mode", e.value = "nearest-neighbor", e);
  }
}
c2.names = ["image-rendering", "interpolation-mode"];
var op = c2;
let lp = Oe;
class D2 extends lp {
  /**
   * Use non-standard name for WebKit and Firefox
   */
  replace(e, t) {
    let r = super.replace(e, t);
    return t === "-webkit-" && (r = r.replace(/("[^"]+"|'[^']+')(\s+\d+\w)/gi, "url($1)$2")), r;
  }
}
D2.names = ["image-set"];
var up = D2;
let fp = K;
class d2 extends fp {
  /**
   * Return property name by spec
   */
  normalize(e) {
    return e.replace(/(margin|padding|border)-(start|end)/, "$1-inline-$2");
  }
  /**
   * Use old syntax for -moz- and -webkit-
   */
  prefixed(e, t) {
    return t + e.replace("-inline", "");
  }
}
d2.names = [
  "border-inline-start",
  "border-inline-end",
  "margin-inline-start",
  "margin-inline-end",
  "padding-inline-start",
  "padding-inline-end",
  "border-start",
  "border-end",
  "margin-start",
  "margin-end",
  "padding-start",
  "padding-end"
];
var cp = d2;
let Dp = er, dp = Oe;
function qn(B) {
  return new RegExp(`(^|[\\s,(])(${B}($|[\\s),]))`, "gi");
}
class p2 extends dp {
  add(e, t) {
    if (!(e.prop.includes("grid") && t !== "-webkit-"))
      return super.add(e, t);
  }
  isStretch() {
    return this.name === "stretch" || this.name === "fill" || this.name === "fill-available";
  }
  old(e) {
    let t = e + this.name;
    return this.isStretch() && (e === "-moz-" ? t = "-moz-available" : e === "-webkit-" && (t = "-webkit-fill-available")), new Dp(this.name, t, t, qn(t));
  }
  regexp() {
    return this.regexpCache || (this.regexpCache = qn(this.name)), this.regexpCache;
  }
  replace(e, t) {
    return t === "-moz-" && this.isStretch() ? e.replace(this.regexp(), "$1-moz-available$3") : t === "-webkit-" && this.isStretch() ? e.replace(this.regexp(), "$1-webkit-fill-available$3") : super.replace(e, t);
  }
}
p2.names = [
  "max-content",
  "min-content",
  "fit-content",
  "fill",
  "fill-available",
  "stretch"
];
var pp = p2;
let hp = K, Un = we;
class tr extends hp {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "justify-content";
  }
  /**
   * Change property name for 2009 and 2012 specs
   */
  prefixed(e, t) {
    let r;
    return [r, t] = Un(t), r === 2009 ? t + "box-pack" : r === 2012 ? t + "flex-pack" : super.prefixed(e, t);
  }
  /**
   * Change value for 2009 and 2012 specs
   */
  set(e, t) {
    let r = Un(t)[0];
    if (r === 2009 || r === 2012) {
      let s = tr.oldValues[e.value] || e.value;
      if (e.value = s, r !== 2009 || s !== "distribute")
        return super.set(e, t);
    } else if (r === "final")
      return super.set(e, t);
  }
}
tr.names = ["justify-content", "flex-pack", "box-pack"];
tr.oldValues = {
  "flex-end": "end",
  "flex-start": "start",
  "space-around": "distribute",
  "space-between": "justify"
};
var mp = tr;
let bp = K;
class h2 extends bp {
  /**
   * Return property name by final spec
   */
  normalize() {
    return this.name.replace("box-image", "border");
  }
  /**
   * Return flex property for 2012 spec
   */
  prefixed(e, t) {
    let r = super.prefixed(e, t);
    return t === "-webkit-" && (r = r.replace("border", "box-image")), r;
  }
}
h2.names = [
  "mask-border",
  "mask-border-source",
  "mask-border-slice",
  "mask-border-width",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-box-image",
  "mask-box-image-source",
  "mask-box-image-slice",
  "mask-box-image-width",
  "mask-box-image-outset",
  "mask-box-image-repeat"
];
var gp = h2;
let vp = K;
class Te extends vp {
  /**
   * Prefix mask-composite for webkit
   */
  insert(e, t, r) {
    let s = e.prop === "mask-composite", i;
    s ? i = e.value.split(",") : i = e.value.match(Te.regexp) || [], i = i.map((o) => o.trim()).filter((o) => o);
    let n = i.length, a;
    if (n && (a = this.clone(e), a.value = i.map((o) => Te.oldValues[o] || o).join(", "), i.includes("intersect") && (a.value += ", xor"), a.prop = t + "mask-composite"), s)
      return n ? (this.needCascade(e) && (a.raws.before = this.calcBefore(r, e, t)), e.parent.insertBefore(e, a)) : void 0;
    let C = this.clone(e);
    return C.prop = t + C.prop, n && (C.value = C.value.replace(Te.regexp, "")), this.needCascade(e) && (C.raws.before = this.calcBefore(r, e, t)), e.parent.insertBefore(e, C), n ? (this.needCascade(e) && (a.raws.before = this.calcBefore(r, e, t)), e.parent.insertBefore(e, a)) : e;
  }
}
Te.names = ["mask", "mask-composite"];
Te.oldValues = {
  add: "source-over",
  exclude: "xor",
  intersect: "source-in",
  subtract: "source-out"
};
Te.regexp = new RegExp(
  `\\s+(${Object.keys(Te.oldValues).join(
    "|"
  )})\\b(?!\\))\\s*(?=[,])`,
  "ig"
);
var wp = Te;
let yp = K, Vn = we;
class m2 extends yp {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "order";
  }
  /**
   * Change property name for 2009 and 2012 specs
   */
  prefixed(e, t) {
    let r;
    return [r, t] = Vn(t), r === 2009 ? t + "box-ordinal-group" : r === 2012 ? t + "flex-order" : super.prefixed(e, t);
  }
  /**
   * Fix value for 2009 spec
   */
  set(e, t) {
    return Vn(t)[0] === 2009 && /\d/.test(e.value) ? (e.value = (parseInt(e.value) + 1).toString(), super.set(e, t)) : super.set(e, t);
  }
}
m2.names = ["order", "flex-order", "box-ordinal-group"];
var xp = m2;
let kp = K;
class b2 extends kp {
  /**
   * Return property name by spec
   */
  normalize() {
    return "overscroll-behavior";
  }
  /**
   * Change property name for IE
   */
  prefixed(e, t) {
    return t + "scroll-chaining";
  }
  /**
   * Change value for IE
   */
  set(e, t) {
    return e.value === "auto" ? e.value = "chained" : (e.value === "none" || e.value === "contain") && (e.value = "none"), super.set(e, t);
  }
}
b2.names = ["overscroll-behavior", "scroll-chaining"];
var Ap = b2;
let Wn = er, Ep = Oe;
class g2 extends Ep {
  /**
   * Different name for WebKit and Firefox
   */
  old(e) {
    return e === "-webkit-" ? new Wn(this.name, "-webkit-optimize-contrast") : e === "-moz-" ? new Wn(this.name, "-moz-crisp-edges") : super.old(e);
  }
  /**
   * Use non-standard name for WebKit and Firefox
   */
  replace(e, t) {
    return t === "-webkit-" ? e.replace(this.regexp(), "$1-webkit-optimize-contrast") : t === "-moz-" ? e.replace(this.regexp(), "$1-moz-crisp-edges") : super.replace(e, t);
  }
}
g2.names = ["pixelated"];
var Sp = g2;
let Ip = K, Ft = ne;
class v2 extends Ip {
  /**
   * Translate place-self to separate -ms- prefixed properties
   */
  insert(e, t, r) {
    if (t !== "-ms-") return super.insert(e, t, r);
    if (e.parent.some((n) => n.prop === "-ms-grid-row-align"))
      return;
    let [[s, i]] = Ft.parse(e);
    i ? (Ft.insertDecl(e, "grid-row-align", s), Ft.insertDecl(e, "grid-column-align", i)) : (Ft.insertDecl(e, "grid-row-align", s), Ft.insertDecl(e, "grid-column-align", s));
  }
}
v2.names = ["place-self"];
var jp = v2;
let Op = Et;
class w2 extends Op {
  /**
   * Add old mozilla to possible prefixes
   */
  possible() {
    return super.possible().concat(["-moz- old", "-ms- old"]);
  }
  /**
   * Return different selectors depend on prefix
   */
  prefixed(e) {
    return e === "-webkit-" ? "::-webkit-input-placeholder" : e === "-ms-" ? "::-ms-input-placeholder" : e === "-ms- old" ? ":-ms-input-placeholder" : e === "-moz- old" ? ":-moz-placeholder" : `::${e}placeholder`;
  }
}
w2.names = ["::placeholder"];
var Fp = w2;
let Rp = Et;
class y2 extends Rp {
  /**
   * Return different selectors depend on prefix
   */
  prefixed(e) {
    return e === "-moz-" ? ":-moz-placeholder" : e === "-ms-" ? ":-ms-input-placeholder" : `:${e}placeholder-shown`;
  }
}
y2.names = [":placeholder-shown"];
var Mp = y2;
let Pp = K;
class x2 extends Pp {
  /**
   * Return property name by spec
   */
  normalize() {
    return "print-color-adjust";
  }
  /**
   * Change property name for WebKit-based browsers
   */
  prefixed(e, t) {
    return t === "-moz-" ? "color-adjust" : t + "print-color-adjust";
  }
}
x2.names = ["print-color-adjust", "color-adjust"];
var Gp = x2;
let Lp = K;
const Np = [
  "none",
  "underline",
  "overline",
  "line-through",
  "blink",
  "inherit",
  "initial",
  "unset"
];
class k2 extends Lp {
  /**
   * Do not add prefixes for basic values.
   */
  check(e) {
    return e.value.split(/\s+/).some((t) => !Np.includes(t));
  }
}
k2.names = ["text-decoration"];
var Hp = k2;
let Kp = K;
class A2 extends Kp {
  /**
   * Change prefix for ink value
   */
  set(e, t) {
    return e.prop === "text-decoration-skip-ink" && e.value === "auto" ? (e.prop = t + "text-decoration-skip", e.value = "ink", e) : super.set(e, t);
  }
}
A2.names = [
  "text-decoration-skip-ink",
  "text-decoration-skip"
];
var Jp = A2;
let Tp = K;
class E2 extends Tp {
  set(e, t) {
    return t === "-webkit-" && (e.value = e.value.replace(/\s*(right|left)\s*/i, "")), super.set(e, t);
  }
}
E2.names = ["text-emphasis-position"];
var zp = E2;
let qp = K;
class rr extends qp {
  /**
   * Is transform contain 3D commands
   */
  contain3d(e) {
    if (e.prop === "transform-origin")
      return !1;
    for (let t of rr.functions3d)
      if (e.value.includes(`${t}(`))
        return !0;
    return !1;
  }
  /**
   * Don't add prefix for IE in keyframes
   */
  insert(e, t, r) {
    if (t === "-ms-") {
      if (!this.contain3d(e) && !this.keyframeParents(e))
        return super.insert(e, t, r);
    } else if (t === "-o-") {
      if (!this.contain3d(e))
        return super.insert(e, t, r);
    } else
      return super.insert(e, t, r);
  }
  /**
   * Recursively check all parents for @keyframes
   */
  keyframeParents(e) {
    let { parent: t } = e;
    for (; t; ) {
      if (t.type === "atrule" && t.name === "keyframes")
        return !0;
      ({ parent: t } = t);
    }
    return !1;
  }
  /**
   * Replace rotateZ to rotate for IE 9
   */
  set(e, t) {
    return e = super.set(e, t), t === "-ms-" && (e.value = e.value.replace(/rotatez/gi, "rotate")), e;
  }
}
rr.names = ["transform", "transform-origin"];
rr.functions3d = [
  "matrix3d",
  "translate3d",
  "translateZ",
  "scale3d",
  "scaleZ",
  "rotate3d",
  "rotateX",
  "rotateY",
  "perspective"
];
var Up = rr;
let Vp = K;
class S2 extends Vp {
  /**
   * Avoid prefixing all in IE
   */
  insert(e, t, r) {
    if (!(e.value === "all" && t === "-ms-"))
      return e.value === "contain" && (t === "-moz-" || t === "-webkit-") ? void 0 : super.insert(e, t, r);
  }
  /**
   * Change prefixed value for IE
   */
  set(e, t) {
    return t === "-ms-" && e.value === "contain" && (e.value = "element"), super.set(e, t);
  }
}
S2.names = ["user-select"];
var Wp = S2;
let Qp = K;
class Br extends Qp {
  insert(e, t, r) {
    if (t === "-ms-") {
      let s = this.set(this.clone(e), t);
      this.needCascade(e) && (s.raws.before = this.calcBefore(r, e, t));
      let i = "ltr";
      return e.parent.nodes.forEach((n) => {
        n.prop === "direction" && (n.value === "rtl" || n.value === "ltr") && (i = n.value);
      }), s.value = Br.msValues[i][e.value] || e.value, e.parent.insertBefore(e, s);
    }
    return super.insert(e, t, r);
  }
}
Br.names = ["writing-mode"];
Br.msValues = {
  ltr: {
    "horizontal-tb": "lr-tb",
    "vertical-lr": "tb-lr",
    "vertical-rl": "tb-rl"
  },
  rtl: {
    "horizontal-tb": "rl-tb",
    "vertical-lr": "bt-lr",
    "vertical-rl": "bt-rl"
  }
};
var Yp = Br, I2 = { exports: {} };
(function(B) {
  typeof BigInt > "u" && (BigInt = function(D) {
    if (isNaN(D)) throw new Error("");
    return D;
  });
  const e = BigInt(0), t = BigInt(1), r = BigInt(2), s = BigInt(3), i = BigInt(5), n = BigInt(10);
  BigInt(Number.MAX_SAFE_INTEGER);
  const a = 2e3, C = {
    s: t,
    n: e,
    d: t
  };
  function o(D, p) {
    try {
      D = BigInt(D);
    } catch {
      throw O();
    }
    return D * p;
  }
  function l(D) {
    return typeof D == "bigint" ? D : Math.floor(D);
  }
  function u(D, p) {
    if (p === e)
      throw G();
    const w = Object.create(g.prototype);
    w.s = D < e ? -t : t, D = D < e ? -D : D;
    const v = x(D, p);
    return w.n = D / v, w.d = p / v, w;
  }
  const f = [r * r, r, r * r, r, r * r, r * s, r, r * s];
  function c(D) {
    const p = /* @__PURE__ */ Object.create(null);
    if (D <= t)
      return p[D] = t, p;
    const w = (v) => {
      p[v] = (p[v] || e) + t;
    };
    for (; D % r === e; )
      w(r), D /= r;
    for (; D % s === e; )
      w(s), D /= s;
    for (; D % i === e; )
      w(i), D /= i;
    for (let v = 0, F = r + i; F * F <= D; ) {
      for (; D % F === e; )
        w(F), D /= F;
      F += f[v], v = v + 1 & 7;
    }
    return D > t && w(D), p;
  }
  const h = function(D, p) {
    let w = e, v = t, F = t;
    if (D != null) if (p !== void 0) {
      if (typeof D == "bigint")
        w = D;
      else {
        if (isNaN(D))
          throw O();
        if (D % 1 !== 0)
          throw T();
        w = BigInt(D);
      }
      if (typeof p == "bigint")
        v = p;
      else {
        if (isNaN(p))
          throw O();
        if (p % 1 !== 0)
          throw T();
        v = BigInt(p);
      }
      F = w * v;
    } else if (typeof D == "object") {
      if ("d" in D && "n" in D)
        w = BigInt(D.n), v = BigInt(D.d), "s" in D && (w *= BigInt(D.s));
      else if (0 in D)
        w = BigInt(D[0]), 1 in D && (v = BigInt(D[1]));
      else if (typeof D == "bigint")
        w = D;
      else
        throw O();
      F = w * v;
    } else if (typeof D == "number") {
      if (isNaN(D))
        throw O();
      if (D < 0 && (F = -t, D = -D), D % 1 === 0)
        w = BigInt(D);
      else {
        let A = 1, P = 0, q = 1, S = 1, U = 1, Be = 1e7;
        for (D >= 1 && (A = 10 ** Math.floor(1 + Math.log10(D)), D /= A); q <= Be && U <= Be; ) {
          let J = (P + S) / (q + U);
          if (D === J) {
            q + U <= Be ? (w = P + S, v = q + U) : U > q ? (w = S, v = U) : (w = P, v = q);
            break;
          } else
            D > J ? (P += S, q += U) : (S += P, U += q), q > Be ? (w = S, v = U) : (w = P, v = q);
        }
        w = BigInt(w) * BigInt(A), v = BigInt(v);
      }
    } else if (typeof D == "string") {
      let A = 0, P = e, q = e, S = e, U = t, Be = t, J = D.replace(/_/g, "").match(/\d+|./g);
      if (J === null)
        throw O();
      if (J[A] === "-" ? (F = -t, A++) : J[A] === "+" && A++, J.length === A + 1 ? q = o(J[A++], F) : J[A + 1] === "." || J[A] === "." ? (J[A] !== "." && (P = o(J[A++], F)), A++, (A + 1 === J.length || J[A + 1] === "(" && J[A + 3] === ")" || J[A + 1] === "'" && J[A + 3] === "'") && (q = o(J[A], F), U = n ** BigInt(J[A].length), A++), (J[A] === "(" && J[A + 2] === ")" || J[A] === "'" && J[A + 2] === "'") && (S = o(J[A + 1], F), Be = n ** BigInt(J[A + 1].length) - t, A += 3)) : J[A + 1] === "/" || J[A + 1] === ":" ? (q = o(J[A], F), U = o(J[A + 2], t), A += 3) : J[A + 3] === "/" && J[A + 1] === " " && (P = o(J[A], F), q = o(J[A + 2], F), U = o(J[A + 4], t), A += 5), J.length <= A)
        v = U * Be, F = /* void */
        w = S + v * P + Be * q;
      else
        throw O();
    } else if (typeof D == "bigint")
      w = D, F = D, v = t;
    else
      throw O();
    if (v === e)
      throw G();
    C.s = F < e ? -t : t, C.n = w < e ? -w : w, C.d = v < e ? -v : v;
  };
  function b(D, p, w) {
    let v = t;
    for (; p > e; D = D * D % w, p >>= t)
      p & t && (v = v * D % w);
    return v;
  }
  function d(D, p) {
    for (; p % r === e; p /= r)
      ;
    for (; p % i === e; p /= i)
      ;
    if (p === t)
      return e;
    let w = n % p, v = 1;
    for (; w !== t; v++)
      if (w = w * n % p, v > a)
        return e;
    return BigInt(v);
  }
  function y(D, p, w) {
    let v = t, F = b(n, w, p);
    for (let A = 0; A < 300; A++) {
      if (v === F)
        return BigInt(A);
      v = v * n % p, F = F * n % p;
    }
    return 0;
  }
  function x(D, p) {
    if (!D)
      return p;
    if (!p)
      return D;
    for (; ; ) {
      if (D %= p, !D)
        return p;
      if (p %= D, !p)
        return D;
    }
  }
  function g(D, p) {
    if (h(D, p), this instanceof g)
      D = x(C.d, C.n), this.s = C.s, this.n = C.n / D, this.d = C.d / D;
    else
      return u(C.s * C.n, C.d);
  }
  const G = function() {
    return new Error("Division by Zero");
  }, O = function() {
    return new Error("Invalid argument");
  }, T = function() {
    return new Error("Parameters must be integer");
  };
  g.prototype = {
    s: t,
    n: e,
    d: t,
    /**
     * Calculates the absolute value
     *
     * Ex: new Fraction(-4).abs() => 4
     **/
    abs: function() {
      return u(this.n, this.d);
    },
    /**
     * Inverts the sign of the current fraction
     *
     * Ex: new Fraction(-4).neg() => 4
     **/
    neg: function() {
      return u(-this.s * this.n, this.d);
    },
    /**
     * Adds two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
     **/
    add: function(D, p) {
      return h(D, p), u(
        this.s * this.n * C.d + C.s * this.d * C.n,
        this.d * C.d
      );
    },
    /**
     * Subtracts two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
     **/
    sub: function(D, p) {
      return h(D, p), u(
        this.s * this.n * C.d - C.s * this.d * C.n,
        this.d * C.d
      );
    },
    /**
     * Multiplies two rational numbers
     *
     * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
     **/
    mul: function(D, p) {
      return h(D, p), u(
        this.s * C.s * this.n * C.n,
        this.d * C.d
      );
    },
    /**
     * Divides two rational numbers
     *
     * Ex: new Fraction("-17.(345)").inverse().div(3)
     **/
    div: function(D, p) {
      return h(D, p), u(
        this.s * C.s * this.n * C.d,
        this.d * C.n
      );
    },
    /**
     * Clones the actual object
     *
     * Ex: new Fraction("-17.(345)").clone()
     **/
    clone: function() {
      return u(this.s * this.n, this.d);
    },
    /**
     * Calculates the modulo of two rational numbers - a more precise fmod
     *
     * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
     * Ex: new Fraction(20, 10).mod().equals(0) ? "is Integer"
     **/
    mod: function(D, p) {
      if (D === void 0)
        return u(this.s * this.n % this.d, t);
      if (h(D, p), e === C.n * this.d)
        throw G();
      return u(
        this.s * (C.d * this.n) % (C.n * this.d),
        C.d * this.d
      );
    },
    /**
     * Calculates the fractional gcd of two rational numbers
     *
     * Ex: new Fraction(5,8).gcd(3,7) => 1/56
     */
    gcd: function(D, p) {
      return h(D, p), u(x(C.n, this.n) * x(C.d, this.d), C.d * this.d);
    },
    /**
     * Calculates the fractional lcm of two rational numbers
     *
     * Ex: new Fraction(5,8).lcm(3,7) => 15
     */
    lcm: function(D, p) {
      return h(D, p), C.n === e && this.n === e ? u(e, t) : u(C.n * this.n, x(C.n, this.n) * x(C.d, this.d));
    },
    /**
     * Gets the inverse of the fraction, means numerator and denominator are exchanged
     *
     * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
     **/
    inverse: function() {
      return u(this.s * this.d, this.n);
    },
    /**
     * Calculates the fraction to some integer exponent
     *
     * Ex: new Fraction(-1,2).pow(-3) => -8
     */
    pow: function(D, p) {
      if (h(D, p), C.d === t)
        return C.s < e ? u((this.s * this.d) ** C.n, this.n ** C.n) : u((this.s * this.n) ** C.n, this.d ** C.n);
      if (this.s < e) return null;
      let w = c(this.n), v = c(this.d), F = t, A = t;
      for (let P in w)
        if (P !== "1") {
          if (P === "0") {
            F = e;
            break;
          }
          if (w[P] *= C.n, w[P] % C.d === e)
            w[P] /= C.d;
          else return null;
          F *= BigInt(P) ** w[P];
        }
      for (let P in v)
        if (P !== "1") {
          if (v[P] *= C.n, v[P] % C.d === e)
            v[P] /= C.d;
          else return null;
          A *= BigInt(P) ** v[P];
        }
      return C.s < e ? u(A, F) : u(F, A);
    },
    /**
     * Calculates the logarithm of a fraction to a given rational base
     *
     * Ex: new Fraction(27, 8).log(9, 4) => 3/2
     */
    log: function(D, p) {
      if (h(D, p), this.s <= e || C.s <= e) return null;
      const w = /* @__PURE__ */ Object.create(null), v = c(C.n), F = c(C.d), A = c(this.n), P = c(this.d);
      for (const U in F)
        v[U] = (v[U] || e) - F[U];
      for (const U in P)
        A[U] = (A[U] || e) - P[U];
      for (const U in v)
        U !== "1" && (w[U] = !0);
      for (const U in A)
        U !== "1" && (w[U] = !0);
      let q = null, S = null;
      for (const U in w) {
        const Be = v[U] || e, J = A[U] || e;
        if (Be === e) {
          if (J !== e)
            return null;
          continue;
        }
        let pe = J, Le = Be;
        const Ne = x(pe, Le);
        if (pe /= Ne, Le /= Ne, q === null && S === null)
          q = pe, S = Le;
        else if (pe * S !== q * Le)
          return null;
      }
      return q !== null && S !== null ? u(q, S) : null;
    },
    /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/
    equals: function(D, p) {
      return h(D, p), this.s * this.n * C.d === C.s * C.n * this.d;
    },
    /**
     * Check if this rational number is less than another
     *
     * Ex: new Fraction(19.6).lt([98, 5]);
     **/
    lt: function(D, p) {
      return h(D, p), this.s * this.n * C.d < C.s * C.n * this.d;
    },
    /**
     * Check if this rational number is less than or equal another
     *
     * Ex: new Fraction(19.6).lt([98, 5]);
     **/
    lte: function(D, p) {
      return h(D, p), this.s * this.n * C.d <= C.s * C.n * this.d;
    },
    /**
     * Check if this rational number is greater than another
     *
     * Ex: new Fraction(19.6).lt([98, 5]);
     **/
    gt: function(D, p) {
      return h(D, p), this.s * this.n * C.d > C.s * C.n * this.d;
    },
    /**
     * Check if this rational number is greater than or equal another
     *
     * Ex: new Fraction(19.6).lt([98, 5]);
     **/
    gte: function(D, p) {
      return h(D, p), this.s * this.n * C.d >= C.s * C.n * this.d;
    },
    /**
     * Compare two rational numbers
     * < 0 iff this < that
     * > 0 iff this > that
     * = 0 iff this = that
     *
     * Ex: new Fraction(19.6).compare([98, 5]);
     **/
    compare: function(D, p) {
      h(D, p);
      let w = this.s * this.n * C.d - C.s * C.n * this.d;
      return (e < w) - (w < e);
    },
    /**
     * Calculates the ceil of a rational number
     *
     * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
     **/
    ceil: function(D) {
      return D = n ** BigInt(D || 0), u(
        l(this.s * D * this.n / this.d) + (D * this.n % this.d > e && this.s >= e ? t : e),
        D
      );
    },
    /**
     * Calculates the floor of a rational number
     *
     * Ex: new Fraction('4.(3)').floor() => (4 / 1)
     **/
    floor: function(D) {
      return D = n ** BigInt(D || 0), u(
        l(this.s * D * this.n / this.d) - (D * this.n % this.d > e && this.s < e ? t : e),
        D
      );
    },
    /**
     * Rounds a rational numbers
     *
     * Ex: new Fraction('4.(3)').round() => (4 / 1)
     **/
    round: function(D) {
      return D = n ** BigInt(D || 0), u(
        l(this.s * D * this.n / this.d) + this.s * ((this.s >= e ? t : e) + r * (D * this.n % this.d) > this.d ? t : e),
        D
      );
    },
    /**
      * Rounds a rational number to a multiple of another rational number
      *
      * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
      **/
    roundTo: function(D, p) {
      h(D, p);
      const w = this.n * C.d, v = this.d * C.n, F = w % v;
      let A = l(w / v);
      return F + F >= v && A++, u(this.s * A * C.n, C.d);
    },
    /**
     * Check if two rational numbers are divisible
     *
     * Ex: new Fraction(19.6).divisible(1.5);
     */
    divisible: function(D, p) {
      return h(D, p), C.n === e ? !1 : this.n * C.d % (C.n * this.d) === e;
    },
    /**
     * Returns a decimal representation of the fraction
     *
     * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
     **/
    valueOf: function() {
      return Number(this.s * this.n) / Number(this.d);
    },
    /**
     * Creates a string representation of a fraction with all digits
     *
     * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
     **/
    toString: function(D = 15) {
      let p = this.n, w = this.d, v = d(p, w), F = y(p, w, v), A = this.s < e ? "-" : "";
      if (A += l(p / w), p %= w, p *= n, p && (A += "."), v) {
        for (let P = F; P--; )
          A += l(p / w), p %= w, p *= n;
        A += "(";
        for (let P = v; P--; )
          A += l(p / w), p %= w, p *= n;
        A += ")";
      } else
        for (let P = D; p && P--; )
          A += l(p / w), p %= w, p *= n;
      return A;
    },
    /**
     * Returns a string-fraction representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toFraction() => "4 1/3"
     **/
    toFraction: function(D = !1) {
      let p = this.n, w = this.d, v = this.s < e ? "-" : "";
      if (w === t)
        v += p;
      else {
        const F = l(p / w);
        D && F > e && (v += F, v += " ", p %= w), v += p, v += "/", v += w;
      }
      return v;
    },
    /**
     * Returns a latex representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
     **/
    toLatex: function(D = !1) {
      let p = this.n, w = this.d, v = this.s < e ? "-" : "";
      if (w === t)
        v += p;
      else {
        const F = l(p / w);
        D && F > e && (v += F, p %= w), v += "\\frac{", v += p, v += "}{", v += w, v += "}";
      }
      return v;
    },
    /**
     * Returns an array of continued fraction elements
     *
     * Ex: new Fraction("7/8").toContinued() => [0,1,7]
     */
    toContinued: function() {
      let D = this.n, p = this.d;
      const w = [];
      for (; p; ) {
        w.push(l(D / p));
        const v = D % p;
        D = p, p = v;
      }
      return w;
    },
    simplify: function(D = 1e-3) {
      const p = BigInt(Math.ceil(1 / D)), w = this.abs(), v = w.toContinued();
      for (let F = 1; F < v.length; F++) {
        let A = u(v[F - 1], t);
        for (let q = F - 2; q >= 0; q--)
          A = A.inverse().add(v[q]);
        let P = A.sub(w);
        if (P.n * p < P.d)
          return A.mul(this.s);
      }
      return this;
    }
  }, Object.defineProperty(g, "__esModule", { value: !0 }), g.default = g, g.Fraction = g, B.exports = g;
})(I2);
var Xp = I2.exports;
let Zp = Xp, $p = Xt, r1 = _;
const _p = /(min|max)-resolution\s*:\s*\d*\.?\d+(dppx|dpcm|dpi|x)/gi, eh = /(min|max)-resolution(\s*:\s*)(\d*\.?\d+)(dppx|dpcm|dpi|x)/i;
let th = class extends $p {
  /**
   * Remove prefixed queries
   */
  clean(e) {
    if (!this.bad) {
      this.bad = [];
      for (let t of this.prefixes)
        this.bad.push(this.prefixName(t, "min")), this.bad.push(this.prefixName(t, "max"));
    }
    e.params = r1.editList(e.params, (t) => t.filter((r) => this.bad.every((s) => !r.includes(s))));
  }
  /**
   * Return prefixed query name
   */
  prefixName(e, t) {
    return e === "-moz-" ? t + "--moz-device-pixel-ratio" : e + t + "-device-pixel-ratio";
  }
  /**
   * Return prefixed query
   */
  prefixQuery(e, t, r, s, i) {
    return s = new Zp(s), i === "dpi" ? s = s.div(96) : i === "dpcm" && (s = s.mul(2.54).div(96)), s = s.simplify(), e === "-o-" && (s = s.n + "/" + s.d), this.prefixName(e, t) + r + s;
  }
  /**
   * Add prefixed queries
   */
  process(e) {
    let t = this.parentPrefix(e), r = t ? [t] : this.prefixes;
    e.params = r1.editList(e.params, (s, i) => {
      for (let n of s) {
        if (!n.includes("min-resolution") && !n.includes("max-resolution")) {
          i.push(n);
          continue;
        }
        for (let a of r) {
          let C = n.replace(_p, (o) => {
            let l = o.match(eh);
            return this.prefixQuery(
              a,
              l[1],
              l[2],
              l[3],
              l[4]
            );
          });
          i.push(C);
        }
        i.push(n);
      }
      return r1.uniq(i);
    });
  }
};
var rh = th, Bh = { A: { A: { 2: "L D E F A B 7C" }, B: { 1: "0 1 2 3 4 5 6 7 8 9 C M N G O P Q R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC 9C AD", 2: "8C aC J hB L D E F A B C M N G O P Q iB DB EB BD CD" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC bC BC cC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB NB OB PB CB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB I eC TC fC", 2: "J hB L D E F A B C M N G O P Q iB DB EB FB GB HB IB JB K" }, E: { 1: "F A B C M N G K HD hC UC VC ID JD KD iC jC WC LD XC kC lC mC nC oC MD YC pC qC rC sC tC ND ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C OD", 2: "J hB L D E DD gC ED FD GD" }, F: { 1: "0 1 2 3 4 5 6 7 8 9 G O P Q iB DB EB FB GB HB IB JB K KB LB MB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B AC BC CC DC EC FC GC HC IC JC KC LC MC NC OC PC QC RC SC R H S dC T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z AB BB CB VC", 2: "F B C PD QD RD SD UC 5C TD" }, G: { 1: "ZD aD bD cD dD eD fD gD hD iD jD kD lD mD nD iC jC WC oD XC kC lC mC nC oC pD YC pC qC rC sC tC qD ZC uC vC wC xC yC zC 0C 1C 2C 3C 4C", 2: "E gC UD 6C VD WD XD YD" }, H: { 1: "rD" }, I: { 1: "I wD xD", 2: "aC J sD tD uD vD 6C" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C UC 5C VC" }, L: { 1: "I" }, M: { 1: "TC" }, N: { 2: "A B" }, O: { 1: "WC" }, P: { 1: "J DB EB FB GB HB IB JB K KB LB MB yD zD 0D 1D 2D hC 3D 4D 5D 6D 7D XC YC ZC 8D" }, Q: { 1: "9D" }, R: { 1: "AE" }, S: { 1: "BE CE" } }, B: 4, C: "CSS Feature Queries", D: !0 };
function Qn(B) {
  return B[B.length - 1];
}
let j2 = {
  /**
   * Parse string to nodes tree
   */
  parse(B) {
    let e = [""], t = [e];
    for (let r of B) {
      if (r === "(") {
        e = [""], Qn(t).push(e), t.push(e);
        continue;
      }
      if (r === ")") {
        t.pop(), e = Qn(t), e.push("");
        continue;
      }
      e[e.length - 1] += r;
    }
    return t[0];
  },
  /**
   * Generate output string by nodes tree
   */
  stringify(B) {
    let e = "";
    for (let t of B) {
      if (typeof t == "object") {
        e += `(${j2.stringify(t)})`;
        continue;
      }
      e += t;
    }
    return e;
  }
};
var sh = j2;
let ih = Bh, nh = va, { parse: Ch } = Bt, B1 = sh, ah = st, oh = _, lh = Oe, Yn = nh(ih), O2 = [];
for (let B in Yn.stats) {
  let e = Yn.stats[B];
  for (let t in e) {
    let r = e[t];
    /y/.test(r) && O2.push(B + " " + t);
  }
}
let uh = class {
  constructor(e, t) {
    this.Prefixes = e, this.all = t;
  }
  /**
   * Add prefixes
   */
  add(e, t) {
    return e.map((r) => {
      if (this.isProp(r)) {
        let s = this.prefixed(r[0]);
        return s.length > 1 ? this.convert(s) : r;
      }
      return typeof r == "object" ? this.add(r, t) : r;
    });
  }
  /**
   * Clean brackets with one child
   */
  cleanBrackets(e) {
    return e.map((t) => typeof t != "object" ? t : t.length === 1 && typeof t[0] == "object" ? this.cleanBrackets(t[0]) : this.cleanBrackets(t));
  }
  /**
   * Add " or " between properties and convert it to brackets format
   */
  convert(e) {
    let t = [""];
    for (let r of e)
      t.push([`${r.prop}: ${r.value}`]), t.push(" or ");
    return t[t.length - 1] = "", t;
  }
  /**
   * Check global options
   */
  disabled(e) {
    if (!this.all.options.grid && (e.prop === "display" && e.value.includes("grid") || e.prop.includes("grid") || e.prop === "justify-items"))
      return !0;
    if (this.all.options.flexbox === !1) {
      if (e.prop === "display" && e.value.includes("flex"))
        return !0;
      let t = ["order", "justify-content", "align-items", "align-content"];
      if (e.prop.includes("flex") || t.includes(e.prop))
        return !0;
    }
    return !1;
  }
  /**
   * Return true if prefixed property has no unprefixed
   */
  isHack(e, t) {
    return !new RegExp(`(\\(|\\s)${oh.escapeRegexp(t)}:`).test(e);
  }
  /**
   * Return true if brackets node is "not" word
   */
  isNot(e) {
    return typeof e == "string" && /not\s*/i.test(e);
  }
  /**
   * Return true if brackets node is "or" word
   */
  isOr(e) {
    return typeof e == "string" && /\s*or\s*/i.test(e);
  }
  /**
   * Return true if brackets node is (prop: value)
   */
  isProp(e) {
    return typeof e == "object" && e.length === 1 && typeof e[0] == "string";
  }
  /**
   * Compress value functions into a string nodes
   */
  normalize(e) {
    if (typeof e != "object")
      return e;
    if (e = e.filter((t) => t !== ""), typeof e[0] == "string") {
      let t = e[0].trim();
      if (t.includes(":") || t === "selector" || t === "not selector")
        return [B1.stringify(e)];
    }
    return e.map((t) => this.normalize(t));
  }
  /**
   * Parse string into declaration property and value
   */
  parse(e) {
    let t = e.split(":"), r = t[0], s = t[1];
    return s || (s = ""), [r.trim(), s.trim()];
  }
  /**
   * Return array of Declaration with all necessary prefixes
   */
  prefixed(e) {
    let t = this.virtual(e);
    if (this.disabled(t.first))
      return t.nodes;
    let r = { warn: () => null }, s = this.prefixer().add[t.first.prop];
    s && s.process && s.process(t.first, r);
    for (let i of t.nodes) {
      for (let n of this.prefixer().values("add", t.first.prop))
        n.process(i);
      lh.save(this.all, i);
    }
    return t.nodes;
  }
  /**
   * Return prefixer only with @supports supported browsers
   */
  prefixer() {
    if (this.prefixerCache)
      return this.prefixerCache;
    let e = this.all.browsers.selected.filter((r) => O2.includes(r)), t = new ah(
      this.all.browsers.data,
      e,
      this.all.options
    );
    return this.prefixerCache = new this.Prefixes(
      this.all.data,
      t,
      this.all.options
    ), this.prefixerCache;
  }
  /**
   * Add prefixed declaration
   */
  process(e) {
    let t = B1.parse(e.params);
    t = this.normalize(t), t = this.remove(t, e.params), t = this.add(t, e.params), t = this.cleanBrackets(t), e.params = B1.stringify(t);
  }
  /**
   * Remove all unnecessary prefixes
   */
  remove(e, t) {
    let r = 0;
    for (; r < e.length; ) {
      if (!this.isNot(e[r - 1]) && this.isProp(e[r]) && this.isOr(e[r + 1])) {
        if (this.toRemove(e[r][0], t)) {
          e.splice(r, 2);
          continue;
        }
        r += 2;
        continue;
      }
      typeof e[r] == "object" && (e[r] = this.remove(e[r], t)), r += 1;
    }
    return e;
  }
  /**
   * Return true if we need to remove node
   */
  toRemove(e, t) {
    let [r, s] = this.parse(e), i = this.all.unprefixed(r), n = this.all.cleaner();
    if (n.remove[r] && n.remove[r].remove && !this.isHack(t, i))
      return !0;
    for (let a of n.values("remove", i))
      if (a.check(s))
        return !0;
    return !1;
  }
  /**
   * Create virtual rule to process it by prefixer
   */
  virtual(e) {
    let [t, r] = this.parse(e), s = Ch("a{}").first;
    return s.append({ prop: t, raws: { before: "" }, value: r }), s;
  }
};
var fh = uh;
let { list: ch } = Bt, Xn = oB, Dh = st, Zn = aB, dh = class {
  constructor(e) {
    this.props = ["transition", "transition-property"], this.prefixes = e;
  }
  /**
   * Process transition and add prefixes for all necessary properties
   */
  add(e, t) {
    let r, s, i = this.prefixes.add[e.prop], n = this.ruleVendorPrefixes(e), a = n || i && i.prefixes || [], C = this.parse(e.value), o = C.map((c) => this.findProp(c)), l = [];
    if (o.some((c) => c[0] === "-"))
      return;
    for (let c of C) {
      if (s = this.findProp(c), s[0] === "-") continue;
      let h = this.prefixes.add[s];
      if (!(!h || !h.prefixes))
        for (r of h.prefixes) {
          if (n && !n.some((d) => r.includes(d)))
            continue;
          let b = this.prefixes.prefixed(s, r);
          b !== "-ms-transform" && !o.includes(b) && (this.disabled(s, r) || l.push(this.clone(s, b, c)));
        }
    }
    C = C.concat(l);
    let u = this.stringify(C), f = this.stringify(
      this.cleanFromUnprefixed(C, "-webkit-")
    );
    if (a.includes("-webkit-") && this.cloneBefore(e, `-webkit-${e.prop}`, f), this.cloneBefore(e, e.prop, f), a.includes("-o-")) {
      let c = this.stringify(this.cleanFromUnprefixed(C, "-o-"));
      this.cloneBefore(e, `-o-${e.prop}`, c);
    }
    for (r of a)
      if (r !== "-webkit-" && r !== "-o-") {
        let c = this.stringify(
          this.cleanOtherPrefixes(C, r)
        );
        this.cloneBefore(e, r + e.prop, c);
      }
    u !== e.value && !this.already(e, e.prop, u) && (this.checkForWarning(t, e), e.cloneBefore(), e.value = u);
  }
  /**
   * Does we already have this declaration
   */
  already(e, t, r) {
    return e.parent.some((s) => s.prop === t && s.value === r);
  }
  /**
   * Show transition-property warning
   */
  checkForWarning(e, t) {
    if (t.prop !== "transition-property")
      return;
    let r = !1, s = !1;
    t.parent.each((i) => {
      if (i.type !== "decl" || i.prop.indexOf("transition-") !== 0)
        return;
      let n = ch.comma(i.value);
      if (i.prop === "transition-property") {
        n.forEach((a) => {
          let C = this.prefixes.add[a];
          C && C.prefixes && C.prefixes.length > 0 && (r = !0);
        });
        return;
      }
      return s = s || n.length > 1, !1;
    }), r && s && t.warn(
      e,
      "Replace transition-property to transition, because Autoprefixer could not support any cases of transition-property and other transition-*"
    );
  }
  /**
   * Remove all non-webkit prefixes and unprefixed params if we have prefixed
   */
  cleanFromUnprefixed(e, t) {
    let r = e.map((i) => this.findProp(i)).filter((i) => i.slice(0, t.length) === t).map((i) => this.prefixes.unprefixed(i)), s = [];
    for (let i of e) {
      let n = this.findProp(i), a = Zn.prefix(n);
      !r.includes(n) && (a === t || a === "") && s.push(i);
    }
    return s;
  }
  cleanOtherPrefixes(e, t) {
    return e.filter((r) => {
      let s = Zn.prefix(this.findProp(r));
      return s === "" || s === t;
    });
  }
  /**
   * Return new param array with different name
   */
  clone(e, t, r) {
    let s = [], i = !1;
    for (let n of r)
      !i && n.type === "word" && n.value === e ? (s.push({ type: "word", value: t }), i = !0) : s.push(n);
    return s;
  }
  /**
   * Add declaration if it is not exist
   */
  cloneBefore(e, t, r) {
    this.already(e, t, r) || e.cloneBefore({ prop: t, value: r });
  }
  /**
   * Check property for disabled by option
   */
  disabled(e, t) {
    let r = ["order", "justify-content", "align-self", "align-content"];
    if (e.includes("flex") || r.includes(e)) {
      if (this.prefixes.options.flexbox === !1)
        return !0;
      if (this.prefixes.options.flexbox === "no-2009")
        return t.includes("2009");
    }
  }
  /**
   * Find or create separator
   */
  div(e) {
    for (let t of e)
      for (let r of t)
        if (r.type === "div" && r.value === ",")
          return r;
    return { after: " ", type: "div", value: "," };
  }
  /**
   * Find property name
   */
  findProp(e) {
    let t = e[0].value;
    if (/^\d/.test(t)) {
      for (let [r, s] of e.entries())
        if (r !== 0 && s.type === "word")
          return s.value;
    }
    return t;
  }
  /**
   * Parse properties list to array
   */
  parse(e) {
    let t = Xn(e), r = [], s = [];
    for (let i of t.nodes)
      s.push(i), i.type === "div" && i.value === "," && (r.push(s), s = []);
    return r.push(s), r.filter((i) => i.length > 0);
  }
  /**
   * Process transition and remove all unnecessary properties
   */
  remove(e) {
    let t = this.parse(e.value);
    t = t.filter((n) => {
      let a = this.prefixes.remove[this.findProp(n)];
      return !a || !a.remove;
    });
    let r = this.stringify(t);
    if (e.value === r)
      return;
    if (t.length === 0) {
      e.remove();
      return;
    }
    let s = e.parent.some((n) => n.prop === e.prop && n.value === r), i = e.parent.some((n) => n !== e && n.prop === e.prop && n.value.length > r.length);
    if (s || i) {
      e.remove();
      return;
    }
    e.value = r;
  }
  /**
   * Check if transition prop is inside vendor specific rule
   */
  ruleVendorPrefixes(e) {
    let { parent: t } = e;
    if (t.type !== "rule")
      return !1;
    if (!t.selector.includes(":-"))
      return !1;
    let r = Dh.prefixes().filter(
      (s) => t.selector.includes(":" + s)
    );
    return r.length > 0 ? r : !1;
  }
  /**
   * Return properties string from array
   */
  stringify(e) {
    if (e.length === 0)
      return "";
    let t = [];
    for (let r of e)
      r[r.length - 1].type !== "div" && r.push(this.div(e)), t.push(...r);
    return t[0].type === "div" && (t = t.slice(1)), t[t.length - 1].type === "div" && (t = t.slice(0, -1)), Xn.stringify({ nodes: t });
  }
};
var ph = dh;
let hh = u3, s1 = st, H = K, mh = p3, bh = m3, gh = g3, vh = w3, wh = k3, yh = G3, xh = H3, kh = T3, Ah = q3, Eh = V3, Sh = Q3, Ih = X3, jh = $3, Oh = a4, Fh = f4, Rh = D4, Mh = h4, Ph = b4, Gh = v4, Lh = y4, Nh = k4, Hh = E4, Kh = j4, Jh = R4, Th = P4, zh = N4, qh = K4, Uh = _4, Vh = m5, Wh = g5, Qh = y5, Yh = k5, Xh = E5, Zh = z5, $h = U5, _h = $5, e6 = Cp, t6 = op, r6 = up, B6 = cp, s6 = pp, i6 = mp, n6 = gp, C6 = wp, a6 = xp, o6 = Ap, l6 = Sp, u6 = jp, f6 = Fp, c6 = Mp, D6 = Gp, d6 = Hp, p6 = Jp, h6 = zp, m6 = Up, b6 = Wp, g6 = Yp, v6 = a2, $n = rh, tt = Et, w6 = fh, y6 = ph, ut = _, Pe = Oe, _n = aB;
tt.hack(yh);
tt.hack(qh);
tt.hack(f6);
tt.hack(c6);
tt.hack(Mh);
H.hack(Lh);
H.hack(a6);
H.hack(Ph);
H.hack(Qh);
H.hack(vh);
H.hack(Kh);
H.hack(Jh);
H.hack(zh);
H.hack(Vh);
H.hack(u6);
H.hack($h);
H.hack(gh);
H.hack(wh);
H.hack(Nh);
H.hack(n6);
H.hack(C6);
H.hack(bh);
H.hack(b6);
H.hack(Th);
H.hack(jh);
H.hack(g6);
H.hack(Sh);
H.hack(mh);
H.hack(Ih);
H.hack(Eh);
H.hack(_h);
H.hack(B6);
H.hack(Yh);
H.hack(m6);
H.hack(Hh);
H.hack(t6);
H.hack(xh);
H.hack(kh);
H.hack(d6);
H.hack(i6);
H.hack(Ah);
H.hack(Xh);
H.hack(Zh);
H.hack(Wh);
H.hack(o6);
H.hack(e6);
H.hack(D6);
H.hack(h6);
H.hack(p6);
Pe.hack(Uh);
Pe.hack(s6);
Pe.hack(l6);
Pe.hack(r6);
Pe.hack(Oh);
Pe.hack(Fh);
Pe.hack(Rh);
Pe.hack(Gh);
let i1 = /* @__PURE__ */ new Map(), x6 = class G1 {
  constructor(e, t, r = {}) {
    this.data = e, this.browsers = t, this.options = r, [this.add, this.remove] = this.preprocess(this.select(this.data)), this.transition = new y6(this), this.processor = new v6(this);
  }
  /**
   * Return clone instance to remove all prefixes
   */
  cleaner() {
    if (this.cleanerCache)
      return this.cleanerCache;
    if (this.browsers.selected.length) {
      let e = new s1(this.browsers.data, []);
      this.cleanerCache = new G1(this.data, e, this.options);
    } else
      return this;
    return this.cleanerCache;
  }
  /**
   * Declaration loader with caching
   */
  decl(e) {
    return i1.has(e) || i1.set(e, H.load(e)), i1.get(e);
  }
  /**
   * Group declaration by unprefixed property to check them
   */
  group(e) {
    let t = e.parent, r = t.index(e), { length: s } = t.nodes, i = this.unprefixed(e.prop), n = (a, C) => {
      for (r += a; r >= 0 && r < s; ) {
        let o = t.nodes[r];
        if (o.type === "decl") {
          if (a === -1 && o.prop === i && !s1.withPrefix(o.value) || this.unprefixed(o.prop) !== i)
            break;
          if (C(o) === !0)
            return !0;
          if (a === 1 && o.prop === i && !s1.withPrefix(o.value))
            break;
        }
        r += a;
      }
      return !1;
    };
    return {
      down(a) {
        return n(1, a);
      },
      up(a) {
        return n(-1, a);
      }
    };
  }
  /**
   * Normalize prefix for remover
   */
  normalize(e) {
    return this.decl(e).normalize(e);
  }
  /**
   * Return prefixed version of property
   */
  prefixed(e, t) {
    return e = _n.unprefixed(e), this.decl(e).prefixed(e, t);
  }
  /**
   * Cache prefixes data to fast CSS processing
   */
  preprocess(e) {
    let t = {
      "@supports": new w6(G1, this),
      selectors: []
    };
    for (let s in e.add) {
      let i = e.add[s];
      if (s === "@keyframes" || s === "@viewport")
        t[s] = new hh(s, i, this);
      else if (s === "@resolution")
        t[s] = new $n(s, i, this);
      else if (this.data[s].selector)
        t.selectors.push(tt.load(s, i, this));
      else {
        let n = this.data[s].props;
        if (n) {
          let a = Pe.load(s, i, this);
          for (let C of n)
            t[C] || (t[C] = { values: [] }), t[C].values.push(a);
        } else {
          let a = t[s] && t[s].values || [];
          t[s] = H.load(s, i, this), t[s].values = a;
        }
      }
    }
    let r = { selectors: [] };
    for (let s in e.remove) {
      let i = e.remove[s];
      if (this.data[s].selector) {
        let n = tt.load(s, i);
        for (let a of i)
          r.selectors.push(n.old(a));
      } else if (s === "@keyframes" || s === "@viewport")
        for (let n of i) {
          let a = `@${n}${s.slice(1)}`;
          r[a] = { remove: !0 };
        }
      else if (s === "@resolution")
        r[s] = new $n(s, i, this);
      else {
        let n = this.data[s].props;
        if (n) {
          let a = Pe.load(s, [], this);
          for (let C of i) {
            let o = a.old(C);
            if (o)
              for (let l of n)
                r[l] || (r[l] = {}), r[l].values || (r[l].values = []), r[l].values.push(o);
          }
        } else
          for (let a of i) {
            let C = this.decl(s).old(s, a);
            if (s === "align-self") {
              let o = t[s] && t[s].prefixes;
              if (o) {
                if (a === "-webkit- 2009" && o.includes("-webkit-"))
                  continue;
                if (a === "-webkit-" && o.includes("-webkit- 2009"))
                  continue;
              }
            }
            for (let o of C)
              r[o] || (r[o] = {}), r[o].remove = !0;
          }
      }
    }
    return [t, r];
  }
  /**
   * Select prefixes from data, which is necessary for selected browsers
   */
  select(e) {
    let t = { add: {}, remove: {} };
    for (let r in e) {
      let s = e[r], i = s.browsers.map((C) => {
        let o = C.split(" ");
        return {
          browser: `${o[0]} ${o[1]}`,
          note: o[2]
        };
      }), n = i.filter((C) => C.note).map((C) => `${this.browsers.prefix(C.browser)} ${C.note}`);
      n = ut.uniq(n), i = i.filter((C) => this.browsers.isSelected(C.browser)).map((C) => {
        let o = this.browsers.prefix(C.browser);
        return C.note ? `${o} ${C.note}` : o;
      }), i = this.sort(ut.uniq(i)), this.options.flexbox === "no-2009" && (i = i.filter((C) => !C.includes("2009")));
      let a = s.browsers.map((C) => this.browsers.prefix(C));
      s.mistakes && (a = a.concat(s.mistakes)), a = a.concat(n), a = ut.uniq(a), i.length ? (t.add[r] = i, i.length < a.length && (t.remove[r] = a.filter((C) => !i.includes(C)))) : t.remove[r] = a;
    }
    return t;
  }
  /**
   * Sort vendor prefixes
   */
  sort(e) {
    return e.sort((t, r) => {
      let s = ut.removeNote(t).length, i = ut.removeNote(r).length;
      return s === i ? r.length - t.length : i - s;
    });
  }
  /**
   * Return unprefixed version of property
   */
  unprefixed(e) {
    let t = this.normalize(_n.unprefixed(e));
    return t === "flex-direction" && (t = "flex-flow"), t;
  }
  /**
   * Return values, which must be prefixed in selected property
   */
  values(e, t) {
    let r = this[e], s = r["*"] && r["*"].values, i = r[t] && r[t].values;
    return s && i ? ut.uniq(s.concat(i)) : s || i || [];
  }
};
var k6 = x6;
let A6 = t0, { agents: E6 } = sB, eC = gC, S6 = zD, I6 = st, j6 = i3, O6 = k6, F2 = { browsers: E6, prefixes: S6 };
const F6 = `
  Replace Autoprefixer \`browsers\` option to Browserslist config.
  Use \`browserslist\` key in \`package.json\` or \`.browserslistrc\` file.

  Using \`browsers\` option can cause errors. Browserslist config can
  be used for Babel, Autoprefixer, postcss-normalize and other tools.

  If you really need to use option, rename it to \`overrideBrowserslist\`.

  Learn more at:
  https://github.com/browserslist/browserslist#readme
  https://twitter.com/browserslist

`;
function R6(B) {
  return Object.prototype.toString.apply(B) === "[object Object]";
}
let n1 = /* @__PURE__ */ new Map();
function M6(B, e) {
  e.browsers.selected.length !== 0 && (e.add.selectors.length > 0 || Object.keys(e.add).length > 2 || B.warn(
    `Autoprefixer target browsers do not need any prefixes.You do not need Autoprefixer anymore.
Check your Browserslist config to be sure that your targets are set up correctly.

  Learn more at:
  https://github.com/postcss/autoprefixer#readme
  https://github.com/browserslist/browserslist#readme

`
  ));
}
var P6 = vt;
function vt(...B) {
  let e;
  if (B.length === 1 && R6(B[0]) ? (e = B[0], B = void 0) : B.length === 0 || B.length === 1 && !B[0] ? B = void 0 : B.length <= 2 && (Array.isArray(B[0]) || !B[0]) ? (e = B[1], B = B[0]) : typeof B[B.length - 1] == "object" && (e = B.pop()), e || (e = {}), e.browser)
    throw new Error(
      "Change `browser` option to `overrideBrowserslist` in Autoprefixer"
    );
  if (e.browserslist)
    throw new Error(
      "Change `browserslist` option to `overrideBrowserslist` in Autoprefixer"
    );
  e.overrideBrowserslist ? B = e.overrideBrowserslist : e.browsers && (typeof console < "u" && console.warn && console.warn(
    eC.red(F6.replace(/`[^`]+`/g, (s) => eC.yellow(s.slice(1, -1))))
  ), B = e.browsers);
  let t = {
    env: e.env,
    ignoreUnknownVersions: e.ignoreUnknownVersions,
    stats: e.stats
  };
  function r(s) {
    let i = F2, n = new I6(i.browsers, B, s, t), a = n.selected.join(", ") + JSON.stringify(e);
    return n1.has(a) || n1.set(a, new O6(i.prefixes, n, e)), n1.get(a);
  }
  return {
    browsers: B,
    info(s) {
      return s = s || {}, s.from = s.from || process.cwd(), j6(r(s));
    },
    options: e,
    postcssPlugin: "autoprefixer",
    prepare(s) {
      let i = r({
        env: e.env,
        from: s.opts.from
      });
      return {
        OnceExit(n) {
          M6(s, i), e.remove !== !1 && i.processor.remove(n, s), e.add !== !1 && i.processor.add(n, s);
        }
      };
    }
  };
}
vt.postcss = !0;
vt.data = F2;
vt.defaults = A6.defaults;
vt.info = () => vt().info();
var n0 = { exports: {} };
n0.exports = () => ({
  postcssPlugin: "postcss-only-vars",
  Root(B) {
    B.walk((e) => {
      e.nodes && e.nodes.length <= 0 && e.remove();
    }), B.walkAtRules((e) => {
      e.nodes && e.nodes.length <= 0 && e.remove();
    });
  },
  Declaration(B) {
    B.prop.startsWith("--") || B.remove();
  }
});
n0.exports.postcss = !0;
var G6 = n0.exports;
async function L6(B, e, t) {
  const s = (await import("./sass.default-BTemmjxO.js")).compileString(B);
  let n = (s == null ? void 0 : s.css.toString()) || "";
  return t && (n = (await te(t ? [G6] : [P6]).process(
    n
  )).css), n;
}
function N6(B) {
  yt(B, "svelte-pm0pm6", `:host{--primary-hs:210 100%;--danger-hs:345 90%;--success-hs:137 57%;--l-0:0%;--l-10:10%;--l-30:30%;--l-40:40%;--l-50:50%;--l-60:60%;--l-80:80%;--l-90:90%;--l-95:95%;--l-100:100%;--shadow-color:0deg 0% 0%;--shadow-elevation-low:0.2px 0.6px 0.7px hsl(var(--shadow-color) / 0.13),\r
			0.7px 2px 2.3px -2.8px hsl(var(--shadow-color) / 0.12);--shadow-elevation-medium:0.2px 0.6px 0.7px hsl(var(--shadow-color) / 0.13),\r
			0.9px 2.5px 2.8px -1.4px hsl(var(--shadow-color) / 0.12),\r
			3.7px 10px 11.4px -2.8px hsl(var(--shadow-color) / 0.11);--shadow-elevation-high:0.2px 0.6px 0.7px hsl(var(--shadow-color) / 0.12),\r
			1.2px 3.1px 3.6px -0.6px hsl(var(--shadow-color) / 0.11),\r
			2.5px 6.6px 7.6px -1.1px hsl(var(--shadow-color) / 0.11),\r
			4.9px 13.2px 15.1px -1.7px hsl(var(--shadow-color) / 0.1),\r
			9.2px 24.8px 28.4px -2.3px hsl(var(--shadow-color) / 0.1),\r
			16.1px 43.5px 49.7px -2.8px hsl(var(--shadow-color) / 0.09);--focus-shadow:inset 0 0 0 1px hsl(var(--primary-hs) var(--l-40));display:contents}`);
}
function H6(B) {
  let e, t, r, s;
  function i(a) {
    B[8](a);
  }
  let n = {
    alwaysOverride: !0,
    applyOnMount: (
      /*applyOnMount*/
      B[0]
    ),
    hideRename: (
      /*hideRename*/
      B[1]
    ),
    hideSquircles: (
      /*hideSquircles*/
      B[2]
    )
  };
  return (
    /*_themeInfo*/
    B[4] !== void 0 && (n.themeInfo = /*_themeInfo*/
    B[4]), t = new mC({ props: n }), he.push(() => Me(t, "themeInfo", i)), t.$on(
      "apply",
      /*createCss*/
      B[5]
    ), {
      c() {
        e = L("div"), Se(t.$$.fragment);
      },
      m(a, C) {
        ee(a, e, C), xe(t, e, null), B[9](e), s = !0;
      },
      p(a, [C]) {
        const o = {};
        C & /*applyOnMount*/
        1 && (o.applyOnMount = /*applyOnMount*/
        a[0]), C & /*hideRename*/
        2 && (o.hideRename = /*hideRename*/
        a[1]), C & /*hideSquircles*/
        4 && (o.hideSquircles = /*hideSquircles*/
        a[2]), !r && C & /*_themeInfo*/
        16 && (r = !0, o.themeInfo = /*_themeInfo*/
        a[4], Re(() => r = !1)), t.$set(o);
      },
      i(a) {
        s || (Y(t.$$.fragment, a), s = !0);
      },
      o(a) {
        re(t.$$.fragment, a), s = !1;
      },
      d(a) {
        a && $(e), ke(t), B[9](null);
      }
    }
  );
}
function K6(B, e, t) {
  let r, { themeInfo: s } = e, { blueWebScssSrc: i } = e, { applyOnMount: n = !1 } = e, { hideRename: a = !0 } = e, { hideSquircles: C = !0 } = e, o = {
    name: "My theme",
    variables: { $theme: "hsl(0deg 50% 94%)" },
    appSettings: {},
    exportOnlyCssVars: !0,
    includeNeuScss: !1,
    appearance: "soft",
    blueWebVersion: "latest",
    ...s
  };
  const l = async () => {
    let c = "";
    o.customStyle && (c += `${o.customStyle}

`), c += `// Blue variables
//

`, o.variables && Object.keys(o.variables).forEach((d) => {
      o.variables[d] !== "" && (c += d + ": " + o.variables[d] + `;
`);
    }), c += await fetch(i || `https://unpkg.com/blue-web@${o.blueWebVersion || "latest"}/dist/merged.scss`).then((d) => d.text());
    const h = await L6(c, !1, o.exportOnlyCssVars), b = new CustomEvent(
      "compile",
      {
        detail: { css: h, themeInfo: o },
        bubbles: !0,
        composed: !0
      }
    );
    r.dispatchEvent(b);
  };
  function u(c) {
    o = c, t(4, o);
  }
  function f(c) {
    he[c ? "unshift" : "push"](() => {
      r = c, t(3, r);
    });
  }
  return B.$$set = (c) => {
    "themeInfo" in c && t(6, s = c.themeInfo), "blueWebScssSrc" in c && t(7, i = c.blueWebScssSrc), "applyOnMount" in c && t(0, n = c.applyOnMount), "hideRename" in c && t(1, a = c.hideRename), "hideSquircles" in c && t(2, C = c.hideSquircles);
  }, [
    n,
    a,
    C,
    r,
    o,
    l,
    s,
    i,
    u,
    f
  ];
}
class J6 extends At {
  constructor(e) {
    super(), xt(
      this,
      e,
      K6,
      H6,
      wt,
      {
        themeInfo: 6,
        blueWebScssSrc: 7,
        applyOnMount: 0,
        hideRename: 1,
        hideSquircles: 2
      },
      N6
    );
  }
  get themeInfo() {
    return this.$$.ctx[6];
  }
  set themeInfo(e) {
    this.$$set({ themeInfo: e }), Z();
  }
  get blueWebScssSrc() {
    return this.$$.ctx[7];
  }
  set blueWebScssSrc(e) {
    this.$$set({ blueWebScssSrc: e }), Z();
  }
  get applyOnMount() {
    return this.$$.ctx[0];
  }
  set applyOnMount(e) {
    this.$$set({ applyOnMount: e }), Z();
  }
  get hideRename() {
    return this.$$.ctx[1];
  }
  set hideRename(e) {
    this.$$set({ hideRename: e }), Z();
  }
  get hideSquircles() {
    return this.$$.ctx[2];
  }
  set hideSquircles(e) {
    this.$$set({ hideSquircles: e }), Z();
  }
}
customElements.define("themify-appearance-helper-wrapper", kt(J6, { themeInfo: {}, blueWebScssSrc: {}, applyOnMount: { type: "Boolean" }, hideRename: { type: "Boolean" }, hideSquircles: { type: "Boolean" } }, [], [], !0));
