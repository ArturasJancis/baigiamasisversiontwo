import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimalPage from "./pages/AnimalPage";
import FavoritesPage from "./pages/FavoritesPage";

const App = () => {
  const [favoriteAnimals, setFavoriteAnimals] = useState([]);
  const [animals, setAnimals] = useState([
    {
      name: "Fluffy",
      type: "Cat",
      addedToFavorites: false,
    },
    {
      name: "Buddy",
      type: "Dog",
      addedToFavorites: false,
    },
  ]);

  const addAnimalToFavorites = (animal) => {
    if (!favoriteAnimals.some((favAnimal) => favAnimal.name === animal.name)) {
      setFavoriteAnimals([...favoriteAnimals, animal]);
      setAnimals((prevAnimals) =>
        prevAnimals.map((prevAnimal) =>
          prevAnimal.name === animal.name
            ? { ...prevAnimal, addedToFavorites: true }
            : prevAnimal
        )
      );
    }
  };

  const addNewAnimal = (animal) => {
    setAnimals([...animals, { ...animal, addedToFavorites: false }]);
  };

  const handleRemoveFavorite = (animalName) => {
    setAnimals((prevAnimals) => {
      return prevAnimals.map((animal) => {
        if (animal.name === animalName) {
          return { ...animal, addedToFavorites: false };
        }
        return animal;
      });
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favoriteAnimals={favoriteAnimals}
              setFavoriteAnimals={setFavoriteAnimals}
              onRemoveFavorite={handleRemoveFavorite}
            />
          }
        />
        <Route
          path="/"
          element={
            <AnimalPage
              animals={animals}
              favoriteAnimals={favoriteAnimals}
              onAddToFavorites={addAnimalToFavorites}
              onAddNewAnimal={addNewAnimal}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
