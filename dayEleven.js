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
    const genNum = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(genNum);
}

ranNumber(10, 20)