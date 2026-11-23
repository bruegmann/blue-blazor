/**
 * EditView is a Custom Element that displays a edit view of its content and allows the user to confirm or dismiss the changes.
 */
export declare class EditView extends HTMLElement {
    private confirmTimeout;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private render;
    private onSubmit;
    private onKeydown;
    private onFocusout;
    private confirm;
    private dismiss;
}
