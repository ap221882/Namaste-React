// console.log(React, 'React');
// console.log(ReactDOM, 'ReactDOM');

const element = React.createElement(
  'h1',
  { ajay: 'pathak' },
  123,
  456,
  'Hello'
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
