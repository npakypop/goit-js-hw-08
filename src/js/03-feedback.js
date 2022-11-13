import storageApi from './storage';
var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onSubmitBtn);
form.addEventListener('input', throttle(onFieldInput, 250));

const USER_DATA = "feedback-form-state";


function fillInputFields() { 
   
    const a = storageApi.load(USER_DATA)
    
    for (const key in a) {
        if (a.hasOwnProperty(key)){ 
            form.elements[key].value = a[key];
        }
    }
}
fillInputFields()


function onFieldInput(event) {
    const userInput = localStorage.getItem(USER_DATA) ? storageApi.load(USER_DATA) : {};
    const { target } = event;

    const name = target.name;
    const value = target.value;
    
    userInput[name] = value;
    
    storageApi.save(USER_DATA, userInput)
    // localStorage.setItem('USER_DATA', JSON.stringify(userInput));
}


function onSubmitBtn(event) { 
    event.preventDefault();
    const formData = new FormData(form);
    for (const [, value] of formData) { 
        if (!value) { 
            alert('Please fill all the fields');
            return;
        }
    }
    console.log(JSON.parse(localStorage.getItem(USER_DATA)));
    event.target.reset();
    storageApi.remove(USER_DATA);
}