console.log('script.js loaded...');


/* Canvas Settings
___________________________________*/
const sketchContainer = document.querySelector('.sketch-container');
const containerWidth = sketchContainer.offsetWidth;
const containerHeight = sketchContainer.offsetHeight;


/* Setup Settings
___________________________________*/
const settingsBox = document.querySelector('.settings');
const settings = document.querySelector('.settings_form');
let gridSize;
let pixelWidth;
let pixelHeight;

settings.addEventListener('submit', function(e){
  e.preventDefault();

  let newGrid = settings.elements['settings_size'];
  setGridSize(newGrid.value);
  pixelWidth = 100 / gridSize;
  pixelHeight = pixelWidth;

  populateGrid();
  toggleSettings();
});

function getGridSize(event){
  
}

function toggleSettings(){
  settingsBox.classList.toggle('hidden');
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
  pixel.style.width = pixelWidth + '%';
  pixel.style.height = pixelHeight + '%';

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