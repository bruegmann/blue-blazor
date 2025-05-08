import { b as Oe, v as Be, u as De, f as Ue, i as D } from "./version-6Oe8yWxl.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = globalThis, K = I.trustedTypes, ue = K ? K.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, Pe = "$lit$", A = `lit$${Math.random().toFixed(9).slice(2)}$`, Re = "?" + A, je = `<${Re}>`, M = document, F = () => M.createComment(""), O = (o) => o === null || typeof o != "object" && typeof o != "function", ce = Array.isArray, qe = (o) => ce(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", J = `[ 	
\f\r]`, z = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, pe = /-->/g, me = />/g, _ = RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), be = /'/g, fe = /"/g, ze = /^(?:script|style|textarea|title)$/i, Ve = (o) => (e, ...t) => ({ _$litType$: o, strings: e, values: t }), he = Ve(1), P = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), ge = /* @__PURE__ */ new WeakMap(), C = M.createTreeWalker(M, 129);
function Te(o, e) {
  if (!ce(o) || !o.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return ue !== void 0 ? ue.createHTML(e) : e;
}
const We = (o, e) => {
  const t = o.length - 1, r = [];
  let s, i = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", n = z;
  for (let a = 0; a < t; a++) {
    const l = o[a];
    let c, d, h = -1, w = 0;
    for (; w < l.length && (n.lastIndex = w, d = n.exec(l), d !== null); )
      w = n.lastIndex, n === z ? d[1] === "!--" ? n = pe : d[1] !== void 0 ? n = me : d[2] !== void 0 ? (ze.test(d[2]) && (s = RegExp("</" + d[2], "g")), n = _) : d[3] !== void 0 && (n = _) : n === _ ? d[0] === ">" ? (n = s ?? z, h = -1) : d[1] === void 0 ? h = -2 : (h = n.lastIndex - d[2].length, c = d[1], n = d[3] === void 0 ? _ : d[3] === '"' ? fe : be) : n === fe || n === be ? n = _ : n === pe || n === me ? n = z : (n = _, s = void 0);
    const y = n === _ && o[a + 1].startsWith("/>") ? " " : "";
    i += n === z ? l + je : h >= 0 ? (r.push(c), l.slice(0, h) + Pe + l.slice(h) + A + y) : l + A + (h === -2 ? a : y);
  }
  return [Te(o, i + (o[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class B {
  constructor({ strings: e, _$litType$: t }, r) {
    let s;
    this.parts = [];
    let i = 0, n = 0;
    const a = e.length - 1, l = this.parts, [c, d] = We(e, t);
    if (this.el = B.createElement(c, r), C.currentNode = this.el.content, t === 2 || t === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (s = C.nextNode()) !== null && l.length < a; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes())
          for (const h of s.getAttributeNames())
            if (h.endsWith(Pe)) {
              const w = d[n++], y = s.getAttribute(h).split(A), E = /([.?@])?(.*)/.exec(w);
              l.push({ type: 1, index: i, name: E[2], strings: y, ctor: E[1] === "." ? Ze : E[1] === "?" ? Ke : E[1] === "@" ? Ye : Q }), s.removeAttribute(h);
            } else
              h.startsWith(A) && (l.push({ type: 6, index: i }), s.removeAttribute(h));
        if (ze.test(s.tagName)) {
          const h = s.textContent.split(A), w = h.length - 1;
          if (w > 0) {
            s.textContent = K ? K.emptyScript : "";
            for (let y = 0; y < w; y++)
              s.append(h[y], F()), C.nextNode(), l.push({ type: 2, index: ++i });
            s.append(h[w], F());
          }
        }
      } else if (s.nodeType === 8)
        if (s.data === Re)
          l.push({ type: 2, index: i });
        else {
          let h = -1;
          for (; (h = s.data.indexOf(A, h + 1)) !== -1; )
            l.push({ type: 7, index: i }), h += A.length - 1;
        }
      i++;
    }
  }
  static createElement(e, t) {
    const r = M.createElement("template");
    return r.innerHTML = e, r;
  }
}
function R(o, e, t = o, r) {
  var n, a;
  if (e === P)
    return e;
  let s = r !== void 0 ? (n = t.o) == null ? void 0 : n[r] : t.l;
  const i = O(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== i && ((a = s == null ? void 0 : s._$AO) == null || a.call(s, !1), i === void 0 ? s = void 0 : (s = new i(o), s._$AT(o, t, r)), r !== void 0 ? (t.o ?? (t.o = []))[r] = s : t.l = s), s !== void 0 && (e = R(o, s._$AS(o, e.values), s, r)), e;
}
class Ge {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: r } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? M).importNode(t, !0);
    C.currentNode = s;
    let i = C.nextNode(), n = 0, a = 0, l = r[0];
    for (; l !== void 0; ) {
      if (n === l.index) {
        let c;
        l.type === 2 ? c = new U(i, i.nextSibling, this, e) : l.type === 1 ? c = new l.ctor(i, l.name, l.strings, this, e) : l.type === 6 && (c = new Qe(i, this, e)), this._$AV.push(c), l = r[++a];
      }
      n !== (l == null ? void 0 : l.index) && (i = C.nextNode(), n++);
    }
    return C.currentNode = M, s;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV)
      r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class U {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, r, s) {
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = s, this.v = (s == null ? void 0 : s.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = R(this, e, t), O(e) ? e === p || e == null || e === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : e !== this._$AH && e !== P && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : qe(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== p && O(this._$AH) ? this._$AA.nextSibling.data = e : this.T(M.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var i;
    const { values: t, _$litType$: r } = e, s = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = B.createElement(Te(r.h, r.h[0]), this.options)), r);
    if (((i = this._$AH) == null ? void 0 : i._$AD) === s)
      this._$AH.p(t);
    else {
      const n = new Ge(s, this), a = n.u(this.options);
      n.p(t), this.T(a), this._$AH = n;
    }
  }
  _$AC(e) {
    let t = ge.get(e.strings);
    return t === void 0 && ge.set(e.strings, t = new B(e)), t;
  }
  k(e) {
    ce(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, s = 0;
    for (const i of e)
      s === t.length ? t.push(r = new U(this.O(F()), this.O(F()), this, this.options)) : r = t[s], r._$AI(i), s++;
    s < t.length && (this._$AR(r && r._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const s = e.nextSibling;
      e.remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class Q {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, s, i) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = i, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = p;
  }
  _$AI(e, t = this, r, s) {
    const i = this.strings;
    let n = !1;
    if (i === void 0)
      e = R(this, e, t, 0), n = !O(e) || e !== this._$AH && e !== P, n && (this._$AH = e);
    else {
      const a = e;
      let l, c;
      for (e = i[0], l = 0; l < i.length - 1; l++)
        c = R(this, a[r + l], t, l), c === P && (c = this._$AH[l]), n || (n = !O(c) || c !== this._$AH[l]), c === p ? e = p : e !== p && (e += (c ?? "") + i[l + 1]), this._$AH[l] = c;
    }
    n && !s && this.j(e);
  }
  j(e) {
    e === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Ze extends Q {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === p ? void 0 : e;
  }
}
class Ke extends Q {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== p);
  }
}
class Ye extends Q {
  constructor(e, t, r, s, i) {
    super(e, t, r, s, i), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = R(this, e, t, 0) ?? p) === P)
      return;
    const r = this._$AH, s = e === p && r !== p || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, i = e !== p && (r === p || s);
    s && this.element.removeEventListener(this.name, this, r), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Qe {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    R(this, e);
  }
}
const ee = I.litHtmlPolyfillSupport;
ee == null || ee(B, U), (I.litHtmlVersions ?? (I.litHtmlVersions = [])).push("3.2.0");
const Xe = (o, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = r._$litPart$;
  if (s === void 0) {
    const i = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = s = new U(e.insertBefore(F(), i), i, void 0, t ?? {});
  }
  return s._$AI(o), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class L extends Oe {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = Xe(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this.o) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.o) == null || e.setConnected(!1);
  }
  render() {
    return P;
  }
}
var He;
L._$litElement$ = !0, L.finalized = !0, (He = globalThis.litElementHydrateSupport) == null || He.call(globalThis, { LitElement: L });
const te = globalThis.litElementPolyfillSupport;
te == null || te({ LitElement: L });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
const ie = /* @__PURE__ */ new Set(), Je = () => {
  const o = document.documentElement.dir === "rtl" ? document.documentElement.dir : "ltr";
  ie.forEach((e) => {
    e.setAttribute("dir", o);
  });
}, et = new MutationObserver(Je);
et.observe(document.documentElement, { attributes: !0, attributeFilter: ["dir"] });
const tt = (o) => typeof o.startManagingContentDirection < "u" || o.tagName === "SP-THEME";
function rt(o) {
  class e extends o {
    get isLTR() {
      return this.dir === "ltr";
    }
    hasVisibleFocusInTree() {
      const r = ((s = document) => {
        var i;
        let n = s.activeElement;
        for (; n != null && n.shadowRoot && n.shadowRoot.activeElement; )
          n = n.shadowRoot.activeElement;
        const a = n ? [n] : [];
        for (; n; ) {
          const l = n.assignedSlot || n.parentElement || ((i = n.getRootNode()) == null ? void 0 : i.host);
          l && a.push(l), n = l;
        }
        return a;
      })(this.getRootNode())[0];
      if (!r)
        return !1;
      try {
        return r.matches(":focus-visible") || r.matches(".focus-visible");
      } catch {
        return r.matches(".focus-visible");
      }
    }
    connectedCallback() {
      if (!this.hasAttribute("dir")) {
        let r = this.assignedSlot || this.parentNode;
        for (; r !== document.documentElement && !tt(r); )
          r = r.assignedSlot || r.parentNode || r.host;
        if (this.dir = r.dir === "rtl" ? r.dir : this.dir || "ltr", r === document.documentElement)
          ie.add(this);
        else {
          const { localName: s } = r;
          s.search("-") > -1 && !customElements.get(s) ? customElements.whenDefined(s).then(() => {
            r.startManagingContentDirection(this);
          }) : r.startManagingContentDirection(this);
        }
        this._dirParent = r;
      }
      super.connectedCallback();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._dirParent && (this._dirParent === document.documentElement ? ie.delete(this) : this._dirParent.stopManagingContentDirection(this), this.removeAttribute("dir"));
    }
  }
  return e;
}
class X extends rt(L) {
}
X.VERSION = Be;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot = { attribute: !0, type: String, converter: De, reflect: !1, hasChanged: Ue }, st = (o = ot, e, t) => {
  const { kind: r, metadata: s } = t;
  let i = globalThis.litPropertyMetadata.get(s);
  if (i === void 0 && globalThis.litPropertyMetadata.set(s, i = /* @__PURE__ */ new Map()), i.set(t.name, o), r === "accessor") {
    const { name: n } = t;
    return { set(a) {
      const l = e.get.call(this);
      e.set.call(this, a), this.requestUpdate(n, l, o);
    }, init(a) {
      return a !== void 0 && this.P(n, void 0, o), a;
    } };
  }
  if (r === "setter") {
    const { name: n } = t;
    return function(a) {
      const l = this[n];
      e.call(this, a), this.requestUpdate(n, l, o);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function b(o) {
  return (e, t) => typeof t == "object" ? st(o, e, t) : ((r, s, i) => {
    const n = s.hasOwnProperty(i);
    return s.constructor.createProperty(i, n ? { ...r, wrapped: !0 } : r), n ? Object.getOwnPropertyDescriptor(s, i) : void 0;
  })(o, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ve = (o, e, t) => (t.configurable = !0, t.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(o, e, t), t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function we(o, e) {
  return (t, r, s) => {
    const i = (n) => {
      var a;
      return ((a = n.renderRoot) == null ? void 0 : a.querySelector(o)) ?? null;
    };
    if (e) {
      const { get: n, set: a } = typeof r == "object" ? t : s ?? (() => {
        const l = Symbol();
        return { get() {
          return this[l];
        }, set(c) {
          this[l] = c;
        } };
      })();
      return ve(t, r, { get() {
        let l = n.call(this);
        return l === void 0 && (l = i(this), (l !== null || this.hasUpdated) && a.call(this, l)), l;
      } });
    }
    return ve(t, r, { get() {
      return i(this);
    } });
  };
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it = (o) => o ?? p;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, at = (o) => (...e) => ({ _$litDirective$: o, values: e });
let lt = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, r) {
    this.t = e, this._$AM = t, this.i = r;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = (o) => o.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N = (o, e) => {
  var r;
  const t = o._$AN;
  if (t === void 0)
    return !1;
  for (const s of t)
    (r = s._$AO) == null || r.call(s, e, !1), N(s, e);
  return !0;
}, Y = (o) => {
  let e, t;
  do {
    if ((e = o._$AM) === void 0)
      break;
    t = e._$AN, t.delete(o), o = e;
  } while ((t == null ? void 0 : t.size) === 0);
}, Ie = (o) => {
  for (let e; e = o._$AM; o = e) {
    let t = e._$AN;
    if (t === void 0)
      e._$AN = t = /* @__PURE__ */ new Set();
    else if (t.has(o))
      break;
    t.add(o), ut(e);
  }
};
function ht(o) {
  this._$AN !== void 0 ? (Y(this), this._$AM = o, Ie(this)) : this._$AM = o;
}
function dt(o, e = !1, t = 0) {
  const r = this._$AH, s = this._$AN;
  if (s !== void 0 && s.size !== 0)
    if (e)
      if (Array.isArray(r))
        for (let i = t; i < r.length; i++)
          N(r[i], !1), Y(r[i]);
      else
        r != null && (N(r, !1), Y(r));
    else
      N(this, o);
}
const ut = (o) => {
  o.type == nt.CHILD && (o._$AP ?? (o._$AP = dt), o._$AQ ?? (o._$AQ = ht));
};
class pt extends lt {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, t, r) {
    super._$AT(e, t, r), Ie(this), this.isConnected = e._$AU;
  }
  _$AO(e, t = !0) {
    var r, s;
    e !== this.isConnected && (this.isConnected = e, e ? (r = this.reconnected) == null || r.call(this) : (s = this.disconnected) == null || s.call(this)), t && (N(this, e), Y(this));
  }
  setValue(e) {
    if (ct(this.t))
      this.t._$AI(e, this);
    else {
      const t = [...this.t._$AH];
      t[this.i] = e, this.t._$AI(t, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
const H = ["", () => {
}];
class mt extends pt {
  constructor() {
    super(...arguments), this.start = H, this.streamInside = H, this.end = H, this.streamOutside = H, this.state = "off", this.handleStart = (e) => {
      this.clearStream(), this.callHandler(this.start[1], e), !e.defaultPrevented && (this.removeListeners(), this.addListeners("on"));
    }, this.handleInside = (e) => {
      this.handleStream(this.streamInside[1], e);
    }, this.handleEnd = (e) => {
      this.clearStream(), this.callHandler(this.end[1], e), this.removeListeners(), this.addListeners("off");
    }, this.handleOutside = (e) => {
      this.handleStream(this.streamOutside[1], e);
    };
  }
  render(e) {
    return p;
  }
  update(e, [{ start: t, end: r, streamInside: s = H, streamOutside: i = H }]) {
    var n;
    this.element !== e.element && (this.element = e.element, this.removeListeners()), this.host = ((n = e.options) == null ? void 0 : n.host) || this.element, this.start = t, this.end = r, this.streamInside = s, this.streamOutside = i, this.addListeners();
  }
  addListeners(e) {
    this.state = e || this.state, this.state === "off" ? (this.addListener(this.streamOutside[0], this.handleOutside), this.addListener(this.start[0], this.handleStart)) : this.state === "on" && (this.addListener(this.streamInside[0], this.handleInside), this.addListener(this.end[0], this.handleEnd));
  }
  callHandler(e, t) {
    typeof e == "function" ? e.call(this.host, t) : e.handleEvent(t);
  }
  handleStream(e, t) {
    this.stream || (this.callHandler(e, t), this.stream = requestAnimationFrame(() => {
      this.stream = void 0;
    }));
  }
  clearStream() {
    this.stream != null && (cancelAnimationFrame(this.stream), this.stream = void 0);
  }
  addListener(e, t) {
    Array.isArray(e) ? e.map((r) => {
      this.element.addEventListener(r, t);
    }) : this.element.addEventListener(e, t);
  }
  removeListener(e, t) {
    Array.isArray(e) ? e.map((r) => {
      this.element.removeEventListener(r, t);
    }) : this.element.removeEventListener(e, t);
  }
  removeListeners() {
    this.removeListener(this.start[0], this.handleStart), this.removeListener(this.streamInside[0], this.handleInside), this.removeListener(this.end[0], this.handleEnd), this.removeListener(this.streamOutside[0], this.handleOutside);
  }
  disconnected() {
    this.removeListeners();
  }
  reconnected() {
    this.addListeners();
  }
}
const bt = at(mt);
let ne = !0;
try {
  document.body.querySelector(":focus-visible");
} catch {
  ne = !1, import("./focus-visible-EWri_va_.js").then((e) => e.f);
}
const ft = (o) => {
  var e, t;
  const r = (n) => {
    if (n.shadowRoot == null || n.hasAttribute("data-js-focus-visible"))
      return () => {
      };
    if (self.applyFocusVisiblePolyfill)
      self.applyFocusVisiblePolyfill(n.shadowRoot), n.manageAutoFocus && n.manageAutoFocus();
    else {
      const a = () => {
        self.applyFocusVisiblePolyfill && n.shadowRoot && self.applyFocusVisiblePolyfill(n.shadowRoot), n.manageAutoFocus && n.manageAutoFocus();
      };
      return self.addEventListener("focus-visible-polyfill-ready", a, { once: !0 }), () => {
        self.removeEventListener("focus-visible-polyfill-ready", a);
      };
    }
    return () => {
    };
  }, s = Symbol("endPolyfillCoordination");
  class i extends (t = o, e = s, t) {
    constructor() {
      super(...arguments), this[e] = null;
    }
    connectedCallback() {
      super.connectedCallback && super.connectedCallback(), ne || requestAnimationFrame(() => {
        this[s] == null && (this[s] = r(this));
      });
    }
    disconnectedCallback() {
      super.disconnectedCallback && super.disconnectedCallback(), ne || requestAnimationFrame(() => {
        this[s] != null && (this[s](), this[s] = null);
      });
    }
  }
  return i;
};
var gt = Object.defineProperty, vt = Object.getOwnPropertyDescriptor, re = (o, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? vt(e, t) : e, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && gt(e, t, s), s;
};
function ye() {
  return new Promise((o) => requestAnimationFrame(() => o()));
}
class Z extends ft(X) {
  constructor() {
    super(...arguments), this.disabled = !1, this.autofocus = !1, this._tabIndex = 0, this.manipulatingTabindex = !1, this.autofocusReady = Promise.resolve();
  }
  get tabIndex() {
    if (this.focusElement === this) {
      const t = this.hasAttribute("tabindex") ? Number(this.getAttribute("tabindex")) : NaN;
      return isNaN(t) ? -1 : t;
    }
    const e = parseFloat(this.hasAttribute("tabindex") && this.getAttribute("tabindex") || "0");
    return this.disabled || e < 0 ? -1 : this.focusElement ? this._tabIndex : e;
  }
  set tabIndex(e) {
    var t;
    if (this.manipulatingTabindex) {
      this.manipulatingTabindex = !1;
      return;
    }
    if (this.focusElement === this) {
      if (this.disabled)
        this._tabIndex = e;
      else if (e !== this._tabIndex) {
        this._tabIndex = e;
        const r = "" + e;
        this.manipulatingTabindex = !0, this.setAttribute("tabindex", r);
      }
      return;
    }
    if (e === -1 ? this.addEventListener("pointerdown", this.onPointerdownManagementOfTabIndex) : (this.manipulatingTabindex = !0, this.removeEventListener("pointerdown", this.onPointerdownManagementOfTabIndex)), e === -1 || this.disabled) {
      if (this.manipulatingTabindex = !0, this.setAttribute("tabindex", "-1"), this.removeAttribute("focusable"), this.selfManageFocusElement)
        return;
      e !== -1 ? (this._tabIndex = e, this.manageFocusElementTabindex(e)) : (t = this.focusElement) == null || t.removeAttribute("tabindex");
      return;
    }
    this.setAttribute("focusable", ""), this.hasAttribute("tabindex") ? this.removeAttribute("tabindex") : this.manipulatingTabindex = !1, this._tabIndex = e, this.manageFocusElementTabindex(e);
  }
  onPointerdownManagementOfTabIndex() {
    this.tabIndex === -1 && setTimeout(() => {
      this.tabIndex = 0, this.focus({ preventScroll: !0 }), this.tabIndex = -1;
    });
  }
  async manageFocusElementTabindex(e) {
    this.focusElement || await this.updateComplete, e === null ? this.focusElement.removeAttribute("tabindex") : this.focusElement !== this && (this.focusElement.tabIndex = e);
  }
  get focusElement() {
    throw new Error("Must implement focusElement getter!");
  }
  get selfManageFocusElement() {
    return !1;
  }
  focus(e) {
    this.disabled || !this.focusElement || (this.focusElement !== this ? this.focusElement.focus(e) : HTMLElement.prototype.focus.apply(this, [e]));
  }
  blur() {
    const e = this.focusElement || this;
    e !== this ? e.blur() : HTMLElement.prototype.blur.apply(this);
  }
  click() {
    if (this.disabled)
      return;
    const e = this.focusElement || this;
    e !== this ? e.click() : HTMLElement.prototype.click.apply(this);
  }
  manageAutoFocus() {
    this.autofocus && (this.dispatchEvent(new KeyboardEvent("keydown", { code: "Tab" })), this.focusElement.focus());
  }
  firstUpdated(e) {
    super.firstUpdated(e), (!this.hasAttribute("tabindex") || this.getAttribute("tabindex") !== "-1") && this.setAttribute("focusable", "");
  }
  update(e) {
    e.has("disabled") && this.handleDisabledChanged(this.disabled, e.get("disabled")), super.update(e);
  }
  updated(e) {
    super.updated(e), e.has("disabled") && this.disabled && this.blur();
  }
  async handleDisabledChanged(e, t) {
    const r = () => this.focusElement !== this && typeof this.focusElement.disabled < "u";
    e ? (this.manipulatingTabindex = !0, this.setAttribute("tabindex", "-1"), await this.updateComplete, r() ? this.focusElement.disabled = !0 : this.setAttribute("aria-disabled", "true")) : t && (this.manipulatingTabindex = !0, this.focusElement === this ? this.setAttribute("tabindex", "" + this._tabIndex) : this.removeAttribute("tabindex"), await this.updateComplete, r() ? this.focusElement.disabled = !1 : this.removeAttribute("aria-disabled"));
  }
  async getUpdateComplete() {
    const e = await super.getUpdateComplete();
    return await this.autofocusReady, e;
  }
  connectedCallback() {
    super.connectedCallback(), this.autofocus && (this.autofocusReady = new Promise(async (e) => {
      await ye(), await ye(), e();
    }), this.updateComplete.then(() => {
      this.manageAutoFocus();
    }));
  }
}
re([b({ type: Boolean, reflect: !0 })], Z.prototype, "disabled", 2), re([b({ type: Boolean })], Z.prototype, "autofocus", 2), re([b({ type: Number })], Z.prototype, "tabIndex", 1);
const wt = D`
    :host{--spectrum-colorloupe-width:var(--spectrum-color-loupe-width);--spectrum-colorloupe-height:var(--spectrum-color-loupe-height);--spectrum-colorloupe-offset:var(--spectrum-color-loupe-bottom-to-color-handle);--spectrum-colorloupe-animation-distance:8px;--spectrum-colorloupe-drop-shadow-x:var(--spectrum-drop-shadow-x);--spectrum-colorloupe-drop-shadow-y:var(--spectrum-color-loupe-drop-shadow-y);--spectrum-colorloupe-drop-shadow-blur:var(--spectrum-color-loupe-drop-shadow-blur);--spectrum-colorloupe-drop-shadow-color:var(--spectrum-color-loupe-drop-shadow-color);--spectrum-colorloupe-outer-border-width:var(--spectrum-color-loupe-outer-border-width);--spectrum-colorloupe-inner-border-width:var(--spectrum-color-loupe-inner-border-width);--spectrum-colorloupe-outer-border-color:var(--spectrum-color-loupe-outer-border);--spectrum-colorloupe-inner-border-color:var(--spectrum-color-loupe-inner-border);--spectrum-colorloupe-checkerboard-dark-color:var(--spectrum-opacity-checkerboard-square-dark);--spectrum-colorloupe-checkerboard-light-color:var(--spectrum-opacity-checkerboard-square-light);inline-size:var(--spectrum-colorloupe-width);block-size:var(--spectrum-colorloupe-height);transform:translateY(var(--mod-colorloupe-animation-distance,var(--spectrum-colorloupe-animation-distance)));opacity:0;transform-origin:bottom;pointer-events:none;filter:drop-shadow(var(--mod-colorloupe-drop-shadow-x,var(--spectrum-colorloupe-drop-shadow-x))var(--mod-colorloupe-drop-shadow-y,var(--spectrum-colorloupe-drop-shadow-y))var(--mod-colorloupe-drop-shadow-blur,var(--spectrum-colorloupe-drop-shadow-blur))var(--mod-colorloupe-drop-shadow-color,var(--spectrum-colorloupe-drop-shadow-color)));transition:transform .1s ease-in-out,opacity .125s ease-in-out;position:absolute;inset-block-end:calc(var(--spectrum-color-handle-size) - var(--spectrum-color-handle-outer-border-width) + var(--mod-colorloupe-offset,var(--spectrum-colorloupe-offset)));inset-inline-end:calc(50% - var(--spectrum-colorloupe-width)/2)}:host:dir(rtl),:host([dir=rtl]){inset-inline-end:calc(50% - var(--spectrum-colorloupe-width)/2 - 1px)}:host([open]){opacity:1;transform:translate(0)}.spectrum-ColorLoupe-inner-border{fill:var(--spectrum-picked-color);stroke:var(--mod-colorloupe-inner-border-color,var(--spectrum-colorloupe-inner-border-color));stroke-width:var(--mod-colorloupe-inner-border-width,var(--spectrum-colorloupe-inner-border-width))}.spectrum-ColorLoupe-outer-border{fill:none;stroke:var(--highcontrast-colorloupe-outer-border-color,var(--mod-colorloupe-outer-border-color,var(--spectrum-colorloupe-outer-border-color)));stroke-width:calc(var(--mod-colorloupe-outer-border-width,var(--spectrum-colorloupe-outer-border-width)) + 2px)}.spectrum-ColorLoupe-checkerboard-pattern{fill:var(--spectrum-colorloupe-checkerboard-dark-color)}.spectrum-ColorLoupe-checkerboard-background{fill:var(--spectrum-colorloupe-checkerboard-light-color)}.spectrum-ColorLoupe-checkerboard-fill{fill:var(--spectrum-colorloupe-checkerboard-fill)}@media (forced-colors:active){:host{--highcontrast-colorloupe-outer-border-color:CanvasText}}svg{width:inherit;height:inherit}.loupe-clipped{clip-path:path("M23 61.575C19.0044 57.435 15.2591 53.0606 11.784 48.475C8.68949 44.4532 5.96348 40.1608 3.639 35.65C1.224 30.8 0 26.549 0 23C0.00319993 17.6937 1.84059 12.5516 5.20091 8.44488C8.56122 4.33815 13.2378 1.51928 18.4385 0.465803C23.6392 -0.587678 29.0442 0.189006 33.7378 2.66428C38.4314 5.13955 42.125 9.16122 44.193 14.048C45.3915 16.88 46.0061 19.9248 46 23C46 26.551 44.774 30.811 42.355 35.661C40.0274 40.1747 37.298 44.4698 34.2 48.494C30.7297 53.0728 26.9898 57.4409 23 61.575ZZ")}.opacity-checkerboard{block-size:100%;inline-size:100%;position:absolute;top:2px;left:2px}
`, yt = D`
    .opacity-checkerboard{--spectrum-opacity-checkerboard-dark:var(--spectrum-opacity-checkerboard-square-dark);--spectrum-opacity-checkerboard-light:var(--spectrum-opacity-checkerboard-square-light);--spectrum-opacity-checkerboard-size:var(--spectrum-opacity-checkerboard-square-size);--spectrum-opacity-checkerboard-position:left top;background:repeating-conic-gradient(var(--mod-opacity-checkerboard-light,var(--spectrum-opacity-checkerboard-light))0 25%,var(--mod-opacity-checkerboard-dark,var(--spectrum-opacity-checkerboard-dark))0 50%)var(--mod-opacity-checkerboard-position,var(--spectrum-opacity-checkerboard-position))/calc(var(--mod-opacity-checkerboard-size,var(--spectrum-opacity-checkerboard-size))*2)calc(var(--mod-opacity-checkerboard-size,var(--spectrum-opacity-checkerboard-size))*2)}@media (forced-colors:active){.opacity-checkerboard{forced-color-adjust:none}}
`;
var $t = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, $e = (o, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? kt(e, t) : e, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && $t(e, t, s), s;
};
class ae extends X {
  constructor() {
    super(...arguments), this.open = !1, this.color = "rgba(255, 0, 0, 0.5)";
  }
  static get styles() {
    return [yt, wt];
  }
  render() {
    return he`
            <div class="opacity-checkerboard loupe-clipped"></div>
            <div class="spectrum-ColorLoupe-inner-border loupe-clipped"></div>
            <div class="spectrum-ColorLoupe-outer-border loupe-clipped"></div>
            <svg
                aria-hidden="true"
                class="spectrum-ColorLoupe is-open"
                overflow="visible"
                style="--spectrum-picked-color: ${this.color}; position: absolute;"
            >
                <defs>
                    <path
                        id="loupe-path"
                        d="M23 61.575C19.0044 57.435 15.2591 53.0606 11.784 48.475C8.68949 44.4532 5.96348 40.1608 3.639 35.65C1.224 30.8 0 26.549 0 23C0.00319993 17.6937 1.84059 12.5516 5.20091 8.44488C8.56122 4.33815 13.2378 1.51928 18.4385 0.465803C23.6392 -0.587678 29.0442 0.189006 33.7378 2.66428C38.4314 5.13955 42.125 9.16122 44.193 14.048C45.3915 16.88 46.0061 19.9248 46 23C46 26.551 44.774 30.811 42.355 35.661C40.0274 40.1747 37.298 44.4698 34.2 48.494C30.7297 53.0728 26.9898 57.4409 23 61.575ZZ"
                        transform="translate(2, 2)"
                    />
                    <mask id="loupe-mask">
                        <rect
                            x="0"
                            y="0"
                            height="100"
                            width="100"
                            fill="white"
                        />
                        <use xlink:href="#path" fill="black" />
                    </mask>
                </defs>

                <g class="spectrum-ColorLoupe-loupe">
                    <g>
                        <use
                            xlink:href="#loupe-path"
                            mask="url(#loupe-mask)"
                            transform="translate(2, 2)"
                            class="spectrum-ColorLoupe-inner-border"
                        />
                        <use
                            xlink:href="#loupe-path"
                            mask="url(#loupe-mask)"
                            class="spectrum-ColorLoupe-outer-border"
                        />
                    </g>
                </g>
            </svg>
        `;
  }
}
$e([b({ type: Boolean, reflect: !0 })], ae.prototype, "open", 2), $e([b({ type: String })], ae.prototype, "color", 2);
function de(o, e) {
  customElements.define(o, e);
}
de("sp-color-loupe", ae);
const At = D`
    :host{--spectrum-opacity-checkerboard-dark:var(--spectrum-opacity-checkerboard-square-dark);--spectrum-opacity-checkerboard-light:var(--spectrum-opacity-checkerboard-square-light);--spectrum-opacity-checkerboard-size:var(--spectrum-opacity-checkerboard-square-size);--spectrum-opacity-checkerboard-position:left top;background:repeating-conic-gradient(var(--mod-opacity-checkerboard-light,var(--spectrum-opacity-checkerboard-light))0 25%,var(--mod-opacity-checkerboard-dark,var(--spectrum-opacity-checkerboard-dark))0 50%)var(--mod-opacity-checkerboard-position,var(--spectrum-opacity-checkerboard-position))/calc(var(--mod-opacity-checkerboard-size,var(--spectrum-opacity-checkerboard-size))*2)calc(var(--mod-opacity-checkerboard-size,var(--spectrum-opacity-checkerboard-size))*2)}@media (forced-colors:active){:host{forced-color-adjust:none}}
`, xt = D`
    :host{--spectrum-colorhandle-size:var(--spectrum-color-handle-size);--spectrum-colorhandle-focused-size:var(--spectrum-color-handle-size-key-focus);--spectrum-colorhandle-hitarea-size:var(--spectrum-color-control-track-width);--spectrum-colorhandle-animation-duration:var(--spectrum-animation-duration-100);--spectrum-colorhandle-animation-easing:ease-in-out;--spectrum-colorhandle-outer-border-color:rgba(var(--spectrum-black-rgb),var(--spectrum-color-handle-outer-border-opacity));--spectrum-colorhandle-outer-border-width:var(--spectrum-color-handle-outer-border-width);--spectrum-colorhandle-inner-border-color:rgba(var(--spectrum-black-rgb),var(--spectrum-color-handle-inner-border-opacity));--spectrum-colorhandle-inner-border-width:var(--spectrum-color-handle-inner-border-width);--spectrum-colorhandle-border-width:var(--spectrum-color-handle-border-width);--spectrum-colorhandle-border-color:var(--spectrum-white);--spectrum-colorhandle-border-color-disabled:var(--spectrum-disabled-content-color);--spectrum-colorhandle-fill-color-disabled:var(--spectrum-disabled-background-color);--mod-opacity-checkerboard-position:50%;z-index:1;box-sizing:border-box;inline-size:var(--mod-colorhandle-size,var(--spectrum-colorhandle-size));block-size:var(--mod-colorhandle-size,var(--spectrum-colorhandle-size));margin-inline:calc(var(--mod-colorhandle-size,var(--spectrum-colorhandle-size))/2*-1);margin-block:calc(var(--mod-colorhandle-size,var(--spectrum-colorhandle-size))/2*-1);border-width:var(--mod-colorhandle-border-width,var(--spectrum-colorhandle-border-width));border-color:var(--highcontrast-colorhandle-border-color,var(--mod-colorhandle-border-color,var(--spectrum-colorhandle-border-color)));box-shadow:0 0 0 var(--mod-colorhandle-outer-border-width,var(--spectrum-colorhandle-outer-border-width))var(--mod-colorhandle-outer-border-color,var(--spectrum-colorhandle-outer-border-color));transition:all var(--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration))var(--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing));border-style:solid;border-radius:100%;display:block;position:absolute}:host:after{content:"";inset-inline:calc(50% - var(--mod-colorhandle-hitarea-size,var(--spectrum-colorhandle-hitarea-size))/2);inset-block:calc(50% - var(--mod-colorhandle-hitarea-size,var(--spectrum-colorhandle-hitarea-size))/2);inline-size:var(--mod-colorhandle-hitarea-size,var(--spectrum-colorhandle-hitarea-size));block-size:var(--mod-colorhandle-hitarea-size,var(--spectrum-colorhandle-hitarea-size));border-radius:var(--mod-colorhandle-hitarea-border-radius,100%);display:block;position:absolute}:host([focused]),:host(:focus-visible){inline-size:var(--mod-colorhandle-focused-size,var(--spectrum-colorhandle-focused-size));block-size:var(--mod-colorhandle-focused-size,var(--spectrum-colorhandle-focused-size));margin-inline:calc(var(--mod-colorhandle-size,var(--spectrum-colorhandle-size))*-1);margin-block:calc(var(--mod-colorhandle-size,var(--spectrum-colorhandle-size))*-1);outline:none}:host([disabled]){pointer-events:none;border-color:var(--highcontrast-colorhandle-border-color-disabled,var(--mod-colorhandle-border-color-disabled,var(--spectrum-colorhandle-border-color-disabled)));background:var(--highcontrast-colorhandle-fill-color-disabled,var(--mod-colorhandle-fill-color-disabled,var(--spectrum-colorhandle-fill-color-disabled)));box-shadow:none}:host([disabled]) .inner{display:none}.inner{inline-size:100%;block-size:100%;box-shadow:inset 0 0 0 var(--mod-colorhandle-inner-border-width,var(--spectrum-colorhandle-inner-border-width))var(--mod-colorhandle-inner-border-color,var(--spectrum-colorhandle-inner-border-color));background-color:var(--spectrum-picked-color);border-radius:100%}@media (forced-colors:active){:host{forced-color-adjust:none}:host([disabled]){--highcontrast-colorhandle-border-color-disabled:GrayText;--highcontrast-colorhandle-fill-color-disabled:Canvas}}:host{touch-action:none;transition:inline-size var(--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration))var(--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing)),block-size var(--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration))var(--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing)),border-width var(--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration))var(--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing)),margin-inline var(--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration))var(--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing)),margin-block var(--mod-colorhandle-animation-duration,var(--spectrum-colorhandle-animation-duration))var(--mod-colorhandle-animation-easing,var(--spectrum-colorhandle-animation-easing))}:host(:focus){outline:none}
`;
var _t = Object.defineProperty, Ct = Object.getOwnPropertyDescriptor, j = (o, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Ct(e, t) : e, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && _t(e, t, s), s;
};
class T extends X {
  constructor() {
    super(...arguments), this.disabled = !1, this.focused = !1, this.open = !1, this.color = "rgba(255, 0, 0, 0.5)";
  }
  static get styles() {
    return [At, xt];
  }
  handlePointerdown(e) {
    e.pointerType === "touch" && (this.open = !0), this.setPointerCapture(e.pointerId);
  }
  handlePointerup(e) {
    this.open = !1, this.releasePointerCapture(e.pointerId);
  }
  render() {
    return he`
            <div class="inner" style="background-color: ${this.color}"></div>
            <sp-color-loupe
                color=${this.color}
                ?open=${this.open && !this.disabled}
            ></sp-color-loupe>
        `;
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.addEventListener("pointerdown", this.handlePointerdown), this.addEventListener("pointerup", this.handlePointerup), this.addEventListener("pointercancel", this.handlePointerup);
  }
}
j([b({ type: Boolean, reflect: !0 })], T.prototype, "disabled", 2), j([b({ type: Boolean, reflect: !0 })], T.prototype, "focused", 2), j([b({ type: Boolean, reflect: !0 })], T.prototype, "open", 2), j([b({ type: String })], T.prototype, "color", 2);
de("sp-color-handle", T);
function m(o, e) {
  St(o) && (o = "100%");
  const t = Mt(o);
  return o = e === 360 ? o : Math.min(e, Math.max(0, parseFloat(o))), t && (o = parseInt(String(o * e), 10) / 100), Math.abs(o - e) < 1e-6 ? 1 : (e === 360 ? o = (o < 0 ? o % e + e : o % e) / parseFloat(String(e)) : o = o % e / parseFloat(String(e)), o);
}
function q(o) {
  return Math.min(1, Math.max(0, o));
}
function St(o) {
  return typeof o == "string" && o.indexOf(".") !== -1 && parseFloat(o) === 1;
}
function Mt(o) {
  return typeof o == "string" && o.indexOf("%") !== -1;
}
function Le(o) {
  return o = parseFloat(o), (isNaN(o) || o < 0 || o > 1) && (o = 1), o;
}
function V(o) {
  return Number(o) <= 1 ? `${Number(o) * 100}%` : o;
}
function S(o) {
  return o.length === 1 ? "0" + o : String(o);
}
function Et(o, e, t) {
  return {
    r: m(o, 255) * 255,
    g: m(e, 255) * 255,
    b: m(t, 255) * 255
  };
}
function ke(o, e, t) {
  o = m(o, 255), e = m(e, 255), t = m(t, 255);
  const r = Math.max(o, e, t), s = Math.min(o, e, t);
  let i = 0, n = 0;
  const a = (r + s) / 2;
  if (r === s)
    n = 0, i = 0;
  else {
    const l = r - s;
    switch (n = a > 0.5 ? l / (2 - r - s) : l / (r + s), r) {
      case o:
        i = (e - t) / l + (e < t ? 6 : 0);
        break;
      case e:
        i = (t - o) / l + 2;
        break;
      case t:
        i = (o - e) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: n, l: a };
}
function oe(o, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? o + (e - o) * (6 * t) : t < 1 / 2 ? e : t < 2 / 3 ? o + (e - o) * (2 / 3 - t) * 6 : o;
}
function Ht(o, e, t) {
  let r, s, i;
  if (o = m(o, 360), e = m(e, 100), t = m(t, 100), e === 0)
    s = t, i = t, r = t;
  else {
    const n = t < 0.5 ? t * (1 + e) : t + e - t * e, a = 2 * t - n;
    r = oe(a, n, o + 1 / 3), s = oe(a, n, o), i = oe(a, n, o - 1 / 3);
  }
  return { r: r * 255, g: s * 255, b: i * 255 };
}
function Ae(o, e, t) {
  o = m(o, 255), e = m(e, 255), t = m(t, 255);
  const r = Math.max(o, e, t), s = Math.min(o, e, t);
  let i = 0;
  const n = r, a = r - s, l = r === 0 ? 0 : a / r;
  if (r === s)
    i = 0;
  else {
    switch (r) {
      case o:
        i = (e - t) / a + (e < t ? 6 : 0);
        break;
      case e:
        i = (t - o) / a + 2;
        break;
      case t:
        i = (o - e) / a + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: l, v: n };
}
function Pt(o, e, t) {
  o = m(o, 360) * 6, e = m(e, 100), t = m(t, 100);
  const r = Math.floor(o), s = o - r, i = t * (1 - e), n = t * (1 - s * e), a = t * (1 - (1 - s) * e), l = r % 6, c = [t, n, i, i, a, t][l], d = [a, t, t, n, i, i][l], h = [i, i, a, t, t, n][l];
  return { r: c * 255, g: d * 255, b: h * 255 };
}
function xe(o, e, t, r) {
  const s = [
    S(Math.round(o).toString(16)),
    S(Math.round(e).toString(16)),
    S(Math.round(t).toString(16))
  ];
  return r && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}
function Rt(o, e, t, r, s) {
  const i = [
    S(Math.round(o).toString(16)),
    S(Math.round(e).toString(16)),
    S(Math.round(t).toString(16)),
    S(Tt(r))
  ];
  return s && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function zt(o, e, t, r) {
  const s = o / 100, i = e / 100, n = t / 100, a = r / 100, l = 255 * (1 - s) * (1 - a), c = 255 * (1 - i) * (1 - a), d = 255 * (1 - n) * (1 - a);
  return { r: l, g: c, b: d };
}
function _e(o, e, t) {
  let r = 1 - o / 255, s = 1 - e / 255, i = 1 - t / 255, n = Math.min(r, s, i);
  return n === 1 ? (r = 0, s = 0, i = 0) : (r = (r - n) / (1 - n) * 100, s = (s - n) / (1 - n) * 100, i = (i - n) / (1 - n) * 100), n *= 100, {
    c: Math.round(r),
    m: Math.round(s),
    y: Math.round(i),
    k: Math.round(n)
  };
}
function Tt(o) {
  return Math.round(parseFloat(o) * 255).toString(16);
}
function Ce(o) {
  return g(o) / 255;
}
function g(o) {
  return parseInt(o, 16);
}
function It(o) {
  return {
    r: o >> 16,
    g: (o & 65280) >> 8,
    b: o & 255
  };
}
const le = {
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
  darkgrey: "#a9a9a9",
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
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
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
  mediumpurple: "#9370db",
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
  palevioletred: "#db7093",
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
  slategrey: "#708090",
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
function Lt(o) {
  let e = { r: 0, g: 0, b: 0 }, t = 1, r = null, s = null, i = null, n = !1, a = !1;
  return typeof o == "string" && (o = Ot(o)), typeof o == "object" && (f(o.r) && f(o.g) && f(o.b) ? (e = Et(o.r, o.g, o.b), n = !0, a = String(o.r).substr(-1) === "%" ? "prgb" : "rgb") : f(o.h) && f(o.s) && f(o.v) ? (r = V(o.s), s = V(o.v), e = Pt(o.h, r, s), n = !0, a = "hsv") : f(o.h) && f(o.s) && f(o.l) ? (r = V(o.s), i = V(o.l), e = Ht(o.h, r, i), n = !0, a = "hsl") : f(o.c) && f(o.m) && f(o.y) && f(o.k) && (e = zt(o.c, o.m, o.y, o.k), n = !0, a = "cmyk"), Object.prototype.hasOwnProperty.call(o, "a") && (t = o.a)), t = Le(t), {
    ok: n,
    format: o.format || a,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: t
  };
}
const Nt = "[-\\+]?\\d+%?", Ft = "[-\\+]?\\d*\\.\\d+%?", x = "(?:" + Ft + ")|(?:" + Nt + ")", se = "[\\s|\\(]+(" + x + ")[,|\\s]+(" + x + ")[,|\\s]+(" + x + ")\\s*\\)?", W = (
  // eslint-disable-next-line prettier/prettier
  "[\\s|\\(]+(" + x + ")[,|\\s]+(" + x + ")[,|\\s]+(" + x + ")[,|\\s]+(" + x + ")\\s*\\)?"
), v = {
  CSS_UNIT: new RegExp(x),
  rgb: new RegExp("rgb" + se),
  rgba: new RegExp("rgba" + W),
  hsl: new RegExp("hsl" + se),
  hsla: new RegExp("hsla" + W),
  hsv: new RegExp("hsv" + se),
  hsva: new RegExp("hsva" + W),
  cmyk: new RegExp("cmyk" + W),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Ot(o) {
  if (o = o.trim().toLowerCase(), o.length === 0)
    return !1;
  let e = !1;
  if (le[o])
    o = le[o], e = !0;
  else if (o === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let t = v.rgb.exec(o);
  return t ? { r: t[1], g: t[2], b: t[3] } : (t = v.rgba.exec(o), t ? { r: t[1], g: t[2], b: t[3], a: t[4] } : (t = v.hsl.exec(o), t ? { h: t[1], s: t[2], l: t[3] } : (t = v.hsla.exec(o), t ? { h: t[1], s: t[2], l: t[3], a: t[4] } : (t = v.hsv.exec(o), t ? { h: t[1], s: t[2], v: t[3] } : (t = v.hsva.exec(o), t ? { h: t[1], s: t[2], v: t[3], a: t[4] } : (t = v.cmyk.exec(o), t ? {
    c: t[1],
    m: t[2],
    y: t[3],
    k: t[4]
  } : (t = v.hex8.exec(o), t ? {
    r: g(t[1]),
    g: g(t[2]),
    b: g(t[3]),
    a: Ce(t[4]),
    format: e ? "name" : "hex8"
  } : (t = v.hex6.exec(o), t ? {
    r: g(t[1]),
    g: g(t[2]),
    b: g(t[3]),
    format: e ? "name" : "hex"
  } : (t = v.hex4.exec(o), t ? {
    r: g(t[1] + t[1]),
    g: g(t[2] + t[2]),
    b: g(t[3] + t[3]),
    a: Ce(t[4] + t[4]),
    format: e ? "name" : "hex8"
  } : (t = v.hex3.exec(o), t ? {
    r: g(t[1] + t[1]),
    g: g(t[2] + t[2]),
    b: g(t[3] + t[3]),
    format: e ? "name" : "hex"
  } : !1))))))))));
}
function f(o) {
  return typeof o == "number" ? !Number.isNaN(o) : v.CSS_UNIT.test(o);
}
class u {
  constructor(e = "", t = {}) {
    if (e instanceof u)
      return e;
    typeof e == "number" && (e = It(e)), this.originalInput = e;
    const r = Lt(e);
    this.originalInput = e, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = t.format ?? r.format, this.gradientType = t.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
  }
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return !this.isDark();
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   */
  getBrightness() {
    const e = this.toRgb();
    return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
  }
  /**
   * Returns the perceived luminance of a color, from 0-1.
   */
  getLuminance() {
    const e = this.toRgb();
    let t, r, s;
    const i = e.r / 255, n = e.g / 255, a = e.b / 255;
    return i <= 0.03928 ? t = i / 12.92 : t = Math.pow((i + 0.055) / 1.055, 2.4), n <= 0.03928 ? r = n / 12.92 : r = Math.pow((n + 0.055) / 1.055, 2.4), a <= 0.03928 ? s = a / 12.92 : s = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * t + 0.7152 * r + 0.0722 * s;
  }
  /**
   * Returns the alpha value of a color, from 0-1.
   */
  getAlpha() {
    return this.a;
  }
  /**
   * Sets the alpha value on the current color.
   *
   * @param alpha - The new alpha value. The accepted range is 0-1.
   */
  setAlpha(e) {
    return this.a = Le(e), this.roundA = Math.round(100 * this.a) / 100, this;
  }
  /**
   * Returns whether the color is monochrome.
   */
  isMonochrome() {
    const { s: e } = this.toHsl();
    return e === 0;
  }
  /**
   * Returns the object as a HSVA object.
   */
  toHsv() {
    const e = Ae(this.r, this.g, this.b);
    return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
  }
  /**
   * Returns the hsva values interpolated into a string with the following format:
   * "hsva(xxx, xxx, xxx, xx)".
   */
  toHsvString() {
    const e = Ae(this.r, this.g, this.b), t = Math.round(e.h * 360), r = Math.round(e.s * 100), s = Math.round(e.v * 100);
    return this.a === 1 ? `hsv(${t}, ${r}%, ${s}%)` : `hsva(${t}, ${r}%, ${s}%, ${this.roundA})`;
  }
  /**
   * Returns the object as a HSLA object.
   */
  toHsl() {
    const e = ke(this.r, this.g, this.b);
    return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
  }
  /**
   * Returns the hsla values interpolated into a string with the following format:
   * "hsla(xxx, xxx, xxx, xx)".
   */
  toHslString() {
    const e = ke(this.r, this.g, this.b), t = Math.round(e.h * 360), r = Math.round(e.s * 100), s = Math.round(e.l * 100);
    return this.a === 1 ? `hsl(${t}, ${r}%, ${s}%)` : `hsla(${t}, ${r}%, ${s}%, ${this.roundA})`;
  }
  /**
   * Returns the hex value of the color.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHex(e = !1) {
    return xe(this.r, this.g, this.b, e);
  }
  /**
   * Returns the hex value of the color -with a # prefixed.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHexString(e = !1) {
    return "#" + this.toHex(e);
  }
  /**
   * Returns the hex 8 value of the color.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8(e = !1) {
    return Rt(this.r, this.g, this.b, this.a, e);
  }
  /**
   * Returns the hex 8 value of the color -with a # prefixed.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8String(e = !1) {
    return "#" + this.toHex8(e);
  }
  /**
   * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
   * @param allowShortChar will shorten hex value to 3 or 4 char if possible
   */
  toHexShortString(e = !1) {
    return this.a === 1 ? this.toHexString(e) : this.toHex8String(e);
  }
  /**
   * Returns the object as a RGBA object.
   */
  toRgb() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA values interpolated into a string with the following format:
   * "RGBA(xxx, xxx, xxx, xx)".
   */
  toRgbString() {
    const e = Math.round(this.r), t = Math.round(this.g), r = Math.round(this.b);
    return this.a === 1 ? `rgb(${e}, ${t}, ${r})` : `rgba(${e}, ${t}, ${r}, ${this.roundA})`;
  }
  /**
   * Returns the object as a RGBA object.
   */
  toPercentageRgb() {
    const e = (t) => `${Math.round(m(t, 255) * 100)}%`;
    return {
      r: e(this.r),
      g: e(this.g),
      b: e(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA relative values interpolated into a string
   */
  toPercentageRgbString() {
    const e = (t) => Math.round(m(t, 255) * 100);
    return this.a === 1 ? `rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)` : `rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`;
  }
  toCmyk() {
    return {
      ..._e(this.r, this.g, this.b)
    };
  }
  toCmykString() {
    const { c: e, m: t, y: r, k: s } = _e(this.r, this.g, this.b);
    return `cmyk(${e}, ${t}, ${r}, ${s})`;
  }
  /**
   * The 'real' name of the color -if there is one.
   */
  toName() {
    if (this.a === 0)
      return "transparent";
    if (this.a < 1)
      return !1;
    const e = "#" + xe(this.r, this.g, this.b, !1);
    for (const [t, r] of Object.entries(le))
      if (e === r)
        return t;
    return !1;
  }
  toString(e) {
    const t = !!e;
    e = e ?? this.format;
    let r = !1;
    const s = this.a < 1 && this.a >= 0;
    return !t && s && (e.startsWith("hex") || e === "name") ? e === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (r = this.toRgbString()), e === "prgb" && (r = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (r = this.toHexString()), e === "hex3" && (r = this.toHexString(!0)), e === "hex4" && (r = this.toHex8String(!0)), e === "hex8" && (r = this.toHex8String()), e === "name" && (r = this.toName()), e === "hsl" && (r = this.toHslString()), e === "hsv" && (r = this.toHsvString()), e === "cmyk" && (r = this.toCmykString()), r || this.toHexString());
  }
  toNumber() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }
  clone() {
    return new u(this.toString());
  }
  /**
   * Lighten the color a given amount. Providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  lighten(e = 10) {
    const t = this.toHsl();
    return t.l += e / 100, t.l = q(t.l), new u(t);
  }
  /**
   * Brighten the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  brighten(e = 10) {
    const t = this.toRgb();
    return t.r = Math.max(0, Math.min(255, t.r - Math.round(255 * -(e / 100)))), t.g = Math.max(0, Math.min(255, t.g - Math.round(255 * -(e / 100)))), t.b = Math.max(0, Math.min(255, t.b - Math.round(255 * -(e / 100)))), new u(t);
  }
  /**
   * Darken the color a given amount, from 0 to 100.
   * Providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  darken(e = 10) {
    const t = this.toHsl();
    return t.l -= e / 100, t.l = q(t.l), new u(t);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  tint(e = 10) {
    return this.mix("white", e);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  shade(e = 10) {
    return this.mix("black", e);
  }
  /**
   * Desaturate the color a given amount, from 0 to 100.
   * Providing 100 will is the same as calling greyscale
   * @param amount - valid between 1-100
   */
  desaturate(e = 10) {
    const t = this.toHsl();
    return t.s -= e / 100, t.s = q(t.s), new u(t);
  }
  /**
   * Saturate the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  saturate(e = 10) {
    const t = this.toHsl();
    return t.s += e / 100, t.s = q(t.s), new u(t);
  }
  /**
   * Completely desaturates a color into greyscale.
   * Same as calling `desaturate(100)`
   */
  greyscale() {
    return this.desaturate(100);
  }
  /**
   * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
   * Values outside of this range will be wrapped into this range.
   */
  spin(e) {
    const t = this.toHsl(), r = (t.h + e) % 360;
    return t.h = r < 0 ? 360 + r : r, new u(t);
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(e, t = 50) {
    const r = this.toRgb(), s = new u(e).toRgb(), i = t / 100, n = {
      r: (s.r - r.r) * i + r.r,
      g: (s.g - r.g) * i + r.g,
      b: (s.b - r.b) * i + r.b,
      a: (s.a - r.a) * i + r.a
    };
    return new u(n);
  }
  analogous(e = 6, t = 30) {
    const r = this.toHsl(), s = 360 / t, i = [this];
    for (r.h = (r.h - (s * e >> 1) + 720) % 360; --e; )
      r.h = (r.h + s) % 360, i.push(new u(r));
    return i;
  }
  /**
   * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
   */
  complement() {
    const e = this.toHsl();
    return e.h = (e.h + 180) % 360, new u(e);
  }
  monochromatic(e = 6) {
    const t = this.toHsv(), { h: r } = t, { s } = t;
    let { v: i } = t;
    const n = [], a = 1 / e;
    for (; e--; )
      n.push(new u({ h: r, s, v: i })), i = (i + a) % 1;
    return n;
  }
  splitcomplement() {
    const e = this.toHsl(), { h: t } = e;
    return [
      this,
      new u({ h: (t + 72) % 360, s: e.s, l: e.l }),
      new u({ h: (t + 216) % 360, s: e.s, l: e.l })
    ];
  }
  /**
   * Compute how the color would appear on a background
   */
  onBackground(e) {
    const t = this.toRgb(), r = new u(e).toRgb(), s = t.a + r.a * (1 - t.a);
    return new u({
      r: (t.r * t.a + r.r * r.a * (1 - t.a)) / s,
      g: (t.g * t.a + r.g * r.a * (1 - t.a)) / s,
      b: (t.b * t.a + r.b * r.a * (1 - t.a)) / s,
      a: s
    });
  }
  /**
   * Alias for `polyad(3)`
   */
  triad() {
    return this.polyad(3);
  }
  /**
   * Alias for `polyad(4)`
   */
  tetrad() {
    return this.polyad(4);
  }
  /**
   * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
   * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
   */
  polyad(e) {
    const t = this.toHsl(), { h: r } = t, s = [this], i = 360 / e;
    for (let n = 1; n < e; n++)
      s.push(new u({ h: (r + n * i) % 360, s: t.s, l: t.l }));
    return s;
  }
  /**
   * compare color vs current color
   */
  equals(e) {
    const t = new u(e);
    return this.format === "cmyk" || t.format === "cmyk" ? this.toCmykString() === t.toCmykString() : this.toRgbString() === t.toRgbString();
  }
}
const Se = /^hs[v|l]a?\s?\((\d{1,3}\.?\d*?),?\s?(\d{1,3})/, Me = /(^hs[v|l]a?\s?\()\d{1,3}\.?\d*?(,?\s?)\d{1,3}/, Ee = /(^hs[v|l]a?\()\d{1,3}/, G = (o, e) => e ? o.toHexString() : o.toHex();
class Bt {
  constructor(e, { applyColorToState: t, extractColorFromState: r, maintains: s }) {
    this.maintains = "hue", this._hue = 0, this.getColorProcesses = { rgb: (i, n) => n ? i.toRgbString() : i.toRgb(), prgb: (i, n) => n ? i.toPercentageRgbString() : i.toPercentageRgb(), hex8: (i, n) => n ? i.toHex8String() : i.toHex8(), name: (i) => i.toName() || i.toRgbString(), hsl: (i, n) => {
      if (this.maintains === "hue") {
        if (n)
          return i.toHslString().replace(Ee, `$1${this.hue}`);
        {
          const { s: a, l, a: c } = i.toHsl();
          return { h: this.hue, s: a, l, a: c };
        }
      } else {
        if (n)
          return i.toHslString().replace(Me, `$1${this.hue}$2${this.saturation}`);
        {
          const { s: a, l, a: c } = i.toHsl();
          return { h: this.hue, s: a, l, a: c };
        }
      }
    }, hsv: (i, n) => {
      if (this.maintains === "hue") {
        if (n)
          return i.toHsvString().replace(Ee, `$1${this.hue}`);
        {
          const { s: a, v: l, a: c } = i.toHsv();
          return { h: this.hue, s: a, v: l, a: c };
        }
      } else {
        if (n)
          return i.toHsvString().replace(Me, `$1${this.hue}$2${this.saturation}`);
        {
          const { s: a, v: l, a: c } = i.toHsv();
          return { h: this.hue, s: a, v: l, a: c };
        }
      }
    }, hex: G, hex3: G, hex4: G, hex6: G }, this._color = new u({ h: 0, s: 1, v: 1 }), this._previousColor = new u({ h: 0, s: 1, v: 1 }), this._format = { format: "", isString: !1 }, this.host = e, this.applyColorToState = t, this.extractColorFromState = r, this.maintains = s || this.maintains;
  }
  setColorProcess(e, t, r, s) {
    this.maintains === "hue" ? this.setColorMaintainHue(e, t, r, s) : this.maintains === "saturation" && this.setColorMaintainSaturation(e, t, r, s);
  }
  setColorMaintainHue(e, t, r, s) {
    const { h: i, s: n, v: a } = this._color.toHsv();
    let l;
    if (s && r.startsWith("hs")) {
      const c = Se.exec(t);
      if (c !== null) {
        const [, d] = c;
        l = Number(d);
      }
    } else if (!s && r.startsWith("hs")) {
      const c = e.originalInput;
      l = Object.values(c)[0];
    }
    this.hue = l || i, this.applyColorToState({ h: i, s: n, v: a });
  }
  setColorMaintainSaturation(e, t, r, s) {
    if (s && r.startsWith("hs")) {
      const i = Se.exec(t);
      if (i !== null) {
        const [, n, a] = i;
        this.hue = Number(n), this.saturation = Number(a);
      }
    } else if (!s && r.startsWith("hs")) {
      const i = e.originalInput, n = Object.values(i);
      this.hue = n[0], this.saturation = n[1];
    } else {
      const { h: i } = e.toHsv();
      this.hue = i;
    }
    this.applyColorToState(e.toHsv());
  }
  applyColorFromState() {
    this._color = new u(this.extractColorFromState(this));
  }
  get hue() {
    return this._hue;
  }
  set hue(e) {
    const t = Math.min(360, Math.max(0, e));
    if (t === this.hue)
      return;
    const r = this.hue, { s, v: i } = this._color.toHsv();
    this._color = new u({ h: t, s, v: i }), this._hue = t, this.host.requestUpdate("hue", r);
  }
  get value() {
    return this.color;
  }
  get color() {
    return this.getColorProcesses[this._format.format || "hex"](this._color, this._format.isString);
  }
  set color(e) {
    if (e === this.color)
      return;
    const t = this._color;
    this._color = new u(e);
    const r = this._color.format;
    let s = typeof e == "string" || e instanceof String;
    r.startsWith("hex") && (s = e.startsWith("#")), this._format = { format: r, isString: s }, this.setColorProcess(this._color, e, r, s), this.host.requestUpdate("color", t);
  }
  getColor(e) {
    const t = { hsl: "toHsl" };
    return this._color[t[e]]();
  }
  setColor(e) {
    this._color = e;
    const t = typeof this._color.originalInput == "string" || this._color.originalInput instanceof String;
    this.setColorProcess(this._color, e, this._color.format, t);
  }
  getHslString() {
    return this._color.toHslString();
  }
  savePreviousColor() {
    this._previousColor = this._color.clone();
  }
  restorePreviousColor() {
    this.setColor(this._previousColor);
  }
}
const Dt = Symbol("language resolver updated");
class Ut {
  constructor(e) {
    this.language = document.documentElement.lang || navigator.language, this.host = e, this.host.addController(this);
  }
  hostConnected() {
    this.resolveLanguage();
  }
  hostDisconnected() {
    var e;
    (e = this.unsubscribe) == null || e.call(this);
  }
  resolveLanguage() {
    const e = new CustomEvent("sp-language-context", { bubbles: !0, composed: !0, detail: { callback: (t, r) => {
      const s = this.language;
      this.language = t, this.unsubscribe = r, this.host.requestUpdate(Dt, s);
    } }, cancelable: !0 });
    this.host.dispatchEvent(e);
  }
}
const jt = D`
    :host{--spectrum-colorwheel-width:var(--spectrum-color-wheel-width);--spectrum-colorwheel-min-width:var(--spectrum-color-wheel-minimum-width);--spectrum-colorwheel-height:var(--spectrum-color-wheel-width);--spectrum-colorwheel-border-color:var(--spectrum-transparent-black-200);--spectrum-colorwheel-border-width:var(--spectrum-border-width-100);--spectrum-colorwheel-fill-color-disabled:var(--spectrum-disabled-background-color);--spectrum-colorwheel-track-width:var(--spectrum-color-control-track-width);--spectrum-colorwheel-colorarea-margin:var(--spectrum-color-wheel-color-area-margin);--spectrum-colorwheel-colorhandle-position:calc(var(--spectrum-colorwheel-width)/2 - var(--spectrum-colorwheel-track-width)/2)}@media (forced-colors:active){:host{--highcontrast-colorwheel-border-color-disabled:GrayText;--highcontrast-colorwheel-fill-color-disabled:Canvas;forced-color-adjust:none}}:host{min-inline-size:var(--mod-colorwheel-min-width,var(--spectrum-colorwheel-min-width));inline-size:var(--mod-colorwheel-width,var(--spectrum-colorwheel-width));block-size:var(--mod-colorwheel-height,var(--spectrum-colorwheel-height));-webkit-user-select:none;user-select:none;cursor:default;--track-width:var(--mod-colorwheel-track-width,var(--spectrum-colorwheel-track-width));--border-width:var(--mod-colorwheel-border-width,var(--spectrum-colorwheel-border-width));display:block;position:relative}:host([focused]){z-index:1}:host([disabled]){pointer-events:none}:host([dragged]){z-index:1}.inner{inline-size:var(--mod-colorwheel-colorarea-container-size,var(--spectrum-colorwheel-colorarea-container-size));block-size:var(--mod-colorwheel-colorarea-container-size,var(--spectrum-colorwheel-colorarea-container-size));margin:auto;display:flex;position:absolute;inset-block:0;inset-inline:0}.colorarea-container{block-size:auto;inline-size:100%;margin:var(--mod-colorwheel-colorarea-margin,var(--spectrum-colorwheel-colorarea-margin));justify-content:center;align-items:center;display:flex}.slider{opacity:0;inline-size:100%;block-size:100%;z-index:0;pointer-events:none;margin:0;position:absolute;inset-block-start:0;inset-inline-start:0}.handle{transform:translate(var(--spectrum-colorwheel-colorhandle-position));inset-block-start:50%;inset-inline:50%}.border{background-color:var(--mod-colorwheel-border-color,var(--spectrum-colorwheel-border-color));inline-size:var(--mod-colorwheel-width,var(--spectrum-colorwheel-width));block-size:var(--mod-colorwheel-height,var(--spectrum-colorwheel-height));clip-path:path(evenodd,var(--mod-colorwheel-path-borders,var(--spectrum-colorwheel-path-borders)));position:relative}:host([disabled]) .border{background-color:var(--highcontrast-colorwheel-border-color-disabled,var(--mod-colorwheel-fill-color-disabled,var(--spectrum-colorwheel-fill-color-disabled)))}.wheel{inset-block:var(--spectrum-colorwheel-border-width);inset-inline:var(--spectrum-colorwheel-border-width);clip-path:path(evenodd,var(--mod-colorwheel-path,var(--spectrum-colorwheel-path)));background:conic-gradient(from 90deg,red,#ff8000,#ff0,#80ff00,#0f0,#00ff80,#0ff,#0080ff,#00f,#8000ff,#f0f,#ff0080,red);position:absolute}:host([disabled]) .wheel{pointer-events:none;background:var(--highcontrast-colorwheel-fill-color-disabled,var(--mod-colorwheel-fill-color-disabled,var(--spectrum-colorwheel-fill-color-disabled)))}:host{touch-action:none}:host(:focus){outline:none}::slotted([slot=gradient]){border-color:var(--mod-colorwheel-border-color,var(--spectrum-colorwheel-border-color));border-style:solid;border-width:var(--border-width);box-sizing:border-box;block-size:var(--mod-colorwheel-height,var(--spectrum-colorwheel-height));inline-size:var(--mod-colorwheel-width,var(--spectrum-colorwheel-width));z-index:0;border-radius:100%;position:relative}:host([dir=rtl]) .wheel,:host([dir=rtl]) ::slotted([slot=gradient]){transform:scaleX(-1)}
`;
var qt = Object.defineProperty, Vt = Object.getOwnPropertyDescriptor, k = (o, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Vt(e, t) : e, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && qt(e, t, s), s;
};
class $ extends Z {
  constructor() {
    super(...arguments), this.disabled = !1, this.focused = !1, this.label = "hue", this.step = 1, this.languageResolver = new Ut(this), this.colorController = new Bt(this, { applyColorToState: () => {
    }, extractColorFromState: (e) => ({ ...e.getColor("hsl"), h: this.value }), maintains: "saturation" }), this._altered = 0, this._pointerDown = !1;
  }
  static get styles() {
    return [jt];
  }
  get value() {
    return this.colorController.hue;
  }
  set value(e) {
    this.colorController.hue = e;
  }
  get color() {
    return this.colorController.color;
  }
  set color(e) {
    this.colorController.color = e;
  }
  get altered() {
    return this._altered;
  }
  set altered(e) {
    this._altered = e, this.step = Math.max(1, this.altered * 10);
  }
  get focusElement() {
    return this.input;
  }
  handleKeydown(e) {
    const { key: t } = e;
    this.focused = !0, this.altered = [e.shiftKey, e.ctrlKey, e.altKey].filter((s) => !!s).length;
    let r = 0;
    switch (t) {
      case "ArrowUp":
        r = this.step;
        break;
      case "ArrowDown":
        r = -this.step;
        break;
      case "ArrowLeft":
        r = this.step * (this.isLTR ? -1 : 1);
        break;
      case "ArrowRight":
        r = this.step * (this.isLTR ? 1 : -1);
        break;
      default:
        return;
    }
    e.preventDefault(), this.value = (360 + this.value + r) % 360, this.colorController.savePreviousColor(), this.colorController.applyColorFromState(), this.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 })), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0, cancelable: !0 })) || this.colorController.restorePreviousColor();
  }
  handleInput(e) {
    const { valueAsNumber: t } = e.target;
    this.value = t, this.colorController.applyColorFromState();
  }
  handleChange(e) {
    this.handleInput(e), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }));
  }
  focus(e = {}) {
    super.focus(e), this.forwardFocus();
  }
  forwardFocus() {
    this.focused = this.hasVisibleFocusInTree(), this.input.focus();
  }
  handleFocus() {
    this.focused = !0;
  }
  handleBlur() {
    this._pointerDown || (this.altered = 0, this.focused = !1);
  }
  handlePointerdown(e) {
    if (e.button !== 0) {
      e.preventDefault();
      return;
    }
    this._pointerDown = !0, this.colorController.savePreviousColor(), this.boundingClientRect = this.getBoundingClientRect(), e.target.setPointerCapture(e.pointerId), e.pointerType === "mouse" && (this.focused = !0);
  }
  handlePointermove(e) {
    this.value = this.calculateHandlePosition(e), this.colorController.applyColorFromState(), this.dispatchEvent(new Event("input", { bubbles: !0, composed: !0, cancelable: !0 }));
  }
  handlePointerup(e) {
    this._pointerDown = !1, e.target.releasePointerCapture(e.pointerId), this.dispatchEvent(new Event("change", { bubbles: !0, composed: !0, cancelable: !0 })) || this.colorController.restorePreviousColor(), this.focus(), e.pointerType === "mouse" && (this.focused = !1);
  }
  calculateHandlePosition(e) {
    if (!this.boundingClientRect)
      return this.value;
    const t = this.boundingClientRect, { width: r, height: s, left: i, top: n } = t, a = i + r / 2, l = n + s / 2, c = e.clientX - a, d = e.clientY - l, h = Math.atan2(d, c) * 180 / Math.PI;
    return (360 + (360 + (this.isLTR ? h : 180 - h))) % 360;
  }
  handleGradientPointerdown(e) {
    if (e.button !== 0 || e.target.classList.contains("innerCircle"))
      return;
    e.stopPropagation(), e.preventDefault();
    const { button: t, pointerId: r, pointerType: s } = e;
    this.handle.dispatchEvent(new PointerEvent("pointerdown", { button: t, pointerId: r, pointerType: s })), this.handlePointermove(e);
  }
  calculateStyleData() {
    const { width: e = 160 } = this.boundingClientRect || {}, t = getComputedStyle(this), r = parseFloat(t.getPropertyValue("--border-width")), s = parseFloat(t.getPropertyValue("--track-width")), i = e / 2, n = e - r * 2, a = i - r, l = i - s, c = l * 2, d = l + r, h = c + r * 2, w = `"M ${i} ${i} m -${i} 0 a ${i} ${i} 0 1 0 ${e} 0 a ${i} ${i} 0 1 0 -${e} 0 M ${i} ${i} m -${l} 0 a ${l} ${l} 0 1 0 ${c} 0 a ${l} ${l} 0 1 0 -${c} 0"`, y = `"M ${a} ${a} m -${a} 0 a ${a} ${a} 0 1 0 ${n} 0 a ${a} ${a} 0 1 0 -${n} 0 M ${a} ${a} m -${d} 0 a ${d} ${d} 0 1 0 ${h} 0 a ${d} ${d} 0 1 0 -${h} 0"`, E = (this.isLTR ? 1 : -1) * (i - s / 2) * Math.cos(this.value * Math.PI / 180), Ne = (i - s / 2) * Math.sin(this.value * Math.PI / 180), Fe = `transform: translate(${E}px, ${Ne}px);`;
    return { clipPath: y, clipPathBorders: w, diameter: e, handleLocationStyles: Fe };
  }
  render() {
    const { clipPath: e, clipPathBorders: t, diameter: r, handleLocationStyles: s } = this.calculateStyleData();
    return he`
            <slot
                name="gradient"
                @pointerdown=${this.handleGradientPointerdown}
                style="
                    --spectrum-colorwheel-colorarea-container-size: ${r}px;
                    --spectrum-colorwheel-height: ${r}px;
                    --spectrum-colorwheel-width: ${r}px;
                    --spectrum-colorwheel-path-borders: ${t};
                    --spectrum-colorwheel-path: ${e};
                "
            >
                <div class="inner">
                    <div class="colorarea-container"></div>
                </div>
                <div class="border">
                    <div class="wheel"></div>
                </div>
            </slot>

            <sp-color-handle
                tabindex=${it(this.focused ? void 0 : "0")}
                @focus=${this.forwardFocus}
                ?focused=${this.focused}
                class="handle"
                color="hsl(${this.value}, 100%, 50%)"
                ?disabled=${this.disabled}
                style=${s}
                ${bt({ start: ["pointerdown", this.handlePointerdown], streamInside: ["pointermove", this.handlePointermove], end: [["pointerup", "pointercancel", "pointerleave"], this.handlePointerup] })}
            ></sp-color-handle>

            <input
                type="range"
                class="slider"
                aria-label=${this.label}
                min="0"
                max="360"
                step=${this.step}
                .value=${String(this.value)}
                aria-valuetext=${`${new Intl.NumberFormat(this.languageResolver.language, { maximumFractionDigits: 0, minimumIntegerDigits: 1, style: "unit", unit: "degree", unitDisplay: "narrow" }).format(this.value)}`}
                @input=${this.handleInput}
                @change=${this.handleChange}
                @keydown=${this.handleKeydown}
            />
        `;
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.boundingClientRect = this.getBoundingClientRect(), this.addEventListener("focus", this.handleFocus), this.addEventListener("blur", this.handleBlur);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), !this.observer && window.ResizeObserver && (this.observer = new window.ResizeObserver((t) => {
      for (const r of t)
        this.boundingClientRect = r.contentRect;
      this.requestUpdate();
    })), (e = this.observer) == null || e.observe(this);
  }
  disconnectedCallback() {
    var e;
    (e = this.observer) == null || e.unobserve(this), super.disconnectedCallback();
  }
}
k([b({ type: String, reflect: !0 })], $.prototype, "dir", 2), k([b({ type: Boolean, reflect: !0 })], $.prototype, "disabled", 2), k([b({ type: Boolean, reflect: !0 })], $.prototype, "focused", 2), k([we(".handle")], $.prototype, "handle", 2), k([b({ type: String })], $.prototype, "label", 2), k([b({ type: Number })], $.prototype, "step", 2), k([b({ type: Number })], $.prototype, "value", 1), k([b({ type: String })], $.prototype, "color", 1), k([we("input")], $.prototype, "input", 2);
de("sp-color-wheel", $);
