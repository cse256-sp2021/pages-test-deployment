"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDGenerator = void 0;
var elements_1 = require("../dom/elements");
var document_1 = require("./../dom/document");
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log('id generator loaded', 2 /* BASIC */);
var IDGenerator = /** @class */ (function () {
    function IDGenerator() {
    }
    IDGenerator.reset = function () { IDGenerator.idCount = 0; };
    Object.defineProperty(IDGenerator, "next", {
        get: function () {
            IDGenerator.idCount += 1;
            return IDGenerator.prefix + IDGenerator.idCount;
        },
        enumerable: false,
        configurable: true
    });
    IDGenerator.applyID = function (elem) { elem.id = elem.id ? elem.id : IDGenerator.next; };
    /**
     * Recursively adds ids to all elements that are below the given
     * element in the heirarchy.
     *
     * @param elem - the element to start applying ids to its children.
     *                  Will not apply an id to this element.
     */
    IDGenerator.applyRecur = function (elem) { document_1.D.eachRecur(elem, this.applyID); };
    /**
     * Attaches ids to all html elements in the target location in the DOM that do not have ids.
     */
    IDGenerator.attachIdsToAllElements = function () { IDGenerator.applyRecur(elements_1.Elements.htmlLoc); };
    IDGenerator.idCount = 0;
    IDGenerator.prefix = 'auto_gen_id_unq_';
    return IDGenerator;
}());
exports.IDGenerator = IDGenerator;
//# sourceMappingURL=id_generator.js.map