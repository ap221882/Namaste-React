import React from './React';

console.table(React.createElement());

//~!RESERVED_PROPS
//* key: true,
//* ref: true,
//~* Used by babel-plugin(transpiler) and bundlers for extra debuggin information
//* __self: true,
//* __source: true,

const ReactElement = React.createElement('div', 'ajay', 'ajay', 'pathak');
const ReactElementWithRef = React.createElement(
  'mycustomelement',
  {
    name: 'ajay',
    ref: 'India',
    key: 'I_AM_UNIQUE',
    __self: 'REACT_ELEMENT',
    __source: { fileName: 'randomFileName', lineNumber: 123, columnNumber: 1 },
  },
  'ajay',
  'pathak'
);

console.table(ReactElement, 'ReactElementWith');
console.table(ReactElementWithRef, 'ReactElementWithRef');
