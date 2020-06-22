import React, { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./RecipeCard.css";
import heart from "../../icons/heart.png";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../../redux/actions";
import { ToastsContainer, ToastsStore } from "react-toasts";

function RecipeCard({ recipe }) {
  const favourites = useSelector((state) => state.favourites);
  const [isFavourite, setIsFavourite] = useState(
    favourites.some((el) => el.id === recipe.id)
  );

  const imgType = recipe.image.split(".");

  const dispatch = useDispatch();

  function addToFavourite() {
    if (favourites.some((el) => el.id === recipe.id)) {
      ToastsStore.error("You already have this recipe");
      return;
    }

    dispatch(addFavourite(recipe));
    localStorage.setItem("favourites", JSON.stringify([...favourites, recipe]));
    setIsFavourite(true)
    ToastsStore.success("Recipe added to favourites");
  }

  function removeFavouriteHandle(e) {
  
    const res = favourites.filter(el => el.id !== +e.target.value )
    dispatch(removeFavourite(res))
    localStorage.setItem("favourites", JSON.stringify(res));
    setIsFavourite(false)
    ToastsStore.success("Recipe removed from favourites");
    
  }

  return (
    <Col xs={12} sm={6} md={6} lg={4}>
      <Card className="recipe-card">
        <Card.Img
          variant="top"
          src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.${imgType[1]}`}
        />
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="recipe-card__buttons">
            
            {isFavourite ? <Button className="recipe-card__favourite remove" variant="danger" onClick={removeFavouriteHandle} value={recipe.id}>
              Remove favourite
            </Button>
            // : <Button className="recipe-card__favourite" variant="success" onClick={addToFavourite}>
            //   Add to favourite
            // </Button>} 
            : <img className="recipe-card__icon" src={heart} alt="heart" onClick={addToFavourite}/>}
            <NavLink to={`/recipe/${recipe.id}`}>
              <Button variant="primary">More info</Button>
            </NavLink>
          </div>
        </Card.Body>
      </Card>
      <ToastsContainer store={ToastsStore} />
    </Col>
  );
}

export default RecipeCard;
