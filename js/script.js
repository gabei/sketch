console.log('script.js loaded...');


/* Canvas Settings
___________________________________*/
const sketchContainer = document.querySelector('.sketch-container');
const containerWidth = sketchContainer.offsetWidth;


/* Setup Settings
___________________________________*/
const settings = document.querySelector('.settings_form');
let gridSize;

settings.addEventListener('submit', function(e){
  e.preventDefault();
  let newGrid = settings.elements['settings_size'];
  setGridSize(newGrid.value);
  console.log(gridSize);
});

function setGridSize(newValue) {
  gridSize = newValue;
}

/* Pixel creation
___________________________________*/
function createPixel() {
  //create a pixel of the sketch pad
  let width = Math.floor(containerWidth / grideSize);
  let height = width;

  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
}