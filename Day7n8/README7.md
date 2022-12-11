# QnA

### Purpose of dependency array and when it is used/not used inside useEffect?

Dependency array informs the useEffect hook to trigger when any of its dependency change. In case of functions, it will trigger everytime because functions are created new everytime(reference types). When it is not used, useEffect is run every time the component is rendered by React.

### Difference between optional chaining and && to check null object?

Sometimes, we tend to do a operation that is not allowed in JavaScript and that throws an error. Like invoking other things than function, referencing other datatypes than object. Our code may break in those cases. To avoid those, we want to have some default values to be there when there is an error referencing.

We can check beforehand using && that if value is falsy don't access it.
e.g., value && value.data && value.data.name - if value.data is falsy, value.data.name will not be evaluated.
Shorter syntax is optional chaining where value evaluate to undefined even if we do an error referencing -
value?.data?.name

### What is children, loader, Outlet in react-router?

children are the child routes which are accessible in the parent route through outlet though changing the url a/c to respective children.
Outlet is the generic JSX element through which children render one at a time a/c to route.
loader is a function that is called behind the scene while changing route and its return value is available to the respective route using the hook useLoaderData.

### Object aren't valid react child. When do we get this error?

When we dont wrap our components into angular brackets and try to render them, no React Element is created thus react isnt able to recognise the component and gives this error.
