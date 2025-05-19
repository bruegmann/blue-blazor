export declare function init(actionsElement: HTMLElement, menu?: HTMLElement | undefined, collapseMenu?: HTMLElement | undefined): {
    updateActions: () => void;
    resizeObserver: ResizeObserver;
    destroy(): void;
};
