const EventEmitter = require('events');

var url = 'http://myLogger.io/log';

class logger extends EventEmitter {
    log(message){
        // send an HTTP request
        console.log(message);
    
        //Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://' });
    }
}

module.exports.log = logger;
//module.exports.endPoint = url;
