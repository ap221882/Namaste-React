import React from './React';

// console.table(React.createElement);
// console.log(React.createElement(() => {}));
// console.log(React.createElement(''));
// console.log(React.createElement({}));
// console.log(React.createElement([]));
// console.log(React.createElement({ ajay: 'pathak' }));
// console.log(React.createElement(null));
// console.log(React.createElement(Symbol('Ajay')));
// console.log(
//   React.createElement(
//     undefined,
//     { __self: 'Ajay', key: 'Ajay' },
//     { __self: 'Ajay', key: 'Ajay' },
//     { __self: 'Ajay', key: 'Ajay' }
//   )
// );

// const ReactElement = React.createElement('h1', { alt: 'logo' }, <h1>Hello</h1>);

// console.log(ReactElement);

const ParentElement = function ({ children }) {
  return React.createElement('h1', { alt: 'logo' }, <h1>`${children}`</h1>);
};

console.log(ParentElement, 'ParentElement');

console.log(
  React.createElement(
    ParentElement,
    { key: 'unique-value', children: 'Hi!' },
    'hello'
  )
);
