var AWS = require('aws-sdk');
var s3 = new AWS.S3();

var myBucket = 'ifs.lab.first.bucket.name';

var bucketParams = {
   Bucket : myBucket
};                    
                                   
s3.listObjects(bucketParams, function(err, data) {
   if (err) {
      console.log("Error", err);
   } else {
      console.log("Success", data);
   }
});