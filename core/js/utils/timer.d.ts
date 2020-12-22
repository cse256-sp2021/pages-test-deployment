/**
 * A custom timeout class that can be paused.
 */
export declare class CustomTimeout {
    private time;
    private func;
    private start;
    private timeout;
    private finished;
    private running;
    constructor(time: number, func: () => any);
    /**
     * Runs the timer if it is not finished and it is not already running.
     */
    set(): void;
    /**
     * Pauses the timer and calculates amount of time remaining.
     */
    pause(): void;
    /**
     * Stops the timer and disallows it from running again.
     */
    clear(): void;
}
//# sourceMappingURL=timer.d.ts.map