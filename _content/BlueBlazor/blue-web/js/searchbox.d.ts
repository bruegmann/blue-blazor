import { LitElement } from "lit";
export declare class BlueSearchBox extends LitElement {
    static styles: import("lit").CSSResult;
    people: string[];
    documents: string[];
    private query;
    private activeIndex;
    private expanded;
    private results;
    render(): import("lit-html").TemplateResult<1>;
    private renderOption;
    private onInput;
    private updateResults;
    private onKeyDown;
    private selectOption;
}
