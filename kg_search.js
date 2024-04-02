"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 4

   Wordsearch Game Script

   Filename: kg_search.js
   Author: Pete Burnham
   Date:   2018-03-01


   Global Variables

   allCells
      References all of the cells in the word search table

   found
      Stores a Boolean value indicating whether the currently
      selected letters represents a word in the word search list.

   Function List

   function drawWordSearch(letters, words)
      Returns the HTML code for a word search table based on the entries
      in the letters array and the location of the words
      in the words array

   showList(list)
      Returns the HTML for code for an unordered list of words based
      on the items in the list array

*/

var allCells;
var found = false;

window.onload = init;

function init() {
   document.querySelectorAll("aside h1")[0].innerHTML = wordSearchTitle;
   document.getElementById("wordTable").innerHTML = drawWordSearch(letterGrid, wordGrid);
   document.getElementById("wordList").innerHTML = showList(wordArray);

   allCells = document.querySelectorAll("table#wordSearchTable td");

   for (var i = 0; i < allCells.length; i++) {
      allCells[i].style.cursor = "pointer";
      allCells[i].addEventListener("mousedown", startRecording);
   }

   document.getElementById("wordSearchTable").onmouseup = function() {
      stopRecording();
      var wordList = document.querySelectorAll("ul#wordSearchList li");
      var solved = true;
      for (var i = 0; i < wordList.length; i++) {
         if (wordList[i].style.textDecoration !== "line-through") {
            solved = false;
            break;
         }
      }
      if (solved) {
         alert("You solved the puzzle!");
      }
   };

   document.getElementById("showSolution").onclick = function() {
      for (var i = 0; i < allCells.length; i++) {
         if (allCells[i].className === "wordCell") {
            allCells[i].style.backgroundColor = "rgb(191, 191, 255)";  //blue-grey
         }
      }
   };

}

function startRecording(e) {
   document.getElementById("pickedLetters").value += e.target.textContent;
   if (e.target.style.backgroundColor !== "rgb(247, 193, 85)") { //lt green
      e.target.style.backgroundColor = "rgb(255, 102, 171)"; //peach
   }
   for (var i = 0; i < allCells.length; i++) {
      allCells[i].addEventListener("mouseenter", continueRecording);
   }
   e.preventDefault();
}

function continueRecording(e) {
   if (e.target.style.backgroundColor !== "rgb(247, 193, 85)") { //lt green
      e.target.style.backgroundColor = "rgb(255, 102, 171)"; //peach
   }
   document.getElementById("pickedLetters").value += e.target.textContent;
}

function stopRecording() {
   for (var i = 0; i < allCells.length; i++) {
      allCells[i].removeEventListener("mouseenter", continueRecording);
   }
   checkLetters();
}


function checkLetters() {
   var currentLetters = document.getElementById("pickedLetters").value;
   var wordList = document.querySelectorAll("ul#wordSearchList li");
   for (var i = 0; i < wordList.length; i++) {
      if (currentLetters === wordList[i].textContent) {
         wordList[i].style.textDecoration = "line-through";
         wordList[i].style.color = "rgb(191, 191, 191)";  //grey
         found = true;
      }
   }

   for (var i = 0; i < allCells.length; i++) {
      if (allCells[i].style.backgroundColor !== "rgb(247, 193, 85)") { //lt green
         if (allCells[i].style.backgroundColor === "rgb(255, 102, 171)" && found) { //peach
            allCells[i].style.backgroundColor = "rgb(247, 193, 85)"; //lt green
         } else {
            allCells[i].style.backgroundColor = "";
         }
      }
   }
   document.getElementById("pickedLetters").value = "";
   found = false;
}



/*============================================================*/

function drawWordSearch(letters, words) {
   var rowSize = letters.length;
   var colSize = letters[0].length;

   var htmlCode = "<table id='wordSearchTable'>";
   htmlCode += "<caption>Word Search</caption>";

   for (var i = 0; i < rowSize; i++) {
      htmlCode += "<tr>";

      for (var j = 0; j < colSize; j++) {
         if (words[i][j] == " ") {
            htmlCode += "<td>";
         } else {
            htmlCode += "<td class='wordCell'>";
         }
         htmlCode += letters[i][j];
         htmlCode += "</td>";
      }

      htmlCode += "</tr>";
   }
   htmlCode += "</table>";

   return htmlCode;
}

function showList(list) {
   var htmlCode = "<ul id='wordSearchList'>";

   for (var i = 0; i < list.length; i++) {
      htmlCode += "<li>" + list[i] + "</li>";
   }

   htmlCode += "</ul>";

   return htmlCode;
}
