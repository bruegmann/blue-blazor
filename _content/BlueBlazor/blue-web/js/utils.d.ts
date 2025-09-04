import { StatusType } from "./shared";
export declare function startLoading(): void;
export declare function finishLoading(): void;
export declare function showSuccess(): void;
export declare function hideSuccess(): void;
/**
 * Resets alert messages that was set with `setAlertMessage`.
 * When using React, you should use `StatusProvider` instead: https://bruegmann.github.io/blue-react/v9/component/StatusProvider
 * @param alertClassName Leave empty to reset messages of any status type
 */
export declare function resetAlertMessage(alertClassName?: StatusType): void;
/**
 * When using React, you should use `StatusProvider` instead: https://bruegmann.github.io/blue-react/v9/component/StatusProvider
 */
export declare function setAlertMessage(message: string, alertClassName?: StatusType, close?: boolean, detailText?: string): void;
export declare const guid: () => string;
export declare function scrollToTop(): void;
export declare function fetchData(input: RequestInfo | URL, init?: RequestInit | undefined, showErrorDetail?: boolean | undefined, onError?: (errorMessage: string, reason: Response) => void): Promise<Response>;
