// js problem solving
// finding the longest word 

const findLongWord = (str) => {
    console.log(str);
    const getStr = str.trim().split(/\s/)
    console.log(getStr);
    return getStr.reduce((largest, current) => {
        return current.length > largest.length ? current : largest;
    })
}

const cheking = findLongWord('I am learning Programming to become a programmer')
console.log(cheking);

// random number generator
const ranNumber = (min, max) => {
    const genRandomNum = Math.floor(Math.random() * (max - min + 1) + min)
    return genRandomNum;
}

const tenToTwenty = ranNumber(10, 20);
const fiftyToHundred = ranNumber(50, 100);
console.log(tenToTwenty);
console.log(fiftyToHundred);

// calculator functions;
// const additionFun = (numArr) => {
//     console.log(numArr);
//     let total = numArr[0] + numArr[1] + numArr[2]
//     console.log(total);
//     for(let i of numArr) {
//         console.log(i[0], i[1] , i[2]);
//     }
// }

// let inputNums = [10, 20, 10]

// additionFun(inputNums);

const calculate = (num1, num2, operator) => {
    let result = 0;
    if(operator === '+') {
        return result = num1 + num2;
    }

    if(operator === '-') {
        return result = num1 - num2;
    }

    if(operator === '*') {
        return result = num1 * num2;
    }

    if(operator === '/') {
        return result = num1 / num2;
    }
    return result;
}

console.log(calculate(10, 20, '+'));
console.log(calculate(10, 20, '-'));
console.log(calculate(10, 20, '*'));
console.log(calculate(10, 20, '/'));