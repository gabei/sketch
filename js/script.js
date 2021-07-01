console.log('script.js loaded...');


/* Canvas Settings
___________________________________*/
const sketchContainer = document.querySelector('.sketch-container');
const containerWidth = sketchContainer.offsetWidth;
const containerHeight = sketchContainer.offsetHeight;


/* Setup Settings
___________________________________*/
const settings = document.querySelector('.settings_form');
let gridSize;
let pixelWidth;
let pixelHeight;

settings.addEventListener('submit', function(e){
  e.preventDefault();

  let newGrid = settings.elements['settings_size'];
  setGridSize(newGrid.value);
  pixelWidth = containerWidth / gridSize;
  pixelHeight = pixelWidth;

  console.log(gridSize);
  populateGrid();
});

function getGridSize(event){
  
}

function setGridSize(newValue) {
  gridSize = newValue;
}

/* Pixel creation
___________________________________*/
function createPixel() {
  //create a pixel of the sketch pad
  let pixel = document.createElement('div');
  pixel.setAttribute('class', 'pixel');
  pixel.style.width = pixelWidth + 'px';
  pixel.style.height = pixelHeight + 'px';

  return pixel;
}

function attachPixel(pixel){
  sketchContainer.append(pixel);
}

function populateGrid(){
  for(let i = 0; i < gridSize; i++){
    for(let j = 0; j < gridSize; j++){
      let newPixel = createPixel();
      attachPixel(newPixel);
    }
  }
}