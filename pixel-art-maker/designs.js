"use strict";
const colorPicker = document.querySelector('#colorPicker');
const sizePickerSubmit = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');

sizePickerSubmit.onsubmit = (e) => {
    e.preventDefault();
    makeGrid();
};

function makeGrid() {
    while (pixelCanvas.firstChild) {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
    const height = document.querySelector('#inputHeight').value;
    const width = document.querySelector('#inputWidth').value;
    if((height >= 1 && height <= 100) && (width >= 1 && width <= 100)) {
        for (let i = 0; i < height; i++) {
            const row = document.createElement('tr');
            pixelCanvas.appendChild(row);
            for (let j = 0; j < width; j++) {
                const cell = document.createElement('td');
                row.appendChild(cell);
                cell.onclick = (e) => {
                    cell.style.backgroundColor = colorPicker.value;
                };
            };
        };
    }
}