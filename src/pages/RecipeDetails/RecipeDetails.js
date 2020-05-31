import React, { useState, useEffect } from "react";
import { getRecipeDetails, clearDetailedRecipe } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import Ingredient from "../../components/Ingredient/Ingredient";
import "./RecipeDetails.css";

function RecipeDetails({ match }) {
  const [id] = useState(match.params.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearDetailedRecipe());
    dispatch(getRecipeDetails(id));
  }, [id, dispatch]);

  const recipe = useSelector((store) => store.detailedRecipe);

  if (!recipe) {
    return <h1>Loading</h1>;
  }

  console.log(recipe);

  return (
    <Container>
      <div className="recipe-details">
        <img
          className="recipe-details__image"
          src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.${recipe.imageType}`}
          alt="dish"
        />
        <h2 className="recipe-details__title m-auto">{recipe.title}</h2>
        <p
          className="recipe-details__summary text-justify"
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        ></p>

        <div className="recipe-details__ingredients">
          <h3>Ingredients</h3>
          <Row>
            {recipe.extendedIngredients?.map((ingredient, index) => {
              return <Ingredient ingredient={ingredient} key={index} />;
            })}
          </Row>
        </div>
        <div className="recipe-details__">
          <h3>Instructions</h3>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </Container>
  );
}

export default RecipeDetails;
