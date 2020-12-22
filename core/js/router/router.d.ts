export declare const enum RouterMode {
    OFF = 0,
    ON = 1,
    STANDARD_ALLOWANCES = 2
}
export declare const enum RouterModule {
    A = "A",
    IMG = "IMG",
    FORM = "FORM"
}
export interface RouterConfig {
    module: RouterModule;
    mode: RouterMode;
}
export declare class Router {
    static HASH_TAGS: RegExp;
    static EMPTY: RegExp;
    static configure(configs: RouterConfig[]): void;
    static setup(elem: Element | string): void;
    static STANDARD_LINK_LISTENER(e: MouseEvent): Promise<Promise<boolean> | undefined>;
    static ON_COMPLETE_SLL(post: (e: MouseEvent) => any): (e: MouseEvent) => void;
    static IMAGE_LINK_LISTENER(e: MouseEvent): Promise<Promise<boolean> | undefined>;
    static FORM_OFF_LISTENER(e: Event): void;
    static defaultAllowancesOn(): void;
    static defaultAllowancesOff(): void;
    static registerAllowance(...regexs: RegExp[]): void;
    static unregisterAllowance(...regexs: RegExp[]): void;
    static clearAllowances(): void;
    static load(url: string): Promise<boolean>;
    private static SetupFunctions;
    private static configs;
    private static linkAllowances;
    private static pathRegex;
    private static upgradeConfig;
    private static getPathName;
}
//# sourceMappingURL=router.d.ts.map