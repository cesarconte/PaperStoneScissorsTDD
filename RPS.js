// Get references to HTML elements
/*const startBtn = document.getElementById('start-btn');
const playerChoice = document.getElementById('player-choice');
const opponentChoice = document.getElementById('opponent-choice');
const score = document.getElementById('score');*/

// Add click event to start button
//startBtn.addEventListener('click', startGame);

// Game choices
const choices = ['Rock', 'Paper', 'Scissors'];

// Initialize score
let playerScore = 0;
let opponentScore = 0;

function startGame() {
  // Show game container and hide start button
  document.getElementById('game-container').style.display = 'block';
  startBtn.style.display = 'none';

  // Generate random choice for opponent
  const opponentIndex = Math.floor(Math.random() * choices.length);
  const opponentSelection = choices[opponentIndex];

  // Show opponent's choice
  opponentChoice.textContent = opponentSelection;

  // Make player's choice when an option is clicked
  const options = document.querySelectorAll('#game-container h2 + p');
  options.forEach(option => {
    option.addEventListener('click', function () {
      const playerSelection = this.textContent;
      playerChoice.textContent = playerSelection;

      // Determine the winner
      const winner = determineWinner(playerSelection, opponentSelection);

      // Update the score and display the result
      updateScore(winner);
    });
  });
}

function determineWinner(player, opponent) {
  if (player === opponent) {
    return 'Tie';
  } else if (
    (player === 'Rock' && opponent === 'Scissors') ||
    (player === 'Paper' && opponent === 'Rock') ||
    (player === 'Scissors' && opponent === 'Paper')
  ) {
    return 'Player';
  } else {
    return 'Opponent';
  }
}

function updateScore(winner) {
  if (winner === 'Player') {
    playerScore++;
  } else if (winner === 'Opponent') {
    opponentScore++;
  }

  score.textContent = `${playerScore} - ${opponentScore}`;
}

module.exports = determineWinner;
