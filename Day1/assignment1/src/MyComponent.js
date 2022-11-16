const createReactElement = React.createElement;
const createReactRoot = ReactDOM.createRoot;
const rootDOMElement = document.querySelector("#root");
// console.log(createReactRoot);
const element = createReactElement("h1", {}, "Hello World");
const rootOfApplication = createReactRoot(rootDOMElement);
rootOfApplication.render(element);
