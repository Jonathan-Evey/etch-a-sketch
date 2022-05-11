const gridBox = document.getElementById('grid-container');


const gridSizeBtns = document.querySelectorAll('.grid-size-btn');
/*---remove original grid and makes a new one that is selected---*/
gridSizeBtns.forEach(addBtnEvent);

/*Colors box on grid when the mouse moves over it*/
function colorBoxes(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.classList.add('colored');
        })
    })
}

/*-------Removes color when a box is clicked--------*/
function removeColor() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.remove('colored');
        })
    })
}

/*---------Generates the starting drawing area grid----------*/
function creatGrid(num) {  
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.className = `box grid-${num}`;
        gridBox.append(div);
        for (let j = 1; j < num; j++) {
            const div = document.createElement('div');
            div.className = `box grid-${num}`;
            gridBox.append(div);
        }
    }
}    


function addBtnEvent(btn) {
    btn.addEventListener('click', () => {
        for (let i = gridBox.children.length - 1; i >= 0; i--) {
            if (gridBox.hasChildNodes()) {
                gridBox.removeChild(gridBox.children[0]);
              }
        }
        if(btn.id === "btn-16") {
            creatGrid(16);
        }
        if(btn.id === "btn-24") {
            creatGrid(24);
        }
        if(btn.id === "btn-32") {
            creatGrid(32);
        }
        if(btn.id === "btn-48") {
            creatGrid(48);
        } 
        colorBoxes();
        removeColor();
    }) 
}

window.onload = creatGrid(16);
colorBoxes();
removeColor();