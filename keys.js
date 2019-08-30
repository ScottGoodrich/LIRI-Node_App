console.log('KEYS.JS is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.concert = {
  id: process.env.TRILOGY_SECRET
};

// var Concert = require("./liri.js");
// var concert = new Concert(keys.concert);

// var Spotify = require("./liri");
// var spotify = new Spotify(keys.spotify);
// var search = process.argv[2];
// var song = process.argv.slice(3).join(" ");


// if (search === "spotify-this-song") {
//   console.log("Searching for song" + song.toUpperCase() + "\n");
//   Spotify.findSong(song);

// }

// if (search === "movie-this") {
//   console.log("Searching for movie" + movie.toUpperCase() + "\n");

// }

// if (search === "do-what-it-says") {
//   console.log("Doing what it says");

// }