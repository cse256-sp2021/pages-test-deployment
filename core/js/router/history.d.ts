export interface HistoryEntry {
    hasPrevURL: boolean;
    prevEntry?: HistoryEntry;
    currURL: string;
    extra?: any;
    nextEntries: HistoryEntry[];
}
export declare class History {
    static forward(url: string, extra?: any): string;
    static canBackward(): boolean;
    static backward(): string;
    static setup(url: string, extra?: any): void;
    private static firstHistory;
    private static currhistory;
}
//# sourceMappingURL=history.d.ts.map