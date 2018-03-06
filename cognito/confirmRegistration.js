var AWS = require('aws-sdk');
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
var CognitoUserAttribute = AmazonCognitoIdentity.CognitoUserAttribute;

var poolData = {
    UserPoolId: 'eu-central-1_nGcnRlcf5',
    ClientId: '4bmoep5ndc3q5t2m7or8hi10e9'
};

var userPool = new CognitoUserPool(poolData);

var userData = {
    Username : 'sami',
    Pool : userPool
};

var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

cognitoUser.confirmRegistration('123456', true, function(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('call result: ' + result);
});