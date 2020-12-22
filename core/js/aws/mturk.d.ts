import { CredentialsProvider } from './cognito';
import { S3Client } from './s3';
export declare class MturkClient {
    static submit(name: string, data: any): Promise<void>;
    static keyGen(hitID: string, assignmentID: string): string;
    static updateCognito(cp: CredentialsProvider): void;
    static updateS3(s3: S3Client): void;
    private static cognito;
    private static s3;
}
//# sourceMappingURL=mturk.d.ts.map