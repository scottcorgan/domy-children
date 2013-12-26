var children = require('../index.js');
var test = require('tape');
var domify = require('domify');

test('returns children of string DOM element', function (t) {
  var c = children('<div><span class="child1"></span><span class="child2"></span></div>');
  
  t.ok(c.length === 2);
  t.end();
});

test('returns the number of children', function (t) {
  var c = domify('<div><span class="child1"></span><span class="child2"></span></div>');
  
  t.ok(children.count(c) === 2);
  t.end();
});

test('returns first child of DOM element', function (t) {
  var domEl = domify('<div><span class="child1"></span><span class="child2"></span></div>');
  var firstChild = children.first(domEl);
  
  t.equal(firstChild.className, 'child1');
  t.end();
});

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

