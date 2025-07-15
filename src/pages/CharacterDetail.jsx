import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCharacterById, getCharacterComics } from '../services/marvelService';
import ComicList from '../components/ComicList';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        setLoading(true);
        const characterData = await getCharacterById(id);
        setCharacter(characterData);
        
        const comicsData = await getCharacterComics(id);
        setComics(comicsData);
        
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch character details. Please try again later.');
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (loading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!character) {
    return <div className="error-message">Character not found</div>;
  }

  return (
    <div className="character-detail">
      <Link to="/" className="back-link">
        <i className="fas fa-arrow-left"></i> Back to Home
      </Link>
      
      <div className="character-header">
        <img 
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
          alt={character.name} 
          className="character-image"
        />
        <div className="character-info">
          <h1>{character.name}</h1>
          <p className="description">
            {character.description || "No description available for this character."}
          </p>
          <div className="character-meta">
            <span className="meta-item">
              <i className="fas fa-calendar-alt"></i> Modified: {new Date(character.modified).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      <div className="character-stats">
        <h2>Stats & Information</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <i className="fas fa-book stat-icon"></i>
            <h3>Comics</h3>
            <p>{character.comics.available}</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-tv stat-icon"></i>
            <h3>Series</h3>
            <p>{character.series.available}</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-scroll stat-icon"></i>
            <h3>Stories</h3>
            <p>{character.stories.available}</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-bolt stat-icon"></i>
            <h3>Events</h3>
            <p>{character.events.available}</p>
          </div>
        </div>
      </div>

      <div className="character-comics">
        <h2>Recent Comics</h2>
        {comics.length > 0 ? (
          <ComicList comics={comics} />
        ) : (
          <div className="no-content-message">
            <i className="fas fa-exclamation-circle"></i>
            <p>No comics available for this character.</p>
          </div>
        )}
      </div>

      <div className="character-links">
        <h2>External Links</h2>
        <div className="links-grid">
          {character.urls.map((url, index) => {
            // Determine icon based on URL type
            let icon = 'fa-link';
            if (url.type === 'detail') icon = 'fa-info-circle';
            if (url.type === 'wiki') icon = 'fa-book-open';
            if (url.type === 'comiclink') icon = 'fa-book';
            
            return (
              <a 
                key={index} 
                href={url.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="external-link"
              >
                <i className={`fas ${icon}`}></i>
                {url.type.charAt(0).toUpperCase() + url.type.slice(1)}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
