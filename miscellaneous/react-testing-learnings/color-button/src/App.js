import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const handleButtonDisabled = (e) => {
    setButtonDisabled(e.target.checked);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonDisabled}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" name="" id="" onChange={handleButtonDisabled} />
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
