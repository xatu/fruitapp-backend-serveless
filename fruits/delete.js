var doc = require('aws-sdk');
var dynamo = new doc.DynamoDB();

exports.handler = async (event, context) => {
    var params = {
        TableName:'products',
        Key: {
            "id": {
                S: event.id    
            }
        }
   };

    dynamo.deleteItem(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else {
             context.succeed(data);
        }
    });
};
