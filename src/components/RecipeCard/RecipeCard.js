import React, { useState, useEffect } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./RecipeCard.css";
import heart from "../../icons/heart.png";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite } from "../../redux/actions";
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

    favourites.push(recipe);
    localStorage.setItem("favourites", JSON.stringify(favourites));
    dispatch(addFavourite(recipe));
    ToastsStore.success("Recipe added to favourites");
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
            {/* <img className="recipe-card__icon" src={heart} alt="heart" onClick={addToFavourite}/> */}
            <Button className="recipe-card__favourite" variant="primary" onClick={addToFavourite}>
              {isFavourite ? "Remove favourite" : "Add to favorite"}
            </Button>
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
