let currentPlayer = "X";
let cells = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;
const moveSound = document.getElementById("moveSound");

const handleCellClick = (index) => {
  if (!gameOver && !cells[index]) {
    cells[index] = currentPlayer;
    document.getElementById("board").children[index].textContent =
      currentPlayer;
    playMoveSound(); // Play move sound
    if (checkWinner()) {
      gameOver = true;
      setTimeout(() => {
        //alert(`Player ${currentPlayer} wins!`);
        document.getElementById(
          "winner"
        ).innerHTML = `Congrtulations! Player ${currentPlayer} wins!`;
        stopMoveSound(); // Stop move sound
      }, 100);
    } else if (checkDraw()) {
      gameOver = true;
      setTimeout(() => {
        document.getElementById("winner").innerHTML = "It's a draw!";
        // alert('It\'s a draw!');
        stopMoveSound(); // Stop move sound
      }, 100);
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      if (currentPlayer === "O") {
        computerPlay();
      }
    }
  }
};

const computerPlay = () => {
  let emptyCells = cells.reduce((acc, cell, index) => {
    if (!cell) acc.push(index);
    return acc;
  }, []);
  let randomIndex = Math.floor(Math.random() * emptyCells.length);
  let chosenCell = emptyCells[randomIndex];
  handleCellClick(chosenCell);
};

const checkWinner = () => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return true;
    }
  }
  return false;
};

const checkDraw = () => {
  return !cells.includes("");
};

const playMoveSound = () => {
  moveSound.currentTime = 0; // Restart sound if already playing
  moveSound.play();
};

const stopMoveSound = () => {
  moveSound.pause();
  moveSound.currentTime = 0;
};
