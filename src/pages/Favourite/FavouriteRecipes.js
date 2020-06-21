import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import PageTitle from '../../components/PageTitle/PageTitle';
import Search from '../../components/Search/Search'

function FavouriteRecipesComponent() {
    const favourites = useSelector(state => state.favourites)

  return (
    <Container>
      <Search />
      <PageTitle text="Your favourite recipes" />

      <Row>
      {favourites.length > 0 ? favourites.map(el => <RecipeCard recipe={el}  key={el.id}/>) 
      : <h1>There are no recipes :(</h1>}
        {/* {favourites.map(el => <RecipeCard recipe={el}  key={el.id}/>)} */}
      </Row>
     
    </Container>
  );
}

export default FavouriteRecipesComponent;
