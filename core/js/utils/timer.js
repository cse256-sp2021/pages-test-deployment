"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_wrapper_1 = require("./console_wrapper");
var funcs_1 = require("./funcs");
console_wrapper_1.log('timer loaded', 3 /* DETAILED */);
/**
 * A custom timeout class that can be paused.
 */
var CustomTimeout = /** @class */ (function () {
    function CustomTimeout(time, func) {
        this.time = time;
        this.func = func;
        this.start = 0;
        this.timeout = 0;
        this.finished = false;
        this.running = false;
    }
    /**
     * Runs the timer if it is not finished and it is not already running.
     */
    CustomTimeout.prototype.set = function () {
        var _this = this;
        if (!this.finished && !this.running) {
            this.running = true;
            this.start = funcs_1.now();
            this.timeout = window.setTimeout(function () {
                _this.finished = true;
                _this.running = false;
                _this.func();
            }, this.time);
        }
    };
    /**
     * Pauses the timer and calculates amount of time remaining.
     */
    CustomTimeout.prototype.pause = function () {
        if (!this.finished && this.running) {
            clearTimeout(this.timeout);
            this.time -= (funcs_1.now() - this.start);
            this.running = false;
        }
    };
    /**
     * Stops the timer and disallows it from running again.
     */
    CustomTimeout.prototype.clear = function () {
        clearTimeout(this.timeout);
        this.finished = true;
        this.running = false;
    };
    return CustomTimeout;
}());
exports.CustomTimeout = CustomTimeout;
//# sourceMappingURL=timer.js.map