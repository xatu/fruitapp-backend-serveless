const doc = require('aws-sdk'),
    dynamo = new doc.DynamoDB();

exports.handler = async (event, context) => {
    
    var params = {
        Key: {
            "id" : {
                S: event.id
            }
        },
        ExpressionAttributeNames: {
            "#name" : "name",
            "#description" : "description",
            "#price": "price",
            "#image": "image"
        },
        ExpressionAttributeValues: {
            ":name" : {
                S: event.name
            },
            ":description" : {
                S: event.description
            },
            ":price" : {
                N: event.price
            },
            ":image" : {
                S: event.image
            }
        },
        ReturnValues: "ALL_NEW",
        TableName: "products",
        UpdateExpression: "SET #name = :name, #description = :description, #price = :price, #image = :image"
    };

    dynamo.updateItem(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else context.succeed(data);
    });
};