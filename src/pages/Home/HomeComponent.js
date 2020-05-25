import React from "react";
import "./Home.css";
import Search from "../../components/Search/Search";

function HomeComponent() {


  return (
    <div className="home">
      <p className="home-text">What are you gonna cook?</p>

    <Search />
    </div>
  );
}

export default HomeComponent;
