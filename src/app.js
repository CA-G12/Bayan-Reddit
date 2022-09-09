const express = require('express');
const compression = require('compression');
const { join } = require('path');
const cookieParser = require('cookie-parser');

const { userRoute, postRoute, commentsRoute, profileRoute } = require('./routes');
const { notFound, serverError } = require('./controllers');

const app = express();
app.use(compression());
app.set('port', process.env.PORT || 8000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '..', 'public')));

app.use(userRoute);
app.use(postRoute);
app.use(commentsRoute);
app.use(profileRoute);

app.use(notFound);
app.use(serverError);

module.exports = app;
