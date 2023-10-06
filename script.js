let emailForm = document.querySelector('.form__input');
let errorText = document.querySelector('.error-text');
let errorTextMobile = document.querySelector('.error-text-mobile');
let submitBtn = document.querySelector('.form__button');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  let email = emailForm.value;

  if (!(email.includes('@')) || email === '') {
    if (window.innerWidth < 768) {
        errorTextMobile.classList.add('triggered');
    } else {
        errorText.classList.add('triggered');
    }
    emailForm.style.border = '1px solid var(--secondary-light-red)';
  }
});

emailForm.addEventListener('input', function () {
  errorText.classList.remove('triggered');
  errorTextMobile.classList.remove('triggered');
  emailForm.style.border = '';
});