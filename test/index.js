var children = require('../index.js');
var test = require('tape');
var domify = require('domify');

test('returns last child of DOM element', function (t) {
  var domEl = domify('<div class="parent"><div class="child1"></div><div class="child2"></div></div>');
  var lastChild = children.last(domEl);
  
  t.equal(lastChild.className, 'child2');
  t.end();
});

