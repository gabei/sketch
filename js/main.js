"use strict";
console.log('script.js loaded...');
/* Sketch Elements
___________________________________*/
const sketchContainer = document.querySelector('.sketch-container');
const containerWidth = sketchContainer.offsetWidth;
const containerHeight = sketchContainer.offsetHeight;
const resetButton = document.querySelector('.sketch-options__reset');
/*Settings
___________________________________*/
const settingsBox = document.querySelector('.settings-box');
const settingsForm = document.querySelector('.settings_form');
const sizeInput = document.querySelector('.settings_size');
let gridSize;
let pixelWidth;
let pixelHeight;
settingsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let newGrid = Number(sizeInput.value);
    let formIsValid = validateSize(newGrid);
    if (formIsValid) {
        init(newGrid);
    }
    else {
        formError();
    }
});
resetButton.addEventListener('click', reset);
function init(gridSize) {
    setGridSize(gridSize);
    pixelWidth = 100 / gridSize;
    pixelHeight = pixelWidth;
    populateGrid();
    addGridListeners();
    toggleSettings();
    toggleSketchContainer();
}
function formError() {
    alert('Values must be between 1 and 100!');
}
function validateSize(size) {
    return (size >= 1 && size <= 100);
}
function toggleSettings() {
    settingsBox.classList.toggle('hidden');
}
function toggleSketchContainer() {
    sketchContainer.classList.toggle('hidden');
}
function setGridSize(newValue) {
    gridSize = newValue;
}
function reset() {
    toggleSketchContainer();
    toggleSettings();
    sketchContainer.textContent = '';
}
/* Pixel creation
___________________________________*/
function createPixel() {
    //create a pixel of the sketch pad
    let pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    pixel.style.width = pixelWidth + '%';
    pixel.style.height = pixelHeight + '%';
    return pixel;
}
function attachPixel(pixel) {
    sketchContainer.append(pixel);
}
function populateGrid() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let newPixel = createPixel();
            attachPixel(newPixel);
        }
    }
}
function addGridListeners() {
    sketchContainer.addEventListener('mouseover', function (e) {
        const target = e.target;
        if (target.classList.contains('pixel')) {
            target.classList.add('pixel--filled');
        }
    });
}
//# sourceMappingURL=main.js.map