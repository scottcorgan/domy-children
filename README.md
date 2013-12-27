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
var chidren = require('domy-children');

children('<div><span></span><span></span></div>').first();
children('.parent').last();
children(document.body).at(1);
children('<div><span></span><span></span></div>').count();
```
 
## Methods

### children(element)

* `element` - string, css selector, or DOM element

Creates and returns an object with the following methods available:

* `remove`
* `first`
* `last`
* `count`
* `at`

## Instance Methods

### remove(selector)

Remove all children with the following selector

* `selector` - DOM element or css selector

### first()

Get the first child node

### last()

Get the last child node

### at(index)

Get child at index

* `index` - index of child node to return

### count(element)

Get number of child nodes

## Run Tests

Requires [Phantomjs](phantomjs.org/download.html) is installed

```
npm install
npm test
```
