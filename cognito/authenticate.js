var AWS = require('aws-sdk');
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
var CognitoUserAttribute = AmazonCognitoIdentity.CognitoUserAttribute;

var Username = 'mlv122';
var poolData = {
    UserPoolId: 'eu-central-1_nGcnRlcf5',
    ClientId: '4bmoep5ndc3q5t2m7or8hi10e9'
};

var authenticationData = {
    Username : Username ,
    Password : 'azerty123',
};

var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
var userPool = new CognitoUserPool(poolData);

var userData = {
    Username : Username,
    Pool : userPool
};

var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
        console.log(result.idToken.jwtToken);
    },
    onFailure: function(err) {
        console.log(err);
    },
});