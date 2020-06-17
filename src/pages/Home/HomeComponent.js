import React from "react";
import "./Home.css";
import Search from "../../components/Search/Search";
import { Container } from "react-bootstrap";

function HomeComponent() {
  return (
    <div className="home">
      <Container>
        <p className="home-text">What are you gonna cook?</p>

        <div className="home__search">
          <Search />
        </div>
      </Container>
    </div>
  );
}

export default HomeComponent;
