/**
 * Created by Harry on 12/9/16.
 */
$(document).ready(function(){
    "use strict";

    //Create fadeTo() click functions
    $("#redBox").click(function () {
        $("#redBox").fadeTo(100,1);
        $("#redBox").fadeTo(100,0.2)
    });

    $("#greenBox").click(function () {
        $("#greenBox").fadeTo(100,1);
        $("#greenBox").fadeTo(100,0.2)
    });

    $("#blueBox").click(function () {
        $("#blueBox").fadeTo(100,1);
        $("#blueBox").fadeTo(100,0.2)
    });

    $("#yellowBox").click(function () {
        $("#yellowBox").fadeTo(100,1);
        $("#yellowBox").fadeTo(100,0.2)
    });

    var currentArray = [];

    // Generate easy array function that generates when Easy button is clicked
    $("#easy").click(function () {
        currentArray = Array.from({length: 10}, () => Math.floor(Math.random()*4)+1);
        // return currentArray;
    });

    //Generate intermediate array function that generates when Intermediate button is clicked
    $("#intermediate").click(function () {
        currentArray = Array.from({length: 20}, () => Math.floor(Math.random()*4)+1)
        // return currentArray;
    });

    //Generate hard array function that generates when Hard button is clicked
    $("#hard").click(function () {
        currentArray = Array.from({length: 30}, () => Math.floor(Math.random()*4)+1)
        // return currentArray;
    });
    return currentArray;

    var redBox = function () {
        $("#redBox").fadeTo(100,1);
        $("#redBox").fadeTo(100,0.2)
    };
    var greenBox = function () {
        $("#greenBox").fadeTo(100,1);
        $("#greenBox").fadeTo(100,0.2)
    };
    var blueBox = function () {
        $("#blueBox").fadeTo(100,1);
        $("#blueBox").fadeTo(100,0.2)
    };
    var yellowBox = function () {
        $("#yellowBox").fadeTo(100,1);
        $("#yellowBox").fadeTo(100,0.2)
    };


    // Go through array in sequence
    for (var i=0; i <= currentArray.length; i++);
    if ([i] = "1") {
        redBox();
    } else if ([i] = "2") {
        greenBox()
    } else if ([i] = "3") {
        blueBox()
    } else if ([i] = "4") {
        yellowBox()
    };
    console.log([currentArray.length])




    // add event listener
    // var button = document.getElementsByClassName("btn");
    // for (var i = 0; i < button.length; i++) {
    //     button[i].addEventListener("click", btnPressed);
    // }


});


