// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#adminCreateUser-property
var AWS = require('aws-sdk');

AWS.config.region = 'eu-central-1';

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
var userPoolId = "eu-central-1_nGcnRlcf5";

var params = {
    UserPoolId: userPoolId,
    Username: 'ironman@ifsalpha.com',
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
    else console.log(data.User);
});
