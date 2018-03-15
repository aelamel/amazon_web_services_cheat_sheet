var AWS = require('aws-sdk');
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

var CognitoUser = AmazonCognitoIdentity.CognitoUser;
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
var AuthenticationDetails = AmazonCognitoIdentity.AuthenticationDetails;
var CognitoUserAttribute = AmazonCognitoIdentity.CognitoUserAttribute;

var userName = 'ironmen';
var oldPassword = 'azerty123';
var newPassword = 'azerty123';

var poolData = {
    UserPoolId: 'eu-central-1_nGcnRlcf5',
    ClientId: '4bmoep5ndc3q5t2m7or8hi10e9'
};

var userPool = new CognitoUserPool(poolData);

var userData = {
    Username : userName,
    Pool : userPool
};

var cognitoUser = new CognitoUser(userData);

cognitoUser.changePassword(oldPassword, newPassword, function(err, result) {
    console.log(err)
    console.log(result)
});
