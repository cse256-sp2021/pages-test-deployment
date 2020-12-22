"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialsProvider = void 0;
var AWS = __importStar(require("aws-sdk/global"));
var console_wrapper_1 = require("./../utils/console_wrapper");
console_wrapper_1.log('cognito loaded.', 2 /* BASIC */);
var CredentialsProvider = /** @class */ (function () {
    function CredentialsProvider(identityPoolId, region) {
        this.region = region;
        this.creds = new AWS.CognitoIdentityCredentials({ IdentityPoolId: identityPoolId });
    }
    CredentialsProvider.get = function (identityPoolId, region) {
        if (identityPoolId === void 0) { identityPoolId = CredentialsProvider.ipID; }
        if (region === void 0) { region = CredentialsProvider.region; }
        return new CredentialsProvider(identityPoolId, region);
    };
    Object.defineProperty(CredentialsProvider.prototype, "credentials", {
        get: function () { return this.creds; },
        enumerable: false,
        configurable: true
    });
    CredentialsProvider.prototype.updateGlobal = function () {
        AWS.config.update({
            region: this.region,
            credentials: this.creds,
        });
        return this;
    };
    CredentialsProvider.ipID = 'us-east-1:699f1ef0-c76d-4a4f-af0c-cddf00767ce6';
    CredentialsProvider.region = 'us-east-1';
    return CredentialsProvider;
}());
exports.CredentialsProvider = CredentialsProvider;
//# sourceMappingURL=cognito.js.map