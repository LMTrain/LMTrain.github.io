require("dotenv").config();
var keys = require("./keys.js");


class Liri {
  constructor() {
    this.liriCommand = "";
    this.liriArg = [];
    this.liriFile = "./random.txt";
  }

  usage() {
    console.log("USAGE: node liri.js <Command> [param]\n");
    console.log("Available <liriCommand>s are:\n"
                + "\t* concert-this <artist or band>\n"
                + "\t* spotify-this-song <song name>\n"
                + "\t* movie-this <movie name>\n"
                + "\t* do-what-it-says\n"
                );
    return true;
  }

 
  doIt() {
    if (this.procCmdLine()) {
      this.runCmd();
    }
    else {
      this.usage();
    }
  }

  
  procCmdLine() {
    this.liriCommand = process.argv[2];
    this.liriArg = process.argv.slice(3);

    return true;
  }

 
  runCmd() {
    switch(this.liriCommand) {
      case "concert-this":
        this.bandsTown();
        break;
      case "spotify-this-song":
        this.spotifySong();
        break;
      case "movie-this":
        this.omdbMovie();
        break;
      case "do-what-it-says":
        this.doWhats();
        break;
      case undefined:
        this.usage();
        return false;
      default:
        console.log(`Unable to understand the liriCommand "${this.liriCommand}"\n`);
        this.usage();
        return false;
    }

    return true;
  }

  
  bandsTown() {
    const bandsInTown = new BandsInTown(keys.bandsintown);
    const artistName = this.liriArg.join(" ");
    bandsInTown.findConcert(artistName);
  }

  
  spotifySong() {
    const spotify = new Spotify(keys.spotify);
    var songName = "Endless Love";

    if (this.liriArg.length > 0) {
      songName = this.liriArg.join(" ");
    }
    spotify.searchSong(songName);
  }
  
  omdbMovie() {
    const omdb = new OMDbAPI(keys.omdb);
    
    var movieName = this.liriArg.join(" ");

    if (this.liriArg.length > 0) {
      movieName = this.liriArg.join(" ");
    }
    omdb.findMovie(movieName);
  }

  doWhats() {
    const fs = require('fs');
    var textCmd;

    console.log(`Reading ${this.liriFile} ...`)
    fs.readFile(this.liriFile, 'utf8', (error, textData) => {
      if (error) {
        console.log(error);
        return;
      }

      textCmd = textData.split("\n");
      console.log(textCmd);
      this.runCmdsPerWhatItSays(textCmd);
    });
  }

  
  runCmdsPerWhatItSays(textCmd) {
    for (var i = 0; i < textCmd.length; i++) {
      var items = textCmd[i].split(',');

      if (/-/.test(items[0])) {
        console.log(`\nIt says, ${items.join(' ')}, on line ${i+1}`);

        this.liriCommand = items[0];
        this.liriArg = items.slice(1);
        this.runCmd();
      }
    }
  }
}

// Commands for saerching for Artist Concert in Town
class BandsInTown {
  
  constructor(key) {
    this.key = Object.entries(key)[0].join('=');
    this.request = require("request");
    this.moment = require("moment");
    this.maxEvents = 4;
  }

    findConcert(artistName, maxEvents = this.maxEvents) {
    var query = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";    
    
    this.request(query, (error, response, body) => {
      if (error) {
        console.log("ERROR: ", error);
        return;
      }
      const jsonObj = this.body2JSON(body);
      if (!jsonObj) return;
      
      this.printConcertInfo(jsonObj, maxEvents);
    });
  }

  body2JSON(body) {
    const data = JSON.parse(body);   

    if (data.length === 0) {
      console.log("The artist not found.");
      return null;
    }
    if ('errorMessage' in data) {
      console.log(data.errorMessage);
      return null;
    }
    if ('message' in data) {
      console.log(data.message);
      return null;
    }

    return data;
  }

  printConcertInfo(data, maxEvents = this.maxEvents) {    

    for (var i = 0; i < data.length && i < maxEvents; i++ ) {
      var element = data[i];
      var venue = element.venue;
      var location = [venue.city, venue.region, venue.country
                      ].filter(e => e.length > 0).join(", ");
      var date = this.moment(element.datetime).format("MM/DD/YYYY");
      
      console.log("*********************************************");
      console.log("* " + `Venue   : ${venue.name}`);
      console.log("* " + `Location: ${location}`);
      console.log("* " + `Date    : ${date}`);
    }
    console.log("*********************************************");
  }
}


// Spotify Commands to search for songs
class Spotify {  
  
  constructor(key) {    
    var Spotify = require('node-spotify-api');
    this.api = new Spotify(key);
    this.spotify = new Spotify(keys.spotify);
   
  }

  searchSong(song = "Endless Love") {
    var params = {
      type: 'track',
      query: song,
      limit: 5
     }
    
    this.api.search(params, function(err, data) {
      if (err) {
        console.log('Error occurred: ' + err);
        return;
      }
      else if (data.tracks.items.length === 0) {
        console.log("No song found.");
        return;
      }      
      
      var items = data.tracks.items;
      for (var i = 0; i < items.length; i++ ) {
        var artist = items[i].artists.map(a => a.name).join(", ");
        var songName = items[i].name;
        var link = items[i].external_urls.spotify;
        var album = items[i].album.name;

        console.log("***********************************************************");        
        console.log("* " + `Artist(s): ${artist}`);
        console.log("* " + `Song Name: ${songName}`);
        console.log("* " + `Link     : ${link}`);
        console.log("* " + `Album    : ${album}`);
        
      }
      console.log("***********************************************************");
    });
  }
}



// Commads for searching movies in OMDb
class OMDbAPI {
  
  findMovie() {
    var axios = require("axios");
    var nodeArgs = process.argv;
    var movieName = "";
    
    for (var i = 3; i < nodeArgs.length; i++) {
    
      if (i > 3 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
      } else {
        movieName += nodeArgs[i];
    
      }
    }
    
    if (movieName.length === 0) {
      movieName = "Mr. Nobody";
      
      console.log("**********************************************************************");
      console.log("* If you haven't watched Mr. Nobody, then you should. its on Netflix!");
      console.log("**********************************************************************");
      
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";    
    
        
    axios.get(queryUrl).then(
      function(response) {
        
        console.log("**********************************************************************");
        console.log("* " + "Movie Name  : " + response.data.Title);
        console.log("* " + "Release Year: " + response.data.Year);
        console.log("* " + "IMDB Rating : " + response.data.imdbRating);
        console.log("* " + "RT Rating   : " + response.data.Ratings[1].Value);
        console.log("* " + "Language    : " + response.data.Language);
        console.log("* " + "Plot        : " + response.data.Plot);
        console.log("* " + "Actors      : " + response.data.Actors);
        console.log("**********************************************************************");
      })
      .catch(function(error) {
        if (error.response) {
         
          console.log("**********************************************************************");
          console.log(error.response.data);
          console.log("**********************************************************************");
          console.log(error.response.status);
          console.log("**********************************************************************");
          console.log(error.response.headers);
        } else if (error.request) {
          
          console.log(error.request);
        } else {
          
          console.log("Error", error.message);
        }
        console.log(error.config);
      });

  }

}

const liri = new Liri();

liri.doIt();