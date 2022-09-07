/* eslint-disable no-unused-vars */

const fetchUrl = (data, method, url) => fetch(url, {
  method,
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .catch((err) => new Error('unable to fetch data'));

const createMessageError = (ele, message) => {
  ele.textContent = message;
};

HTMLElement.prototype.createAppendElement = function (nodeType, properties) {
  const node = document.createElement(nodeType);
  for (let property in properties) {
    node[property] = properties[property];
  }
  this.appendChild(node);
  return node;
};
