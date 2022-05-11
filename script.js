const gridBox = document.getElementById('grid-container');
let hex = "000000";
let colorType = "black";

const colorChoiceBtns = document.querySelectorAll('.color-select-btn')
const gridSizeBtns = document.querySelectorAll('.grid-size-btn');
/*---checks for a click on the grid buttons, when clicked removes original grid and makes selected grid---*/
gridSizeBtns.forEach(addGridBtnEvent);
/*---checks for click on color buttons, when clicked updateds color palette---*/
colorChoiceBtns.forEach(addColorBtnEvent);

/*---check to see if mouse is being clicked/held---*/
let mouseDown = false;
document.body.onmousedown = function() {
    mouseDown = true;
}
document.body.onmouseup = function() {
    mouseDown = false;
}

/*Colors box when the mouse moves over it and removes color if the mouse is also clicked/held*/
function colorBoxes(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', e => {
            if (colorType == "gradient") {
                checkCurrentGradient(e);
                }
            if (colorType == "wormPalette") {
                currentWormPalette(e);
            }
            if (colorType == "coldPalette") {
                currentColdPalette(e);
            }
            if (mouseDown === true) {
                e.target.style.backgroundColor = null;
            }
            if (mouseDown === false) {
                e.target.style.backgroundColor = `#${hex}`;
            }
            removeColor();
            resetColor();
        })
    })
}



/*-------Removes color when a box is clicked--------*/
function removeColor() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mousedown', () => {
            box.style.backgroundColor = null;
        })
    })
}

/*--Checks for color-btn click/if clicked updates drawing color--*/
function addColorBtnEvent(btn) {
    btn.addEventListener('click', () => {
        if(btn.id === "btn-black") {
            colorType = "black";
            hex = "000000";
        }
        if(btn.id === "btn-gradient") {
            colorType = "gradient";
            hex = "ebebeb";
        }
        if(btn.id === "btn-worm") {
            colorType = "wormPalette";
            hex = "780116";
        }
        if(btn.id === "btn-cold") {
            colorType = "coldPalette"
            hex = "E8F9FD";
        } 
    }) 
}

/*---------Generates drawing grid----------*/
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

/*--Checks the grid-btns for a click/if clicked makes a new grid--*/
function addGridBtnEvent(btn) {
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

function resetColor() {
    if(colorType === "black") {
        hex = "000000";
    }
    if(colorType === "gradient") {
        hex = "ebebeb";
    }
    if(colorType == "wormPalette") {
    hex = "780116";
    }
}
/*---check current gray scale gradient to set the right color---*/
function checkCurrentGradient(e) {
    if (e.target.style.backgroundColor === '') {
        hex = "ebebeb";
    }
    if (e.target.style.backgroundColor === "rgb(235, 235, 235)") {
        hex = "cecece";
    }
    if (e.target.style.backgroundColor === "rgb(206, 206, 206)") {
        hex = "b1b1b1";
    }
    if (e.target.style.backgroundColor === "rgb(177, 177, 177)") {
        hex = "969696";
    }
    if (e.target.style.backgroundColor === "rgb(150, 150, 150)") {
        hex = "7b7b7b";
    }
    if (e.target.style.backgroundColor === "rgb(123, 123, 123)") {
        hex = "626262";
    }
    if (e.target.style.backgroundColor === "rgb(98, 98, 98)") {
        hex = "494949";
    }
    if (e.target.style.backgroundColor === "rgb(73, 73, 73)") {
        hex = "323232";
    }
    if (e.target.style.backgroundColor === "rgb(50, 50, 50)") {
        hex = "1c1c1c";
    }
    if (e.target.style.backgroundColor === "rgb(28, 28, 28)") {
        hex = "000000";
    }
    if (e.target.style.backgroundColor === "rgb(0, 0, 0)") {
        hex = "000000";
    }
    else {
        hex = hex;
    }
}

function currentWormPalette(e) {
if (e.target.style.backgroundColor === '' || e.target.style.backgroundColor === "rgb(247, 181, 56)") {
    hex = "780116";
}
if (e.target.style.backgroundColor === "rgb(120, 1, 22)") {
    hex = "C32F27";
}
if (e.target.style.backgroundColor === "rgb(195, 47, 39)") {
    hex = "D8572A";
}
if (e.target.style.backgroundColor === "rgb(216, 87, 42)") {
    hex = "DB7C26";
}
if (e.target.style.backgroundColor === "rgb(219, 124, 38)") {
    hex = "F7B538";
} else {
    hex = hex;
}
}

function currentColdPalette(e) {
    if (e.target.style.backgroundColor === '' || e.target.style.backgroundColor === "rgb(85, 52, 165)") {
        hex = "E8F9FD";
    }
    if (e.target.style.backgroundColor === "rgb(232, 249, 253)") {
        hex = "79DAE8";
    }
    if (e.target.style.backgroundColor === "rgb(121, 218, 232)") {
        hex = "0AA1DD";
    }
    if (e.target.style.backgroundColor === "rgb(10, 161, 221)") {
        hex = "2155CD";
    }
    if (e.target.style.backgroundColor === "rgb(33, 85, 205)") {
        hex = "5534A5";
    } else {
        hex = hex;
    }
    }

window.onload = creatGrid(16);
colorBoxes();
removeColor();