"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopBanner = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var document_1 = require("./document");
var elements_1 = require("./elements");
console_wrapper_1.log('banner loaded.', 2 /* BASIC */);
var TopBanner = /** @class */ (function () {
    function TopBanner() {
    }
    TopBanner.show = function () {
        TopBanner.showing = true;
        document_1.D.display(elements_1.Elements.ddUp, true);
        document_1.D.display(elements_1.Elements.ddDown, false);
        document_1.D.display(elements_1.Elements.ddContent, true);
    };
    TopBanner.hide = function () {
        TopBanner.showing = false;
        document_1.D.display(elements_1.Elements.ddDown, true);
        document_1.D.display(elements_1.Elements.ddUp, false);
        document_1.D.display(elements_1.Elements.ddContent, false);
    };
    TopBanner.doDisplayChange = function () { TopBanner.showing ? TopBanner.hide() : TopBanner.show(); };
    TopBanner.setup = function () { document_1.D.addEventListener(elements_1.Elements.ddArrow, 'click', TopBanner.doDisplayChange); };
    TopBanner.showing = false;
    return TopBanner;
}());
exports.TopBanner = TopBanner;
//# sourceMappingURL=banner.js.map