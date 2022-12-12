# QnA

### Ways of creating Routes -

#### Mainly there are two ways -

1. by createBrowserRouter and array of path/nested path objects in it.
2. by using createRoutesFromElements inside createBrowserRouter and have a JSX syntax of ```<Route/>``` or nested ```<Route/>``` nd its corresponding attributes.

refer : https://reactrouter.com/en/main/start/tutorial#jsx-routes
https://reactrouter.com/en/main/start/tutorial#pathless-routes

### Why do we use super() in constructor?

In inheritance of classes, we want the methods/ member variables to be accessible in the inherited child too. Shorter syntax is to use super(props) to invoke same methods with the existing props.

```
constructor(props) {
 super(props);
 this.state = { color: "red" };
}
```

### Why super is always first line of constructor?

If you want some variables and methods of parent class to use, you should call super on top of constructor to give some identity to your parent class too. While if you're not using any methods etc, no need to call it.

### Why do we need to pass props to super(props)?

When we call this super(props), we are basically calling the constructor of React.Component. This makes the props available to the React element object and further composition of JSX Elements using class components can be done.

### can we make useeffect callback async? Why or why not?

It works, but you should avoid it because React’s useEffect hook expects a cleanup function returned from it. Being an async function will cause the cleanup function to not to be called and there will be memory leaks.

### LifeCycle Methods -

#### order of execution

Mounting-


constructor()✅

static getDerivedStateFromProps()

render()✅

componentDidMount()✅

Updating-


static getDerivedStateFromProps()

shouldComponentUpdate()✅

render()✅

getSnapshotBeforeUpdate()

componentDidUpdate()✅

Unmounting-


componentWillUnmount()✅

### References:

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Extra Key Points:

---

Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods. For instance componentDidUpdate will still be called.
