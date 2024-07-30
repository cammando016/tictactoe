const Gameboard = (function () {
    const board = [];
    for (let i = 0; i < 9; i++) {
        board.push("");
    }

    function addPiece () {

    }

    return board, addPiece;
})();

const gameLogic = (function () {
    //TO DO
    let player1 = createPlayer("Player 1", "X");
    let player2 = createPlayer("Player 2", "O");

    let moveCounter = 1;
    let activePlayer = player1;
})();

const displayController = (function () {
    //TO DO
})();

function createPlayer (name, piece) {
    return {name, piece};
}

function checkWinner () {
    
}