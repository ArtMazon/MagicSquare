

let magicSquare;

let magicSquareContainer = document.querySelector(".magicSquareContainer");

createSquareUI(3);
createSquareUI(5);
addValuesToSquare(5);

createSquareUI(3);
addValuesToSquare(3);






function createMagicSquareUI(size) {

    createSquareUI(size);
    addValuesToSquare(size);
    
}



function addValuesToSquare(size) {

    createMagicSquare(size);
    let magicSquareUI = document.querySelector(".magicSquare");

    console.log(magicSquareUI);


    for(let i = 0 ; i < size ; i++){
        let row = magicSquareUI.querySelector(`.row${i}`)

        for(let j = 0; j < size; j++){
            let column = row.querySelector(`.column${j}`);

            console.log(j);

            console.log(column);

            column.textContent=magicSquare[i][j];
        }


    }

    
}






function createSquareUI(size) {

    let auxRemove = document.querySelector(".magicSquare")

    magicSquareContainer.removeChild(auxRemove);

    let magicSquare = document.createElement("div")

    magicSquare.classList.add("magicSquare");

    magicSquare = addRows(magicSquare,size);

    magicSquareContainer.appendChild(magicSquare);

    console.log((magicSquare));


    
}

function addRows(documentElement,size) {

    for(let i = 0; i < size ; i ++){

        const divAux = document.createElement("div");
        rowToAdd = addColumns(divAux,size);
        rowToAdd.classList.add(`row`,`row${i}`);
        documentElement.appendChild(rowToAdd);
    }

    return documentElement


    
}




function addColumns(documentElement,size) {



    for(let i = 0 ; i < size ; i++){
        const divToAdd = document.createElement("div");
        divToAdd.classList.add(`column`, `column${i}`);
        documentElement.appendChild(divToAdd);

    }

    return documentElement
    
}


function createMagicSquare(squareSize) {

    magicSquare = emptySquare(squareSize);

    completeWalk([1,2],[1,1],squareSize);

    
}

function printSquare(Square) {
    Square.forEach(element => {

        console.log(element);
        
    });
    
}

function completeWalk(walkInstruction,positionInstruction,size) {

    let rowPosition = 0;
    let columnPosition = 0;



    for(let i = 0; i <size ; i++){

        rowPosition = (i*positionInstruction[0]  )% size ;
        columnPosition = (i*Math.abs(size-positionInstruction[1]) )% size ;

        simpleWalk(walkInstruction[0],walkInstruction[1],size,[rowPosition,columnPosition],i);


    }

    
}


function emptySquare(squareSize) {

    const emptySquare = Array(squareSize);

    for(let i = 0 ; i < squareSize;i++){
        emptySquare[i]=Array(squareSize);
    }

    return emptySquare;
    
}

function simpleWalk(rightUnits,upUnits,walkLength,positionArray,walkNumber) {


    let walkValue = walkNumber*walkLength;
    let rowPosition = positionArray[0];
    let columnPosition = positionArray[1];
    for(let i = 0 ; i < walkLength ; i++){
        

        

        let upUnitsAux = (Math.abs(walkLength-upUnits)*i + columnPosition)% walkLength ;
        let rightUnitsAux = ((rightUnits*i) + rowPosition )% walkLength; 

        magicSquare[rightUnitsAux][upUnitsAux] = i + 1 + walkValue ;

        

    }




    
}

