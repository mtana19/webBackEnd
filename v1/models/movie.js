var mongoose = require("mongoose");

// Movie Schema
var movieSchema = new mongoose.Schema({
    title: String,
    image: String,
    genres: [String],
    rating: String,
    runtime: String,
    synopsis: String
});

// Movie Model
module.exports = mongoose.model("Movie", movieSchema);