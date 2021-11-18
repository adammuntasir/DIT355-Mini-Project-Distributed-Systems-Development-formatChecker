var coordinates = require('./coordinates.js');
const bookingModel = {

              
                    clientId: null,
                    requestId: null,
                    bookingTime: "HH:MM YYYY-MM-DD",
                    issuance: null,
                    dentistID: null,
                    clientTime:  "YYYY/MM/DD/''/HH/MM",
                    clientCoordinates: coordinates
        }
    
    module.exports = bookingModel;