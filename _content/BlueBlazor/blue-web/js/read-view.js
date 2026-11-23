// src/js/read-view.ts
var DRAG_THRESHOLD = 5;
/**
* A Web Component that displays a read view of its content and allows the user to switch to an edit view.
* Fires event "EditRequested" when the user clicks the read view.
* @element read-view
* @fires EditRequested
* @attr {boolean} disabled - Disables the component, preventing interactions and removing hover effects.
* @cssprop --bs-primary-rgb - The primary color as an RGB value.
* @cssprop --bs-secondary-bg-subtle - The subtle background color for the read view.
* @cssprop --bs-border-radius-sm - The border radius for the read view.
* @slot - The content to display in the read view.
* @example
* <bl-read-view id="my-read-view" onEditRequested="setEditing(true)">
*    <a href="#">bla</a> {value}
* </bl-read-view>
* @example
* document.getElementById("my-read-view").addEventListener("EditRequested", () => {
*    setEditing(true)
* })
*/
var ReadView = class extends HTMLElement {
	button;
	container;
	startX = 0;
	startY = 0;
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	static get observedAttributes() {
		return ["disabled"];
	}
	connectedCallback() {
		this.render();
	}
	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "disabled") this.updateDisabledState();
	}
	render() {
		if (!this.shadowRoot) return;
		this.shadowRoot.innerHTML = `
            <style>
                button {
                    display: block;
                    margin: 0;
                    padding: 0;
                    appearance: none;
                    background-color: transparent;
                    border: none;
                    line-height: 1;
                    outline: 0;
                }

                button:focus-visible + div {
                    outline: 0;
                    box-shadow:
                        0 0 0 0.25rem rgba(var(--bs-primary-rgb), 25%),
                        inset 0 0 0 1px rgba(var(--bs-primary-rgb), 50%);
                }

                div {
                    display: var(--display, flex);
                    box-sizing: border-box;
                    width: auto;
                    max-width: 100%;
                    border-color: transparent;
                    border-radius: calc(var(--bs-border-radius-sm, 3px) + var(--blue-read-view-padding-y));
                    background: var(--bg, transparent);
                    transition: var(--transition, background 0.2s);

                    padding: var(--blue-read-view-padding-y) var(--blue-read-view-padding-x);
                }

                div:hover {
                    background: var(--hover-bg, var(--bs-secondary-bg));
                }

                :host([disabled]) div {
                    background-color: transparent;
                }
            </style>
            <button aria-label="Edit"></button>
            <div role="presentation" part="presentation">
                <slot></slot>
            </div>
        `;
		this.button = this.shadowRoot.querySelector("button");
		this.container = this.shadowRoot.querySelector("div");
		this.button.addEventListener("click", this.onEditRequested.bind(this));
		this.container.addEventListener("click", this.onReadViewClick.bind(this));
		this.container.addEventListener("mousedown", this.onMouseDown.bind(this));
		this.updateDisabledState();
	}
	updateDisabledState() {
		const isDisabled = this.hasAttribute("disabled");
		this.button?.setAttribute("aria-disabled", String(isDisabled));
		if (isDisabled) this.button?.setAttribute("tabindex", "-1");
		else this.button?.removeAttribute("tabindex");
		this.container?.setAttribute("aria-disabled", String(isDisabled));
	}
	onEditRequested() {
		if (this.hasAttribute("disabled")) return;
		this.dispatchEvent(new CustomEvent("EditRequested", {
			bubbles: true,
			composed: true
		}));
	}
	onMouseDown(event) {
		if (this.hasAttribute("disabled")) return;
		this.startX = event.clientX;
		this.startY = event.clientY;
	}
	mouseHasMovedAfterMouseDown(event) {
		return Math.abs(this.startX - event.clientX) >= DRAG_THRESHOLD || Math.abs(this.startY - event.clientY) >= DRAG_THRESHOLD;
	}
	onReadViewClick(event) {
		if (this.hasAttribute("disabled")) return;
		if (event.target.tagName.toLowerCase() !== "a" && !this.mouseHasMovedAfterMouseDown(event)) {
			event.preventDefault();
			this.onEditRequested();
		}
	}
};
customElements.define("bl-read-view", ReadView);
export { ReadView };
