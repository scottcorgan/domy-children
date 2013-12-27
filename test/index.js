var children = require('../index.js');
var test = require('tape');
var element = require('domy-element');

test('returns children of string DOM element', function (t) {
  var childNodes = children('<div><span class="child1"></span><span class="child2"></span></div>');
  
  t.ok(childNodes.all().length === 2);
  t.end();
});

test('returns the number of children', function (t) {
  var c = element('<div><span class="child1"></span><span class="child2"></span></div>');
  
  t.ok(children(c).count() === 2);
  t.end();
});

test('returns first child of DOM element', function (t) {
  var domEl = element('<div><span class="child1"></span><span class="child2"></span></div>');
  var firstChild = children(domEl).first();
  
  t.equal(firstChild.className, 'child1');
  t.end();
});

test('returns last child of DOM element', function (t) {
  var domEl = element('<div class="parent"><div class="child1"></div><div class="child2"></div></div>');
  var lastChild = children(domEl).last();
  
  t.equal(lastChild.className, 'child2');
  t.end();
});

test('returns nth child of DOM element', function (t) {
  var domEl = element('<div class="parent"><div class="child1"></div><div class="child2"></div><div class="child3"></div></div>');
  
  t.equal(children(domEl).at(1).className, 'child2');
  t.equal(children(domEl).at(2).className, 'child3');
  t.end();
});

test('removes child nodes from parent', function (t) {
  var domEl = element('<div class="parent"><div class="child"></div><div class="child"></div></div>');
  
  children(domEl).remove('.child');
  
  t.equal(domEl.innerHTML, '');
  t.end();
});

