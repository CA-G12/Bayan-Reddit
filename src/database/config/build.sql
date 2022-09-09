BEGIN;
DROP TABLE IF EXISTS users, posts, comments, votes CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content Text NOT NULL,
    img TEXT,
    date TIMESTAMP DEFAULT NOW(),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INT,
    post_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id) 
);
CREATE TABLE votes(
    id SERIAL PRIMARY KEY,
    vote_value INT NOT null,
    user_id INT,
    post_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);
INSERT INTO users (user_name, email, password) VALUES
('Bayan','bayan@gmail.com','123456789'),
('Bayan2','bayan2@gmail.com','123456789');

INSERT INTO posts(title, content, img, date, user_id) VALUES
('WELCOME', 'This is the first post in my reddit clone.', 'https://i.pinimg.com/564x/89/8a/e4/898ae49aa6945acb210b27b82b2fada3.jpg', '4/9/2022', 1),
('post2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime culpa corporis nihil dicta sed id porro enim nam!', 'https://i.pinimg.com/564x/89/8a/e4/898ae49aa6945acb210b27b82b2fada3.jpg', '2/9/2022', 1),
('post3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime culpa corporis nihil dicta sed id porro enim nam, blanditiis quia minus doloribus ducimus voluptatibus nisi voluptates ab ipsa hic!', '', '1/9/2022', 2)
;
INSERT INTO comments (content, user_id, post_id) VALUES
('commet 1 content',1,2),
('commet 2 content',2,3),
('commet 3 content for post 1',1,1),
('commet 4 content',2,1),
('commet 5 content for post 2',1,2),
('commet 6 content',2,3);
INSERT INTO votes (vote_value, user_id, post_id) VALUES
(1,1,2),
(1,1,1),
(1,2,3),
(-1,2,3);

COMMIT;