var element = require('domy-element');
var toArray = require('to-array');

var childrenMethods = {
  all: function () {
    return toArray(this.element.children);
  },

  count: function () {
    return this.element.children.length;
  },

  first: function () {
    return this.element.firstChild;
  },

  last: function () {
    return this.element.childNodes[this.element.childNodes.length - 1];
  },

  at: function (index) {
    return this.element.childNodes[index];
  },

  remove: function (elem) {
    var self = this;
    var childs = element(elem, {
      context: this.element,
      multiple: true
    });
    
    toArray(childs).forEach(function (child) {
      self.element.removeChild(child);
    });
    
    return this.element;
  }
};

module.exports = function children (elem) {
  return element.wrap(elem, childrenMethods);
};