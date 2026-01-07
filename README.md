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

[Play the game here](https://sujal006.github.io/tic-tac-toe/)

## 📸 Screenshots

![Game Screenshot](Screenshot 2026-01-07 at 10.47.37 AM.png)

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

1. **Clone the repository**
```bash
git clone https://github.com/SUJAL006/tic-tac-toe.git
cd tic-tac-toe
```

2. **Open the game**
```bash
# Simply open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

3. **Play!**
Open `index.html` in any web browser and start playing!

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

### JavaScript Fundamentals
- ✅ Variables and data types
- ✅ Functions and scope
- ✅ Arrays and objects
- ✅ Event listeners
- ✅ DOM manipulation
- ✅ Conditional statements
- ✅ ES6+ syntax

### Web Development
- ✅ Semantic HTML5
- ✅ Modern CSS (Flexbox, Grid)
- ✅ CSS Animations
- ✅ Responsive design
- ✅ Cross-browser compatibility

### Software Engineering
- ✅ Clean, readable code
- ✅ Code organization
- ✅ Problem-solving
- ✅ User experience design
- ✅ Version control with Git

## 🎯 Key Features Explained

### 1. Win Detection Algorithm
The game checks 8 possible winning combinations:
- 3 horizontal rows
- 3 vertical columns
- 2 diagonals

Uses array pattern matching for efficient detection.

### 2. Score Persistence
Tracks wins for both players and draws throughout the session using JavaScript objects.

### 3. Visual Feedback
- Winning cells highlighted with gold color
- Smooth hover effects
- Pulsing animation on win
- Clear turn indicators

### 4. User Experience
- Prevents clicking on occupied cells
- Disables board after game ends
- Clear game status messages
- Easy reset functionality

## 🎨 Design Features

- **Modern UI** - Clean, professional design
- **Gradient Background** - Eye-catching purple gradient
- **Color-Coded Players** - Blue for X, Pink for O
- **Responsive Layout** - Works on all devices
- **Smooth Animations** - CSS transitions throughout

## 🔮 Future Enhancements

- [ ] Single-player mode with AI opponent
- [ ] Difficulty levels (Easy, Medium, Hard)
- [ ] Online multiplayer
- [ ] Sound effects
- [ ] Undo move functionality
- [ ] Game history/replay
- [ ] Different themes
- [ ] Larger grid options (4x4, 5x5)
- [ ] Tournament mode

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**[Your Name]**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com
- Portfolio: [yourportfolio.com](https://yourportfolio.com)

## 🙏 Acknowledgments

- Classic Tic Tac Toe game
- Built for learning and portfolio purposes
- Inspired by timeless gameplay

## 📊 Project Stats

- **Lines of Code**: ~250
- **Development Time**: [Your time]
- **Languages**: JavaScript (50%), CSS (30%), HTML (20%)
- **Browser Support**: Chrome, Firefox, Safari, Edge

---

⭐ **Star this repository** if you found it helpful!

## 🎓 For Recruiters & Hiring Managers

This project demonstrates:
- Strong grasp of JavaScript fundamentals
- Clean, maintainable code
- Understanding of game logic and algorithms
- User interface design skills
- Problem-solving abilities
- Attention to detail

Perfect showcase for:
- Frontend Developer positions
- Junior Software Engineer roles
- Web Developer internships
- JavaScript Developer positions
