document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = {
  cells:
    [{row:0, col:0, isMine:true,  hidden:true, isMarked: false, surroundingMines: 0 }, 
     {row:0, col:1, isMine:false, hidden:true, isMarked: false, surroundingMines: 0 }, 
     {row:0, col:2, isMine:false, hidden:true, isMarked: false, surroundingMines: 0 }, 
     {row:0, col:3, isMine:false, hidden:true, isMarked: false, surroundingMines: 0 },

     {row:1, col:0, isMine:true,  hidden:true, isMarked: false, surroundingMines: 0 }, 
     {row:1, col:1, isMine:false, hidden:true, isMarked: false, surroundingMines: 0 }, 
     {row:1, col:2, isMine:false, hidden:true, isMarked: false, surroundingMines: 0 }, 
     {row:1, col:3, isMine:false, hidden:true, isMarked: false, surroundingMines: 0 },

     {row:2, col:0, isMine:true,  hidden:true, isMarked: false, surroundingMines: 0 }, 
     {row:2, col:1, isMine:false, hidden:true, isMarked: false, surroundingMines: 0 }, 
     {row:2, col:2, isMine:false, hidden:true, isMarked: false, surroundingMines: 0 }, 
     {row:2, col:3, isMine:false, hidden:true, isMarked: false, surroundingMines: 0 },

     {row:3, col:0, isMine:true,  hidden:true, isMarked: false, surroundingMines: 0 }, 
     {row:3, col:1, isMine:false, hidden:true, isMarked: false, surroundingMines: 0 }, 
     {row:3, col:2, isMine:false, hidden:true, isMarked: false, surroundingMines: 0 }, 
     {row:3, col:3, isMine:false, hidden:true, isMarked: false, surroundingMines: 0 },
     
    ]

}


function startGame () {
  
  document.querySelector('.board').innerHTML=''
  for (var i = 0; i < board.cells.length; i++) {
   board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
   //console.log(board.cells[i])
   //how to output surroundingMines property of cells object -> console.log (cell)
  }
  
  //how to assign a surrounding mines outcome (count) to a surroundingMines property on cells object

  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin); 
  var resetButton = document.querySelector('.reset');
  resetButton.addEventListener('click', resetGame);
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}



  var resetGame = function(){
    for (var i = 0; i < board.cells.length; i++){
      board.cells[i].hidden = true
      board.cells[i].isMarked = false
      if (Math.random() < 0.25 ){
        board.cells[i].isMine = true;
        } else{
          board.cells[i].isMine=false
        }
    }
    //for (i = 0; i < board.cells.length; i++) {
      
    
    
    console.log('resetBoardGame')
startGame()

  }


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) {
    var cell = board.cells[i];
    //check that all mines are marked
    if (cell.isMine && !cell.isMarked) {
      return;
      //check that all non-mines are no longer hidden
    } else if (!cell.isMine && cell.hidden) {
      return; 
    }
    
  }
 

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
   lib.displayMessage('You win!')
   
  }
  

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
 // var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
    var surrounding = lib.getSurroundingCells(cell.row, cell.col);
    var surroundingMines = 0
    for (var i = 0; i < surrounding.length; i++ ){
      if (surrounding[i].isMine === true) {
        surroundingMines++;
    }
  }
    return surroundingMines; 
  } 
 
  // var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  //cell.surroundingMines = surroundingCells
 

// For the given DOM element, displays surrounding mine counts
// under the following conditions:
//  - cell is not a mine
//  - cell has not already been checked
// function showSurrounding (element) {
//   getSurroundingCells(getRow(element), getCol(element))
//     .filter(function (cell) {
//       return !cell.isMine && !cell.isMarked
//     }) if else
//     .filter(function (cell) {
//       // Avoid breaking the call stack with recurrent checks on same cell
//       return !cell.isProcessed
//     })
//     .forEach(setInnerHTML)


