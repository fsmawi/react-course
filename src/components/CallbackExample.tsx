import { useState, useCallback, memo } from 'react';

/**
 * CallbackExample Component - Demonstrates useCallback hook
 * 
 * Learn:
 * - How to use useCallback to memoize functions
 * - When to use useCallback for performance optimization
 * - Using React.memo with useCallback to prevent unnecessary re-renders
 * - Difference between useCallback and useMemo
 */

// Child component wrapped in React.memo
// Only re-renders if props actually change
const TodoItem = memo(function TodoItem({
  todo,
  onToggle,
  onDelete,
}: {
  todo: { id: number; text: string; completed: boolean };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  console.log(`🔄 Rendering TodoItem: ${todo.text}`);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px',
        border: '1px solid #d9d9d9',
        borderRadius: '4px',
        marginBottom: '5px',
        backgroundColor: todo.completed ? '#f0f0f0' : 'white',
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ cursor: 'pointer' }}
      />
      <span
        style={{
          flex: 1,
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#999' : '#000',
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        style={{
          padding: '5px 10px',
          backgroundColor: '#ff4d4f',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Delete
      </button>
    </div>
  );
});

// Display component to show render info
const RenderCounter = memo(function RenderCounter({ count }: { count: number }) {
  console.log('🔄 Rendering RenderCounter');
  return (
    <div
      style={{
        padding: '10px',
        backgroundColor: '#e6f7ff',
        border: '1px solid #1890ff',
        borderRadius: '4px',
        marginBottom: '10px',
      }}
    >
      <p style={{ margin: 0, fontSize: '14px' }}>
        📊 Parent component has rendered <strong>{count}</strong> times
      </p>
      <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#666' }}>
        Check console to see which child components re-render!
      </p>
    </div>
  );
});

function CallbackExample() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn useCallback', completed: false },
    { id: 2, text: 'Optimize React apps', completed: false },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [renderCount, setRenderCount] = useState(0);

  // Force a re-render to demonstrate useCallback
  const forceRender = () => {
    setRenderCount((prev) => prev + 1);
  };

  // WITHOUT useCallback: New function is created on every render
  // This would cause ALL TodoItems to re-render even with React.memo
  // const handleToggle = (id: number) => {
  //   setTodos(todos.map(todo =>
  //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //   ));
  // };

  // WITH useCallback: Function is memoized and only recreated when dependencies change
  const handleToggle = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []); // No dependencies = function never changes

  const handleDelete = useCallback((id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const handleAdd = () => {
    if (inputValue.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue('');
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        border: '2px solid #722ed1',
        borderRadius: '8px',
        margin: '10px',
      }}
    >
      <h2>useCallback Example - Optimized Todo List</h2>
      <p style={{ fontSize: '14px', color: '#666' }}>
        useCallback memoizes functions to prevent unnecessary child re-renders when used with
        React.memo.
      </p>

      <RenderCounter count={renderCount} />

      {/* Add Todo */}
      <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Add a new todo..."
          style={{
            flex: 1,
            padding: '8px',
            border: '1px solid #d9d9d9',
            borderRadius: '4px',
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: '8px 15px',
            backgroundColor: '#52c41a',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add Todo
        </button>
      </div>

      {/* Force Re-render Button */}
      <button
        onClick={forceRender}
        style={{
          marginTop: '10px',
          padding: '8px 15px',
          backgroundColor: '#faad14',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Force Re-render (Watch Console!)
      </button>

      {/* Todo List */}
      <div style={{ marginTop: '20px' }}>
        {todos.length === 0 ? (
          <p style={{ color: '#999' }}>No todos yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {/* Stats */}
      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>Completed:</strong> {todos.filter((t) => t.completed).length} /{' '}
          {todos.length}
        </p>
      </div>

      {/* Info Box */}
      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#fff7e6',
          border: '1px solid #faad14',
          borderRadius: '4px',
        }}
      >
        <h4 style={{ marginTop: 0 }}>💡 What's Happening?</h4>
        <ul style={{ marginBottom: 0, paddingLeft: '20px' }}>
          <li>
            <strong>Click "Force Re-render":</strong> Parent re-renders but TodoItems DON'T
            (thanks to useCallback + React.memo)
          </li>
          <li>
            <strong>Toggle/Delete:</strong> Only the affected TodoItem re-renders
          </li>
          <li>
            <strong>Without useCallback:</strong> Every TodoItem would re-render on parent
            re-render
          </li>
        </ul>
        <p style={{ marginTop: '10px', marginBottom: 0, fontSize: '12px' }}>
          Check the console to see which components are rendering!
        </p>
      </div>
    </div>
  );
}

export default CallbackExample;
