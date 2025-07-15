import PropTypes from 'prop-types';

const ComicList = ({ comics }) => {
  if (!comics || comics.length === 0) {
    return <p>No comics available.</p>;
  }

  return (
    <div className="comic-list">
      {comics.map(comic => (
        <div key={comic.id} className="comic-list-item">
          <img 
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} 
            alt={comic.title}
            className="comic-thumbnail"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/src/assets/image-not-found.png';
            }}
          />
          <div className="comic-info">
            <h3>{comic.title}</h3>
            <p className="comic-description">
              {comic.description 
                ? comic.description.length > 150 
                  ? `${comic.description.substring(0, 150)}...` 
                  : comic.description
                : 'No description available'}
            </p>
            <div className="comic-metadata">
              {comic.dates && comic.dates.length > 0 && (
                <span className="comic-date">
                  {new Date(comic.dates.find(d => d.type === 'onsaleDate')?.date).toLocaleDateString()}
                </span>
              )}
              {comic.prices && comic.prices.length > 0 && (
                <span className="comic-price">
                  ${comic.prices.find(p => p.type === 'printPrice')?.price || comic.prices[0].price}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ComicList.propTypes = {
  comics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      thumbnail: PropTypes.shape({
        path: PropTypes.string.isRequired,
        extension: PropTypes.string.isRequired
      }).isRequired,
      dates: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          date: PropTypes.string
        })
      ),
      prices: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          price: PropTypes.number
        })
      )
    })
  ).isRequired
};

export default ComicList;
