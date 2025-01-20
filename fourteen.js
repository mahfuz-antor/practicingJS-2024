const getSections = document.querySelectorAll('section')
console.log(getSections);

for(section of getSections) {
    section.style.border = '2px solid green';
    section.style.padding = '10px';
    section.style.margin = '10px';
    section.style.borderRadius = '10px'
}

const tourContainer = document.getElementById('tour-container');
tourContainer.style.backgroundColor = 'gray';
tourContainer.classList.add('test-style');
// tourContainer.classList.remove('test-style')

// creating element 
const getUl = document.getElementById('ulTour');
console.log(getUl);
const li = document.createElement('li');
li.innerText = 'creating new li';
getUl.appendChild(li);
li.classList.add('newLi');

// add a full section
const mainContainer = document.getElementById('main-container');
const nerSecion = document.createElement('section')
nerSecion.innerHTML = `
    <h1> Our Big City </h1>
    <ul> 
        <li> Dhaka </li>
        <li> Chottogram </li>
        <li> Rajshahi </li>
        <li> Khulna </li>
    </ul>
`
mainContainer.appendChild(nerSecion)