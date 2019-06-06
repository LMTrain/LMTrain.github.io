
  // Initial array of items
  var items = ['Adapters', 'Allergy Medicines', 'Bandana', 'Barrettes', 'Belt', 'Blanket', 'Bobby Pins', 'Book', 'Camera', 'Carry-On', 'Charger', 'Comb', 'Deodorant', 'Duffel Bag', 'Ear Plugs', 'Electric Converters', 'E-reader', 'Eye Drops', 'Eye Mask', 'Face lotion with SPF', 'Face Wash', 'First Aid Kit', 'Flash Light', 'Fleece', 'Floss', 'Hair Brush', 'Hair Conditioner', 'Hair Shampoo', 'Hair Ties', 'Hand Sanitizer', 'Hat', 'Insect Repellent', 'iPad', 'Language Guides', 'Laptop', 'Laxative Medicines', 'Lip Balm', 'Maps', 'Moisturizer', 'Moleskin', 'Mouthwash', 'Nail clippers', 'Padlocks', 'Rain Jacket', 'Rolling Luggage', 'Scarf', 'Scissors', 'Shaving Kit', 'Shorts', 'Sleepwear', 'Socks', 'Sun Visor', 'Sunburn Relief', 'Sunglasses', 'Sunscreen', 'Thermometer', 'Toothbrush', 'Toothpaste', 'Travel Backpack', 'Travel Guides', 'Travel Pillow', 'Travel Towel', 'Tweezers', 'Umbrella', 'Underwear', 'Wheeled Backpack', 'Windbreaker'];
  var cities = ['St Paul', 'Minneapolis', "Roseville",'Maplewood', 'Andover', 'Forest Lake'];
  // displayitemInfo function re-renders the HTML to display the appropriate content
  function displayitemInfo() {

    var item = $(this).attr("data-name");
    var queryURL = "assets/javascript/get_response.php?query="+item;
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Creating a div to hold the item
      console.log(response);
        var results = JSON.parse(response).items;
        
       
        $("#items-view").empty();

        for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var itemDiv = $("<div class='item'>");                        
            var p = $("<p>").text("$" + results[i].salePrice);  
            var pN = $("<p>").text(results[i].name);                    
            var image = $("<img>");
            var cR = $("<p>").text("Ratings: " + results[i].customerRating);
            image.attr("src", results[i].thumbnailImage); 
            image.attr("data-still", results[i].thumbnailImage);            
            image.attr("data-state", "still");
            image.on("click", function () {          
             
            });
            itemDiv.append(pN);              
            itemDiv.append(p);     
            itemDiv.append(image);
            itemDiv.append(cR);            
            $("#items-view").prepend(itemDiv);
        }      
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
  function renderCities() {

    
    $("#Loaction-place").empty();

    // Looping through the array of items
    for (var i = 0; i < cities.length; i++) {
      
      var a = $("<button>");      
      a.addClass("city-btn");      
      a.attr("data-name", cities[i]);      
      a.text(cities[i]);     
      $("#Loaction-place").append(a);
    }
  }

  var item = "";
  $("#add-item").click(function (event) {
    event.preventDefault();
    
    item = $("#item-input").val().trim();
    
  //   // Clear the textbox when done
    $("#item-input").val("");
  });
  
  $(document).on("click", ".item-btn", displayitemInfo);
 
  renderButtons();
  renderCities(); 

  

  var firebaseConfig = {
    apiKey: "AIzaSyCOWrgjPw8Ov5oER_PXzuHG-MmRPdW9zmQ",
    authDomain: "group9project-d9aae.firebaseapp.com",
    databaseURL: "https://group9project-d9aae.firebaseio.com",
    projectId: "group9project-d9aae",
    storageBucket: "group9project-d9aae.appspot.com",
    messagingSenderId: "615277938136",
    appId: "1:615277938136:web:789dda90e8606a6e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // puts the firebase into a variable
  var database = firebase.database();


  // Initial Values
  var city = ""; 

  $("#add-city").click(function (event) {
  event.preventDefault();

  city = $("#city-input").val().trim();  
  
  var newItem = {
  city: city,
  item: item,

  };

  // Uploads data to the database
  database.ref().push(newItem);

  $("#city-input").val("");
  $("#item-input").val("");

  });

  database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  var city = childSnapshot.val().city;
  var item = childSnapshot.val().item;

  items.push(item);
  cities.push(city);
  renderButtons();
  renderCities();

  });
  var initMap = function() {
    var provider = new com.modestmaps.TemplatedLayer('http://tile.openstreetmap.org/{Z}/{X}/{Y}.png');
    var map = new com.modestmaps.Map('map', provider); 
    var canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.width = map.dimensions.x;
    canvas.height = map.dimensions.y;
    map.parent.appendChild(canvas);
  
    var locations = [];
    var sf = new com.modestmaps.Location(37.7749295, -122.4194155);
    var london = new com.modestmaps.Location(51.5001524, -0.1262362);
    for (var i = 0; i <= 100; i++) {
      var f = i/100.0;
      locations.push(com.modestmaps.Location.interpolate(sf, london, f));
    }
    map.setExtent(locations);
  
   
  }
