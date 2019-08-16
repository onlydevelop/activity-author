var AWS = require('aws-sdk');
AWS.config.update({region: 'ap-south-1'});

exports.handler = (event, context, callback) => {

  // Check if the JSON is valid
  JSON.parse();

  // Write the json to S3 bucket
  var response = {
      'statusCode': 200,
      'headers': {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
      },
      'body': {"response": "It works!"}
  }
  callback(null,response);
};
