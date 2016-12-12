/**
 * Created by Harry on 12/9/16.
 */
$(document).ready(function(){
    "use strict";

    //Create click function for buttons
    $(".btn").click(function(){
        $(this).addClass("active");
    });

    var currentArray = [];

    // Generate easy array function that generates when Easy button is clicked
    $("#easy").click(function () {
        currentArray = Array.from({length: 10}, () => Math.floor(Math.random()*4)+1);
        animate(currentArray);
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


    var animate = function (simonArray) {
        simonArray.forEach(function(element) {
                if (element == 1) {
                    $("#redBox").addClass("btn:active");
                    setTimeout(function () {
                        $("#redBox").removeClass("btn:active")
                    }, 1000);
                } else if (element == 2) {
                    $("#greenBox").addClass("btn:active");
                    setTimeout(function () {
                        $("#greenBox").removeClass("btn:active")
                    }, 1000);
                } else if (element == 3) {
                    $("#blueBox").addClass("btn:active");
                    setTimeout(function () {
                        $("#blueBox").removeClass("btn:active")
                    }, 1000);
                } else if (element == 4) {
                    $("#redBox").addClass("btn:active");
                    setTimeout(function () {
                        $("#redBox").removeClass("btn:active")
                    }, 1000);
                }
        });
    }
    // });

});