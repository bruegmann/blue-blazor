export interface OverflowObserverOptions {
    element: HTMLElement;
    onChange: (isOverflowing: boolean, element: HTMLElement) => void;
}
export declare class OverflowDetector {
    private resizeObserver;
    private entries;
    constructor();
    private check;
    observe(options: OverflowObserverOptions): void;
    unobserve(element: HTMLElement): void;
    checkAll(): void;
    destroy(): void;
}
export declare function isOverflowing(element: HTMLElement): boolean;
