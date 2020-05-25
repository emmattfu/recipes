import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import './RecipeCard.css'


function RecipeCard({ recipe }) {
  return (
    <Col xs={12} sm={6} md={4}>
      <Card className='recipe-card' >
        <Card.Img
          variant="top"
          src={`https://spoonacular.com/recipeImages/${recipe.image}`}
          style={{height: '400px'}}
        />
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add to favourite</Button>
          <Button variant="primary">More info</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default RecipeCard;
