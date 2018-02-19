var AWS = require('aws-sdk');
var s3 = new AWS.S3();

// AWS.config.update({region: 'REGION'});

s3.listBuckets(function(err, data) {
   if (err) {
      console.log("Error", err);
   } else {
      console.log("Bucket List", data.Buckets);
   }
});