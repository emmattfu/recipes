import React, { useState, useEffect } from "react";
import { getRecipeDetails, clearDetailedRecipe } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import Ingredient from "../../components/Ingredient/Ingredient";
import RecipeDetailsBlock from '../../components/RecipeDetailsBlock/RecipeDetailsBlock'
import "./RecipeDetails.css";
import Loading from "../../components/Loading";

function RecipeDetails({ match }) {
  const [id] = useState(match.params.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearDetailedRecipe());
    dispatch(getRecipeDetails(id));
  }, [id, dispatch]);

  const recipe = useSelector((store) => store.detailedRecipe);

  if (!recipe) {
    return <Loading />;
  }

  console.log(recipe);

  return (
    <div className="recipe-details">
      <img
        className="recipe-details__image"
        src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.${recipe.imageType}`}
        alt="dish"
      />
      <h2 className="recipe-details__title m-auto">{recipe.title}</h2>

      <RecipeDetailsBlock title="Summary" text={recipe.summary} color="#CFD2D7"/>     

      <Container>
        <div className="recipe-details__ingredients block">
          <h3>Ingredients</h3>
          <Row>
            {recipe.extendedIngredients?.map((ingredient, index) => {
              return <Ingredient ingredient={ingredient} key={index} />;
            })}
          </Row>
        </div>
      </Container>
      
      <RecipeDetailsBlock title="Instructions" text={recipe.instructions} color="#CFD2D7"/>      
      
      {recipe.winePairing?.pairingText
      ?  <RecipeDetailsBlock title="Is it good with wine?" text={recipe.winePairing.pairingText} color="white"/>
    : null }
    </div>
  );
}

export default RecipeDetails;
