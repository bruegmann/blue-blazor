type SpSplitViewBaseType = HTMLElement & {
    resizable?: boolean;
    collapsible?: boolean;
    splitterPos: number;
    minPos?: number;
    maxPos?: number;
    primaryMin?: string | number | null;
    primaryMax?: string | number | null;
    secondaryMin?: string | number | null;
    viewSize: number;
};
export type Instance = {
    toggleLayoutSideEl: Element | null;
    layoutSideEl: Element | null;
    modalEl: HTMLDialogElement | null;
    splitterEl: SpSplitViewBaseType | null;
    inspectorEl: HTMLDialogElement | null;
    controller: AbortController;
};
export declare function init(layoutEl: HTMLElement): {
    toggleLayoutSideEl: Element;
    layoutSideEl: Element;
    modalEl: HTMLDialogElement;
    splitterEl: SpSplitViewBaseType | null;
    inspectorEl: HTMLDialogElement | null;
    controller: AbortController;
} | undefined;
export declare function dispose(layoutEl: HTMLElement): void;
export declare function openInspector(layoutTarget: HTMLElement | string, showCommand?: "show-modal" | "show" | undefined): void;
export declare function closeInspector(layoutTarget: HTMLElement | string): void;
export declare function toggleInspector(layoutTarget: HTMLElement | string, showCommand?: "show-modal" | "show" | undefined): void;
export {};
