import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";

const rootDomElement = document.querySelector("#root");
const createReactElement = React.createElement;
const createRoot = ReactDOM.createRoot;
//root for rendering
const reactRootElement = createRoot(rootDomElement);

/**
 * * Creating a Nested Header Component using React.createElement
 * * Component should be rendered like this
 * * (<div class="title">
 * * <h1></h1>
 * * <h2></h2>
 * * <h3></h3>
 * * </div>)
 */
const elementWithCreateReactElement = createReactElement(
  "div",
  { className: "title" },
  React.createElement("h1", {}, "Namaste React"),
  React.createElement("h2", {}, "A right learning bootcamp"),
  React.createElement("h3", {}, "To learn indepth Reactjs")
);

/**
 * * Creating the same element using JSX
 * * Parcel is able to recognise JSX and that is rendered through our ReactDOM root
 * * Element with JSX is equivalent to React.createElement
 * * <ElementWithJSX/> willn't work because ElementWithJSX is already a ReactElement, we need not further to give it to React.createElement
 * * JSX Elements other than browser native elements, needs to PascalCase or browser isn't able to recognize it.
 */
const ElementWithJSX = (
  <div className='title'>
    <h1>Namaste React</h1>
    <h2>A right learning bootcamp</h2>
    <h3>To learn indepth Reactjs</h3>
  </div>
);

// Function component
const ElementWithJSXFC = () => {
  return (
    <div className='title'>
      <h1>Namaste React</h1>
      <h2>A right learning bootcamp</h2>
      <h3>To learn indepth Reactjs</h3>
    </div>
  );
};

// Function Component with composition
const Heading1 = () => <h1>Namaste React</h1>;
const Heading2 = () => <h2>A right learning bootcamp</h2>;
const Heading3 = () => <h3>To learn indepth Reactjs</h3>;

const TitleComponentWithComposition = () => {
  return (
    <div className='page'>
      <Navbar />
      <main>
        <Heading1 />
        <Heading2 />
        <Heading3 />
      </main>
    </div>
  );
};

// reactRootElement.render(elementWithCreateReactElement);

// reactRootElement.render(ElementWithJSX);

/**
 * * <ElementWithJSXFC/> is same as React.createElement(ElementWithJSXFC, null)
 */
// reactRootElement.render(<ElementWithJSXFC />);

/**
 * * <ElementWithJSXFC attribute={attributeValue}/> is same as React.createElement(ElementWithJSXFC, {<attribute>:<attributeValue>})
 */
// reactRootElement.render(<ElementWithJSXFC color='red' />);

/**
 * * <TitleComponentWithComposition>ChildrenTitle</TitleComponentWithComposition> is same as React.createElement(TitleComponentWithComposition, null,"ChildrenTitle")
 * * ChildrenTitle would have been rendered with children attribute of the component. Below it will not be rendered.
 */

reactRootElement.render(
  <TitleComponentWithComposition>ChildrenTitle</TitleComponentWithComposition>
);
