# QnA

### What is prop drilling?
Data can pass only top to down in React DOM Tree. When the Tree becomes large and we want the state in the parent component, we pass it through all of the components down the tree just to use that in a later child. This may cause a lot of boiler plate and decreases redability of the code, and in react programming world it is called as prop drilling. To prevent this we use global state managers.

### Difference between executing the function on onClick vs having the callback function?
onClick and other event listeners on React Nodes are passed through Synthetic event, a cross browser wrapper to making consistency among all browsers in case of react event handling. When we attach an event handler to react, it is attached as a listener so we have to just give a function that is invoked when the event is triggered. If we call the function itself in onClick, it is invoked in every render and whatever it is returned is provided to handler, if not a callback then nothing happens. So we should give a callback rather than invoking it while providing it to event listeners.

e.g. onClick = {myFunc()} will be executed on renders and onClick={myFunc}(in class based components, we have to bind handler to object using .bind in this case) is attached as a listener vs onClick = {()=>handler()} does the same thing as it is invoked when event is fired.