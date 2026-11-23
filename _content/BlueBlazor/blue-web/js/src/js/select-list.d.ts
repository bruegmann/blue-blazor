declare class BlSelectEvent extends Event {
    static readonly eventName = "bl-select";
    readonly index: number;
    readonly item: HTMLElement;
    constructor(index: number, item: HTMLElement);
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
declare class SelectList extends HTMLElement {
    activeIndex: number;
    items: HTMLElement[];
    inputElement: HTMLElement | null;
    slotElement: HTMLSlotElement | null;
    observer: MutationObserver | null;
    constructor();
    get activeClass(): string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleChildrenChanged: () => void;
    syncActiveIndexFromDataSelected(): void;
    updateItems(): void;
    onKeyDown(e: {
        key: string;
        preventDefault: () => void;
    }): void;
    updateActiveItem(): void;
    select(index: number): void;
}
export { SelectList, BlSelectEvent };
export default SelectList;
