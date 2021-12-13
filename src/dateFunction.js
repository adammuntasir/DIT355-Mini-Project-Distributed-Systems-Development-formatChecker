var dateFunction = {

    callFunction(argument) {
        var bool
        var splitUpString = argument.split('/');

        if (parseInt(splitUpString[0]) >= 2021) { // change to date year now
            console.log("year")
            bool = true
        }
        if (parseInt(splitUpString[1]) >= 1 && (splitUpString[1]) <= 12) {
            console.log("month")
            bool = true
        }
        if (parseInt(splitUpString[2]) >= 1 && parseInt(splitUpString[2]) <= 31) {
            console.log("day")
            bool = true
        }
        if (
            (splitUpString[3]) == "Saturday" ||
            (splitUpString[3]) == "Sunday" ||
            (splitUpString[3]) == "Monday" ||
            (splitUpString[3]) == "Tuesday" ||
            (splitUpString[3]) == "Wednesday" ||
            (splitUpString[3]) == "Thursday" ||
            (splitUpString[3]) == "Friday") {
            console.log(splitUpString[3])
            bool = true
        }
        if (parseInt(splitUpString[4]) >= 0 && parseInt(splitUpString[4]) <= 23) {
            console.log("hour")
            bool = true
        }
        if (parseInt(splitUpString[5]) == 0 || parseInt(splitUpString[5]) == 30) {
            console.log("minute")
            bool = true
        }
        // var arrayOjbect = Object.keys(parseObject)
        // var hasAll = arrayOjbect.every(arrayOjbect => bookingModel.hasOwnProperty(arrayOjbect));
        if (bool) {
            return true
        } else {
            return false
        }

    }
}
module.exports = dateFunction