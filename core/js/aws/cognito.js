"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
        enumerable: true,
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