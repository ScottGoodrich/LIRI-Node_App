console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
var Concert = require("./liri");
var concert = new Concert();
var search = process.argv[2];
var artist = process.argv.slice(3).join(" ");

if (search === "concert-this") {
  console.log("Searching for tour dates for " + artist.toUpperCase() + "\n");
  concert.findConcert(artist);
}

// if (search === "spotify-this-song") {
//   console.log("Searching for song");

// }

// if (search === "movie-this") {
//   console.log("Searching for movie");

// }

// if (search === "do-what-it-says") {
//   console.log("Doing what it says");

// }