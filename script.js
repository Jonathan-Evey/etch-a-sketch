const gridBox = document.getElementById('grid-container');
let boxCount = 16;

function creatGrid() {  
    for (let i = 0; i < boxCount; i++) {
        const div = document.createElement('div');
        div.className = 'box';
        gridBox.append(div);
        for (let j = 1; j < boxCount; j++) {
            const div = document.createElement('div');
            div.className = 'box';
            gridBox.append(div);
        }
    }
}


creatGrid();