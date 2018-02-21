var AWS = require('aws-sdk');
var kinesis = new AWS.Kinesis({ region: "us-west-2" });

var config = {
    stream: 'kclnodejssample',
    shards: 2,
    waitBetweenDescribeCallsInSeconds: 5
};

var params = {
    ShardCount: config.shards,
    StreamName: config.stream
};

kinesis.createStream(params, function (err, data) {
    if (err) {
        console.log('Error in createStream:' + JSON.stringify(err));
    }
    else {
        console.log("stream doesn't exist. Created a new stream with that name " + config.stream);
    }

    // Poll to make sure stream is in ACTIVE state before start pushing data.
    kinesis.describeStream({StreamName : config.stream}, function(err, data) {
      if (!err) {
        console.log('Current status of the stream is %s.' + data.StreamDescription.StreamStatus);
      } else {
        console.log('Error in describeStream:' + JSON.stringify(err));
      }
    });

});