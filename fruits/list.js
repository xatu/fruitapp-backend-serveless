var doc = require('aws-sdk');
var dynamo = new doc.DynamoDB();

exports.handler = async (event, context) => {
    var getParams = {
        TableName:'products'
   };

    dynamo.scan(getParams, (err, data) => {
        if (err) console.log(err, err.stack);
        else {
             context.succeed(data);
        }
    });
};
