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

// 4th part nested conditional... 

const gender = 'female';
const age = 22;
const student = true;
const futureTarget = true;
const entrepeneur = true;

if(gender == 'male') {
    console.log('Welcome in the male zone');
    if(age > 20) {
        console.log('Your age is enough  to jump the next plane!');
        if(student == true) {
            console.log('You are a student. It"s right time to start');
            if(entrepeneur == true) {
                console.log('You are an entrepeneur. You can chnage the world!');
            }
        }
    }
} else if(gender == 'female') {
    console.log('Welcome in the female zone!');
    if(age > 20) {
        console.log('Your age is enough  to jump the next plane!');
        if(student == true) {
            console.log('You are a student. It"s right time to start');
            if(entrepeneur == true) {
                console.log('You are an entrepeneur. You can chnage the world!');
            }
        }
    }

} else {
    console.log('This project is only for male and female.');
}