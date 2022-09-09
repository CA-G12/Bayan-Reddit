const userBtn = document.querySelector('.signin-up');
const userName = document.querySelector('.user-name');
const userNameValue = document.querySelector('.user-name-value');

fetch('/auth')
  .then((res) => res.json()).then((res) => {
    if (res.authorized === 'true') {
      userBtn.textContent = 'Logout';
      userName.style.display = 'visible';
      userName.textContent = res.userName;
      userNameValue.textContent = res.userName;
    } else {
      userBtn.textContent = 'Signin/Signup';
      userName.style.display = 'none';
    }
  });

// profile page

fetch('/profile')
  .then((res) => res.json())
  .then((data) => {
    renderPosts(data);
  })
  .catch((err) => console.log(err));
