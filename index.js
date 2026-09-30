const container = document.querySelector(".container");
const clear = document.querySelector(".clear-button");
const sizeButton = document.querySelector(".size-button");
const gridSize = 16;


function generateGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        container.appendChild(div);
    }
    container.style.width = `${size * 30}px`
}

function clearGrid() {
    const grid = document.querySelectorAll(".grid").forEach( (cell) => {
        cell.classList.remove("coloured");
    });
}

function removeGrid() {
    container.replaceChildren();
}

function setGrid() {
    const userPrompt = prompt("What size grid would you like? (max 100 x 100): ");
    const size = Number(userPrompt);

    if (!Number.isInteger(size) || size < 1 || size > 100) {
        alert("Invalid input");
        return;
    }
    removeGrid();
    generateGrid(size);
}

generateGrid(gridSize);

container.addEventListener(
    "mouseover",
    (event) => event.target.closest(".grid")?.classList.add("coloured")
);

clear.addEventListener("click", clearGrid);
sizeButton.addEventListener("click", setGrid)