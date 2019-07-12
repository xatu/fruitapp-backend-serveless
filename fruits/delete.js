var doc = require('aws-sdk');
var dynamo = new doc.DynamoDB();

exports.handler = function(event, context) {
    var params = {
        TableName:'products',
        Key: {
            "id": {
                S: event.id    
            }
        }
   };

    dynamo.deleteItem(params, function(err, data){
        if (err) console.log(err, err.stack);
        else {
             context.succeed(data);
        }
    });
};
