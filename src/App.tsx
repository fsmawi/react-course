import { Routes, Route } from 'react-router';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';

/**
 * Main App Component
 * 
 * This app uses React Router to demonstrate a multi-page application.
 * The app includes:
 * - Home page: All React hook and component examples
 * - About page: Information about the course
 */

function App() {
  return (
    <div>
      <Navigation />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

