var mongoose    = require("mongoose"),
    request     = require("request"),
    Movie       = require("./models/movie"),
    Schedule    = require("./models/schedule");

// API
var send = "http://www.omdbapi.com/?t=";
var apikey = "&apikey=784ec9f4";
var url;

// SEAT GENERATOR (A1-I8)
function generateSeats() {
    var result = "";
    var seatsArr = [];
    var char;
    var i;
    var j;
  
    for (i = 65; i <= 73; i++) {
        for(j = 1; j <= 8; j++) {
            char = String.fromCharCode(i);
            result = char + j;
            seatsArr.push(result);
        }
    }
    return seatsArr;
}

var seats = generateSeats();

// EXTACTS NUMBERS FROM A STRING
function extractNum (strNum) {
    var regex = /[+-]?\d+(?:\.\d+)?/g;
    var str = strNum;
    var matches = str.match(regex); 
    var numRuntime = 0;

    if (matches) { 
        numRuntime = matches[0];
    }
    return numRuntime;
}

// POPULATE DB
function seedDB() {
    Movie.deleteMany({}, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("** Movies have been successfully removed from database.");
            
            Schedule.deleteMany({}, function(err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("** Schedules have been successfully removed from database.");
                    
                    // **** ADD MOVIES AND SCHEDULES ****
                    
                    // The Avengers
                    url = send + "the+avengers" + apikey;
                    request(url, function(err, res, body) {
                        var data = JSON.parse(body);

                        Movie.create({
                            title: data.Title,
                            image: data.Poster,
                            genres: data.Genre.split(","),
                            rating: data.Rated,
                            runtime: extractNum(data.Runtime),
                            synopsis: data.Plot
                        }, function(err, newMovie) {
                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-22 08:00:00"),
                                cinema: 1,
                                price: 180.00,
                                seats: seats
                            }, function(err, sched){
                                if(err) {
                                    console.log(err);
                                } else {
                                    // console.log(sched.schedule);
                                }
                            });

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-23 10:00:00"),
                                cinema: 3,
                                price: 500.00,
                                seats: seats
                            });
                            
                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-25 14:30:00"),
                                cinema: 4,
                                price: 750.00,
                                seats: seats
                            });
                        });
                    })
                    
                    // Black Hawk Down
                    url = send + "black+hawk+down" + apikey;;
                    request(url, function(err, res, body) {
                        var data = JSON.parse(body);

                        Movie.create({
                            title: data.Title,
                            image: data.Poster,
                            genres: data.Genre.split(","),
                            rating: data.Rated,
                            runtime: extractNum(data.Runtime),
                            synopsis: data.Plot
                        }, function(err, newMovie) {

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-22 11:00:00"),
                                cinema: 1,
                                price: 180.00,
                                seats: seats
                            });

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-24 08:00:00"),
                                cinema: 3,
                                price: 500.00,
                                seats: seats
                            });
                            
                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-24 13:30:00"),
                                cinema: 4,
                                price: 750.00,
                                seats: seats
                            });
                        });
                    })
                    
                    // The Dark Knight
                    url = send + "the+dark+knight" + apikey;;
                    request(url, function(err, res, body) {
                        var data = JSON.parse(body);

                        Movie.create({
                            title: data.Title,
                            image: data.Poster,
                            genres: data.Genre.split(","),
                            rating: data.Rated,
                            runtime: extractNum(data.Runtime),
                            synopsis: data.Plot
                        }, function(err, newMovie) {

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-23 08:00:00"),
                                cinema: 3,
                                price: 500.00,
                                seats: seats
                            });

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-26 10:15:00"),
                                cinema: 1,
                                price: 180.00,
                                seats: seats
                            });
                            
                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-26 14:45:00"),
                                cinema: 2,
                                price: 250.00,
                                seats: seats
                            });
                        });
                    })
                    
                    // 上手
                    url = send + "jaws" + apikey;;
                    request(url, function(err, res, body) {
                        var data = JSON.parse(body);

                        Movie.create({
                            title: data.Title,
                            image: data.Poster,
                            genres: data.Genre.split(","),
                            rating: data.Rated,
                            runtime: extractNum(data.Runtime),
                            synopsis: data.Plot
                        }, function(err, newMovie) {

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-22 08:00:00"),
                                cinema: 4,
                                price: 750.00,
                                seats: seats
                            });

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-25 13:00:00"),
                                cinema: 2,
                                price: 250.00,
                                seats: seats
                            });
                            
                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-27 08:00:00"),
                                cinema: 3,
                                price: 500.00,
                                seats: seats
                            });
                        });
                    })
                    
                    // Titanic
                    url = send + "titanic" + apikey;;
                    request(url, function(err, res, body) {
                        var data = JSON.parse(body);

                        Movie.create({
                            title: data.Title,
                            image: data.Poster,
                            genres: data.Genre.split(","),
                            rating: data.Rated,
                            runtime: extractNum(data.Runtime),
                            synopsis: data.Plot
                        }, function(err, newMovie) {

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-24 08:00:00"),
                                cinema: 1,
                                price: 180.00,
                                seats: seats
                            });

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-27 12:00:00"),
                                cinema: 2,
                                price: 250.00,
                                seats: seats
                            });
                            
                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-25 08:00:00"),
                                cinema: 4,
                                price: 750.00,
                                seats: seats
                            });
                        });
                    })
                    
                    // Toy Story
                    url = send + "toy+story" + apikey;;
                    request(url, function(err, res, body) {
                        var data = JSON.parse(body);

                        Movie.create({
                            title: data.Title,
                            image: data.Poster,
                            genres: data.Genre.split(","),
                            rating: data.Rated,
                            runtime: extractNum(data.Runtime),
                            synopsis: data.Plot
                        }, function(err, newMovie) {

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-23 14:00:00"),
                                cinema: 1,
                                price: 180.00,
                                seats: seats
                            });

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-24 08:00:00"),
                                cinema: 2,
                                price: 250.00,
                                seats: seats
                            });
                            
                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-26 16:15:00"),
                                cinema: 4,
                                price: 750.00,
                                seats: seats
                            });
                        });
                    })
                    
                    // Saving Private Ryan
                    url = send + "saving+private+ryan" + apikey;;
                    request(url, function(err, res, body) {
                        var data = JSON.parse(body);

                        Movie.create({
                            title: data.Title,
                            image: data.Poster,
                            genres: data.Genre.split(","),
                            rating: data.Rated,
                            runtime: extractNum(data.Runtime),
                            synopsis: data.Plot
                        }, function(err, newMovie) {

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-26 08:00:00"),
                                cinema: 2,
                                price: 250.00,
                                seats: seats
                            });

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-27 17:00:00"),
                                cinema: 1,
                                price: 180.00,
                                seats: seats
                            });
                            
                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-25 12:00:00"),
                                cinema: 3,
                                price: 500.00,
                                seats: seats
                            });
                        });
                    })
                    
                    // Jurassic Park
                    url = send + "jurassic+park" + apikey;;
                    request(url, function(err, res, body) {
                        var data = JSON.parse(body);

                        Movie.create({
                            title: data.Title,
                            image: data.Poster,
                            genres: data.Genre.split(","),
                            rating: data.Rated,
                            runtime: extractNum(data.Runtime),
                            synopsis: data.Plot
                        }, function(err, newMovie) {

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-22 13:30:00"),
                                cinema: 3,
                                price: 500.00,
                                seats: seats
                            });

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-23 08:00:00"),
                                cinema: 4,
                                price: 750.00,
                                seats: seats
                            });
                            
                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-27 11:30:00"),
                                cinema: 1,
                                price: 180.00,
                                seats: seats
                            });
                        });
                    })  

                    // Rogue One: A Star Wars Story
                    url = send + "rogue+one:+a+star+wars+story" + apikey;;
                    request(url, function(err, res, body) {
                        var data = JSON.parse(body);

                        Movie.create({
                            title: data.Title,
                            image: data.Poster,
                            genres: data.Genre.split(","),
                            rating: data.Rated,
                            runtime: extractNum(data.Runtime),
                            synopsis: data.Plot
                        }, function(err, newMovie) {

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-22 13:30:00"),
                                cinema: 1,
                                price: 180.00,
                                seats: seats
                            });

                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-23 08:00:00"),
                                cinema: 2,
                                price: 250.00,
                                seats: seats
                            });
                            
                            Schedule.create({
                                movie: newMovie._id,
                                schedule: new Date("2020-05-27 11:30:00"),
                                cinema: 3,
                                price: 500.00,
                                seats: seats
                            });
                        });
                    })  

                    console.log("** Movies and schedules have been successfully added to the database.");
                }
            });
        }
    });
}

module.exports = seedDB;