import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Movielist from "./components/MovieList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Movielist />
    </div>
  );
}

export default App;
