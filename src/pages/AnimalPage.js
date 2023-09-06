// AnimalPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimalCard from "../components/AnimalCard";

const AnimalPage = ({ animals, onAddToFavorites, onAddNewAnimal }) => {
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    age: "",
    type: "Cat",
    image: "",
  });

  const handleAddNewAnimal = () => {
    if (newAnimal.name && newAnimal.age && newAnimal.image) {
      onAddNewAnimal({ ...newAnimal, addedToFavorites: false });
      setNewAnimal({
        name: "",
        age: "",
        type: "Cat",
        image: "",
      });
    }
  };

  return (
    <div>
      <h1>Animal Page</h1>
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>
            <AnimalCard animal={animal} onAddToFavorites={onAddToFavorites} />
          </li>
        ))}
      </ul>
      <Link to="/favorites">Go to Favorites</Link>
      <div>
        <h2>Add New Animal</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={newAnimal.name}
            onChange={(e) =>
              setNewAnimal({ ...newAnimal, name: e.target.value })
            }
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            value={newAnimal.age}
            onChange={(e) =>
              setNewAnimal({ ...newAnimal, age: e.target.value })
            }
          />
        </div>
        <div>
          <label>Type:</label>
          <select
            value={newAnimal.type}
            onChange={(e) =>
              setNewAnimal({ ...newAnimal, type: e.target.value })
            }
          >
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </select>
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={newAnimal.image}
            onChange={(e) =>
              setNewAnimal({ ...newAnimal, image: e.target.value })
            }
          />
        </div>
        <button onClick={handleAddNewAnimal}>Add Animal</button>
      </div>
    </div>
  );
};

export default AnimalPage;
