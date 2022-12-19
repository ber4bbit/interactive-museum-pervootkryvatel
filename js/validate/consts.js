const userName = document.getElementById('user-name');
const userPhone = document.getElementById('user-phone');
const userEmail = document.getElementById('user-email');
const acceptSubmit = document.getElementById('accept-checkbox');
const acceptLabel = document.getElementById('checkboxIndcator');
const submitBtn = document.getElementById('submit-btn');
const errorTextArray = document.querySelectorAll('.form__error-text');
const inputsArray = document.querySelectorAll('.contact-input');
const feedBackForm = document.getElementById('feedBack-form');

const request = {
    userName : '',
    userPhone: '',
    userEmail: ''
}