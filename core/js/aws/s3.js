"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var s3_1 = __importDefault(require("aws-sdk/clients/s3"));
var console_wrapper_1 = require("../utils/console_wrapper");
console_wrapper_1.log('s3 loaded.', 2 /* BASIC */);
var S3Client = /** @class */ (function () {
    function S3Client(bucket) {
        this.bucket = bucket;
        this.s3 = new s3_1.default({
            apiVersion: S3Client.apiVersion,
        });
    }
    S3Client.get = function (bucket) {
        if (bucket === void 0) { bucket = S3Client.bucketName; }
        return new S3Client(bucket);
    };
    Object.defineProperty(S3Client.prototype, "bucketName", {
        get: function () { return this.bucket; },
        enumerable: true,
        configurable: true
    });
    S3Client.prototype.upload = function (name, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.s3.putObject({ Key: name, Body: data, Bucket: _this.bucket }, function (err, success) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(success);
                }
            });
        });
    };
    S3Client.bucketName = 'bucket-name';
    S3Client.apiVersion = '2006-03-01';
    return S3Client;
}());
exports.S3Client = S3Client;
//# sourceMappingURL=s3.js.map