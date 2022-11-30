const refs = {
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
    form: document.querySelector('.feedback-form')
}
const FORM_VALUE = 'feedback-form-state';
const parsedValue = JSON.parse(localStorage.getItem('FORM_VALUE'));

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', onTextInput);
refs.message.addEventListener('input', onTextInput);

savedValue()

function onFormSubmit(evt) {
    evt.preventDefault();
    if (refs.message.value === '') {
        alert('заповніть message');
        return
    }
    if (refs.email.value === '') {
        alert('заповніть email');
        return
    }
    console.log(parsedValue);
    localStorage.removeItem('FORM_VALUE');
    evt.currentTarget.reset();
}

function onTextInput(evt) {
    if (evt.target.name === 'email') {
        parsedValue.email = evt.target.value;
    }
    if (evt.target.name === 'message') {
        parsedValue.message = evt.target.value;
    }
    localStorage.setItem('FORM_VALUE', JSON.stringify(parsedValue))
}

function savedValue() {   
    if (parsedValue) {
        const { email, message } = parsedValue;
        refs.email.value = email;
        refs.message.value = message;
    }
}