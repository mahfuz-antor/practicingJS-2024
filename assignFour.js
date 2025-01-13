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
    if(obj.name && obj.birthYear && obj.siteName !== undefined) {
        if(obj.birthYear >= 1000 && obj.birthYear <= 9999) {
                    // get site name value
    const siteNameData = obj.siteName;
    // get the first letter value
    const getZeroInd = obj.siteName[0];
    // uppercase the first letter
    const createCapLetter = obj.siteName[0].toUpperCase();
    // create the site name
    const capSiteName = siteNameData.replace(getZeroInd, createCapLetter)
    // creating the password
    const createPassword = capSiteName + '#' + obj.name + '@' + obj.birthYear;
    return createPassword;
        } else {
            return 'Invalid';
        }
    } else {
        return 'Invalid';
    }

}

const obj = { name: "kolimuddin" , birthYear: 1980 , siteName: "google" }
console.log(password(obj));

// problem no: 5
function monthlySavings(arr, livingCost) {
    // validate array and livingCost
    const checkArr = Array.isArray(arr)
    const checkLCost = typeof livingCost === 'number'
    if(checkArr === true && checkLCost === true) {
        // sum of total income
    const totalIncome =  arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    // getting tax
    let taxValue = [];
    for(let i of arr ) {
        if(i >= 3000) {
            const calTax = (20 / 100) * i;
            taxValue.push(calTax);
        }
    }
    const totalTax = taxValue.reduce((acc, current) => acc + current, 0)
    
    // calculate total savings
    const totalSavings = totalIncome - (totalTax + livingCost)
    if(totalSavings < 0) {
        return 'earn more!'
    } else {
        return totalSavings;
    }
    
    } else {
        return 'invalid input';
    }    
}
// set the erning money and costing
const getMoney = [ 1000 , 2000 , 2500 ]
const livingCost = 5000;
// calling the function
console.log(monthlySavings(getMoney, livingCost));


function percentage (percen, total) {
    const result = (percen / 100) * total
    console.log(result);
}

const percen = 20;
const total = 8500;

// percentage(percen, total)