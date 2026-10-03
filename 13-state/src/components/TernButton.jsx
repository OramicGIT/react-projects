// TernButton.jsx
import { useState } from "react";

function Button() {
  const [state, changeState] = useState(false);
  let currentState = () => (state ? "on" : "off");
  const handleClick = () => {
    changeState(!state);
  };

  return (
    <>
      <h2>Light Switch (Ternary Button)</h2>
      <button onClick={handleClick}>Light Switch</button>

      <br></br>
      <br></br>

      <strong>Light is {currentState()}</strong>
    </>
  );
}

export default Button;
