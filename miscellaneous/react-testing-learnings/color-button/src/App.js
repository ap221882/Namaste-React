import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;

// 1) Code Editor
// 2) YouTube Clone
// 3) Portfolio
// 4) Social Media App
// 5) Resume Builder App Or Food Delivery App
// https://www.youtube.com/watch?v=2SXno61FX2k
