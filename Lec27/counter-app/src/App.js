import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //let count = 0;
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
    console.log(count);
  }
  function handleDecrement() {
    setCount(count - 1);
    console.log(count);
  }
  return (
    <>
      <div>Welcome To React</div>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}

export default App;
