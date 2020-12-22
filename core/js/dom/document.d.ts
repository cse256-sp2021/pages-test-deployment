export declare class D {
    static doc: Document;
    static elem(elem: Element | string): Element;
    static display(elem: Element | string, show: boolean): void;
    static id(id: string): HTMLElement;
    static claz(claz: string): HTMLCollectionOf<Element>;
    static tag(tag: string): HTMLCollectionOf<Element>;
    static image(id: string, url: string): void;
    static addEventListener(elem: Element | string, type: string, listener: (e: Event) => any): (e: Event) => void;
    static each(elem: Element | string, apply: (node: Element) => any): void;
    static eachRecur(elem: Element | string, apply: (node: Element) => any): void;
    static create<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
}
//# sourceMappingURL=document.d.ts.map