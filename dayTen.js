// js problem solving
// celsius to fahrenheit

const celToFahren = (cel) => {
    const convertCel = (9/5) * cel + 32;
    return convertCel;
}
const todayTem = celToFahren(38)
console.log(todayTem);

// count a number how many times uses an array
const numbersArr = [10, 14, 19, 10, 20, 44]

const getMatchNum = (arr, num) => {
    // const findNum = arr.find(item => item === num)
    // console.log(findNum);
    let getValue = []
    arr.forEach(element => {
        if(element == num) {
            getValue.push(element)
        }
    });

   return console.log(getValue.length);
}
getMatchNum(numbersArr, 20);

// a function to count  vowels
const countVowels = (word) => {
    let vowles = []
    const wordToArr = word.split('');
    wordToArr.forEach(element => {
        if(element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
            vowles.push(element)
        }

    })
    return console.log(vowles.length);
}
countVowels('aeiou')