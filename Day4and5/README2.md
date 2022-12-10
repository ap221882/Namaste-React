# QnA

### What is the difference between JSON and JavaScript Object?

Json is a string that consists key value pair and is a medium from which we can share data across client and servers.
It is lighweight that XML and usually used when we use REST APIs for communicating. JavaScript Object on the other hand is an inbuilt data structure of JS language and is totally understandable by JS, while JSON is considered as a string by JS. We use JSON.stringify(<JSObject>), JSON.parse(<JSONString>) to change them one into another. Each programming language has its own way to change JSON to its data structures.

### Difference between default and named export?

Imports and Exports from ES6 modules have different ways to pass data across the modules. Export by default means there can be only one and is characterised by the module itself, while named export can be as many from same module. Also Named export, as the name tells, can't be renamed on the fly while importing like default exports.

### What is HOC? Write code for the same.

HOC(Higher Order Components) derives its name from Higher Order Functions and the functional programming we do in React. As JS have function as first class citizens, we can pass around function as any normal data type. Same is for React function components, as they are functions too. HOC takes a component and return a component while doing something like state attachment, style addition when components are passed through them. For example -

```
const HOC = (Component) => {
   const name = "Ajay";
   return () => {
    return <Component name = {name}>
   }
}
```

When using it we will invoke HOC and prop will be added,

```
HOC(Component) ----> ComponentWithPropName
```

### Advantages of using forms?

- It is semantically correct and crawlers respect it.
- It is read by screen readers thus increasing accessibility
- It submits when we press enter -- keyboard accessibility
- It increases code readability

### What is a Pure Component?

It is previous way by which we prevented re-renders when state of parent component was set. It extends React.Component. In function way, setState is not triggered if your states are shallowly equal(Comparison is done by Object.is()). And to prevent re-renders, we use React.Memo() to wrap the components. States, Contexts if change, component is still re-rendered as it should be.

### What is a state?

A built in data-object held by React elements to have information about the snapshot of data one component hold in any instant of time.

### What would happen if we console.log(useState())?

It return the function definition of useState. That returns an array of state variable and dispatcher function to update that variable.

### What is e.preventDefault()?

Browsers on some events trigger some activity that we want to avoid sometimes. For that for our custom handlers, we use this function to tell browser only do what we say to do.

### What is String.prototype.includes()?

It is method to return a boolean result of whether a substring is there in a string or not.

### Ways to add images in our react app?

We can use Es6 imports or commonJS module imports. In ES6 we can -

import \* as modulefn from "modulepath";

OR

import modulefnDefault, {modulefnNamed} from "modulepath";
