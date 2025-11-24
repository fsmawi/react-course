import { Link, useLocation } from 'react-router';

/**
 * Navigation Component
 * 
 * Provides navigation links between different pages in the application.
 * Uses React Router's Link component for client-side navigation.
 */

function Navigation() {
  const location = useLocation();

  const navStyle: React.CSSProperties = {
    backgroundColor: '#001529',
    padding: '16px 0',
    marginBottom: '32px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
  };

  const navContainerStyle: React.CSSProperties = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  };

  const linkBaseStyle: React.CSSProperties = {
    color: 'rgba(255, 255, 255, 0.65)',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'all 0.3s'
  };

  const activeLinkStyle: React.CSSProperties = {
    ...linkBaseStyle,
    color: '#fff',
    backgroundColor: '#1890ff'
  };

  return (
    <nav style={navStyle}>
      <div style={navContainerStyle}>
        <span style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginRight: 'auto' }}>
          ⚛️ React Course
        </span>
        <Link 
          to="/" 
          style={location.pathname === '/' ? activeLinkStyle : linkBaseStyle}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          style={location.pathname === '/about' ? activeLinkStyle : linkBaseStyle}
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
