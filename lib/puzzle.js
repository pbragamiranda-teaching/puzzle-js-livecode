// add event listener to hint button to display hint
const buttonHint = document.querySelector('#show-hint');
const hint = document.querySelector('.hint');

buttonHint.addEventListener('click', () => {
	hint.classList.toggle('active')
});

// select all the tiles (squares)
const tiles = document.querySelectorAll('td');

// create a function to check if tile can move
const canMove = (tile) => {
	const tileColumn = tile.cellIndex;
	const tileRow = tile.parentElement.rowIndex;
	const emptyTile = document.querySelector('.empty');
	const emptyColumn = emptyTile.cellIndex;
	const emptyRow = emptyTile.parentElement.rowIndex;

	return (tileColumn === emptyColumn && tileRow === emptyRow + 1) ||
				 (tileColumn === emptyColumn && tileRow === emptyRow - 1) ||
				 (tileRow === emptyRow && tileColumn === emptyColumn + 1) ||
				 (tileRow === emptyRow && tileColumn === emptyColumn - 1);
};

// if can move, move it!
const moveTile = (tile) => {
	const emptyTile = document.querySelector('.empty');
	emptyTile.innerHTML = tile.innerHTML
	emptyTile.classList.remove('empty');
	tile.innerHTML = ''
	tile.classList.add('empty');
} 

// create a function to check if user won
const checkIfUserWins = () => {
	const tiles = document.querySelectorAll('td:not(.empty)');
	let won = true;

	tiles.forEach((tile) => {
		const tileColumn = tile.cellIndex;
		const tileRow = tile.parentElement.rowIndex;
		if (4 * tileRow + 1 + tileColumn != Number.parseInt(tile.innerHTML, 10)) {
			won = false; 
		};
	});
	if (won) {
		alert('You won!')
	};
};

// event listener to every tile
tiles.forEach((tile) => {
	tile.addEventListener('click', () => {
		if (canMove(tile)) {
			moveTile(tile);
			checkIfUserWins();
		};
	});
});
