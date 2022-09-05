const signInBtn = document.getElementById('signin');
const signUpBtn = document.getElementById('signup');
const signInDiv = document.querySelector('.signin');
const signUpDiv = document.querySelector('.signup');
const box = document.querySelector('.box');

signInBtn.addEventListener('click', () => {
  box.style.transform = 'translateX(0%)';
  signUpDiv.classList.add('nodisplay');
  signInDiv.classList.remove('nodisplay');
});
signUpBtn.addEventListener('click', () => {
  box.style.transform = 'translateX(80%)';
  signInDiv.classList.add('nodisplay');
  signUpDiv.classList.remove('nodisplay');
});

/// clint validation for sign in & signup
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const email = document.querySelector('.email');
const password2 = document.querySelector('.password2');
const signupError = document.querySelector('.signup-error');
const signinError = document.querySelector('.signin-error');

const setErrorFor = (input, msg) => {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  formControl.classList.remove('success');
  const errP = input.parentElement.children[3];
  errP.textContent = msg;
  return false;
};
const setSuccessfulFor = (input) => {
  const formControl = input.parentElement;
  formControl.classList.add('success');
  formControl.classList.remove('error');
  return true;
};
// eslint-disable-next-line no-useless-escape
const isEmail = (Email) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email);

const checkUserName = (nameValue, ele) => {
  let res = false;
  if (nameValue === '') {
    setErrorFor(ele, 'User name can not be blank');
  } else {
    setSuccessfulFor(ele);
    res = true;
  }
  return res;
};
const checkPassword = (passwordValue, ele) => {
  let res = false;
  if (passwordValue === '') {
    setErrorFor(ele, 'Password cannot be blank');
  } else {
    // eslint-disable-next-line no-unused-expressions
    res = (passwordValue.length <= 8) ? setErrorFor(ele, 'password must have at least 8 chars') : setSuccessfulFor(ele);
  }
  return res;
};
const checkEmail = (emailValue) => {
  let res = false;
  if (emailValue === '') {
    setErrorFor(email, 'email name can not be blank');
  } else {
    // eslint-disable-next-line no-unused-expressions
    res = (!isEmail(emailValue)) ? setErrorFor(email, 'Not a valid email') : setSuccessfulFor(email);
    return res;
  }
  return res;
};
const checkPassword2 = (password2Value, passwordValue) => {
  let res = false;
  if (password2Value === '') {
    setErrorFor(password2, 'Password2 cannot be blank');
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
  } else {
    setSuccessfulFor(password2);
    res = true;
  }
  return res;
};

const checkInputs = () => {
  const loginUserName = document.querySelector('.login-form .user-name');
  const LoginPassword = document.querySelector('.login-form .password');
  const username = loginUserName.value.trim();
  const password = LoginPassword.value.trim();
  checkUserName(username, loginUserName);
  checkPassword(password, LoginPassword);
  if (checkUserName(username, loginUserName)
  && checkPassword(password, LoginPassword)) {
    fetchUrl({
      username, password,
    }, 'post', '/login')
      .then((data) => {
        if (data.status === 400) {
          // eslint-disable-next-line no-undef
          createMessageError(signinError, data.message);
        } else {
          window.location.href = '../index.html';
        }
      });
  }
};
/// check signup client validation & then add user to data base & redirect to home page
const checkUpInputs = () => {
  const signupUserName = document.querySelector('.signup-form .user-name');
  const signupPassword = document.querySelector('.signup-form .password');
  const username = signupUserName.value.trim();
  const Email = email.value.trim();
  const password = signupPassword.value.trim();
  const confirmPassword = password2.value.trim();

  checkUserName(username, signupUserName);
  checkEmail(Email);
  checkPassword(password, signupPassword);
  checkPassword2(confirmPassword, password);
  if (checkUserName(username, signupUserName)
  && checkPassword(password, signupPassword)
  && checkEmail(Email)
  && checkPassword2(confirmPassword, password)) {
    // eslint-disable-next-line no-undef
    fetchUrl({
      username, Email, password, confirmPassword,
    }, 'post', '/signup')
      .then((data) => {
        if (data.status === 409 || data.status === 400) {
          // eslint-disable-next-line no-undef
          createMessageError(signupError, data.message);
        } else {
          window.location.href = '../index.html';
        }
      });
  }
};

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkUpInputs();
});
