import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import './RecipeCard.css'


function RecipeCard({ recipe }) {

  const imgType = recipe.image.split('.')
  return (
    <Col xs={12} sm={6} md={4}>
      <Card className='recipe-card' >
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
          <Button variant="primary">Add to favourite</Button>
          <NavLink to={`/recipe/${recipe.id}`}>
            <Button variant="primary" >More info</Button>
          </NavLink>
          
        </Card.Body>
      </Card>
    </Col>
  );
}

export default RecipeCard;
