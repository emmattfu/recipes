import React from 'react'
import Loader from "react-loader-spinner";
import {Container} from 'react-bootstrap'

function Loading() {
    return (
        <Container>
        <div className="loading">
          <div className="loading__item">
          <Loader
            type="BallTriangle"
            color="orange"
            height={100}
            width={100}
            timeout={3000}
         
          />
          </div>
        </div>
      </Container>
    )
}

export default Loading