import { useState, useEffect } from 'react';

/**
 * EffectExample Component - Demonstrates useEffect hook
 * 
 * Learn:
 * - How to use useEffect for side effects
 * - Dependency array
 * - Cleanup functions
 * - Component lifecycle
 */

function EffectExample() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Effect that runs on every render
  useEffect(() => {
    console.log('Component rendered or updated!');
  });

  // Effect that runs only once (on mount)
  useEffect(() => {
    console.log('Component mounted!');
    
    // Cleanup function (runs on unmount)
    return () => {
      console.log('Component will unmount!');
    };
  }, []); // Empty dependency array = run once on mount

  // Effect that runs when count changes
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
    document.title = `Count: ${count}`;
  }, [count]); // Runs when 'count' changes

  // Effect with interval (demonstrates cleanup)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    // Cleanup: clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #faad14', 
      borderRadius: '8px',
      margin: '10px'
    }}>
      <h2>useEffect Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      
      <p style={{ marginTop: '20px' }}>
        Timer: {seconds} seconds
      </p>
      
      <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        Check the browser console to see effect logs!
      </p>
    </div>
  );
}

export default EffectExample;
