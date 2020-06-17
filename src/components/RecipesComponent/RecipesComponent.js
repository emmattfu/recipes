import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Search from '../Search/Search';
import Loading from '../Loading';
import RecipeCard from '../RecipeCard/RecipeCard';
import Pagination from '../Pagination/Pagination'

function RecipesComponent() {

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

export default RecipesComponent