// ternary operator 
const age = 10;
const isVoter = age >= 18 ? 'You are a voter' : 'You are not a voter';
console.log(isVoter);

const greetings = (person) =>  {
    const name = person ? person.name : 'stranger';
    return `Howdy, ${name}`
}

console.log(greetings({name: 'Mahfuz Antor'}));

// multiple condition for ternary operator

function getRealVoter(name) {
    // console.log(name == number);
    return name == 'Mahfuz' ? 'Your are the coder!' 
    : name == 'Esrat'  ? 'You are the Genius housewife'
    :name == 'Antor' ? 'The another name of Mahfuz'
    : typeof name ==  'number' ? 'Please insert a text value'
    : 'Please type the proper value'
}

console.log(getRealVoter(88));