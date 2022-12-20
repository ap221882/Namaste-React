# QnA

### What is prop drilling?
Data can pass only top to down in React DOM Tree. When the Tree becomes large and we want the state in the parent component, we pass it through all of the components down the tree just to use that in a later child. This may cause a lot of boiler plate and decreases redability of the code, and in react programming world it is called as prop drilling. To prevent this we use global state managers.

### Difference between executing the function on onClick vs having the callback function?
onClick and other event listeners on React Nodes are passed through Synthetic event, a cross browser wrapper to making consistency among all browsers in case of react event handling. When we attach an event handler to react, it is attached as a listener so we have to just give a function that is invoked when the event is triggered. If we call the function itself in onClick, it is invoked in every render and whatever it is returned is provided to handler, if not a callback then nothing happens. So we should give a callback rather than invoking it while providing it to event listeners.

e.g. onClick = {myFunc()} will be executed on renders and onClick={myFunc}(in class based components, we have to bind handler to object using .bind in this case) is attached as a listener vs onClick = {()=>handler()} does the same thing as it is invoked when event is fired.

### What is lifting the state up?
React can't send one component's local state up to its parent. So whenever we want to make sibling components share same state, we move the state upwards to the parent and get/set state from there. We call this as lifting the state up in react.

### What is context provider and context consumer?
Provider-Consumer pattern is followed in react when we want a branch of react tree to have a state accessible without the prop drilling. React provides it using its ContextAPI. Provider is the HOC which provide the value to its children nodes and Consumer is by which it is accesible throughout the respective branch.
Syntax is-

```
<RespectiveContext.Provider value={<something>}>{children}</RespectiveContext.Provider>

```
```
<RespectiveContext.Consumer>{(<something>)=>{
 return <(ComponentUsingContext's Value)/>
}}
```

### If you don't pass value to provider, does it take the default value?

```const ThemeContext = createContext('light');```

If we don't pass it through provider and if ThemeContext is accessed, react uses this default value as fallback value. Generally default value in createContext is kept null or empty object etc.