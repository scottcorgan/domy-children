var element = require('dom-element');

var children = function (el) {
  return element(el).children;
};

children.count = function (ch) {
  return ch.length;
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