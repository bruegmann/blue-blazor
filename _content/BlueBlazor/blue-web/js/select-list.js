// src/js/select-list.ts
var BlSelectEvent = class BlSelectEvent extends Event {
	static eventName = "bl-select";
	index;
	item;
	constructor(index, item) {
		super(BlSelectEvent.eventName, {
			bubbles: true,
			composed: true
		});
		this.index = index;
		this.item = item;
	}
};
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
var SelectList = class extends HTMLElement {
	activeIndex;
	items;
	inputElement;
	slotElement;
	observer;
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `<slot style="border-radius: inherit"></slot>`;
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
		this.addEventListener("click", (e) => {
			const target = e.target instanceof Element ? e.target.closest("[data-select-list-index]") : null;
			if (target && target.hasAttribute("data-select-list-index")) {
				const index = Number(target.getAttribute("data-select-list-index"));
				this.select(index);
			}
		});
		this.observer = new MutationObserver((mutations) => {
			if (mutations.some((m) => m.type === "childList")) this.handleChildrenChanged();
			if (mutations.some((m) => m.type === "attributes" && m.attributeName === "data-selected")) {
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
		this.slotElement = this.shadowRoot?.querySelector("slot");
		this.slotElement?.addEventListener("slotchange", this.handleChildrenChanged);
	}
	disconnectedCallback() {
		this.observer?.disconnect();
		this.observer = null;
		this.slotElement?.removeEventListener("slotchange", this.handleChildrenChanged);
	}
	handleChildrenChanged = () => {
		const previousActiveId = this.items[this.activeIndex]?.id;
		this.updateItems();
		if (previousActiveId) {
			const newIndex = this.items.findIndex((el) => el.id === previousActiveId);
			this.activeIndex = newIndex >= 0 ? newIndex : -1;
		} else this.activeIndex = -1;
		this.updateActiveItem();
	};
	syncActiveIndexFromDataSelected() {
		const selectedIndex = this.items.findIndex((el) => el.hasAttribute("data-selected"));
		if (selectedIndex >= 0) this.activeIndex = selectedIndex;
	}
	updateItems() {
		const selectableSelectors = [
			"button:not([disabled])",
			"a[href]",
			"input:not([disabled])",
			"select:not([disabled])",
			"textarea:not([disabled])",
			"[tabindex]:not([tabindex=\"-1\"])",
			"[role=\"option\"]"
		].join(", ");
		this.items = Array.from(this.querySelectorAll(selectableSelectors));
		this.items.forEach((el, i) => {
			if (!el.hasAttribute("id")) el.setAttribute("id", `${this.id}-option-${i}`);
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
			this.items[this.activeIndex]?.click();
		}
	}
	updateActiveItem() {
		const activeClassNames = this.activeClass.split(" ");
		this.items.forEach((el, i) => {
			const active = i === this.activeIndex;
			activeClassNames.forEach((activeClassName) => {
				el.classList.toggle(activeClassName, active);
			});
			el.setAttribute("aria-selected", active.toString());
		});
		const activeItem = this.items[this.activeIndex];
		if (activeItem && this.inputElement) {
			this.inputElement.setAttribute("aria-activedescendant", activeItem.id);
			activeItem.scrollIntoView({ block: "nearest" });
		} else if (this.inputElement) this.inputElement.removeAttribute("aria-activedescendant");
	}
	select(index) {
		this.activeIndex = index;
		this.items.forEach((el) => el.removeAttribute("data-selected"));
		const selectedItem = this.items[index];
		if (selectedItem) {
			selectedItem.setAttribute("data-selected", "");
			this.dispatchEvent(new BlSelectEvent(index, selectedItem));
			this.updateActiveItem();
		}
	}
};
if (!customElements.get("bl-select-list")) customElements.define("bl-select-list", SelectList);
export { BlSelectEvent, SelectList, SelectList as default };
