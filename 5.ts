//Generics In APIs
interface IPost{
    title:string;
    id:string;
    description:string;
}
interface IUser{
    id:string;
    name:string;
    age:number;
}

// const fetchPostData = async(path:string):Promise<IPost[]> =>{
//     const res = await fetch(`http://example.com${path}`);
//     return res.json();
// };

// const fetchUserData = async(path:string):Promise<IUser[]> =>{
//     const res = await fetch(`http://example.com${path}`);
//     return res.json();
// };

// Promise<IPost[]> Async function always Promise return kree

// Above we're repeating same thing

const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const res = await fetch(`http://example.com${path}`);
  return res.json();
};

(async () =>{
    // const posts = await fetchPostData('/post');
    // posts[0].id; //we can get suggestions

    // const users = await fetchUserData('/post');
    // users[0].age; //we can get suggestions

    const user = await fetchData<IUser[]>('/users');
    user[0].age;

    const post = await fetchData<IPost[]>('/posts');
    post[0].description;
})();
