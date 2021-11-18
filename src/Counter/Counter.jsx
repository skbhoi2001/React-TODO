import React from "react";
import Styles from "./Counter.module.css"
export default function Counter() {
  const [counter, setCounter] = React.useState(5); //STATE hooks,destructuring done here
  const handleIncrement = (value) => {
    setCounter(counter + value);
  };
  return (
    <>
    <h1>Counter</h1>
      <h2>{counter}</h2>
      <div className={Styles.BtnDisplay}>
      <button onClick={() => handleIncrement(1)}>Add</button>
      <button onDoubleClick={() => handleIncrement(2)}>DoubleClick</button>
      <button onClick={() => handleIncrement(-1)}>Reduce</button>
      </div>
    </>
  );
}
