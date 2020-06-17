import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import RecipeCard from '../../components/RecipeCard/RecipeCard'

function FavouriteRecipesComponent() {
    const favourites = useSelector(state => state.favourites)

  return (
    <Container>
      <h1>FavouriteRecipeS component</h1>
        {favourites.map(el => <RecipeCard recipe={el}  key={el.id}/>)}
    </Container>
  );
}

export default FavouriteRecipesComponent;
