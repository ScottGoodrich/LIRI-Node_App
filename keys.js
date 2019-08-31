console.log('KEYS.JS is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.concert = {
  id: process.env.TRILOGY_SECRET
};

exports.movieSearch = {
  id: process.env.OMDB_SECRET
};
