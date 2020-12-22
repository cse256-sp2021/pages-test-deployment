import { ActionEnum } from './../../../node_modules/core/js/data-log/event';
import { D } from './../../../node_modules/core/js/dom/document';
import { Elements } from './../../../node_modules/core/js/dom/elements';
import { Scroll } from './../../../node_modules/core/js/dom/scroll';
import { History } from './../../../node_modules/core/js/router/history';
import { Router, RouterMode, RouterModule } from './../../../node_modules/core/js/router/router';
import { Tracker } from './../../../node_modules/core/js/tracker/tracker';
import { DebugLevelEnum } from './../../../node_modules/core/js/utils/console_wrapper';
import { HTMLLoader } from './../../../node_modules/core/js/utils/html_loader';
import { IDGenerator } from './../../../node_modules/core/js/utils/id_generator';
import { waitUntilReady } from './../../../node_modules/core/js/utils/ready';

const setup = async () => {
    await waitUntilReady();
    Tracker.start({
            allowSubmission: {
                allow() {
                    return '';
                },
                preSubmit() {
                    return;
                },
            },

            debugLevel: DebugLevelEnum.NONE,

            async setup() {
                // configure router
                Router.defaultAllowancesOn();
                Router.configure([
                    {mode: RouterMode.STANDARD_ALLOWANCES, module: RouterModule.A},
                    {mode: RouterMode.OFF, module: RouterModule.FORM},
                    {mode: RouterMode.STANDARD_ALLOWANCES, module: RouterModule.IMG},
                ]);
                History.setup(window.location.href);
                // configure html loader post operation
                HTMLLoader.registerPostLoadFunc(() => {
                    IDGenerator.reset();
                    IDGenerator.attachIdsToAllElements();
                    Router.setup(Elements.htmlLoc);
                    Scroll.promise(0);
                });
                // configure listeners on html loc
                D.addEventListener(Elements.htmlLoc, ActionEnum.CLICK, (e) => {
                    const ev = e as MouseEvent;
                    const obj = {x: ev.clientX, y: ev.clientY, id: (ev.srcElement as HTMLElement).id};
                    Tracker.getEventDispatchFunc(ActionEnum.CLICK)(obj);
                });
                D.addEventListener(Elements.htmlLoc, 'keypress', (e) => {
                    const ev = e as KeyboardEvent;
                    const obj = {key: ev.key, id: (ev.srcElement as HTMLElement).id};
                    Tracker.getEventDispatchFunc(ActionEnum.BUTTON)(obj);
                });
                // configure tracked events
                Tracker.registerEvent(ActionEnum.HISTORY);
                Tracker.registerEvent(ActionEnum.BUTTON);
                Tracker.registerEvent(ActionEnum.CLICK);
                Tracker.registerEvent(ActionEnum.SCROLL);
                // load first page
                await Router.load('/information-foraging/html/index.html');
            },

        });
};

setup();
