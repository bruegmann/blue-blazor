/**
 * A Web Component that provides a keyboard-accessible selectable list, typically used for dropdowns or autocomplete lists.
 * Together with `popover` and CSS Anchoring, it's also useful to create a dropdown list.
 * Supports keyboard navigation and selection, and integrates with an input element for combobox behavior.
 *
 * The Web Component will automatically set attributes for accessibility.
 *
 * @element blue-select-list
 * @attr {string} for - The id of the input element to associate as the combobox controller.
 * @slot - The list options.
 * @example
 * <input id="my-input" />
 * <blue-select-list for="my-input">
 *   <div>Option 1</div>
 *   <div>Option 2</div>
 * </blue-select-list>
 */
export class SelectList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.innerHTML = "<slot style=\"border-radius: inherit\"></slot>";
    this.activeIndex = -1;
    this.items = [];
    this.inputElement = null;
  }
  connectedCallback() {
    this.setAttribute("role", "listbox");
    this.tabIndex = -1;
    this.updateItems();

    // Input zuweisen über Attribut oder fallback
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
      const target = e.target instanceof Element ? e.target.closest("[data-blue-select-list-index]") : null;
      if (target && target.hasAttribute("data-blue-select-list-index")) {
        const index = Number(target.getAttribute("data-blue-select-list-index"));
        this.select(index);
      }
    });
  }
  updateItems() {
    this.items = Array.from(this.children);
    this.items.forEach((el, i) => {
      if (!el.hasAttribute("id")) {
        el.setAttribute("id", "".concat(this.id, "-option-").concat(i));
      }
      el.setAttribute("data-blue-select-list-index", i.toString());
      el.setAttribute("aria-selected", "false");
      el.setAttribute("role", "option");
      el.tabIndex = -1;
    });
  }
  onKeyDown(e) {
    console.log("select-list onKeyDown");
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
      const item = this.items[this.activeIndex];
      item === null || item === void 0 || item.click();
    }
  }
  updateActiveItem() {
    this.items.forEach((el, i) => {
      const active = i === this.activeIndex;
      el.classList.toggle("active", active);
      el.setAttribute("aria-selected", active.toString());
    });
    const activeItem = this.items[this.activeIndex];
    if (activeItem && this.inputElement) {
      this.inputElement.setAttribute("aria-activedescendant", activeItem.id);
      activeItem.scrollIntoView({
        block: "nearest"
      });
    }
  }
  select(index) {
    this.activeIndex = index;
    this.updateActiveItem();
    const selectedItem = this.items[index];
    if (selectedItem) {
      // Fire a custom event with the selected item and index
      this.dispatchEvent(new CustomEvent("bl-select", {
        detail: {
          index,
          item: selectedItem
        },
        bubbles: true,
        composed: true
      }));
      selectedItem.click();
    }
  }
}
customElements.define("bl-select-list", SelectList);