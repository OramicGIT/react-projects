import React, { useState } from "react";

function Button() {
  const [color, setColor] = useState("#FFFFFF");

  const handleClick = () => {
    let n = Math.random() * 16000000;
    const newColor = "#" + Math.floor(n).toString(16);
    setColor(newColor);
  };

  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
      I'm a shapeshifter!
    </button>
  );
}

export default Button;
