let num3:number = 10 // basically giving type to a variable

function calc(num1 : number,num2 : number){
    return num1 + num2;
}
// console.log("file: 1.ts:8 ~ calc('3',5);:", calc('3',5));
// give error=== 1.ts:7:50 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log("file: 1.ts:8 ~ calc('3',5);:", calc(3,5));

// to compile this => tsc 1.ts  then run == node 1.js file

// we dont run typescript in development it is just for developer experience




//===============================================================================================================



// type var = {}  === shape of object

// DataTypes = any,string number , string[] , number[] , boolean

// type === Type Alias (just like c language struct keyword) , 
type User ={
    name : string;
    age: number;

    address?: string;  //? address nai hsse to b chaalse === address?: string | undefined

    DOB ?: Date | string | number // DOB can be Date OR string OR number

    krutik ?: any   // it can be ANYTHING ,stop further checking it can be string , number ,array 
}

function login(USerData:User):User{ // function type is User
    // return "krutik";  // error 
    return USerData;
}

const User : User ={
    name:'krutik',
    age: 20,
}

console.log("file: 1.ts:28 ~ login ~ login:", login(User));



//===============================================================================================================



// Interface

