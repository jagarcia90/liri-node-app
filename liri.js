//load library//
require("dotenv").config();

//laods keys//
var keys = require("./keys.js");

//Add the code required to import the `keys.js` file and store it in a variable???//
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//code to import keys/
//?????????????????

//index 2 will be the command you type first//
var command = process.argv[2];

//commands avaibale//
switch (command) {
    case "my-tweets":
      twitter();
      break;
    
    case "spotify-this-song":
      spotify();
      break;
    
    case "movie-this":
      omdb();
      break;
    
    case "do-what-it-says":
        dotenv();
      break;
    }

//functions that will be called on the commands above//
 function twitter(){
//This will show your last 20 tweets and when they were created at in your terminal/bash window//
 };

 function spotify(song_name){
/* This will show the following information about the song in your terminal/bash window
     
     * Artist(s)
     
     * The song's name
     
     * A preview link of the song from Spotify
     
     * The album that the song is from

    * If no song is provided then your program will default to "The Sign" by Ace of Base.
    */

    //-->go sign up for spotify accoutns
 };
 function omdb(movie_name){
    var request = require("request");
    request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {
  if (!error && response.statusCode === 200) {
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
});

/* 
     * You may use `trilogy` as the key.
    This will output the following information to your terminal/bash window:

    ```
      * Title of the movie.
      * Year the movie came out.
      * IMDB Rating of the movie.
      * Rotten Tomatoes Rating of the movie.
      * Country where the movie was produced.
      * Language of the movie.
      * Plot of the movie.
      * Actors in the movie.
    ```
 */
};


 function dotenv(){
   /* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
    * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
    
    * Feel free to change the text in that document to test out the feature for other commands.
    */
 };
 



library.readFile("random.txt", "utf8", function(error, data) {
    if (err) {
        return console.log(err);
      }
      console.log("success");

});


