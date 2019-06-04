const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Booking = new Schema({
    booking_Heading: {
        type: String
    },
    booking_Content: {
        type: String
    },
    booking_Date: {
        type: String
    },
    booking_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Booking', Booking);