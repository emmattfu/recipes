import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import "./App.css"


import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import HomeComponent from './pages/Home/HomeComponent'
import FavouriteRecipesComponent from "./pages/Favourite/FavouriteRecipes"
import Recipes from './pages/Recipes/Recipes'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <Switch>
          <Route exact component={HomeComponent} path="/" />
          <Route exact component={FavouriteRecipesComponent} path="/favourite" />
          <Route exact component={Recipes} path="/recipes" />
        </Switch>
       
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
