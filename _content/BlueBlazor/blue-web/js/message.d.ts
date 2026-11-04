export type MessageType = "ask" | "tell" | "verify";
export interface MessageOptions {
    title?: string;
    icon?: string;
    switchPrimaryBtn?: boolean;
    acceptBtnText?: string;
    cancelBtnText?: string;
    inputType?: string;
    defaultValue?: string;
    id?: string;
}
export declare function ask(text: string, options?: MessageOptions | string): Promise<string | boolean>;
export declare function tell(text: string, options?: MessageOptions | string): Promise<void>;
export declare function verify(text: string, options?: MessageOptions | string): Promise<boolean>;
declare global {
    interface Window {
        blueWeb: any;
    }
}
