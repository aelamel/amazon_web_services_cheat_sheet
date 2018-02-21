var kcl = require('aws-kcl');
var util = require('util');

var recordProcessor = {
    initialize: function (initializeInput, completeCallback) {
        shardId = initializeInput.shardId;

        completeCallback();
    },

    processRecords: function (processRecordsInput, completeCallback) {
        if (!processRecordsInput || !processRecordsInput.records) {
            completeCallback();
            return;
        }
        var records = processRecordsInput.records;
        var record, data, sequenceNumber, partitionKey;
        for (var i = 0; i < records.length; ++i) {
            record = records[i];
            data = new Buffer(record.data, 'base64').toString();
            sequenceNumber = record.sequenceNumber;
            partitionKey = record.partitionKey;
            console.log(util.format('ShardID: %s, Record: %s, SeqenceNumber: %s, PartitionKey:%s', shardId, data, sequenceNumber, partitionKey));
        }
        if (!sequenceNumber) {
            completeCallback();
            return;
        }
        // If checkpointing, completeCallback should only be called once checkpoint is complete.
        processRecordsInput.checkpointer.checkpoint(sequenceNumber, function (err, sequenceNumber) {
            console.log(util.format('Checkpoint successful. ShardID: %s, SeqenceNumber: %s', shardId, sequenceNumber));
            completeCallback();
        });
    },

    shutdownRequested: function (shutdownRequestedInput, completeCallback) {
        shutdownRequestedInput.checkpointer.checkpoint(function (err) {
            completeCallback();
        });
    },

    shutdown: function (shutdownInput, completeCallback) {
        // Checkpoint should only be performed when shutdown reason is TERMINATE.
        if (shutdownInput.reason !== 'TERMINATE') {
            completeCallback();
            return;
        }
        // Whenever checkpointing, completeCallback should only be invoked once checkpoint is complete.
        shutdownInput.checkpointer.checkpoint(function (err) {
            completeCallback();
        });
    }
};

kcl(recordProcessor).run();