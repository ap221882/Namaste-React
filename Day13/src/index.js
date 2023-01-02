import ReactDOM from "react-dom";

const rootElement = document.querySelector("#root");

const App = () => {
  return <h1>Hello</h1>;
};

ReactDOM.createRoot(rootElement).render(<App />);
