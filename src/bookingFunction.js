var bookingModel = require('./bookingModel.js');

var bookingFunction = {

    callFunction(argument) {
        var parseObject = JSON.parse(argument)
        var arrayOjbect = Object.keys(parseObject)
        console.log(argument)
        var hasAll = arrayOjbect.every(arrayOjbect => bookingModel.hasOwnProperty(arrayOjbect));
        if (hasAll) {
            hasAll = false
            return true
        } else {
            return false
        }

    }
}
module.exports = bookingFunction