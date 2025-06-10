const container = document.querySelector('.container');
const changeGridButton = document.getElementById('changeGridButton');
const buttonsDiv = document.getElementById('buttonsDiv');
const buttons = document.getElementsByClassName('buttons');
const resetButton = document.getElementById('resetButton');

document.body.style.display='flex';
document.body.style.flexDirection= 'column';
document.body.style.alignItems= 'center';

//styles for container div
container.style.display= 'grid';
container.style.height= '600px';
container.style.width= '600px';
container.style.border='1px solid grey';


//Styles for Change grid size button
for (let button of buttons) {
  button.style.color = 'rgb(250, 253, 255)';
  button.style.borderRadius = '50px';
  button.style.padding = '6px 10px';
  button.style.backgroundColor = 'rgb(0, 136, 255)';
  button.style.fontFamily = 'Arial, Helvetica, sans-serif';
  button.style.border = 'none';
  button.style.fontSize = '16px';
  button.style.margin = '15px';
}

//This will form initial grid
let initialGridSize = 16 * 16;
container.style.gridTemplateColumns = `repeat(16, 1fr)`;

for(let i = 0; i < initialGridSize ; i++){
    const initialGrid = document.createElement('div');
    initialGrid.style.aspectRatio= '1 / 1';

    container.appendChild(initialGrid);

    initialGrid.classList.add('initialGrid');

    initialGrid.addEventListener('mouseenter', () => {
            initialGrid.style.backgroundColor = randomColorSelector();
        });
    
    container.style.gridTemplateColumns = `repeat(16, 1fr)`;
    container.style.gridTemplateRows = `repeat(16, 1fr)`;
}



//Selects random color by generating random RGB values individually
function randomColorSelector(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeGridSize(){
    
    const inputGridSize = parseInt(prompt("Enter Grid Size (Limit is 100)"));

    if (isNaN(inputGridSize) || inputGridSize <= 0 || inputGridSize > 100) {
        alert("Please enter a valid number between 1 and 100");
        return;
    }

    container.replaceChildren();
    container.style.gridTemplateColumns = `repeat(${inputGridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${inputGridSize}, 1fr)`;

    const totalGrids = inputGridSize * inputGridSize;

    

    for(let i = 0; i < totalGrids; i++){
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');

        squareDiv.addEventListener('mouseenter', () => {
            squareDiv.style.backgroundColor = randomColorSelector();
        });

        container.appendChild(squareDiv); 
    }
}

function resetGridSize (){
    container.replaceChildren();

    for(let i = 0; i < initialGridSize ; i++){
    const initialGrid = document.createElement('div');
    initialGrid.style.aspectRatio= '1 / 1';

    container.appendChild(initialGrid);

    initialGrid.classList.add('initialGrid');

    initialGrid.addEventListener('mouseenter', () => {
            initialGrid.style.backgroundColor = randomColorSelector();
        });

    container.style.gridTemplateColumns = `repeat(16, 1fr)`;
    container.style.gridTemplateRows = `repeat(16, 1fr)`;
}


}

changeGridButton.addEventListener('click', () => {
    changeGridSize();
});

resetButton.addEventListener('click', () =>{
    resetGridSize();
})



