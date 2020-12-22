import { noop } from '../utils/funcs';
export interface AllowSubmission {
    allow(): string | null;
    preSubmit(...args: any): any;
}
export declare class SubmitForm {
    static elem: HTMLFormElement;
    static allowSubmitDefault: {
        allow: () => boolean;
        preSubmit: typeof noop;
    };
    static setup(allowSubmission?: AllowSubmission): void;
    private static submitFunc;
}
//# sourceMappingURL=submit_form.d.ts.map