const createReactElement = React.createElement;
const createReactRoot = ReactDOM.createRoot;
const rootDOMElement = document.querySelector("#root");
// console.log(createReactRoot);
const element = createReactElement(
  "div",
  { myprops: { name: "Ajay", age: 22 } },
  createReactElement("h1", { myprops: { name: "Asha Bhosle" } }, "Hello World")
);
console.log(element);
const rootOfApplication = createReactRoot(rootDOMElement);
rootOfApplication.render(element);
