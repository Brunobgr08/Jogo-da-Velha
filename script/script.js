let currentPlayer = 'X';
let nextPlayer = 'O';

let vitoriasPlayerX = 0;
let vitoriasPlayerO = 0;

let playerSelections = [];
let playerXSelections = [];
let playerOSelections = [];

const cells = document.querySelectorAll('td');
let playerAtual = document.getElementById('currentPlayer');
let countPlayerX = document.getElementById('countPlayerX');
let countPlayerO = document.getElementById('countPlayerO');

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const handleClick = function (event) {
  const cell = event.target;

  // Validação: verifica se a célula já foi preenchida
  if (cell.innerHTML !== '') {
    alert('Célula já foi marcada! Escolha outra célula.');
    return;
  }

  cell.innerHTML = currentPlayer;

  if (currentPlayer === 'X') {
    playerSelections = playerXSelections;
    nextPlayer = 'O';
  } else {
    playerSelections = playerOSelections;
    nextPlayer = 'X';
  }

  playerSelections.push(Number(cell.id));

  playerAtual.innerText = `O jogador é atual é: ${currentPlayer}`;

  if (checarGanhador()) {
    alert('Player ' + currentPlayer + ' wins');
    contarWins();
    resetarJogo();
  }

  countPlayerX.innerText = `${vitoriasPlayerX}`;
  countPlayerO.innerText = `${vitoriasPlayerO}`;

  if (checarEmpate()) {
    alert('Jogo Empatado!');
    resetarJogo();
  }

  currentPlayer = nextPlayer;
};

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleClick);
}

function checarGanhador() {
  for (let i = 0; i < winningCombinations.length; i++) {
    let ValorCombinacao = 0;
    let combinac = winningCombinations[i];

    for (let cell in combinac) {
      if (playerSelections.includes(combinac[cell])) {
        ValorCombinacao++;
      } else {
        break;
      }
      if (ValorCombinacao === winningCombinations[i].length) {
        return true;
      }
    }
  }
  return false;
}

function checarEmpate() {
  return playerOSelections.length + playerXSelections.length >= cells.length;
}

function resetarJogo() {
  playerAtual.innerText = '';

  playerXSelections = new Array();
  playerOSelections = new Array();
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = '';
  }
}

function contarWins() {
  if (currentPlayer === 'X') {
    vitoriasPlayerX++;
  } else if (currentPlayer === 'O') {
    vitoriasPlayerO++;
  }
}
