// JS Array Iteration 
// array forEach()
const numArr = [10, 22, 44, 11, 12, 30]

let getArrNums = ' ';
numArr.forEach(numsFun)
function numsFun(value, index, array) {
    getArrNums += value + ' ';
}
    console.log(getArrNums); //  10 22 44 11 12 30

numArr.forEach((element) => {
    console.log(element);  // 10 22 44 11 12 30
});