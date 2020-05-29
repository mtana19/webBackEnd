var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    methodOverride = require("method-override"),
    Movie          = require("./models/movie"),
    Schedule       = require("./models/schedule"),
    Reservation    = require("./models/reservation")
    seedDB         = require("./seeds");
    

// Database Configuration
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb://localhost/mini_project");

// App Configuration
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
seedDB();

app.get("/", function(req, res){
	Movie.find({}, function(err, allMovies){
        if(err){
            console.log(err);
        } else {
            res.render("index", {movies: allMovies});
        }
    });
});

app.get("/movie/:id", function(req, res){
    Movie.findById(req.params.id, function(err, movie){
        if(err){
            console.log(err);
        } else {
            Schedule.find({movie: movie}, function(err, schedules){
                if(err){
                    console.log(err);
                } else {
                    res.render("showMovie", {showMovie: movie, showSchedules: schedules});
                }
            });
        }
    });
});

app.get("/reservation/:movieID/:schedID", function(req, res){
    Schedule.findById(req.params.schedID, function(err, schedule){
        if(err) {
            console.log(err);
        } else {
            Movie.findById(req.params.movieID, function(err, movie){
                if(err) {
                    console.log(err);
                } else {
                    Reservation.find({schedID: schedule._id}, function(err, reservations){
                        if(err){
                            console.log(err);
                        } else {
                            console.log(reservations);
                            res.render("seats", {showMovie: movie, showSchedule: schedule, reservations: reservations});
                        }
                    });
                }
            });
        }
    });
});

app.post("/checkout/:movieID/:schedID", function(req, res){
    Schedule.findById(req.params.schedID, function(err, schedule){
        if(err) {
            console.log(err);
        } else {
            Movie.findById(req.params.movieID, function(err, movie){
                if(err) {
                    console.log(err);
                } else {
                    res.render("checkout", {showMovie: movie, showSchedule: schedule, total: req.body.totalAmount, seats: req.body.seats, schedID: req.params.schedID});
                }
            });
        }
    });
});

app.get("/dashboard", function(req, res){
    Reservation.find({}, function(err, allreserve){
        if(err){
            console.log(err);
        } else {
            res.render("dashboard", {reserve: allreserve});
        }
    });
});

app.post("/reserveticket/:id", function(req, res){
    var schedID  = req.params.id
        movie    = req.body.movie,
        cinema   = req.body.cinema,
        date     = req.body.date,
        time     = req.body.time,
        total    = req.body.total,
        seats    = req.body.seats.trim().split(" ");
        Reservation.create({
            schedID: schedID,
            movie: movie,
            cinema: cinema,
            date: date,
            time: time,
            total: total,
            seats: seats
        }, function(err, newReserve){
            if(err){
                console.log(err);
            } else {
                res.redirect("/dashboard");
            }
        });
});

app.delete("/delete/:id", function(req, res){
    Reservation.findByIdAndRemove(req.params.id, function(err, deleteTicket){
        if(err){
            console.log(err);
        } else {
            console.log("HAHA");
            res.redirect("/dashboard");
        }
    });
});

app.listen(3000, function(){
    console.log("The Web Programming Server has started and is listening to Port 3000!");
});