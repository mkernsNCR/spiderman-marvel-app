import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>Spider-Man Facts</h3>
          <p>Your ultimate resource for Spider-Man information from the Marvel universe.</p>
          <p className="disclaimer">
            Data provided by Marvel. © {currentYear} MARVEL
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/comics">Comics</Link></li>
            <li><Link to="/abilities">Abilities</Link></li>
            <li><Link to="/timeline">Timeline</Link></li>
            <li><Link to="/mock">Mock API Test</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Marvel Resources</h3>
          <ul className="footer-links">
            <li>
              <a 
                href="https://www.marvel.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Marvel Official Site
              </a>
            </li>
            <li>
              <a 
                href="https://developer.marvel.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Marvel Developer Portal
              </a>
            </li>
            <li>
              <a 
                href="https://www.marvel.com/comics" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Marvel Comics
              </a>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Stay updated with the latest Spider-Man news and releases!</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" aria-label="Email for newsletter" />
            <button type="button" aria-label="Subscribe">Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Spider-Man Facts. This site is not affiliated with Marvel Entertainment, LLC.</p>
          <p>
            <small>
              Data provided by Marvel. © {currentYear} MARVEL
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
