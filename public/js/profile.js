const userBtn = document.querySelector('.signin-up');
const userName = document.querySelector('.user-name');
const userNameValue = document.querySelector('.user-name-value');

fetch('/auth')
  .then((res) => res.json()).then((res) => {
    if (res.authorized === 'true') {
      userBtn.textContent = 'Logout';
      userBtn.addEventListener('click', () => {
        fetch('/logout').then(console.log());
      });
      userName.style.display = 'visible';
      userName.textContent = res.userName;
      userNameValue.textContent = res.userName;
    } else {
      userBtn.textContent = 'Signin/Signup';
      userName.style.display = 'none';
    }
  });

// profile page
// const searchParams = new URLSearchParams(window.location.search);
// const userId = searchParams.get('userId');

// if (userId) {
//   fetchUrl({ id: userId }, 'get', '/profile/id')
//     .then((res) => res.json())
//     .then((data) => {
//       renderPosts(data);
//     })
//     .catch((err) => console.log(err));
// }
// else{
fetch('/profile')
  .then((res) => res.json())
  .then((data) => {
    renderPosts(data);
  })
  .catch((err) => console.log(err));

// }
