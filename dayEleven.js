// finding the longest word 

const findLongWord = (str) => {
    console.log(str);
    const getStr = str.trim().split(/\s/)
    console.log(getStr);
    return getStr.reduce((largest, current) => {
        return current.length > largest.length ? current : largest;
    })
}

const cheking = findLongWord('I love Bangladesh from other country')
console.log(cheking);