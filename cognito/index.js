var AWS = require('aws-sdk');
var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
var CognitoUserAttribute = AmazonCognitoIdentity.CognitoUserAttribute;

var poolData = { 
        UserPoolId : 'eu-central-1_nGcnRlcf5', // Your user pool id here
        ClientId : '4bmoep5ndc3q5t2m7or8hi10e9' // Your client id here
};

var userPool = new CognitoUserPool(poolData);    
var attributeList = [];

var dataEmail = {
        Name : 'email',
        Value : 'email@mydomain.com'
    };
    var attributeEmail = new CognitoUserAttribute(dataEmail);
     attributeList.push(attributeEmail);

console.log('calling signup..');

userPool.signUp('mlv122', 'azerty123', attributeList, null, function(err, result){
    if (err) {
        return console.error(err);
    }
    cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
});