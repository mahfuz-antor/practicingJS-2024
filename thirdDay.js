// ternary operator 
const age = 10;
const isVoter = age >= 18 ? 'You are a voter' : 'You are not a voter';
console.log(isVoter);

const greetings = (person) =>  {
    const name = person ? person.name : 'stranger';
    return `Howdy, ${name}`
}

console.log(greetings({name: 'Mahfuz Antor'}));