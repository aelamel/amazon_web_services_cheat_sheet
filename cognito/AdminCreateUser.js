var AWSCognito = require('aws-sdk'); // Rename to AWS
AWSCognito.config.region = 'eu-central-1';

var cognitoidentityserviceprovider = new AWSCognito.CognitoIdentityServiceProvider();
var userPoolId = "eu-central-1_hUodmln6U";

var poolData = {
    UserPoolId: userPoolId,
    ClientId: '6d9vavurt34locsilq4tsbklh5'
};

var params = {
    UserPoolId: userPoolId,
    Username: 'ironman@ifsalpha.com',
    ForceAliasCreation: false,
    MessageAction: "SUPPRESS",
    TemporaryPassword: 'azerty1234',
    UserAttributes: [
        {
            Name: 'email',
            Value: 'ironman@ifsalpha.com'
        }
    ]
};
cognitoidentityserviceprovider.adminCreateUser(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
});
