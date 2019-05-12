$("#trivia-head").text("General Trivia Questions!");
$("#start-button").text("START");
// Make variables global to the runtime of the application
var timerT = 11;
var intervalId;
var i = 0;
var computerQ = ["What process involves heating an ore to obtain a metal?", "What did the Montgolfier brothers invent?", "What type of elephant has got the biggest ears?", "Who invented the electric light bulb?", "What’s the smallest type of tree in the world?", "Who invented television?", "What activity other than jumping are kangaroos good at?", "What’s the capital of Ecuador?", "What colors make purple?", "What’s the hardest rock?", "How much does a liter of water weigh?", "What year was President Kennedy killed?", "Where does the American president live?", "What is the first letter on a typewriter?", "What was the nickname of President Duvalier of Haiti, who died in 1971?", "In 1816 which US state was admitted to the Union as the 20th state?", "Who discovered the vaccination against smallpox in 1796?", "Which is the oldest University in the USA?", "What, along with heart disease and cancer, accounts for 64 percent of U.S. deaths?", "Who invented the telephone?", "Which nail grows fastest?", "What temperature does water boil at?", "Who discovered penicillin?", "What Spanish artist said he would eat his wife when she died?", "Who wrote Julius Caesar, Macbeth and Hamlet?", "What did the crocodile swallow in Peter Pan?", "Which German city is famous for the perfume it produces?", "When did the First World War start?", "What did Joseph Priestley discover in 1774?", "Where is the smallest bone in the body?", "Which is the only mammal that can’t jump?", "What color is a panda?", "Who cut Van Gogh’s ear?", "Who painted the Mona Lisa?", "How many dots are there on two dice?", "What horoscope sign has a crab?", "When did the Second World War end?", "What’s the real name of Siddhartha Gautama?", "Where was Christopher Columbus born?", "When did the American Civil War end?", "Who said E=mc2 ?", "Which planet is nearest the sun?", "Where are the Dolomites?", "What’s the capital of Kenya?", "Which is the largest ocean?", "What’s the capital of Honduras?", "What’s the capital of Ethiopia?", "How many squares are there on a chess board?", "How many prongs are there on a fork?", "Who starts first in chess?", "How many events are there in the decathlon?", "What do you use to take a cork out of a bottle?", "What money do they use in Japan?", "What’s the Hungarian word for pepper?", "Name the two main actors in “The Sting”.", "What year did Elvis Presley die?", "Which Italian leader was terribly afraid of the evil eye?", "What country gave Florida to the USA in 1891?", "Who gave his name to the month of July?", "When was Elvis’ first ever concert?", "Who is the main actor in “Cocktail”?"];
var computerA = ["Smelting", "The Balloon", "African Elephant", "Thomas Edison", "Bonsai", "John Logie Baird", "Boxing", "Quito", "Red and Blues", "Diamond", "1kg or 2.2lbs", "1963", "The White House", "Q", "Papa Doc", "Mississippi", "Edward Jenner", "Harvard", "Stroke", "Bell", "Middle", "212F", "Fleming", "Dali", "Shakespeare", "Alarm clock", "Cologne", "1914", "Oxygen", "Ear", "Elephant", "Black and White", "He did", "Da Vinci", "42", "Cancer", "1945", "Buddha", "Genoa", "1865", "Einstein", "Mercury", "Italy", "Nairobi", "Pacific Ocean", "Tegucigalpa", "Addis Ababa", "64", "4", "White", "10", "A Corkscrew", "Yen", "Paprika", "P. Newman and R. Redford", "1977", "Mussolini", "Spain", "Julius Caesar", "1954", "Tom Cruise"];
var computerObj1 = ["Boiling", "The Computer", "Asian Elephant", "Sir Isaac Newton", "Banyan", "John Wilkinson", "Running", "Buenos Aires", "Blue and Green", "Talc", "1.5kg or 3.2lbs", "1965", "The Pentagon", "W", "Dada Luis", "Georgia", "Jethro Tull", "Yale", "Parkinson", "James Watt ", "Pinky", "310F", "Archimedes", "Pablo Picasso", "Rebecca King", "Hook's hand and a clock clock", "Heidelberg", "1924", "Hydrogen", "Pinky Finger", "Rhinoceros", "Black and Brown", "His Rival", "Claude Monet", "36", "Pisces", "1955", "Pajapati Gotami", "Santa Maria", "1875", "Bohr", "Venus", "France", "Khartoum", "Southern Ocean", "Caracas", "Djibouti", "54", "2", "Gold", "110", "A Screwdriver", "Rupee", "Balmos", "R. Shaw and E. Brennan", "1971", "Camillo Benso", "France", "Theodosius I", "1955", "Ron Dean"];
var computerObj2 = ["Vaporization", "Submarines", "Sub-Saharan Elephant", "Thomas Newcomen", "Peepal", "Charles Babbage", "Kicking", "Sucre", "Red and Yellow", "Corundum", "0.5kg or 1lb", "1967", "The Senate Building", "Y", "The Doc", "Louisiana", "Abraham Darby", "Columbia University", "Liver disease", "James Qwest", "Index", "200F", "Galileo ", "Juan Gris", "Loewenstein", "Tick tock clock", "Berlin", "1904", "Nitrogen", "Toes", "Lemurs", "Black and Gray", "His Wife", "Alberto Durero", "72", "Germini", "1925", "Yasodhara", "Pinta", "1805", "Max Born", "Jupiter", "England", "Yaounde", "Indian Ocean", "Montevideo", "Niamey", "44", "8", "Brown", "1000", "A Cork puller", "Pound", "Csalamade", "R. Earl and D. Arliss", "1975", "Urbano Rattazzi", "Italy", "Romulus Augustulus", "1958", "Chris Owens"];
var computerObj3 = ["Liquidation", "The Museum", " Ecuador Elephant", "William Cullen", "Eucalyptus", "Samuel Morse", "Walking", "Santiago", "Yellow and Blue", "Topaz", "2kg or 4.2lbs", "1961", "The Capital", "R", "Papi", "Texas", "Thomas Savery", "Princeton", "Diabetes", "AT&T", "Thumb", "120F", "Fermi", "EL Greco", "Marlowe", "OP's mom", "Göppingen", "1916", "Carbon", "Ankle", "Hippopotamus", "Brown and White", "His Lover", "Vincent van Gogh", "64", "Capricon", "1935", "Maha Maya", "Nina", "1855", "Philipp Lenard", "Saturn", "Spain", "Kinshasa", "Atlantic Ocean", "Buenos Aires", "Ouagadougou", "84", "6", "Black", "100", "A Bottle Openner", "Lari", "Lecso", "D Elcar and R. Walston", "1976", "Bettino Ricasoli", "Britain", "Pompey", "1964", "Bryan Brown"];
var txt = " ";
var txtObj = " ";
var n = 0;
var objN = 0;
var speed = 50;
var objA = " ";
var objB = " ";
var objC = " ";
var objD = " ";
var pass = 0;
var fail = 0;
var unanswered = 0;
var finalT = 0;

$("#start-button").click(startGame)
function startGame() {
  
  txt = computerQ[Math.floor(Math.random() * computerQ.length)];
  n = computerQ.indexOf(txt);
  txtAns = computerA[n];
  $("#trivia-head").text("General Trivia Questions!");
  $("#start-button").text("START");
  var objectiveOpt = [computerObj1[n], computerA[n], computerObj2[n], computerObj3[n]];
  txtObj = objectiveOpt[Math.floor(Math.random() * objectiveOpt.length)];
  objN = objectiveOpt.indexOf(txtObj);
  objA = objectiveOpt[objN];
  if (objN === 0) {
    objB = objectiveOpt[objN + 1];
    objC = objectiveOpt[objN + 2];
    objD = objectiveOpt[objN + 3];
  
  }
  
  else if (objN === 1) {
    objB = objectiveOpt[objN + 2];
    objC = objectiveOpt[objN - 1];
    objD = objectiveOpt[objN + 1];
  }
  
  else if (objN === 2) {
    objB = objectiveOpt[objN - 2];
    objC = objectiveOpt[objN + 1];
    objD = objectiveOpt[objN - 1];
  }
  
  else {
    objB = objectiveOpt[objN - 1];
    objC = objectiveOpt[objN - 2];
    objD = objectiveOpt[objN - 3];
  }
  
  typeWriter();
}

function typeWriter() {
  $("#start-button").hide();  
  if (i < txt.length) {
    document.getElementById("question").innerHTML += txt.charAt(i);
    i++;
    
    setTimeout(typeWriter, speed);
  }
  $(document).ready(displayAns());     

    //  The decrement function for Time.
    function run() {
      if (finalT === 7) {
        gameOver();
      }
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {

      //  Decrease number by one.
      timerT--;

      //  Show the time in the #start-time tag.
      $("#start-time").html("Time : " + timerT);
           
      //  Once number hits zero...
      if (timerT === 0) {
        
        stop();
        correct();
        
      }
    }
    
    function stop() {
      clearInterval(intervalId);
    }
    //  Execute the run function.
    run();
  }



$("#objectivea-button").click(objectiveA)
function objectiveA() {
  if (objA === txtAns) {
    correctAlert();
    
  } else {
    wrongAlert();
    
  }

}
$("#objectiveb-button").click(objectiveB)
function objectiveB() {
  if (objB === txtAns) {
    correctAlert();
    
  } else {
    wrongAlert();
    
  }

}

$("#objectivec-button").click(objectiveC)
function objectiveC() {
  if (objC === txtAns) {
    correctAlert();
    
  } else {
    wrongAlert();
    
  }

}
$("#objectived-button").click(objectiveD)
function objectiveD() {
  if (objD === txtAns) {
    correctAlert();
    
  } else {
    wrongAlert();
    
  }

}

// Use a function to initialize the game.
function initializeGame() {
  timerT = 11;
  intervalId;
  i = 0;
  txt = " ";
  txtObj = " ";
  n = 0;
  objN = 0;
  speed = 50;
  objA = " ";
  objB = " ";
  objC = " ";
  objD = " ";
  
  $("#question, #start-time, #start-time-red, #objectivea-button, #objectiveb-button, #objectivec-button, #objectived-button, #screen-result, #score-pass, #unanswered").empty();
  $("#start-button").show();
  $("#start-button").text("START");
  startGame();
}

function displayAns() {
  $('#objectivea-button').hide().delay(600).fadeIn(600);
    document.getElementById("objectivea-button").innerHTML = objA;
    $('#objectiveb-button').hide().delay(600).fadeIn(600);
    document.getElementById("objectiveb-button").innerHTML = objB;
    $('#objectivec-button').hide().delay(600).fadeIn(600);
    document.getElementById("objectivec-button").innerHTML = objC;
    $('#objectived-button').hide().delay(600).fadeIn(600);
    document.getElementById("objectived-button").innerHTML = objD;
}

function correctAlert() {
  clearInterval(intervalId);
  $("#question, #start-time, #start-time-red, #objectivea-button, #objectiveb-button, #objectivec-button, #objectived-button, #screen-result").empty();
  pass = pass + 1;
  finalT = finalT + 1;
  document.getElementById("screen-result").innerHTML = "Good Job! That's Correct!";
  setTimeout(function(){
    stop();
    initializeGame();
  }, 5000);   

}



function wrongAlert() {
  clearInterval(intervalId);
  $("#question, #start-time, #start-time-red, #objectivea-button, #objectiveb-button, #objectivec-button, #objectived-button, #screen-result").empty();
  fail = fail + 1;
  finalT = finalT + 1;  
  document.getElementById("screen-result").innerHTML = "That's Wrong! The correct answer was: " + txtAns;
  setTimeout(function(){
    stop();
    initializeGame();
  }, 5000);
  
}

function correct() {
  clearInterval(intervalId);
  $("#question, #start-time, #start-time-red, #objectivea-button, #objectiveb-button, #objectivec-button, #objectived-button, #screen-result").empty();
  unanswered = unanswered + 1;
  finalT = finalT + 1;
  document.getElementById("screen-result").innerHTML = "OUT OF TIME!!!    " + "   The Correct Answer is:   " + txtAns;
  setTimeout(function(){
    stop();
    initializeGame();
  }, 5000);
  

}

function gameOver() {
  finalT === 0;
  $("#question, #start-time, #start-time-red, #objectivea-button, #objectiveb-button, #objectivec-button, #objectived-button, #screen-result, #score-pass, #unanswered").empty();
  document.getElementById("question").innerHTML = "All done, heres how you did!";
  document.getElementById("score-pass").innerHTML = "Correct Answers: " + pass;
  document.getElementById("score-fail").innerHTML = "Incorrect Answers: " + fail;
  document.getElementById("unanswered").innerHTML = "Unanswered: " + unanswered;
  $("#startover-button").show();
  $("#startover-button").text("Start Over?");
  setTimeout(run, 1000);
  setTimeout(decrement, 1000);
  setTimeout(typeWriter, 1000);
  setTimeout(displayAns, 1000);
  
}  

$("#startover-button").click(restartGame)
function restartGame() {
  $("#startover-button").hide(); 
  $("#question, #start-time, #start-time-red, #objectivea-button, #objectiveb-button, #objectivec-button, #objectived-button, #screen-result, #score-pass, #score-fail, #unanswered").empty();
  $("#start-button").show();
  
  timerT = 11;
  intervalId;
  i = 0;
  computerQ = ["What process involves heating an ore to obtain a metal?", "What did the Montgolfier brothers invent?", "What type of elephant has got the biggest ears?", "Who invented the electric light bulb?", "What’s the smallest type of tree in the world?", "Who invented television?", "What activity other than jumping are kangaroos good at?", "What’s the capital of Ecuador?", "What colors make purple?", "What’s the hardest rock?", "How much does a liter of water weigh?", "What year was President Kennedy killed?", "Where does the American president live?", "What is the first letter on a typewriter?", "What was the nickname of President Duvalier of Haiti, who died in 1971?", "In 1816 which US state was admitted to the Union as the 20th state?", "Who discovered the vaccination against smallpox in 1796?", "Which is the oldest University in the USA?", "What, along with heart disease and cancer, accounts for 64 percent of U.S. deaths?", "Who invented the telephone?", "Which nail grows fastest?", "What temperature does water boil at?", "Who discovered penicillin?", "What Spanish artist said he would eat his wife when she died?", "Who wrote Julius Caesar, Macbeth and Hamlet?", "What did the crocodile swallow in Peter Pan?", "Which German city is famous for the perfume it produces?", "When did the First World War start?", "What did Joseph Priestley discover in 1774?", "Where is the smallest bone in the body?", "Which is the only mammal that can’t jump?", "What color is a panda?", "Who cut Van Gogh’s ear?", "Who painted the Mona Lisa?", "How many dots are there on two dice?", "What horoscope sign has a crab?", "When did the Second World War end?", "What’s the real name of Siddhartha Gautama?", "Where was Christopher Columbus born?", "When did the American Civil War end?", "Who said E=mc2 ?", "Which planet is nearest the sun?", "Where are the Dolomites?", "What’s the capital of Kenya?", "Which is the largest ocean?", "What’s the capital of Honduras?", "What’s the capital of Ethiopia?", "How many squares are there on a chess board?", "How many prongs are there on a fork?", "Who starts first in chess?", "How many events are there in the decathlon?", "What do you use to take a cork out of a bottle?", "What money do they use in Japan?", "What’s the Hungarian word for pepper?", "Name the two main actors in “The Sting”.", "What year did Elvis Presley die?", "Which Italian leader was terribly afraid of the evil eye?", "What country gave Florida to the USA in 1891?", "Who gave his name to the month of July?", "When was Elvis’ first ever concert?", "Who is the main actor in “Cocktail”?"];
  computerA = ["Smelting", "The Balloon", "African Elephant", "Thomas Edison", "Bonsai", "John Logie Baird", "Boxing", "Quito", "Red and Blues", "Diamond", "1kg or 2.2lbs", "1963", "The White House", "Q", "Papa Doc", "Mississippi", "Edward Jenner", "Harvard", "Stroke", "Bell", "Middle", "212F", "Fleming", "Dali", "Shakespeare", "Alarm clock", "Cologne", "1914", "Oxygen", "Ear", "Elephant", "Black and White", "He did", "Da Vinci", "42", "Cancer", "1945", "Buddha", "Genoa", "1865", "Einstein", "Mercury", "Italy", "Nairobi", "Pacific Ocean", "Tegucigalpa", "Addis Ababa", "64", "4", "White", "10", "A Corkscrew", "Yen", "Paprika", "P. Newman and R. Redford", "1977", "Mussolini", "Spain", "Julius Caesar", "1954", "Tom Cruise"];
  computerObj1 = ["Boiling", "The Computer", "Asian Elephant", "Sir Isaac Newton", "Banyan", "John Wilkinson", "Running", "Buenos Aires", "Blue and Green", "Talc", "1.5kg or 3.2lbs", "1965", "The Pentagon", "W", "Dada Luis", "Georgia", "Jethro Tull", "Yale", "Parkinson", "James Watt ", "Pinky", "310F", "Archimedes", "Pablo Picasso", "Rebecca King", "Hook's hand and a clock clock", "Heidelberg", "1924", "Hydrogen", "Pinky Finger", "Rhinoceros", "Black and Brown", "His Rival", "Claude Monet", "36", "Pisces", "1955", "Pajapati Gotami", "Santa Maria", "1875", "Bohr", "Venus", "France", "Khartoum", "Southern Ocean", "Caracas", "Djibouti", "54", "2", "Gold", "110", "A Screwdriver", "Rupee", "Balmos", "R. Shaw and E. Brennan", "1971", "Camillo Benso", "France", "Theodosius I", "1955", "Ron Dean"];
  computerObj2 = ["Vaporization", "Submarines", "Sub-Saharan Elephant", "Thomas Newcomen", "Peepal", "Charles Babbage", "Kicking", "Sucre", "Red and Yellow", "Corundum", "0.5kg or 1lb", "1967", "The Senate Building", "Y", "The Doc", "Louisiana", "Abraham Darby", "Columbia University", "Liver disease", "James Qwest", "Index", "200F", "Galileo ", "Juan Gris", "Loewenstein", "Tick tock clock", "Berlin", "1904", "Nitrogen", "Toes", "Lemurs", "Black and Gray", "His Wife", "Alberto Durero", "72", "Germini", "1925", "Yasodhara", "Pinta", "1805", "Max Born", "Jupiter", "England", "Yaounde", "Indian Ocean", "Montevideo", "Niamey", "44", "8", "Brown", "1000", "A Cork puller", "Pound", "Csalamade", "R. Earl and D. Arliss", "1975", "Urbano Rattazzi", "Italy", "Romulus Augustulus", "1958", "Chris Owens"];
  computerObj3 = ["Liquidation", "The Museum", " Ecuador Elephant", "William Cullen", "Eucalyptus", "Samuel Morse", "Walking", "Santiago", "Yellow and Blue", "Topaz", "2kg or 4.2lbs", "1961", "The Capital", "R", "Papi", "Texas", "Thomas Savery", "Princeton", "Diabetes", "AT&T", "Thumb", "120F", "Fermi", "EL Greco", "Marlowe", "OP's mom", "Göppingen", "1916", "Carbon", "Ankle", "Hippopotamus", "Brown and White", "His Lover", "Vincent van Gogh", "64", "Capricon", "1935", "Maha Maya", "Nina", "1855", "Philipp Lenard", "Saturn", "Spain", "Kinshasa", "Atlantic Ocean", "Buenos Aires", "Ouagadougou", "84", "6", "Black", "100", "A Bottle Openner", "Lari", "Lecso", "D Elcar and R. Walston", "1976", "Bettino Ricasoli", "Britain", "Pompey", "1964", "Bryan Brown"];
  txt = " ";
  txtObj = " ";
  n = 0;
  objN = 0;
  speed = 50;
  objA = " ";
  objB = " ";
  objC = " ";
  objD = " ";
  pass = 0;
  fail = 0;
  unanswered = 0;
  finalT = 0;
  startGame();
}


  




