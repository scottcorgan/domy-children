# domy-children
 
Manipulate children of DOM elements. For use with [Browserify](http://browserify.org).

Part of the [Domy module collection](https://github.com/scottcorgan/domy).

[![browser support](https://ci.testling.com/scottcorgan/domy-children.png)](https://ci.testling.com/scottcorgan/domy-children)
 
## Install
 
```
npm install domy-children --save
```
 
## Usage
 
```js
var element = require('dom-element');
var chidren = require('domy-children');

var el = element('<div><span></span><span></span></div>');

chidren.first(el)
chidren.last(el)
children.at(el, 2);
children.count(el);
```
 
## Methods

### children(element)

Get a list of child nodes

* `element` - string, css selector, or DOM element

### children.first(element)

Get the first child node

* `element` - string, css selector, or DOM element

### children.last(element)

Get the last child node

* `element` - string, css selector, or DOM element

### children.at(element, index)

* `element` - string, css selector, or DOM element
* `index` - index of child node to return

### children.count(element)

Get number of child nodes

* `element` - string, css selector, or DOM element

## Run Tests

Requires [Phantomjs](phantomjs.org/download.html) is installed

```
npm install
npm test
```