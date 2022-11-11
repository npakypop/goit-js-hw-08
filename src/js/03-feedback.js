import storageApi from './storage';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onSubmitBtn);
form.addEventListener('input', onFieldInput);

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

    event.target.reset();
    storageApi.remove(USER_DATA);
}