export declare enum AppEnum {
    INFORMATION_FORAGING = "information-foraging",
    COGNITIVE_LOAD = "cognitive-load",
    GENDER_MAG = "gender-mag",
    ERROR = "error"
}
export declare enum ModeEnum {
    REAL = "real",
    SANDBOX = "sandbox",
    TEST = "test",
    ERROR = "error"
}
export declare class HTMLLoc {
    static elem: HTMLElement;
    static app: AppEnum;
    static mode: ModeEnum;
    static scenario: string;
    static setup(): void;
}
//# sourceMappingURL=html_loc.d.ts.map