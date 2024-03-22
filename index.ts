// type numberArr=number[] | string[];

// function fetFirst(arr: numberArr){
//     return arr[0];
// }

    type User={
        name:string;
        age:number;
    }


const fetFirst = <T>(arr: T[])=>{
    return arr[0];
}

const swap=<T,U>(a:T,b:U):[U,T]=>{
    return [b,a];
}

let ans=fetFirst<number>([1,4,4]);
let ans1=fetFirst<string>(["a","f","j"]);//optional
let ans3=swap<string,number>("a",5);

// let ans2=fetFirst<User>([{name:"Abh",age:"20"},{name:"Akkkkh",age:"20"}])
ans1.toLowerCase()
console.log(ans3);