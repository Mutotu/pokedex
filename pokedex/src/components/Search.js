import React from "react";

const Search = (props) => {
  return (
    <div>
      <input
        type='text'
        placeholder='search'
        value={props.searchTerm}
        onChange={(e) => {
          props.setSearchTerm(e.target.value);
          // console.log(props.searchTerm);
        }}
      />
    </div>
  );
};

export default Search;
