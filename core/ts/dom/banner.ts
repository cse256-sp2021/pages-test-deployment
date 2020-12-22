import { DebugLevelEnum, log } from '../utils/console_wrapper';
import { D } from './document';
import { Elements } from './elements';
log('banner loaded.', DebugLevelEnum.BASIC);
export class TopBanner {

    public static show() {
        TopBanner.showing = true;
        D.display(Elements.ddUp, true);
        D.display(Elements.ddDown, false);
        D.display(Elements.ddContent, true);
    }

    public static hide() {
        TopBanner.showing = false;
        D.display(Elements.ddDown, true);
        D.display(Elements.ddUp, false);
        D.display(Elements.ddContent, false);
    }

    public static doDisplayChange() { TopBanner.showing ? TopBanner.hide() : TopBanner.show(); }
    public static setup() { D.addEventListener(Elements.ddArrow, 'click', TopBanner.doDisplayChange); }

    private static showing = false;

}
