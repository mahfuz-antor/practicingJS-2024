// array searching 

// array indexOf()
const fruits = ['apple', 'banana', 'carrot', 'orange', 'papaya', 'grap']

let getAppleInd =  fruits.indexOf('apple') + 1;
console.log(getAppleInd); // 1

// array includes()
console.log(fruits.includes('banana')); // true

// array find()

const numbersArr = [10, 12, 14, 15, 17, 20, 25]
function getFindFun (value, index, array) {
    return value > 20;
}
let getFirstVal = numbersArr.find(getFindFun)
console.log(getFirstVal); // 25
// findIndex()
let getFindInd = numbersArr.findIndex(getFindFun)
console.log(getFindInd); // 6


// array sort() / toSorted()
console.log(fruits.sort()); // [ 'apple', 'banana', 'carrot', 'grap', 'orange', 'papaya' ]

// array reverse() / toReversed()
console.log(fruits.reverse()); // [ 'papaya', 'orange', 'grap', 'carrot', 'banana', 'apple' ]

// numeric sort()
const numericArr = [10, 3, 11, 5, 20, 13, 33, 22]
let nemericSort = numericArr.sort(function(a,b){ return a - b})
console.log(nemericSort); // [ 3, 5, 10, 11, 13, 20, 22, 33 ]

// array random sort

const points = [40, 100, 1, 5, 25, 10];
let getRandomNum = points.sort(function(){return 0.5 - Math.random()});
console.log(getRandomNum);