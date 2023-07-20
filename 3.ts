// Unions 
type ID = number | string;

//Narrowing

function printId(id: ID){
    if (typeof id === 'string'){
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }
}


printId('krutik') // OP: KRUTIK

// ===========================

function getFirstThree(x: string | number[]){
    return x.slice(0,3)
    // function no return type pnn jaate jj define krrii lese
}

console.log(getFirstThree('krutik'));



