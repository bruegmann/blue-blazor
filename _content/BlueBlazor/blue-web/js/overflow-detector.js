// src/js/overflow-detector.ts
var OverflowDetector = class {
	resizeObserver = null;
	entries = /* @__PURE__ */ new Map();
	constructor() {
		if ("ResizeObserver" in window) this.resizeObserver = new ResizeObserver((resizeEntries) => {
			for (const resizeEntry of resizeEntries) {
				const element = resizeEntry.target;
				const entry = this.entries.get(element);
				if (entry) this.check(entry);
			}
		});
	}
	check(entry) {
		const isOverflowing = entry.element.scrollWidth > entry.element.clientWidth + 1;
		if (isOverflowing !== entry.wasOverflowing) {
			entry.wasOverflowing = isOverflowing;
			entry.onChange(isOverflowing, entry.element);
		}
	}
	observe(options) {
		const { element, onChange } = options;
		if (this.entries.has(element)) this.unobserve(element);
		const entry = {
			element,
			onChange,
			wasOverflowing: false
		};
		this.entries.set(element, entry);
		this.resizeObserver?.observe(element);
		this.check(entry);
	}
	unobserve(element) {
		this.resizeObserver?.unobserve(element);
		this.entries.delete(element);
	}
	checkAll() {
		this.entries.forEach((entry) => {
			this.check(entry);
		});
	}
	destroy() {
		this.resizeObserver?.disconnect();
		this.resizeObserver = null;
		this.entries.clear();
	}
};
function isOverflowing(element) {
	return element.scrollWidth > element.clientWidth + 1;
}
window.blueWeb = window.blueWeb || {};
window.blueWeb.OverflowDetector = OverflowDetector;
window.blueWeb.isOverflowing = isOverflowing;
export { OverflowDetector, isOverflowing };
