const aws = require('aws-sdk'),
    s3 = new aws.S3();

exports.handler = async (event, context) => {
    let encodedImage = JSON.parse(event.body).image;
    let decodeImage = Buffer.from(encodedImage, 'base64');
    var filepath = "images/" + event.queryStringParameters.image + ".jpeg"
    var params = {
        "Body": decodeImage,
        "Bucket": "fruitImages",
        "Key": filepath
    };
    
    s3.upload(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else {
           let response = {
               "statusCode": 200,
               "headers": {
                    "my_header": "my_value"   
               },
               "body": JSON.stringify(data),
               "isBase64Encoded": false
           }
           context.succeed(response);
       }
    });
}