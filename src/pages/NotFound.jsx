import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <img 
        src="/src/assets/spiderman-confused.png" 
        alt="Confused Spider-Man" 
        className="not-found-image"
      />
      <p>Even Spider-Man can't find this page!</p>
      <Link to="/">
        <button>Return to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
