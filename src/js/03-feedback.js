import storageApi from './storage';
var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', throttle(onSubmitBtn, 250));
form.addEventListener('input', throttle(onFieldInput, 250));

const USER_DATA = "feedback-form-state";

const userInput = {};

function onFieldInput(event) {
    const { target } = event;

    const name = target.name;
    const value = target.value;
    
    userInput[name] = value;
    
    storageApi.save(USER_DATA, userInput)
    // localStorage.setItem('USER_DATA', JSON.stringify(userInput));
}

function fillInputFields() { 
    const a = storageApi.load(USER_DATA)
    
    for (const key in a) {
        if (a.hasOwnProperty(key)){ 
            form.elements[key].value = a[key];
        }
    }
}
fillInputFields()

function onSubmitBtn(event) { 
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(USER_DATA)));
    event.target.reset();
    storageApi.remove(USER_DATA);
}