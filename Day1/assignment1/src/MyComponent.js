const createReactElement = React.createElement;
const createReactRoot = ReactDOM.createRoot;
const rootDOMElement = document.querySelector("#root");
// console.log(createReactRoot);
const element = createReactElement(
  "div",
  { myprops: { name: "Ajay", age: 22 } },
  createReactElement(
    "h1",
    { myprops: { name: "Asha Bhosle" } },
    "I am created with Reactjs"
  )
);
console.log(element);
const rootOfApplication = createReactRoot(rootDOMElement);
rootOfApplication.render(element);

// Vanilla JS
const heading = document.createElement("h1");
heading.innerText = "I am created with Vanilla JS dynamically";
heading.classList.add("vanillaJS");
heading.style.color = "red";
document.body.append(heading);
