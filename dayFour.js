// for loop 
for (i = 1; i <= 10; i++) {
    console.log('for loop: ' + i);
}

// while loop 

let countWhile = 1;
while (countWhile <= 15) {
    console.log('while loop: ' + countWhile);
    countWhile++;
} 

// do while loop 

let countDoWhile = 16;
do{
    console.log('do while loop: ' + countDoWhile);
    countDoWhile++;
} while(countDoWhile <= 25)


// for in loop
let person = {name: 'Mahfuz', age: 25}
for (let key in person) {
    console.log(key + ' : ' + person[key]);
}

// for of loop

let numbersArray = [10, 30, 20, 50, 80,100]
for (let num of numbersArray) {
   console.log(num);
}