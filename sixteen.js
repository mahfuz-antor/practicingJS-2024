function checking () {
    console.log('just chceking....');
}

// create an object with input field values
let signUpData = []

document.getElementById('update-btn').addEventListener('click', function(){
   

    const getName = document.getElementById('name').value.trim();
    const getEmail = document.getElementById('email').value.trim().toLowerCase();
    const getpassword = document.getElementById('password').value.trim()
    console.log(getName, getEmail, getpassword);
    const setData = {
        name: getName, email: getEmail, password: getpassword
    }

    // signUpData.push(setData)
    console.log('setData == ', setData.email);

    // exists mail
    const emailExist = signUpData.some(user => user.email === setData.email);
    
    // get element
//    console.log(signUpData.length < 0);
   if(signUpData.length > 0) {

    if(emailExist) {
        alert('Already used this mail')
    } else {
        signUpData.push(setData)
    }
} else {
    
     signUpData.push(setData)
   }

   console.log(signUpData);
   localStorage.setItem('signUpData', JSON.stringify(signUpData))
})

// login part start

document.getElementById('loginBtn').addEventListener('click', async function() {

    try{
        const getLogEamil = document.getElementById('loginEmail').value.trim();
    const getLogPass = document.getElementById('loginPass').value.trim();
    // console.log(getLogEamil, ' ',  getLogPass);
    let storeData =  await getStoredUserData()

    const getEamil = storeData.some(user => user.email === getLogEamil);
    const getPass = storeData.some(user => user.password === getLogPass)
    

    
    if(getEamil && getPass) {
        console.log('login success');
    } else {
        console.log('invalid email and password');
    }
    } catch (error) {
        console.log(error);
    }

    
})

    // Simulated async function to fetch stored data
    async function getStoredUserData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = JSON.parse(localStorage.getItem('signUpData'));
                resolve(data);
            }, 1000);  // Simulating a delay (e.g., reading from a database)
        })
    } 

