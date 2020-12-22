import { Tracker } from './../tracker/tracker';

export interface HistoryEntry {
    hasPrevURL: boolean;
    prevEntry?: HistoryEntry;
    currURL: string;
    extra?: any;
    nextEntries: HistoryEntry[];
}

function newHistoryEntry(currURL: string, hasPrevURL: boolean, prevEntry?: HistoryEntry, extra?: any): HistoryEntry {
    Tracker.getEventDispatchFunc('history')({url: currURL});
    return {
        currURL,
        hasPrevURL,
        prevEntry,
        extra,
        nextEntries: [],
    };
}

export class History {

    public static forward(url: string, extra?: any): string {
        const histEnt = newHistoryEntry(url, true, History.currhistory, extra);
        History.currhistory.nextEntries.push(histEnt);
        History.currhistory = histEnt;
        return url;
    }

    public static canBackward(): boolean { return History.currhistory.hasPrevURL; }

    public static backward(): string {
        if (!History.canBackward()) { throw new Error('Cannot go back any further.'); }
        History.currhistory = (History.currhistory.prevEntry as HistoryEntry);
        return History.currhistory.currURL;
    }

    public static setup(url: string, extra?: any) {
        History.firstHistory = newHistoryEntry(url, false, undefined, extra);
        History.currhistory = History.firstHistory;
    }

    private static firstHistory: HistoryEntry;
    private static currhistory: HistoryEntry;
}
