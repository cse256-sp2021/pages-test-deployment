"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./console_wrapper");
console_wrapper_1.log('funcs loaded.', 2 /* BASIC */);
// tslint:disable-next-line: no-empty
function noop() { }
exports.noop = noop;
function now() { return new Date().getTime(); }
exports.now = now;
//# sourceMappingURL=funcs.js.map