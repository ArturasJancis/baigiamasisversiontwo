import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimalCard from "./AnimalCard"; 

const AnimalPage = ({ favoriteAnimals, setFavoriteAnimals }) => {
  const [animals, setAnimals] = useState([
    {
      name: "Fluffy",
      type: "Cat",
    },
    {
      name: "Buddy",
      type: "Dog",
    },
  ]);

  const handleAddToFavorites = (animal) => {
    if (!favoriteAnimals.some((favAnimal) => favAnimal.name === animal.name)) {
      setFavoriteAnimals([...favoriteAnimals, animal]);
    }
  };

  return (
    <div>
      <h1>Animal Page</h1>
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>
            <AnimalCard animal={animal} onAddToFavorites={handleAddToFavorites} />
          </li>
        ))}
      </ul>
      <Link to="/favorites">Go to Favorites</Link>
    </div>
  );
};

export default AnimalPage;
