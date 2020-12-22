import S3 from 'aws-sdk/clients/s3';
import { DebugLevelEnum, error, log } from '../utils/console_wrapper';
import { CredentialsProvider } from './cognito';
import { S3Client } from './s3';
log('mturk loaded.', DebugLevelEnum.BASIC);
export class MturkClient {

    public static async submit(name: string, data: any) {
        error(async () => {
            this.cognito.updateGlobal();
            let ret = await this.s3.upload(name, data);
            ret = ret as S3.PutObjectOutput;
        });
    }

    public static keyGen(hitID: string, assignmentID: string) {
        return `${hitID}-${assignmentID}-log.json`;
    }

    public static updateCognito(cp: CredentialsProvider) {
        MturkClient.cognito = cp;
    }

    public static updateS3(s3: S3Client) {
        MturkClient.s3 = s3;
    }

    private static cognito = CredentialsProvider.get();
    private static s3 = S3Client.get();

}
