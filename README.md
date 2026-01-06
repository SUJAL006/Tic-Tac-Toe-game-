# 🎮 Tic Tac Toe Game

A classic Tic Tac Toe game built with **vanilla JavaScript**, **HTML5**, and **CSS3**. This project showcases fundamental programming concepts including game logic, DOM manipulation, and event handling.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![HTML5](https://img.shields.io/badge/HTML-5-orange.svg)
![CSS3](https://img.shields.io/badge/CSS-3-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🎯 About The Project

A modern implementation of the timeless Tic Tac Toe game featuring:

- **Two Player Mode** - Play with a friend locally
- **Score Tracking** - Keeps track of wins and draws
- **Win Detection** - Automatic winner identification with visual highlighting
- **Smooth Animations** - CSS transitions and effects
- **Responsive Design** - Works on all screen sizes
- **Clean UI** - Modern, gradient-based design

## 🚀 Live Demo

[Play the game here](https://yourusername.github.io/tic-tac-toe/)

## 📸 Screenshots

![Game Screenshot](screenshots/game-screenshot.png)

## 🎮 How to Play

1. Player X starts the game
2. Players take turns clicking on empty cells
3. First player to get **3 in a row** (horizontally, vertically, or diagonally) wins
4. If all cells are filled with no winner, it's a draw
5. Click "New Game" to start fresh while keeping score

## 🛠️ Technical Features

### Core Algorithms
- **Win Detection** - Efficient algorithm checking 8 possible winning combinations
- **Game State Management** - Tracks current player, board state, and game status
- **Draw Detection** - Identifies when board is full with no winner

### Key Concepts Demonstrated
- **DOM Manipulation** - Dynamic content updates
- **Event Handling** - Click events and user interactions
- **CSS Animations** - Smooth transitions and effects
- **Array Methods** - forEach, map, filter operations
- **Conditional Logic** - Game flow control

## 💻 Code Highlights

### Win Pattern Detection
```javascript
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
];

function checkWin() {
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] !== '' && 
               board[a] === board[b] && 
               board[a] === board[c];
    });
}
```

### Visual Winner Highlighting
```javascript
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
```

## 📁 Project Structure
tic-tac-toe/    
│     
├── index.html          # Game structure     
├── styles.css          # Styling and animations     
├── script.js           # Game logic    
├── README.md          # Documentation   
└── LICENSE            # MIT License   

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No dependencies required!

### Installation

1. *
