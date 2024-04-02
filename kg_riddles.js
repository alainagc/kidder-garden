"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 4

   Kidder Garden Riddles Script

*/

document.getElementById("riddle1").addEventListener("click", show1);
document.getElementById("riddle2").addEventListener("click", show2);
document.getElementById("riddle3").addEventListener("click", show3);
document.getElementById("riddle4").addEventListener("click", show4);
document.getElementById("riddle5").addEventListener("click", show5);

function show1() {
var x = document.getElementById("answer1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function show2() {
var x = document.getElementById("answer2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function show3() {
var x = document.getElementById("answer3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function show4() {
var x = document.getElementById("answer4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function show5() {
var x = document.getElementById("answer5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
