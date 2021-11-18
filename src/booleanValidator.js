var bookingModel = require('./bookingModel')
var dateModel = require('./dateModel')
bookingModelResult = false; 
dateModelResult = false; 

module.exports = {
validateResults : function(data) {
try{
    bookingModelResult = bookingModel(data)
    dateModelResult= dateModel(data)

    if(bookingModelResult && dateModelResult){
    
bookingModelResult = false;
dateModelResult = false;

        var finalResult = JSON.parse(data)
        return finalResult
    } else{
    return false
}

} catch (error){
    console.log(error.message)
}

}
}
