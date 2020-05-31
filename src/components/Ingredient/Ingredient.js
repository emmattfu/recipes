import React from "react";
import { Col } from "react-bootstrap";

function Ingredient({ ingredient }) {
  
  return (
    <>
      <Col xs={6} sm={4} md={2}>
        <div className='ingredient text-center'>
        <img
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
            alt="ingredient"
            style={{ height: "100px" }}
          />
          <p>{ingredient.original}</p>
        </div>
      </Col>
    </>
  );
}

export default Ingredient;
