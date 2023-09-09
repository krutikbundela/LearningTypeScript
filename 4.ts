// Generics

function logAnything<kuchbhi>(arg: kuchbhi): kuchbhi{
    console.log(arg);

    return arg
 
// logAnything(arg: (string | number | boolean)[]): (string | number | boolean)[]
    
}

logAnything([1,'as',true])//whatever we'll pass 


// =====================================================================================


// find oldest person

interface HasAge{
    age:number;
}

// function getOldest(people: HasAge[]){
//     return people.sort((a,b) => b.age - a.age)[0];
// }

function getOldest<T extends HasAge>(people: T[]){
    return people.sort((a,b) => b.age - a.age)[0];
}

const people: HasAge[] = [{age:89} ,{age:99} ,{age:34} ,{age:56} ,]

getOldest(people).age;// op: 99



// =======

interface Player{
    name: string;
    age: number;
}

const players:Player[] = [
    {name: 'kkk', age : 30},
    {name: 'kkeedfk', age : 60},
    {name: 'kkdk', age : 20},
]

// Error::
// getOldest(players).name ; 

// Assertion
// const person = getOldest(players) as Player //forcefully type change krri this is  not advisable

// for that we can use generics

const person = getOldest(players)
// function getOldest<Player>(people: Player[]): Player


getOldest(people);
// function getOldest<{ age: number;}>(people: {age: number;}[]): {age: number;}




// ===============================================================================================





