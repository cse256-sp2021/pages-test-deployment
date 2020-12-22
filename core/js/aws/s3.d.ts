import S3 from 'aws-sdk/clients/s3';
import * as AWS from 'aws-sdk/global';
export declare class S3Client {
    private bucket;
    static bucketName: string;
    static apiVersion: string;
    static get(bucket?: string): S3Client;
    private s3;
    constructor(bucket: string);
    get bucketName(): string;
    upload(name: string, data: any): Promise<AWS.AWSError | S3.PutObjectOutput>;
}
//# sourceMappingURL=s3.d.ts.map