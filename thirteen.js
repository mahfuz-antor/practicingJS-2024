let getH1 = document.getElementsByTagName('h1');
// console.log(getH1[0].innerText);

// get li
const liCollection = document.getElementsByTagName('li')
console.log(liCollection);

for(const li of liCollection) {
    // console.log(li.innerText);
    li.style.color = 'red';
    li.style.backgroundColor = 'skyblue'
}

let getPlaces = document.getElementsByClassName('places')
for(const liClass of getPlaces) {
    liClass.style.color = 'black';
    liClass.style.backgroundColor = 'tomato';
}


// querySelector
const getLiCollection = document.querySelectorAll('.places')
console.log(getLiCollection);

// getAttribute, setAttribute, getClassList

  