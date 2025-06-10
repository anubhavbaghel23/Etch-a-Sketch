const container = document.querySelector('.container');

const createGridButton = document.getElementById('createButton');




function createGrid(){

    const columns = parseInt(document.getElementById('columnInput').value);
    const rows = parseInt(document.getElementById('rowInput').value);

    const totalSquares = columns * rows;

    for(let i = 1; i < totalSquares; i++){

        if(columns <= 100 || rows <= 100){
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');

        container.appendChild(squareDiv);
        } else {
            return alert("Limit is 100 rows and 100 columns");
        } 
    }

    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;


}