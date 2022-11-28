const refs = {
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
    form: document.querySelector('.feedback-form')
}

refs.form.addEventListener = ('submit', onFormSubmit);
refs.email.addEventListener = ('input', onEmailInput);
refs.message.addEventListener = ('input', onMessageInput);

function onFormSubmit(evt){
    evt.preventDefault();
}

function onEmailInput(evt) {
    const value = evt.currentTarget.value;
    console.log(value);
}

function onMessageInput(evt) {
    const value = evt.currentTarget.value;
    console.log(value);
}