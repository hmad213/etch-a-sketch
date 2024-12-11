function setGrid(size){
    container.textContent = "";
    let row = document.createElement("div");
    row.classList.add("row");
    let box = document.createElement("div");
    box.classList.add("box");
    for(let i = 0; i < size; i++){
        tempBox = box.cloneNode()
        row.appendChild(tempBox);
    }
    for(let i = 0; i < size; i++){
        tempRow = row.cloneNode(true);
        container.appendChild(tempRow);
    }
    boxes = document.querySelectorAll(".box");
}

function setColor(box){
    if(box.style.backgroundColor === ""){
        if(rainbow){
            let red = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
        else{
            box.style.backgroundColor = `rgb(0, 0, 0)`;
        }
        box.style.opacity = 0.1
    }
    else{
        if(box.style.opacity < 1){
            box.style.opacity = Number(box.style.opacity) + 0.1;
        }
    }
}

function setBoxes(){
    boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", (event) => {
            if(draw){
                setColor(event.target);
            }
        });
    })
}

function clearGrid(){
    let rows = document.querySelectorAll(".row");
    for(let i = 0; i < size; i++){
        let boxes = rows[i].querySelectorAll(".box")
        for(let j = 0; j < size; j++){
            boxes[j].style.backgroundColor = "";
        }
    }
}

let container = document.querySelector(".container");
let sizeButton = document.querySelector(".size-button");
let rainbowButton = document.querySelector(".rainbow-button");
let clearButton = document.querySelector(".clear-button");
let rainbow = false;
let draw = false;
let size = 16
let boxes;
setGrid(size);
setBoxes()

container.addEventListener("click", () => {draw = !draw})

sizeButton.addEventListener("click", () => {
    size = prompt("Enter grid size between 1 and 100");
    let invalid = true
    if(!isNaN(size)){
        if(size >= 0 && size <= 100){
            invalid = false
        }
    }
    while(invalid){
        size = prompt("Invalid! Enter grid size between 1 and 100");
        if(!isNaN(size)){
            if(size >= 0 && size <= 100){
                invalid = false
            }
        }
    }
    setGrid(size);
    setBoxes()
})

rainbowButton.addEventListener("click", () => {
    rainbow = !rainbow;
    if(rainbow){
        rainbowButton.style.backgroundColor = "#03AC13"
    }
    else{
        rainbowButton.style.backgroundColor = "rgb(228, 74, 74)"
    }
    clearGrid();
})

clearButton.addEventListener("click", () => {clearGrid()})