![Game Image](http://i.imgur.com/np8I5I6.png)

#Tic Tac Toe
Classic tic-tac-toe game, just like in the elementry school classroom! Two players go head to head, player one is 'X' and player two is 'O'. Each player takes turns drawing their mark in a square. When any three squares in a row (either column, row or diagnal) all have the same mark, a winner is declared!

###[Play the Game](http://storekeeper-mousedeer-58678.bitballoon.com/)

##Technologies Used
-HTML
-CSS
-Javascript

```Javascript
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
```

###Build Strategy
First I built the board game, creating a 3x3 grid of div elements. Then I set an eventListener to a click event on each square. From there I was able to create my draw function (above) which would draw either an 'X' or an 'O' in the selected square based on who's turn it was. After that I needed to create the determineWinner function, which was a comparison to an array I created with all the different winning combinations. After that I added some CSS styling to give it that school classroom feel. 

###Complications/Future Improvements
There's an issue where if a winner is determined on the last move, it will also pop up the alert that it's a draw, since it took 9 moves to find a winner. Also want to add a player1 and player2 input field so I can personalize the winning alert message and allow each player to pick either 'X' or 'O'.

####Authors
Matt Kersner
