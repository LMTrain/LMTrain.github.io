
  // Initial array of artists
  var artists = ['Tupac', 'Notorious B.I.G', "Faith Evans",'Jay Z', 'Outkast', 'Nicki Minaj', 'Drake', 'DJ Khaled', 'Chris Brown', 'Akon', 'R. Kelly', 'Beyonce', 'Aaliya', "Tyrese", "Luther Vandross", "Tina Turner", "Boyz II Men", "Usher", "Bobby Brown", "Cardi B"];

  // displayartistInfo function re-renders the HTML to display the appropriate content
  function displayartistInfo() {

    var artist = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "&api_key=HEdbTT0vdsath3C9VzHnGKf0KeRx3w50&q=" + artist + "&limit=10&offset=0&rating=R&lang=en";
    // "https://api.giphy.com/v1/gifs/search?api_key=HEdbTT0vdsath3C9VzHnGKf0KeRx3w50&q=tupac&limit=10&offset=0&rating=R&lang=en"

    

    // Creating an AJAX call for the specific artist button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Creating a div to hold the artist
        var results = response.data;
        
        $("#artists-view").empty();

        for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var artistDiv = $("<div class='artist'>");
            // var titleDiv = $("<div class='artists'>");
            
            var p = $("<p>").text(results[i].title);
            // var p = $("<p>").text("Rating: " + results[i].title);
            // p = p.attr("artists-title", results[i].title);
            
            var image = $("<img>");
            image.attr("src", results[i].images.fixed_height_still.url); 
            image.attr("data-still", results[i].images.fixed_height_still.url);
            image.attr("data-animate", results[i].images.fixed_height_downsampled.url);
            image.attr("data-state", "still");
            image.on("click", function () {
              console.log(state);
             
              var state = $(this).attr("data-state");
             
              if (state === "still") {
                  $(this).attr("src", $(this).attr("data-animate"));
                  $(this).attr("data-state", "animate");
              } else {
                  $(this).attr("src", $(this).attr("data-still"));
                  $(this).attr("data-state", "still");
              }
            });              
            artistDiv.append(p);     
            artistDiv.append(image);
            // $("#artists-title").prepend(artistDiv);
            $("#artists-view").prepend(artistDiv);
        }      
    });
  }
  // Function for displaying artist data
  function renderButtons() {

    
    $("#buttons-view").empty();

    // Looping through the array of artists
    for (var i = 0; i < artists.length; i++) {

      
      var a = $("<button>");
      
      a.addClass("artist-btn");
      
      a.attr("data-name", artists[i]);
      
      a.text(artists[i]);
     
      $("#buttons-view").append(a);
    }
  }

  
  $("#add-artist").on("click", function(event) {
    event.preventDefault();
    var artist = $("#artist-input").val().trim();
    artists.push(artist);
   
    renderButtons();
  });
  
  $(document).on("click", ".artist-btn", displayartistInfo);
 
  renderButtons();
