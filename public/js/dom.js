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
let postId;

const renderPosts = (data) => {
  postsContainer.innerHTML = '';
  data.forEach((element) => {
    const post = postsContainer.createAppendElement('div', { className: 'post' });
    const voteContainer = post.createAppendElement('div', { className: 'vote-container' });
    const upIcon = voteContainer.createAppendElement('ion-icon', { name: 'chevron-up-outline' });
    const voteCount = voteContainer.createAppendElement('span', { className: 'vote-amount', textContent: element.votes_counts });
    const downIcon = voteContainer.createAppendElement('ion-icon', { name: 'chevron-down-outline' });
    upIcon.addEventListener('click', () => {
      if (!upIcon.classList.contains('active')) {
        fetchUrl({
          voteValue: 1,
          postId: element.post_id,
        }, 'post', '/vote')
          .then(() => {
            console.log(voteCount.textContent);
            voteCount.textContent = +voteCount.textContent + 1;
            upIcon.classList.add('active');
            downIcon.classList.remove('active');
          });
      }
    });
    downIcon.addEventListener('click', () => {
      if (!downIcon.classList.contains('active')) {
        fetchUrl({
          voteValue: -1,
          postId: element.post_id,
        }, 'post', '/vote')
          .then(() => {
            console.log(voteCount.textContent);
            voteCount.textContent = +voteCount.textContent - 1;
            downIcon.classList.add('active');
            upIcon.classList.remove('active');
          });
      }
    });
    // content div
    const contentContainer = post.createAppendElement('div', { className: 'post-content-container' });
    const postTitle = contentContainer.createAppendElement('h2', { className: 'title', textContent: element.title });
    const postContent = contentContainer.createAppendElement('p', { className: 'content', textContent: element.content });
    const postImg = contentContainer.createAppendElement('img', { src: element.img });
    const postdetials = contentContainer.createAppendElement('p', { textContent: `${element.date.slice(0, 10)} | Posted by ` });
    const postUser = postdetials.createAppendElement('a', { href: `./html/profile.html?userId=${element.id}`, textContent: element.user_name });
    // comments div
    const postComments = post.createAppendElement('div', { className: 'message-wrapper' });
    const commentsLink = postComments.createAppendElement('a', { href: `./html/commentsPost.html?postId=${element.post_id}` });
    const commentIcon = commentsLink.createAppendElement('ion-icon', { name: 'chatbubbles-outline' });
    const commentCount = commentsLink.createAppendElement('span', { name: 'comment-count', textContent: element.commentcount });
    postComments.addEventListener('click', () => {
      window.location.href = `./html/commentsPost.html?postId=${element.post_id}`;
    });
  });
};
