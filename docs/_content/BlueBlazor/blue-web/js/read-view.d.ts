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
export declare class ReadView extends HTMLElement {
    private button;
    private container;
    private startX;
    private startY;
    constructor();
    static get observedAttributes(): string[];
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    private render;
    private updateDisabledState;
    private onEditRequested;
    private onMouseDown;
    private mouseHasMovedAfterMouseDown;
    private onReadViewClick;
}
