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
export declare class SelectList extends HTMLElement {
    activeIndex: number;
    items: HTMLElement[];
    inputElement: HTMLElement | null;
    constructor();
    connectedCallback(): void;
    updateItems(): void;
    onKeyDown(e: {
        key: string;
        preventDefault: () => void;
    }): void;
    updateActiveItem(): void;
    select(index: number): void;
}
