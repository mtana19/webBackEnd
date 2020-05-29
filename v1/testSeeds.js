var mongoose 	= require("mongoose"),
	 Movie 		= require("./movies"),
	 Schedule 	= require("./schedule"),
	 request 	= require("request");

var send = "http://www.omdbapi.com/?t=";
var apikey = "&apikey=784ec9f4";

function populateDB() {
	Movie.deleteMany({}, function(err){
		if (err) {
			console.log(err);
		} else {
			console.log("Removed movies!");

			//Bad Moms
			var url = send + "bad+moms" + apikey;
			request(url, function(error, response, body){
				var data = JSON.parse(body);
				Movie.create({
					title: data["Title"],
					image: data["Poster"],
					plot: data["Plot"],
					runtime: data["Runtime"],
					director: data["Director"],
					rating: data["imdbRating"],
					genre: data["Genre"],
					actors: data["Actors"]
				}, function(err, mov){
					Schedule.create({
						cinemaNo: 2,
						date: new Date("May 22, 2020 15:00:00"),
						seats: 40,
						price: 200
					}, function(err, sched){
						mov.cinemas.push(sched);
						mov.save();
						Movie.findOne({title: mov.title}).populate("cinemas").exec(function(err){
							if (err) {
								console.log(err);
							}
						});
						console.log("Schedule added to movie!");
					});
				});
			});

			//Spirited Away
			var url = send + "spirited+away" + apikey;
			request(url, function(error, response, body){
				var data = JSON.parse(body);
				Movie.create({
					title: data["Title"],
					image: data["Poster"],
					plot: data["Plot"],
					runtime: data["Runtime"],
					director: data["Director"],
					rating: data["imdbRating"],
					genre: data["Genre"],
					actors: data["Actors"]
				}, function(err, mov){
					Schedule.create({
						cinemaNo: 1,
						date: new Date("May 22, 2020 15:00:00"),
						seats: 40,
						price: 200
					}, function(err, sched){
						mov.cinemas.push(sched);
						mov.save();
						Movie.findOne({title: mov.title}).populate("cinemas").exec(function(err){
							if (err) {
								console.log(err);
							}
						});
						console.log("Schedule added to movie!");
					});
				});
			});

			//A Beautiful Mind
			var url = send + "a+beautiful+mind" + apikey;
			request(url, function(error, response, body){
				var data = JSON.parse(body);
				Movie.create({
					title: data["Title"],
					image: data["Poster"],
					plot: data["Plot"],
					runtime: data["Runtime"],
					director: data["Director"],
					rating: data["imdbRating"],
					genre: data["Genre"],
					actors: data["Actors"]
				}, function(err, mov){
					Schedule.create({
						cinemaNo: 3,
						date: new Date("May 22, 2020 15:00:00"),
						seats: 40,
						price: 200
					}, function(err, sched){
						mov.cinemas.push(sched);
						mov.save();
						Movie.findOne({title: mov.title}).populate("cinemas").exec(function(err){
							if (err) {
								console.log(err);
							}
						});
						console.log("Schedule added to movie!");
					});
				});
			});

			//Howl's Moving Castle
			var url = send + "howl's+moving+castle" + apikey;
			request(url, function(error, response, body){
				var data = JSON.parse(body);
				Movie.create({
					title: data["Title"],
					image: data["Poster"],
					plot: data["Plot"],
					runtime: data["Runtime"],
					director: data["Director"],
					rating: data["imdbRating"],
					genre: data["Genre"],
					actors: data["Actors"]
				}, function(err, mov){
					Schedule.create({
						cinemaNo: 4,
						date: new Date("May 22, 2020 19:00:00"),
						seats: 40,
						price: 250
					}, function(err, sched){
						mov.cinemas.push(sched);
						mov.save();
						Movie.findOne({title: mov.title}).populate("cinemas").exec(function(err){
							if (err) {
								console.log(err);
							}
						});
						console.log("Schedule added to movie!");
					});
				});
			});

			//Avengers
			var url = send + "avengers" + apikey;
			request(url, function(error, response, body){
				var data = JSON.parse(body);
				Movie.create({
					title: data["Title"],
					image: data["Poster"],
					plot: data["Plot"],
					runtime: data["Runtime"],
					director: data["Director"],
					rating: data["imdbRating"],
					genre: data["Genre"],
					actors: data["Actors"]
				}, function(err, mov){
					Schedule.create({
						cinemaNo: 4,
						date: new Date("May 22, 2020 15:00:00"),
						seats: 40,
						price: 200
					}, function(err, sched){
						mov.cinemas.push(sched);
						mov.save();
						Movie.findOne({title: mov.title}).populate("cinemas").exec(function(err){
							if (err) {
								console.log(err);
							}
						});
						console.log("Schedule added to movie!");
					});
				});
			});

			//The Man Who Knew Infinity
			var url = send + "the+man+who+knew+infinity" + apikey;
			request(url, function(error, response, body){
				var data = JSON.parse(body);
				Movie.create({
					title: data["Title"],
					image: data["Poster"],
					plot: data["Plot"],
					runtime: data["Runtime"],
					director: data["Director"],
					rating: data["imdbRating"],
					genre: data["Genre"],
					actors: data["Actors"]
				}, function(err, mov){
					Schedule.create({
						cinemaNo: 1,
						date: new Date("May 23, 2020 19:00:00"),
						seats: 40,
						price: 300
					}, function(err, sched){
						mov.cinemas.push(sched);
						mov.save();
						Movie.findOne({title: mov.title}).populate("cinemas").exec(function(err){
							if (err) {
								console.log(err);
							}
						});
						console.log("Schedule added to movie!");
					});
				});
			});

			//Nerve
			var url = send + "nerve" + apikey;
			request(url, function(error, response, body){
				var data = JSON.parse(body);
				Movie.create({
					title: data["Title"],
					image: data["Poster"],
					plot: data["Plot"],
					runtime: data["Runtime"],
					director: data["Director"],
					rating: data["imdbRating"],
					genre: data["Genre"],
					actors: data["Actors"]
				}, function(err, mov){
					Schedule.create({
						cinemaNo: 2,
						date: new Date("May 23, 2020 15:00:00"),
						seats: 40,
						price: 200
					}, function(err, sched){
						mov.cinemas.push(sched);
						mov.save();
						Movie.findOne({title: mov.title}).populate("cinemas").exec(function(err){
							if (err) {
								console.log(err);
							}
						});
						console.log("Schedule added to movie!");
					});
				});
			});

			//Gone Girl
			var url = send + "gone+girl" + apikey;
			request(url, function(error, response, body){
				var data = JSON.parse(body);
				Movie.create({
					title: data["Title"],
					image: data["Poster"],
					plot: data["Plot"],
					runtime: data["Runtime"],
					director: data["Director"],
					rating: data["imdbRating"],
					genre: data["Genre"],
					actors: data["Actors"]
				}, function(err, mov){
					Schedule.create({
						cinemaNo: 3,
						date: new Date("May 23, 2020 15:00:00"),
						seats: 40,
						price: 200
					}, function(err, sched){
						mov.cinemas.push(sched);
						mov.save();
						Movie.findOne({title: mov.title}).populate("cinemas").exec(function(err){
							if (err) {
								console.log(err);
							}
						});
						console.log("Schedule added to movie!");
					});
				});
			});

			//Arrival
			var url = send + "arrival" + apikey;
			request(url, function(error, response, body){
				var data = JSON.parse(body);
				Movie.create({
					title: data["Title"],
					image: data["Poster"],
					plot: data["Plot"],
					runtime: data["Runtime"],
					director: data["Director"],
					rating: data["imdbRating"],
					genre: data["Genre"],
					actors: data["Actors"]
				}, function(err, mov){
					Schedule.create({
						cinemaNo: 4,
						date: new Date("May 23, 2020 19:00:00"),
						seats: 40,
						price: 250
					}, function(err, sched){
						mov.cinemas.push(sched);
						mov.save();
						Movie.findOne({title: mov.title}).populate("cinemas").exec(function(err){
							if (err) {
								console.log(err);
							}
						});
						console.log("Schedule added to movie!");
					});
				});
			});

		}
	});

}

module.exports = populateDB;