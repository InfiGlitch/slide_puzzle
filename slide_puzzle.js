const tiles = document.querySelectorAll('.tile');
let emptyIndex = 8; // The index of the empty tile
let tileOrder = [-3, -1, 1, 3];
let rand = 0;

// Initialize the tiles with numbers
function initTiles() {
    tiles.forEach((tile, index) => {
        console.log(tile.className)
        if (index < 8) {
            tile.style.backgroundPosition = `-${(index % 3) * 100}px -${Math.floor(index / 3) * 100}px`;
        }
    });
}
// Check if the move is valid
function isValidMove(index) {
    const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 3, emptyIndex + 3];
    return validMoves.includes(index);
}

// Move the tile
function moveTile(index) {
    if (isValidMove(index)) {
        tiles[emptyIndex].textContent = tiles[index].textContent;
        tiles[emptyIndex].style.backgroundPosition = tiles[index].style.backgroundPosition;
        tiles[index].textContent = '';
        tiles[index].style.backgroundPosition = '';
        tiles[index].classList.add('empty');
        tiles[emptyIndex].classList.remove('empty');
        emptyIndex = index;
    }
}
function randomTiles(){
    // tiles.forEach((tile, index) => {
    //     console.log(tile.className)
    //     if (index < 8) {
    //         tile.style.backgroundImage = `url(${document.getElementById("image").value || "google-chrome.jpg"})`;
    //         tile.style.backgroundPosition = `-${(index % 3) * 100}px -${Math.floor(index / 3) * 100}px`;
    //     }
    //     else {
    //         tile.style.backgroundImage = `url("blank.jpg")`;
    //     }
    // });
    for (let i = 0; i < 10000; i++)
        {
            do {
                rand = tileOrder[Math.floor(Math.random()*4)] + emptyIndex;
            } while ((rand < 0) || (rand > 8));
            moveTile(rand);
        }
}
// Add click event listeners to tiles
tiles.forEach((tile, index) => {
    tile.addEventListener('click', () => moveTile(index));
});

// Initialize the puzzle
initTiles();
randomTiles();
