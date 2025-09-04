export declare class InputSplitted extends HTMLElement {
    #private;
    get lightDom(): boolean;
    set lightDom(_lightDom: boolean);
    get value(): string;
    set value(_value: string);
    get length(): number;
    set length(_length: number);
    get controlClass(): string;
    set controlClass(value: string);
    get control1Id(): string;
    set control1Id(value: string);
    didInit: boolean;
    constructor();
    connectedCallback(): void;
    onFocus(): void;
    disconnectedCallback(): void;
    static get formAssociated(): boolean;
}
