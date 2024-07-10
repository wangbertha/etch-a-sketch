const grid = document.querySelector('.grid');
for (let i=0; i<16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j=0; j<16; j++) {
        const ele = document.createElement('div');
        ele.classList.add('element');
        row.appendChild(ele);
    }
    grid.appendChild(row);
}