# Web-Based Chess Game

## 1. Introduction
This project is a **web-based chess game** that allows two players to play chess on a single device. The game follows standard chess rules and features a simple user interface. It includes sound effects for piece movements and displays a **"GAME OVER"** message when the game ends.

---

## 2. Objectives
- Create a chess game with a user-friendly interface.
- Follow standard chess rules for piece movements and capturing.
- Add sound effects for piece movements.
- Show a **"GAME OVER"** message when the game ends.

---

## 3. Technologies Used

**Frontend:**
- **HTML** – For creating the chessboard.
- **CSS** – For styling the chessboard and pieces.
- **JavaScript** – For handling game logic and interactions.

**Backend (Optional):**
- **Java** – For advanced game logic.

**Tools:**
- **Visual Studio Code** – For writing code.
- **Live Server** – For testing the frontend.

---

## 4. Features

1. **Chessboard:**
   - An 8x8 grid with light and dark squares.
   - Pieces displayed using Unicode characters.

2. **Piece Movement:**
   - Players click a piece to select it and click a valid square to move it.
   - Movement rules are enforced for all pieces (e.g., pawns, knights, rooks).

3. **Piece Capturing:**
   - Players can capture opponent pieces by moving their piece to the same square.

4. **Sound Effects:**
   - A sound plays each time a piece is moved.

5. **Game Over:**
   - The game ends when a king is captured.
   - A **"GAME OVER"** message is displayed.

---

## 5. How It Works

1. **Chessboard Setup:**
   - The chessboard is created using HTML and CSS.
   - Pieces are placed in their starting positions.

2. **Piece Movement:**
   - Players click a piece to select it.
   - They click a valid square to move the piece.
   - JavaScript checks if the move is valid.

3. **Piece Capturing:**
   - If a move targets an opponent’s piece, it is captured.

4. **Sound Effects:**
   - An audio file plays each time a move occurs using the `<audio>` tag and JavaScript.

5. **Game Over:**
   - The game ends when a king is captured.
   - A **"GAME OVER"** message is displayed.

---

## 6. Code Structure

### Frontend
- `index.html`: Contains the chessboard and audio elements.
- `styles.css`: Styles for the chessboard and pieces.
- `script.js`: Handles piece movement, capturing, and sound effects.

### Backend (Optional)
- `ChessGame.java`: Implements chess game logic.
- `Main.java`: Runs the backend server.

---

## 7. Challenges

1. **Enforcing Chess Rules:**
   - Challenge: Implementing valid movement rules for all pieces.
   - Solution: Used conditional logic to validate each move.

2. **Piece Capturing:**
   - Challenge: Ensuring correct capturing without errors.
   - Solution: Added checks to prevent capturing same-color pieces.

3. **Sound Effects:**
   - Challenge: Playing sounds at the right moment.
   - Solution: Used the `<audio>` element and JavaScript’s `play()` method.

---

## 8. Future Improvements

- **Advanced Rules:** Add check, checkmate, and stalemate detection.
- **Multiplayer:** Allow two players to play online.
- **Better UI:** Add animations and highlight valid moves.
- **AI Opponent:** Implement an AI opponent using algorithms like Minimax.

---

## 9. Conclusion

This project delivers a simple chess game with a user-friendly interface. It adheres to standard chess rules and includes sound effects. The game concludes when a king is captured, and a **"GAME OVER"** message is shown. Future enhancements will aim to make the game more advanced and engaging.

---

## 10. Game Over Screen

![Game Over](https://via.placeholder.com/400x200)

---

## License
This project is licensed under the MIT License.
