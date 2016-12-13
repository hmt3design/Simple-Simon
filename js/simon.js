/**
 * Created by Harry on 12/9/16.
 */
// $(document).ready(function(){
    "use strict";

    var simonArray = [];
    var squares = $('.square');
    var counter = 0;
    var enableClicks = false;
    var sequence;

    //Create click function for buttons
    var userTurn = function () {
      enableClicks = true;
    };

    // user turn
    $(".square").click(function(){
        var squareClicked = this;
        if (enableClicks) {
            animate(squareClicked);
            if(squareClicked === simonArray[counter]) {
                counter += 1;
                if (counter === simonArray.length) {
                    // reset counter
                    counter = 0;
                    // success
                    generateSimonsChoice();
                    setTimeout(function () {
                        simonTurn(simonArray);
                    }, 1000);
                }
            } else {
                alert("Sorry, you entered the wrong sequence. Game over.");
                function clearGame() {
                    simonArray = [];
                    counter = 0;
                    $("#start").prop("disabled", false);

                }

                // gameover
            }
        }
    });

    // Generate animation for Simon's turn
    var animate = function (square) {
        $(square).addClass("active");
        setTimeout(function () {
            $(square).removeClass("active")
        }, 250);
    };

    // var playSequence = function() {
    //     var i = 0;
    //     sequence = setInterval(function () {
    //         animate(simonArray[i]);
    //         console.log("test");
    //         i++;
    //         if (i >= simonArray.length) {
    //             clearInterval(sequence);
    //             i = 0;
    //         }
    //     }, 2000);
    // };

    //adds Simon's squares to array
    var generateSimonsChoice = function () {
        simonArray.push(squares[Math.floor(Math.random()*4)]);
    };

    $("#start").click(function () {
        generateSimonsChoice();
        simonTurn(simonArray);
        $("#start").prop("disabled", true);
    });

    var simonTurn = function (simonArray) {
        var timer = 500;
        simonArray.forEach(function(square, i) {
            setTimeout(function () {
                animate(square);
            }, timer * i);
            console.log(square);
        });
        userTurn();
    };

// });