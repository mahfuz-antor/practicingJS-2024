// Problem no:1
function calculateMoney (ticketSale) {
    if(ticketSale < 0) {
        return 'Invalid Number! Please input the positive value.'
    } else {
        const getTotalMoney = (ticketSale * 120) - (500 + (8 * 50))
        return getTotalMoney;
    }
}

const tenTickets = calculateMoney(10);
console.log(tenTickets);

// Problem No:2
function checkName(name) {
    if(typeof name === 'string') {
        const getLastIndex = name.length -1;
        const getLastValue = name[getLastIndex];
        if(getLastValue === 'a' || getLastValue === 'A' || getLastValue === 'y' || getLastValue === 'Y' || getLastValue === 'i' || getLastValue === 'I' || getLastValue === 'e' || getLastValue === 'E' || getLastValue === 'o' || getLastValue === 'O' || getLastValue === 'u' || getLastValue === 'U' || getLastValue === 'w' || getLastValue === 'W') {
           return 'Good Name'
        } else {
           return 'Bad Name'
        }
    } else {
        return 'invalid'
    }

    
}

console.log(checkName('Jhankar'));

// Problem no: 3
function deleteInvalids(array) {
    const checkArray = Array.isArray(array)
    if(checkArray === true) {
        const getNewArr = array.filter(function (item) {
            if(typeof item === 'number') {
                return item;
            }
           })
           return getNewArr;
    } else {
        return 'Invalid Array'
    }
}
const checkingArr = [10, 50, 20, '3', undefined, 40, 'sting', {name: 'mahfuz'}]
console.log(deleteInvalids(checkingArr));

// Problem no: 4
function password(obj) {
    console.log(obj);
}

const obj = { name: "kolimuddin" , birthYear: 1999 , siteName: "google" }
password(obj)