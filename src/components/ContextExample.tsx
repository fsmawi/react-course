import { createContext, useContext, useState, type ReactNode } from 'react';

/**
 * ContextExample Component - Demonstrates useContext hook
 * 
 * Learn:
 * - How to create a Context with createContext
 * - How to provide context values with Context.Provider
 * - How to consume context with useContext hook
 * - Sharing state across multiple components without prop drilling
 */

// Step 1: Create a context
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Step 2: Create a provider component
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Step 3: Create a custom hook for easier context consumption
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Child components that consume the context
function ThemedButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        backgroundColor: theme === 'light' ? '#61dafb' : '#282c34',
        color: theme === 'light' ? '#000' : '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Toggle Theme
    </button>
  );
}

function ThemedPanel() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#1a1a1a',
        color: theme === 'light' ? '#000' : '#fff',
        borderRadius: '4px',
        marginTop: '10px',
      }}
    >
      <p>Current theme: <strong>{theme}</strong></p>
      <p>This panel automatically updates when theme changes!</p>
    </div>
  );
}

// Main component
function ContextExample() {
  return (
    <div
      style={{
        padding: '20px',
        border: '2px solid #9254de',
        borderRadius: '8px',
        margin: '10px',
      }}
    >
      <h2>useContext Example</h2>
      <p style={{ fontSize: '14px', color: '#666' }}>
        Context allows sharing values between components without passing props through every level.
      </p>

      <ThemeProvider>
        <ThemedButton />
        <ThemedPanel />
      </ThemeProvider>
    </div>
  );
}

export default ContextExample;
