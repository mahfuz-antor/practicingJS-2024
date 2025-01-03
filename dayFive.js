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

// using for of loop to get element from array

for(let fruit of fruits) {
    console.log(fruit);
}

console.log('getting the last element of array: ' + fruits[fruits.length - 1]);

// get the element from an array using for loop

let fLen = fruits.length;
for(let i = 0; i < fLen; i++) {
    console.log('getting fruit name: ' + fruits[i]);
}

// accessing data from an Object
const objWithCars = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

for(let i in objWithCars.cars) {
    console.log(objWithCars.cars[i].name);
    for(let m in objWithCars.cars[i].models) {
        console.log(objWithCars.cars[i].models[m]);
    }
}
