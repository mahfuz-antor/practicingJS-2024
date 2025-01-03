// array method 
const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length); // 3

// get extra length 
fruits[5] = 'mango'

console.log(fruits.length); // 6
console.log(fruits[5]); // mango
console.log(fruits[4]); // undefined
console.log(Object.keys(fruits)); // [ '0', '1', '2', '5' ]

// get more length
fruits.length = 10;
console.log(fruits.length); // 10
console.log(fruits); // [ 'banana', 'apple', 'peach', <2 empty items>, 'mango', <4 empty items> ]

// using for loop to get element from array

