export type DialogType = "ask" | "tell" | "verify";
export interface DialogOptions {
    title?: string;
    icon?: string;
    switchPrimaryBtn?: boolean;
    acceptBtnText?: string;
    cancelBtnText?: string;
    inputType?: string;
    defaultValue?: string;
}
export declare function ask(text: string, options?: DialogOptions | string): Promise<string | boolean>;
export declare function tell(text: string, options?: DialogOptions | string): Promise<void>;
export declare function verify(text: string, options?: DialogOptions | string): Promise<boolean>;
declare global {
    interface Window {
        blueWeb: any;
    }
}
