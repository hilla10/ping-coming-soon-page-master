const email = document.querySelector('.email');
const error = document.querySelector('.error');
const btn = document.querySelector('.btn');

const subscribe = () => {
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;
  const emailTest = emailRegex.test(email.value);
  if (email.value === '') {
    error.textContent = 'Please enter email address';
    email.classList.add('error_email');
    btn.textContent = 'Notify Me';
  } else if (!emailTest) {
    error.textContent = 'Please provide a valid email address';
    email.classList.add('error_email');
    btn.textContent = 'Notify Me';
  } else {
    error.textContent = '';
    email.classList.remove('error_email');
    btn.textContent = 'Subscribed';
  }
};

btn.addEventListener('click', subscribe);
