# QnA

### What is Pure Function?

It is a function in computer science, which for every same arguments returns the same result. It doesn't have side-effects, like printing something, incrementing some variable etc. It makes them a reusable piece of data in your codebase.

### Difference between console.log(<HeaderComponent/>) and console.log(HeaderComponent())?

<HeaderComponent/> evaluates to a React Element and is equivalent to React.createElement(HeaderComponent, null). While HeaderComponent() straightaway returns JSX as it is a functional component.

### What is React Fragment?

Since React function component is a function and expects one JSX Element to be returned(React.createElement() can create one tag/ReactElement at a time), we can't provide multiple JSX Elements, without having them wrapped by a native HTML/JSX Element. But that can sometimes be enemy of semantic HTML. React Fragment lets you wrap multiple components, without creating a wrapping element and is not rendered to DOM. We can give key too to it in case of returning a array of JSX Elements. Short and long syntax are <></> and <React.Fragment></React.Fragment>.

### Use of default in "export default CardComponent"?

In JavaScript Modules, there are two type of exports from a same module. Either you can do a default export, which can be only one in a module, or you can do multiple named exports. Default name derives from the fact that you can use it with any name of your choice while exporting. We import it like -

`import Ajay from '../FileWithADifferentName'`

### What is config driven UI?

It stands for configuration driven UI, in which data is derived from server and client only on the different configurations passed, drives the UI. It is a maintainable mode of development due to the changes do not need to be done regularly on the development side with the change of schema or anything. It generally uses pieces of data that are customisable and reusable according to the configurations derived.

### Advantages of using Config Driven UI?

It is a very efficient way to compose your application as it is maintainable in the long run with minor changes done. Also, new features can be implemented very easily. It removes the dependency to develop each time hence bug fixes to feature-driven development is easy.

### What if we have given same id in the array of data objects?

Given same key to array of JSX elements, react will not be able to update the react elements efficiently and there will be error thrown in console in development that each element should have unique key prop.

### Index is not a good way to pass a key. Why?

Index in the arrays is decided on the fly. If some element is removed or order is changed, it is inefficient for react to find and optimize what it does with unique keys.

references: https://stuartwheaton.com/blog/2021-10-13-config-driven-development/
