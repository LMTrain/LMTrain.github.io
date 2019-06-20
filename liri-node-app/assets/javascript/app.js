var string = "LIRI is a command line node app. It is a Language Interpretation and Recognition Interface. LIRI takes in parameters as an input from users and gives user back data that is requested for. In this case, this will be a search in Spotify for songs, Bands in Town for concerts, and OMDB for movies.";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();