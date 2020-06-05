import React from 'react'
import { Container } from "react-bootstrap";

const RecipeDetailsBlock = ({title, text, color}) => {

    return (
        <div className="recipe-details__block block" style={{backgroundColor: color}}>
        <Container>
            <h3>{title}</h3>
            <p
              className="recipe-details__instructions-text text-justify"
              dangerouslySetInnerHTML={{ __html: text }}
            ></p>
        </Container>
      </div>
    )
}

export default RecipeDetailsBlock