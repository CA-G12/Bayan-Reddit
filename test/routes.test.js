const supertest = require('supertest');
const app = require('../src/app');

test('jest is working', () => {
  expect(1).toBe(1);
});
// test posts route

test('test for add post', (done) => {
  supertest(app)
    .post('/posts')
    .send({ title: 'title', content: 'content', img: '' })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});

// test user route
// test('test login', (done) => {
//   supertest(app)
//     .post('/login')
//     .send({ username: 'Bayan', password: '1234567890' })
//     .expect(400)
//     .expect('Content-Type', /json/)
//     .end((err, res) => {
//       if (err) return done(err);
//       expect(res.status).toBe(400);
//       expect(res.massage).toBe('passwords does not match');
//       done();
//     });
// });

// test comments route

test('test  add comment', (done) => {
  supertest(app)
    .post('/comment')
    .send({ content: 'content' })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});

// test profile route
test('test get profile', (done) => {
  supertest(app)
    .get('/profile')
    //   .send({ content: 'content' })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});

// test for votes route
test('test add vote', (done) => {
  supertest(app)
    .post('/vote')
    .send({ voteValue: 1, id: 1, postId: 1 })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
    //   expect(res.massage).toBe('your voted Saved successfully');
      done();
    });
});

