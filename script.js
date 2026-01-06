// Game State Variables
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let scores = {
    X: 0,
    O: 0,
    draw: 0
};

// Winning Combinations
const winPatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6]  // Diagonal top-right to bottom-left
];

// DOM Elements
const cells = document.querySelectorAll('.cell');
const gameInfo = document.querySelector('.game-info');

/**
 * Initialize game by adding event listeners to all cells
 */
function initGame() {
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
}

/**
 * Handle cell click event
 * @param {Event} e - Click event
 */
function handleCellClick(e) {
    const index = e.target.dataset.index;

    // Ignore if cell is already taken or game is over
    if (board[index] !== '' || !gameActive) return;

    // Update board state
    board[index] = currentPlayer;
    
    // Update UI
    e.target.textContent = currentPlayer;
    e.target.classList.add('taken', currentPlayer.toLowerCase());

    // Check for win
    if (checkWin()) {
        gameInfo.innerHTML = `<span class="current-player">Player ${currentPlayer} Wins! 🎉</span>`;
        gameActive = false;
        scores[currentPlayer]++;
        updateScores();
        highlightWinner();
        return;
    }

    // Check for draw
    if (board.every(cell => cell !== '')) {
        gameInfo.innerHTML = `<span class="current-player">It's a Draw! 🤝</span>`;
        gameActive = false;
        scores.draw++;
        updateScores();
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    gameInfo.innerHTML = `<span class="current-player">Player ${currentPlayer}'s Turn</span>`;
}

/**
 * Check if current player has won
 * @returns {boolean} True if current player has won
 */
function checkWin() {
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] !== '' && 
               board[a] === board[b] && 
               board[a] === board[c];
    });
}

/**
 * Highlight winning cells with animation
 */
function highlightWinner() {
    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (board[a] !== '' && 
            board[a] === board[b] && 
            board[a] === board[c]) {
            cells[a].classList.add('winner');
            cells[b].classList.add('winner');
            cells[c].classList.add('winner');
        }
    });
}

/**
 * Reset the game board for a new game
 */
function resetGame() {
    // Reset board state
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    
    // Update UI
    gameInfo.innerHTML = `<span class="current-player">Player X's Turn</span>`;
    
    // Clear all cells
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('taken', 'x', 'o', 'winner');
    });
}

/**
 * Update score display
 */
function updateScores() {
    document.getElementById('scoreX').textContent = scores.X;
    document.getElementById('scoreO').textContent = scores.O;
    document.getElementById('scoreDraw').textContent = scores.draw;
}

/**
 * Add keyboard support for accessibility
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R') {
        resetGame();
    }
});

// Initialize the game when page loads
initGame();
