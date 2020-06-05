import React, { useState } from "react";
import {Redirect} from 'react-router-dom';
import {getRecipes} from '../../redux/actions';
import { useDispatch } from "react-redux";
import './Search.css';

function Search() {
  const [product, setProduct] = useState("");
  const [redirect, setReirect] = useState(false);
  const dispatch = useDispatch()

  function onSubmitHandle(event) {
    event.preventDefault();
    document.querySelector('.search-input').value = ''
    dispatch(getRecipes(product));
    
    setReirect(true);
    
  }

  return (
    <>
      <form onSubmit={onSubmitHandle}>
        <input
          onChange={(e) => setProduct(e.target.value)}
          className="search-input"
          type="text"
          placeholder="Choose your dish"
        />
      </form>
      {redirect ? <Redirect to="/recipes" /> : ""}
    </>
  );
}

export default Search;
