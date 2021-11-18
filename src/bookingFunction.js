var bookingModel = require('./bookingModel.js');

var bookingFunction = function (argument){
    var parseObject = JSON.parse(argument)
    var arrayOjbect = Object.keys(parseObject)


var hasAll = arrayOjbect.every(arrayOjbect => bookingModel.hasOwnProperty(arrayOjbect));

if(hasAll){

    hasAll = false
return true} else {
return false }

}
