function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _observer = /*#__PURE__*/new WeakMap();
var _valueArray = /*#__PURE__*/new WeakMap();
var _refArray = /*#__PURE__*/new WeakMap();
var _lightDom2 = /*#__PURE__*/new WeakMap();
var _value2 = /*#__PURE__*/new WeakMap();
var _length2 = /*#__PURE__*/new WeakMap();
var _controlClass = /*#__PURE__*/new WeakMap();
var _control1Id = /*#__PURE__*/new WeakMap();
var _styling = /*#__PURE__*/new WeakMap();
var _InputSplitted_brand = /*#__PURE__*/new WeakSet();
export class InputSplitted extends HTMLElement {
  get lightDom() {
    return _classPrivateFieldGet(_lightDom2, this);
  }
  set lightDom(_lightDom) {
    _classPrivateFieldSet(_lightDom2, this, _lightDom);
    if (this.lightDom === true) {
      this.innerHTML = _classPrivateFieldGet(_styling, this);
    } else {
      if (!this.shadowRoot) this.attachShadow({
        mode: "open",
        delegatesFocus: true
      });
      this.shadowRoot.innerHTML = _classPrivateFieldGet(_styling, this);
    }
    _assertClassBrand(_InputSplitted_brand, this, _initDom).call(this);
  }
  get value() {
    return _classPrivateFieldGet(_value2, this);
  }
  set value(_value) {
    const oldValue = _classPrivateFieldGet(_value2, this);
    _classPrivateFieldSet(_value2, this, _value);
    _classPrivateFieldSet(_valueArray, this, this.value.split(""));
    for (let i = 0; i < this.length; i++) {
      if (_classPrivateFieldGet(_refArray, this)[i]) _classPrivateFieldGet(_refArray, this)[i].value = _classPrivateFieldGet(_valueArray, this)[i] || "";
    }
    if (oldValue !== _value) {
      this.dispatchEvent(new CustomEvent("changeValue", {
        bubbles: true,
        detail: _value
      }));
    }
  }
  get length() {
    return _classPrivateFieldGet(_length2, this);
  }
  set length(_length) {
    _classPrivateFieldSet(_length2, this, _length);
    if (this.length > _classPrivateFieldGet(_refArray, this).length) {
      // Added length

      for (let j = 0; j < this.length; j++) {
        if (!_classPrivateFieldGet(_refArray, this)[j] && this.didInit) {
          _assertClassBrand(_InputSplitted_brand, this, _addInput).call(this, _classPrivateFieldGet(_refArray, this).length);
        }
      }
    } else if (this.length < _classPrivateFieldGet(_refArray, this).length) {
      // Removed length

      const difference = Math.abs(_classPrivateFieldGet(_refArray, this).length - this.length);
      for (let j = 0; j < difference; j++) {
        const el = _classPrivateFieldGet(_refArray, this).pop();
        el === null || el === void 0 || el.remove();
      }
    }
    _classPrivateFieldSet(_refArray, this, [..._classPrivateFieldGet(_refArray, this)]);
  }
  get controlClass() {
    return _classPrivateFieldGet(_controlClass, this);
  }
  set controlClass(value) {
    _classPrivateFieldSet(_controlClass, this, value);
    for (const el of _classPrivateFieldGet(_refArray, this)) {
      el.className = this.controlClass;
    }
  }
  get control1Id() {
    return _classPrivateFieldGet(_control1Id, this);
  }
  set control1Id(value) {
    _classPrivateFieldSet(_control1Id, this, value);
    if (_classPrivateFieldGet(_refArray, this)[0]) {
      _classPrivateFieldGet(_refArray, this)[0].id = this.control1Id;
    }
  }
  constructor() {
    super();
    _classPrivateMethodInitSpec(this, _InputSplitted_brand);
    _classPrivateFieldInitSpec(this, _observer, void 0);
    _classPrivateFieldInitSpec(this, _valueArray, []);
    _classPrivateFieldInitSpec(this, _refArray, []);
    _classPrivateFieldInitSpec(this, _lightDom2, false);
    _classPrivateFieldInitSpec(this, _value2, "");
    _classPrivateFieldInitSpec(this, _length2, 0);
    _classPrivateFieldInitSpec(this, _controlClass, "");
    _classPrivateFieldInitSpec(this, _control1Id, "");
    _classPrivateFieldInitSpec(this, _styling, /* html */"<style>\n    input {\n        display: var(--blue-input-splitted-display, revert);\n        background-color: var(--blue-input-splitted-background-color, revert);\n        border: var(--blue-input-splitted-border, revert);\n        border-radius: var(--blue-input-splitted-border-radius, revert);\n        box-shadow: var(--blue-input-splitted-box-shadow, revert);\n        color: var(--blue-input-splitted-color, revert);\n        margin: var(--blue-input-splitted-margin, revert);\n        padding: var(--blue-input-splitted-padding, revert);\n        text-align: var(--blue-input-splitted-text-align, revert);\n        width: var(--blue-input-splitted-width, revert);\n    }\n</style>");
    _defineProperty(this, "didInit", false);
    this.onFocus = this.onFocus.bind(this);
  }
  connectedCallback() {
    this.didInit = true;
    this.lightDom = this.getAttribute("light-dom") !== null;
    _assertClassBrand(_InputSplitted_brand, this, _initDom).call(this);
    this.value = this.getAttribute("value") || this.value;
    this.length = getLength(this);
    this.controlClass = this.getAttribute("control-class") || this.controlClass;
    this.control1Id = this.getAttribute("control-1-id") || this.control1Id;
    _assertClassBrand(_InputSplitted_brand, this, _observe).call(this);
  }
  onFocus() {
    if (_classPrivateFieldGet(_refArray, this)[0]) _classPrivateFieldGet(_refArray, this)[0].focus();
  }
  disconnectedCallback() {
    _assertClassBrand(_InputSplitted_brand, this, _unobserve).call(this);
  }
  static get formAssociated() {
    return true;
  }
}
function _addInput(i) {
  const input = document.createElement("input");
  _classPrivateFieldGet(_refArray, this).push(input);
  input.type = "text";
  input.className = this.controlClass;
  if (i === 0) {
    input.id = this.control1Id;
  }
  input.maxLength = 1;
  input.value = _classPrivateFieldGet(_valueArray, this)[i] || "";
  input.addEventListener("input", _ref => {
    let {
      target
    } = _ref;
    const inputTarget = target;
    if (inputTarget.value !== "" && _classPrivateFieldGet(_refArray, this)[i + 1]) {
      _classPrivateFieldGet(_refArray, this)[i + 1].focus();
    }
    _classPrivateFieldGet(_valueArray, this)[i] = inputTarget.value;
    this.value = _classPrivateFieldGet(_valueArray, this).join("");
  });
  input.addEventListener("keydown", _ref2 => {
    let {
      key,
      target
    } = _ref2;
    const inputTarget = target;
    if (key === "Backspace" && inputTarget.value === "" && _classPrivateFieldGet(_refArray, this)[i - 1] !== undefined) {
      _classPrivateFieldGet(_refArray, this)[i - 1].focus();
    }
  });
  input.addEventListener("paste", _ref3 => {
    let {
      clipboardData
    } = _ref3;
    const pastedData = clipboardData.getData("Text");
    let k = 0;
    for (let j = i; j < this.length; j++) {
      _classPrivateFieldGet(_valueArray, this)[j] = pastedData.split("")[k];
      _classPrivateFieldGet(_refArray, this)[j].focus();
      k = k + 1;
    }
    this.value = _classPrivateFieldGet(_valueArray, this).join("");
  });
  if (this.lightDom) {
    this.appendChild(input);
  } else {
    this.shadowRoot.appendChild(input);
  }
}
function _initDom() {
  this.value = this.getAttribute("value") || "";
  this.length = getLength(this);
  if (this.lightDom) {
    this.innerHTML = _classPrivateFieldGet(_styling, this);
    this.addEventListener("focus", this.onFocus);
  } else {
    this.shadowRoot.innerHTML = _classPrivateFieldGet(_styling, this);
    this.shadowRoot.addEventListener("focus", this.onFocus);
  }
  _classPrivateFieldSet(_valueArray, this, this.value.split(""));
  _classPrivateFieldSet(_refArray, this, []);
  for (let i = 0; i < this.length; i++) {
    _assertClassBrand(_InputSplitted_brand, this, _addInput).call(this, i);
  }
}
function _observe() {
  // Observer prüft, ob sich HTML-Attribute geändert haben.
  // Props-Änderungen werden ohne bemerkt.
  _classPrivateFieldSet(_observer, this, _classPrivateFieldGet(_observer, this) || new MutationObserver(mutations => {
    mutations.forEach(m => {
      if (m.attributeName === "value") {
        this.value = this.getAttribute("value") || this.value;
      }
      if (m.attributeName === "length") {
        this.length = getLength(this);
      }
      if (m.attributeName === "control-class") {
        this.controlClass = this.getAttribute("control-class") || this.controlClass;
      }
      if (m.attributeName === "control-1-id") {
        this.control1Id = this.getAttribute("control-1-id") || this.control1Id;
      }
      if (m.attributeName === "light-dom") {
        this.lightDom = this.getAttribute("light-dom") !== null;
      }
    });
  }));
  _classPrivateFieldGet(_observer, this).observe(this, {
    attributeFilter: ["value", "length", "control-class", "control-1-id", "light-dom"],
    attributeOldValue: true,
    childList: true,
    subtree: true
  });
}
function _unobserve() {
  if (_classPrivateFieldGet(_observer, this)) {
    _classPrivateFieldGet(_observer, this).takeRecords();
    _classPrivateFieldGet(_observer, this).disconnect();
  }
}
function getLength(element) {
  const attr = element.getAttribute("length");
  if (attr) return parseInt(attr);
}
customElements.define("bl-input-splitted", InputSplitted);