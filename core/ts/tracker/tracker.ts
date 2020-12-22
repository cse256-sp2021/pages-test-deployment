import { isTrackerEvent, objectToTrackerEvent } from '../data-log/event';
import { EventReceiver } from '../data-log/receiver';
import { TrackerElements } from '../dom/tracker_elems';
import { DebugLevelEnum, log, setDebugLevel } from '../utils/console_wrapper';
import { data } from './../data-log/data';
import { AllowSubmission, SubmitForm } from './../dom/submit_form';
log('tracker loaded.', DebugLevelEnum.BASIC);

export interface TrackerConfiguration {
    allowSubmission: AllowSubmission;
    debugLevel: DebugLevelEnum;
    setup(): void;
}

export class Tracker {

    public static start(config: TrackerConfiguration) {
        Tracker.config = config;
        setDebugLevel(config.debugLevel);
        // configure tracker specific elements
        TrackerElements.setupTrackerElements();
        SubmitForm.setup(config.allowSubmission);
        config.setup();
    }

    public static registerEvent(eventType: string) {
        data.logs[eventType] = [];
        this.receiver.register(eventType, (event) => { data.logs[eventType].push(event); });
        return this.getEventDispatchFunc(eventType);
    }

    public static getEventDispatchFunc(eventType: string) {
        return (evData: any) => {
            if (typeof evData === 'object') {
                if (!isTrackerEvent(evData)) {
                    objectToTrackerEvent(evData, eventType);
                }
                this.receiver.doEvent(evData);
            }
        };
    }

    public static attachData(key: string, attribute: any) {
        data.data[name] = attribute;
    }

    public static computeAttribute(name: string, compute: (val: any) => any) {
        data.data[name] = compute(data.data[name]);
    }

    private static receiver = new EventReceiver();

    private static config: TrackerConfiguration;

}
