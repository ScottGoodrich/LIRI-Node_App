// "concert-this"

// node liri.js concert-this <artist/band name here>`

//      * This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/                events?app_id=codingbootcamp") for an artist and render the following information about each event to the                  terminal:

//      * Name of the venue

//      * Venue location

//      * Date of the Event (use moment to format this as "MM/DD/YYYY")


// "spotify-this-song"

//  node liri.js spotify-this-song '<song name here>'`

//      * This will show the following information about the song in your terminal/bash window

//      * Artist(s)

//      * The song's name

//      * A preview link of the song from Spotify

//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.


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
var search = process.argv[2];
var artist = process.argv.slice(3).join(" ");


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
                        "Date: " + json[i].datetime + "\n\n"
                        );

                    console.log(concertData.join("\n"));
                }
                fs.appendFile("log.txt", JSON.stringify(concertData + divider), function(err) {
                    if (err) {
                        throw err;
                    }
                    console.log("Logged");
                })     
            });
    }


    if (search === "concert-this") {
        console.log("Searching for tour dates for " + artist.toUpperCase() + "\n");
        Concert(artist);
      }

// var Spotify = require("node-spotify-api");

// var spotify = new Spotify(keys.spotify);

//     spotify.findSong({
//     type: "track",
//     query: song
//     }).then(function(response) {
//         var json = response[0].data;
//             if (!json.length) {
//                 console.log("No results found for " + song.toUpperCase());
//                       return;
//                     }
//                     console.log("Most popular result for " + song.toUpperCase() + ":\n");
            

//             var concertData = [
//                         "Artist(s): " + json.,
//                         "Song: " + json. + ", " + json. +  ", " + json.,
//                         "Preview: " + json. + "\n\n"
//                     ].join("\n");

//                     if (!song) {
//                         this.findSong("The Sign");
//                         }
            

//                     fs.appendFile("log.txt", concertData + divider, function(err) {
//                         if (err) {
//                             throw err;
//                         }
//                         console.log(concertData);
                    
//                     });
  
//     });
        


// module.exports = Spotify;
module.exports = Concert;
