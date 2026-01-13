/**
 * Odometer web component for animated number display
 *
 * @element bl-odometer
 * @attr {number} value - Current value to display
 * @attr {number} max - Maximum value before showing "+"
 * @fires change - Fired when value changes
 * @cssprop --bl-odometer-duration - Transition duration for number animation (default: 0.4s)
 */
declare class Odometer extends HTMLElement {
    private wrapper;
    private _initialized;
    private _resetTimer;
    static get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    private setup;
    private rebuildNumbers;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    private updateValue;
    private clearResetTimer;
    private scheduleResetChange;
    private applyChangeState;
    set value(value: number);
    get value(): number;
    set max(value: number);
    get max(): number;
}
export { Odometer };
export default Odometer;
