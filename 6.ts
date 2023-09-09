//Structural Typing or Duck Typing
// If two object has same props or methods then it's same type

interface ICredentials{
    username:  string;
    password: string;
    isAdmin?: boolean;
}

function login(credentials: ICredentials): boolean{
    console.log(credentials);

    return true;
}

const user = {
    username:'krutik',
    password:'bhjhj',
    isAdmin:true,
}
// const user:ICredentials = {
//     username:'krutik',
//     password:'bhjhj',
//     isAdmin:true,
// }

login(user);


//============================================
interface IAuth{
    username:string;
    password:string;
    login(username:string,password:string):boolean;
} 
const auth: IAuth = {
    username:'krutik',
    password:'secrettt',
    login(usernamee:string , password:string){
        return true;
    }
}


//========================================

//inference
//automatically set type of initialized variable

let num = 7; //let num: number
let x = 'krutik'; //let x: string

//===================================================

// to make tsconfig.json
//tsc --init

// after we get tsconfig.json
//tsc
//we'll get all TS file's JS files. 