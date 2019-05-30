var config = {
  apiKey: "AIzaSyBcMvQIhqoeQkMpA94zkQFKl6mWSgPGsdg",
  authDomain: "trainscheduler-36bf0.firebaseapp.com",
  databaseURL: "https://trainscheduler-36bf0.firebaseio.com",
  projectId: "trainscheduler-36bf0",
  storageBucket: "trainscheduler-36bf0.appspot.com",
  messagingSenderId: "765987668074",
  appId: "1:765987668074:web:0069207c92d465bb"
  };

firebase.initializeApp(config);

var database = firebase.database();

$("#add-train-btn").on("click", function(event) {
  event.preventDefault();
  
  var trnName = $("#train-name-input").val().trim();
  var trnDestination = $("#destination-input").val().trim();
  // var trnFtt = moment.unix(trnFtt).format("HH:mm");
  var trnFtt = moment($("#ftt-input").val().trim(), "HH:mm").format("HH:mm");
  var trnFreq = $("#freq-input").val().trim();
  
  var newtrn = {
    name: trnName,
    destination: trnDestination,
    ftt: trnFtt,
    freq: trnFreq
  };

  // Uploads train data to the database
  database.ref().push(newtrn);
  
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#ftt-input").val("");
  $("#freq-input").val("");
});

database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());
  
  var trnName = childSnapshot.val().name;
  var trnDestination = childSnapshot.val().destination;
  var trnFtt = childSnapshot.val().ftt;
  var trnFreq = childSnapshot.val().freq;
  
  // var trnFttPretty = moment.unix(trnFtt).format("HH:mm");  
  var trnMinAway = moment().diff(moment(trnFtt, "HH:mm"), "time");
  var trnNextArr = trnFreq + trnFtt;
  
  var newRow = $("<tr>").append(
    $("<td>").text(trnName),
    $("<td>").text(trnDestination),
    $("<td>").text(trnFreq),
    $("<td>").text(trnNextArr),
    $("<td>").text(trnMinAway), 
  );

  // Append the new row to the table
  $("#train-table > tbody").append(newRow);
});

