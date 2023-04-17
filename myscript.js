//alert("hello")

//initialize the game board
const gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
//initialize the currentplayer 'X'
let currentPlayer = 'X';

//select all the game board and click event Listener

const cells = document.querySelectorAll('.cell')
//function of the check if there is winner
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick)
})

//function
function handleCellClick(event) {

    const rowIndex = event.target.dataset.row;
    const colIndex = event.target.dataset.col;


    //if the clicked cell is already filled exist the function

    if (gameBoard[rowIndex][colIndex]) {
        return;
    }

    //gameBoard lai current play sanga update garne

    gameBoard[rowIndex][colIndex] = currentPlayer

    //update the UI to show the current player
    event.target.textContent = currentPlayer
    //chack for win or draw
    const winner = checkForWinner()
    if (winner) {
        alert(`${winner} winner!`)
        resetGame()
    } else if (checkForDraw()) {
        alert("it is draw!")
    } else {
        currentPlayer = currentPlayer === 'X' ? '0' : 'X';
    }

    //function of the check if there is winner
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick)
    })

}

function checkForWinner() {


    //check for row
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
            return gameBoard[i][0]
        }
    }

    //check for column
    for (let i = 0; i < 3; i++) {
        if (gameBoard[0][i] && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
            return gameBoard[0][i]
        }
    }

    //check for diagonal for win

    if (gameBoard[0][0] && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
        return gameBoard[0][0]
    }
    if (gameBoard[0][2] && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
        return gameBoard[0][2]
    }
    return null;
}

//function for checkForDraw

function checkForDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (!gameBoard[i][j]) {
                return false;
            }
        }
    }
    return true;
}
function resetGame() {

    gameBoard.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            gameBoard[rowIndex][colIndex] = '';
        });
    });
    currentPlayer = 'X';

    cells.forEach(cell => {
        cell.textContent = '';
    })
}
