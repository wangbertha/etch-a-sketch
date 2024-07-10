const grid = document.querySelector('.grid');

const initialGridSize = 16;
setGrid(initialGridSize);
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const newGridSize = prompt('Enter width and height size: ');
    if (newGridSize <= 100) {
        setGrid(newGridSize);
    }
    else {
        alert('Width/height must be 100 or below')
    }
})

function setGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    for (let i=0; i<size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j=0; j<size; j++) {
            const ele = document.createElement('div');
            ele.classList.add('element');
            ele.addEventListener('mouseover', () => ele.classList.add('touched'));
            row.appendChild(ele);
        }
        grid.appendChild(row);
    }
}