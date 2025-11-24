import { useRef, useState, useEffect } from 'react';

/**
 * RefExample Component - Demonstrates useRef hook
 * 
 * Learn:
 * - How to use useRef to access DOM elements
 * - How to use useRef to persist values across renders without re-rendering
 * - Difference between ref and state
 * - Common use cases: focus management, storing previous values, etc.
 */

function RefExample() {
  // Use case 1: Accessing DOM elements
  const inputRef = useRef<HTMLInputElement>(null);

  // Use case 2: Storing mutable values that don't cause re-renders
  const renderCountRef = useRef(0);
  const [count, setCount] = useState(0);

  // Use case 3: Storing previous value
  const previousCountRef = useRef<number>();

  // Track render count (doesn't cause re-render)
  useEffect(() => {
    renderCountRef.current = renderCountRef.current + 1;
  }); // No dependency array = runs on every render

  // Update previous count after each render
  useEffect(() => {
    previousCountRef.current = count;
  }, [count]);

  const focusInput = () => {
    // Access DOM element directly
    inputRef.current?.focus();
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        border: '2px solid #1890ff',
        borderRadius: '8px',
        margin: '10px',
      }}
    >
      <h2>useRef Example</h2>
      <p style={{ fontSize: '14px', color: '#666' }}>
        useRef creates a mutable reference that persists across renders without causing re-renders.
      </p>

      {/* Example 1: DOM Reference */}
      <div style={{ marginTop: '15px' }}>
        <h3>1. DOM Reference - Focus Management</h3>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type something..."
            style={{
              padding: '8px',
              border: '1px solid #d9d9d9',
              borderRadius: '4px',
            }}
          />
          <button
            onClick={focusInput}
            style={{
              padding: '8px 15px',
              backgroundColor: '#1890ff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Focus Input
          </button>
          <button
            onClick={clearInput}
            style={{
              padding: '8px 15px',
              backgroundColor: '#ff4d4f',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Clear & Focus
          </button>
        </div>
      </div>

      {/* Example 2: Render Count */}
      <div style={{ marginTop: '20px' }}>
        <h3>2. Persisting Values - Render Counter</h3>
        <div
          style={{
            padding: '15px',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
          }}
        >
          <p>
            <strong>Component has rendered:</strong> {renderCountRef.current} times
          </p>
          <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
            Note: This counter updates WITHOUT causing a re-render!
          </p>
        </div>
      </div>

      {/* Example 3: Previous Value */}
      <div style={{ marginTop: '20px' }}>
        <h3>3. Storing Previous Value</h3>
        <div
          style={{
            padding: '15px',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
          }}
        >
          <p>
            <strong>Current count:</strong> {count}
          </p>
          <p>
            <strong>Previous count:</strong>{' '}
            {previousCountRef.current !== undefined ? previousCountRef.current : 'N/A'}
          </p>
          <button
            onClick={() => setCount(count + 1)}
            style={{
              marginTop: '10px',
              padding: '8px 15px',
              backgroundColor: '#52c41a',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Increment Count
          </button>
        </div>
      </div>

      {/* Key Differences */}
      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#fff7e6',
          border: '1px solid #faad14',
          borderRadius: '4px',
        }}
      >
        <h4 style={{ marginTop: 0 }}>📚 Key Differences: useRef vs useState</h4>
        <ul style={{ marginBottom: 0 }}>
          <li>
            <strong>useRef:</strong> Updating doesn't trigger re-render. Use for DOM access or
            storing mutable values.
          </li>
          <li>
            <strong>useState:</strong> Updating triggers re-render. Use for values that affect the
            UI.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RefExample;
