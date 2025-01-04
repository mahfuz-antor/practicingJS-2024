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

// array shift()
fruits.shift()
console.log(fruits); // [ 'banana', 'mango', 'grap' ]

// array unshift()
fruits.unshift('apple')
console.log(fruits); // [ 'apple', 'banana', 'mango', 'grap' ]

// array length for add an element 
fruits[fruits.length] = 'kiwi'
console.log(fruits); // [ 'apple', 'banana', 'mango', 'grap', 'kiwi' ]

// array delete
delete fruits[fruits.length -1]
console.log(fruits); // [ 'apple', 'banana', 'mango', 'grap', <1 empty item> ]

// array concat()
const boys = ['akash', 'batas', 'sagor', 'mohasagor']
const girls = ['borsha', 'vorsa', 'bristy', 'sristy']

const getBoysGirls = boys.concat(girls)
const newElement = getBoysGirls.concat('Abul')
console.log(getBoysGirls); // ['akash',  'batas','sagor',  'mohasagor','borsha', 'vorsa', 'bristy', 'sristy']
console.log(newElement); // ['akash',  'batas','sagor',  'mohasagor','borsha', 'vorsa', 'bristy', 'sristy', 'Abul']

// array copyWithin() 
const copyFruits = ["Banana", "Orange", "Apple", "Mango", 'Grap', "Lychee", "Blackberry"];
console.log(copyFruits.copyWithin(3,1)); // ["Banana", "Orange", "Apple", ""Orange", "Apple", "Mango", "Grap"];

// array flat()
const arraysNum = [[1,2],[3,4],[5,6]];
const allArrays = arraysNum.flat();
console.log(allArrays); // [ 1, 2, 3, 4, 5, 6 ]

// array flatMap()
const arrFlatMap = allArrays.flatMap(x => [x, x * 10])
console.log(arrFlatMap); // [1,10,2,20,3,30,4,40,5,50,6,60]

//array splice()
const fruitsForSplice = ["Banana", "Orange", "Apple", "Mango"];
let arrSpice = fruitsForSplice.splice(2, 1, "Lemon", "Kiwi"); // [ 'Apple' ]
console.log(fruitsForSplice); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]

// array toSplice() 
const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);
// console.log(spliced); // ["Feb", "Mar", "Apr"] But VSCode doesn't work toSpliced() method

// array slice()
const sliceMonths = months.slice(2)
console.log(sliceMonths); // [ 'Mar', 'Apr' ]
const sliceMonTwo = months.slice(1, 2) 
console.log(sliceMonTwo); // ["Feb"]

