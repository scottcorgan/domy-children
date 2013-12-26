var element = require('domy-element');

var children = function (el) {
  return element(el).children;
};

children.count = function (el) {
  return children(el).length;
};

children.first = function (el) {
  var domEl = element(el);
  return domEl.firstChild;
};

children.last = function (el) {
  var domEl = element(el);
  return domEl.childNodes[domEl.childNodes.length - 1];
};

children.at = function (el, n) {
  var domEl = element(el);
  return domEl.childNodes[n];
};

module.exports = children;