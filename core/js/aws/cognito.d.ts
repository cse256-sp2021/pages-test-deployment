import * as AWS from 'aws-sdk/global';
export declare class CredentialsProvider {
    private region;
    static ipID: string;
    static region: string;
    static get(identityPoolId?: string, region?: string): CredentialsProvider;
    private creds;
    constructor(identityPoolId: string, region: string);
    get credentials(): AWS.CognitoIdentityCredentials;
    updateGlobal(): this;
}
//# sourceMappingURL=cognito.d.ts.map