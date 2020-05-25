import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header-inner">
          <p>Get your recipe</p>

          <nav>
            <ul className="nav">
              <li className="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/favourite">Favourite</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
