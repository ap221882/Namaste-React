"use strict";
var foo = {};
var bar = foo;
var baz = {};
console.log(foo === bar);
console.log(foo === baz);
console.log(JSON.stringify({ willStay: null, willBeGone: undefined }));
