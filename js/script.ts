console.log('script.js loaded...');


/* Sketch Elements
___________________________________*/
const sketchContainer = document.querySelector('.sketch-container') as HTMLElement;
const containerWidth = sketchContainer.offsetWidth;
const containerHeight = sketchContainer.offsetHeight;
const resetButton = document.querySelector('.sketch-options__reset') as HTMLButtonElement;


/*Settings
___________________________________*/
const settingsBox = document.querySelector('.settings-box') as HTMLElement;
const settingsForm = document.querySelector('.settings_form') as HTMLFormElement;
const sizeInput = document.querySelector('.settings_size') as HTMLInputElement;
let gridSize: number;
let pixelWidth: number;
let pixelHeight: number;

settingsForm.addEventListener('submit', function(e){
  e.preventDefault();

  let newGrid: number = Number(sizeInput.value);
  let formIsValid = validateSize(newGrid);

  if(formIsValid){
    init(newGrid);
  } else {
    formError();
  }
});

resetButton.addEventListener('click', reset);

function init(gridSize: number): void{
  setGridSize(gridSize);
  pixelWidth = 100 / gridSize;
  pixelHeight = pixelWidth;

  populateGrid();
  addGridListeners();
  toggleSettings();
  toggleSketchContainer();
}

function formError(): void{
  alert('Values must be between 1 and 100!');
}

function validateSize(size: number): boolean{
   return (size >= 1 && size <=100 )
}

function toggleSettings(): void{
  settingsBox.classList.toggle('hidden');
}

function toggleSketchContainer(): void{
  sketchContainer.classList.toggle('hidden');
}

function setGridSize(newValue: number): void {
  gridSize = newValue;
}

function reset(): void{
  toggleSketchContainer();
  toggleSettings();
  sketchContainer.textContent = '';
}

/* Pixel creation
___________________________________*/
function createPixel(): HTMLElement {
  //create a pixel of the sketch pad
  let pixel = document.createElement('div');
  pixel.setAttribute('class', 'pixel');
  pixel.style.width = pixelWidth + '%';
  pixel.style.height = pixelHeight + '%';

  return pixel;
}

function attachPixel(pixel: HTMLElement){
  sketchContainer.append(pixel);
}

function populateGrid(): void{
  for(let i = 0; i < gridSize; i++){
    for(let j = 0; j < gridSize; j++){
      let newPixel = createPixel();
      attachPixel(newPixel);
    }
  }
}

function addGridListeners(): void{
  sketchContainer.addEventListener('mouseover', function(e: Event){
    const target = e.target as HTMLElement;

    if (target.classList.contains('pixel')) {
      target.classList.add('pixel--filled');
    }
  });
}