import './App.css'
import { useState } from 'react' 

function App() {
  // We store the whole journey in an array
  const [history, setHistory] = useState([0]);
  // We track which 'step' of the journey we are currently on
  const [index, setIndex] = useState(0);

  // The current count is simply the value at the current index
  const currentCount = history[index];
  
  const updateCount = (amount) => {
    const nextValue = currentCount + amount;

    // Create a new history up to the current index
    // (This deletes any "redo" path if you click a new number after undoing)
    const newHistory = history.slice(0, index + 1);

    setHistory([...newHistory, nextValue]);
    setIndex(newHistory.length);
  };

  const undo = () => {
    if (index > 0) setIndex(index - 1);
  };

  const redo = () => {
    if (index < history.length - 1) setIndex(index + 1);
  };

  return (
    <>
      <div className="counter">
          <h2>Count: {currentCount}</h2>
          <button onClick={() => updateCount(1)}>+1</button>
          <button onClick={() => updateCount(10)}>+10</button>
          <button onClick={() => updateCount(100)}>+100</button>

          <hr />

          <button onClick={undo} disabled={index === 0}>Undo</button>
          <button onClick={redo} disabled={index === history.length - 1}>Redo</button>

          <hr />
          <button onClick={() => updateCount(-1)}>-1</button>
          <button onClick={() => updateCount(-10)}>-10</button>
          <button onClick={() => updateCount(-100)}>-100</button>
      </div>
    </>
  )
}

export default App
