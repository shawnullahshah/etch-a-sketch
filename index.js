// Ask the user to create a grid of specified dimensions with a button
let gridContainer = document.querySelector("#grid-container");
let gridAlreadyDrawn = false;

let gridDrawButton = document.querySelector(".grid-draw-button");
gridDrawButton.addEventListener('click', () => {
    let dimensionValue = prompt("How many squares do you want each side to consist of? Only go as high as 100, please.", '');
    drawGrid(dimensionValue);
});


function drawGrid(sideOfGridValue) {
    // Check if sideOfGridValue is a number or over 100
    if (isNaN(sideOfGridValue) || sideOfGridValue > 100) {
        alert("You did not enter a valid number.");
    }
    else {
        // Check to see if the grid is already drawn. If it is, erase the grid.
        if (gridAlreadyDrawn) {
            while (gridContainer.hasChildNodes()) {
                gridContainer.firstChild.remove();
            }
        }

        // Draw the grid
        for (let i = 0; i < sideOfGridValue; i++) {
            let newRowDiv = document.createElement("div");
            newRowDiv.setAttribute('id', `row-${i}`);
            newRowDiv.setAttribute('class', 'box; row-container;');
            newRowDiv.setAttribute('style', /*'border: 1px solid green;*/ 'display: flex; flex-wrap: nowrap; flex: 1;')
            //newRowDiv.textContent = `${i}`;
            gridContainer.appendChild(newRowDiv);

            for (let j = 0; j < sideOfGridValue; j++) {
                let rowDivCell = document.createElement("div");
                rowDivCell.setAttribute('id', `row-cell-${j}`);
                rowDivCell.setAttribute('class', 'box; row-item;');
                rowDivCell.setAttribute('style', /*'border: 1px solid black;*/ 'flex: 1;');

                // Set up a hover event
                rowDivCell.addEventListener('mouseover', () => {rowDivCell.style.backgroundColor = 'blue';});
                // rowDivCell.addEventListener('mouseout', () => {rowDivCell.style.backgroundColor = 'white';});

                //rowDivCell.textContent = `${j}`;
                newRowDiv.appendChild(rowDivCell); 
            }
        }
        // Update the gridAlreadyDrawn flag
        gridAlreadyDrawn = true;
    }
}