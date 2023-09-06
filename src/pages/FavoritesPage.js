import React from "react";
import { Link } from "react-router-dom";

const FavoritesPage = ({ favoriteAnimals, setFavoriteAnimals, onRemoveFavorite }) => {
  const handleRemoveFromFavorites = (animalName) => {
    // Filter out the animal with the provided name from favorites
    const updatedFavorites = favoriteAnimals.filter(
      (animal) => animal.name !== animalName
    );
    // Update the state with the new favorites list using setFavoriteAnimals
    setFavoriteAnimals(updatedFavorites);
    onRemoveFavorite(animalName)
  };

  return (
    <div>
      <h1>Favorites Page</h1>
      <ul>
        {favoriteAnimals.map((animal, index) => (
          <li key={index}>
            {animal.name} - {animal.type}
            <button onClick={() => handleRemoveFromFavorites(animal.name)}>
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Animal Page</Link>
    </div>
  );
};

export default FavoritesPage;
