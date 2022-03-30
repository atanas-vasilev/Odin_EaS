let gridSize = 16; //Default

function createGrid(x = gridSize) {
    let result = document.createElement("div");
    result.classList.add("draw-board")
    for (let row = 1; row <= x; row++) {
        //create row
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.classList.add("row-"+row);

        for (let col = 1; col <= x; col++) {
            let newCol = document.createElement("div");
            newCol.classList.add("col");
            newCol.classList.add("col-"+col);

            newRow.append(newCol)
        }
        result.append(newRow);
    }
    document.querySelector("#draw-area").innerHTML = "";
    document.querySelector("#draw-area").append(result);
}

function attachEventListeners(){
    document.querySelectorAll(".col").forEach(
        cell => cell.addEventListener("mouseover", function(e){e.target.classList.add('painted')})
    )
}

function resetDrawBoard() {
    createGrid();
    attachEventListeners()
}

document.querySelector("#clear-btn").addEventListener("click",resetDrawBoard);
document.querySelector("#grid-btn").addEventListener("click", () => {
    gridSize = Number(prompt("What should the new size of the grid be? eg. 32"))
    //TO-DO: ERROR HANDLING AND LIMIT TO 100
    resetDrawBoard()
});

resetDrawBoard();