var subscriber = require('./src/subscriber.js');
var publisher = require('./src/publisher.js');
var logic = require('./src/logic.js');


var access = require('../global_values.js');
const booleanValidator = require('./src/booleanValidator.js');

subscriber.start(); //starts the subscriber.js module
publisher.start(); //starts the publisher.js module


subscriber.eventListener.on("mqttRecieved", function(topic, payload) {

    
    console.log("the payload is " + (payload))
    var messageExtracted = logic.extractData(payload)
    console.log(messageExtracted)
        var bytesString = String.fromCharCode(...payload)
        
var dataResult = bookingFunction(bytesString)
var readyToBePublished = JSON.stringify(dataResult)

publisher.publish(access.toRegistry,readyToBePublished)



})