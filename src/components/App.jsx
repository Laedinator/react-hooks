import React, { useState } from "react";

function App() {
  var initalCount = 0;
  const [count, setCount] = useState(initalCount);
function increase(){
  setCount(count + 1);
}
function decrease(){
  setCount(count - 1);
}
function reset(){
  setCount(initalCount = 0);
}

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>R</button>
    </div>
  );
}

export default App;
