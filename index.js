"use strict";
// type numberArr=number[] | string[];
const fetFirst = (arr) => {
    return arr[0];
};
const swap = (a, b) => {
    return [b, a];
};
let ans = fetFirst([1, 4, 4]);
let ans1 = fetFirst(["a", "f", "j"]); //optional
let ans3 = swap("a", 5);
// let ans2=fetFirst<User>([{name:"Abh",age:"20"},{name:"Akkkkh",age:"20"}])
ans1.toLowerCase();
console.log(ans3);
