/**
 * Greeting Component - Demonstrates props
 * 
 * Learn:
 * - How to pass and use props
 * - TypeScript typing for props
 * - Conditional rendering
 */

interface GreetingProps {
  name: string;
  isLoggedIn?: boolean;
}

function Greeting({ name, isLoggedIn = false }: GreetingProps) {
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #52c41a', 
      borderRadius: '8px',
      margin: '10px'
    }}>
      <h2>Greeting Example</h2>
      {isLoggedIn ? (
        <p>Welcome back, {name}! 👋</p>
      ) : (
        <p>Hello, {name}! Please log in.</p>
      )}
    </div>
  );
}

export default Greeting;
