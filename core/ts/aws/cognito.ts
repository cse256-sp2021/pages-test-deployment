import * as AWS from 'aws-sdk/global';
import { DebugLevelEnum, log } from './../utils/console_wrapper';
log('cognito loaded.', DebugLevelEnum.BASIC);
export class CredentialsProvider {

    public static ipID = 'us-east-1:699f1ef0-c76d-4a4f-af0c-cddf00767ce6';
    public static region = 'us-east-1';

    public static get(identityPoolId = CredentialsProvider.ipID, region = CredentialsProvider.region) {
        return new CredentialsProvider(identityPoolId, region);
    }

    private creds: AWS.CognitoIdentityCredentials;

    constructor(identityPoolId: string, private region: string) {
        this.creds = new AWS.CognitoIdentityCredentials({ IdentityPoolId: identityPoolId });
    }

    public get credentials() { return this.creds; }

    public updateGlobal() {
        AWS.config.update({
            region: this.region,
            credentials: this.creds,
        });
        return this;
    }

}
