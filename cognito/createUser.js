var AWS = require('aws-sdk');
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
var CognitoUserAttribute = AmazonCognitoIdentity.CognitoUserAttribute;

var userName = 'ironman';
var email = 'ironman@ifsalpha.com';
var password = 'azerty123';

var poolData = {
    UserPoolId: 'eu-central-1_nGcnRlcf5',
    ClientId: '4bmoep5ndc3q5t2m7or8hi10e9'
};

var userPool = new CognitoUserPool(poolData);

var dataEmail = { Name: 'email', Value: email };
var attributeEmail = new CognitoUserAttribute(dataEmail);

var attributeList = [];
attributeList.push(attributeEmail);

userPool.signUp(userName, password, attributeList, null, function (err, result) {
    if (err) {
        return console.error(err);
    }
    cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
});

