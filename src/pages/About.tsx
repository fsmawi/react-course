import { Link } from 'react-router';

/**
 * About Page Component
 * 
 * This page provides information about the React course and can be customized
 * based on your needs.
 */

function About() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
        About This Course
      </h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Learn React fundamentals through practical examples
      </p>
      
      <div style={{ 
        backgroundColor: '#f0f2f5', 
        padding: '24px', 
        borderRadius: '8px',
        marginBottom: '24px'
      }}>
        <h2 style={{ color: '#1890ff', marginTop: '0' }}>📖 Course Overview</h2>
        <p>
          This React course covers essential concepts and hooks through hands-on examples. 
          Each component demonstrates a specific React feature with clear, well-commented code.
        </p>
      </div>

      <div style={{ 
        backgroundColor: '#f0f2f5', 
        padding: '24px', 
        borderRadius: '8px',
        marginBottom: '24px'
      }}>
        <h2 style={{ color: '#722ed1', marginTop: '0' }}>🎯 What You'll Learn</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Component Basics:</strong> Props, JSX, and component composition</li>
          <li><strong>State Management:</strong> useState and useReducer</li>
          <li><strong>Side Effects:</strong> useEffect for data fetching and subscriptions</li>
          <li><strong>Context API:</strong> Sharing state across components</li>
          <li><strong>Performance:</strong> useMemo and useCallback optimization</li>
          <li><strong>References:</strong> useRef for DOM manipulation</li>
          <li><strong>Routing:</strong> React Router for multi-page applications</li>
        </ul>
      </div>

      <div style={{ 
        backgroundColor: '#f0f2f5', 
        padding: '24px', 
        borderRadius: '8px',
        marginBottom: '24px'
      }}>
        <h2 style={{ color: '#52c41a', marginTop: '0' }}>🚀 Getting Started</h2>
        <p>
          Head over to the <Link to="/" style={{ color: '#1890ff', textDecoration: 'none', fontWeight: 'bold' }}>
            Home page
          </Link> to explore all the interactive examples. Each example is self-contained 
          and includes explanations to help you understand the concepts.
        </p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link 
          to="/" 
          style={{ 
            backgroundColor: '#1890ff', 
            color: 'white', 
            padding: '12px 24px', 
            borderRadius: '6px',
            textDecoration: 'none',
            display: 'inline-block',
            fontWeight: 'bold'
          }}
        >
          ← Back to Examples
        </Link>
      </div>
    </div>
  );
}

export default About;
