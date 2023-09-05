import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimalPage from "./AnimalPage";
import FavoritesPage from "./FavoritesPage";

const App = () => {
  const [favoriteAnimals, setFavoriteAnimals] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/favorites"
          element={<FavoritesPage favoriteAnimals={favoriteAnimals} />}
        />
        <Route
          path="/"
          element={
            <AnimalPage
              favoriteAnimals={favoriteAnimals}
              setFavoriteAnimals={setFavoriteAnimals}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
