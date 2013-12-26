var children = require('../index.js');
var test = require('tape');
var domify = require('domify');

test('returns last child of DOM element', function (t) {
  var domEl = domify('<div class="parent"><div class="child1"></div><div class="child2"></div></div>');
  var lastChild = children.last(domEl);
  
  t.equal(lastChild.className, 'child2');
  t.end();
});

test('returns nth child of DOM element', function (t) {
  var domEl = domify('<div class="parent"><div class="child1"></div><div class="child2"></div><div class="child3"></div></div>');
  
  t.equal(children.at(domEl, 1).className, 'child2');
  t.equal(children.at(domEl, 2).className, 'child3');
  t.end();
});

