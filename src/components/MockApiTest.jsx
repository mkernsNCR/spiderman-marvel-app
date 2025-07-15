import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MockApiTest.css';

const MockApiTest = () => {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('characters');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch characters from mock API
        const charactersResponse = await axios.get('/api/mock/characters');
        setCharacters(charactersResponse.data.data.results);

        // Fetch comics from mock API
        const comicsResponse = await axios.get('/api/mock/comics');
        setComics(comicsResponse.data.data.results);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data from mock API:', err);
        setError('Failed to fetch data from mock API. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="mock-api-container">
        <h1>Mock Marvel API Test</h1>
        <div className="loading">Loading data from mock API...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mock-api-container">
        <h1>Mock Marvel API Test</h1>
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="mock-api-container">
      <h1>Mock Marvel API Test</h1>
      <p className="api-notice">
        Using mock API data while Marvel API issues are being resolved.
      </p>

      <div className="tabs">
        <button 
          className={activeTab === 'characters' ? 'active' : ''} 
          onClick={() => setActiveTab('characters')}
        >
          Characters
        </button>
        <button 
          className={activeTab === 'comics' ? 'active' : ''} 
          onClick={() => setActiveTab('comics')}
        >
          Comics
        </button>
      </div>

      {activeTab === 'characters' && (
        <div className="characters-container">
          <h2>Spider-Man Characters</h2>
          <div className="characters-grid">
            {characters.map(character => (
              <div key={character.id} className="character-card">
                <img 
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                  alt={character.name}
                  onError={(e) => {
                    e.target.src = '/assets/image-not-found.png';
                  }}
                />
                <h3>{character.name}</h3>
                <p className="description">
                  {character.description || 'No description available.'}
                </p>
                <div className="comics-count">
                  Comics: {character.comics.available}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'comics' && (
        <div className="comics-container">
          <h2>Spider-Man Comics</h2>
          <div className="comics-grid">
            {comics.map(comic => (
              <div key={comic.id} className="comic-card">
                <img 
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} 
                  alt={comic.title}
                  onError={(e) => {
                    e.target.src = '/assets/image-not-found.png';
                  }}
                />
                <h3>{comic.title}</h3>
                <p className="description">
                  {comic.description || 'No description available.'}
                </p>
                <div className="comic-details">
                  <span>Issue #{comic.issueNumber}</span>
                  <span>Pages: {comic.pageCount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MockApiTest;
