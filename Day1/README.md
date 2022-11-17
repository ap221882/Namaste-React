How to use react in a minimal web application?

## Async vs Defer

Defer is after DOMContent loaded, loads in parallel but executes after content is loaded. Also, defer scripts take their order in mind and execute accordingly

Async script is loaded and executed in parallel, no guarantees. Whatever loaded first runs.

## React.createElement

First Argument is JSx element, second is props object, third is children
Doubt: why we get myprops="[object Object]" when we pass object to the props. Why the key-value assigned is added as an attribute to the DOM element?
