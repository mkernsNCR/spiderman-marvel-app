import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterCard = ({ character }) => {
  const { id, name, thumbnail, description } = character;
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
  
  // Create a short description if available
  const shortDescription = description 
    ? description.length > 100 
      ? `${description.substring(0, 100)}...` 
      : description
    : 'No description available';

  return (
    <div className="card character-card">
      <img 
        src={imageUrl} 
        alt={name} 
        className="card-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/src/assets/image-not-found.png';
        }}
      />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{shortDescription}</p>
        <Link to={`/character/${id}`}>
          <button className="view-details-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    }).isRequired,
    description: PropTypes.string
  }).isRequired
};

export default CharacterCard;
