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
  if ((board[index] !== null) || (isGameOver() === true)) {
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
  if (board[0] && board[0] === board[3] && board[3] === board[6]) return board[0];
  if (board[1] && board[1] === board[4] && board[4] === board[7]) return board[1];
  if (board[2] && board[2] === board[5] && board[5] === board[8]) return board[2];
  if (board[0] && board[0] === board[1] && board[1] === board[2]) return board[0];
  if (board[3] && board[3] === board[4] && board[4] === board[5]) return board[3];
  if (board[6] && board[6] === board[7] && board[7] === board[8]) return board[6];
  if (board[0] && board[0] === board[4] && board[4] === board[8]) return board[0];
  if (board[2] && board[2] === board[4] && board[4] === board[6]) return board[2];
  if (isBoardFull()) return 3;
  return 0
}


function isBoardFull () { 
  if (board[0] && board[1] && board[2] && board[3] && board[4] 
    && board[5] && board[6] && board[7] && board[8]) {
    return true
  }
  return false
}

function isGameOver () {
  if (isBoardFull() || whoWon() !== 0) {
    return true
  }
  return false
}

