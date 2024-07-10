const grid = document.querySelector('.grid');

const initialGridSize = 16;
setGrid(initialGridSize);
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const newGridSize = prompt('Enter width and height size: ');
    setGrid(newGridSize);
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