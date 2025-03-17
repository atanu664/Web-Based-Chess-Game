public class ChessGame {
    private String[][] board;

    public ChessGame() {
        initializeBoard();
    }

    private void initializeBoard() {
        board = new String[8][8];
        // Initialize pawns
        for (int i = 0; i < 8; i++) {
            board[1][i] = "BP"; // Black Pawn
            board[6][i] = "WP"; // White Pawn
        }
        // Initialize other pieces
        String[] pieces = {"R", "N", "B", "Q", "K", "B", "N", "R"};
        for (int i = 0; i < 8; i++) {
            board[0][i] = "B" + pieces[i]; // Black pieces
            board[7][i] = "W" + pieces[i]; // White pieces
        }
    }

    public String[][] getBoard() {
        return board;
    }

    public void movePiece(int startX, int startY, int endX, int endY) {
        String piece = board[startX][startY];
        if (piece != null) {
            board[endX][endY] = piece;
            board[startX][startY] = null;
        }
    }

    public void printBoard() {
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                System.out.print((board[i][j] != null ? board[i][j] : "--") + " ");
            }
            System.out.println();
        }
    }
}