let currentPlayer = 'X';
let nextPlayer = 'O';

let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

const handleClick = function(event){
    const cell = event.target;
    console.log(cell.id);
}

const cells = document.querySelectorAll('td');

for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', handleClick);
}