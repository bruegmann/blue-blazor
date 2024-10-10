export type DialogType = "ask" | "tell" | "verify";
export interface DialogOptions {
    title?: string;
    icon?: string;
    switchPrimaryBtn?: boolean;
    acceptBtnText?: string;
    cancelBtnText?: string;
    inputType?: string;
}
export declare function ask(text: string, options?: DialogOptions): Promise<string | boolean>;
export declare function tell(text: string, options?: DialogOptions): Promise<void>;
export declare function verify(text: string, options?: DialogOptions): Promise<boolean>;
declare global {
    interface Window {
        blueWeb: any;
    }
}
