function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class BlSelectEvent extends Event {
  constructor(index, item) {
    super(BlSelectEvent.eventName, {
      bubbles: true,
      composed: true
    });
    this.index = index;
    this.item = item;
  }
}

/**
 * A Web Component that provides a keyboard-accessible selectable list, typically used for dropdowns or autocomplete lists.
 * Together with `popover` and CSS Anchoring, it's also useful to create a dropdown list.
 * Supports keyboard navigation and selection, and integrates with an input element for combobox behavior.
 *
 * The Web Component will automatically set attributes for accessibility.
 *
 * @element bl-select-list
 * @attr {string} for - The id of the input element to associate as the combobox controller.
 * @attr {string} active-class - The CSS class name to apply to the active item (default: "active").
 * @slot - The list options.
 * @example
 * <input id="my-input" />
 * <bl-select-list for="my-input">
 *   <div>Option 1</div>
 *   <div>Option 2</div>
 * </bl-select-list>
 */
_defineProperty(BlSelectEvent, "eventName", "bl-select");
class SelectList extends HTMLElement {
  constructor() {
    super();
    _defineProperty(this, "handleChildrenChanged", () => {
      var _this$items$this$acti;
      const previousActiveId = (_this$items$this$acti = this.items[this.activeIndex]) === null || _this$items$this$acti === void 0 ? void 0 : _this$items$this$acti.id;
      this.updateItems();
      if (previousActiveId) {
        const newIndex = this.items.findIndex(el => el.id === previousActiveId);
        this.activeIndex = newIndex >= 0 ? newIndex : -1;
      } else {
        this.activeIndex = -1;
      }
      this.updateActiveItem();
    });
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.innerHTML = "<slot style=\"border-radius: inherit\"></slot>";
    this.activeIndex = -1;
    this.items = [];
    this.inputElement = null;
    this.slotElement = null;
    this.observer = null;
  }
  get activeClass() {
    return this.getAttribute("active-class") || "active";
  }
  connectedCallback() {
    var _this$shadowRoot, _this$slotElement;
    this.setAttribute("role", "listbox");
    this.tabIndex = -1;
    this.updateItems();
    this.syncActiveIndexFromDataSelected();
    this.updateActiveItem();
    const inputId = this.getAttribute("for");
    this.inputElement = inputId ? document.getElementById(inputId) : null;
    if (this.inputElement) {
      this.inputElement.setAttribute("role", "combobox");
      this.inputElement.setAttribute("aria-controls", this.id);
      this.inputElement.setAttribute("aria-expanded", "true");
      this.inputElement.addEventListener("keydown", this.onKeyDown.bind(this));
    }
    this.addEventListener("keydown", this.onKeyDown.bind(this));
    this.addEventListener("click", e => {
      const target = e.target instanceof Element ? e.target.closest("[data-select-list-index]") : null;
      if (target && target.hasAttribute("data-select-list-index")) {
        const index = Number(target.getAttribute("data-select-list-index"));
        this.select(index);
      }
    });
    this.observer = new MutationObserver(mutations => {
      if (mutations.some(m => m.type === "childList")) {
        this.handleChildrenChanged();
      }
      if (mutations.some(m => m.type === "attributes" && m.attributeName === "data-selected")) {
        this.syncActiveIndexFromDataSelected();
        this.updateActiveItem();
      }
    });
    this.observer.observe(this, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-selected"]
    });
    this.slotElement = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.querySelector("slot");
    (_this$slotElement = this.slotElement) === null || _this$slotElement === void 0 || _this$slotElement.addEventListener("slotchange", this.handleChildrenChanged);
  }
  disconnectedCallback() {
    var _this$observer, _this$slotElement2;
    (_this$observer = this.observer) === null || _this$observer === void 0 || _this$observer.disconnect();
    this.observer = null;
    (_this$slotElement2 = this.slotElement) === null || _this$slotElement2 === void 0 || _this$slotElement2.removeEventListener("slotchange", this.handleChildrenChanged);
  }
  syncActiveIndexFromDataSelected() {
    const selectedIndex = this.items.findIndex(el => el.hasAttribute("data-selected"));
    if (selectedIndex >= 0) {
      this.activeIndex = selectedIndex;
    }
  }
  updateItems() {
    const selectableSelectors = ["button:not([disabled])", "a[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", '[tabindex]:not([tabindex="-1"])', '[role="option"]'].join(", ");
    this.items = Array.from(this.querySelectorAll(selectableSelectors));
    this.items.forEach((el, i) => {
      if (!el.hasAttribute("id")) {
        el.setAttribute("id", "".concat(this.id, "-option-").concat(i));
      }
      el.setAttribute("data-select-list-index", i.toString());
      el.setAttribute("aria-selected", "false");
      el.setAttribute("role", "option");
      el.tabIndex = -1;
    });
  }
  onKeyDown(e) {
    if (!this.items.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      this.activeIndex = (this.activeIndex + 1) % this.items.length;
      this.updateActiveItem();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
      this.updateActiveItem();
    } else if (e.key === "Enter" && this.activeIndex >= 0) {
      e.preventDefault();
      const item = this.items[this.activeIndex];
      item === null || item === void 0 || item.click();
    }
  }
  updateActiveItem() {
    const activeClassNames = this.activeClass.split(" ");
    this.items.forEach((el, i) => {
      const active = i === this.activeIndex;
      activeClassNames.forEach(activeClassName => {
        el.classList.toggle(activeClassName, active);
      });
      el.setAttribute("aria-selected", active.toString());
    });
    const activeItem = this.items[this.activeIndex];
    if (activeItem && this.inputElement) {
      this.inputElement.setAttribute("aria-activedescendant", activeItem.id);
      activeItem.scrollIntoView({
        block: "nearest"
      });
    } else if (this.inputElement) {
      this.inputElement.removeAttribute("aria-activedescendant");
    }
  }
  select(index) {
    this.activeIndex = index;
    this.items.forEach(el => el.removeAttribute("data-selected"));
    const selectedItem = this.items[index];
    if (selectedItem) {
      selectedItem.setAttribute("data-selected", "");
      this.dispatchEvent(new BlSelectEvent(index, selectedItem));
      this.updateActiveItem();
    }
  }
}
if (!customElements.get("bl-select-list")) {
  customElements.define("bl-select-list", SelectList);
}
export { SelectList, BlSelectEvent };
export default SelectList;