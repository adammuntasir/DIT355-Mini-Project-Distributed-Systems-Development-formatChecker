var coordinatesModel = require('./coordinates')
const bookingModel = {

    userId: null,
    requestId: null,
    dentistID: null,
    issuance: null,
    date: "YYYY-MM-DD HH:MM",
    clientCoordinates: coordinatesModel

}

module.exports = bookingModel;