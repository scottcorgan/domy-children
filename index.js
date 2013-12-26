var element = require('dom-element');

var children = function () {
  
};

children.last = function (el) {
  var domEl = element(el);
  return domEl.childNodes[domEl.childNodes.length - 1];
};

module.exports = children;