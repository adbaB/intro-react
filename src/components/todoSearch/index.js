import React, { useContext } from "react";
import { TodoContext } from "../../context";
import "./TodoSearch.css";

function TodoSearch() {

  const {searchValue,setSearchValue} = useContext(TodoContext)  
  const onChangeValueSearch = (event) => {
  
    setSearchValue(event.target.value)
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={ onChangeValueSearch}
    />
  
    
    
  );
}

export { TodoSearch };
