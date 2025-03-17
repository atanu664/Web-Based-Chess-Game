const chessboard = document.getElementById('chessboard');
const gameStatus = document.getElementById('game-status');

// Chess pieces (using Unicode characters)
const pieces = {
    "BP": "♟", // Black Pawn
    "WP": "♙", // White Pawn
    "BR": "♜", // Black Rook
    "WR": "♖", // White Rook
    "BN": "♞", // Black Knight
    "WN": "♘", // White Knight
    "BB": "♝", // Black Bishop
    "WB": "♗", // White Bishop
    "BQ": "♛", // Black Queen
    "WQ": "♕", // White Queen
    "BK": "♚", // Black King
    "WK": "♔", // White King
};

// Initial board setup
let boardState = [
    ["BR", "BN", "BB", "BQ", "BK", "BB", "BN", "BR"],
    ["BP", "BP", "BP", "BP", "BP", "BP", "BP", "BP"],
    ["--", "--", "--", "--", "--", "--", "--", "--"],
    ["--", "--", "--", "--", "--", "--", "--", "--"],
    ["--", "--", "--", "--", "--", "--", "--", "--"],
    ["--", "--", "--", "--", "--", "--", "--", "--"],
    ["WP", "WP", "WP", "WP", "WP", "WP", "WP", "WP"],
    ["WR", "WN", "WB", "WQ", "WK", "WB", "WN", "WR"]
];

let currentPlayer = "white"; // Track current player
let selectedPiece = null; // Track selected piece
let gameOver = false; // Track game state

// Create the chessboard
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add((row + col) % 2 === 0 ? 'square-light' : 'square-dark');
        chessboard.appendChild(square);
    }
}

// Render the board with pieces
function renderBoard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = chessboard.children[row * 8 + col];
            const piece = boardState[row][col];
            if (piece !== "--") {
                square.textContent = pieces[piece];
            } else {
                square.textContent = "";
            }
        }
    }
}

// Check if a move is valid
function isValidMove(startRow, startCol, endRow, endCol) {
    const piece = boardState[startRow][startCol];
    const targetPiece = boardState[endRow][endCol];

    // Check if the target square has a piece of the same color
    if (targetPiece !== "--" && isSameColor(piece, targetPiece)) {
        return false; // Cannot capture your own piece
    }

    // Pawn movement
    if (piece === "WP") { // White pawn
        if (startRow === 6 && endRow === 4 && startCol === endCol && boardState[5][startCol] === "--") { // Move 2 squares
            return true;
        }
        if (endRow === startRow - 1 && startCol === endCol && targetPiece === "--") { // Move 1 square
            return true;
        }
        if (endRow === startRow - 1 && Math.abs(startCol - endCol) === 1 && targetPiece !== "--") { // Capture diagonally
            return true;
        }
    }
    if (piece === "BP") { // Black pawn
        if (startRow === 1 && endRow === 3 && startCol === endCol && boardState[2][startCol] === "--") { // Move 2 squares
            return true;
        }
        if (endRow === startRow + 1 && startCol === endCol && targetPiece === "--") { // Move 1 square
            return true;
        }
        if (endRow === startRow + 1 && Math.abs(startCol - endCol) === 1 && targetPiece !== "--") { // Capture diagonally
            return true;
        }
    }

    // Rook movement
    if (piece === "WR" || piece === "BR") {
        if (startRow === endRow || startCol === endCol) { // Move in straight lines
            return true;
        }
    }

    // Knight movement
    if (piece === "WN" || piece === "BN") {
        const rowDiff = Math.abs(startRow - endRow);
        const colDiff = Math.abs(startCol - endCol);
        if ((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)) { // L-shaped move
            return true;
        }
    }

    // Bishop movement
    if (piece === "WB" || piece === "BB") {
        if (Math.abs(startRow - endRow) === Math.abs(startCol - endCol)) { // Diagonal move
            return true;
        }
    }

    // Queen movement
    if (piece === "WQ" || piece === "BQ") {
        if (startRow === endRow || startCol === endCol || Math.abs(startRow - endRow) === Math.abs(startCol - endCol)) {
            return true; // Straight or diagonal move
        }
    }

    // King movement
    if (piece === "WK" || piece === "BK") {
        if (Math.abs(startRow - endRow) <= 1 && Math.abs(startCol - endCol) <= 1) { // One square in any direction
            return true;
        }
    }

    return false;
}

// Check if two pieces are of the same color
function isSameColor(piece1, piece2) {
    const whitePieces = ["WP", "WR", "WN", "WB", "WQ", "WK"];
    const blackPieces = ["BP", "BR", "BN", "BB", "BQ", "BK"];
    return (
        (whitePieces.includes(piece1) && whitePieces.includes(piece2)) ||
        (blackPieces.includes(piece1) && blackPieces.includes(piece2))
    );
}

// Check if the game is over (checkmate or stalemate)
function isGameOver() {
    // Placeholder logic: Game ends when a king is captured
    let whiteKingFound = false;
    let blackKingFound = false;
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            if (boardState[row][col] === "WK") whiteKingFound = true;
            if (boardState[row][col] === "BK") blackKingFound = true;
        }
    }
    return !whiteKingFound || !blackKingFound;
}

// Handle piece movement
chessboard.addEventListener('click', (event) => {
    if (gameOver) return; // Stop if the game is over

    const square = event.target;
    const index = Array.from(chessboard.children).indexOf(square);
    const row = Math.floor(index / 8);
    const col = index % 8;

    if (selectedPiece) {
        const [startRow, startCol] = selectedPiece;
        if (isValidMove(startRow, startCol, row, col)) {
            // Move the piece
            boardState[row][col] = boardState[startRow][startCol];
            boardState[startRow][startCol] = "--";
            renderBoard();

            // Check if the game is over
            if (isGameOver()) {
                gameOver = true;
                gameStatus.textContent = "GAME OVER";
            }

            // Switch players
            currentPlayer = currentPlayer === "white" ? "black" : "white";
        }
        selectedPiece = null;
    } else if (boardState[row][col] !== "--") {
        // Select the piece if it belongs to the current player
        const piece = boardState[row][col];
        if ((currentPlayer === "white" && piece.startsWith("W")) || (currentPlayer === "black" && piece.startsWith("B"))) {
            selectedPiece = [row, col];
        }
    }
});

// Render the initial board
renderBoard();