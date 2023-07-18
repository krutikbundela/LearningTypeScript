//Interface:

interface Transaction {
    payerAccNumber : number;
    payeeAccNumber : number;
} 



interface BankAccount {
    accNumber: number;
    accHolder: string;
    balance: number;
    isActive: boolean;
    transactions: Transaction[]
}


const transaction1: Transaction ={
    payerAccNumber:123,
    payeeAccNumber:456,
}
const transaction2: Transaction ={
    payerAccNumber:7899,
    payeeAccNumber:468,
}

const bankAccount:BankAccount = {
    accNumber: 809809 ,
    accHolder: "jejoi",
    balance: 78999,
    isActive:true,
    transactions:[transaction1,transaction2]
}


// ==================================================================================================


// Extend

interface Book {
    name : string;
    price: number;
}

interface Ebook extends Book{
    //take 2 properties of Book name & Price
    fileSize:number;
    format : string;
}

interface AudioBook extends Ebook{
    // take 4 properties of  Ebook
    // name,price ,fileSize, format
    duration:number;
} 

const book :AudioBook = {
    name: 'Atomic Habits',
    price: 456,
    fileSize: 666,
    format : 'mp3',
    duration: 4
}




// ==================================================================================================


// merge

// 2 interfaces with same name it will merge

interface student{
    name: string,
    age: number
}

interface student{
    std: number,
    div: string,
}

const  STUDENT : student = {
    name:'krutik',
    age:88,
    std:10,
    div: 'a'
}


// type vs interfaces


// 1. type maa merge nai thaai

// type student = {
//     name: string,
//     age: number
// }

// type student = {
//     std: number,
//     div: string,
// }

// Error  = duplicate identifier 'student'


// 2. single var j use krvo hoi tenaa maate interface use nai thaai

// type krutik = string;

// interface Krutik extends string {
//     Error : An interface can't extend a primitive type like 'string'
//     interface can only extends name type and classes
// }










