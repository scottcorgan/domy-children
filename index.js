var element = require('domy-element');
var toArray = require('to-array');

module.exports = function children (elem) {
  return new Children(element(elem));
};

var Children = function (elem) {
  this.element = elem;
};

Children.prototype.all = function () {
  return this.element.children;
};

Children.prototype.count = function () {
  return this.element.children.length;
};

Children.prototype.first = function () {
  return this.element.firstChild;
};

Children.prototype.last = function () {
  return this.element.childNodes[this.element.childNodes.length - 1];
};

Children.prototype.at = function (index) {
  return this.element.childNodes[index];
};

Children.prototype.remove = function (elem) {
  // TODO: fix element() module to use parent context
  
  var self = this;
  var childs = this.element.querySelectorAll(elem);
  
  toArray(childs).forEach(function (child) {
    self.element.removeChild(child);
  });
  
  return this.element;
};