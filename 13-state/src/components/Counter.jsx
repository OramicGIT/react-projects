import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [counter2, setCounter] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const anotherClick = () => {
    setCounter(counter2 + 3);
  };

  return (
    <>
      <button onClick={handleClick}>Clicked {count} times</button>

      <button onClick={anotherClick}>Boosted (clicked {counter2})</button>
    </>
  );
}

export default Counter;
