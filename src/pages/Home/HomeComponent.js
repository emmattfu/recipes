import React from "react";
import "./Home.css";
import Search from "../../components/Search/Search";


function HomeComponent() {

  return (
    <div className="home">
      <p className="home-text">What are you gonna cook?</p>

      <div className="home__search" >
       <Search />
      </div>
      

    </div>
  );
}

export default HomeComponent;
