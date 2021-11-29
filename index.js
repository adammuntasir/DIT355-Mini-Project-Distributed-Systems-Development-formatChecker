var subscriber = require('./src/subscriber.js');
var publisher = require('./src/publisher.js');
var logic = require('./src/logic.js');
var bookingFunction = require('./src/bookingFunction.js');


var access = require('../global_values.js');
const booleanValidator = require('./src/booleanValidator.js');

subscriber.start(); //starts the subscriber.js module
publisher.start(); //starts the publisher.js module


subscriber.eventListener.on("mqttRecieved", function(topic, payload) {

    if (payload.length > 40) {
        var messageExtracted = logic.extractData(payload)
            //console.log(payload)
        var dataResult = bookingFunction.callFunction(messageExtracted)
        if (dataResult === true) {
            var bytesString = String.fromCharCode(...payload) // https://programmingwithswift.com/how-to-convert-byte-array-to-string-with-javascript/ EQUAL TO STRING

            var modifyTime = JSON.parse(bytesString)
            var readyToBeModified = modifyTime.date
            var splitUpString = readyToBeModified.split(/(?::|-| )+/);
            console.log(splitUpString)

            publisher.publish(access.sendToDataHandler, payload)
        }

    } else {

        publisher.publish(access.sendToDataHandler, payload)
    }
})