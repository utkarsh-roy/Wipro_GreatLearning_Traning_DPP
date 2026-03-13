import React, { useState, useMemo } from "react";

const App = () => {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 100; i++) {} 
    return num * 2;
  };

  const result = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h1>useMemo Example</h1>

      <h2>Result: {result}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <p>Count: {count}</p>
    </div>
  );
};

export default App;
