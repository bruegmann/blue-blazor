/**
 * <bl-auto-theme>
 * Determines the effective (composed through transparent layers) background color
 * behind the element and sets data-bs-theme="dark" if that color is dark.
 *
 * Attribute:
 *  - dark-threshold (0..1, default 0.5)
 */
export declare class AutoTheme extends HTMLElement {
    private ancestorObservers;
    private rafId;
    static get observedAttributes(): string[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(): void;
    private init;
    private observeAncestors;
    private cleanupObservers;
    private scheduleUpdate;
    private getThreshold;
    private updateTheme;
    private computeEffectiveBackground;
    private composite;
    private parseColor;
    private relativeLuminance;
}
