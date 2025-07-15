import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/src/assets/spider-logo.svg" alt="Spider-Man Logo" />
          <span>Spider-Man Facts</span>
        </Link>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`navbar-toggle-icon ${isMenuOpen ? 'open' : ''}`}></span>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/comics" onClick={() => setIsMenuOpen(false)}>Comics</Link>
          </li>
          <li>
            <Link to="/abilities" onClick={() => setIsMenuOpen(false)}>Abilities</Link>
          </li>
          <li>
            <Link to="/timeline" onClick={() => setIsMenuOpen(false)}>Timeline</Link>
          </li>
          <li>
            <button 
              className="theme-toggle" 
              onClick={toggleDarkMode} 
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
