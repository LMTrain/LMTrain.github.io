
  // Initial array of items
  var items = ['Backpack', 'ipad', "iPhone",'HP Laptop', 'Helmet', 'Loveseats', 'Coffee Table', 'Futons', 'Book Case', 'Bikes', 'Chess Game', 'Toy Cars', 'Puzzle Board', 'TV Stands'];

  // displayitemInfo function re-renders the HTML to display the appropriate content
  function displayitemInfo() {

    var item = $(this).attr("data-name");
    var queryURL = "http://api.walmartlabs.com/v1/search?" + "&apiKey=vng9pukufs97mcyyjs5ps266&query=" + item;
    // var queryURL = "http://api.walmartlabs.com/v1/items/206672856?apiKey=vng9pukufs97mcyyjs5ps266";
    // Creating an AJAX call for the specific item button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Creating a div to hold the item
        var results = response.items;

        console.log("Result = " + results);
       
        // $("#items-view").empty();

        // for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            // var itemDiv = $("<div class='item'>");                        
            // var p = $("<p>").text(results[i].salePrice);                      
            // var image = $("<img>");
            // image.attr("src", results[i].productUrl); 
            // image.attr("data-still", results[i].productUrl);
            // image.attr("data-animate", results[i].images.fixed_height_downsampled.url);
            // image.attr("data-state", "still");
            // image.on("click", function () {          
             
            //   var state = $(this).attr("data-state");
             
            //   if (state === "still") {
            //       $(this).attr("src", $(this).attr("data-animate"));
            //       $(this).attr("data-state", "animate");
            //   } else {
            //       $(this).attr("src", $(this).attr("data-still"));
            //       $(this).attr("data-state", "still");
            //   }
            // });              
        //     itemDiv.append(p);     
        //     itemDiv.append(image);            
        //     $("#items-view").prepend(itemDiv);
        // }      
    });
  }
  // Function for displaying item data
  function renderButtons() {

    
    $("#buttons-view").empty();

    // Looping through the array of items
    for (var i = 0; i < items.length; i++) {
      
      var a = $("<button>");      
      a.addClass("item-btn");      
      a.attr("data-name", items[i]);      
      a.text(items[i]);     
      $("#buttons-view").append(a);
    }
  }

  
  $("#add-item").on("click", function(event) {
    event.preventDefault();
    
    var item = $("#item-input").val().trim();
    items.push(item);
   
    renderButtons();
    // Clear the textbox when done
    $("#item-input").val("");
  });
  
  $(document).on("click", ".item-btn", displayitemInfo);
 
  renderButtons();
