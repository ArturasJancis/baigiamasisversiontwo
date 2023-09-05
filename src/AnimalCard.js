import React from "react";

const AnimalCard = ({ animal, onAddToFavorites }) => {
  return (
    <div>
      <h2>{animal.name}</h2>
      <p>Type: {animal.type}</p>
      <button onClick={() => onAddToFavorites(animal)}>Add to Favorites</button>
    </div>
  );
};

export default AnimalCard;
