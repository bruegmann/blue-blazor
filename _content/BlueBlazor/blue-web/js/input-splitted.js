// src/js/input-splitted.ts
var InputSplitted = class extends HTMLElement {
	#observer;
	#valueArray = [];
	#refArray = [];
	#lightDom = false;
	get lightDom() {
		return this.#lightDom;
	}
	set lightDom(_lightDom) {
		this.#lightDom = _lightDom;
		if (this.lightDom === true) this.innerHTML = this.#styling;
		else {
			if (!this.shadowRoot) this.attachShadow({
				mode: "open",
				delegatesFocus: true
			});
			this.shadowRoot.innerHTML = this.#styling;
		}
		this.#initDom();
	}
	#value = "";
	get value() {
		return this.#value;
	}
	set value(_value) {
		const oldValue = this.#value;
		this.#value = _value;
		this.#valueArray = this.value.split("");
		for (let i = 0; i < this.length; i++) if (this.#refArray[i]) this.#refArray[i].value = this.#valueArray[i] || "";
		if (oldValue !== _value) this.dispatchEvent(new CustomEvent("changeValue", {
			bubbles: true,
			detail: _value
		}));
	}
	#length = 0;
	get length() {
		return this.#length;
	}
	set length(_length) {
		this.#length = _length;
		if (this.length > this.#refArray.length) {
			for (let j = 0; j < this.length; j++) if (!this.#refArray[j] && this.didInit) this.#addInput(this.#refArray.length);
		} else if (this.length < this.#refArray.length) {
			const difference = Math.abs(this.#refArray.length - this.length);
			for (let j = 0; j < difference; j++) this.#refArray.pop()?.remove();
		}
		this.#refArray = [...this.#refArray];
	}
	#disabled = false;
	get disabled() {
		return this.#disabled;
	}
	set disabled(_disabled) {
		this.#disabled = _disabled;
		const inputs = this.lightDom ? this.querySelectorAll("input") : this.shadowRoot.querySelectorAll("input");
		for (const input of inputs) input.disabled = _disabled;
	}
	#controlClass = "";
	get controlClass() {
		return this.#controlClass;
	}
	set controlClass(value) {
		this.#controlClass = value;
		for (const el of this.#refArray) el.className = this.controlClass;
	}
	#control1Id = "";
	get control1Id() {
		return this.#control1Id;
	}
	set control1Id(value) {
		this.#control1Id = value;
		if (this.#refArray[0]) this.#refArray[0].id = this.control1Id;
	}
	#styling = `<style>
    input {
        display: var(--blue-input-splitted-display, revert);
        background-color: var(--blue-input-splitted-background-color, revert);
        border: var(--blue-input-splitted-border, revert);
        border-radius: var(--blue-input-splitted-border-radius, revert);
        box-shadow: var(--blue-input-splitted-box-shadow, revert);
        color: var(--blue-input-splitted-color, revert);
        margin: var(--blue-input-splitted-margin, revert);
        padding: var(--blue-input-splitted-padding, revert);
        text-align: var(--blue-input-splitted-text-align, revert);
        width: var(--blue-input-splitted-width, revert);
    }
</style>`;
	didInit = false;
	constructor() {
		super();
		this.onFocus = this.onFocus.bind(this);
	}
	connectedCallback() {
		this.didInit = true;
		this.lightDom = this.getAttribute("light-dom") !== null;
		this.disabled = this.getAttribute("disabled") !== null;
		this.#initDom();
		this.value = this.getAttribute("value") || this.value;
		this.length = getLength(this);
		this.controlClass = this.getAttribute("control-class") || this.controlClass;
		this.control1Id = this.getAttribute("control-1-id") || this.control1Id;
		this.#observe();
	}
	#addInput(i) {
		const input = document.createElement("input");
		this.#refArray.push(input);
		input.type = "text";
		input.className = this.controlClass;
		if (i === 0) input.id = this.control1Id;
		input.maxLength = 1;
		input.value = this.#valueArray[i] || "";
		input.disabled = this.disabled;
		input.addEventListener("input", ({ target }) => {
			const inputTarget = target;
			if (inputTarget.value !== "" && this.#refArray[i + 1]) this.#refArray[i + 1].focus();
			this.#valueArray[i] = inputTarget.value;
			this.value = this.#valueArray.join("");
		});
		input.addEventListener("keydown", ({ key, target }) => {
			if (key === "Backspace" && target.value === "" && this.#refArray[i - 1] !== void 0) this.#refArray[i - 1].focus();
		});
		input.addEventListener("paste", ({ clipboardData }) => {
			const pastedData = clipboardData.getData("Text");
			let k = 0;
			for (let j = i; j < this.length; j++) {
				this.#valueArray[j] = pastedData.split("")[k];
				this.#refArray[j].focus();
				k = k + 1;
			}
			this.value = this.#valueArray.join("");
		});
		if (this.lightDom) this.appendChild(input);
		else this.shadowRoot.appendChild(input);
	}
	onFocus() {
		if (this.#refArray[0]) this.#refArray[0].focus();
	}
	#initDom() {
		this.value = this.getAttribute("value") || "";
		this.length = getLength(this);
		if (this.lightDom) {
			this.innerHTML = this.#styling;
			this.addEventListener("focus", this.onFocus);
		} else {
			this.shadowRoot.innerHTML = this.#styling;
			this.shadowRoot.addEventListener("focus", this.onFocus);
		}
		this.#valueArray = this.value.split("");
		this.#refArray = [];
		for (let i = 0; i < this.length; i++) this.#addInput(i);
	}
	#observe() {
		this.#observer = this.#observer || new MutationObserver((mutations) => {
			mutations.forEach((m) => {
				if (m.attributeName === "value") this.value = this.getAttribute("value") || this.value;
				if (m.attributeName === "length") this.length = getLength(this);
				if (m.attributeName === "control-class") this.controlClass = this.getAttribute("control-class") || this.controlClass;
				if (m.attributeName === "control-1-id") this.control1Id = this.getAttribute("control-1-id") || this.control1Id;
				if (m.attributeName === "light-dom") this.lightDom = this.getAttribute("light-dom") !== null;
				if (m.attributeName === "disabled") this.disabled = this.getAttribute("disabled") !== null;
			});
		});
		this.#observer.observe(this, {
			attributeFilter: [
				"value",
				"length",
				"control-class",
				"control-1-id",
				"light-dom",
				"disabled"
			],
			attributeOldValue: true,
			childList: true,
			subtree: true
		});
	}
	#unobserve() {
		if (this.#observer) {
			this.#observer.takeRecords();
			this.#observer.disconnect();
		}
	}
	disconnectedCallback() {
		this.#unobserve();
	}
	static get formAssociated() {
		return true;
	}
};
function getLength(element) {
	const attr = element.getAttribute("length");
	if (attr) return parseInt(attr);
}
customElements.define("bl-input-splitted", InputSplitted);
export { InputSplitted };
