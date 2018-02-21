var AWS = require('aws-sdk');
var kinesis = new AWS.Kinesis({region : "us-west-2"});

var config = {
    stream: 'kclnodejssample',
    shards: 2,
    waitBetweenDescribeCallsInSeconds: 5
};

var currTime = new Date().getMilliseconds();
var sensor = 'sensor-' + Math.floor(Math.random() * 100000);
var reading = Math.floor(Math.random() * 1000000);

var record = JSON.stringify({
    time: currTime,
    sensor: sensor,
    reading: reading
});

var recordParams = {
    Data: record,
    PartitionKey: sensor,
    StreamName: config.stream
};

kinesis.putRecord(recordParams, function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Successfully sent data to Kinesis.');
    }
});
