import { DebugLevelEnum } from '../utils/console_wrapper';
import { AllowSubmission } from './../dom/submit_form';
export interface TrackerConfiguration {
    allowSubmission: AllowSubmission;
    debugLevel: DebugLevelEnum;
    setup(): void;
}
export declare class Tracker {
    static start(config: TrackerConfiguration): void;
    static registerEvent(eventType: string): (evData: any) => void;
    static getEventDispatchFunc(eventType: string): (evData: any) => void;
    static attachData(key: string, attribute: any): void;
    static computeAttribute(name: string, compute: (val: any) => any): void;
    private static receiver;
    private static config;
}
//# sourceMappingURL=tracker.d.ts.map