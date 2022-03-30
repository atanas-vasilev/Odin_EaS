function createGrid(size = 16) {
    let result = document.createElement("div");
    result.classList.add("draw-board")
    for (let row = 0; row <= size; row++) {
        //create row
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.classList.add("row-"+row);

        for (let col = 0; col <= size; col++) {
            let newCol = document.createElement("div");
            newCol.classList.add("col");
            newCol.classList.add("col-"+col);

            newRow.append(newCol)
        }
        result.append(newRow);
    }
    document.querySelector("#draw-area").append(result);
}



createGrid()