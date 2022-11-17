//Hello React
const createReactElement = React.createElement;
const createReactRoot = ReactDOM.createRoot;
const rootDOMElement = document.querySelector("#root");

/**
 * @params {String} JSX Element
 * @params {Object} props
 * @params {React Element/ Array of React Element} children
 * @returns React Element
 */
//Added two children, an array of two objects in props
const element = createReactElement(
  "div",
  [{ myprops: { name: "Ajay", age: 22, children: "Ajay" } }, { home: "here" }],
  [
    createReactElement(
      "h1",
      { myprops: { name: "Asha Bhosle" } },
      `I am created with Reactjs- ${this}`
    ),
    "Hello, I am the next react child",
  ]
);

const rootOfApplication = createReactRoot(rootDOMElement);
rootOfApplication.render(element);

// Hello Vanilla JS
const heading = document.createElement("h1");
heading.innerText = "I am created with Vanilla JS dynamically";
heading.classList.add("vanillaJS");
heading.style.color = "red";
document.body.append(heading);
