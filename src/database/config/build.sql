BEGIN;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    post_title VARCHAR(100) NOT NULL,
    post_content Text NOT NULL,
    post_img TEXT,
    post_date TIMESTAMP DEFAULT NOW(),
    post_vote INT DEFAULT 0,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE commets(
    id SERIAL PRIMARY KEY,
    commet_content TEXT NOT NULL,
    user_id INT,
    post_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);
INSERT INTO users (user_name, email, password) VALUES
('Bayan','bayan@gmail.com','123456789'),
('Bayan2','bayan2@gmail.com','123456789');

INSERT INTO posts(post_title, post_content, post_img, post_date, user_id) VALUES
('WELCOME', 'post one content', 'https://i.guim.co.uk/img/media/02c5fc2b42591243e62…ity=85&fit=max&s=2fb15fc00505e7679cee887f5959b8f4', '4/9/2022', 1),
('post2', 'post two content', 'https://i.guim.co.uk/img/media/02c5fc2b42591243e62…ity=85&fit=max&s=2fb15fc00505e7679cee887f5959b8f4', '2/9/2022', 1),
('post3', 'post three content', 'https://i.guim.co.uk/img/media/02c5fc2b42591243e62…ity=85&fit=max&s=2fb15fc00505e7679cee887f5959b8f4', '1/9/2022', 2)
;
INSERT INTO commets (commet_content, user_id, post_id) VALUES
('commet 1 content',1,2),
('commet 2 content',2,3),
('commet 3 content for post 1',1,1),
('commet 4 content',2,1),
('commet 5 content for post 2',1,2),
('commet 6 content',2,3);

COMMIT;