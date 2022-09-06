import React from "react";
import "./Count.css";

const Count = () => {
  function increase() {
    setCount(state + 1);
  }
  function decrease() {
    if (state === 0) return;
    setCount(state - 1);
  }
  const [state, setCount] = React.useState(0);

  // console.log(state[0]);
  return (
    <div className="container">
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>

      <h1>{state}</h1>
    </div>
  );
};

export default Count;
