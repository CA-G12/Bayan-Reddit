const userBtn = document.querySelector('.signin-up');
const userName = document.querySelector('.user-name');
const addComment = document.querySelector('.add-comment');
const addCommentToDatabase = document.querySelector('.add-comment-pop');
const closeBtn = document.querySelector('.close');
const commentContent = document.querySelector('.comment-content');
const popUp = document.querySelector('.po-up-continer1');

// render book
const PostContainer = document.querySelector('.posts');
const renderPost = (data) => {
  PostContainer.innerHTML = '';
  data.forEach((element) => {
    const post = PostContainer.createAppendElement('div', { className: 'post' });
    const voteContainer = post.createAppendElement('div', { className: 'vote-container' });
    const upIcon = voteContainer.createAppendElement('ion-icon', { name: 'chevron-up-outline' });
    const voteCount = voteContainer.createAppendElement('span', { className: 'vote-amount', textContent: element.votes_counts });
    const downIcon = voteContainer.createAppendElement('ion-icon', { name: 'chevron-down-outline' });
    upIcon.addEventListener('click', () => {
      if (!upIcon.classList.contains('active')) {
        fetchUrl({
          voteValue: 1,
          postId: element.id,
        }, 'post', '/vote')
          .then(() => {
            console.log(voteCount.textContent);
            voteCount.textContent = +voteCount.textContent + 1;
            upIcon.classList.add('active');
            downIcon.classList.remove('active');
          });
      }
    });
    downIcon.addEventListener('click',() => {
      if (!downIcon.classList.contains('active')) {
        fetchUrl({
          voteValue: -1,
          postId: element.id,
        }, 'post', '/vote')
          .then(() => {
            console.log(voteCount.textContent);
            voteCount.textContent = +voteCount.textContent - 1;
            downIcon.classList.add('active');
            upIcon.classList.remove('active');
          });
      }
    });
    const contentContainer = post.createAppendElement('div', { className: 'post-content-container' });
    const postTitle = contentContainer.createAppendElement('h2', { className: 'title', textContent: element.title });
    const postContent = contentContainer.createAppendElement('p', { className: 'content', textContent: element.content });
    const postImg = contentContainer.createAppendElement('img', { src: element.img });
    const postdetials = contentContainer.createAppendElement('p', { textContent: `${element.date.slice(0, 10)} | Posted by ` });
    const postUser = postdetials.createAppendElement('a', { href: '#', textContent: element.user_name });
  });
};

// render comments
const commentsContainer = document.querySelector('.comments');
const renderComments = (data) => {
  commentsContainer.innerHTML = '';
  data.forEach((element) => {
    const comment = commentsContainer.createAppendElement('div', { className: 'comment' });
    const voteContainer = comment.createAppendElement('div', { className: 'vote-container' });
    const contentContainer = comment.createAppendElement('div', { className: 'post-content-container' });
    const postContent = contentContainer.createAppendElement('p', { className: 'content', textContent: element.content });
    const postdetials = contentContainer.createAppendElement('p', { textContent: 'Posted by ' });
    const postUser = postdetials.createAppendElement('a', { href: '#', textContent: element.user_name });
  });
};
fetch('/auth')
  .then((res) => res.json()).then((res) => {
    if (res.authorized === 'true') {
      userBtn.textContent = 'Logout';
      userBtn.addEventListener('click', () => {
        fetch('/logout').then(console.log());
      });
      userName.style.display = 'visible';
      userName.textContent = res.userName;
      addComment.style.display = 'visible';
    } else {
      userBtn.textContent = 'Signin/Signup';
      userName.style.display = 'none';
      addComment.style.display = 'none';
    }
  });
const postID = localStorage.getItem('postId');
console.log(postID);
const getPost = (id) => {
  fetch(`/post/${id}`).then((res) => res.json()).then((data) => renderPost(data));
};
const getcomments = (id) => {
  fetch(`/comments/${id}`).then((res) => res.json()).then((data) => renderComments(data));
};

getPost(postID);
getcomments(postID);
// show and hide popup
addComment.addEventListener('click', () => {
  popUp.style.visibility = 'visible';
});
closeBtn.addEventListener('click', () => {
  commentContent.value = '';
  popUp.style.visibility = 'hidden';
});

// add post to database
const addPostToDatabase = () => {
  fetchUrl({
    content: commentContent.value,
    postId: postID,
  }, 'post', '/comment')
    .then((res) => {
      console.log(res.massage);
      if (!res.massage) {
        window.location.href = '../html/signin&up.html';
      } else {
        commentContent.value = '';
        popUp.style.visibility = 'hidden';
        getPost(postID);
        getcomments(postID);
      }
    }).catch((err) => console.log(err));
};
addCommentToDatabase.addEventListener('click', (e) => {
  e.preventDefault();
  addPostToDatabase();
  getPost(postID);
  getcomments(postID);
});
