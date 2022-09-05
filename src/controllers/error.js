const path = require('path');

const notFound = (req, res) => {
  const file = path.join(__dirname, '..', '..', 'public/html/error404.html');
  res.status(404).sendFile(file);
};

// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  if (err.status) {
    res.json({ message: err.message, status: err.status });
  } else {
    const file = path.join(__dirname, '..', '..', 'public/html/error500.html');
    res.status(500).sendFile(file);
  }
};
module.exports = { notFound, serverError };
