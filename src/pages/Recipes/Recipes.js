import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Search from "../../components/Search/Search";
import Pagination from "../../components/Pagination/Pagination";
import Loading from '../../components/Loading';
import "./Recipes.css";

function Recipes() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(12);
  const recipes = useSelector((state) => state.recipes);


  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipe = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <div className="recipes">
        <Search />
        <Row>
          {!recipes ? <Loading /> : currentRecipe.map((el, i) => {
            return <RecipeCard recipe={el} key={i} />;
          })}
         
        </Row>
      </div>

      <Pagination
        recipesPerPage={recipesPerPage}
        totalRecipes={recipes.length}
        paginate={paginate}
      />
    </Container>
  );
}

export default Recipes;
