var mongoose = require("mongoose");

// Schedule Schema
var scheduleSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    },
    schedule: Date,
    cinema: Number,
    price: Number,
    seats: [String]
});

// Schedule Model
module.exports = mongoose.model("Schedule", scheduleSchema);