export declare function error<T>(func: (...args: any) => T): Promise<T | undefined>;
export declare function errorHO<T>(func: (...args: any) => T): () => Promise<T | undefined>;
export declare const enum DebugLevelEnum {
    NONE = 1,
    BASIC = 2,
    DETAILED = 3
}
export declare function setDebugLevel(level: DebugLevelEnum): void;
export declare function log(message: string, importance: DebugLevelEnum): void;
//# sourceMappingURL=console_wrapper.d.ts.map