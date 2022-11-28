const refs = {
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
    form: document.querySelector('.feedback-form')
}
const FORM_VALUE = 'feedback-form-state';
const formValue = {
    email: '',
    message: ''
};
const parsedValue = JSON.parse(localStorage.getItem('FORM_VALUE'));

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', onEmailInput);
refs.message.addEventListener('input', onMessageInput);

savedValue(parsedValue);

function onFormSubmit(evt){
    evt.preventDefault();
    localStorage.removeItem('FORM_VALUE');
    evt.currentTarget.reset()
}

function onEmailInput(evt) {
    formValue.email = evt.currentTarget.value;
    localStorage.setItem('FORM_VALUE', JSON.stringify(formValue))
}

function onMessageInput(evt) {
    formValue.message = evt.currentTarget.value;
    localStorage.setItem('FORM_VALUE', JSON.stringify(formValue))
}

function savedValue(parsedValue) {
    const { email, message } = parsedValue;
    refs.email.value = email;
    refs.message.value = message;
}