# QnA

### What are microservices?

Microservices is an architechtural approach to software development where in place of having a monolithic and interdependent applications, we have independently developed and own pieces of software that communicate through different APIs. Generally there is an container application which hosts the code which other domains use and inside it are different microservices. Some of its benefits are -
1> Agility - shorter software development cycles
2> Reusability
3> Tech independence - any stack can be used

### What is useEffect?

It is hook that is provided by react while doing functional programming in it. It takes a callback as its first argument and array of dependencies as second. As the array of dependencies change, it triggers re-render as well as runs the code inside it too. The return of callback is run just before the component in which the respective useEffect is written is unmounted. If array of dependency is empty, it runs only once after component is mounted.
It basically have three effects of CB components -

componentDidMount

componentDidUpdate

componentDidUnmount

### What is async and await?

A shorter and cleaner syntax to handle promises in JavaScript. Behind the scenes, this code is not run in main thread but asynchronously as promise chains in microtask queue.

### What does CORS extension does?

It disables CORS restriction on our browser.

### What is optional chaining?

It is safe way of escaping errors in a more clean way. Like except functions, no datatype can be invoked OR other than object nothing can be referenced by . or [] expressions. Also in api calls a deeply nested object can or can't have values as objects and we may reference it in our client side code. Optional chaining helps us by only evaluating to undefined and not throwing errors while doing that. For objects, syntax is - ?.<key>, for function invocation, it is, ?.()

### Difference between useEffect and useEffectLayout?

The useLayoutEffect function is triggered synchronously before the DOM mutations are painted. However, the useEffect function is called after the DOM mutations are painted. useLayoutEffect doesn't waits for browsers to paint the DOM
