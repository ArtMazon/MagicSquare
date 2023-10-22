

let magicSquare = emptySquare(3);

completeWalk([1,2],[1,1],3);

/* let rowPosition = 0;
let columnPosition = 0;

let walkNumber = 0

simpleWalk(1,2,3);

console.log(magicSquare);

rowPosition = 2 ;
columnPosition = 1;

walkNumber = 3

simpleWalk(1,2,3);
console.log(magicSquare);

rowPosition = 1;
columnPosition = 2;

walkNumber = 6 

simpleWalk(1,2,3); */

console.log(magicSquare);


console.log(magicSquare[0]);
console.log(magicSquare[1]);
console.log(magicSquare[2]);

magicSquare = emptySquare(5);
completeWalk([1,2],[1,1],5);
console.log(magicSquare);

printSquare(magicSquare);

createMagicSquare(7);

console.log(magicSquare);

printSquare(magicSquare);

let magicSquareContainer = document.querySelector(".magicSquareContainer");
let magicSquareUI = document.querySelector(".magicSquare");
console.log(magicSquareUI === null);



console.log(magicSquareContainer === null);

console.log(magicSquareContainer);
let testDiv = document.createElement("div");

magicSquareContainer.appendChild(testDiv);


createSquareUI(3);
createSquareUI(5)







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

        rowPosition = (i*positionInstruction[0] )% size ;
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

