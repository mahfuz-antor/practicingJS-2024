// js array method 

const fruits = ['apple', 'banana', 'mango', 'orange']

// array length
console.log(fruits.length); // 4

// array at()
let getThird = fruits[2];
console.log(getThird); // mango

// array join()
let getJoinElement = fruits.join(' * ');
console.log(getJoinElement); // apple * banana * mango * orange

// array pop()
let popFruits = fruits.pop()
console.log(fruits); // [ 'apple', 'banana', 'mango' ]

// array push()
fruits.push('grap')
console.log(fruits); // [ 'apple', 'banana', 'mango', 'grap' ]

// https://www.w3schools.com/js/js_array_methods.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array