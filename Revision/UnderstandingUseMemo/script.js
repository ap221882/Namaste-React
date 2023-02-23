import React, { useMemo, useState, Fragment } from 'react';
import ReactDOM from 'react-dom/client';

const domRootNode = document.querySelector('#root');

const App = () => {
  const [count, setCount] = useState(0);

  const handler = () => {};

  const dependency = useMemo(
    (count) => {
      console.log('rerun');
      value = 1000000000000000;
      while (value > count) {
        value--;
      }
      return value;
    },
    [handler]
  );

  console.log('Component rendered');

  return (
    <Fragment>
      {count}
      <h1>{dependency}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </Fragment>
  );
};
const a = <App />;
console.dir(a.type, 'a.type');

const reactRoot = ReactDOM.createRoot(domRootNode);

reactRoot.render(<App />);
