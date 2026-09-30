const container = document.querySelector(".container");
const clear = document.querySelector(".clear-button");
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

generateGrid(gridSize);

container.addEventListener(
    "mouseover",
    (event) => event.target.closest(".grid")?.classList.add("coloured")
);

clear.addEventListener("click", clearGrid);