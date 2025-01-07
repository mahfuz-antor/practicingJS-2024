const [a, b, ...rest] = [1, 2, 3, 4];
console.log(a); // 1
console.log(rest); // [3, 4]
// array spread

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]
console.log(combined);

// find the muximum value
const nums = [1, 7, 3, 4];
const max = nums.reduce((acc, num) => (num > acc ? num : acc), -Infinity); // 7
console.log(max);

// array like object
function example() {
    console.log(arguments); // Array-like
    const args = Array.from(arguments);
    console.log(args); // [1, 2, 3]
  }
  example(1, 2, 3);
  

  // js function
  function greetings(name) {
    console.log('Hello' + ' ' + name + '!');
  }
  greetings('Mahfuz') // Hello, Antor!

//   js arrow function 

const arrowGreet = (name) => {
    console.log('Hello, ' + name + '!');
}

arrowGreet('Antor') // Hello, Antor!

// anonymous function

setTimeout( anonyGreet = () => {
    console.log('Hello, anonymous! ');
}, 1000)

// closure function
const outer = () => {
    let count = 0;

    return function inner() {
            count++;
            console.log(count);
    }
}

const counter = outer();
counter();
counter();
counter();

// fetch data with api
async function fetchData () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const   data  = await response.json()
    console.log(data);
}

// fetchData()

// fetch data with api using arrow function 
const  arrowFetch = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log('*****From Arrow***',data);
}

arrowFetch()