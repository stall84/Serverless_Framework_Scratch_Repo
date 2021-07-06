const AWS = require('aws-sdk');

const lambda = new AWS.Lambda({
    endpoint: new AWS.Endpoint('http://localhost:4000'),
    region: 'us-east-1'
})
const params = {
    FunctionName: 'Test1',
    InvocationType: 'RequestResponse',
    Payload: JSON.stringify({ message: 'FOOO!!' })
}
module.exports.handler = async (event, context, callback) => {

    const msg = "Hello Folks fron Test1";

    console.log('Test1 Msg: ', msg);

    // const response = await lambda.invoke(params).promise()
    const response = {
        message: 'Something Here',
        key: 'Value',
        newKdy: msg
    };

    const simpleVal = 5;

    const simpleObj = {
        key: 'VALUE!'
    }
    
    callback(null, simpleObj);
    
    
    // return lambda.invoke({
    //     FunctionName: 'Test2',
    //     InvocationType: 'Event',
    //     Payload: JSON.stringify({ message: msg })
    // }).promise();
    

}