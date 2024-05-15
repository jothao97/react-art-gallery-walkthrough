import React from 'react';
import { Link } from 'react-router-dom';
import artworks from '../data';

function Gallery() {
  return (
    <div className="gallery">
      {artworks.map((art) => (
        <div key={art.id} className="artwork">
          <img src={art.imageUrl} alt={art.name} />
          <h3>{art.name}</h3>
          <p>{art.artist}</p>
          <Link to={`/artwork/${art.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
