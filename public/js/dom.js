const postsContainer = document.querySelector('.container');
// pop-up elements
const popUpAddPost = document.querySelector('.po-up-continer1');
const addPost = document.querySelector('.add-post');
const closeBtn = document.querySelector('.close');
const postTitle = document.querySelector('.post-name');
const postContent = document.querySelector('.post-content');
const postImg = document.querySelector('.post-img');
const addPostPopup = document.querySelector('.add-post-pop');
const updatePostPopup = document.querySelector('.update-post-pop');


const renderPosts = (data) => {
    postsContainer.innerHTML = '';
  data.forEach((element) => {
    const post = postsContainer.createAppendElement('div', { className: 'post' });
    const voteContainer = post.createAppendElement('div', { className: 'vote-container' });
    const upIcon = voteContainer.createAppendElement('ion-icon', { name: 'chevron-up-outline' });
    const voteCount = voteContainer.createAppendElement('span', { className: 'vote-amount', textContent: 30 });
    const downIcon = voteContainer.createAppendElement('ion-icon', { name: 'chevron-down-outline' });
    const contentContainer = post.createAppendElement('div', { className: 'post-content-container' });
    const postTitle = contentContainer.createAppendElement('h2', { className: 'title', textContent: element.title });
    const postContent = contentContainer.createAppendElement('p', { className: 'content', textContent: element.content });
    const postImg = contentContainer.createAppendElement('img', { src: element.img });
    const postdetials = contentContainer.createAppendElement('p', { textContent: `${element.date.slice(0, 10)} | Posted by ` });
    const postUser = postdetials.createAppendElement('a', { href: '#', textContent: element.user_name });
    const postComments = post.createAppendElement('div', { className: 'message-wrapper' });
    const commentIcon = postComments.createAppendElement('ion-icon', { name: 'chatbubbles-outline' });
    const commentCount = postComments.createAppendElement('span', { name: 'comment-count', textContent: element.commentcount });
  });
};

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
