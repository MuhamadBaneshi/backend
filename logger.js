var url = 'http://myLogger.io/log';
function log(message){
    // send an HTTP request
    console.log(message);
}

module.exports.log = log;
//module.exports.endPoint = url;
