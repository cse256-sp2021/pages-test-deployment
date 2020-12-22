import { D } from '../dom/document';
import { DebugLevelEnum, log } from './console_wrapper';
import { noop } from './funcs';
log('html loader loaded.', DebugLevelEnum.BASIC);
export class HTMLLoader {

    public static registerPostLoadFunc(func: () => any) {
        log('regsiter post load function', DebugLevelEnum.DETAILED);
        HTMLLoader.postLoadFunc = func;
    }

    public static load(html: string, elem: Element | string) {
        html = "/pages-test-deployment" + html;
        return new Promise<boolean>((resolve, reject) => {
            try {
                log('begin load', DebugLevelEnum.DETAILED);
                const context = D.elem(elem);
                const range = document.createRange();
                range.selectNodeContents(context);
                const frag = range.createContextualFragment(html);
                HTMLLoader.removeTagsFromDocumentFragment(frag, 'script');
                context.innerHTML = '';
                context.appendChild(frag);
                log('end load', DebugLevelEnum.DETAILED);
                HTMLLoader.postLoadFunc();
                resolve(true);
            } catch (err) {
                reject(err);
            }
        });
    }

    public static async loadURL(url: string, elem: Element | string) {
        return HTMLLoader.load(await HTMLLoader.getHTML(url), elem);
    }

    public static getHTML(url: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            try {
                log('begin request', DebugLevelEnum.DETAILED);
                const request = new XMLHttpRequest();
                request.open('GET', url, true);
                request.send(null);
                request.onreadystatechange = () => {
                    if (request.readyState === 4) {
                        log('resolve request', DebugLevelEnum.DETAILED);
                        resolve(request.responseText);
                    }
                };
            } catch (err) {
                reject(err);
            }
        });
    }

    private static postLoadFunc: () => any = noop;

    private static removeTagsFromDocumentFragment(frag: DocumentFragment, tagName: string) {
        frag.querySelectorAll(tagName).forEach((tag) => frag.removeChild(tag));
    }

}
