import React from './React';
import ReactDOM from 'react-dom';

// console.table(React.createElement);
// console.log(React.createElement(() => {}));
// console.log(React.createElement(''));
// console.log(React.createElement({}));
// console.log(React.createElement([]));
// console.log(React.createElement({ ajay: 'pathak' }));
// console.log(React.createElement(null));
// console.log(React.createElement(Symbol('Ajay')));
console.log(
  React.createElement(
    undefined,
    { __self: 'Ajay', key: 'Ajay' },
    { __self: 'Ajay', key: 'Ajay' },
    { __self: 'Ajay', key: 'Ajay' }
  )
);

const ReactElement = React.createElement('h1', { alt: 'logo' }, <h1>Hello</h1>);

// console.log(ReactElement);
