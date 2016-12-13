/**
 * Created by Harry on 12/9/16.
 */
$(document).ready(function(){
    "use strict";

    var currentArray = [];
    var level = 0;
    var squares = $('.square');

    //Create click function for buttons
    $(".btn").click(function(){
        $(this).addClass("active");
    });

    // Generate animation for Simon's turn
    var animate = function (square) {
        $(square).addClass("btn:active");
        setTimeout(function () {
            $(square).removeClass("btn:active")
        }, 1000);
    };

    var generateSimonsChoice = function () {
        currentArray.push(squares[Math.floor(Math.random()*4)]);
    };

    $("#easy").click(function () {
        generateSimonsChoice(10);
        simonTurn(currentArray);
        // checkArray();
        console.log(currentArray);
    });

    //Generate intermediate array function that generates when Intermediate button is clicked
    $("#intermediate").click(function () {
        currentArray = Array.from({length: 20}, () => Math.floor(Math.random()*4)+1);
        // checkArray();
    });

    //Generate hard array function that generates when Hard button is clicked
    $("#hard").click(function () {
        currentArray = Array.from({length: 30}, () => Math.floor(Math.random()*4)+1);
        // checkArray();
    });


    var simonTurn = function (simonArray) {
        simonArray.forEach(function(square) {
            animate(square);
        });
    };
    // });

});