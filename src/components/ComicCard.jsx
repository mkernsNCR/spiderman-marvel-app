import PropTypes from 'prop-types';

const ComicCard = ({ comic }) => {
  const { title, thumbnail, prices, dates, creators } = comic;
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
  
  // Get the price
  const price = prices && prices.length > 0 
    ? prices.find(p => p.type === 'printPrice')?.price || prices[0].price 
    : 'N/A';
  
  // Format the date
  const releaseDate = dates && dates.length > 0 
    ? dates.find(d => d.type === 'onsaleDate')?.date 
    : null;
  
  const formattedDate = releaseDate 
    ? new Date(releaseDate).toLocaleDateString() 
    : 'Unknown';
  
  // Get writers and artists
  const writers = creators?.items
    ?.filter(creator => creator.role.includes('writer'))
    .map(writer => writer.name)
    .join(', ') || 'Unknown';
  
  const artists = creators?.items
    ?.filter(creator => creator.role.includes('artist') || creator.role.includes('penciller'))
    .map(artist => artist.name)
    .join(', ') || 'Unknown';

  return (
    <div className="card comic-card">
      <img 
        src={imageUrl} 
        alt={title} 
        className="card-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/src/assets/image-not-found.png';
        }}
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        
        <div className="comic-details">
          <div className="comic-detail">
            <span className="detail-label">Price:</span>
            <span className="detail-value">${price}</span>
          </div>
          
          <div className="comic-detail">
            <span className="detail-label">Release Date:</span>
            <span className="detail-value">{formattedDate}</span>
          </div>
          
          <div className="comic-detail">
            <span className="detail-label">Writer(s):</span>
            <span className="detail-value">{writers}</span>
          </div>
          
          <div className="comic-detail">
            <span className="detail-label">Artist(s):</span>
            <span className="detail-value">{artists}</span>
          </div>
        </div>
        
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};

ComicCard.propTypes = {
  comic: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    }).isRequired,
    prices: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        price: PropTypes.number
      })
    ),
    dates: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        date: PropTypes.string
      })
    ),
    creators: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          role: PropTypes.string
        })
      )
    })
  }).isRequired
};

export default ComicCard;
