import { useState, useEffect } from 'react';
import { getSpidermanComics } from '../services/marvelService';
import ComicCard from '../components/ComicCard';

const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 20;

  useEffect(() => {
    const fetchComics = async () => {
      try {
        setLoading(true);
        const data = await getSpidermanComics(offset, limit);
        
        if (data.length < limit) {
          setHasMore(false);
        }
        
        setComics(prevComics => [...prevComics, ...data]);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch comics. Please try again later.');
        setLoading(false);
      }
    };

    fetchComics();
  }, [offset]);

  const loadMore = () => {
    setOffset(prevOffset => prevOffset + limit);
  };

  return (
    <div className="comics-list">
      <h1>Spider-Man Comics</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="filters">
        <input 
          type="text" 
          placeholder="Search comics..." 
          className="search-input"
        />
        <select className="filter-select">
          <option value="">Sort by</option>
          <option value="title">Title</option>
          <option value="modified">Release Date</option>
          <option value="focDate">FOC Date</option>
        </select>
      </div>
      
      <div className="grid">
        {comics.map(comic => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>
      
      {loading && <div className="spinner"></div>}
      
      {!loading && hasMore && (
        <button onClick={loadMore} className="load-more-btn">
          Load More
        </button>
      )}
      
      {!hasMore && comics.length > 0 && (
        <p className="end-message">You've reached the end of the list</p>
      )}
    </div>
  );
};

export default ComicsList;
