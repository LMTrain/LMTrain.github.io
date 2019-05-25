
var computerChoices = ["Soul For Real", "Michael Jackson", "Faith Evans", "Salt n Pepa", "K Ci & Jojo", "R. Kelly", "Destiny Child", "Fugees", "Color me Badd", "Shanice", "Lisa Stansfield", "Tony Toni Tone", "Jade", "Keith Sweat", "Aaron Hall", "Johnny Gill", "Jodeci", "Brandy", "Monica", "Usher", "Mary J Blige", "Montell Jordan", "Blackstreet", "Dr. Dre", "Snoop Dogg", "xscape", "Puff Daddy", "Mint Condition", "Jagged Edge", "Jennifer Lopez", "Heavy D", "Tupac", "Jay Z", "Beyonce", "En Vogue", "Sade", "Dru Hill", "Lauryn Hill", "Whitney Houston", "Boyz II Men", "Santana", "Luther Vandross", "Mark Morrison", "Joe", "Babyface", "Tina Turner", "Tevin Campbell", "Tyrese"];

var userInput = [];
var userInputL = [];
var computerGuessR = [];
var startF = 6;
var userInputN = -1;
var wins = 0;
var losses = 0;
var guesses = 5;


function startFunction() {
  $("#start-button").hide();
  var input = document.getElementById("user-text");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit-button").click();
    }
  });
  startF = startF + 1;
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  document.getElementById("artist-is").innerHTML = "Computer Guess Artist is:";
  document.getElementById("computer-guess-block").innerHTML = computerGuess;
  document.getElementById("submit-button").innerHTML = "Submit";
  computerGuessR.push(computerGuess);
  userInputN = userInputN + 1;  
  document.getElementById("user-text-input").innerHTML = "Complete Artist Name and click Submit:";
  document.getElementById("total-wins").textContent = "Wins = " + wins;
  document.getElementById("total-losses").textContent = " Loses = " + losses;
  document.getElementById("total-guesses").textContent = " Guesses = " + guesses;
  userInputN = userInputN - 1;
  $("#start-button").text("START");
  
  $('#start-button').click(
    function () {
      location.reload(true);
    }
  )

};
function myFunction() {
 
  if (startF > 6) {

    guesses = guesses - 1;
    document.getElementById("total-guesses").textContent = " Guesses = " + guesses;
    document.getElementById("computer-guess").innerHTML = computerGuess;
    var userText = document.getElementById("user-text").value;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    document.getElementById("computer-guess-block").innerHTML = computerGuess;
    computerGuessR.push(computerGuess);
    userInput.push(userText);
    userInputN = userInputN + 1;    
    document.getElementById("user-input").innerHTML = userInput[userInputN];   
    document.getElementById("computer-guess").innerHTML = computerGuessR[userInputN];
    document.getElementById("user-text").value = '';

    if (userInput[userInputN] === computerGuessR[userInputN]) {      
      wins = wins + 1;
      document.getElementById("total-wins").textContent = "Wins = " + wins;
    }
    else if (userInput[userInputN] !== computerGuessR[userInputN]) {      
      losses = losses + 1;
      document.getElementById("total-losses").textContent = " Loses = " + losses;
    }

    if (guesses <= 0) {
      gameOver()
    }

  }
  else if (startF <= 6) {
    gamenotstarted()
  }


};

function gameOver() {
  document.getElementById("user-text-input").innerHTML = "GAME OVER!!!!!";
  document.getElementById("user-text").innerHTML = "GAME OVER!!!!!";
  document.getElementById("artist-is").style.visibility = 'hidden';
  document.getElementById("computer-guess-block").style.visibility = 'hidden';
  document.getElementById("submit-button").innerHTML = "CLICK TO RESTART";
  $('#submit-button').click(
    function () {
      location.reload(true);
    }
  )
};

function gamenotstarted() {
  document.getElementById("submit-button").innerHTML = "CLICK TO START GAME";
  $('#submit-button').click(
    function () {
      location.reload(true);
    }
  )
};

$("#start-button").text("START");




