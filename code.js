var board = [null, null, null, null, null, null, null, null, null]
// null = no moves, 1 = playerOne move, 2 = playerTwo move

var currentPlayer = 1

function restart () {
  for (i in board) {
    board[i] = null
  }
  currentPlayer = 1
}

function playTurn (index) {
  if ((board[index] !== null) || (isGameOver() == true)) {
    return false
  }
  board[index] = currentPlayer  // currentPlayer fills board[i] spot with its mark
  if (currentPlayer === 1) {
    currentPlayer = 2
  } else {
    currentPlayer = 1
  }
  return true
}

function whoWon () {
  for (var i = 0; i < 3; i++) {
    if ((board[i] === board[i + 3]) && (board[i] === board[i + 6])) {
      return board[i] //if column filled, win
    }
  }
  for (var i = 0; i <=6; i+=3 ) {
  if ((board[i] === board[i + 1]) && (board[i] === board[i + 2])) {
      return board[i] // if row filled, win
    }
  }
  // console.log(whoWon([0, 3, 6]))
  if (board[0] === board[4] && board[0] === board[8] ||
    board[2] === board[4] && board[2] === board[6]) {
    return board[4] // check for the two diagonal conditions
  }
  if (isBoardFull()) {
    return 3
  }
  return 0
  }


function isBoardFull () {
  for (var i in board) {
    if (board[i] === null) {
      return false
    }
  }
  return true
}

function isGameOver () {
    if (isBoardFull() || whoWon() === 0) {
      return true
    }
    return false
  }
board = [null,1,null,null,1,null,null,1,null]
console.log(whoWon())
