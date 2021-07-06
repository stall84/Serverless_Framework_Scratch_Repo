
module.exports.handler = async (event, context, callback) => {

    const eveVal = event;

    const msg = "Hello Again from Test 2";
    console.log('Test 2 Event Value: ', eveVal.key);
    console.log('Test2 Msg: ', msg);

    callback(null, msg);

}