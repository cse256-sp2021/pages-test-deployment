"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var funcs_1 = require("../utils/funcs");
var mturk_1 = require("./../aws/mturk");
var data_1 = require("./../data-log/data");
var console_wrapper_1 = require("./../utils/console_wrapper");
var elements_1 = require("./elements");
console_wrapper_1.log('submit form loaded.', 2 /* BASIC */);
var AllowSubmissionDefault = {
    allow: function () { return null; },
    preSubmit: funcs_1.noop,
};
var SubmitForm = /** @class */ (function () {
    function SubmitForm() {
    }
    SubmitForm.setup = function (allowSubmission) {
        var _this = this;
        if (allowSubmission === void 0) { allowSubmission = AllowSubmissionDefault; }
        if (data_1.data.urlData.submitTo != null) {
            SubmitForm.elem.action = decodeURI(data_1.data.urlData.submitTo);
        }
        else {
            SubmitForm.elem.action = 'https://www.mturk.com';
        }
        SubmitForm.submitFunc = console_wrapper_1.errorHO(function (event) { return __awaiter(_this, void 0, void 0, function () {
            var allowed, hitID, assignmnetID;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        allowed = allowSubmission.allow();
                        if (!(allowed === null)) return [3 /*break*/, 2];
                        allowSubmission.preSubmit();
                        hitID = data_1.data.urlData.hitID;
                        if (hitID === null) {
                            hitID = 'hitID unavail ' + (Math.random() * 100000);
                        }
                        assignmnetID = data_1.data.urlData.assignmentID;
                        if (assignmnetID === null) {
                            assignmnetID = 'assignmnetID unavail ' + (Math.random() * 100000);
                        }
                        return [4 /*yield*/, mturk_1.MturkClient.submit(mturk_1.MturkClient.keyGen(hitID, assignmnetID), data_1.data)];
                    case 1:
                        _a.sent();
                        SubmitForm.elem.removeEventListener('submit', SubmitForm.submitFunc);
                        SubmitForm.elem.submit();
                        return [3 /*break*/, 3];
                    case 2:
                        alert(allowed);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        SubmitForm.elem.addEventListener('submit', SubmitForm.submitFunc);
    };
    SubmitForm.elem = elements_1.Elements.submitForm;
    SubmitForm.allowSubmitDefault = { allow: function () { return true; }, preSubmit: funcs_1.noop };
    return SubmitForm;
}());
exports.SubmitForm = SubmitForm;
//# sourceMappingURL=submit_form.js.map