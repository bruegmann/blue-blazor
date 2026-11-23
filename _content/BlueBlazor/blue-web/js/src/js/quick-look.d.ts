import { type DialogEvents, type UiDialogElement } from "@ui-sdk/web";
export type QuickLookElement<Payload = unknown> = UiDialogElement<Payload>;
export type QuickLookEvents<Payload = unknown> = DialogEvents<Payload>;
export declare const QuickLook: CustomElementConstructor | undefined, QuickLookTrigger: CustomElementConstructor | undefined, QuickLookBackdrop: CustomElementConstructor | undefined, QuickLookContent: CustomElementConstructor | undefined, QuickLookTitle: CustomElementConstructor | undefined, QuickLookDescription: CustomElementConstructor | undefined, QuickLookClose: CustomElementConstructor | undefined;
declare global {
    interface HTMLElementTagNameMap {
        "bl-quick-look": QuickLookElement;
        "bl-quick-look-trigger": HTMLElement;
        "bl-quick-look-backdrop": HTMLElement;
        "bl-quick-look-content": HTMLElement;
        "bl-quick-look-title": HTMLElement;
        "bl-quick-look-description": HTMLElement;
        "bl-quick-look-close": HTMLElement;
    }
}
