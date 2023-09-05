import React from "react";
import { Link } from "react-router-dom";

const FavoritesPage = ({ favoriteAnimals }) => {
  return (
    <div>
      <h1>Favorites Page</h1>
      <ul>
        {favoriteAnimals.map((animal, index) => (
          <li key={index}>
            {animal.name} - {animal.type}
          </li>
        ))}
      </ul>
      <Link to="/">Back to Animal Page</Link>
    </div>
  );
};

export default FavoritesPage;
