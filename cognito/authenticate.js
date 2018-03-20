var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

var CognitoUser = AmazonCognitoIdentity.CognitoUser;
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
var AuthenticationDetails = AmazonCognitoIdentity.AuthenticationDetails;
var CognitoUserAttribute = AmazonCognitoIdentity.CognitoUserAttribute;

var userName = 'senior@ifsalpha.com';
var password = 'azerty123';

var poolData = {
    UserPoolId: 'eu-central-1_nGcnRlcf5',
    ClientId: '4bmoep5ndc3q5t2m7or8hi10e9'
};

var authenticationData = {
    Username : userName,
    Password : password,
};

var userPool = new CognitoUserPool(poolData);
var authenticationDetails = new AuthenticationDetails(authenticationData);

var userData = {
    Username : userName,
    Pool : userPool
};

var cognitoUser = new CognitoUser(userData);

cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
        console.log(">>> onSuccess <<<");
        console.log(result.idToken.jwtToken);
    },
    onFailure: function(err) {
        console.log(">>> onFailure <<<");
        console.log(err);
    },
    newPasswordRequired: function(userAttributes, requiredAttributes) {
        console.log(">>> NewPasswordRequired <<<");
        console.log(userAttributes);
        console.log(requiredAttributes);
        let attributesData = {};
        cognitoUser.completeNewPasswordChallenge("azerty123", attributesData, this)
    }
});
