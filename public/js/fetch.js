/* eslint-disable no-undef */
const getAllPost = () => {
  fetch('/posts').then((res) => res.json()).then((data) => renderPosts(data));
};
getAllPost();
// determine whether the user is autherized or not
const userBtn = document.querySelector('.signin-up');
const userName = document.querySelector('.user-name');
fetch('/auth')
  .then((res) => res.json()).then((res) => {
    if (res.authorized === 'true') {
      userBtn.textContent = 'Logout';
      userBtn.addEventListener('click', () => {
        fetch('/logout').then(console.log());
      });
      userName.style.display = 'visible';
      userName.textContent = res.userName;
      addPost.style.display = 'visible';
    } else {
      userBtn.textContent = 'Signin/Signup';
      userName.style.display = 'none';
      addPost.style.display = 'none';
    }
  });
const addPostToDatabase = () => {
  popUpAddPost.style.visibility = 'hidden';
  fetchUrl({
    title: postTitle.value,
    content: postContent.value,
    img: postImg.value,
  }, 'post', '/posts')
    .then((res) => {
      if (!res.massage) {
        window.location.href = '../html/signin&up.html';
      } else {
        postTitle.value = '';
        postContent.value = '';
        postImg.value = '';
        popUpAddPost.style.visibility = 'hidden';
        getAllPost();
      }
    }).catch((err) => console.log(err));
};
// add post to database
addPostPopup.addEventListener('click', (e) => {
  e.preventDefault();
  addPostToDatabase();
  getAllPost();
});
addPost.addEventListener('click', () => {
  popUpAddPost.style.visibility = 'visible';
  updatePostPopup.style.display = 'none';
});
closeBtn.addEventListener('click', () => {
  postTitle.value = '';
  postContent.value = '';
  postImg.value = '';
  popUpAddPost.style.visibility = 'hidden';
});
