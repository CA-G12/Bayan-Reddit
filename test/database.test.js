const connection = require('../src/database/config/connection');
const  build = require('../src/database/config/build');
const { allPosts, addPost, profilePosts, commentsByPostId, addComment } = require('../src/database/queries')
// const { getAllBooks , postBook } = require('../database/quires/books')

test("jest is working", () => {
  expect(1).toBe(1);
});

beforeEach(() => {
    return build();
});
test('allPosts', () => {
  return allPosts()
    .then((data) => {
      expect(data.rows.length).toBe(3);
      expect(data.rows[0].id).toBe(1);
    });
});
// test('addPost', () => {
//   const title = 'post4';
//   const content = 'post4 content';
//   const img = 'https://i.pinimg.com/564x/89/8a/e4/898ae49aa6945acb210b27b82b2fada3.jpg';
//   return addPost(title, content, img, 1)
//     .then((data) => {
//       expect(data.rows.length).toBe(1);
//       expect(data.rows[0].id).toBe(4);
//     });
// });
test('profile posts', () => {
  return profilePosts(1)
    .then((data) => {
      expect(data.rows.length).toBe(2);
      expect(data.rows[0].id).toBe(1);
    });
});
test('commentsByPostId', () => {
  return commentsByPostId(1)
    .then((data) => {
      expect(data.rows.length).toBe(2);
      expect(data.rows[0].id).toBe(3);
    });
});
// test('addComment', () => {
//   return addComment('content',1)
//     .then((data) => {
//       expect(data.rows.length).toBe(1);
//     });
// });
afterAll(() => {
  return connection.end();
});