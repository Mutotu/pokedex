import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to='/all-pokemon'>All Pokemon</Link>
      <Link to='/fav-pokes'>Fav Pokes</Link>
    </div>
  );
};

export default NavBar;
