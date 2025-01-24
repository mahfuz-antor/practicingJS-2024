function checking () {
    console.log('just chceking....');
}

// create an object with input field values
let signUpData = [
    
]

document.getElementById('update-btn').addEventListener('click', function(){
    // const getInputText = document.getElementById('name');
    // console.log(getInputText.value);
    // const getShowTextField = document.getElementById('showText');
    // getShowTextField.innerText = getInputText.value;
    // getInputText.value = '';

    const getName = document.getElementById('name');
    const getEmail = document.getElementById('email');
    const getpassword = document.getElementById('password');
    console.log(getName.value, getEmail.value, getpassword.value);
    const setData = {
        name: getName.value, getEmail: getEmail.value, password: getpassword.value
    }
    console.log(setData);
    signUpData.push(setData)
    console.log('get Total Data: ', signUpData);
})
