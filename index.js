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
    // TODO: fix element() module to use parent context
   
    var self = this;
    var childs = this.element.querySelectorAll(elem);
    
    toArray(childs).forEach(function (child) {
      self.element.removeChild(child);
    });
    
    return this.element;
  }
};

module.exports = function children (elem) {
  return element.wrap(elem, childrenMethods);
};