export declare const enum ActionEnum {
    CLICK = "click",
    BUTTON = "button",
    SCROLL = "scroll",
    HISTORY = "history"
}
export interface TrackerEvent {
    action: string;
    time: number;
}
export declare function objectToTrackerEvent(obj: any, action: string): void;
export declare function isTrackerEvent(obj: any): obj is TrackerEvent;
export declare class BaseTrackerEvent<T> implements TrackerEvent {
    custEv: CustomEvent;
    action: string;
    time: number;
    constructor(action: string, eventInitDict?: CustomEventInit<T> | undefined);
    get detail(): any;
}
export declare class ClickEvent extends BaseTrackerEvent<{
    x: number;
    y: number;
    id: string;
}> {
    constructor(x: number, y: number, id: string, eventInitDict?: CustomEventInit<{
        x: number;
        y: number;
        id: string;
    }> | undefined);
}
export declare class ButtonEvent extends BaseTrackerEvent<{
    key: string;
    id: string;
}> {
    constructor(key: string, id: string, eventInitDict?: CustomEventInit<{
        key: string;
        id: string;
    }> | undefined);
}
export declare class HistoryEvent extends BaseTrackerEvent<{
    url: string;
    extra?: any;
}> {
    constructor(url: string, extra?: any, eventInitDict?: CustomEventInit<{
        url: string;
    }> | undefined);
}
//# sourceMappingURL=event.d.ts.map