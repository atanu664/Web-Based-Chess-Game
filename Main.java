public class Main {
    public static void main(String[] args) {
        ChessGame game = new ChessGame();
        game.printBoard();
        game.movePiece(1, 0, 3, 0); // Move a pawn
        System.out.println("\nAfter moving a pawn:");
        game.printBoard();
    }
}