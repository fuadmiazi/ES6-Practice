// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFunc(num){
//     return num*2;
// }

const doubleIt = num => num*2;
const add = (x,y) => x+y;
const give5 = () =>5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum*diff;
    return result;
}

const result = add(5,21);
const result2 = give5();
const result3 = doMath(19,7);
console.log(result);
console.log(result2);
console.log(result3);