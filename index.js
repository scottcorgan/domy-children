var element = require('domy-element');

var childrenMethods = {
  all: function () {
    return [].slice.call(this.element.one().children, 0);
  },

  count: function () {
    return this.element.one().children.length;
  },

  first: function () {
    return this.element.one().firstChild;
  },

  last: function () {
    return this.element.one().childNodes[this.element.one().childNodes.length - 1];
  },

  at: function (index) {
    return this.element.one().childNodes[index];
  },

  remove: function (elem) {
    var self = this;
    var el = this.element.one();
    childs = element(this.element.one()).all(elem);
    
    [].slice.call(childs, 0).forEach(function (child) {
      el.removeChild(child);
    });
    
    return this.element;
  }
};

module.exports = function children (elem) {
  return element(elem).wrap(childrenMethods);
};