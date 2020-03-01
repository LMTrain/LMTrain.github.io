
  // Initial array of artists
  var artists = ['Migos', "NWA", 'Dr Dre', 'Ice Cube', 'Jack Harlow', 'Cousin Stizz', '50 Cent', 'Ghetto Boyz', 'Yo Gotti', 'Meek Mill', 'Megan Thee Stallion', 'MaRLo', 'Nas', "Lil Nas",'Future', 'G-Eazy', 'K Camp', 'Roddy Ricch', 'DaBaby', 'Lil Wayne', 'Lil Mosey', 'Lil Baby & Gunna', 'Tupac', 'Notorious B.I.G', 'Gucci', "Faith Evans",'Jay Z', 'Outkast', 'Nicki Minaj', 'Drake', 'DJ Khaled', 'Chris Brown', 'Akon', 'R. Kelly', 'Beyonce', 'Aaliya', "Tyrese", 'Young Thug', 'Trippie Redd', "Luther Vandross", "Tina Turner", "Boyz II Men", "Usher", "Bobby Brown", "Cardi B", "Babyface", "Travis Scott", "Eminem"];
  var artistGifText ="";
  // displayartistInfo function re-renders the HTML to display the appropriate content
  function displayartistInfo() {

    var artist = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "&api_key=HEdbTT0vdsath3C9VzHnGKf0KeRx3w50&q=" + artist + "&limit=9&offset=0&rating=R&lang=en";
    
    // Creating an AJAX call for the specific artist button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Creating a div to hold the artist
        var results = response.data;        
        $("#artists-view").empty();
        function truncateString(str, num) {    
          if (str.length > num && num > 3) {
                  return str.slice(0, (num - 3)) + '...';
              } else if (str.length > num && num <= 3) {
                  return str.slice(0, num) + '...';
              } else {
              return str;
          }    
        }
        
        for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var artistDiv = $("<div class='artist'>");
            artistGifText = truncateString(results[i].title, 18);                    
                       
            var p = $("<p>").text(artistGifText);                      
            var image = $("<img>");
            image.attr("src", results[i].images.fixed_height_still.url); 
            image.attr("data-still", results[i].images.fixed_height_still.url);
            image.attr("data-animate", results[i].images.fixed_height_downsampled.url);
            image.attr("data-state", "still");
            image.on("click", function () {          
             
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
    // Clear the textbox when done
    $("#artist-input").val("");
  });
  
  $(document).on("click", ".artist-btn", displayartistInfo);
 
  renderButtons();
