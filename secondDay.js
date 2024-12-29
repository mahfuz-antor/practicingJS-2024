// condition making 
// 1st part ... if() {}
if(new Date().getHours() < 18) {
    console.log('Good Day!');
} 

// 2nd part.... if(){} else{}

const hour = new Date().getHours();
let greetings;

if(hour > 18) {
    greetings = 'Good Evening!';
    console.log(greetings);
} else {
    greetings = 'Good Day!';
    console.log(greetings);
}


// 3rd part ... if() {} else if() {} else{}

const time = new Date().getHours()
let thirdGreetings;

if(time < 10) {
    thirdGreetings = '3rd...Good Morning!';
    console.log(thirdGreetings);
} else if(time < 18) {
    thirdGreetings = "3rd...Good Day!";
    console.log(thirdGreetings);
} else {
    thirdGreetings = '3rd...Good Evening!';
    console.log(thirdGreetings);
}
