export declare class HTMLLoader {
    static registerPostLoadFunc(func: () => any): void;
    static load(html: string, elem: Element | string): Promise<boolean>;
    static loadURL(url: string, elem: Element | string): Promise<boolean>;
    static getHTML(url: string): Promise<string>;
    private static postLoadFunc;
    private static removeTagsFromDocumentFragment;
}
//# sourceMappingURL=html_loader.d.ts.map