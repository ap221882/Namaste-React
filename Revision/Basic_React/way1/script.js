const element = React.createElement(
  'custom-element',
  { name: 'ajay', children: 'pathak' },
  123,
  456,
  'Hello',
  [
    //~# These dataTypes are not rendered in HTML
    null,
    undefined,
    Symbol('I_AM_A_SYMBOL'),
    3141592653589793238n,
    //~# An Array of children, string, number are rendered as string
    'React.createElement',
    123,
    ['nested', 'array'],
    //~# Provided React elements can also be rendered
    React.createElement(React.Fragment, null, 'Fragment'),
    //~! Gives Error when we provide object as children
    //* {}
  ]
);

console.log(element);

const rootDOMElement = document.querySelector('#root');
// console.log(rootDOMElement, 'rootDOMElement');

const rootInstance = ReactDOM.createRoot(rootDOMElement);

//~! Mount
rootInstance.render(element);

ReactDOM.flushSync(() => {
  rootInstance.render(element);
});

// console.log(rootDOMElement.innerHTML);

//~! SERVER CODE
// const treeString = ReactDOM.renderToString(element);
// console.log(treeString, 'treeString');

//~! Unmount
// rootInstance.unmount();

// console.log(rootInstance, 'rootInstance');
// console.dir(rootInstance.unmount, 'rootInstance.unmount');

ReactDOM.unmountComponentAtNode(rootDOMElement);
