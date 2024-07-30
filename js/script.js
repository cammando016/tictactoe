//Create array to store played moves
const Gameboard = (function () {
    const board = [];

    for (let i = 0; i < 9; i++) {
        board.push("");
    }

    console.log(board);
    return board;
})();

//Run the tic tac toe round
const gameLogic = (function () {
    let player1 = createPlayer("Player 1", "X");
    let player2 = createPlayer("Player 2", "O");

    let moveCounter = 0;
    let activePlayer = player1;

    const gridCells = document.querySelectorAll(".cell");

    gridCells.forEach((cell, index) => {
        cell.addEventListener("click", function () {
            addMove(cell, index);
        })
    })

    function addMove (element, index) {
        if (element.textContent === "") {
            element.textContent = activePlayer.piece; 
            Gameboard[index] = activePlayer.piece;

            console.log(Gameboard);
            moveCounter++;
            if (moveCounter >=5) {
                const winner = checkWinner(Gameboard);
                if (winner) {
                    console.log("Winner: " + winner.name);
                    return;
                }
            }
            activePlayer = (activePlayer === player1) ? activePlayer = player2 : activePlayer = player1;
        }
        else {alert("Please select an empty square")};
    }

    function checkWinner(array) {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (array[a] && array[a] === array[b] && array[a] === array[c]) {
                return array[a] === player1.piece ? player1 : player2;
            }
        }
        return null;
    }

    return {
        activePlayer,
        checkWinner
    };
})();

const displayController = (function () {
    //Add to change player turn indicator
})();

//Factory Function to create players
function createPlayer (name, piece) {
    return {name, piece};
}

//Run to check if either player has won after the 5th turn (earliest chance to win)
