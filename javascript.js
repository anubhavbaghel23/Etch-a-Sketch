const container = document.querySelector('.container');

const createGridButton = document.getElementById('createButton');


function randomColorSelector(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


function createGrid(){

    const columns = parseInt(document.getElementById('columnInput').value);
    const rows = parseInt(document.getElementById('rowInput').value);

    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    const totalSquares = columns * rows;

    for(let i = 1; i < totalSquares; i++){

        if(columns <= 100 && rows <= 100){
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');

        squareDiv.addEventListener('mouseenter', () => {
            squareDiv.style.backgroundColor = randomColorSelector();
        });

        container.appendChild(squareDiv);
        } else {
            return alert("Limit is 100 rows and 100 columns");
        } 
    }

    

}


