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
  var trnFtt = $("#ftt-input").val().trim();
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
  var fttConverted = moment(trnFtt, "HH:mm").subtract(1, "years");
  
  // Current Time
  var currentTime = moment();
  
  // Difference between the times
  var diffTime = moment().diff(moment(fttConverted), "minutes");
  
  // Time apart (remainder)
  var tRemainder = diffTime % trnFreq;
 
  // Minute Until Train
  var tMinutesTillTrain = trnFreq - tRemainder;
  
  // Next Train
  var trnNextArr = moment().add(tMinutesTillTrain, "minutes");
  
  var newRow = $("<tr>").append(
    $("<td>").text(trnName),
    $("<td>").text(trnDestination),
    $("<td>").text(trnFreq),
    $("<td>").text(trnNextArr),
    $("<td>").text(tMinutesTillTrain), 
  );

  // Append the new row to the table
  $("#train-table > tbody").append(newRow);
});

