$(document).ready(function () {

    var computerPick = 0;
    var finalNumber = 0;
    var hexagonNumber = 0;
    var diamondNumber = 0;
    var octagonNumber = 0;
    var squareNumber = 0;
    var wins = 0;
    var losses = 0;
    function initializeReset() {

        finalNumber = 0;

        hexagonNumber = Math.floor(Math.random() * 12 + 1);
        diamondNumber = Math.floor(Math.random() * 12 + 1);
        octagonNumber = Math.floor(Math.random() * 12 + 1);
        squareNumber = Math.floor(Math.random() * 12 + 1);
        computerPick = Math.floor(Math.random() * 101 + 19);
        $("#computer-pick").text(computerPick);
        $("#final-number").text(finalNumber);
        $("#total-wins").text("Wins = " + wins);
        $("#total-losses").text("Losses = " + losses);
        

        $("#random-button-1").attr("value", hexagonNumber);
        $("#random-button-2").attr("value", diamondNumber);
        $("#random-button-3").attr("value", octagonNumber);
        $("#random-button-4").attr("value", squareNumber);

        $(".crystal-button").unbind().on("click", function () {
            var numberValue = parseInt($(this).attr('value'));
           
            finalNumber = finalNumber + numberValue;
            
            $("#final-number").text(finalNumber);

            if (finalNumber === computerPick) {
                $("#status").text("You Won!");
                wins = wins + 1;
                $("#total-wins").text("Wins = " + wins);
                initializeReset();

                
            }
            else if (finalNumber > computerPick) {
                $("#status").text("You Lose!");
                losses = losses + 1;
                $("#total-losses").text("Losses = " + losses);
                initializeReset();

            }


        });
    }

    initializeReset();
    


});

