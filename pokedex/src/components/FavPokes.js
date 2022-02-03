import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const FavPokes = (props) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [load, setLoad] = useState(true);
  const deleteItem = async (item) => {
    let deleteUrl = `http://localhost:3001/favPokemon/${item.name}`;
    // console.log(deleteUrl);
    try {
      const deleteing = await axios.delete(
        // `http://localhost:3001/favPokemon/${item.name}}`
        deleteUrl
      );
      setLoad(true);
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/favPokemon");
      setAllPokemon(response.data.favPokemon);
    } catch (err) {
      console.log(err);
    }
  };
  const favPokes = () => {
    let favList = allPokemon.map((item, i) => {
      return (
        <li key={i}>
          {item.name}
          <button
            onClick={() => {
              deleteItem(item);
            }}
          >
            HeartToDelete
          </button>
        </li>
      );
    });
    return favList;
  };
  useEffect(() => {
    if (load) {
      getData();
      setLoad(false);
    }
  }, [deleteItem]);

  return (
    <div>
      <ul>{favPokes()}</ul>
    </div>
  );
};

export default FavPokes;
