var AWS = require('aws-sdk');

AWS.config.region = 'eu-west-1';

var params = {
    Destination: {
        ToAddresses: [
            'success@simulator.amazonses.com'
        ]
    },
    Message: {
        Body: {
            Html: {
                Charset: "UTF-8",
                Data: "<b> Hello </b>"
            },
            Text: {
                Charset: "UTF-8",
                Data: "TEXT_FORMAT_BODY"
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Test email'
        }
    },
    Source: 'ouadie.lahdioui@ifsalpha.com',
    ReplyToAddresses: [
        'ouadie.lahdioui@ifsalpha.com'
    ]
};

var sendPromise = new AWS.SES().sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(function (data) {
    console.log(">> OK");
    console.log(data.MessageId);
}).catch(function (err) {
    console.log(">> KO");
    console.error(err, err.stack);
});