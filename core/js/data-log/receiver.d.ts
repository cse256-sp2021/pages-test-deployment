import { TrackerEvent } from './event';
export declare class EventReceiver {
    private map;
    private emitter;
    register(eventType: string, callback?: (event: TrackerEvent) => void): void;
    doEvent(event: TrackerEvent): void;
}
//# sourceMappingURL=receiver.d.ts.map