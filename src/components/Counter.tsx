import { useState } from 'react';

/**
 * Counter Component - Demonstrates useState hook
 * 
 * Learn:
 * - How to use the useState hook
 * - Event handling in React
 * - Component state management
 */
function Counter() {
  // useState hook: creates a state variable and a function to update it
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #61dafb', 
      borderRadius: '8px',
      margin: '10px'
    }}>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

export default Counter;
