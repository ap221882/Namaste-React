import { useState, Component } from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.querySelector('#root');

const reactRoot = ReactDOM.createRoot(rootElement);

class App extends Component {
  // const [count, setCount] = useState(0);
  state = { count: 0 };
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}
console.log(<App />, 'APP');
console.log(new App());

reactRoot.render(new App());
