import { D } from './../dom/document';
import { Elements } from './../dom/elements';
import { DebugLevelEnum, error, log } from './../utils/console_wrapper';
import { HTMLLoader } from './../utils/html_loader';
import { History } from './history';
log('router loaded.', DebugLevelEnum.BASIC);
export const enum RouterMode {
    OFF,
    ON,
    STANDARD_ALLOWANCES,
}

export const enum RouterModule {
    A = 'A',
    IMG = 'IMG',
    FORM = 'FORM',
}

export interface RouterConfig {
    module: RouterModule;
    mode: RouterMode;
}

interface FullRouterConfig extends RouterConfig { setup(config: FullRouterConfig, elem: Element): any; }

function testOn(elem: Element, config: RouterConfig) { return elem.tagName === config.module && (config.mode === RouterMode.ON || config.mode === RouterMode.STANDARD_ALLOWANCES); }
function testAllowance(config: RouterConfig) { return config.mode === RouterMode.STANDARD_ALLOWANCES; }

export class Router {

    public static HASH_TAGS = new RegExp('#');
    public static EMPTY = new RegExp('^$');

    public static configure(configs: RouterConfig[]) {
        configs.forEach((config) => {
            Router.configs.set(config.module, Router.upgradeConfig(config));
        });
    }

    public static setup(elem: Element | string) {
        D.eachRecur(elem, (node) => {
            for (const config of Router.configs.values()) {
                if (testOn(node, config)) { config.setup(config, node); }
            }
        });
    }

    public static STANDARD_LINK_LISTENER(e: MouseEvent) {
        return error(() => {
            e.preventDefault();
            const target = (e.target as HTMLAnchorElement);
            const url = target.href;
            History.forward(Router.getPathName(url));
            return HTMLLoader.loadURL(url, Elements.htmlLoc);
        });
    }

    public static ON_COMPLETE_SLL(post: (e: MouseEvent) => any) {
        return (e: MouseEvent) => {
            error(async () => {
                await Router.STANDARD_LINK_LISTENER(e);
                post(e);
            });
        };
    }

    public static IMAGE_LINK_LISTENER(e: MouseEvent) {
        return error(() => {
            // TODO: Fix this to load special single image page, or maybe turn of single image page loading?
            e.preventDefault();
            const target = (e.target as HTMLImageElement);
            const url = target.src;
            History.forward(Router.getPathName(url));
            return HTMLLoader.loadURL(url, Elements.htmlLoc);
        });
    }

    public static FORM_OFF_LISTENER(e: Event) {
        e.preventDefault();
        console.error('All forms except for the one in the top header are inactive.');
    }

    public static defaultAllowancesOn() { Router.registerAllowance(Router.EMPTY, Router.HASH_TAGS); }
    public static defaultAllowancesOff() { Router.unregisterAllowance(Router.EMPTY, Router.HASH_TAGS); }
    public static registerAllowance(...regexs: RegExp[]) { regexs.forEach((regex) => Router.linkAllowances.add(regex)); }
    public static unregisterAllowance(...regexs: RegExp[]) { regexs.forEach((regex) => Router.linkAllowances.delete(regex)); }
    public static clearAllowances() { Router.linkAllowances.clear(); }

    public static async load(url: string): Promise<boolean> {
        History.forward(Router.getPathName(url));
        return HTMLLoader.loadURL(url, Elements.htmlLoc);
    }

    private static SetupFunctions = {
        A: (config: FullRouterConfig, elem: Element) => {
            const aNode = elem as HTMLAnchorElement;
            if (testAllowance(config)) {
                let passesRegexTest = true;
                Router.linkAllowances.forEach((regex) => {
                    passesRegexTest = passesRegexTest && !regex.test(aNode.href);
                });
                if (passesRegexTest) {
                    D.addEventListener(elem, 'click', (e) => Router.STANDARD_LINK_LISTENER(e as MouseEvent));
                }
            } else {
                D.addEventListener(elem, 'click', (e) => Router.STANDARD_LINK_LISTENER(e as MouseEvent));
            }
        },
        IMG: (config: FullRouterConfig, elem: Element) => {
            const imgNode = elem as HTMLImageElement;
            if (testAllowance(config)) {
                let passesRegexTest = true;
                Router.linkAllowances.forEach((regex) => {
                    passesRegexTest = passesRegexTest && !regex.test(imgNode.src);
                });
                if (passesRegexTest) {
                    D.addEventListener(elem, 'click', (e) => Router.STANDARD_LINK_LISTENER(e as MouseEvent));
                }
            } else {
                D.addEventListener(elem, 'click', (e) => Router.STANDARD_LINK_LISTENER(e as MouseEvent));
            }
        },
        FORM: (config: FullRouterConfig, elem: Element) => {
            const formNode = elem as HTMLFormElement;
            if (testAllowance(config)) {
                let passesRegexTest = true;
                Router.linkAllowances.forEach((regex) => {
                    passesRegexTest = passesRegexTest && !regex.test(formNode.action);
                });
                if (passesRegexTest) {
                    D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
                }
            } else {
                D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
            }
        },
    };

    private static configs = new Map<RouterModule, FullRouterConfig>();

    private static linkAllowances: Set<RegExp> = new Set<RegExp>();

    private static pathRegex = /\/([\w]+.html)/;

    private static upgradeConfig(config: RouterConfig): FullRouterConfig {
        return {
            module: config.module,
            mode: config.mode,
            setup: Router.SetupFunctions[config.module],
        };
    }
    private static getPathName(url: string): string {
        const ret = Router.pathRegex.exec(url);
        return ret === null ? url : ret.length > 1 ? ret[1] : url;
    }
}
