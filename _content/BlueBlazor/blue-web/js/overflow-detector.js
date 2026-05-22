function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
export class OverflowDetector {
  constructor() {
    _defineProperty(this, "resizeObserver", null);
    _defineProperty(this, "entries", new Map());
    if ("ResizeObserver" in window) {
      this.resizeObserver = new ResizeObserver(resizeEntries => {
        for (const resizeEntry of resizeEntries) {
          const element = resizeEntry.target;
          const entry = this.entries.get(element);
          if (entry) {
            this.check(entry);
          }
        }
      });
    }
  }
  check(entry) {
    const isOverflowing = entry.element.scrollWidth > entry.element.clientWidth + 1;
    if (isOverflowing !== entry.wasOverflowing) {
      entry.wasOverflowing = isOverflowing;
      entry.onChange(isOverflowing, entry.element);
    }
  }
  observe(options) {
    var _this$resizeObserver;
    const {
      element,
      onChange
    } = options;
    if (this.entries.has(element)) {
      this.unobserve(element);
    }
    const entry = {
      element,
      onChange,
      wasOverflowing: false
    };
    this.entries.set(element, entry);
    (_this$resizeObserver = this.resizeObserver) === null || _this$resizeObserver === void 0 || _this$resizeObserver.observe(element);
    this.check(entry);
  }
  unobserve(element) {
    var _this$resizeObserver2;
    (_this$resizeObserver2 = this.resizeObserver) === null || _this$resizeObserver2 === void 0 || _this$resizeObserver2.unobserve(element);
    this.entries.delete(element);
  }
  checkAll() {
    this.entries.forEach(entry => {
      this.check(entry);
    });
  }
  destroy() {
    var _this$resizeObserver3;
    (_this$resizeObserver3 = this.resizeObserver) === null || _this$resizeObserver3 === void 0 || _this$resizeObserver3.disconnect();
    this.resizeObserver = null;
    this.entries.clear();
  }
}
export function isOverflowing(element) {
  return element.scrollWidth > element.clientWidth + 1;
}
window.blueWeb = window.blueWeb || {};
window.blueWeb.OverflowDetector = OverflowDetector;
window.blueWeb.isOverflowing = isOverflowing;