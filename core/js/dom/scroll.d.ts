/**
 * Linear implementation of scrolling.
 * Follows the singleton pattern, call do to start a scroll operation.
 *
 * If a scroll is called when another scroll has already begun an
 * error will be thrown, but the first scroll will continue until completion.
 */
export declare class Scroll {
    private endPos;
    private duration;
    private complete;
    static STEP_IN_MS: number;
    static callback(endPos: number, duration?: number, complete?: (...args: any) => any): void;
    static promise(endPos: number, duration?: number): Promise<unknown>;
    private static running;
    private static instance;
    private constructor();
    static get isRunning(): boolean;
    private update;
    private calcScrollAmount;
    private scroll;
    private attemptScroll;
}
//# sourceMappingURL=scroll.d.ts.map