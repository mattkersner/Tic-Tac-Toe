// set players
var player1 = true;
var player2 = false;

// keep track of the different squares on the game board
var Square0 = document.querySelector('.square0');
var Square1 = document.querySelector('.square1');
var Square2 = document.querySelector('.square2');
var Square3 = document.querySelector('.square3');
var Square4 = document.querySelector('.square4');
var Square5 = document.querySelector('.square5');
var Square6 = document.querySelector('.square6');
var Square7 = document.querySelector('.square7');
var Square8 = document.querySelector('.square8');

// keep track of moves in an array
var gameBoardArray = [Square0, Square1, Square2, Square3, Square4, Square5, Square6, Square7, Square8];

// keep track of winning combinations
var winningCombinations = [
[0, 1, 2], //first column
[3, 4, 5], //second column
[6, 7, 8], //third column
[6, 4, 2], //diagnol from bottom left to top right
[0, 3, 6], //first row
[1, 4, 7], //second row
[2, 5, 8], //third row
[0, 4, 8]  //diagnol from top left to bottom right
];

// function to keep track of selected square, pulled from stack overflow
//(http://stackoverflow.com/questions/16611012/innerhtml-of-clicked-element)
// document.onclick = function(event) {
//   var selectedSquare = event.target || event.srcElement;
// };

var moveNumber = 0;

function determineWinner() {
  for (let i = 0; i < winningCombinations.length; i++) {
    if (gameBoardArray[winningCombinations[i][0]].innerHTML === 'X' && gameBoardArray[winningCombinations[i][1]].innerHTML === 'X' && gameBoardArray[winningCombinations[i][2]].innerHTML === 'X') {
      alert(`X has won!`);
    } else if (gameBoardArray[winningCombinations[i][0]].innerHTML === 'O' && gameBoardArray[winningCombinations[i][1]].innerHTML === 'O' && gameBoardArray[winningCombinations[i][2]].innerHTML === 'O')  {
      alert(`O has won!`);
    }
  };
    if (moveNumber === 9) {
      alert('It\'s a draw');
    }
  };



//function to draw an x or o in clicked square
function draw() {
  // document.onclick = function(event) {
  // var selectedSquare = event.target || event.srcElement;
  var selectedSquare = this;
  if (player1 === true) {
    selectedSquare.innerHTML = 'X';
    player1 = false;
    player2 = true;
    moveNumber++;
    determineWinner();
  } else if (player2 === true) {
    selectedSquare.innerHTML = 'O';
    player1 = true;
    player2 = false;
    moveNumber++;
    determineWinner();
  }
};



// eventlisteners to run the draw function on a clicked square
// window.onload = function () {
Square0.addEventListener('click', draw);
Square1.addEventListener('click', draw);
Square2.addEventListener('click', draw);
Square3.addEventListener('click', draw);
Square4.addEventListener('click', draw);
Square5.addEventListener('click', draw);
Square6.addEventListener('click', draw);
Square7.addEventListener('click', draw);
Square8.addEventListener('click', draw);
// }


// button refreshes page to start game over
function refreshPage() {
  for (let i = 0; i < gameBoardArray.length; i++) {
    gameBoardArray[i].innerHTML = '';
    moveNumber = 0;
  }
  player1 = true;
  player2 = false;
}

