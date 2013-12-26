var domify = require('domify');

var children = function () {
  
};

children.last = function (el) {
  var domEl = (typeof el === 'string') ? document.querySelector(el) : el;
  return domEl.childNodes[domEl.childNodes.length - 1];
};

function domElement (el) {
  var domEl = el;
  
  if (typeof el === 'string') {
    try {
      domEl = document.querySelector(el)
    }
    catch(e) {
      domEl = domify(el);
    }
  }
  
  return domEl;
}

module.exports = children;