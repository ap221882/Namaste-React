class App extends React.Component {
  counter = (<Counter />);

  render() {
    return (
      <div>
        {this.counter}
        {this.counter}
      </div>
    );
  }
}

function Counter() {
  const [score, setScore] = React.useState(0);
  const [hover, setHover] = React.useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}

const reactDOMRoot = ReactDOM.createRoot(document.getElementById('react-root'));
console.log(<App />, '<App />');
const app = <App />;
console.dir(app.type, 'type');
console.log(app.type, 'type');
// console.log(app.type(), 'type invoked');
// console.log(app.type().props.children, 'app.props.children');
// console.table(app.type().props.children[0].type, 'app.type().props.children');
console.log(React.createElement({}), 'React.createElement(function App() {})');
reactDOMRoot.render(<App />);
