import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Timeline = () => {
  const [loading, setLoading] = useState(true);

  // Spider-Man timeline events
  const timelineEvents = [
    {
      id: 1,
      year: 1962,
      title: 'First Appearance',
      description: 'Spider-Man makes his first appearance in Amazing Fantasy #15, created by Stan Lee and Steve Ditko.',
      image: 'https://i.imgur.com/placeholder-image.png',
      important: true
    },
    {
      id: 2,
      year: 1963,
      title: 'The Amazing Spider-Man',
      description: 'The Amazing Spider-Man series launches, becoming one of Marvel\'s flagship titles.',
      image: 'https://i.imgur.com/placeholder-image.png',
      important: true
    },
    {
      id: 3,
      year: 1966,
      title: 'First Animated Series',
      description: 'The first Spider-Man animated series debuts.',
      image: 'https://i.imgur.com/placeholder-image.png',
      important: false
    },
    {
      id: 4,
      year: 1973,
      title: 'The Night Gwen Stacy Died',
      description: 'One of the most impactful Spider-Man stories where his girlfriend Gwen Stacy is killed by the Green Goblin.',
      image: 'https://i.imgur.com/placeholder-image.png',
      important: true
    },
    {
      id: 5,
      year: 1984,
      title: 'Black Costume Debut',
      description: 'Spider-Man acquires his black costume (later revealed to be the alien symbiote that would become Venom).',
      image: 'https://i.imgur.com/placeholder-image.png',
      important: true
    },
    {
      id: 6,
      year: 1988,
      title: 'Venom\'s First Appearance',
      description: 'Venom makes his first full appearance as one of Spider-Man\'s most dangerous enemies.',
      image: 'https://i.imgur.com/placeholder-image.png',
      important: true
    },
    {
      id: 7,
      year: 2002,
      title: 'First Spider-Man Film',
      description: 'Sam Raimi\'s Spider-Man starring Tobey Maguire is released, breaking box office records.',
      image: 'https://i.imgur.com/placeholder-image.png',
      important: true
    },
    {
      id: 8,
      year: 2012,
      title: 'The Amazing Spider-Man Reboot',
      description: 'The Amazing Spider-Man film starring Andrew Garfield reboots the franchise.',
      image: 'https://i.imgur.com/placeholder-image.png',
      important: false
    },
    {
      id: 9,
      year: 2016,
      title: 'MCU Introduction',
      description: 'Spider-Man (played by Tom Holland) is introduced to the Marvel Cinematic Universe in Captain America: Civil War.',
      image: 'https://i.imgur.com/placeholder-image.png',
      important: true
    },
    {
      id: 10,
      year: 2018,
      title: 'Into the Spider-Verse',
      description: 'Spider-Man: Into the Spider-Verse animated film is released, winning an Academy Award.',
      image: 'https://i.imgur.com/placeholder-image.png',
      important: true
    },
    {
      id: 11,
      year: 2021,
      title: 'No Way Home',
      description: 'Spider-Man: No Way Home brings together three generations of Spider-Man actors in a multiverse story.',
      image: 'https://i.imgur.com/placeholder-image.png',
      important: true
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading Spider-Man timeline...</p>
      </div>
    );
  }

  return (
    <div className="timeline-page">
      <div className="hero-section">
        <h1>Spider-Man Timeline</h1>
        <p>Explore the key moments in Spider-Man's history from his first comic appearance to his latest adventures.</p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {timelineEvents.map((event, index) => (
          <div 
            key={event.id} 
            className={`timeline-event ${event.important ? 'important' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-year">{event.year}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              {event.image && (
                <div className="timeline-image">
                  <img src={event.image} alt={event.title} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="timeline-filters">
        <h3>Filter Timeline</h3>
        <div className="filter-options">
          <button className="filter-btn active">All Events</button>
          <button className="filter-btn">Comics</button>
          <button className="filter-btn">Movies</button>
          <button className="filter-btn">Major Events</button>
        </div>
      </div>

      <div className="cta-section">
        <h2>Discover More Spider-Man Content</h2>
        <div className="cta-buttons">
          <Link to="/comics" className="btn btn-primary">Explore Comics</Link>
          <Link to="/abilities" className="btn btn-secondary">View Abilities</Link>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
