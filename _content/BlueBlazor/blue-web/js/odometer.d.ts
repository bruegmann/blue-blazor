declare class Odometer extends HTMLElement {
    private wrapper;
    private _initialized;
    static get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    private setup;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    private updateValue;
    set value(value: number);
    get value(): number;
}
export { Odometer };
export default Odometer;
