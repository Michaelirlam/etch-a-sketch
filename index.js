const container = document.querySelector(".container");
const gridSize = 16;


function generateGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        container.appendChild(div);
    }
    container.style.width = `${size * 30}px`
}

generateGrid(gridSize);

container.addEventListener(
    "mouseover",
    (event) => event.target.closest(".grid")?.classList.add("coloured")
);