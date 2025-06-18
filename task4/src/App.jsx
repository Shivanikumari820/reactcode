import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const myInc = () => {
    setCount(count + 1);
  };

  const myDecre = () => {
    if (count === 0) {
      alert("No Decrement");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter App:</h1>
      <button onClick={myInc}>Increment</button>
      <h1>{count}</h1>
      <button onClick={myDecre}>Decrement</button>
    </>
  );
};

export default App;
