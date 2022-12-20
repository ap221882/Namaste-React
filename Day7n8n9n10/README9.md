#QnA

### When and why do we need lazy?

Bundlers through which generally react code is bundled support code-splitting. They support code splitting through dynamic import syntax. For example, we can split our code like,

```
import("../../components/Buttons/ShowButton/ShowButton")
  .then((a) => {
    const { default: ShowButton } = a;
    console.log(ShowButton());
    console.log(a);
  })
  .catch((err) => console.error("An error occured while loading the module"));
```

Extra functionality that lazy provides is, it turns your dynamic imports to be treated as static import definition and we can put them as any normal imported JSX element. The callback inside lazy must return a Promise, i.e., dynamic import. The returned promise resolves to a module with a default export containing the React component.

```
const LazilyImportedModule = React.lazy(()=>{
 return new Promise(resolve=>setTimeout(resolve,1000)).then(()=>import('./<moduleRelativePath>))
})
```

### What is Suspense?

As while loading modules dynamically as a different chunks, modules' import may take some fraction of time. But User's view should be consistent whether something is being loaded. Suspense helps us to define a wrapper JSX generic element with a prop of fallback, that takes the fallback UI while lazy loading the respective module.
Syntax is

```
<Suspense fallback={<LoadingComponent/>}><LazilyImportedModule/><Suspense/>
```

### Why we got this error? A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.

When we don't wrap our lazily loaded components with suspense we get this error. Alternative is to use startTransition that instead of displaying fallback UI, transitions smoothly from ComponentA to ComponentB.

### Advantages and disadvantages of using this code splitting pattern?

Advantages are -

1. first initial load of page is faster
2. Reduces browser workload
3. improves performance in low bandwidth situations

Disadvantages are-

1. Slows quick scrolling
2. Can affect SEO and ranking
3. More network requests

### When and why do we need suspense?

We need Suspense whenever we need any placeholder or fallback UI for a dynamically imported Component by React. It makes the UI consistent and it doesn't breaks for user because of it.
According to React DOCS,
"Suspense is not a data fetching library. It’s a mechanism for data fetching libraries to communicate to React that the data a component is reading is not ready yet. React can then wait for it to be ready and update the UI."
Other than this, react creaters are trying to use Suspense for loading, fetching etc too.
