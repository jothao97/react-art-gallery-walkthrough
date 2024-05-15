import React from 'react';
import { useParams } from 'react-router-dom';
import artworks from '../data';

function Artwork() {
  const { artworkId } = useParams();
  const art = artworks.find(a => a.id === parseInt(artworkId));

  if (!art) {
    return <div>Artwork not found!</div>;
  }

  return (
    <div className="artwork-detail">
      <img src={art.imageUrl} alt={art.name} />
      <h2>{art.name}</h2>
      <p>{art.artist}</p>
      <p>{art.description}</p>
    </div>
  );
}

export default Artwork;
