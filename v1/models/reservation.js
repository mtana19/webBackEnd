var mongoose = require("mongoose");

// Reservation Schema
var reservationSchema = new mongoose.Schema({
    schedID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Schedule"
    },
    movie: String,
    cinema: Number,
    date: String,
    time: String,
    total: Number,
    seats: Array
});

// Reservation Model
module.exports = mongoose.model("Reservation", reservationSchema);