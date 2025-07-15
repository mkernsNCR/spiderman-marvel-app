import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSpidermanCharacters } from '../services/marvelService';

const Abilities = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  // Spider-Man abilities data
  const abilities = [
    {
      id: 1,
      name: 'Superhuman Strength',
      description: 'Spider-Man possesses superhuman strength enabling him to lift approximately 10 tons. His physical strength is sufficient to lift and throw objects as heavy as most standard automobiles with ease.',
      icon: '💪'
    },
    {
      id: 2,
      name: 'Wall-Crawling',
      description: 'Spider-Man can cling to any surface using just his fingertips and feet. The extent to which he can stick to objects depends on the surface area in contact with the surface.',
      icon: '🧗'
    },
    {
      id: 3,
      name: 'Spider-Sense',
      description: 'Spider-Man possesses an extrasensory "danger" or "spider" sense which warns him of potential immediate danger by tingling sensation in the back of his skull.',
      icon: '🔮'
    },
    {
      id: 4,
      name: 'Superhuman Speed',
      description: 'Spider-Man is capable of running and moving at speeds much greater than those of an ordinary human. He can easily outrun moving vehicles.',
      icon: '⚡'
    },
    {
      id: 5,
      name: 'Superhuman Reflexes',
      description: 'Spider-Man\'s reflexes are faster than an average human by about a factor of 40. The speed of his reflexes allows him to dodge almost any attack, even gunfire at close range.',
      icon: '👁️'
    },
    {
      id: 6,
      name: 'Superhuman Durability',
      description: 'Spider-Man\'s body is physically tougher and more resistant to some types of injury than the body of a normal human. His body is more resistant to impact forces.',
      icon: '🛡️'
    },
    {
      id: 7,
      name: 'Superhuman Agility',
      description: 'Spider-Man\'s agility, balance, and bodily coordination are all enhanced to levels that are far beyond the natural physical limits of the finest human athlete.',
      icon: '🤸'
    },
    {
      id: 8,
      name: 'Regenerative Healing Factor',
      description: 'Spider-Man has a limited healing factor. While not on Wolverine\'s level, it is sufficiently powerful enough to recover from severe injuries from broken bones and large amounts of tissue damage in a matter of days.',
      icon: '🩹'
    }
  ];

  // Fetch Spider-Man character data
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const characters = await getSpidermanCharacters();
        // Get the main Spider-Man character (Peter Parker)
        const spiderMan = characters.find(char => 
          char.name.includes('Spider-Man') && !char.name.includes('Ultimate')
        ) || characters[0];
        
        setCharacter(spiderMan);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Spider-Man character:', err);
        setError('Failed to load character data. Please try again later.');
        setLoading(false);
      }
    };

    fetchCharacter();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading Spider-Man's abilities...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="error-message">
        {error}
      </div>
    );
  }

  return (
    <div className="abilities-page">
      <div className="hero-section">
        <h1>Spider-Man's Abilities</h1>
        <p>Explore the extraordinary powers and abilities that make Spider-Man one of Marvel's most iconic superheroes.</p>
      </div>
      
      {character && (
        <div className="character-profile">
          <div className="profile-header">
            <img 
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
              alt={character.name} 
              className="profile-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/src/assets/image-not-found.png';
              }}
            />
            <div className="profile-info">
              <h2>{character.name}</h2>
              <p className="profile-description">
                {character.description || "Peter Parker gained his powers after being bitten by a radioactive spider, giving him enhanced strength, agility, and a precognitive 'spider-sense'."}
              </p>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-label">Comics:</span>
                  <span className="stat-value">{character.comics?.available || 0}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Series:</span>
                  <span className="stat-value">{character.series?.available || 0}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Stories:</span>
                  <span className="stat-value">{character.stories?.available || 0}</span>
                </div>
              </div>
              <Link to={`/character/${character.id}`} className="btn btn-primary">
                View Full Profile
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="abilities-grid">
        {abilities.map((ability) => (
          <div key={ability.id} className="ability-card">
            <div className="ability-icon">{ability.icon}</div>
            <h3>{ability.name}</h3>
            <p>{ability.description}</p>
          </div>
        ))}
      </div>

      <div className="comparison-section">
        <h2>Power Comparison</h2>
        <p>How Spider-Man's abilities compare to other Marvel heroes</p>
        
        <div className="power-chart">
          <div className="chart-row">
            <span className="chart-label">Strength</span>
            <div className="chart-bar">
              <div className="chart-fill" style={{ width: '65%' }}></div>
            </div>
            <span className="chart-value">6.5/10</span>
          </div>
          <div className="chart-row">
            <span className="chart-label">Speed</span>
            <div className="chart-bar">
              <div className="chart-fill" style={{ width: '70%' }}></div>
            </div>
            <span className="chart-value">7/10</span>
          </div>
          <div className="chart-row">
            <span className="chart-label">Agility</span>
            <div className="chart-bar">
              <div className="chart-fill" style={{ width: '95%' }}></div>
            </div>
            <span className="chart-value">9.5/10</span>
          </div>
          <div className="chart-row">
            <span className="chart-label">Intelligence</span>
            <div className="chart-bar">
              <div className="chart-fill" style={{ width: '85%' }}></div>
            </div>
            <span className="chart-value">8.5/10</span>
          </div>
          <div className="chart-row">
            <span className="chart-label">Durability</span>
            <div className="chart-bar">
              <div className="chart-fill" style={{ width: '60%' }}></div>
            </div>
            <span className="chart-value">6/10</span>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Want to learn more about Spider-Man?</h2>
        <div className="cta-buttons">
          <Link to="/comics" className="btn btn-primary">Explore Comics</Link>
          <Link to="/timeline" className="btn btn-secondary">View Timeline</Link>
        </div>
      </div>
    </div>
  );
};

export default Abilities;
