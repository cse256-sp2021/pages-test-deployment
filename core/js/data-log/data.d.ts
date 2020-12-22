import { TrackerEvent } from './event';
export interface MturkURLData {
    raw: string;
    assignmentID: string | null;
    hitID: string | null;
    workerID: string | null;
    submitTo: string | null;
}
export declare const urlData: MturkURLData;
export declare class Data {
    logs: {
        [eventType: string]: TrackerEvent[];
    };
    data: {
        [key: string]: any;
    };
    errors: any[];
    urlData: MturkURLData;
    constructor(rawMturkURLData: MturkURLData);
    serialize(): string;
}
export declare const data: Data;
//# sourceMappingURL=data.d.ts.map