import Greeting from '../components/Greeting';
import Counter from '../components/Counter';
import EffectExample from '../components/EffectExample';
import TodoList from '../components/TodoList';
import ContextExample from '../components/ContextExample';
import ReducerExample from '../components/ReducerExample';
import RefExample from '../components/RefExample';
import MemoExample from '../components/MemoExample';
import CallbackExample from '../components/CallbackExample';

/**
 * Home Page Component
 * 
 * This page demonstrates fundamental React concepts and hooks:
 * 
 * Basic Concepts:
 * 1. Components and Props (Greeting)
 * 2. State Management (Counter)
 * 3. Side Effects (EffectExample)
 * 4. Lists and Forms (TodoList)
 * 
 * Advanced Hooks:
 * 5. Context API (ContextExample)
 * 6. Complex State (ReducerExample)
 * 7. References (RefExample)
 * 8. Memoization (MemoExample)
 * 9. Callback Optimization (CallbackExample)
 */

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
        React Course - Component & Hook Examples
      </h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Comprehensive examples of React fundamentals and commonly used hooks
      </p>
      
      {/* Basic Concepts Section */}
      <h2 style={{ borderBottom: '2px solid #1890ff', paddingBottom: '10px', marginTop: '30px' }}>
        📚 Basic Concepts
      </h2>
      
      <Greeting name="Student" isLoggedIn={true} />
      <Counter />
      <EffectExample />
      <TodoList />
      
      {/* Advanced Hooks Section */}
      <h2 style={{ borderBottom: '2px solid #722ed1', paddingBottom: '10px', marginTop: '40px' }}>
        🔥 React Hooks
      </h2>
      
      <ContextExample />
      <ReducerExample />
      <RefExample />
      <MemoExample />
      <CallbackExample />
    </div>
  );
}

export default Home;
