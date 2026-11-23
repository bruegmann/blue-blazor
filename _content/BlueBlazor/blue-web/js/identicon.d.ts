declare class Identicon extends HTMLElement {
    static get observedAttributes(): string[];
    constructor();
    get value(): string;
    connectedCallback(): void;
    private hash;
    private createIdenticon;
}
export { Identicon };
export default Identicon;
