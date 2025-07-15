import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import { getSpidermanCharacters } from '../services/marvelService';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getSpidermanCharacters();
        setCharacters(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch Spiderman characters. Please try again later.');
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div>
      <section className="hero">
        <h1>The Amazing Spider-Man</h1>
        <p>
          Discover facts, abilities, and stories about your friendly neighborhood Spider-Man
          and related characters from the Marvel universe.
        </p>
      </section>

      <section>
        <h2>Featured Characters</h2>
        <div className="grid">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </section>

      <section>
        <h2>Explore More</h2>
        <div className="grid">
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Comics</h3>
              <p>Explore Spider-Man's appearances across Marvel comics.</p>
              <Link to="/comics">
                <button>View Comics</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Abilities</h3>
              <p>Learn about Spider-Man's superpowers and abilities.</p>
              <Link to="/abilities">
                <button>View Abilities</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Timeline</h3>
              <p>Follow Spider-Man's journey through the Marvel universe.</p>
              <Link to="/timeline">
                <button>View Timeline</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
