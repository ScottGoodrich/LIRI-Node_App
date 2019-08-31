
// "movie-this"

//  node liri.js movie-this '<movie name here>'`

//      * This will output the following information to your terminal/bash window:

//        * Title of the movie.
//        * Year the movie came out.
//        * IMDB Rating of the movie.
//        * Rotten Tomatoes Rating of the movie.
//        * Country where the movie was produced.
//        * Language of the movie.
//        * Plot of the movie.
//        * Actors in the movie.

//    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


// "do-what-it-says"

// node liri.js do-what-it-says`

//      * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's             commands.

//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.

require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var divider = "\n————————————————————————";
var concert = keys.concert;
var movieSearch = keys.movieSearch;
var search = process.argv[2];
var artist = process.argv.slice(3).join(" ");
var song = process.argv.slice(3).join(" ");
var movie = process.argv.slice(3).join(" ");

// <-------------------------concert-this---------------------------->

var Concert = function(artist) {
        
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + concert;

        axios.get(URL).then(function(response) {
            
            
                var json = response.data;

                if (!json.length) {
                    console.log("No results found for " + artist.toUpperCase());
                      return;
                    }
                console.log("Upcoming concerts for " + artist.toUpperCase() + ":\n");
                console.log("Made it this far");

                var concertData = [];   
                for (i = 0; i < json.length; i++) {
                    console.log(json[i]);
                    concertData.push(
                        "Venue: " + json[i].venue.name,
                        "Location: " + json[i].venue.city + ", " + json[i].venue.region +  ", " + json[i].venue.country,
                        "Date: " + moment(json[i].datetime).format('MM/DD/YYYY') + "\n\n"
                        );

                    console.log(concertData.join("\n"));
                }
                fs.appendFile("log.txt", JSON.stringify(concertData + divider), function(err) {
                    if (err) {
                        throw err;
                    }
                    console.log("Concerts logged");
                })     
            });
    }


    if (search === "concert-this") {
        console.log("Searching for tour dates for " + artist.toUpperCase() + "\n");
        Concert(artist);
      }

// <-------------------------spotify-this-song---------------------------->

var nodeSpot = require("node-spotify-api");
var Spotify = function(song) {

    var spotify = new Spotify(keys.spotify);

    spotify.findSong({
        URL: "https://api.spotify.com/v1/tracks/" + song,
        type: "track",
        query: song
        }).then(function(response) {

            var json = response[0].data;
        
                if (!json.length) {
                    console.log("No results found for " + song.toUpperCase());
                    return;
                    }
                console.log("Most popular result for " + song.toUpperCase() + ":\n");
                console.log("Made it this far");
                

                var songData = [];
                    console.log(json);
                    songData.push
                            ("Artist(s): " + json.artists,
                            "Song: " + json.name,
                            "Preview: " + json.preview_url + "\n\n")
                        .join("\n");
                    console.log(songData.join("\n"));

                        if (!song) {
                            this.findSong("The Sign");
                            }
            
            fs.appendFile("log.txt", JSON.stringify(songData + divider), function(err) {
                if (err) {
                    throw err;
                    }
                console.log(songData);
                            
            });
        });
    }
    if (search === "spotify-this-song") {
        console.log("Searching for " + song.toUpperCase() + "\n");
        Spotify(song);
      }

// <-------------------------movie-this---------------------------->

var Movie = function(movie) {
    var URL = "https://www.omdbapi.com/?t=" + movie + "&apikey=" + movieSearch;

    axios.get(URL).then(function(response) {
            
        var json = response.data;

        if (!json.length) {
            console.log("No results found for " + movie.toUpperCase());
              return;
            }
        console.log("Made it this far");

        var movieData = [];   
        for (i = 0; i < json.length; i++) {
            console.log(json[i]);
            movieData.push(
                "Title: " + json[i].Title,
                "Year of release: " + json[i].Year,
                "IMDB rating: " + json[i].imdbRating,
                "Rotten Tomatoes rating: " + json[i].Ratings[1].Value,
                "Country of production: " + json[i].Country,
                "Language: " + json[i].Language,
                "Plot synopsis: " + json[i].Plot,
                "Cast: " + json[i].Actors + "\n\n"
                );

            console.log(movieData.join("\n"));
        }
        fs.appendFile("log.txt", JSON.stringify(movieData + divider), function(err) {
            if (err) {
                throw err;
            }
            console.log("Movie logged");
        })     
    });
}


if (search === "movie-this") {
    console.log("Searching for " + movie.toUpperCase() + "\n");
    Movie(movie);
        if (!movie) {
            Movie("Mr. Nobody");   
        };
    };

module.exports = Movie;
module.exports = Spotify;
module.exports = Concert;
