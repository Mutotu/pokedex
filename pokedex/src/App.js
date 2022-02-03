import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllPokemon from "./components/AllPokemon";
import FavPokes from "./components/FavPokes";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <div className='App'>
      <NavBar />

      <Routes>
        <Route
          path='/all-pokemon'
          element={
            <AllPokemon setFavorites={setFavorites} favorites={favorites} />
          }
        />
        <Route
          path='/fav-pokes'
          element={
            <FavPokes setFavorites={setFavorites} favorites={favorites} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
