import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../components/Search";

const AllPokemon = (props) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [searchTerm, setSeachTerm] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const site = "https://pokeapi.co/api/v2/pokemon?limit=15";

  const getData = async () => {
    try {
      const response = await axios.get(site);
      console.log(response);
      setAllPokemon(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const filterPokemon = () => {
    const filtered = allPokemon.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredPokemon(filtered);
  };

  const save = async (pokemon) => {
    try {
      const post = await axios.post("http://localhost:3001/favPokemon", {
        name: pokemon.name,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    filterPokemon();
  }, [searchTerm]);

  useEffect(() => {
    getData();
  }, []);

  const pokemonList = () => {
    let finalList;

    let wholeList = allPokemon.map((pokemon, i) => {
      return (
        <div>
          <li key={i}>
            {pokemon.name}
            <button
              onClick={() => {
                save(pokemon);
              }}
              stye={{ backgroundColor: "red" }}
            ></button>
          </li>
        </div>
      );
    });

    let filteredList = filteredPokemon.map((pokemon, i) => {
      return (
        <div>
          <li key={i}>
            {pokemon.name}
            <button
              onClick={() => {
                save(pokemon);
              }}
            >
              Heart
            </button>
          </li>
        </div>
      );
    });

    if (searchTerm === "") {
      finalList = wholeList;
    } else {
      finalList = filteredList;
    }
    return finalList;
  };

  return (
    <div>
      <h1>All Pokemon</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSeachTerm} />
      <ul>{pokemonList()}</ul>
    </div>
  );
};

export default AllPokemon;

///////////////////////////////
